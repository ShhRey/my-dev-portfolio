import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    // Add Base URL for GitHub Pages deployment if not in development
    base: isDev ? '/' : '/my-dev-portfolio/',
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Splits big libraries like three.js, gsap, etc.
            if (id.includes('node_modules')) {
              if (id.includes('three')) return 'three'
              if (id.includes('gsap')) return 'gsap'
              if (id.includes('react')) return 'vendor'
            }
          },
        },
        // Set chunk size warning limit to 1MB
        chunkSizeWarningLimit: 1000, 
      },
    },
  };
});