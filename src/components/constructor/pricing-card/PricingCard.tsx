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
    price: string; // базова ціна у GBP або "dynamic"
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

// 🔹 Фіксовані ліміти
const MIN_CUSTOM_AMOUNT = 1;
const MAX_CUSTOM_AMOUNT = 9999;

// 🔹 Курси резервні, якщо API не працює
const FALLBACK_RATES = {
    GBP: 1,
    USD: 1.343, // 1 GBP = 1.343 USD
    EUR: 1.145, // 1 GBP = 1.145 EUR
};

// 🔹 Скільки токенів за 1 GBP
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
    const [convertedPrice, setConvertedPrice] = useState<number>(0);

    // 🔹 завантажуємо актуальний курс валют
    useEffect(() => {
        const fetchRate = async () => {
            try {
                const res = await fetch(`https://api.exchangerate.host/latest?base=GBP&symbols=${currency}`);
                if (!res.ok) throw new Error("Failed to fetch rates");
                const data = await res.json();
                const fetchedRate = data?.rates?.[currency];
                setRate(fetchedRate || FALLBACK_RATES[currency]);
            } catch {
                console.warn("⚠️ Using fallback rates");
                setRate(FALLBACK_RATES[currency]);
            }
        };
        fetchRate();
    }, [currency]);

    // 🔹 оновлення конвертованої ціни
    useEffect(() => {
        if (price !== "dynamic") {
            const converted = Number(price) * rate;
            setConvertedPrice(Number(converted.toFixed(2)));
        }
    }, [price, rate]);

    // 🔹 підрахунок токенів (універсальний для будь-якої валюти)
    const convertToTokens = (amountInSelectedCurrency: number): number => {
        const amountInGBP = amountInSelectedCurrency / rate; // повертаємо у GBP
        return Math.floor(amountInGBP * TOKENS_PER_GBP);
    };

    // 🔹 обробка покупки
    const handleBuy = async () => {
        if (!user) {
            showAlert("Please sign up", "You need to be signed in to buy tokens", "info");
            setTimeout(() => (window.location.href = "/sign-up"), 1500);
            return;
        }

        // якщо користувач вводить власну суму
        const amountInSelectedCurrency =
            price === "dynamic" ? customAmount : convertedPrice;

        const tokenAmount =
            price === "dynamic"
                ? convertToTokens(customAmount)
                : tokens;

        const checkoutData = {
            email: user.email,
            amount: Number(amountInSelectedCurrency.toFixed(2)),
            baseAmountGBP: price === "dynamic"
                ? Number((customAmount / rate).toFixed(2))
                : Number(price),
            currency,
            description: `${title} token purchase`,
            tokens: tokenAmount,
            rate,
        };

        localStorage.setItem("checkoutData", JSON.stringify(checkoutData));
        window.location.href = "/checkout";
    };

    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            {variant === "highlight" && (
                <div className={styles.bestChoiceLabel}>⭐ Best Choice</div>
            )}
            <h3 className={styles.title}>{title}</h3>

            {/* Якщо користувач сам вводить суму */}
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
                    {convertedPrice.toFixed(2)}{" "}
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
