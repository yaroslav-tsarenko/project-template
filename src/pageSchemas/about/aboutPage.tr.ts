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
        title: `${COMPANY_NAME} Hakkında — Hikayemiz ve Değerlerimiz`,
        description: `${COMPANY_NAME}'in misyonunu, tarihini ve ilkelerini keşfedin. Uzman ekibimizin teknolojiyi, deneyimi ve müşteri odaklı yaklaşımı nasıl birleştirerek dünya standartlarında kılavuzlar sunduğunu öğrenin.`,
        keywords: [
            `${COMPANY_NAME} hakkında`,
            "şirket değerleri",
            "uzman ekip",
            "teknik kılavuzlar",
            "kurumsal misyon",
            "şirket vizyonu",
            "destek ekibi",
            "müşteri memnuniyeti",
        ],
        canonical: "/about-us",
        ogImage: {
            title: `${COMPANY_NAME} — Hakkımızda`,
            description: `${COMPANY_NAME}'in arkasındaki ekip, vizyon ve hikayeyle tanışın.`,
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        {
            type: "section",
            left: {
                type: "text",
                title: `${COMPANY_NAME}'e Hoş Geldiniz`,
                description: `${COMPANY_NAME}, ${COMPANY_LEGAL_NAME} tarafından işletilmektedir (Şirket No: ${COMPANY_NUMBER}). Amacımız, güvenilir bilgilere herkesin erişebilmesini sağlamaktır. Bireylerin, işletmelerin ve profesyonellerin teknolojiyi güvenle ve verimli bir şekilde kullanmalarına yardımcı olan uzmanlar tarafından hazırlanmış kılavuzlar ve rehberler geliştiriyoruz.`,
                bullets: [
                    "Uzman bilgiye erişimi demokratikleştirme vizyonuyla kuruldu",
                    "Yenilik, doğruluk ve şeffaflık tarafından yönlendirilen bir yapı",
                    "Birçok sektörde binlerce kullanıcı tarafından güvenilir bulunuyor",
                    "Uzman teknik içeriği hem profesyonellere hem öğrenenlere sunuyor",
                    "Kullanımı kolay, doğrulanmış küresel bir bilgi ekosistemi oluşturuyor",
                    "Yüksek kalite standartlarına ve editöryel doğruluğa bağlılık",
                    "İnsan uzmanlığını yapay zeka destekli süreçlerle birleştiriyor",
                    "Sürekli gelişim ve kullanıcı memnuniyetine adanmış bir yaklaşım",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image11",
                width: "100%",
                height: "420px",
                alt: "Şirket misyonu ve vizyonu",
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
                alt: "Birlikte çalışan çeşitli ekip",
            },
            right: {
                type: "text",
                title: "Ekibimiz",
                description: `${COMPANY_NAME}'de gücümüz insanlarımızda. Bilgiye ve yeniliğe tutkuyla bağlı mühendisler, teknik yazarlar, tasarımcılar ve araştırmacılardan oluşan çeşitli bir ekibiz. Her kılavuzu erişilebilir ve anlaşılır hale getirmek için teknik doğruluğu yaratıcılıkla birleştiriyoruz.`,
                bullets: [
                    "Mühendislerden, editörlerden ve teknoloji tutkunlarından oluşur",
                    "Yazılım ve donanım sektörlerinde onlarca yıllık birleşik deneyim",
                    "Düzenli eğitimler ve atölyelerle sürekli gelişim",
                    "Saygı ve meraka dayalı iş birliği kültürü",
                    "Açıklık, doğruluk ve kullanıcı memnuniyetine bağlılık",
                    "Çok disiplinli çalışma sayesinde tutarlılık ve mükemmellik",
                    "Yeni standartlar için araştırma ve geliştirme birimleri",
                    "Her projede yaratıcılık ve sorumluluk bilinciyle hareket etme",
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
                    title: "Değerlerimiz",
                    description:
                        "Dürüstlük, açıklık, erişilebilirlik ve yenilik bizim kimliğimizi tanımlar. Karmaşık bilgileri sadeleştirerek her kullanıcının güvenle öğrenmesini sağlıyoruz.",
                    buttonLink: "/about-us",
                    buttonText: "Daha Fazla Bilgi",
                },
                {
                    image: "image14",
                    title: "Hizmetlerimiz",
                    description: `${COMPANY_NAME}, elektronik, BT sistemleri, tüketici cihazları ve endüstriyel teknolojiler için özel hazırlanmış teknik kılavuzlar sunar. Tüm içerikler, öğrenme ve bakım süreçlerini kolaylaştırmak amacıyla geliştirilmiştir.`,
                    buttonLink: "/services",
                    buttonText: "Hizmetleri Görüntüle",
                },
            ],
        },

        {
            type: "section",
            left: {
                type: "text",
                title: "Neden Bizi Seçmelisiniz?",
                description: `Dokümantasyonun yalnızca bilgilendirmesi değil, aynı zamanda güven vermesi gerektiğine inanıyoruz. ${COMPANY_NAME}, her rehberde doğruluk, kullanılabilirlik ve müşteri odaklı yaklaşımı birleştirerek fark yaratır.`,
                bullets: [
                    "Anlaşılır ve kullanıcı dostu kapsamlı dokümantasyon",
                    "Uzmanlar tarafından oluşturulmuş, doğrulanmış güvenilir içerikler",
                    "Bireysel, ekip ve kurumsal kullanıcılar için destek",
                    "En güncel teknik standartlara göre sürekli güncellenen içerik",
                    "Uzun vadeli güvenilirlik ve erişilebilirliğe odaklı yapı",
                    "Modern iş akışları ve otomasyon sistemlerine uyumlu yapı",
                    "Kapsayıcı bir yaklaşım — yalnızca uzmanlara değil herkese hitap eder",
                    "Gerçek kullanıcı geri bildirimleriyle sürekli iyileştirme süreci",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image15",
                width: "100%",
                height: "420px",
                alt: "Neden bizi seçmelisiniz",
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
                alt: "Şeffaf ve adil fiyatlandırma planları",
            },
            right: {
                type: "text",
                title: "Şeffaf Fiyatlandırma ve Etik Yaklaşım",
                description: `Şeffaflık ve adalet, felsefemizin temel taşlarıdır. Her kullanıcının ne için ödeme yaptığını net bir şekilde bilmesini ve yaptığı her satın alımdan yüksek değer elde etmesini sağlıyoruz.`,
                bullets: [
                    "Gizli ücretler veya otomatik yenilemeler yok",
                    "Token tabanlı, kullandığın kadar öde modeli",
                    "Bireysel ve kurumsal kullanıcılar için net planlar",
                    "Tüm işlemler için fatura ve ödeme kayıtları mevcut",
                    "Etik veri yönetimi ve şeffaf iletişim politikası",
                    "Kısa vadeli kazançtan çok uzun vadeli memnuniyet hedefi",
                    "Kısıtlama olmadan kolay plan yükseltme veya düşürme imkanı",
                    "Küresel erişim — basit, güvenli ve tutarlı fiyatlandırma",
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
                    title: "SSS",
                    description:
                        "Platformumuz, kılavuzlarımız, token sistemi ve müşteri desteğimiz hakkında sıkça sorulan soruların yanıtlarını keşfedin.",
                    buttonLink: "/faq",
                    buttonText: "SSS’yi Ziyaret Et",
                },
                {
                    image: "image18",
                    title: "Başlayın",
                    description: `${COMPANY_NAME}'e güvenen binlerce kullanıcıya katılın. Güvenilir teknik dokümantasyonlarla bugün keşfetmeye başlayın.`,
                    buttonLink: "/get-started",
                    buttonText: "Hemen Başlayın",
                },
            ],
        },

        {
            type: "section",
            left: {
                type: "text",
                title: "İletişim ve Destek",
                description: `Sorularınız, önerileriniz veya geri bildiriminiz mi var? Yardımcı olmaktan memnuniyet duyarız. Destek ekibimize ${COMPANY_EMAIL} adresinden e-posta göndererek veya ${COMPANY_ADDRESS} adresimizi ziyaret ederek ulaşabilirsiniz.`,
                bullets: [
                    "7/24 e-posta desteği sunan özel müşteri ekibi",
                    "Detaylı yardım merkezi ve kendi kendine destek kaynakları",
                    "Hızlı yanıt süreleri ve kişisel ilgi",
                    "Deneyimli teknik ekipten profesyonel rehberlik",
                    "Ücretsiz ve ücretli kullanıcılar için sürekli destek",
                    "Düzenli hizmet duyuruları ve güncellemeler",
                    "Uluslararası kullanıcılar için çok dilli destek",
                    "Şeffaf iletişim ve empatiye dayalı yaklaşım",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image19",
                width: "100%",
                height: "420px",
                alt: "Müşteri desteği ve iletişim",
            },
        },

        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Mükemmellik Taahhüdümüz",
                description: `${COMPANY_NAME}, teknolojinin gelişimiyle birlikte sürekli olarak evrim geçirirken aynı mükemmeliyet anlayışını korur. Kılavuzlarımızın en kapsamlı, doğru ve kullanıcı dostu kaynaklar olarak kalması için durmaksızın çalışıyoruz.`,
                bullets: [
                    "Araştırma ve geri bildirimle sürekli yenilik",
                    "Sürdürülebilirlik ve etik içerik üretimi uygulamaları",
                    "Eğitim kurumları ve sektör liderleriyle ortaklıklar",
                    "Modern erişilebilirlik standartlarının uygulanması",
                    "Kullanıcı verilerinin gizliliği ve GDPR uyumluluğu",
                    "Otomasyonla insan uzmanlığını dengede tutan sistem",
                    "Küresel genişleme ve yerelleştirilmiş içerik kapsamı",
                    "Yeni teknolojilere hazır dokümantasyon yaklaşımı",
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
                    question: `${COMPANY_NAME} nedir?`,
                    answer: `${COMPANY_NAME}, ${COMPANY_LEGAL_NAME} tarafından işletilen, uzmanlar tarafından yazılmış teknik kılavuzlar ve eğitim içerikleri sunan küresel bir platformdur.`,
                },
                {
                    question: "Destek ekibine nasıl ulaşabilirim?",
                    answer: `Ekibimize her zaman ${COMPANY_EMAIL} adresinden e-posta göndererek veya web sitemizdeki iletişim formunu doldurarak ulaşabilirsiniz.`,
                },
                {
                    question: "Şirketiniz nerede bulunuyor?",
                    answer: `Kayıtlı ofis adresimiz: ${COMPANY_ADDRESS}.`,
                },
                {
                    question: "Fiyatlandırma hakkında nasıl bilgi alabilirim?",
                    answer: `/pricing sayfasında şeffaf fiyatlandırma modellerimizi ve token paketlerimizi inceleyebilirsiniz.`,
                },
                {
                    question: "Nasıl başlayabilirim?",
                    answer: `/get-started sayfasını ziyaret ederek hesabınızı oluşturabilir ve profesyonel kılavuzlara erişmeye başlayabilirsiniz.`,
                },
            ],
        },
    ],
};

export default schema;
