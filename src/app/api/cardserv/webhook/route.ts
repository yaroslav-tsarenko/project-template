import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { Order } from "@/backend/models/order.model";
import { User } from "@/backend/models/user.model";

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();
        await connectDB();

        const orderMerchantId =
            payload?.order?.orderMerchantId ||
            payload?.orderMerchantId;

        const state =
            payload?.orderState || payload?.status || "UNKNOWN";

        if (!orderMerchantId) throw new Error("Missing orderMerchantId");

        const order = await Order.findOne({ orderMerchantId });
        if (!order) throw new Error("Order not found");

        order.status = state;
        order.raw.webhook = payload;
        await order.save();

        if (state === "APPROVED") {
            const user = await User.findOne({ email: order.email });
            if (user) {
                user.tokens = (user.tokens || 0) + (order.tokens || 0);
                await user.save();
            }
        }

        return NextResponse.json({ ok: true });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
    }
}
