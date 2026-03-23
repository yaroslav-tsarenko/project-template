"use client";

import React, { useState } from "react";
import { Formik, FormikHelpers, Form, useField } from "formik";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";
import {
    SignUpValues,
    signUpValidation,
    signUpInitialValues,
    signUpOnSubmit,
} from "@/validationSchemas/sign-up/schema";
import { COUNTRIES } from "@/constants/countries";
import { useI18n } from "@/context/i18nContext";
import Link from "next/link";
import styles from "./SignUp.module.scss";

/* ── tiny field wrappers (formik-aware) ── */

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

function SelectField({ name, label, options, placeholder }: {
    name: string; label: string; options: string[]; placeholder?: string;
}) {
    const [field, meta, helpers] = useField(name);
    const hasError = meta.touched && !!meta.error;
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    const filtered = options.filter((o) =>
        o.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <div className={styles.selectWrapper}>
                <input
                    id={name}
                    type="text"
                    autoComplete="off"
                    className={`${styles.input} ${hasError ? styles.inputError : ""}`}
                    placeholder={placeholder || "Select..."}
                    value={open ? search : field.value}
                    onFocus={() => {
                        setOpen(true);
                        setSearch("");
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                    onBlur={() => {
                        setTimeout(() => setOpen(false), 200);
                        helpers.setTouched(true);
                    }}
                />
                {open && (
                    <ul className={styles.dropdown}>
                        {filtered.length === 0 && (
                            <li className={styles.dropdownEmpty}>No results</li>
                        )}
                        {filtered.map((opt) => (
                            <li
                                key={opt}
                                className={`${styles.dropdownItem} ${opt === field.value ? styles.dropdownItemActive : ""}`}
                                onMouseDown={() => {
                                    helpers.setValue(opt);
                                    setSearch(opt);
                                    setOpen(false);
                                }}
                            >
                                {opt}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    );
}

/* ── translations ── */

const translations: Record<string, Record<string, string>> = {
    en: {
        title: "Create Account",
        description: "Fill in the details below to get started",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        password: "Password",
        phone: "Phone Number",
        dateOfBirth: "Date of Birth",
        street: "Street Address",
        city: "City",
        country: "Country",
        postalCode: "Postal Code",
        submit: "Create Account",
        haveAccount: "Already have an account?",
        signIn: "Sign In",
        personalInfo: "Personal Information",
        addressInfo: "Address",
    },
    tr: {
        title: "Hesap Oluştur",
        description: "Başlamak için aşağıdaki bilgileri doldurun",
        firstName: "Ad",
        lastName: "Soyad",
        email: "E-posta",
        password: "Şifre",
        phone: "Telefon Numarası",
        dateOfBirth: "Doğum Tarihi",
        street: "Sokak Adresi",
        city: "Şehir",
        country: "Ülke",
        postalCode: "Posta Kodu",
        submit: "Hesap Oluştur",
        haveAccount: "Zaten hesabınız var mı?",
        signIn: "Giriş Yap",
        personalInfo: "Kişisel Bilgiler",
        addressInfo: "Adres",
    },
};

/* ── main component ── */

export default function SignUpPage() {
    const { showAlert } = useAlert();
    const router = useRouter();
    const { lang } = useI18n();
    const t = translations[lang] || translations.en;

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.card}>
                {/* header */}
                <div className={styles.header}>
                    <h1 className={styles.title}>{t.title}</h1>
                    <p className={styles.description}>{t.description}</p>
                </div>

                <Formik<SignUpValues>
                    initialValues={signUpInitialValues}
                    validate={signUpValidation}
                    onSubmit={async (values, helpers: FormikHelpers<SignUpValues>) =>
                        signUpOnSubmit(values, helpers, showAlert, router)
                    }
                >
                    {({ isSubmitting }) => (
                        <Form className={styles.form} noValidate>
                            {/* ── Personal Information ── */}
                            <fieldset className={styles.section}>
                                <legend className={styles.sectionTitle}>{t.personalInfo}</legend>

                                <div className={styles.row}>
                                    <TextField name="firstName" label={t.firstName} placeholder="John" />
                                    <TextField name="lastName" label={t.lastName} placeholder="Doe" />
                                </div>

                                <TextField name="email" label={t.email} type="email" placeholder="john@example.com" />

                                <TextField name="password" label={t.password} type="password" placeholder="••••••••" />

                                <div className={styles.row}>
                                    <TextField name="phone" label={t.phone} type="tel" placeholder="+44 20 1234 5678" />
                                    <TextField name="dateOfBirth" label={t.dateOfBirth} type="date" />
                                </div>
                            </fieldset>

                            {/* ── Address ── */}
                            <fieldset className={styles.section}>
                                <legend className={styles.sectionTitle}>{t.addressInfo}</legend>

                                <TextField name="street" label={t.street} placeholder="123 High Street" />

                                <div className={styles.row}>
                                    <TextField name="city" label={t.city} placeholder="London" />
                                    <TextField name="postalCode" label={t.postalCode} placeholder="SW1A 1AA" />
                                </div>

                                <SelectField
                                    name="country"
                                    label={t.country}
                                    options={COUNTRIES}
                                    placeholder="Search country..."
                                />
                            </fieldset>

                            {/* ── Submit ── */}
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
                                {t.haveAccount}{" "}
                                <Link href="/sign-in" className={styles.link}>
                                    {t.signIn}
                                </Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
