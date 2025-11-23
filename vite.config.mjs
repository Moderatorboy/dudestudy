// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // Vercel default output folder
  },
  server: {
    fs: {
      strict: false,  // Agar monorepo ya path issues ho to fix kare
    }
  }
})
