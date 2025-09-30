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
        title: `Fiyatlandırma — ${COMPANY_NAME}`,
        description:
            `${COMPANY_NAME} için ihtiyacınıza uygun jeton paketini seçin. Bireyler, profesyoneller ve işletmeler için Başlangıç, Pro ve Kurumsal seçeneklerle esnek fiyatlandırma.`,
        keywords: [
            `${COMPANY_NAME} fiyatlandırma`,
            "jeton paketleri",
            "kılavuz erişimi",
            "abonelik alternatifleri",
            "kılavuz fiyatları"
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} Fiyatlandırma`,
            description: "Kılavuzlar için esnek jeton tabanlı fiyatlandırma.",
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
                title: "Basit ve Şeffaf Fiyatlandırma",
                description:
                    `${COMPANY_NAME}’de sadece ihtiyacınız olanı ödersiniz. Jeton tabanlı sistemimiz esnek, uygun fiyatlı ve ölçeklenebilir — ister tek bir kılavuz açın, ister tüm şirketiniz için dokümantasyon yönetin.`,
                bullets: [
                    "Gizli ücret veya abonelik yok",
                    "Jetonlar asla süresi dolmaz",
                    "Bireyler, ekipler ve işletmeler için ideal",
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
                    title: "Başlangıç Paketi",
                    price: "10",
                    tokens: 1000,
                    description: "Ara sıra kılavuz ihtiyacı olan bireyler için mükemmel.",
                    features: [
                        "1000 jeton dahil",
                        "Anında kılavuz erişimi",
                        "Süresiz kullanım",
                        "Tek seferlik projeler için ideal"
                    ],
                    buttonText: "Satın Al",
                    buttonLink: "/checkout?plan=starter",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "Pro Paketi",
                    price: "20",
                    tokens: 2000,
                    description: "Profesyoneller ve küçük ekipler için harika.",
                    features: [
                        "2000 jeton dahil",
                        "Öncelikli kılavuz oluşturma",
                        "İndir & çevrimdışı erişim",
                        "Büyüyen ekipler için en iyi değer"
                    ],
                    buttonText: "Pro Ol",
                    buttonLink: "/checkout?plan=pro",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Kurumsal Paket",
                    price: "40",
                    tokens: 4000,
                    description: "Düzenli dokümantasyon ihtiyacı olan işletmeler için en iyisi.",
                    features: [
                        "4000 jeton dahil",
                        "Özel destek",
                        "Çok dilli kılavuzlar",
                        "Sektöre özel rehberler",
                        "Büyük ekipler için ölçeklenebilir"
                    ],
                    buttonText: "Premium’a Geç",
                    buttonLink: "/checkout?plan=enterprise",
                },
                {
                    type: "pricing",
                    variant: "basic",
                    title: "Özel Paket",
                    price: "dynamic",
                    tokens: 0,
                    description: "Kendi jeton miktarınızı girin, anında fiyat alın.",
                    features: [
                        "Esnek jeton seçimi",
                        "Otomatik fiyat hesaplama",
                        "Süresiz kullanım",
                        "Özel ihtiyaçlar için ideal"
                    ],
                    buttonText: "Özel Satın Al",
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
                alt: "Jeton sistemi nasıl çalışır",
            },
            right: {
                type: "text",
                title: "Jeton Sistemi Nasıl Çalışır?",
                description:
                    `Açtığınız her kılavuz için jeton gerekir. Jetonları bir kez satın alın, istediğinizde kullanın. Jetonların süresi dolmaz, böylece dokümantasyon stratejinizi baskı olmadan planlayabilirsiniz. Ek hizmetler (özelleştirme, çeviri vb.) ayrıca fiyatlandırılır.`,
                bullets: [
                    "30 jeton = 1 kılavuz (standart karmaşıklık)",
                    "Gelişmiş rehberler veya ek hizmetler daha fazla jeton gerektirebilir",
                    "Jetonlar hesabınızda kalır",
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
                    title: "Neden Jeton?",
                    description:
                        `Geleneksel abonelikler sizi sürekli ödemelere zorlar. ${COMPANY_NAME} ile sadece ihtiyacınız olan kılavuzlar için ödeme yaparsınız — basit, şeffaf ve ölçeklenebilir.`,
                    buttonLink: "/about-us",
                    buttonText: "Daha Fazla Bilgi",
                },
                {
                    image: "image3",
                    title: "Kurumsal Avantajlar",
                    description:
                        `İşletmeler ekipler için daha büyük jeton paketleri satın alabilir. Maliyetleri azaltın, özel destek alın ve sektörünüze özel dokümantasyonun keyfini çıkarın.`,
                    buttonLink: "/contact",
                    buttonText: "Satış ile İletişim",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Müşterilerimiz Ne Diyor?",
                description:
                    `Binlerce kullanıcı güvenilir dokümantasyon için ${COMPANY_NAME}’i tercih ediyor. Bireylerden işletmelere, jeton tabanlı fiyatlandırmamız herkesin ihtiyacı olan bilgiye ulaşmasını sağlıyor.`,
                bullets: [
                    `"Freelance işlerim için harika — sadece ihtiyacım olduğunda kılavuz alıyorum."`,
                    `"Mühendislik ekibimiz her hafta saatlerce zaman kazanıyor."`,
                    `"Uygun fiyatlı, esnek ve kullanımı kolay — kesinlikle tavsiye ederim."`,
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
                    question: "Jetonların süresi dolar mı?",
                    answer: "Hayır. Jetonlar hesabınızda istediğiniz kadar kalır.",
                },
                {
                    question: "Daha sonra paketimi yükseltebilir miyim?",
                    answer: "Evet. Her zaman daha fazla jeton satın alabilir veya daha büyük bir pakete geçebilirsiniz.",
                },
                {
                    question: "Bir kılavuz kaç jeton?",
                    answer: "Her kılavuz 30 jetondur. Daha karmaşık veya özel kılavuzlar ve ek hizmetler ek jeton gerektirebilir, bu önceden belirtilir.",
                },
                {
                    question: "İade yapıyor musunuz?",
                    answer: "Kullanılmamış jetonlar, satın alma tarihinden itibaren 14 gün içinde iade edilebilir.",
                },
                {
                    question: "İşletmeler için özel fiyatlandırma var mı?",
                    answer: `Evet. Kurumsal müşteriler özel paketler, özel kılavuzlar ve özel destek için doğrudan bizimle iletişime geçebilir. E-posta: ${COMPANY_EMAIL}`,
                },
            ],
        },
    ],
};

export default pricingSchema;
