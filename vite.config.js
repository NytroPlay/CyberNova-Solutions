// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // El "base" debe ser el nombre EXACTO de tu repositorio
  base: "/CyberNova Solutions/",
});