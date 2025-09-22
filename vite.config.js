import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Para GitHub Pages: cambia base por "/NOMBRE-DEL-REPO/"
export default defineConfig({
  plugins: [react()],
  base: "/"
});
