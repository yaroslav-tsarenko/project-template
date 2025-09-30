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
        title: `SSS — ${COMPANY_NAME}`,
        description:
            `${COMPANY_NAME} hizmetleri, kılavuzlar, jeton sistemi, erişim, indirme, diller ve daha fazlası hakkında sıkça sorulan sorular.`,
        keywords: [
            "sss",
            `${COMPANY_NAME} yardım`,
            "kılavuzlar SSS",
            "jeton SSS",
            "dokümantasyon soruları",
            "rehber erişimi",
            "kılavuz indirme"
        ],
        canonical: "/sss",
        ogImage: {
            title: `${COMPANY_NAME} SSS`,
            description: `Kılavuzlar, jetonlar ve hizmetler hakkında en sık sorulan soruların yanıtları.`,
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `${COMPANY_NAME} nedir?`,
                    answer:
                        `${COMPANY_NAME}, uzmanlar tarafından hazırlanmış profesyonel kılavuzlar sunan bir platformdur. Her kılavuz, ihtiyacınız olan rehberlere esnek erişim sağlayan jetonlarla açılabilir.`
                },
                {
                    question: "Kılavuzları nasıl satın alabilirim?",
                    answer:
                        `Doğrudan satın alma yerine, ${COMPANY_NAME} jeton sistemi kullanır. Jeton satın alır ve bunları kılavuzların kilidini açmak için harcarsınız. Böylece sadece ihtiyacınız olan kadar ödeme yaparsınız.`
                },
                {
                    question: "Bir kılavuzun fiyatı ne kadar?",
                    answer:
                        "Standart bir kılavuz 30 jetondur. Daha gelişmiş veya özel kılavuzlar için karmaşıklığa ve uzunluğa bağlı olarak daha fazla jeton gerekebilir. Basit hızlı başlangıç kılavuzları daha az jeton gerektirirken, detaylı teknik dokümantasyon daha fazla jeton gerektirir."
                },
                {
                    question: "Abonelik gerekli mi?",
                    answer:
                        `Hayır. ${COMPANY_NAME} abonelik kullanmaz. Jetonları bir kez satın alır ve ihtiyacınız olduğunda harcarsınız.`
                },
                {
                    question: "Kılavuzlar anında erişilebilir mi?",
                    answer:
                        "Evet. Bir kılavuzun kilidini açtığınızda, hemen panelinizde erişilebilir olur. Online okuyabilir, indirebilir ve istediğiniz zaman erişebilirsiniz."
                },
                {
                    question: "Kılavuzları indirebilir miyim?",
                    answer:
                        "Evet. Tüm açılmış kılavuzlar dijital formatta indirilebilir. Kaydedip çevrimdışı erişebilirsiniz."
                },
                {
                    question: "Kılavuzlar satın aldıktan sonra hesabımda kalır mı?",
                    answer:
                        "Evet. Bir kılavuzun kilidini açtıktan sonra hesabınızda kalır. İstediğiniz zaman tekrar erişebilir ve yeniden indirebilirsiniz."
                },
                {
                    question: "Kılavuzları kim yazıyor?",
                    answer:
                        "Tüm kılavuzlar, gerçek sektör deneyimine sahip uzmanlar tarafından yazılır ve gözden geçirilir. Böylece doğruluk ve güvenilirlik sağlanır."
                },
                {
                    question: "Hangi tür kılavuzlar mevcut?",
                    answer:
                        `${COMPANY_NAME}, ev aletleri, tüketici elektroniği, profesyonel araçlar, endüstriyel ekipmanlar ve özel sistemler için kılavuzlar sunar.`
                },
                {
                    question: "Özel bir kılavuz talep edebilir miyim?",
                    answer:
                        "Evet. Kütüphanemizde olmayan belirli bir cihaz veya araç için kılavuz isterseniz, özel kılavuz talep edebilirsiniz. Ekibimiz sizin için hazırlar."
                },
                {
                    question: `${COMPANY_NAME} birden fazla dilde mevcut mu?`,
                    answer:
                        "Evet. Birçok kılavuz birden fazla dilde mevcuttur ve çok dilli dokümantasyon desteğimizi sürekli genişletiyoruz."
                },
                {
                    question: `İşletmeler ${COMPANY_NAME}'i nasıl kullanır?`,
                    answer:
                        `İşletmeler, personele doğru kılavuzlar sağlamak, eğitim süresini azaltmak ve operasyonel standartlara uyumu sağlamak için ${COMPANY_NAME}'i kullanır. Jeton paketleri ekipler için ölçeklenebilir.`
                },
                {
                    question: "Verilerim güvende mi?",
                    answer:
                        `${COMPANY_NAME}, kişisel ve ödeme verilerinizin her zaman korunduğundan emin olmak için sektör standartlarında güvenlik uygulamaları kullanır.`
                },
                {
                    question: "Destek sağlıyor musunuz?",
                    answer:
                        `Evet. Destek ekibimiz, kılavuzlara erişim, jeton yönetimi veya özel dokümantasyon taleplerinizde yardımcı olmak için hazırdır. Bize ${COMPANY_EMAIL} adresinden ulaşabilirsiniz.`
                },
                {
                    question: `${COMPANY_NAME}'e hangi cihazlardan erişebilirim?`,
                    answer:
                        `${COMPANY_NAME}, masaüstü, dizüstü, tablet ve akıllı telefon dahil tüm modern cihazlarda çalışır. Kılavuzlar, tüm ekran boyutlarında kolay okunacak şekilde optimize edilmiştir.`
                },
            ],
        },
    ],
};

export default faqSchema;
