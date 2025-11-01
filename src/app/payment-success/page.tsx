"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PaymentSuccess() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen text-center px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful 🎉</h1>
            <p className="text-gray-600 max-w-md">
                Thank you! Your payment was successfully processed. Tokens will be credited to your account shortly.
            </p>
            <a href="/dashboard" className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                Go to Dashboard
            </a>
        </motion.div>
    );
}
