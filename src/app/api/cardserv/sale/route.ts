import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { Order } from "@/backend/models/order.model";
import { csFetch } from "@/backend/cardserv/client";
import { randomUUID } from "crypto";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { getCardServCfg } from "@/backend/cardserv/config";

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export async function POST(req: NextRequest) {
    try {
        await connectDB();

        let sessionEmail = "client@example.com";
        try {
            const session = await requireAuth(req);
            if (session?.email) sessionEmail = session.email;
        } catch {}

        const body = await req.json();
        const currency = body.currency || "EUR";
        const cfg = getCardServCfg(currency);

        function normalizeIp(ip?: string | null) {
            if (!ip) return "8.8.8.8";

            // IPv6 localhost
            if (ip === "::1") return "8.8.8.8";

            // IPv6 mapped IPv4 ::ffff:127.0.0.1
            if (ip.startsWith("::ffff:")) {
                const v4 = ip.replace("::ffff:", "");
                if (v4.length >= 7) return v4;
            }

            // normal IPv4
            if (ip.length >= 7 && ip.length <= 45) return ip;

            return "8.8.8.8";
        }


        const rawIp =
            req.headers.get("x-forwarded-for")?.split(",")[0] ||
            req.headers.get("x-real-ip");

        const ip = normalizeIp(rawIp);


        const ua = req.headers.get("user-agent") || "Mozilla/5.0";

        const orderMerchantId = randomUUID();

        const saleBody = {
            order: {
                orderMerchantId,
                orderDescription: body.description || "Top-up",
                orderAmount: Number(body.amount).toFixed(2),
                orderCurrencyCode: cfg.CURRENCY,
                challengeIndicator: "04",
            },
            browser: {
                ipAddress: ip,
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
                firstname: body.cardholder?.split(" ")[0] || "Customer",
                lastname: body.cardholder?.split(" ")[1] || "User",
                customerEmail: sessionEmail,
                address: {
                    countryCode: cfg.COUNTRY,
                    city: body.city,
                    zipCode: body.postalCode,
                    line1: body.address,
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

        const saleRes = await csFetch(
            "/api/payments/sale",
            saleBody,
            currency,
            "SALE",
            "SALE"
        );


        await Order.create({
            orderMerchantId,
            amount: Number(body.amount),
            currency,
            description: body.description,
            email: sessionEmail,
            tokens: body.tokens,
            status: saleRes.orderState || "PROCESSING",
            raw: { sale: saleRes },
        });

        if (saleRes?.outputRedirectToUrl) {
            return NextResponse.json({
                ok: true,
                data: { redirectUrl: saleRes.outputRedirectToUrl },
            });
        }

        await sleep(1500);

        const status = await csFetch(
            "/api/payments/status",
            {
                orderMerchantId,
                orderSystemId: saleRes.orderSystemId,
            },
            currency,
            "STATUS",
            "STATUS"
        );

        return NextResponse.json({
            ok: true,
            data: { redirectUrl: status.redirectData?.redirectUrl },
        });
    } catch (e: any) {
        console.error("💥 SALE error:", e);
        return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
    }
}
