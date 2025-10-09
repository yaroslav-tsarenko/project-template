import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Hizmetlerimiz — ${COMPANY_NAME}`,
        description: `${COMPANY_NAME} hizmetlerini keşfedin: teknoloji cihazları, elektronik ürünler ve ekipmanlar için özel hazırlanmış kılavuzlar. Esnek token sistemi, anında dijital erişim ve tüm teknoloji ihtiyaçlarınız için güvenilir uzmanlık.`,
        keywords: [
            `${COMPANY_NAME} hizmetler`,
            "özel teknik kılavuzlar",
            "elektronik rehberler",
            "cihaz dokümantasyonu",
            "BT ekipman kılavuzları",
            "token sistemi",
            "dijital kılavuzlar",
            "teknik rehberler",
        ],
        canonical: "/services",
        ogImage: {
            title: `${COMPANY_NAME} Hizmetleri`,
            description:
                "Teknoloji cihazları, elektronik ve ekipmanlar için profesyonel kılavuzlar. Özelleştirilebilir, esnek ve token tabanlı.",
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        {
            type: "section",
            left: {
                type: "text",
                title: "Teknoloji Cihazları İçin Özel Kılavuzlar",
                description: `Her teknoloji cihazı, elektronik alet ve BT ekipmanı kendine özgüdür. Bu nedenle ${COMPANY_NAME}, tam olarak sizin teknoloji ihtiyaçlarınıza uygun özel kılavuzlar üretir. Akıllı telefonlar, bilgisayarlar, akıllı ev cihazları veya endüstriyel elektroniklerle çalışıyor olun — uzmanlarımız net, yapılandırılmış ve doğru dokümantasyon sunar.`,
                bullets: [
                    "Kişiye özel hazırlanmış teknik kılavuzlar",
                    "Elektronikler için uzman içerikler",
                    "Ev tipi cihazlardan endüstriyel BT ekipmanlarına kadar kapsar",
                    "Net ve yapılandırılmış belgeler",
                    "Güncel bilgi ve uyumluluk garantisi",
                    "Donanım ve yazılım süreçlerini kapsar",
                    "Uzmanlar tarafından test edilip onaylanmıştır",
                    "Teknisyenler, işletmeler ve kullanıcılar için idealdir",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image1",
                width: "100%",
                height: "400px",
                alt: "Özel teknoloji kılavuzları hizmeti",
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image2",
                    title: "Hızlı Başlangıç Rehberleri",
                    description:
                        "Cihazınızı veya elektronik ekipmanınızı hızlıca çalıştırmak için kısa, pratik kılavuzlar.",
                    buttonLink: "/sign-up",
                    buttonText: "Başlayın",
                },
                {
                    image: "image3",
                    title: "Adım Adım Eğitimler",
                    description:
                        "Teknolojinizi kurmak, sorun gidermek ve bakım yapmak için detaylı yönlendirmeler.",
                    buttonLink: "/sign-up",
                    buttonText: "Şimdi Açın",
                },
                {
                    image: "image4",
                    title: "Bakım Kılavuzları",
                    description:
                        "Elektronik ve BT cihazlarınız için düzenli kontrol ve önleyici bakım rehberleriyle her zaman önde olun.",
                    buttonLink: "/sign-up",
                    buttonText: "Kılavuzları Görüntüle",
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
                alt: "Token tabanlı erişim",
            },
            right: {
                type: "text",
                title: "Esnek Token Sistemi",
                description: `Abonelik yok. ${COMPANY_NAME} ile yalnızca ihtiyacınız olan teknik kılavuzlar için token satın alır ve harcarsınız. Akıllı telefonlar, bilgisayarlar, akıllı cihazlar ve daha fazlası için rehberleri açın — basit, ölçeklenebilir ve şeffaf.`,
                bullets: [
                    "Aylık ücret veya gizli maliyet yok",
                    "Sadece ihtiyacınız kadar ödeme yapın",
                    "Her bütçeye uygun token paketleri",
                    "Bireysel veya ekip kullanımı için ölçeklenebilir",
                    "İstediğiniz zaman kolayca token ekleyin",
                    "Kullanım geçmişinizi takip edin",
                    "Bütçe dostu model",
                    "Esneklik ve adalet için tasarlanmıştır",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: "Anında Dijital Erişim",
                description: `${COMPANY_NAME} tarafından hazırlanan teknoloji ve elektronik kılavuzları, açıldıktan hemen sonra kullanılabilir. Panelinizden erişin, çevrimdışı kullanım için indirin ve dijital kütüphanenizi düzenli tutun.`,
                bullets: [
                    "Açtıktan hemen sonra kullanılabilir",
                    "Çevrimiçi veya çevrimdışı kullanın",
                    "Her cihazdan erişim imkanı",
                    "Ek yazılım gerektirmez",
                    "Sınırsız yeniden indirme hakkı",
                    "Kişisel hesabınıza bağlıdır",
                    "Etiket ve kategorilere göre organize edin",
                    "7/24 güvenilir erişim",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image6",
                width: "100%",
                height: "400px",
                alt: "Anında erişim",
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image7",
                    title: "Sektöre Özel Teknik Kılavuzlar",
                    description:
                        "Sağlık cihazları, inşaat elektroniği, BT ve üretim ekipmanları için özel hazırlanmış rehberler.",
                    buttonLink: "/sign-up",
                    buttonText: "Daha Fazla Bilgi",
                },
                {
                    image: "image8",
                    title: "Çok Dilli Dokümantasyon",
                    description:
                        "Kılavuzlara tercih ettiğiniz dilde erişin — küresel ekipler ve farklı kullanıcılar için idealdir.",
                    buttonLink: "/sign-up",
                    buttonText: "Hemen Başlayın",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: "Teknoloji Uzmanları ve Kullanıcılar Tarafından Güveniliyor",
                description: `Mühendislerden BT uzmanlarına, son kullanıcılardan işletmelere kadar ${COMPANY_NAME}, güvenilir teknik kılavuzlar için başvurulan kaynaktır. Hizmetimiz, profesyonel doğruluğu kolay erişimle birleştirir ve teknoloji ile elektronik konularında yapılandırılmış bilgiye ihtiyaç duyan herkes için uygundur.`,
                bullets: [
                    "Farklı sektörlerde güvenle kullanılmaktadır",
                    "Mühendisler ve ekipler tarafından tercih edilir",
                    "Kullanılabilirlik ve derinlik odaklı tasarım",
                    "Teknik uzmanlar tarafından hazırlanmıştır",
                    "Tutarlı ve doğrulanmış bilgiler",
                    "Kolay gezinme için modern arayüz",
                    "Eğitim ve işe alım süreçleri için idealdir",
                    "Kullanıcı geri bildirimleriyle sürekli geliştirilir",
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
                    question: `${COMPANY_NAME} hangi hizmetleri sunuyor?`,
                    answer:
                        "Teknoloji cihazları, elektronik ürünler ve BT ekipmanları için özel hazırlanmış kılavuzlar, hızlı başlangıç rehberleri, adım adım eğitimler ve detaylı dokümantasyon sunuyoruz.",
                },
                {
                    question: "Token sistemi nasıl çalışıyor?",
                    answer:
                        "Token satın alırsınız ve bunları kılavuzlarda harcarsınız. Her rehber, karmaşıklık seviyesine göre belirli sayıda token gerektirir. Daha fazla kılavuz ihtiyacınız varsa, daha fazla token satın alabilirsiniz.",
                },
                {
                    question: "Kılavuzları çevrimdışı kullanabilir miyim?",
                    answer:
                        "Evet. Bir kez açıldığında, kılavuzlar internet bağlantısı olmadan da indirilebilir ve erişilebilir.",
                },
                {
                    question: "Birden fazla dilde kılavuz sunuyor musunuz?",
                    answer: `${COMPANY_NAME}, küresel kullanıcıların ihtiyaçlarını karşılamak için çok dilli dokümantasyonu destekler.`,
                },
                {
                    question: "Sorun yaşarsam müşteri desteği mevcut mu?",
                    answer:
                        "Evet, destek ekibimiz sohbet ve e-posta yoluyla sorularınızı ve teknik sorunlarınızı çözmek için hizmetinizdedir.",
                },
                {
                    question: "Kılavuzlar düzenli olarak güncelleniyor mu?",
                    answer:
                        "Evet, en son en iyi uygulamaları ve cihaz güncellemelerini içerecek şekilde kılavuzlarımızı düzenli olarak gözden geçiriyor ve yeniliyoruz.",
                },
                {
                    question: "Şirketler toplu token paketleri alabilir mi?",
                    answer:
                        "Kesinlikle. Geniş kapsamlı erişim gerektiren işletmeler için indirimli fiyatlar ve kurumsal planlar sunuyoruz.",
                },
                {
                    question: "Kılavuz beklentilerimi karşılamazsa iade alabilir miyim?",
                    answer:
                        "Bazı durumlarda, kılavuz hatalı veya beklenen kalitede değilse iade yapılabilir. Destek ekibimizle iletişime geçin.",
                },
                {
                    question: "Verilerim ve token bakiyem ne kadar güvende?",
                    answer:
                        "Hesap verilerinizi, satın alımlarınızı ve erişimlerinizi korumak için güvenli bulut altyapısı ve şifreleme kullanıyoruz.",
                },
                {
                    question: "Kılavuzları başkalarıyla paylaşabilir miyim?",
                    answer:
                        "Kılavuzlar hesabınıza ve lisansınıza bağlıdır. Hesabınız dışındaki paylaşımlar kurallarımıza aykırıdır, ancak ekip veya kurumsal erişim mümkündür.",
                },
            ],
        },
    ],
};

export default schema;
