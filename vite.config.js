import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    // Add Base URL for GitHub Pages deployment if not in development
    base: isDev ? '/' : '/my-dev-portfolio/',
    plugins: [ react(), tailwindcss() ],
    build: {
      // Increase the chunk size warning
      chunkSizeWarningLimit: 1500,
    },
  };
});