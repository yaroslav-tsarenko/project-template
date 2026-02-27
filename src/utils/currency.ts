export type Currency = "GBP" | "USD" | "EUR" | "AUD" | "CAD" | "NZD";

export const DISPLAY_CURRENCIES: Currency[] = [
    "GBP",
    "USD",
    "EUR",
    "AUD",
    "CAD",
    "NZD",
];

export const CURRENCY_SYMBOL: Record<Currency, string> = {
    GBP: "£",
    USD: "$",
    EUR: "€",
    AUD: "$",
    CAD: "$",
    NZD: "$",
};

export const GBP_FALLBACK_RATES: Record<Currency, number> = {
    GBP: 1,
    USD: 1.343,
    EUR: 1.145,
    AUD: 2.05,
    CAD: 1.72,
    NZD: 2.22,
};

export function normalizeCurrencyForRequest(currency: Currency): "GBP" | "USD" | "EUR" {
    if (currency === "AUD" || currency === "CAD" || currency === "NZD") return "GBP";
    return currency;
}

export function formatMoney(amount: number, currency: Currency, opts?: { withCode?: boolean }) {
    const symbol = CURRENCY_SYMBOL[currency];
    const formatted = `${symbol}${amount.toFixed(2)}`;
    return opts?.withCode ? `${formatted} ${currency}` : formatted;
}

