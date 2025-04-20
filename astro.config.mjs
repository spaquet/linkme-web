// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://getlinkme.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: { chunkSizeWarningLimit: 1000 },
    ssr: { external: ['sharp'] },
    server: { fs: { allow: ['..'] } },
  },
  integrations: [alpinejs()],
});