"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2, CheckCircle, XCircle, Clock } from "lucide-react";
import styles from "./ResultPage.module.scss";

export default function CheckoutResultPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const omId = searchParams.get("omId");

    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!omId) return;

        async function fetchStatus() {
            try {
                const res = await fetch("/api/cardserv/status", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ orderMerchantId: omId }),
                });

                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Failed to fetch payment status");

                const orderState = data?.data?.orderState || "UNKNOWN";
                setStatus(orderState);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchStatus();
    }, [omId]);

    useEffect(() => {
        if (status === "APPROVED" && omId) {
            fetch("/api/user/add-tokens", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderMerchantId: omId }),
            })
                .then((r) => r.json())
                .then((res) => {
                    console.log("💰 Token credit response:", res);
                })
                .catch((err) => console.error("❌ Token credit failed:", err));
        }
    }, [status, omId]);

    if (loading) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <Loader2 className={`${styles.icon} ${styles.spin}`} />
                    <h1>Checking payment status...</h1>
                    <p>Please wait while we confirm your transaction.</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <XCircle className={`${styles.icon} ${styles.error}`} />
                    <h1>Something went wrong</h1>
                    <p>{error}</p>
                    <button className={styles.button} onClick={() => router.push("/pricing")}>
                        Back to Pricing
                    </button>
                </div>
            </div>
        );
    }



    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                {status === "APPROVED" && (
                    <>
                        <CheckCircle className={`${styles.icon} ${styles.success}`} />
                        <h1>Payment Successful 🎉</h1>
                        <p>Your payment has been successfully processed.</p>
                        <p className={styles.sub}>Order ID: {omId}</p>
                        <button className={styles.button} onClick={() => router.push("/dashboard")}>
                            Go to Dashboard
                        </button>
                    </>
                )}

                {status === "DECLINED" && (
                    <>
                        <XCircle className={`${styles.icon} ${styles.error}`} />
                        <h1>Payment Declined</h1>
                        <p>Your card was declined or the transaction could not be completed.</p>
                        <p className={styles.sub}>Order ID: {omId}</p>
                        <button className={styles.button} onClick={() => router.push("/checkout")}>
                            Try Again
                        </button>
                    </>
                )}

                {status === "PROCESSING" && (
                    <>
                        <Clock className={`${styles.icon} ${styles.warning}`} />
                        <h1>Payment Processing...</h1>
                        <p>Your payment is being confirmed. This may take a few moments.</p>
                        <p className={styles.sub}>Order ID: {omId}</p>
                    </>
                )}

                {!["APPROVED", "DECLINED", "PROCESSING"].includes(status || "") && (
                    <>
                        <Clock className={`${styles.icon} ${styles.neutral}`} />
                        <h1>Status Unknown</h1>
                        <p>We couldn't verify your payment yet. Please check again later.</p>
                        <p className={styles.sub}>Order ID: {omId}</p>
                        <button className={styles.button} onClick={() => router.push("/pricing")}>
                            Back to Pricing
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
