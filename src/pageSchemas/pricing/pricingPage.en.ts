import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const pricingSchema: PageSchema = {
    meta: {
        title: `Pricing — ${COMPANY_NAME}`,
        description:
            `Choose a ${COMPANY_NAME} token package that fits your needs. Flexible pricing with Starter, Pro, and Enterprise options for individuals, professionals, and businesses.`,
        keywords: [
            `${COMPANY_NAME} pricing`,
            "token packages",
            "manual access",
            "subscription alternatives",
            "manual pricing"
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} Pricing`,
            description: "Flexible token-based pricing for manuals.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            align: "center",
            left: {
                type: "text",
                title: "Simple and Transparent Pricing",
                description:
                    `At ${COMPANY_NAME}, you only pay for what you need. Our token-based system is flexible, affordable, and scalable — whether you’re unlocking one manual or managing documentation for your whole company.`,
                bullets: [
                    "No hidden fees or subscriptions",
                    "Tokens never expire and are always reusable",
                    "Ideal for individuals, freelancers, and full teams",
                    "Flexible usage — buy only when you need more",
                    "No auto-renewals or commitments",
                    "Access manuals instantly after purchase",
                    "Transparent pricing visible before every purchase",
                    "Simple upgrade path between plans"
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "grid",
            columns: 4,
            gap: "2rem",
            cards: [
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Starter Pack",
                    price: "10",
                    tokens: 1000,
                    description: "Perfect for individuals who need occasional manuals.",
                    features: [
                        "1000 tokens included",
                        "Instant manual access",
                        "No expiration",
                        "Best for one-time projects",
                        "Affordable entry-level package",
                        "No subscription required",
                        "Great for freelancers and consultants",
                        "Simple checkout experience"
                    ],
                    buttonText: "Buy Now",
                    buttonLink: "/checkout?plan=starter",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "Pro Pack",
                    price: "20",
                    tokens: 2000,
                    description: "Great for professionals and small teams.",
                    features: [
                        "2000 tokens included",
                        "Priority manual creation",
                        "Download & offline access",
                        "Best value for growing teams",
                        "Faster manual generation",
                        "Early access to new features",
                        "Suited for regular usage",
                        "Access from any device"
                    ],
                    buttonText: "Get Pro",
                    buttonLink: "/checkout?plan=pro",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Enterprise Pack",
                    price: "40",
                    tokens: 4000,
                    description: "Best for businesses with regular documentation needs.",
                    features: [
                        "4000 tokens included",
                        "Dedicated support",
                        "Multi-language manuals",
                        "Custom industry guides",
                        "User role management",
                        "Scalable across departments",
                        "Invoicing support for companies",
                        "API integration available"
                    ],
                    buttonText: "Go Premium",
                    buttonLink: "/checkout?plan=enterprise",
                },
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Custom Pack",
                    price: "dynamic",
                    tokens: 0,
                    description: "Enter your own token amount and get instant pricing.",
                    features: [
                        "Flexible token selection",
                        "Automatic price calculation",
                        "No expiration",
                        "Perfect for custom needs",
                        "Control your budget easily",
                        "Great for specific use cases",
                        "Instant delivery after checkout",
                        "Pay only for what you use"
                    ],
                    buttonText: "Buy Custom",
                    buttonLink: "/checkout?plan=custom",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "How tokens work",
            },
            right: {
                type: "text",
                title: "How the Token System Works",
                description:
                    `Each manual you unlock requires tokens. Buy tokens once and use them whenever you need. Tokens never expire, so you have full flexibility to plan your documentation strategy without pressure. Additional services (customization, translation, etc.) are priced separately.`,
                bullets: [
                    "30 tokens = 1 manual (standard complexity)",
                    "Advanced guides or extra services may require more tokens",
                    "Tokens stay in your account until used",
                    "Token use is clearly shown before confirmation",
                    "You can combine tokens from multiple purchases",
                    "Track your token usage in your dashboard",
                    "Top-up anytime with no delays",
                    "Perfect for both short-term and long-term needs"
                ],
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image2",
                    title: "Why Tokens?",
                    description:
                        `Traditional subscriptions lock you into recurring payments. With ${COMPANY_NAME}, you only pay for the manuals you need — simple, transparent, and scalable.`,
                    buttonLink: "/about-us",
                    buttonText: "Learn More",
                },
                {
                    image: "image3",
                    title: "Enterprise Benefits",
                    description:
                        `Businesses can purchase larger token packages for teams. Save costs, gain dedicated support, and enjoy documentation tailored to your industry.`,
                    buttonLink: "/contact",
                    buttonText: "Contact Sales",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "What Our Customers Say",
                description:
                    `Thousands of users rely on ${COMPANY_NAME} for reliable documentation. From individuals to enterprises, our token-based pricing helps everyone access the knowledge they need.`,
                bullets: [
                    `"Perfect for my freelance work — I only buy manuals when I need them."`,
                    `"Our engineering team saves hours every week thanks to ${COMPANY_NAME} manuals."`,
                    `"Affordable, flexible, and easy to use — highly recommended."`,
                    `"Tokens make it easy to scale as our team grows."`,
                    `"We switched from a subscription model and haven’t looked back."`,
                    `"Support is responsive and helpful every time."`,
                    `"Ideal for managing internal documentation needs."`,
                    `"The custom manuals were spot on for our industry."`
                ],
                centerTitle: true,
                centerDescription: true,
                centerBullets: true,
            },
        },
        {
            type: "faq",
            items: [
                {
                    question: "Do tokens expire?",
                    answer: "No. Tokens stay in your account until you decide to use them.",
                },
                {
                    question: "Can I upgrade my plan later?",
                    answer: "Yes. You can always purchase more tokens or switch to a larger package at any time.",
                },
                {
                    question: "How many tokens does a manual cost?",
                    answer: "Each manual costs 30 tokens. Advanced or custom manuals and extra services may require additional tokens, which is always shown in advance.",
                },
                {
                    question: "Do you offer refunds?",
                    answer: "Unused tokens can be refunded within 14 days of purchase under our refund policy.",
                },
                {
                    question: "Can businesses get custom pricing?",
                    answer: `Yes. Enterprises can contact us directly for tailored packages, custom manuals, and dedicated support. Email: ${COMPANY_EMAIL}`,
                },
                {
                    question: "Is support included in all plans?",
                    answer: "Yes. All packages include access to our support team. Enterprise plans receive priority support.",
                },
                {
                    question: "Can I download manuals?",
                    answer: "Yes. Manuals can be downloaded as PDFs for offline use in Pro and Enterprise plans.",
                },
                {
                    question: "Is there a dashboard to manage tokens?",
                    answer: "Yes. You can track your tokens, manual history, and billing via your user dashboard.",
                },
                {
                    question: "What payment methods are accepted?",
                    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
                },
                {
                    question: "Can I share tokens with my team?",
                    answer: "Yes. Pro and Enterprise users can share tokens across their team with proper role assignments."
                },
            ],
        },
    ],
};

export default pricingSchema;