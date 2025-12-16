import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { Order } from "@/backend/models/order.model";
import { csFetch } from "@/backend/cardserv/client";

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
            order.currency,
            "STATUS"
        );

        order.status = data.orderState || "PROCESSING";
        order.raw = { ...(order.raw || {}), status: data };
        await order.save();

        return NextResponse.json({ ok: true, data });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
    }
}
