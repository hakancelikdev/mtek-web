# MTEK Mühendislik — Tasarım ve Sayfa Yapısı

Bu belge sitenin tasarım kararlarını ve sayfa yapısını özetler. İçerik ekleme rehberi `README.md` içindedir.

## Amaç

Ziyaretçi siteye girdiğinde birkaç saniye içinde MTEK'in ne iş yaptığını anlamalı ve telefon, WhatsApp veya form üzerinden iletişime geçebilmeli. Site ürün satmaz; şirketi, hizmetleri, gerçek uygulamaları ve iletişim bilgilerini tanıtır.

## Tasarım fikri

Kaynak, MTEK'in kendi dünyası:

- **Logo ve tabela:** Lacivert zemin, eğik kesilmiş panel ve paralel yeşil şerit. Tabeladaki bu eğik lacivert panel sitenin tek imza öğesidir. Ana görselde ve iletişim çağrısında kullanılır, başka hiçbir yerde kullanılmaz.
- **Saha fotoğrafları:** Siyah tavanda galvaniz kablo tavaları, ray spotlar ve lineer LED. Gerçek iş fotoğrafları sitenin ana görsel malzemesidir. Stok fotoğraf kullanılmaz.

Cesaret tek bir yerde harcanır: ana görsel. Sayfanın geri kalanı sakin, beyaz ağırlıklı ve disiplinlidir.

Bilinçli olarak kaçınılanlar: birbirinin aynısı gölgeli kart dizileri, her başlığın üstüne konan büyük harfli etiketler, sırası olmayan içerikte 01/02/03 numaraları, her bölümde kayarak gelen animasyonlar, buton metinlerinin sonuna eklenen ok işaretleri.

## Renkler

| Belirteç | Değer | Kullanım |
|---|---|---|
| `--navy` | `#2A356C` (logodan ölçüldü) | Marka paneli, ana butonlar, başlık vurguları |
| `--navy-deep` | `#1E2752` | Buton hover, koyu panel |
| `--green` | `#5DAC38` (logodan ölçüldü) | Sadece dekoratif şerit ve küçük vurgular. Beyaz üzerinde metin rengi olarak **kullanılmaz** (kontrast 2,7:1). |
| `--ink` | `#24282E` (antrasit) | Gövde metni ve başlıklar |
| `--ink-soft` | `#4A515B` | İkincil metin |
| `--paper` | `#FFFFFF` | Ana zemin |
| `--mist` | `#F3F5F8` | Alternatif bölüm zemini |
| `--line` | `#DCE1E8` | İnce ayırıcı çizgiler |

Lacivert üzerinde beyaz metnin kontrastı yaklaşık 11:1, antrasit üzerinde beyazın yaklaşık 15:1'dir.

## Tipografi

Tek aile: **Archivo** (değişken; ağırlık 400–800, genişlik 100–125). Dosya, Türkçe karakter setine indirgenmiş tek bir 48 KB woff2'dir ve sitenin kendi sunucusundan yüklenir. Google Fonts'a istek gitmez.

- **Başlıklar:** Genişletilmiş kesim (`font-stretch: 118–125%`), kalın (700–800), sıkı satır aralığı. Mühendislik tabelası gibi sağlam bir duruş verir.
- **Gövde:** Normal genişlik, 400 ağırlık, 17–18 px, satır yüksekliği 1,6, satır uzunluğu en fazla yaklaşık 70 karakter.
- Etiketlerde tamamen büyük harf kullanılmaz. Cümle düzeni esastır.

## Yerleşim ilkeleri

- Önce mobil tasarlanır. Kırılım noktaları 640 / 960 / 1200 px'tir.
- İçerik sola hizalıdır. Ortalanmış metin bloğu kullanılmaz.
- Yapısal öğeler bilgi taşır: ince çizgiler listeleri ayırır, numara yalnızca gerçek sıralı içerikte kullanılır.
- Dokunma hedefleri en az 44×44 px'tir.
- `prefers-reduced-motion` desteklenir. Kullanıcı tetiklemediği animasyon yoktur.

## Sayfa yapısı

```
/                              Ana Sayfa
/hakkimizda                    Hakkımızda (tanıtım, vizyon, misyon, çalışma ilkeleri)
/faaliyet-alanlarimiz          6 faaliyet alanının dizini
/faaliyet-alanlarimiz/<alan>   Her alan için detay sayfası (6 sayfa)
/projelerimiz                  Proje galerisi (kategori filtresi + lightbox)
/projelerimiz/<proje>          Proje detay sayfası
/iletisim                      İletişim bilgileri, harita, form
/404                           Bulunamadı sayfası
```

### Ortak üst menü

```
Mobil:   [LOGO]                         [☎] [≡ Menü]
Masaüstü:[LOGO]  Ana Sayfa  Hakkımızda  Faaliyet Alanlarımız  Projelerimiz  İletişim   [Teklif Al]
```

Menü sayfa kaydırılırken üstte sabit kalır. Mobilde tam genişlikte açılan bir panel kullanılır. Sağ altta her sayfada sabit bir WhatsApp butonu bulunur.

### Ana sayfa

