import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👉 REEMPLAZA "CyberNova-Solutions" por el nombre de tu repo exacto
export default defineConfig({
  plugins: [react()],
  base: "/CyberNova-Solutions/",
});
