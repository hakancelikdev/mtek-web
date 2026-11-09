import type { APIRoute } from 'astro';
import { site, withBase } from '../data/site';

// Asıl alan adında taramaya izin verilir; önizleme yayınları (ör. GitHub Pages) kapatılır.
export const GET: APIRoute = ({ site: current }) => {
  const isProduction = current?.origin === new URL(site.url).origin;
  const body = isProduction
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL(withBase('/sitemap-index.xml'), current).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
