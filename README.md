# MTEK Mühendislik — Kurumsal Web Sitesi

www.mtekelektrik.com için statik kurumsal site. Astro ile üretilir, Cloudflare üzerinde yayınlanır. Tasarım kararları için `docs/tasarim.md` dosyasına bakın.

## Geliştirme

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # tip kontrolü + dist/ klasörüne derleme
npm run preview   # derlenmiş siteyi yerelde açar
```

Node.js 22 veya üstü gerekir.

## İçerik nasıl güncellenir

### İletişim bilgileri

Telefon, WhatsApp, adres ve e-posta tek bir dosyada tutulur: `src/data/site.ts`. E-posta adresi belli olduğunda `email: ''` satırına yazmanız yeterlidir. Adres sitenin her yerinde (alt bilgi, iletişim sayfası, Google yapılandırılmış verisi) otomatik olarak görünür.

### Yeni proje eklemek

1. `src/content/projeler/` altında projenin adıyla yeni bir klasör açın. Klasör adı küçük harf, Türkçe karaktersiz ve tireli olmalıdır, örneğin `villa-aydinlatma-cukurova`. Bu ad projenin adresi olur: `/projelerimiz/villa-aydinlatma-cukurova`.
2. Fotoğrafları (JPG veya PNG) bu klasöre koyun. Büyük boyutlar sorun değildir; site derlenirken AVIF ve WebP'ye çevrilip küçültülür.
3. Aynı klasörde `index.md` oluşturun:

```markdown
---
title: Villa Dış Cephe ve Bahçe Aydınlatması
summary: Tek cümlelik kısa açıklama.
categories: [aydinlatma, konut-villa]
cover: ./kapak.jpg
coverAlt: Fotoğrafta ne göründüğünün açıklaması
order: 2
photos:
  - src: ./kapak.jpg
    alt: Fotoğrafta ne göründüğünün açıklaması
  - src: ./detay-1.jpg
    alt: Fotoğrafta ne göründüğünün açıklaması
# İsteğe bağlı (yalnızca doğru bilgi girin, bilinmiyorsa satırı silin):
# location: Çukurova / Adana
# year: 2026
---

Projenin birkaç cümlelik açıklaması.
```

Kategoriler `src/data/kategoriler.ts` dosyasında listelenir: `elektrik-tesisati`, `aydinlatma`, `pano`, `kamera-guvenlik`, `yangin-algilama`, `network-zayif-akim`, `ticari-alan`, `konut-villa`. Yeni proje eklenince ilgili kategori filtresi Projelerimiz sayfasında kendiliğinden görünür.

Dikkat edilecekler:

- **Gerçek olmayan proje eklemeyin.** Fotoğrafı olmayan proje sitede yer almamalı.
- **Fotoğraflarda kişisel veri olmamalı.** Araç plakası, kişi yüzü, ekranda görünen kamera görüntüsü gibi detaylar yayından önce bulanıklaştırılmalı.
- **Ana sayfadaki fotoğraf mozaiği** `featured: true` olan projeden gelir.

### Faaliyet alanını değiştirmek

Her faaliyet alanı `src/content/hizmetler/` altında bir Markdown dosyasıdır. Başlık, SEO metinleri, hizmet kalemleri ve görsel dosyanın en üstündeki alanlarda; detay sayfası metni ise dosyanın gövdesindedir. Zayıf Akım ile Mühendislik ve Proje Hizmetleri için henüz uygulama fotoğrafı yok. Fotoğraf eklendiğinde dosyaya `image:` ve `imageAlt:` satırlarını eklemeniz yeterli.

## İletişim formu

Form, doldurulan bilgileri hazır bir mesaj olarak MTEK'in WhatsApp hattına (`905074478293`) iletir. Ziyaretçi WhatsApp'ta "Gönder"e dokununca mesaj ulaşır. Sunucu, veritabanı ya da gizli anahtar gerektirmez ve form bilgileri sitede saklanmaz. Kurumsal e-posta adresi açıldığında, formun e-posta ile gönderilmesi için Cloudflare üzerinde küçük bir sunucu fonksiyonu eklenebilir.

## Yayına alma (Cloudflare + GitHub)

Bir kez yapılacak kurulum:

1. Bu klasörü GitHub'da bir repoya gönderin.
2. Cloudflare panelinde **Workers & Pages → Create → Import a repository** adımından repoyu seçin.
3. Derleme ayarları:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Ortam değişkeni: `NODE_VERSION=22`
4. Proje oluştuktan sonra **Settings → Domains & Routes** bölümünden `www.mtekelektrik.com` alan adını ekleyin. Alan adının DNS'i Cloudflare'de olmalıdır.
5. `mtekelektrik.com` (www'suz) adresi için **Rules → Redirect Rules** altında `https://www.mtekelektrik.com` adresine kalıcı (301) yönlendirme tanımlayın. Sitenin kanonik adresi www'lu sürümdür.
6. **SSL/TLS → Edge Certificates** bölümünde "Always Use HTTPS" seçeneğini açın.

Bundan sonra `main` dalına yapılan her push otomatik olarak derlenir ve yayınlanır.

### Önizleme yayını (GitHub Pages)

`main` dalına her push'ta `.github/workflows/github-pages.yml` siteyi GitHub Pages'e de yükler (ör. `https://<kullanıcı>.github.io/mtek-web`). Bu adres yalnızca siteyi göstermek içindir: arama motorlarına kapalıdır (`noindex`, `robots.txt` taramayı engeller) ve `public/_headers` güvenlik başlıkları GitHub Pages'te uygulanmaz. Asıl yayın Cloudflare'e alındığında bu iş akışı silinebilir.

Yayından sonra:

- [Google Search Console](https://search.google.com/search-console)'a siteyi ekleyin ve `https://www.mtekelektrik.com/sitemap-index.xml` site haritasını gönderin.
- "Adana elektrikçi" gibi yerel aramalarda görünmek için bir **Google İşletme Profili** açın. Profildeki ad, adres ve telefon sitedekiyle birebir aynı olmalıdır. Harita ve yol tarifi, `src/data/site.ts` içindeki `geo` koordinatlarını kullanır; konum değişirse yalnızca bu iki sayı güncellenir.

## Güvenlik ve performans

- Güvenlik başlıkları (CSP, HSTS vb.) `public/_headers` dosyasındadır. Sayfaya yeni bir dış kaynak (ör. başka bir harita ya da analiz aracı) eklenirse CSP'ye de eklenmelidir.
- Yazı tipi (Archivo, SIL Open Font License) Türkçe karakter setine indirgenmiş tek bir 48 KB dosyadır ve siteyle birlikte sunulur. Google Fonts'a istek gitmez.
- Google Haritalar yalnızca ziyaretçi "Haritayı göster" butonuna bastığında yüklenir.
