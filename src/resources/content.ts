import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_LEGAL_NAME, COMPANY_NUMBER } from "@/resources/constants";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { media } from "@/resources/media";

export const baseURL =
    typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

// Header translations
const headerContentTranslations = {
    en: {
        logo: {
            src: media.logo.src,
            alt: "Site Logo",
            href: "/"
        },
        links: [
            { label: "About", href: "/about-us" },
            { label: "Services", href: "/services" },
            { label: "Pricing", href: "/pricing" },
            { label: "Faq", href: "/faq" },
            { label: "Get Started", href: "/get-started" },
            { label: "Contact Us", href: "/contact-us" },
        ]
    },
    tr: {
        logo: {
            src: media.logo.src,
            alt: "Site Logosu",
            href: "/"
        },
        links: [
            { label: "Hakkımızda", href: "/about-us" },
            { label: "Hizmetler", href: "/services" },
            { label: "Fiyatlandırma", href: "/pricing" },
            { label: "SSS", href: "/faq" },
            { label: "Başla", href: "/get-started" },
            { label: "İletişim", href: "/contact-us" },
        ]
    }
};

// Footer translations
const footerContentTranslations = {
    en: {
        logo: { src: media.logo_white.src, alt: "Site Logo", href: "/" },
        columns: [
            {
                title: "Navigation",
                links: [
                    { label: "About", href: "/about-us" },
                    { label: "Services", href: "/services" },
                    { label: "Pricing", href: "/pricing" },
                    { label: "Faq", href: "/faq" },
                    { label: "Get Started", href: "/get-started" },
                    { label: "Contact Us", href: "/contact-us" },
                ]
            },
            {
                title: "Legal",
                links: [
                    { label: "Terms & Conditions", href: "/terms-and-conditions" },
                    { label: "Cookie Policy", href: "/cookie-policy" },
                    { label: "Refund Policy", href: "/refund-policy" },
                    { label: "Privacy Policy", href: "/cookie-policy" },
                ],
            },
        ],
        socials: [
            { label: "Instagram", href: "https://www.instagram.com/ilovemanual.uk", icon: FaInstagram },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/ilovemanual-uk/", icon: FaLinkedin },
        ],
        contact: {
            email: COMPANY_EMAIL,
        },
        legal: {
            companyName: COMPANY_LEGAL_NAME,
            companyNumber: COMPANY_NUMBER,
            companyEmail: COMPANY_EMAIL,
            addressLines: [
                COMPANY_ADDRESS,
            ],
        },
    },
    tr: {
        logo: { src: media.logo_white.src, alt: "Site Logosu", href: "/" },
        columns: [
            {
                title: "Navigasyon",
                links: [
                    { label: "Hakkımızda", href: "/about-us" },
                    { label: "Hizmetler", href: "/services" },
                    { label: "Fiyatlandırma", href: "/pricing" },
                    { label: "SSS", href: "/faq" },
                    { label: "Başla", href: "/get-started" },
                    { label: "İletişim", href: "/contact-us" },
                ]
            },
            {
                title: "Yasal",
                links: [
                    { label: "Şartlar & Koşullar", href: "/terms-and-conditions" },
                    { label: "Çerez Politikası", href: "/cookie-policy" },
                    { label: "İade Politikası", href: "/refund-policy" },
                    { label: "Gizlilik Politikası", href: "/cookie-policy" },
                ],
            },
        ],
        socials: [
            { label: "Instagram", href: "https://www.instagram.com/ilovemanual.uk", icon: FaInstagram },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/ilovemanual-uk/", icon: FaLinkedin },
        ],
        contact: {
            email: COMPANY_EMAIL,
        },
        legal: {
            companyName: COMPANY_LEGAL_NAME,
            companyNumber: COMPANY_NUMBER,
            companyEmail: COMPANY_EMAIL,
            addressLines: [
                COMPANY_ADDRESS,
            ],
        },
    }
};

// Helper to get content by language
export const getHeaderContent = (lang: "en" | "tr" = "en") => headerContentTranslations[lang] || headerContentTranslations.en;
export const getFooterContent = (lang: "en" | "tr" = "en") => footerContentTranslations[lang] || footerContentTranslations.en;
