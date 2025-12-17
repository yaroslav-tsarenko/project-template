import { getCardServCfg } from "./config";

type CardServMode = "SALE" | "STATUS";

export async function csFetch(
    path: string,
    body: any,
    currency = "EUR",
    mode: CardServMode = "SALE"
) {
    const cfg = getCardServCfg(currency);
    const baseUrl = process.env.CARDSERV_BASE_URL!.replace(/\/+$/, "");

    // ✅ LIVE CardServ: SALE і STATUS ОБИДВА з requestorId
    const url = `${baseUrl}${path}/${cfg.REQUESTOR_ID}`;

    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${cfg.TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const text = await res.text();
    let data: any;
    try { data = JSON.parse(text); } catch {}

    if (!res.ok) {
        throw new Error(
            `[CardServ ${mode} ERROR ${res.status}] ${
                data?.errorMessage || data?.message || text
            }`
        );
    }

    return data;
}
