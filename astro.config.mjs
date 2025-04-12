// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://getlinkme.app',
  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 1000,
    },
    ssr: {
      external: ['sharp'],
    },
    server: {
      fs: {
        allow: ['..'],
      },
    },
  },
  // Remove all integrations and handle sitemap and robots.txt manually
  integrations: [],
});