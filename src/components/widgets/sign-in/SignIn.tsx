"use client";

import React from "react";
import { Formik, FormikHelpers, Form, useField } from "formik";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";
import {
    signInValidation,
    signInInitialValues,
    signInOnSubmit,
} from "@/validationSchemas/sign-in/schema";
import { useI18n } from "@/context/i18nContext";
import Link from "next/link";
import styles from "./SignIn.module.scss";

export type SignInValues = { email: string; password: string };

/* ── tiny field wrapper ── */
function TextField({ name, label, type = "text", placeholder }: {
    name: string; label: string; type?: string; placeholder?: string;
}) {
    const [field, meta] = useField(name);
    const hasError = meta.touched && !!meta.error;
    return (
        <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className={`${styles.input} ${hasError ? styles.inputError : ""}`}
            />
            {hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    );
}

const translations: Record<string, Record<string, string>> = {
    en: {
        title: "Welcome Back",
        description: "Sign in to your account",
        email: "Email",
        password: "Password",
        submit: "Sign In",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
    },
    tr: {
        title: "Tekrar Hoş Geldiniz",
        description: "Hesabınıza giriş yapın",
        email: "E-posta",
        password: "Şifre",
        submit: "Giriş Yap",
        noAccount: "Hesabınız yok mu?",
        signUp: "Kayıt Ol",
    },
};

export default function SignInPage() {
    const { showAlert } = useAlert();
    const router = useRouter();
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{t.title}</h1>
                    <p className={styles.description}>{t.description}</p>
                </div>

                <Formik<SignInValues>
                    initialValues={signInInitialValues}
                    validate={signInValidation}
                    onSubmit={async (values, helpers: FormikHelpers<SignInValues>) =>
                        signInOnSubmit(values, helpers, showAlert, router)
                    }
                >
                    {({ isSubmitting }) => (
                        <Form className={styles.form} noValidate>
                            <TextField name="email" label={t.email} type="email" placeholder="john@example.com" />
                            <TextField name="password" label={t.password} type="password" placeholder="••••••••" />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={styles.submitBtn}
                            >
                                {isSubmitting ? (
                                    <span className={styles.spinner} />
                                ) : (
                                    t.submit
                                )}
                            </button>

                            <p className={styles.footerText}>
                                {t.noAccount}{" "}
                                <Link href="/sign-up" className={styles.link}>
                                    {t.signUp}
                                </Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
