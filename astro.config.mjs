// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sarvagungyannodayatrust.org',
  vite: {
    plugins: [tailwindcss()],
  },
  server: { port: 4322 },
});
