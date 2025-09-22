import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CyberNova-Solutions/', // 👈 nombre exacto del repo en GitHub
  build: {
    outDir: 'docs' // 👈 exporta directamente a /docs
  }
})
