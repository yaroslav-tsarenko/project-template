import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { Order } from "@/backend/models/order.model";
import { csFetch } from "@/backend/cardserv/client";
import { randomUUID } from "crypto";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { getCardServCfg } from "@/backend/cardserv/config";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function pickRedirectUrl(data: any): string | null {
    return (
        data?.redirectData?.redirectUrl ||
        data?.redirectData?.threeDSRedirectUrl ||
        data?.outputRedirectToUrl ||
        data?.redirectUrl ||
        null
    );
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        let email = "client@example.com";
        try {
            const session = await requireAuth(req);
            if (session?.email) email = session.email;
        } catch {}

        const body = await req.json();
        const currency = (body.currency || "EUR") as string;
        const cfg = getCardServCfg(currency);

        const orderMerchantId = randomUUID();

        // ✅ ПОВНИЙ PAYLOAD — 1:1 ЯК У ПРАЦЮЮЧОМУ ПРИКЛАДІ
        const saleBody = {
            order: {
                orderMerchantId,
                orderDescription: body.description || "Top-up",
                orderAmount: Number(body.amount).toFixed(2),
                orderCurrencyCode: cfg.CURRENCY,
                challengeIndicator: "04",
            },
            browser: {
                ipAddress: "8.8.8.8",
                acceptHeader:
                    "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                colorDepth: 32,
                javascriptEnabled: "true",
                acceptLanguage: "en-US",
                screenHeight: 1080,
                screenWidth: 1920,
                timeZone: -180,
                userAgent:
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome Safari",
                javaEnabled: "false",
            },
            customer: {
                firstname: body.cardholder.split(" ")[0] || "John",
                lastname: body.cardholder.split(" ")[1] ?? "Doe",
                customerEmail: email,
                address: {
                    countryCode: cfg.COUNTRY,
                    zipCode: body.postalCode || "00000",
                    city: body.city || "London",
                    line1: body.address || "Unknown street",
                },
            },
            card: {
                cardNumber: body.cardNumber.replace(/\s/g, ""),
                cvv2: body.cvv,
                expireMonth: body.expiry.split("/")[0],
                expireYear: `20${body.expiry.split("/")[1]}`,
                cardPrintedName: body.cardholder,
            },
            urls: {
                resultUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/result?omId=${orderMerchantId}`,
                webhookUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/cardserv/webhook`,
            },
        };

        // 1️⃣ SALE
        const saleRes = await csFetch(
            "/api/payments/sale",
            saleBody,
            currency,
            "SALE"
        );

        const orderSystemId =
            saleRes?.orderSystemId || saleRes?.order?.orderSystemId || null;

        // 2️⃣ Save order
        await Order.create({
            orderMerchantId,
            amount: Number(body.amount),
            currency,
            description: body.description,
            email,
            tokens: body.tokens,
            status: saleRes.orderState || "PROCESSING",
            raw: { sale: saleRes },
        });

        // 3️⃣ Status polling (як у прикладі)
        let redirectUrl: string | null = null;
        let statusRes: any = null;

        for (let i = 0; i < 2; i++) {
            await sleep(i === 0 ? 1200 : 1800);

            statusRes = await csFetch(
                "/api/payments/status",
                {
                    orderMerchantId,
                    orderSystemId: orderSystemId ?? undefined,
                },
                currency,
                "STATUS"
            );

            redirectUrl = pickRedirectUrl(statusRes);
            if (redirectUrl) break;
            if (["APPROVED", "DECLINED"].includes(statusRes?.orderState)) break;
        }

        if (statusRes) {
            await Order.updateOne(
                { orderMerchantId },
                {
                    $set: {
                        status: statusRes.orderState || "PROCESSING",
                        "raw.status": statusRes,
                    },
                }
            );
        }

        return NextResponse.json({
            ok: true,
            data: {
                orderMerchantId,
                orderSystemId,
                state: statusRes?.orderState || saleRes?.orderState || "PROCESSING",
                redirectUrl,
            },
        });
    } catch (e: any) {
        console.error("💥 CardServ SALE error:", e);
        return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
    }
}
