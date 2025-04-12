// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';

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
  // Only use robots.txt integration
  integrations: [
    // Generate robots.txt with reference to sitemap
    robotsTxt({
      host: 'https://getlinkme.app',
      sitemap: true,
      policy: [
        {
          userAgent: '*',
          allow: '/',
        }
      ]
    }),
  ],
});