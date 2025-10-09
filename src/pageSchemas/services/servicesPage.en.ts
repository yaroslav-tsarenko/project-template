import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Our Services — ${COMPANY_NAME}`,
        description:
            `Explore ${COMPANY_NAME} services: custom manuals for tech devices, electronics, and equipment. Flexible token system, instant digital access, and trusted expertise for all your technology needs.`,
        keywords: [
            `${COMPANY_NAME} services`,
            "custom tech manuals",
            "electronics guides",
            "device documentation",
            "IT equipment manuals",
            "token system",
            "digital manuals",
            "technical guides"
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} Services`,
            description:
                "Professional manuals for tech devices, electronics, and equipment. Tailored, flexible, and token-based.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "section",
            left: {
                type: "text",
                title: "Custom Manuals for Tech Devices",
                description:
                    `Every tech device, electronic tool, and IT equipment is unique. That’s why ${COMPANY_NAME} creates manuals designed for your specific technology needs. Whether you’re working with smartphones, computers, smart home devices, or industrial electronics, our experts deliver clear, structured, and accurate documentation.`,
                bullets: [
                    "Individually tailored tech guides",
                    "Specialist-created content for electronics",
                    "From home gadgets to industrial IT equipment",
                    "Clear and structured documentation",
                    "Up-to-date information and compatibility",
                    "Covers hardware and software workflows",
                    "Tested and approved by experts",
                    "Ideal for technicians, businesses, and users",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Custom tech manuals service",
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image2",
                    title: "Quick Start Guides",
                    description: "Concise manuals to get your tech device or electronic equipment running fast.",
                    buttonLink: "/sign-up",
                    buttonText: "Get Started",
                },
                {
                    image: "image3",
                    title: "Step-by-Step Tutorials",
                    description:
                        "Detailed walkthroughs for setting up, troubleshooting, and maintaining your technology.",
                    buttonLink: "/sign-up",
                    buttonText: "Unlock Now",
                },
                {
                    image: "image4",
                    title: "Maintenance Manuals",
                    description:
                        "Stay ahead with manuals that cover regular checks and preventive care for electronics and IT devices.",
                    buttonLink: "/sign-up",
                    buttonText: "View Guides",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image5",
                width: "100%",
                height: "400px",
                alt: "Token based access",
            },
            right: {
                type: "text",
                title: "Flexible Token System",
                description:
                    `No subscriptions. With ${COMPANY_NAME}, you purchase tokens and spend them only on the tech manuals you need. Unlock guides for smartphones, computers, smart devices, and more — simple, scalable, and transparent.`,
                bullets: [
                    "No monthly fees or hidden charges",
                    "Only pay for what you need",
                    "Token packages for all sizes",
                    "Scalable for individuals or teams",
                    "Easy to top up anytime",
                    "Usage history tracking",
                    "Budget-friendly model",
                    "Designed for flexibility and fairness",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Instant Digital Access",
                description:
                    `${COMPANY_NAME} manuals for tech devices and electronics are available instantly after unlocking. Access them from your dashboard, download for offline use, and keep your digital library organized.`,
                bullets: [
                    "Available right after unlocking",
                    "Use online or offline",
                    "Access from any device",
                    "No software required",
                    "Unlimited re-downloads",
                    "Linked to your personal account",
                    "Organize by tags and categories",
                    "Reliable access 24/7",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image6",
                width: "100%",
                height: "400px",
                alt: "Instant access",
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image7",
                    title: "Industry-Specific Tech Manuals",
                    description:
                        "Tailored guides for healthcare devices, construction electronics, IT, and manufacturing equipment.",
                    buttonLink: "/sign-up",
                    buttonText: "Learn More",
                },
                {
                    image: "image8",
                    title: "Multi-Language Documentation",
                    description:
                        "Access tech manuals in your preferred language for global teams and diverse users.",
                    buttonLink: "/sign-up",
                    buttonText: "Start Now",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Trusted by Tech Professionals and Users",
                description:
                    `From engineers and IT specialists to everyday users, ${COMPANY_NAME} is the go-to source for reliable tech manuals. Our service blends professional accuracy with easy access for anyone who needs structured knowledge about technology and electronics.`,
                bullets: [
                    "Relied upon across industries",
                    "Used by engineers and teams",
                    "Designed for usability and depth",
                    "Created by technical experts",
                    "Consistent, verified information",
                    "Modern layout for easy navigation",
                    "Perfect for onboarding and training",
                    "Feedback-driven improvements",
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
                    question: `What services does ${COMPANY_NAME} provide?`,
                    answer:
                        "We offer custom manuals, quick start guides, tutorials, and detailed documentation for tech devices, electronics, and IT equipment across industries.",
                },
                {
                    question: "How does the token system work?",
                    answer:
                        "You purchase tokens and spend them on manuals. Each guide costs a certain number of tokens depending on its complexity. The more manuals you need, the more tokens you can purchase.",
                },
                {
                    question: "Can I use manuals offline?",
                    answer:
                        "Yes. Once unlocked, manuals can be downloaded and accessed anytime, even without an internet connection.",
                },
                {
                    question: "Do you provide manuals in multiple languages?",
                    answer:
                        `${COMPANY_NAME} supports multi-language documentation to meet the needs of global users.`,
                },
                {
                    question: "Is customer support available if I have issues?",
                    answer: "Yes, our support team is available via chat and email to help you resolve any questions or technical difficulties.",
                },
                {
                    question: "Are manuals updated regularly?",
                    answer: "Yes, we frequently review and update our manuals to include the latest best practices, updates, and device changes.",
                },
                {
                    question: "Can businesses get bulk token packages?",
                    answer: "Absolutely. We offer volume discounts and enterprise plans for companies and organizations needing extensive manual access.",
                },
                {
                    question: "Is there a refund if a manual doesn’t meet my needs?",
                    answer: "In certain cases, we may issue a refund if the manual is incorrect or does not meet the promised quality. Contact support for review.",
                },
                {
                    question: "How secure is my data and token balance?",
                    answer: "We use secure cloud infrastructure and encryption to protect your account data, purchases, and manual access.",
                },
                {
                    question: "Can I share manuals with others?",
                    answer: "Manuals are linked to your account and license. Sharing outside your account violates our terms, but team or enterprise access is available.",
                },
            ],
        },
    ],
};

export default schema;