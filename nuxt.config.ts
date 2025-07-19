import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/main.css',],
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname),
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },
});
