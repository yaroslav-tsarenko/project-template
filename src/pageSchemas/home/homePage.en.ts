import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — Professional Manuals on Demand`,
        description: `Access practical manuals created by specialists. Unlock any guide instantly using tokens.`,
        keywords: ["manuals", "guides", "technical", "documentation"],
        canonical: "/",
        ogImage: {
            title: `${COMPANY_NAME}`,
            description: "Expert manuals for every tool and device. Unlock with tokens, use anytime.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image24",
                width: "100%",
                height: "400px",
                alt: "Manuals Library",
            },
            right: {
                type: "text",
                title: "Expert Manuals at Your Fingertips",
                description: `${COMPANY_NAME} gives you access to a growing library of manuals written by industry specialists. From everyday equipment to advanced tools — unlock knowledge when you need it.`,
                bullets: [
                    "Created and verified by professionals",
                    "Covers a wide range of tools and equipment",
                    "Instant digital access on all devices",
                    "Structured, easy-to-follow instructions",
                    "Continuously expanding guide database",
                    "Includes visuals and illustrations",
                    "Secure access and fast delivery",
                    "Supports beginners and professionals"
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `How ${COMPANY_NAME} Works`,
                description: `Each manual can be unlocked with tokens. Tokens give you flexibility: spend them only on the guides you need, when you need them.`,
                bullets: [
                    "Buy tokens once, use anytime",
                    "No subscriptions or auto-renewals",
                    "Transparent pricing system",
                    "No hidden charges or upsells",
                    "Tokens valid across all categories",
                    "Manage tokens in personal dashboard",
                    "Use for any manual, any time",
                    "Works for both individuals and teams"
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image25",
                width: "100%",
                height: "400px",
                alt: "Token Access",
            },
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image26",
                width: "100%",
                height: "400px",
                alt: "Dashboard Preview",
            },
            right: {
                type: "text",
                title: "Clear and Organized Dashboard",
                description: "Browse manuals by category, track your token balance, and manage your downloads from a single place.",
                bullets: [
                    "Filter manuals by type or use-case",
                    "Track token spending and history",
                    "Download or preview guides",
                    "Access saved/favorite manuals",
                    "Responsive layout for all devices",
                    "Integrated support and help",
                    "Real-time activity logs",
                    "Secure and private user access"
                ],
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            style: { margin: "2rem 0" },
            cards: [
                {
                    image: "image27",
                    title: "Mobile Friendly",
                    description: "Access manuals on any device, anywhere.",
                    buttonLink: "/get-started",
                    buttonText: "Try Now",
                },
                {
                    image: "image28",
                    title: "Regular Updates",
                    description: "Our library grows every week with new guides.",
                    buttonLink: "/get-started",
                    buttonText: "Join Us",
                },
                {
                    image: "image29",
                    title: "Community Support",
                    description: "Get help from our team and other users.",
                    buttonLink: "/faq",
                    buttonText: "FAQ",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `Why Choose ${COMPANY_NAME}?`,
                description: `Unlike random internet tutorials, ${COMPANY_NAME} manuals are created and reviewed by specialists. You get accurate, structured, and reliable information in every guide.`,
                bullets: [
                    "Reviewed by verified professionals",
                    "High quality and structured content",
                    "Covers both common and niche topics",
                    "Easy for beginners and pros alike",
                    "Built with real-life applications in mind",
                    "Visual aids and diagrams included",
                    "Access on all devices",
                    "Data protection and privacy first"
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image30",
                width: "100%",
                height: "400px",
                alt: "Specialist Manuals",
            },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: `Start Using ${COMPANY_NAME} Today`,
                description: "Unlock manuals instantly with tokens and gain access to reliable knowledge for your equipment and tools.",
                bullets: [
                    "Unlock expert-written manuals",
                    "Pay only for what you need",
                    "Use tokens flexibly anytime",
                    "Mobile & desktop compatible",
                    "No subscriptions required",
                    "Constantly expanding content",
                    "Works worldwide, 24/7 access",
                    "Risk-free access to knowledge"
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
            style: { margin: "3rem 0" },
            cards: [
                {
                    image: "image31",
                    title: "Wide Manual Library",
                    description: "Access manuals across multiple categories and industries.",
                    buttonLink: "/get-started",
                    buttonText: "Get Started",
                },
                {
                    image: "image32",
                    title: "Token Flexibility",
                    description: "Use tokens only on the manuals you need, no recurring fees.",
                    buttonLink: "/get-started",
                    buttonText: "Get Started",
                },
                {
                    image: "image33",
                    title: "Expert-Created Guides",
                    description: "Every manual is written and reviewed by specialists.",
                    buttonLink: "/get-started",
                    buttonText: "Get Started",
                },
                {
                    image: "image34",
                    title: "Always Accessible",
                    description: "Download and revisit your manuals at any time.",
                    buttonLink: "/get-started",
                    buttonText: "Get Started",
                },
            ],
        },
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} is a platform that provides expert-written manuals for different tools and equipment.`,
                },
                {
                    question: "How do I access a manual?",
                    answer: "Each manual can be unlocked by spending tokens. Buy tokens once and use them whenever you need.",
                },
                {
                    question: "Do manuals stay available after purchase?",
                    answer: "Yes. Once unlocked, you can access your manual anytime through your dashboard.",
                },
                {
                    question: "Can I use the service on mobile?",
                    answer: "Yes, the platform is fully mobile-friendly and optimized for all screen sizes.",
                },
                {
                    question: "How often are new manuals added?",
                    answer: "We add new manuals and guides every week to ensure up-to-date knowledge.",
                },
                {
                    question: "Can I download the manuals?",
                    answer: "Yes, every unlocked manual is downloadable in PDF or web format.",
                },
                {
                    question: "Do tokens expire?",
                    answer: "No, purchased tokens do not expire and can be used at any time.",
                },
                {
                    question: "Is my personal data safe?",
                    answer: "Absolutely. We use strong encryption and follow privacy best practices.",
                },
                {
                    question: "Can I preview a manual before buying?",
                    answer: "Yes. You’ll see a preview or summary before you spend tokens.",
                },
                {
                    question: "Do you offer refunds?",
                    answer: "Yes, if there is an error or issue, we’ll resolve or refund. Contact us via /contact-us.",
                },
            ],
        },
    ],
};

export default schema;
