import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `FAQ — ${COMPANY_NAME}`,
        description:
            `Frequently Asked Questions about ${COMPANY_NAME} services, manuals, token system, access, downloads, languages, and more.`,
        keywords: [
            "faq",
            `${COMPANY_NAME} help`,
            "manuals FAQ",
            "token FAQ",
            "documentation questions",
            "guide access",
            "manual downloads"
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} FAQ`,
            description: `Answers to the most common questions about manuals, tokens, and services.`,
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer:
                        `${COMPANY_NAME} is a platform that provides professional manuals created by specialists. Each manual can be unlocked using tokens, giving you flexible access to the guides you need.`
                },
                {
                    question: "How do I purchase manuals?",
                    answer:
                        `Instead of direct purchases, ${COMPANY_NAME} uses tokens. You buy tokens and spend them on unlocking manuals. This way you only pay for what you need.`
                },
                {
                    question: "How much does a manual cost?",
                    answer:
                        "A standard manual costs 30 tokens. The cost may increase for advanced or custom manuals, depending on complexity and length. Simple quick-start guides require fewer tokens, while detailed technical documentation requires more."
                },
                {
                    question: "Do I need a subscription?",
                    answer:
                        `No. ${COMPANY_NAME} does not use subscriptions. You purchase tokens once and spend them whenever you need manuals.`
                },
                {
                    question: "Are manuals available instantly?",
                    answer:
                        "Yes. Once you unlock a manual, it’s instantly available in your dashboard. You can read it online, download it, and access it anytime."
                },
                {
                    question: "Can I download manuals?",
                    answer:
                        "Yes. All unlocked manuals are available for download in digital format. You can save them and access them offline."
                },
                {
                    question: "Do manuals remain available after purchase?",
                    answer:
                        "Yes. Once a manual is unlocked, it stays in your account permanently. You can revisit and re-download it anytime."
                },
                {
                    question: "Who writes the manuals?",
                    answer:
                        "All manuals are written and reviewed by experienced specialists with real industry expertise, ensuring accuracy and reliability."
                },
                {
                    question: "What types of manuals are available?",
                    answer:
                        `${COMPANY_NAME} offers manuals for household devices, consumer electronics, professional tools, industrial equipment, and specialized systems.`
                },
                {
                    question: "Can I request a custom manual?",
                    answer:
                        "Yes. If you need a manual for a specific device or tool that is not in our library, you can request a custom manual. Our team will prepare it for you."
                },
                {
                    question: `Is ${COMPANY_NAME} available in multiple languages?`,
                    answer:
                        "Yes. Many manuals are available in multiple languages, and we are continuously expanding our multilingual documentation support."
                },
                {
                    question: `How do businesses use ${COMPANY_NAME}?`,
                    answer:
                        `Businesses use ${COMPANY_NAME} to provide staff with accurate manuals, reduce training time, and ensure compliance with operational standards. Token packages can be scaled for teams.`
                },
                {
                    question: "Is my data secure?",
                    answer:
                        `${COMPANY_NAME} follows industry-standard security practices to ensure your personal and payment data are always protected.`
                },
                {
                    question: "Do you provide support?",
                    answer:
                        `Yes. Our support team is available to help with accessing manuals, managing tokens, or requesting custom documentation. Contact us at ${COMPANY_EMAIL}.`
                },
                {
                    question: `What devices can I use to access ${COMPANY_NAME}?`,
                    answer:
                        `${COMPANY_NAME} works on all modern devices: desktop, laptop, tablet, and smartphone. Manuals are optimized for easy reading across screen sizes.`
                },
            ],
        },
    ],
};

export default faqSchema;
