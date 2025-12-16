import { getCardServCfg } from "./config";

export async function csFetch(
    path: string,
    body: any,
    currency = "EUR",
    tag = "CS"
) {
    const cfg = getCardServCfg(currency);

    const baseUrl = (process.env.CARDSERV_BASE_URL || "https://live.cardserv.io")
        .replace(/\/+$/, "");

    const url = `${baseUrl}${path}/${cfg.REQUESTOR_ID}`;

    console.log(`\n[${tag}] ➡️ POST ${url}`);
    console.log(`[${tag}] currency=${currency}`);
    console.log(`[${tag}] headers: Bearer ****${cfg.TOKEN.slice(-6)}`);
    console.log(`[${tag}] body:\n`, JSON.stringify(body, null, 2));

    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${cfg.TOKEN}`,
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
            Pragma: "no-cache",
        },
        body: JSON.stringify(body),
    });

    const text = await res.text();

    console.log(`\n[${tag}] ⬅️ STATUS ${res.status} ${res.statusText}`);
    console.log(`[${tag}] RAW RESPONSE:\n`, text);

    let data: any = null;
    try {
        data = JSON.parse(text);
    } catch {
        // CardServ sometimes returns plain text
    }

    if (!res.ok) {
        throw new Error(
            `[CardServ ${tag} ERROR ${res.status}] ` +
            (data?.errorDescription ||
                data?.errorMessage ||
                data?.message ||
                text)
        );
    }

    return data;
}
