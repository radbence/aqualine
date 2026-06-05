import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const referenciak = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/referenciak' }),
  schema: z.object({
    cim: z.string(),
    datum: z.coerce.date().optional(),
    helyszin: z.string().optional(),
    borito: z.string().optional(),
    galeria: z.array(z.string()).optional(),
    kategoria: z.string().optional(),
    kiemelt: z.boolean().default(false),
  }),
});

export const collections = { referenciak };
