// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Varsayılan yayın adresi asıl alan adıdır. Önizleme yayınları (ör. GitHub Pages)
// adresi SITE_URL ve BASE_PATH ortam değişkenleriyle verir.
export default defineConfig({
  site: process.env.SITE_URL || 'https://www.mtekelektrik.com',
  base: process.env.BASE_PATH || undefined,
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
  // /qr sayfası QR kodla açılır; aramada çıkması gerekmez.
  integrations: [sitemap({ filter: (page) => !/\/qr$/.test(page) })],
  vite: {
    build: {
      // Scriptleri harici dosya olarak üret; CSP'de 'unsafe-inline' gerekmez.
      assetsInlineLimit: 0,
    },
  },
});
