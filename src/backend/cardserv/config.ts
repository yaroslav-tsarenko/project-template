export type CardServCurrency = "GBP" | "EUR" | "USD";

export const CARD_SERV_CONFIG: Record<
    CardServCurrency,
    {
        REQUESTOR_ID: string;
        TOKEN: string;
        CURRENCY: CardServCurrency;
        COUNTRY: string;
    }
> = {
    GBP: {
        REQUESTOR_ID: process.env.CARDSERV_REQUESTOR_ID_GBP!,
        TOKEN: process.env.CARDSERV_BEARER_TOKEN_GBP!,
        CURRENCY: "GBP",
        COUNTRY: "GB",
    },
    EUR: {
        REQUESTOR_ID: process.env.CARDSERV_REQUESTOR_ID_EUR!,
        TOKEN: process.env.CARDSERV_BEARER_TOKEN_EUR!,
        CURRENCY: "EUR",
        COUNTRY: "DE",
    },
    USD: {
        REQUESTOR_ID: process.env.CARDSERV_REQUESTOR_ID_USD!,
        TOKEN: process.env.CARDSERV_BEARER_TOKEN_USD!,
        CURRENCY: "USD",
        COUNTRY: "US",
    },
};

export function getCardServCfg(currency?: string) {
    return CARD_SERV_CONFIG[(currency as CardServCurrency) || "EUR"];
}
