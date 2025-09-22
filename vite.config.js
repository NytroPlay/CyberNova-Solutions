import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/CyberNova-Solutions/", // 👈 nombre EXACTO de tu repo
});
