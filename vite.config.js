import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CyberNova-Solutions/', // 👈 exacto igual que tu repo
})
