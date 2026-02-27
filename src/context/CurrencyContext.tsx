"use client"
import React, {createContext, useContext, useEffect, useMemo, useState, ReactNode} from "react";
import type { Currency } from "@/utils/currency";

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (c: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = () => {
    const ctx = useContext(CurrencyContext);
    if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
    return ctx;
};

export const CurrencyProvider = ({children}: { children: ReactNode }) => {
    const [currency, setCurrencyState] = useState<Currency>("GBP");

    useEffect(() => {
        try {
            const saved = localStorage.getItem("currency") as Currency | null;
            if (saved) {
                setCurrencyState(saved);
            }
        } catch {}
    }, []);

    const setCurrency = (c: Currency) => {
        setCurrencyState(c);
        try {
            localStorage.setItem("currency", c);
        } catch {}
    };

    const value = useMemo(() => ({ currency, setCurrency }), [currency]);

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};
