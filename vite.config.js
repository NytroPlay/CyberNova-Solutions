// vite.config.js - DEBE SER EXACTO
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/CyberNova-Solutions/", // Con 'C' mayúscula y 'S' mayúscula
});