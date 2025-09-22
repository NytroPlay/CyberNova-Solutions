import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Ajusta la base con el nombre de tu repo
export default defineConfig({
  plugins: [react()],
  base: '/CyberNova-Solutions/'
})
