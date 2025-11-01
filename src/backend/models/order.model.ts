import mongoose, { Schema, Document } from "mongoose";

export type OrderState =
    | "PROCESSING" | "APPROVED" | "DECLINED" | "ERROR" | "FILTERED"
    | "UNKNOWN" | "CHAIN_STEP";

export interface OrderDocument extends Document {
    orderMerchantId: string;     // генеруємо на своїй стороні
    orderSystemId?: string;      // присвоює CardServ
    amount: number;
    currency: string;
    description?: string;
    email?: string;
    tokens?: number;
    status: OrderState;
    outputRedirectToUrl?: string; // куди редіректити клієнта на 3DS/HPP
    resultUrl?: string;           // наш result url
    webhookUrl?: string;          // наш webhook url
    raw?: any;                    // сирі відповіді/запити для аудитів
    createdAt: Date;
    updatedAt: Date;
}

const orderSchema = new Schema<OrderDocument>({
    orderMerchantId: { type: String, unique: true, index: true, required: true },
    orderSystemId: { type: String },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    description: String,
    email: String,
    tokens: Number,
    status: { type: String, default: "PROCESSING" },
    outputRedirectToUrl: String,
    resultUrl: String,
    tokensAdded: { type: Boolean, default: false },
    webhookUrl: String,
    raw: Schema.Types.Mixed,
}, { timestamps: true });

export const Order =
    mongoose.models.Order || mongoose.model<OrderDocument>("Order", orderSchema);
