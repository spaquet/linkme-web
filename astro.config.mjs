// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://getlinkme.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: { chunkSizeWarningLimit: 1000 },
    ssr: { external: ['sharp'] },
    server: { fs: { allow: ['..'] } },
  },
  integrations: [alpinejs(), sitemap({
    filter: (page) => !page.includes('/blog/'), // Exclude blog routes from main sitemap
  })],
});