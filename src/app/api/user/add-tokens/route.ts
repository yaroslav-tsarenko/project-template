import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { Order } from "@/backend/models/order.model";
import { User } from "@/backend/models/user.model";

export async function POST(req: NextRequest) {
    try {
        const { orderMerchantId } = await req.json();
        if (!orderMerchantId) throw new Error("Missing orderMerchantId");

        await connectDB();

        const order = await Order.findOne({ orderMerchantId });
        if (!order) throw new Error(`Order not found: ${orderMerchantId}`);

        const user = await User.findOne({ email: order.email });
        if (!user) throw new Error(`User not found for ${order.email}`);

        const tokensToAdd = order.tokens || 0;

        // Add tokens if not already counted (prevent double-adding)
        if (order.status === "APPROVED" && !order.tokensAdded) {
            user.tokens = (user.tokens || 0) + tokensToAdd;
            order.tokensAdded = true;
            await user.save();
            await order.save();

            console.log(`✅ Tokens added manually: +${tokensToAdd} for ${user.email}`);
            return NextResponse.json({ ok: true, added: tokensToAdd });
        }

        return NextResponse.json({
            ok: false,
            message: "Tokens already added or order not approved",
        });
    } catch (e: any) {
        console.error("💥 addTokens error:", e);
        return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
    }
}
