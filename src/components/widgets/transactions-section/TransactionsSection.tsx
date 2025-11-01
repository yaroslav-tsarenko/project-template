"use client";

import React, { useEffect, useState } from "react";
import styles from "./TransactionsSection.module.scss";
import { useUser } from "@/context/UserContext";

interface Transaction {
    _id: string;
    orderMerchantId: string;
    amount: number;
    currency: string;
    description: string;
    email: string;
    status: string;
    createdAt: string;
}

export default function TransactionsSection() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const user = useUser();

    useEffect(() => {
        if (!user?.email) return;

        const fetchTransactions = async () => {
            try {
                const res = await fetch(`/api/transactions?email=${encodeURIComponent(user.email)}`);
                const data = await res.json();
                if (data.ok) setTransactions(data.transactions || []);
            } catch (err) {
                console.error("Failed to load transactions:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, [user?.email]);

    if (loading)
        return (
            <div className={styles.loading}>
                <p>Loading transactions...</p>
            </div>
        );

    if (!transactions.length)
        return <p className={styles.empty}>No transactions found.</p>;

    return (
        <div className={styles.transactionsSection}>
            <h3 className={styles.title}>Transaction History</h3>
            <ul className={styles.txList}>
                {transactions.map((tx) => (
                    <li key={tx._id} className={styles.txCard}>
                        <div className={styles.top}>
              <span className={styles.amount}>
                {tx.amount.toFixed(2)} {tx.currency}
              </span>
                            <span
                                className={`${styles.status} ${
                                    tx.status === "APPROVED"
                                        ? styles.approved
                                        : tx.status === "DECLINED"
                                            ? styles.declined
                                            : styles.pending
                                }`}
                            >
                {tx.status}
              </span>
                        </div>
                        <p className={styles.desc}>{tx.description}</p>
                        <p className={styles.date}>
                            {new Date(tx.createdAt).toLocaleString()}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
