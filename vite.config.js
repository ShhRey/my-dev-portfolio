import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Repo name for base_url
  base: '/my-dev-portfolio/',
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@images': path.resolve(path.dirname(), 'public/images'),
      '@models': path.resolve(path.dirname(), 'public/models'),
    },
  },
});