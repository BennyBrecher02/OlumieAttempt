// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import robots from 'astro-robots';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://olumiecapital.com",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), mdx(), robots()]
});