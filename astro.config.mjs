// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  build: {
    outDir: 'dist'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap(), mdx()]
});
