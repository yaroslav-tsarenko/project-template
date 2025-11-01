// backend/cardserv/client.ts
export async function csFetch(path: string, body: any, tag = "CS") {
    const baseUrl = (process.env.CARDSERV_BASE_URL || "https://test.cardserv.io").replace(/\/+$/, "");
    const url = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}/${process.env.CARDSERV_REQUESTOR_ID}`;

    console.log(`[${tag}] ➡️  POST ${url}`);
    console.log(`[${tag}] body:`, JSON.stringify(body, null, 2));

    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.CARDSERV_BEARER_TOKEN}`,
            "Content-Type": "application/json",
            "X-Debug": "1",
            "Cache-Control": "no-store",
            Pragma: "no-cache",
        },
        body: JSON.stringify(body),
    });

    const text = await res.text();
    console.log(`[${tag}] ⬅️  status=${res.status} ${res.statusText}`);
    console.log(`[${tag}] raw: ${text}`);

    try {
        const data = JSON.parse(text);
        if (data?.errorCode) console.error(`[${tag}] ⚠️  errorCode:`, data);
        return data;
    } catch {
        throw new Error("CardServ returned non-JSON: " + text.slice(0, 400));
    }
}
