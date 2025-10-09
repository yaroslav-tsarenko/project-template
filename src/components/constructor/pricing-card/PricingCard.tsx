"use client";

import React, { useEffect, useState } from "react";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import Input from "@mui/joy/Input";
import { useCurrency } from "@/context/CurrencyContext";

interface PricingCardProps {
    variant?: "basic" | "highlight" | "premium";
    title: string;
    price: string; // у фунтах або "dynamic"
    tokens: number;
    description: string;
    features: string[];
    buttonText: string;
    buttonLink?: string;
}

const currencyConfig = {
    GBP: { symbol: "£" },
    USD: { symbol: "$" },
    EUR: { symbol: "€" },
} as const;

const MIN_CUSTOM_AMOUNT = 1;
const MAX_CUSTOM_AMOUNT = 9999;

// Fallback курси до фунта
const FALLBACK_RATES = {
    GBP: 1,
    USD: 1.343, // 1 GBP = 1.343 USD
    EUR: 1.145, // 1 GBP = 1.145 EUR
};

const TOKENS_PER_GBP = 100;

const PricingCard: React.FC<PricingCardProps> = ({
                                                     variant = "basic",
                                                     title,
                                                     price,
                                                     tokens,
                                                     description,
                                                     features,
                                                     buttonText,
                                                 }) => {
    const { showAlert } = useAlert();
    const user = useUser();
    const { currency } = useCurrency();

    const { symbol } = currencyConfig[currency];
    const [customAmount, setCustomAmount] = useState<number>(MIN_CUSTOM_AMOUNT);
    const [rate, setRate] = useState<number>(FALLBACK_RATES[currency]);

    // завантажуємо курс для актуальної валюти
    useEffect(() => {
        const fetchRate = async () => {
            try {
                const res = await fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=${currency}`);
                if (!res.ok) throw new Error("Failed to fetch rates");
                const data = await res.json();
                const r = data?.rates?.[currency];
                setRate(r || FALLBACK_RATES[currency]);
            } catch {
                console.warn("Using fallback rates");
                setRate(FALLBACK_RATES[currency]);
            }
        };
        fetchRate();
    }, [currency]);

    // 🔹 функція для підрахунку токенів на основі введеної валюти
    const convertToTokens = (amount: number): number => {
        const amountInGBP = amount / rate; // конвертуємо у фунти
        return Math.floor(amountInGBP * TOKENS_PER_GBP);
    };

    // 🔹 функція покупки
    const handleBuy = async () => {
        if (!user) {
            showAlert("Please sign up", "You need to be signed in to buy tokens", "info");
            setTimeout(() => {
                window.location.href = "/sign-up";
            }, 1500);
            return;
        }

        if (price === "dynamic" && customAmount < MIN_CUSTOM_AMOUNT) {
            showAlert(
                `Minimum amount is ${symbol}${MIN_CUSTOM_AMOUNT.toFixed(2)}`,
                "Please enter a higher amount",
                "warning"
            );
            return;
        }

        try {
            const tokenAmount = price === "dynamic" ? convertToTokens(customAmount) : tokens;

            const res = await fetch("/api/user/buy-tokens", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ amount: tokenAmount }),
            });

            if (!res.ok) throw new Error("Failed to buy tokens");

            const data = await res.json();
            showAlert("Success!", `You purchased ${tokenAmount} tokens.`, "success");
            console.log("Updated user:", data.user);
        } catch (err: any) {
            showAlert("Error", err.message || "Something went wrong", "error");
        }
    };

    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            {variant === "highlight" && (
                <div className={styles.bestChoiceLabel}>⭐ Best Choice</div>
            )}
            <h3 className={styles.title}>{title}</h3>

            {/* Якщо динамічна покупка */}
            {price === "dynamic" ? (
                <>
                    <Input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value.toString().length > 7) return;
                            setCustomAmount(Math.max(Math.min(value, MAX_CUSTOM_AMOUNT), MIN_CUSTOM_AMOUNT));
                        }}
                        slotProps={{ input: { min: MIN_CUSTOM_AMOUNT, max: MAX_CUSTOM_AMOUNT, step: 0.01 } }}
                        sx={{ mb: 2, width: "100%" }}
                        placeholder={`Enter amount (${symbol}${MIN_CUSTOM_AMOUNT}+ )`}
                        variant="outlined"
                        size="lg"
                    />
                    <p className={styles.price}>
                        {symbol}
                        {customAmount.toFixed(2)}{" "}
                        <span className={styles.tokens}>
              ≈ {convertToTokens(customAmount)} tokens
            </span>
                    </p>
                </>
            ) : (
                <p className={styles.price}>
                    {symbol}
                    {(Number(price) * rate).toFixed(2)}{" "}
                    <span className={styles.tokens}>/{tokens} tokens</span>
                </p>
            )}

            <p className={styles.description}>{description}</p>

            <ul className={styles.features}>
                {features.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>

            <ButtonUI type="button" sx={{ width: "100%" }} onClick={handleBuy}>
                {user ? buttonText : "Sign Up to Buy"}
            </ButtonUI>
        </div>
    );
};

export default PricingCard;
