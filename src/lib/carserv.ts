import crypto from "crypto";

const BASE_URL = process.env.CARDSERV_BASE_URL!;
const BEARER = process.env.CARDSERV_BEARER_TOKEN!;
const MERCHANT = process.env.CARDSERV_MERCHANT_ID!;
const REQUESTOR = process.env.CARDSERV_REQUESTOR_ID!;
const CURRENCY = process.env.CARDSERV_CURRENCY || "EUR";

// 🔹 Створення ордера
export async function createCardServOrder(body: {
    amount: number;
    currency?: string;
    description: string;
    email: string;
    tokens: number;
}) {
    const payload = {
        amount: Math.round(body.amount * 100), // у центах
        currency: body.currency || CURRENCY,
        orderType: "SALE",
        merchantId: MERCHANT,
        requestorId: REQUESTOR,
        description: body.description,
        email: body.email,
        successUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
        failUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-failed`,
    };

    const res = await fetch(`${BASE_URL}/orders`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${BEARER}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to create CardServ order");

    return data;
}

// 🔹 Отримання статусу
export async function getCardServStatus(orderMerchantId: string) {
    const res = await fetch(`${BASE_URL}/orders/${orderMerchantId}`, {
        headers: { Authorization: `Bearer ${BEARER}` },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch status");
    return data;
}
