// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 El nombre debe coincidir EXACTO con tu repo
export default defineConfig({
  plugins: [react()],
  base: '/CyberNova-Solutions/', 
});
