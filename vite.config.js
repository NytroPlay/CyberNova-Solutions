import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Ajusta la base con el nombre EXACTO de tu repo en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/CyberNova-Solutions/'
})
