"use client";

import React, { Suspense } from "react";
import CheckoutResultPage from "./ResultPage";

export default function Page() {
    return (
        <Suspense fallback={<div style={{ textAlign: "center", padding: "40px" }}>Loading payment result...</div>}>
            <CheckoutResultPage />
        </Suspense>
    );
}
