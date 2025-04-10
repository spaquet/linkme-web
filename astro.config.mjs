// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://getlinkme.app',
  vite: {
    plugins: [
      // Keep your existing tailwind plugin
      tailwindcss()
    ],
    // Additional performance optimizations
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
  // Additional integrations for SEO
  integrations: [
    // Generate sitemap for SEO
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    
    // Generate robots.txt for SEO
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