```
┌───────────────────────────────────────────────────────────────┐
│ ╱▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔╱ ┃                                        │
│ ┃ Elektrikte Güven,╱ ┃   [saha fotoğrafı: tavan, kablo       │
│ ┃ Mühendislikte    ╱ ┃    tavaları, ray spotlar]             │
│ ┃ Çözüm.          ╱  ┃                                        │
│ ┃ alt açıklama   ╱ ← yeşil şerit (tabeladaki gibi)            │
│ ┃ [Hizmetlerimizi Keşfedin] [İletişime Geçin]                 │
│ ╲▁▁▁▁▁▁▁▁▁▁▁▁▁╱                                               │
└───────────────────────────────────────────────────────────────┘
Mobil: fotoğraf üstte (4:3), lacivert panel altta, panelin üst kenarı eğik.

1. Kısa tanıtım     sol: 2 paragraf + "Hakkımızda" bağlantısı
                    sağ: telefon / adres / hizmet bölgesi (bilgi listesi)
2. Faaliyet alanları  6 satırlık dizin. Her satırda başlık, 3 alt kalem ve bağlantı;
                    masaüstünde iki sütun, satırlar arasında ince çizgi
3. Uygulamalarımız  gerçek fotoğraflardan oluşan mozaik (1 büyük + 4 küçük) +
                    "Tüm projeler" bağlantısı
4. Neden MTEK?      6 ilke, 3×2 ızgara (mobilde tek sütun), kısa metinler
5. İletişim çağrısı eğik lacivert panel: başlık + [Hemen Arayın] [WhatsApp]
   Alt bilgi        logo, iletişim, sayfalar, faaliyet alanları, telif
```

### Faaliyet alanı detay sayfası

Başlık ve kısa açıklama, gerçek uygulama fotoğrafı (yoksa görsel alanı gösterilmez), "Bu kapsamdaki hizmetler" listesi, bu alana ait projeler (varsa) ve iletişim çağrısı. Mühendislik ve proje hizmetleri için henüz fotoğraf yok. Bu sayfa fotoğraf eklenene kadar görselsiz yayınlanır.

### Projelerimiz

Kategori filtreleri (sadece projesi olan kategoriler gösterilir) ve proje listesi. Her projede kapak fotoğrafı, proje adı, kategoriler, kısa açıklama ve küçük fotoğraf şeridi bulunur. Herhangi bir fotoğrafa tıklanınca lightbox açılır. Lightbox klavye (←/→/Esc) ve kaydırma hareketiyle kullanılabilir, yerleşik `<dialog>` öğesiyle yapılır ve dış kütüphane kullanmaz.

Projeler gerçek fotoğraflardan oluşur. Fotoğrafı olmayan proje eklenmez. Proje adları fotoğrafta görülen işi tarif eder. Müşteri adı, konum ve tarih ancak MTEK tarafından eklenirse yazılır.

### İletişim

Telefon (tıklayınca arama), WhatsApp butonu, adres, yol tarifi bağlantısı, e-posta için ayrılmış yer (adres ayarlarda tanımlanınca görünür), harita ve form.

- **Harita:** Hız ve gizlilik için Google Haritalar kendiliğinden yüklenmez. "Haritayı göster" butonuna basılınca yüklenir.
- **Form:** Ad Soyad, Telefon, E-posta (isteğe bağlı), Hizmet konusu ve Mesaj alanlarından oluşur. Şu an e-posta altyapısı olmadığı için form, doldurulan bilgileri hazır bir mesaj olarak MTEK'in WhatsApp'ına iletir. Doğrulama hataları alanın yanında gösterilir. Gönderimden sonra kullanıcıya WhatsApp'ta mesajı göndermeyi tamamlaması gerektiği açıkça söylenir. Form olmadığı bir şekilde "gönderildi" demez.

## SEO

- Her sayfanın kendine özgü `<title>` ve açıklaması vardır. Sayfada tek H1 bulunur, H2/H3 sıralıdır.
- Kanonik adres: `https://www.mtekelektrik.com/...`
- Open Graph ve Twitter kartı kullanılır. Paylaşım görseli 1200×630'dur ve saha fotoğrafından üretilir.
- Schema.org `Electrician` (LocalBusiness) verisi: ad, telefon, adres, hizmet bölgesi Adana ve hizmet kataloğu. Uydurma puan, yorum, çalışma saati ya da koordinat eklenmez.
- Sayfa başlıkları ve metinler "Adana elektrikçi", "Adana elektrik tesisatı", "Adana kamera sistemleri" gibi aramaları doğal bir dille karşılar.
- `sitemap-index.xml` ve `robots.txt` üretilir.

## Teknik

- **Astro 7, statik çıktı.** İstemciye yalnızca menü, lightbox, form ve harita için birkaç KB'lık düz JavaScript gider.
- **Görseller:** `astro:assets` ile AVIF ve WebP, duyarlı `srcset` ve sabit en-boy oranı (CLS olmaz).
- **İçerik:** `src/content/` altında Markdown dosyaları. Şirket bilgileri `src/data/site.ts` içindedir.
- **Yayın:** Cloudflare Workers statik varlıkları (`wrangler.jsonc`) GitHub reposuna bağlanır. Her push'ta otomatik derlenip yayınlanır.
- **Güvenlik başlıkları:** CSP, HSTS, X-Content-Type-Options, Referrer-Policy ve Permissions-Policy `public/_headers` dosyasında tanımlıdır.
