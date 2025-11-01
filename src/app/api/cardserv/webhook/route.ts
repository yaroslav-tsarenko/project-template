import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { Order } from "@/backend/models/order.model";
import { User } from "@/backend/models/user.model";
import mongoose from "mongoose";

export async function POST(req: NextRequest) {
    try {
        const payload = await req.json();
        await connectDB();

        const omId =
            payload?.order?.orderMerchantId ||
            payload?.orderMerchantId ||
            payload?.merchantOrderId;
        const state =
            payload?.orderState || payload?.state || payload?.status || "UNKNOWN";

        if (!omId) throw new Error("Missing orderMerchantId in webhook payload");

        const order = await Order.findOne({ orderMerchantId: omId });
        if (!order) throw new Error(`Order not found: ${omId}`);

        // Update order status
        order.status = state;
        order.raw = { ...(order.raw || {}), webhook: payload };
        await order.save();

        console.log("🧾 Webhook received:", { omId, state });

        // If approved → add tokens to user
        if (state === "APPROVED") {
            const user = await User.findOne({ email: order.email });
            if (!user) {
                console.warn(`⚠️ User not found for ${order.email}`);
            } else {
                user.tokens = (user.tokens || 0) + (order.tokens || 0);
                await user.save();

                console.log(
                    `✅ Tokens added: +${order.tokens} to ${user.email} (new total: ${user.tokens})`
                );
            }
        }

        return NextResponse.json({ ok: true });
    } catch (e: any) {
        console.error("💥 Webhook error:", e);
        return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
    }
}
