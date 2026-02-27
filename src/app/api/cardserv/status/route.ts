import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { Order } from "@/backend/models/order.model";
import { csFetch } from "@/backend/cardserv/client";

function normalizeCurrency(currency?: string) {
    const c = (currency || "EUR").toUpperCase();
    if (c === "AUD" || c === "CAD" || c === "NZD") return "GBP";
    if (c !== "GBP" && c !== "EUR" && c !== "USD") return "GBP";
    return c;
}

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
        const { orderMerchantId } = await req.json();
        await connectDB();

        const order = await Order.findOne({ orderMerchantId });
        if (!order) throw new Error("Order not found");

        const data = await csFetch(
            "/api/payments/status",
            {
                orderMerchantId,
                orderSystemId: order.raw?.sale?.orderSystemId,
            },
            normalizeCurrency(order.currency),
            "STATUS"
        );

        const redirectUrl = pickRedirectUrl(data);

        order.status = data.orderState || order.status;
        order.raw.status = data;
        await order.save();

        return NextResponse.json({
            ok: true,
            data: {
                ...data,
                redirectUrl, // ✅ завжди в одному місці
            },
        });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
    }
}
