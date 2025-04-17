import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  // GitHub Repo name for base_url
  base: process.env.VITE_BASE_URL || '/',
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'public/images'),
      '@models': path.resolve(__dirname, 'public/models'),
    },
  },
});