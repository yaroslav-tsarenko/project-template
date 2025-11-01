import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { Order } from "@/backend/models/order.model";
import { csFetch } from "@/backend/cardserv/client";
import { randomUUID } from "crypto";
import { requireAuth } from "@/backend/middlewares/auth.middleware";

// Helper delay
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        // ✅ Try to read session email securely from JWT cookie
        let sessionEmail = "client@example.com";
        try {
            const session = await requireAuth(req);
            if (session?.email) sessionEmail = session.email;
        } catch {
            console.warn("⚠️ No valid auth token, using fallback email");
        }

        // 🧾 Parse request body
        const body = await req.json();

        // 🌍 Prepare IP and User-Agent for CardServ sandbox
        const ipHdr =
            req.headers.get("x-forwarded-for") ||
            req.headers.get("x-real-ip") ||
            "";
        let clientIp = ipHdr.split(",")[0].trim();
        if (!clientIp || clientIp === "::1" || clientIp.startsWith("::ffff")) {
            clientIp = "2.58.95.68"; // Sandbox requires IPv4
        }

        const ua = req.headers.get("user-agent") || "Mozilla/5.0";

        // 🆔 Generate unique merchant order ID
        const orderMerchantId = randomUUID();
        const currency = process.env.CARDSERV_CURRENCY || "EUR";

        // ==============================
        // 1️⃣ Create SALE payload
        // ==============================
        const saleBody = {
            order: {
                orderMerchantId,
                orderDescription:
                    body.description || `Order #${Date.now()}`,
                orderAmount: Number(body.amount).toFixed(2),
                orderCurrencyCode: currency,
            },
            browser: {
                ipAddress: clientIp,
                acceptHeader: "text/html,application/json",
                colorDepth: 24,
                javascriptEnabled: "true",
                acceptLanguage: "en-US",
                screenHeight: 1080,
                screenWidth: 1920,
                timeZone: -120,
                userAgent: ua,
                javaEnabled: "false",
            },
            customer: {
                firstname: "Customer",
                lastname: "User",
                customerEmail: sessionEmail,
            },
            card: {
                cardNumber: body.cardNumber,
                cvv2: body.cvv,
                expireMonth: String(body.expiry).split("/")[0],
                expireYear: `20${String(body.expiry).split("/")[1]}`,
                cardPrintedName: body.cardholder,
            },
            urls: {
                resultUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/result?omId=${orderMerchantId}`,
                webhookUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/cardserv/webhook`,
            },
        };

        // ==============================
        // 2️⃣ Send SALE request to CardServ
        // ==============================
        const saleRes = await csFetch("/api/payments/sale", saleBody, "SALE");

        // 💾 Save order to MongoDB immediately
        await Order.create({
            orderMerchantId,
            amount: Number(body.amount),
            currency,
            description: body.description,
            email: sessionEmail,
            tokens: body.tokens,
            status: saleRes?.orderState || "PROCESSING",
            raw: { sale: saleRes },
        });

        // ==============================
        // 3️⃣ Redirect or 3DS check
        // ==============================
        if (saleRes?.outputRedirectToUrl) {
            console.log("[SALE] redirect immediate");
            return NextResponse.json({
                ok: true,
                data: { redirectUrl: saleRes.outputRedirectToUrl },
            });
        }

        // ==============================
        // 4️⃣ Poll status up to 4 times
        // ==============================
        const backoffs = [1000, 1500, 2000, 3000];
        let lastStatus: any = null;

        for (let i = 0; i < backoffs.length; i++) {
            await sleep(backoffs[i]);

            lastStatus = await csFetch(
                "/api/payments/status",
                {
                    orderMerchantId,
                    orderSystemId: saleRes?.orderSystemId,
                },
                `STATUS#${i + 1}`
            );

            // update order
            try {
                const order = await Order.findOne({ orderMerchantId });
                if (order) {
                    order.status = lastStatus?.orderState || order.status;
                    order.raw = { ...(order.raw || {}), [`status_${i + 1}`]: lastStatus };
                    await order.save();
                }
            } catch (err) {
                console.warn("⚠️ Failed to update order during polling:", err);
            }

            if (lastStatus?.outputRedirectToUrl) {
                console.log("[STATUS] got outputRedirectToUrl");
                return NextResponse.json({
                    ok: true,
                    data: { redirectUrl: lastStatus.outputRedirectToUrl },
                });
            }

            if (lastStatus?.threeDSAuth?.acsUrl) {
                console.log("[STATUS] got 3DS -> returning HTML form");
                const { acsUrl, paReq } = lastStatus.threeDSAuth;
                const termUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/result?omId=${orderMerchantId}`;
                const html = `
          <html><body onload="document.forms[0].submit()">
            <form action="${acsUrl}" method="POST">
              <input type="hidden" name="PaReq" value="${paReq}" />
              <input type="hidden" name="TermUrl" value="${termUrl}" />
            </form>
          </body></html>`;
                return new NextResponse(html, { headers: { "Content-Type": "text/html" } });
            }
        }

        // ==============================
        // 5️⃣ Fallback if no redirect after 4 polls
        // ==============================
        console.warn("[STATUS] no redirect or 3DS received yet");
        return NextResponse.json({
            ok: true,
            data: {
                message: "Redirect URL not provided yet. Please retry later.",
                orderState:
                    lastStatus?.orderState || saleRes?.orderState || "PROCESSING",
            },
        });
    } catch (e: any) {
        console.error("💥 CardServ SALE error:", e);
        return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
    }
}
