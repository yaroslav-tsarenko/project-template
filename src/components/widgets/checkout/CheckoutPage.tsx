"use client";

import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./CheckoutPage.module.scss";
import { useUser } from "@/context/UserContext";

export default function CheckoutPage() {
    const router = useRouter();
    const [checkout, setCheckout] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [processing, setProcessing] = useState(false);
    const [total, setTotal] = useState<number>(0);
    const user = useUser();

    // 🧾 Card form state
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [cardholder, setCardholder] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    // 🧠 Load checkout data
    useEffect(() => {
        const data = localStorage.getItem("checkoutData");
        if (!data) {
            router.push("/pricing");
        } else {
            const parsed = JSON.parse(data);
            const totalWithVat = Number((parsed.amount * 1.2).toFixed(2));
            setCheckout(parsed);
            setTotal(totalWithVat);
            setLoading(false);
        }
    }, [router]);

    // 💳 Format card number: "4444 4444 4444 4444"
    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
        const formatted = raw.replace(/(.{4})/g, "$1 ").trim();
        setCardNumber(formatted);
    };

    // 🗓️ Format expiry: "MM/YY"
    const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let raw = e.target.value.replace(/\D/g, "").slice(0, 4);
        if (raw.length >= 3) {
            raw = raw.replace(/^(\d{2})(\d{1,2})$/, "$1/$2");
        }
        setExpiry(raw);
    };

    // 🔒 Format CVV (max 3 digits)
    const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/\D/g, "").slice(0, 3);
        setCvv(raw);
    };

    // 🧾 Handle payment
    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setProcessing(true);

        try {
            const res = await fetch("/api/cardserv/sale", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...checkout,
                    amount: total,
                    total,
                    cardNumber,
                    expiry,
                    cvv,
                    cardholder,
                    address,
                    city,
                    postalCode,
                    userEmail: user?.email || "client@example.com",
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Payment request failed");

            if (data?.data?.redirectUrl) {
                console.log("🔁 Redirecting to:", data.data.redirectUrl);
                window.location.href = data.data.redirectUrl;
                return;
            }

            if (typeof data === "string" && data.includes("<form")) {
                const newWindow = window.open();
                if (newWindow) newWindow.document.write(data);
                return;
            }

            alert("Redirect URL not provided yet. Please retry later.");
        } catch (err: any) {
            alert(err.message || "Payment failed");
        } finally {
            setProcessing(false);
        }
    };

    if (loading)
        return (
            <div className={styles.loaderScreen}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={styles.loaderBox}
                >
                    <Loader2 className={styles.loaderIcon} />
                    <p>Generating secure checkout...</p>
                </motion.div>
            </div>
        );

    return (
        <div className={styles.checkoutWrapper}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.checkoutCard}
            >
                {/* ================================
             💳 Payment Form
        ================================== */}
                <div className={styles.formSection}>
                    <h1>Checkout</h1>
                    <p className={styles.subtitle}>Secure payment</p>

                    <form className={styles.paymentForm} onSubmit={handlePayment}>
                        <div className={styles.inputGroup}>
                            <label>Card Number</label>
                            <input
                                type="text"
                                maxLength={19}
                                value={cardNumber}
                                onChange={handleCardNumberChange}
                                placeholder="Enter your card number"
                                required
                            />
                        </div>

                        <div className={styles.flexRow}>
                            <div className={styles.inputGroup}>
                                <label>Expiry Date</label>
                                <input
                                    type="text"
                                    maxLength={5}
                                    value={expiry}
                                    onChange={handleExpiryChange}
                                    placeholder="MM/YY"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>CVV</label>
                                <input
                                    type="password"
                                    maxLength={3}
                                    value={cvv}
                                    onChange={handleCvvChange}
                                    placeholder="Enter CVV"
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Cardholder Name</label>
                            <input
                                type="text"
                                value={cardholder}
                                onChange={(e) => setCardholder(e.target.value)}
                                placeholder="Enter name on card"
                                required
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Billing Address</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter billing address"
                                required
                            />
                        </div>

                        <div className={styles.flexRow}>
                            <div className={styles.inputGroup}>
                                <label>City</label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="Enter your city"
                                    required
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Postal Code</label>
                                <input
                                    type="text"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    placeholder="ZIP / Postal Code"
                                    required
                                />
                            </div>
                        </div>

                        <button className={styles.payBtn} disabled={processing}>
                            {processing ? (
                                <div className={styles.loaderBtn}>
                                    <span>Processing...</span>
                                </div>
                            ) : (
                                `Pay ${total.toFixed(2)} ${checkout.currency}`
                            )}
                        </button>
                    </form>
                </div>

                {/* ================================
             🧾 Order Summary
        ================================== */}
                <div className={styles.summarySection}>
                    <h2>Order Summary</h2>
                    <div className={styles.summaryBox}>
                        <p className={styles.itemTitle}>{checkout.description}</p>
                        <div className={styles.itemRow}>
                            <span>Tokens</span>
                            <span>{checkout.tokens}</span>
                        </div>
                        <div className={styles.itemRow}>
                            <span>Subtotal</span>
                            <span>
                {checkout.amount.toFixed(2)} {checkout.currency}
              </span>
                        </div>
                        <div className={styles.itemRow}>
                            <span>VAT (20%)</span>
                            <span>
                {(checkout.amount * 0.2).toFixed(2)} {checkout.currency}
              </span>
                        </div>
                        <hr />
                        <div className={styles.totalRow}>
                            <strong>Total</strong>
                            <strong>
                                {total.toFixed(2)} {checkout.currency}
                            </strong>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
