"use client";

import React, { useState } from "react";
import styles from "./Dashboard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import ManualGenerator from "@/components/widgets/manual-generator/ManualGenerator";
import AllOrders from "@/components/widgets/all-orders/AllOrders";
import TransactionsSection from "@/components/widgets/transactions-section/TransactionsSection";
import { useI18n } from "@/context/i18nContext";

const translations = {
    en: {
        getManual: "Get Manual",
        myOrders: "My Orders",
        myTransactions: "Transactions",
    },
    tr: {
        getManual: "Kılavuz Al",
        myOrders: "Siparişlerim",
        myTransactions: "İşlemler",
    },
};

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState<"manual" | "orders" | "transactions">("manual");
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.buttons}>
                    <ButtonUI
                        color={activeTab === "manual" ? "primary" : "muted"}
                        shape="rounded"
                        hoverTextColor="white"
                        variant={activeTab === "manual" ? "solid" : "outlined"}
                        onClick={() => setActiveTab("manual")}
                    >
                        {t.getManual}
                    </ButtonUI>

                    <ButtonUI
                        color={activeTab === "orders" ? "secondary" : "muted"}
                        shape="rounded"
                        hoverTextColor="white"
                        variant={activeTab === "orders" ? "solid" : "outlined"}
                        onClick={() => setActiveTab("orders")}
                    >
                        {t.myOrders}
                    </ButtonUI>

                    <ButtonUI
                        color={activeTab === "transactions" ? "quaternary" : "muted"}
                        shape="rounded"
                        hoverTextColor="white"
                        variant={activeTab === "transactions" ? "solid" : "outlined"}
                        onClick={() => setActiveTab("transactions")}
                    >
                        {t.myTransactions}
                    </ButtonUI>
                </div>
            </div>

            <div className={styles.widgets}>
                {activeTab === "manual" && <ManualGenerator />}
                {activeTab === "orders" && <AllOrders />}
                {activeTab === "transactions" && <TransactionsSection />}
            </div>
        </div>
    );
};

export default Dashboard;
