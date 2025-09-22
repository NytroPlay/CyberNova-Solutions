// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CyberNova-Solutions/', // Debe coincidir con el nombre de tu repositorio
});