// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://getlinkme.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        mangle: true,
      },
      chunkSizeWarningLimit: 1000,
      sourcemap: true,
    },
    ssr: { external: ['sharp'] },
    server: { fs: { allow: ['..'] } },
  },
  integrations: [alpinejs()],
});