import { getCardServCfg } from "./config";

type CardServMode = "SALE" | "STATUS";

export async function csFetch(
    path: string,
    body: any,
    currency = "EUR",
    mode: CardServMode = "SALE",
    tag = "CS"
) {
    const cfg = getCardServCfg(currency);

    const baseUrl = (process.env.CARDSERV_BASE_URL || "https://live.cardserv.io")
        .replace(/\/+$/, "");

    // 🔑 URL RULES
    const url =
        mode === "SALE"
            ? `${baseUrl}${path}/${cfg.REQUESTOR_ID}`
            : `${baseUrl}${path}`;

    console.log(`\n[${tag}] ➡️ POST ${url}`);
    console.log(`[${tag}] mode=${mode} currency=${currency}`);
    console.log(`[${tag}] headers: Bearer ****${cfg.TOKEN.slice(-6)}`);
    console.log(`[${tag}] body:\n`, JSON.stringify(body, null, 2));

    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${cfg.TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const text = await res.text();
    console.log(`\n[${tag}] ⬅️ STATUS ${res.status} ${res.statusText}`);
    console.log(`[${tag}] RAW RESPONSE:\n`, text);

    let data: any = null;
    try {
        data = JSON.parse(text);
    } catch {}

    if (!res.ok) {
        throw new Error(
            `[CardServ ${mode} ERROR ${res.status}] ` +
            (data?.errorMessage ||
                data?.errorDescription ||
                data?.message ||
                text)
        );
    }

    return data;
}
