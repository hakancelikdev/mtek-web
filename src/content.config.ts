import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { projectCategoryKeys } from './data/kategoriler';

const hizmetler = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/hizmetler' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      seoTitle: z.string(),
      seoDescription: z.string().max(170),
      summary: z.string(),
      items: z.array(z.string()).min(1),
      order: z.number(),
      icon: z.enum(['tesisat', 'aydinlatma', 'ag', 'zayif-akim', 'kamera', 'proje']),
      image: image().optional(),
      imageAlt: z.string().optional(),
      // Bu faaliyet alanıyla ilişkili proje kategorileri (detay sayfasında projeleri listelemek için).
      projectCategories: z.array(z.enum(projectCategoryKeys)).default([]),
    }),
});

const projeler = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projeler' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      categories: z.array(z.enum(projectCategoryKeys)).min(1),
      cover: image(),
      coverAlt: z.string(),
      photos: z
        .array(z.object({ src: image(), alt: z.string() }))
        .default([]),
      // İsteğe bağlı bilgiler: yalnızca doğrulanmış bilgi girilir, boş bırakılırsa gösterilmez.
      location: z.string().optional(),
      year: z.number().int().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

export const collections = { hizmetler, projeler };
