import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/backend/config/db";
import { Order } from "@/backend/models/order.model";
import { requireAuth } from "@/backend/middlewares/auth.middleware";

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const session = await requireAuth(req);
        const email =
            req.nextUrl.searchParams.get("email") || session?.email;
        if (!email) throw new Error("Email not provided");

        const transactions = await Order.find({ email })
            .sort({ createdAt: -1 })
            .lean();

        return NextResponse.json({ ok: true, transactions });
    } catch (e: any) {
        console.error("💥 Transactions fetch error:", e);
        return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
    }
}
