import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/CyberNova-Solutions/",
  // NO modificar outDir - dejar que use dist/ por defecto
});