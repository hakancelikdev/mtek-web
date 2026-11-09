// Şirket bilgileri. İletişim bilgisi değişirse yalnızca bu dosya güncellenir.

export const site = {
  name: 'MTEK Mühendislik',
  legalName: 'MTEK Elektrik Mühendislik',
  url: 'https://www.mtekelektrik.com',
  slogan: 'Güvenli Teknolojik Çözümler',
  phone: {
    display: '0507 447 82 93',
    href: 'tel:+905074478293',
    e164: '+905074478293',
  },
  whatsapp: {
    number: '905074478293',
    message: 'Merhaba, MTEK Mühendislik hizmetleri hakkında bilgi ve teklif almak istiyorum.',
  },
  // E-posta adresi belli olduğunda buraya yazılır; boşken sitede gösterilmez.
  email: '',
  address: {
    street: 'Sümer Mah. 69126 Sok. Dotaş Apt. No: 8C',
    district: 'Seyhan',
    city: 'Adana',
    postalCode: '',
    country: 'TR',
  },
  areaServed: 'Adana',
} as const;

export const addressOneLine = `${site.address.street}, ${site.address.district} / ${site.address.city.toLocaleUpperCase('tr-TR')}`;

// İşletmenin harita konumu (Yandex Haritalar'daki işletme kaydındaki nokta).
export const geo = { latitude: 37.014964, longitude: 35.321757 } as const;

const mapsPoint = `${geo.latitude},${geo.longitude}`;

export const maps = {
  embed: `https://www.google.com/maps?q=${mapsPoint}&z=17&output=embed`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsPoint}`,
};

export function whatsappLink(text: string = site.whatsapp.message): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

// Site bir alt dizinde yayınlandığında (ör. GitHub Pages önizlemesi) iç bağlantılara o dizini ekler.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  return `${base}${path}`;
}

export function withoutBase(path: string): string {
  return base && path.startsWith(base) ? path.slice(base.length) || '/' : path;
}

export const nav = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/faaliyet-alanlarimiz', label: 'Faaliyet Alanlarımız' },
  { href: '/projelerimiz', label: 'Projelerimiz' },
  { href: '/iletisim', label: 'İletişim' },
] as const;

export const principles = [
  {
    title: 'Mühendislik Odaklı Yaklaşım',
    text: 'Her işe ihtiyacın doğru tespiti ve projelendirmeyle başlıyoruz. Kablo kesitinden pano yerleşimine kadar kararları hesaba dayandırıyoruz.',
  },
  {
    title: 'Teknik Bilgi ve Saha Deneyimi',
    text: 'Mühendislik bilgisini sahadaki uygulama tecrübesiyle birleştiriyor, projede çizileni sahada doğru şekilde hayata geçiriyoruz.',
  },
  {
    title: 'Kaliteli Malzeme ve İşçilik',
    text: 'İşin gerektirdiği standartta malzeme kullanıyor; düzenli, okunaklı ve bakımı kolay tesisatlar kuruyoruz.',
  },
  {
    title: 'İhtiyaca Özel Çözümler',
    text: 'Konut, mağaza ya da endüstriyel tesis; her alanın kullanımına, büyüme ihtimaline ve bütçesine uygun çözüm öneriyoruz.',
  },
  {
    title: 'Güvenli ve Standartlara Uygun Uygulama',
    text: 'Tesisatları yürürlükteki yönetmeliklere ve iş güvenliği kurallarına uygun şekilde planlıyor ve uyguluyoruz.',
  },
  {
    title: 'İş Takibi ve Zamanında Teslim',
    text: 'İşin her aşamasını takip ediyor, süreç boyunca sizi bilgilendiriyor ve planlanan zamanda teslim etmeyi esas alıyoruz.',
  },
] as const;
