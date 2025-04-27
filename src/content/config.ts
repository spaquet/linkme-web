// src/content/config.ts
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    twitterHandle: z.string().optional(), // Support twitter:creator
  }),
});

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(), // For controlling the order in navigation
    category: z.string(), // For grouping docs by category
    tags: z.array(z.string()).optional(),
    lastUpdated: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
  docs: docsCollection,
};