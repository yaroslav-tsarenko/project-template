import React from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import styles from "./Selectors.module.scss";
import { useI18n } from "@/context/i18nContext";
import {useCurrency} from "@/context/CurrencyContext";
import { DISPLAY_CURRENCIES, type Currency } from "@/utils/currency";

const Selectors = () => {
    const { currency, setCurrency } = useCurrency();
    const { lang, setLang } = useI18n();

    const handleLanguageChange = (e: SelectChangeEvent) => {
        const newLang = e.target.value as "en" | "tr";
        setLang(newLang);
    };

    const handleCurrencyChange = (e: SelectChangeEvent) => {
        const newCurrency = e.target.value as Currency;
        setCurrency(newCurrency);
    };

    return (
        <div className={styles.selectorsWrapper}>
            <div className={styles.selectorBlock}>
                <Select
                    value={currency}
                    onChange={handleCurrencyChange}
                    size="small"
                    className={styles.select}
                >
                    {DISPLAY_CURRENCIES.map((c) => (
                        <MenuItem key={c} value={c}>
                            {c}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            <div className={styles.selectorBlock}>
                <Select
                    value={lang}
                    onChange={handleLanguageChange}
                    size="small"
                    className={styles.select}
                >
                    <MenuItem value="en">English</MenuItem>
                    <MenuItem value="tr">Türkçe</MenuItem>
                </Select>
            </div>
        </div>
    );
};

export default Selectors;
