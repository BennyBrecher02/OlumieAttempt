import { defineCollection, z } from "astro:content";

const updates = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string(),
    author: z.string().optional(),
    type: z.enum(["insight", "firm"]),
    series: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const team = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    headshot: z.string().optional(),
    linkedin: z.string().url().optional(),
    order: z.number().default(999),
  }),
});

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    sector: z.string().optional(),
    relationship: z.string().optional(),
    description: z.string(),
    website: z.string().url().optional(),
    logo: z.string().optional(),
    order: z.number().default(999),
  }),
});

export const collections = { updates, team, portfolio };

