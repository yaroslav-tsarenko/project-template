import { PageSchema } from "@/components/constructor/page-render/types";
import {
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_ADDRESS,
    COMPANY_NUMBER,
} from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Başlayın — ${COMPANY_NAME}`,
        description: `${COMPANY_NAME} ile nasıl başlayacağınızı öğrenin: hesap oluşturun, token satın alın ve kılavuzlara anında erişin. Uzman dokümantasyona ulaşmak için basit adımları izleyin.`,
        keywords: [
            `${COMPANY_NAME} nasıl kullanılır`,
            `${COMPANY_NAME} başlangıç rehberi`,
            "kılavuz erişimi",
            "rehber açma",
            "token satın alma",
            "dokümantasyon adımları",
        ],
        canonical: "/get-started",
        ogImage: {
            title: `${COMPANY_NAME} ile Başlayın`,
            description:
                `Hesabınızı oluşturmak, token satın almak ve kılavuzlara anında erişmek için basit adımları takip edin.`,
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
                title: `${COMPANY_NAME} ile Yolculuğunuza Başlayın`,
                description: `Başlamak çok kolay. Sadece birkaç adımda hesabınızı oluşturabilir, token satın alabilir ve ihtiyaçlarınıza göre hazırlanmış profesyonel kılavuzlara erişebilirsiniz. İlk kılavuzunuzu açmak için aşağıdaki rehberi izleyin.`,
                centerTitle: true,
                centerDescription: true,
            },
        },
        {
            type: "grid",
            columns: 3,
            gap: "2rem",
            cards: [
                {
                    image: "image1",
                    title: "Adım 1 — Hesap Oluşturun",
                    description: `E-postanızla kaydolun ve kontrol panelinize erişin. Token’larınızı yönetin ve kılavuzlarınızı güvenli şekilde saklayın.`,
                    buttonLink: "/sign-up",
                    buttonText: "Kayıt Ol",
                },
                {
                    image: "image2",
                    title: "Adım 2 — Token Satın Alın",
                    description: `İhtiyacınıza göre token satın alın. Token sistemi, abonelik baskısı olmadan esnek kılavuz erişimi sağlar.`,
                    buttonLink: "/pricing",
                    buttonText: "Fiyatları Görüntüle",
                },
                {
                    image: "image3",
                    title: "Adım 3 — Kılavuzları Açın",
                    description: `İhtiyacınız olan kılavuzları token kullanarak açın. Anında çevrimiçi erişim sağlayın, indirin ve daha sonra kullanmak üzere saklayın.`,
                    buttonLink: "/services",
                    buttonText: "Kılavuzlara Göz Atın",
                },
            ],
        },
        {
            type: "section",
            left: {
                type: "media",
                mediaType: "image",
                src: "image4",
                width: "100%",
                height: "400px",
                alt: "Kontrol paneli önizlemesi",
            },
            right: {
                type: "text",
                title: `Tüm Yönetim Tek Bir Panelde`,
                description: `${COMPANY_NAME} kontrol paneliniz bilgi merkezinizdir. Token bakiyenizi kontrol edin, açtığınız kılavuzları görüntüleyin ve indirme geçmişinizi tek bir yerden yönetin.`,
                bullets: [
                    "Toplam token bakiyenizi ve kullanım geçmişinizi takip edin",
                    "Tüm kategorilerdeki kılavuzları keşfedin",
                    "Daha önce açtığınız kılavuzlara kolayca yeniden erişin",
                    "Filtreleme ve sıralama ile hızlı gezinme",
                    "Yeni eklenen kılavuzlardan anında haberdar olun",
                    "İlgi alanlarınıza göre öneriler alın",
                    "Profil, e-posta ve dil ayarlarınızı yönetin",
                    "Destek ve geri bildirim araçlarına erişin",
                ],
            },
        },
        {
            type: "section",
            left: {
                type: "text",
                title: `Token Paketleriyle Erişiminizi Genişletin`,
                description: `Tek bir kılavuz veya tüm bir kütüphane fark etmez — ${COMPANY_NAME} ihtiyaçlarınıza uyum sağlar. Daha fazla token satın alarak daha fazla kılavuz açabilir ve kişisel bilgi merkezinizin büyümesini sağlayabilirsiniz.`,
                bullets: [
                    "Proje büyüklüğünüze uygun paketleri seçin",
                    "İhtiyacınız olduğunda token’ları anında artırın",
                    "Kurumsal kullanıcılar için indirimli fiyatlar",
                    "Aylık yükümlülük yok — sadece kullandığınız kadar ödeyin",
                    "Token tüketiminizi panelden takip edin",
                    "Özel fırsatlar ve bonus paketlere erişin",
                    "Token’lar süresiz olarak geçerlidir",
                    "Freelancer’lar, ajanslar ve ekipler için idealdir",
                ],
            },
            right: {
                type: "media",
                mediaType: "image",
                src: "image5",
                width: "100%",
                height: "400px",
                alt: "Token paketleri",
            },
        },
        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    image: "image6",
                    title: "Çoklu Cihaz Desteği",
                    description: `${COMPANY_NAME}, mobil, tablet ve masaüstü cihazları destekler — kılavuzlara dilediğiniz yerden erişin.`,
                    buttonLink: "/faq",
                    buttonText: "Daha Fazla Bilgi",
                },
                {
                    image: "image7",
                    title: "Çevrimdışı Kullanım",
                    description: `Kılavuzlarınızı güvenle indirin ve saklayın. İnternetiniz olmasa bile üretkenliğinizi sürdürün.`,
                    buttonLink: "/faq",
                    buttonText: "SSS’yi Oku",
                },
            ],
        },
        {
            type: "section",
            align: "center",
            gap: "3rem",
            left: {
                type: "text",
                title: `Neden ${COMPANY_NAME} ile Başlamalısınız?`,
                description: `Çünkü teknik bilgiyi kolay, esnek ve erişilebilir hale getiriyoruz. Harcadığınız ilk tokendan açtığınız son kılavuza kadar, sistemimiz size tam kontrol ve güven sunmak için tasarlanmıştır.`,
                bullets: [
                    "5 dakikadan kısa sürede başlayın",
                    "Yalnızca açtığınız içerikler için ödeme yapın",
                    "Uzmanlar tarafından hazırlanmış yüksek kaliteli kılavuzlar",
                    "Dünya çapında 7/24 erişim",
                    "Kılavuzları indirin ve ekibinizle paylaşın",
                    "Size özel destek ekibi her zaman yanınızda",
                    "Yinelenen ücretler veya gizli maliyetler yok",
                    "Profesyonellerin tercih ettiği güvenilir platform",
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
                    question: "Başlamak ne kadar sürer?",
                    answer:
                        "Sadece birkaç dakika. Hesap oluşturun, token satın alın ve hemen kılavuzlara erişmeye başlayın.",
                },
                {
                    question: "Token’ların süresi doluyor mu?",
                    answer: "Hayır. Token’lar hesabınızda kalır ve istediğiniz zaman kullanılabilir.",
                },
                {
                    question: "Token paketimi daha sonra yükseltebilir miyim?",
                    answer: "Evet. Her zaman ek token satın alarak erişiminizi genişletebilirsiniz.",
                },
                {
                    question: "Herhangi bir şey yüklemem gerekiyor mu?",
                    answer: `${COMPANY_NAME} tamamen tarayıcı üzerinden çalışır. Kılavuzlara tüm cihazlardan erişebilirsiniz, yükleme gerekmez.`,
                },
                {
                    question: "Verilerim güvende mi?",
                    answer: `Evet. ${COMPANY_NAME}, kişisel ve ödeme verilerinizi korumak için şifreli depolama ve güvenli işlem altyapısı kullanır.`,
                },
                {
                    question: "Kılavuzlarımı indirebilir miyim?",
                    answer: `Kesinlikle. Açtığınız kılavuzları indirebilir ve çevrimdışı olarak saklayabilirsiniz.`,
                },
                {
                    question: "İade yapıyor musunuz?",
                    answer: `Evet. Teknik bir sorun veya yanlış dosya olması durumunda, çözüm veya iade için bizimle ${COMPANY_EMAIL} adresinden iletişime geçebilirsiniz.`,
                },
                {
                    question: "Kılavuzları ekibimle paylaşabilir miyim?",
                    answer: `Evet. Güvenli paylaşım için ekip planı veya çoklu lisans paketi satın alabilirsiniz.`,
                },
                {
                    question: "Destek ekibine nasıl ulaşabilirim?",
                    answer: `Destek ekibimiz 7/24 hizmet verir. /contact-us sayfasındaki iletişim formu veya ${COMPANY_EMAIL} adresi üzerinden bize ulaşabilirsiniz.`,
                },
                {
                    question: "Kurumsal paketleriniz var mı?",
                    answer: `Evet. ${COMPANY_NAME}, işletmeler için ölçeklenebilir token paketleri ve entegrasyon çözümleri sunar. Satış ekibimizle iletişime geçerek özel teklif alabilirsiniz.`,
                },
            ],
        },
    ],
};

export default schema;
