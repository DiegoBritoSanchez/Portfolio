import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/projects/api': 'http://127.0.0.1:8000',
      '/media': 'http://127.0.0.1:8000',
    },
    css: {
      postcss: "./postcss.config.js",
    },
  },
});
