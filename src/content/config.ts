import { defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'collection',
});

export const collections = {
  'blog': blogCollection
};