import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5175,
    strictPort: true,
    allowedHosts: ["breath-safe.iedccseai.in"],
    proxy: { "/api": "http://127.0.0.1:5000" },   // was 8000
  },
});
