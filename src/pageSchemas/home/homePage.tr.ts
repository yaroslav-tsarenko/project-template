import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `${COMPANY_NAME} — Profesyonel Kılavuzlar, Anında Erişim`,
        description: `Uzmanlar tarafından hazırlanmış pratik kılavuzlara erişin. Token kullanarak istediğiniz rehberi anında açın.`,
        keywords: ["kılavuzlar", "rehberler", "teknik", "dokümantasyon"],
        canonical: "/",
        ogImage: {
            title: `${COMPANY_NAME}`,
            description: "Her araç ve cihaz için uzman kılavuzlar. Token ile açın, istediğiniz zaman kullanın.",
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
                alt: "Kılavuz Kütüphanesi",
            },
            right: {
                type: "text",
                title: "Uzman Kılavuzlar Parmaklarınızın Ucunda",
                description: `${COMPANY_NAME}, alanında uzman kişiler tarafından yazılmış genişleyen bir kılavuz kütüphanesine erişim sağlar. Günlük ekipmanlardan ileri düzey araçlara kadar — ihtiyacınız olan bilgiye tam zamanında ulaşın.`,
                bullets: [
                    "Uzmanlar tarafından oluşturulmuş ve doğrulanmış içerikler",
                    "Geniş araç ve ekipman yelpazesi",
                    "Tüm cihazlarda anında dijital erişim",
                    "Adım adım, kolay takip edilebilir yönergeler",
                    "Sürekli büyüyen kılavuz veritabanı",
                    "Görseller ve çizimler içerir",
                    "Güvenli erişim ve hızlı teslimat",
                    "Yeni başlayanlar ve profesyoneller için uygundur",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `${COMPANY_NAME} Nasıl Çalışır?`,
                description: `Her kılavuz, belirli sayıda token harcayarak açılabilir. Token sistemi size esneklik sağlar: yalnızca ihtiyacınız olan rehberler için, ihtiyaç duyduğunuz anda harcayın.`,
                bullets: [
                    "Token’ları bir kez alın, istediğiniz zaman kullanın",
                    "Abonelik veya otomatik yenileme yok",
                    "Şeffaf fiyatlandırma sistemi",
                    "Gizli ücret veya ek satış yok",
                    "Token’lar tüm kategorilerde geçerlidir",
                    "Token’larınızı kişisel panelden yönetin",
                    "Her kılavuzda kullanabilirsiniz",
                    "Hem bireyler hem de ekipler için uygundur",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image25",
                width: "100%",
                height: "400px",
                alt: "Token Sistemi",
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
                alt: "Panel Önizlemesi",
            },
            right: {
                type: "text",
                title: "Net ve Düzenli Kontrol Paneli",
                description:
                    "Kılavuzları kategoriye göre görüntüleyin, token bakiyenizi takip edin ve indirmelerinizi tek bir yerden yönetin.",
                bullets: [
                    "Kılavuzları tür veya kullanım amacına göre filtreleyin",
                    "Token harcamalarınızı ve geçmişinizi takip edin",
                    "Kılavuzları indirin veya önizleyin",
                    "Favori kılavuzlarınıza erişin",
                    "Tüm cihazlar için duyarlı tasarım",
                    "Entegre destek ve yardım sistemi",
                    "Gerçek zamanlı etkinlik kayıtları",
                    "Güvenli ve gizli kullanıcı erişimi",
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
                    title: "Mobil Uyumlu",
                    description: "Kılavuzlara her cihazdan, her yerden erişin.",
                    buttonLink: "/get-started",
                    buttonText: "Hemen Dene",
                },
                {
                    image: "image28",
                    title: "Düzenli Güncellemeler",
                    description: "Kütüphanemiz her hafta yeni rehberlerle genişler.",
                    buttonLink: "/get-started",
                    buttonText: "Bize Katılın",
                },
                {
                    image: "image29",
                    title: "Topluluk Desteği",
                    description: "Ekibimizden ve diğer kullanıcılardan yardım alın.",
                    buttonLink: "/faq",
                    buttonText: "SSS",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `Neden ${COMPANY_NAME}?`,
                description: `Rastgele internet rehberlerinden farklı olarak, ${COMPANY_NAME} kılavuzları uzmanlar tarafından hazırlanır ve kontrol edilir. Her kılavuzda doğru, yapılandırılmış ve güvenilir bilgiye sahip olursunuz.`,
                bullets: [
                    "Uzmanlar tarafından gözden geçirilmiştir",
                    "Yüksek kaliteli ve düzenli içerik",
                    "Yaygın ve özel konuları kapsar",
                    "Yeni başlayanlar ve profesyoneller için uygundur",
                    "Gerçek uygulamalara odaklanır",
                    "Görseller ve diyagramlar içerir",
                    "Tüm cihazlardan erişim",
                    "Veri güvenliği ve gizlilik önceliklidir",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image30",
                width: "100%",
                height: "400px",
                alt: "Uzman Kılavuzlar",
            },
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: `${COMPANY_NAME} ile Bugün Başlayın`,
                description:
                    "Token kullanarak kılavuzlara anında erişin ve ekipmanlarınız hakkında güvenilir bilgilere ulaşın.",
                bullets: [
                    "Uzmanlar tarafından yazılmış kılavuzları açın",
                    "Yalnızca ihtiyacınız kadar ödeme yapın",
                    "Token’ları istediğiniz zaman esnek şekilde kullanın",
                    "Mobil ve masaüstü uyumlu",
                    "Abonelik gerekmez",
                    "Sürekli genişleyen içerik",
                    "Dünya çapında 7/24 erişim",
                    "Bilgiye risksiz erişim",
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
                    title: "Geniş Kılavuz Kütüphanesi",
                    description: "Birçok kategori ve sektördeki kılavuzlara erişin.",
                    buttonLink: "/get-started",
                    buttonText: "Başlayın",
                },
                {
                    image: "image32",
                    title: "Token Esnekliği",
                    description: "Yalnızca ihtiyacınız olan kılavuzlarda token harcayın, yenileme ücreti yok.",
                    buttonLink: "/get-started",
                    buttonText: "Başlayın",
                },
                {
                    image: "image33",
                    title: "Uzmanlar Tarafından Yazılmış",
                    description: "Her kılavuz uzmanlarca hazırlanır ve kontrol edilir.",
                    buttonLink: "/get-started",
                    buttonText: "Başlayın",
                },
                {
                    image: "image34",
                    title: "Her Zaman Erişilebilir",
                    description: "Kılavuzlarınızı istediğiniz zaman indirip tekrar görüntüleyin.",
                    buttonLink: "/get-started",
                    buttonText: "Başlayın",
                },
            ],
        },
        {
            type: "faq",
            items: [
                {
                    question: `${COMPANY_NAME} nedir?`,
                    answer: `${COMPANY_NAME}, farklı araçlar ve ekipmanlar için uzmanlarca hazırlanmış kılavuzlar sunan bir platformdur.`,
                },
                {
                    question: "Bir kılavuza nasıl erişebilirim?",
                    answer:
                        "Her kılavuz, belirli sayıda token harcanarak açılır. Token’ları bir kez alın ve istediğiniz zaman kullanın.",
                },
                {
                    question: "Kılavuzlar satın alımdan sonra erişilebilir kalır mı?",
                    answer:
                        "Evet. Bir kılavuzu açtıktan sonra, panelinizden istediğiniz zaman erişebilirsiniz.",
                },
                {
                    question: "Mobilde hizmeti kullanabilir miyim?",
                    answer: "Evet, platform tamamen mobil uyumludur ve tüm ekran boyutları için optimize edilmiştir.",
                },
                {
                    question: "Yeni kılavuzlar ne sıklıkla ekleniyor?",
                    answer:
                        "Her hafta yeni kılavuzlar ekleyerek bilgi kütüphanemizi güncel tutuyoruz.",
                },
                {
                    question: "Kılavuzları indirebilir miyim?",
                    answer: "Evet, her açılmış kılavuz PDF veya web formatında indirilebilir.",
                },
                {
                    question: "Token’ların süresi doluyor mu?",
                    answer: "Hayır, satın aldığınız token’lar süresizdir ve istediğiniz zaman kullanılabilir.",
                },
                {
                    question: "Kişisel verilerim güvende mi?",
                    answer: "Kesinlikle. Güçlü şifreleme kullanıyor ve gizlilik ilkelerine tam uyum sağlıyoruz.",
                },
                {
                    question: "Satın almadan önce kılavuzu önizleyebilir miyim?",
                    answer:
                        "Evet. Token harcamadan önce bir önizleme veya özet görüntülersiniz.",
                },
                {
                    question: "İade yapıyor musunuz?",
                    answer:
                        "Evet, bir hata veya sorun olması durumunda çözüm veya iade sağlıyoruz. Bizimle /contact-us üzerinden iletişime geçin.",
                },
            ],
        },
    ],
};

export default schema;
