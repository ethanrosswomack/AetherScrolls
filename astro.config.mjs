// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://aetherscrolls.hawkeyetherapper.com',   // 👈 add this here

  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare(),
  integrations: [sitemap(), mdx()]
});
