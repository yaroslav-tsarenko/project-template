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
        description: `${COMPANY_NAME} token paketlerinden ihtiyaçlarınıza en uygun olanı seçin. Bireyler, profesyoneller ve işletmeler için esnek fiyatlandırma.`,
        keywords: [
            `${COMPANY_NAME} fiyatlandırma`,
            "token paketleri",
            "kılavuz erişimi",
            "abonelik alternatifi",
            "esnek fiyatlandırma",
        ],
        canonical: "/pricing",
        ogImage: {
            title: `${COMPANY_NAME} Fiyatlandırma`,
            description: "Kılavuzlar için esnek, token tabanlı fiyatlandırma.",
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
                description: `${COMPANY_NAME}’de yalnızca ihtiyacınız kadar ödeme yaparsınız. Token tabanlı sistemimiz esnek, uygun fiyatlı ve ölçeklenebilirdir — ister tek bir kılavuz açın, ister tüm ekibiniz için belge yönetin.`,
                bullets: [
                    "Gizli ücret veya abonelik yok",
                    "Token’lar asla süresi dolmaz ve her zaman kullanılabilir",
                    "Bireyler, serbest çalışanlar ve ekipler için idealdir",
                    "Yalnızca ihtiyaç duyduğunuzda satın alın",
                    "Otomatik yenileme veya taahhüt yok",
                    "Satın alma sonrası anında erişim",
                    "Her satın almadan önce net fiyat görünür",
                    "Planlar arasında kolay yükseltme",
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
                    description: "Zaman zaman kılavuzlara ihtiyaç duyan bireyler için mükemmel.",
                    features: [
                        "1000 token dahil",
                        "Anında kılavuz erişimi",
                        "Süresiz kullanım",
                        "Tek seferlik projeler için ideal",
                        "Uygun fiyatlı başlangıç paketi",
                        "Abonelik gerektirmez",
                        "Freelancer’lar için mükemmel",
                        "Basit satın alma deneyimi",
                    ],
                    buttonText: "Hemen Satın Al",
                    buttonLink: "/checkout?plan=starter",
                },
                {
                    type: "pricing",
                    variant: "highlight",
                    title: "Pro Paketi",
                    price: "20",
                    tokens: 2000,
                    description: "Profesyoneller ve küçük ekipler için mükemmel seçim.",
                    features: [
                        "2000 token dahil",
                        "Öncelikli kılavuz oluşturma",
                        "İndirme & çevrimdışı erişim",
                        "Büyüyen ekipler için en iyi değer",
                        "Daha hızlı kılavuz üretimi",
                        "Yeni özelliklere erken erişim",
                        "Düzenli kullanım için ideal",
                        "Tüm cihazlardan erişim",
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
                    description: "Düzenli belge ihtiyaçları olan işletmeler için en iyi seçenek.",
                    features: [
                        "4000 token dahil",
                        "Özel destek",
                        "Çok dilli kılavuzlar",
                        "Sektöre özel içerikler",
                        "Kullanıcı rol yönetimi",
                        "Departmanlar arası ölçeklenebilir",
                        "Fatura desteği",
                        "API entegrasyonu mevcut",
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
                    description: "Kendi token miktarınızı girin ve fiyatı anında görün.",
                    features: [
                        "Esnek token seçimi",
                        "Otomatik fiyat hesaplama",
                        "Süresiz kullanım",
                        "Tamamen özelleştirilebilir",
                        "Bütçenizi kolayca yönetin",
                        "Belirli kullanım senaryoları için uygun",
                        "Satın alma sonrası anında teslimat",
                        "Yalnızca kullandığınız kadar ödeyin",
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
                alt: "Token sistemi nasıl çalışır",
            },
            right: {
                type: "text",
                title: "Token Sistemi Nasıl Çalışır?",
                description: `Her açtığınız kılavuz belirli sayıda token gerektirir. Token’ları bir kez satın alın ve istediğiniz zaman kullanın. Token’ların süresi dolmaz, böylece belge stratejinizi tamamen özgürce planlayabilirsiniz. Ek hizmetler (özelleştirme, çeviri vb.) ayrı fiyatlandırılır.`,
                bullets: [
                    "30 token = 1 standart kılavuz",
                    "Gelişmiş kılavuzlar daha fazla token gerektirebilir",
                    "Token’lar hesabınızda saklanır",
                    "Kullanım onayından önce net olarak gösterilir",
                    "Birden fazla satın alımı birleştirebilirsiniz",
                    "Token kullanımınızı panelden takip edin",
                    "İstediğiniz zaman yükleme yapabilirsiniz",
                    "Kısa veya uzun vadeli ihtiyaçlar için ideal",
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
                    title: "Neden Token?",
                    description: `Geleneksel abonelikler sizi sürekli ödemelere bağlar. ${COMPANY_NAME} ile yalnızca ihtiyacınız olan kılavuzlar için ödeme yaparsınız — basit, şeffaf ve ölçeklenebilir.`,
                    buttonLink: "/about-us",
                    buttonText: "Daha Fazla Bilgi",
                },
                {
                    image: "image3",
                    title: "Kurumsal Avantajlar",
                    description: `İşletmeler ekipleri için daha büyük token paketleri satın alabilir. Maliyet tasarrufu sağlayın, özel destek alın ve sektörünüze özel içeriklerden yararlanın.`,
                    buttonLink: "/contact",
                    buttonText: "Satış Ekibiyle İletişime Geçin",
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
                description: `${COMPANY_NAME}, binlerce kullanıcı tarafından güvenle kullanılmaktadır. Bireylerden kurumsal ekiplere kadar, token tabanlı fiyatlandırmamız herkesin ihtiyaç duyduğu bilgiye ulaşmasını sağlar.`,
                bullets: [
                    `"Freelance işlerim için mükemmel — yalnızca ihtiyaç duyduğumda satın alıyorum."`,
                    `"Mühendislik ekibimiz her hafta saatler kazanıyor, ${COMPANY_NAME} sayesinde."`,
                    `"Uygun fiyatlı, esnek ve kullanımı kolay — kesinlikle tavsiye ederim."`,
                    `"Ekip büyüdükçe ölçeklendirmesi çok kolay."`,
                    `"Abonelik modelinden geçtik ve çok memnunuz."`,
                    `"Destek ekibi her zaman hızlı ve yardımsever."`,
                    `"İç dokümantasyon yönetimi için mükemmel."`,
                    `"Özel kılavuzlar tam olarak sektörümüz için uygundu."`,
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
                    question: "Token’ların süresi doluyor mu?",
                    answer: "Hayır. Token’lar hesabınızda kalır ve istediğiniz zaman kullanabilirsiniz.",
                },
                {
                    question: "Planımı daha sonra yükseltebilir miyim?",
                    answer: "Evet. Her zaman daha fazla token satın alabilir veya daha büyük bir pakete geçebilirsiniz.",
                },
                {
                    question: "Bir kılavuz kaç token gerektiriyor?",
                    answer: "Her kılavuz 30 token gerektirir. Gelişmiş veya özel kılavuzlar ek token gerektirebilir, bu bilgi her zaman önceden gösterilir.",
                },
                {
                    question: "İade yapıyor musunuz?",
                    answer: "Kullanılmamış token’lar, satın alma tarihinden itibaren 14 gün içinde iade edilebilir.",
                },
                {
                    question: "İşletmelere özel fiyatlandırma sunuyor musunuz?",
                    answer: `Evet. Kurumsal müşteriler özel paketler, özel kılavuzlar ve destek için bizimle iletişime geçebilir. E-posta: ${COMPANY_EMAIL}`,
                },
                {
                    question: "Tüm planlarda destek dahil mi?",
                    answer: "Evet. Tüm paketlerde destek ekibimize erişim dahildir. Kurumsal planlar öncelikli destek alır.",
                },
                {
                    question: "Kılavuzları indirebilir miyim?",
                    answer: "Evet. Pro ve Kurumsal planlarda kılavuzları PDF olarak indirip çevrimdışı kullanabilirsiniz.",
                },
                {
                    question: "Token’larımı nasıl yönetebilirim?",
                    answer: "Kullanıcı panelinizde token bakiyenizi, satın alma geçmişinizi ve faturalarınızı takip edebilirsiniz.",
                },
                {
                    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
                    answer: "Tüm büyük kredi kartlarını, PayPal’ı ve Kurumsal planlar için banka havalesini kabul ediyoruz.",
                },
                {
                    question: "Token’ları ekibimle paylaşabilir miyim?",
                    answer: "Evet. Pro ve Kurumsal planlar, uygun rol atamalarıyla token paylaşımına izin verir.",
                },
            ],
        },
    ],
};

export default pricingSchema;
