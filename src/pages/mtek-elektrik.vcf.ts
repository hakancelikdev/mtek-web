import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Dijital kartvizitteki "Rehbere Ekle" butonunun açtığı kişi kartı (vCard 3.0).
// Bilgiler src/data/site.ts dosyasından gelir.
const escape = (value: string) => value.replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1');

export const GET: APIRoute = () => {
  const name = escape(site.legalName);
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${name};;;`,
    `FN:${name}`,
    `ORG:${name}`,
    `TEL;TYPE=WORK,VOICE:${site.phone.e164}`,
    ...(site.email ? [`EMAIL;TYPE=WORK:${site.email}`] : []),
    'X-ABShowAs:COMPANY',
    'END:VCARD',
  ];
  return new Response(lines.join('\r\n') + '\r\n', {
    headers: { 'Content-Type': 'text/vcard; charset=utf-8' },
  });
};
