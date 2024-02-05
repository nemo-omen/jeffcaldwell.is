import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().default('Jeff Caldwell'),
    published: z.date(),
    summary: z.string().max(256),
    draft: z.boolean(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional()
  })
});

export const collections = {
  'blog': blogCollection
};