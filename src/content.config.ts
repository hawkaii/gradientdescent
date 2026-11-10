import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const products = defineCollection({
  loader: glob({ base: './src/content/products', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string().max(60),
    status: z.enum(['live', 'alpha', 'building', 'planned']),
    kind: z.enum(['software', 'channel']),
    platforms: z.array(
      z.enum(['web', 'ios', 'android', 'instagram', 'youtube'])
    ),
    url: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = { products };