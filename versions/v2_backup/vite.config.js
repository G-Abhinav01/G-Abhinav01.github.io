import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'dev-html-transform',
      apply: 'serve',
      transformIndexHtml(html) {
        return html
          .replace(/<script type="module" crossorigin src="[^"]*assets\/main-[^"]*"><\/script>/i, '<script type="module" src="/src/main.jsx"></script>')
          .replace(/<link rel="stylesheet" crossorigin href="[^"]*assets\/main-[^"]*">/i, '');
      }
    }
  ],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './index.dev.html'
      }
    }
  }
})
