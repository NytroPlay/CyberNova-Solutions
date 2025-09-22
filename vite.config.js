// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 👇 Asegúrate de que el nombre coincida EXACTAMENTE con el nombre del repositorio en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/MyFirstUnity/', // ← Cambia esto si el nombre del repo es diferente
});

