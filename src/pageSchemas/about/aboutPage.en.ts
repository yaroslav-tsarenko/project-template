import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
    COMPANY_EMAIL,
} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `About ${COMPANY_NAME} — Our Story & Values`,
        description: `Discover the mission, history, and principles that drive ${COMPANY_NAME}. Learn how our specialists combine technology, expertise, and customer focus to deliver world-class manuals and documentation.`,
        keywords: [
            `about ${COMPANY_NAME}`,
            "company values",
            "expert team",
            "technical manuals",
            "corporate mission",
            "company vision",
            "support team",
            "customer focus"
        ],
        canonical: "/about-us",
        ogImage: {
            title: `${COMPANY_NAME} — About Us`,
            description: `Meet the team, vision, and story behind ${COMPANY_NAME}.`,
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        {
            type: "section",
            left: {
                type: "text",
                title: `Welcome to ${COMPANY_NAME}`,
                description: `${COMPANY_NAME}, operated by ${COMPANY_LEGAL_NAME} (Company No: ${COMPANY_NUMBER}), was founded with one purpose — to make reliable knowledge accessible to everyone. We develop expert-created manuals and guides that help individuals, businesses, and professionals use technology confidently and efficiently.`,
                bullets: [
                    "Founded with a vision to democratize access to expert knowledge",
                    "Driven by innovation, accuracy, and transparency",
                    "Trusted by thousands of users across multiple industries",
                    "Bringing expert technical content to both professionals and learners",
                    "Building a global ecosystem of verified, easy-to-use manuals",
                    "Adhering to high-quality standards and editorial precision",
                    "Combining human expertise with AI-assisted processes",
                    "Committed to continuous improvement and user satisfaction",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image11",
                width: "100%",
                height: "420px",
                alt: "Company mission and vision",
            },
        },

        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image12",
                width: "100%",
                height: "400px",
                alt: "Our diverse team working together",
            },
            right: {
                type: "text",
                title: "Our Team",
                description:
                    `At ${COMPANY_NAME}, our strength lies in our people — a diverse team of engineers, technical writers, designers, and researchers who share a passion for knowledge and innovation. We combine technical accuracy with creativity to make every manual accessible and engaging.`,
                bullets: [
                    "Composed of engineers, editors, and technology enthusiasts",
                    "Decades of combined experience across software and hardware industries",
                    "Regular internal workshops for skill development and training",
                    "Collaborative culture built on respect and curiosity",
                    "Commitment to clarity, precision, and user satisfaction",
                    "Cross-functional teamwork ensures consistency and excellence",
                    "Dedicated research and development units for new standards",
                    "Encouraging creativity and ownership in every project",
                ],
            },
        },

        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            style: { margin: "3rem 0" },
            cards: [
                {
                    image: "image13",
                    title: "Our Values",
                    description:
                        "Integrity, clarity, accessibility, and innovation define our identity. We aim to simplify complexity and empower every user through structured, understandable, and professional documentation.",
                    buttonLink: "/about-us",
                    buttonText: "Learn More",
                },
                {
                    image: "image14",
                    title: "Our Services",
                    description:
                        `${COMPANY_NAME} provides a broad range of specialized manuals and technical guides covering electronics, IT systems, consumer devices, and industrial technologies — all developed to make learning and maintenance seamless.`,
                    buttonLink: "/services",
                    buttonText: "View Services",
                },
            ],
        },

        {
            type: "section",
            left: {
                type: "text",
                title: "Why Choose Us?",
                description:
                    `We believe that documentation should not only inform but also inspire confidence. ${COMPANY_NAME} stands out by combining precision, usability, and a customer-first mindset in every guide we produce.`,
                bullets: [
                    "Comprehensive documentation designed for clarity and usability",
                    "Expert-created and verified content trusted by global audiences",
                    "Support for individual users, teams, and enterprise organizations",
                    "Constantly updated to meet the latest technical standards",
                    "Focus on long-term reliability and accessibility",
                    "Adaptive structure for modern workflows and automation systems",
                    "Inclusive approach — we write for everyone, not just experts",
                    "Real feedback integrated into our continuous improvement process",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image15",
                width: "100%",
                height: "420px",
                alt: "Why choose our company",
            },
        },

        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image16",
                width: "100%",
                height: "400px",
                alt: "Transparent and fair pricing plans",
            },
            right: {
                type: "text",
                title: "Transparent Pricing & Ethics",
                description:
                    `Transparency and fairness are at the core of our philosophy. We ensure every user knows exactly what they are paying for and receives unmatched value in every purchase.`,
                bullets: [
                    "No hidden fees or surprise renewals",
                    "Flexible pay-as-you-go model with token-based access",
                    "Clearly defined plans for individuals and enterprises",
                    "Invoices and billing available for all transactions",
                    "Ethical data handling and transparent business communication",
                    "Commitment to long-term customer satisfaction over short-term profit",
                    "Easy upgrade or downgrade options without restrictions",
                    "Global accessibility — simple, secure, and consistent pricing worldwide",
                ],
            },
        },

        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            style: { margin: "3rem 0" },
            cards: [
                {
                    image: "image17",
                    title: "FAQ",
                    description:
                        "Explore detailed answers to common questions about our platform, manuals, token system, and customer support options.",
                    buttonLink: "/faq",
                    buttonText: "Visit FAQ",
                },
                {
                    image: "image18",
                    title: "Get Started",
                    description:
                        `Join thousands of users who trust ${COMPANY_NAME} for reliable technical documentation. Start exploring our manuals today.`,
                    buttonLink: "/get-started",
                    buttonText: "Get Started",
                },
            ],
        },

        {
            type: "section",
            left: {
                type: "text",
                title: "Contact & Support",
                description: `Have any questions, suggestions, or feedback? We are always ready to help. Contact our support team by email at ${COMPANY_EMAIL} or visit us at ${COMPANY_ADDRESS}.`,
                bullets: [
                    "Dedicated 24/7 customer support via email",
                    "Detailed help center and self-service resources",
                    "Fast response times and personalized assistance",
                    "Technical guidance from experienced staff",
                    "Ongoing support for both free and paid users",
                    "Regular updates and service announcements",
                    "Multilingual assistance for international users",
                    "Commitment to transparent communication and empathy",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image19",
                width: "100%",
                height: "420px",
                alt: "Customer support and contact",
            },
        },

        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Our Commitment to Excellence",
                description:
                    `${COMPANY_NAME} continues to evolve with technology while maintaining the same dedication to excellence. We work tirelessly to ensure our manuals remain the most comprehensive, accurate, and user-friendly resources available.`,
                bullets: [
                    "Continuous innovation through research and feedback",
                    "Sustainability and ethical content practices",
                    "Partnerships with educational and industry leaders",
                    "Implementation of modern accessibility standards",
                    "Ensuring user data privacy and GDPR compliance",
                    "Balancing automation with human editorial expertise",
                    "Global expansion with localized manual coverage",
                    "Future-ready documentation for emerging technologies",
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
                    question: `What is ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} is a global platform that provides expertly written manuals, guides, and educational content, operated by ${COMPANY_LEGAL_NAME}.`,
                },
                {
                    question: "How can I contact support?",
                    answer: `You can contact our team anytime via email at ${COMPANY_EMAIL} or through the contact form on our website.`,
                },
                {
                    question: "Where are you located?",
                    answer: `Our registered office is located at ${COMPANY_ADDRESS}.`,
                },
                {
                    question: "How do I learn more about pricing?",
                    answer: `You can explore our transparent pricing models and token packages on the /pricing page.`,
                },
                {
                    question: "How can I get started?",
                    answer: `Visit /get-started to create your account and begin accessing professional manuals and guides.`,
                },
            ],
        },
    ],
};

export default schema;
