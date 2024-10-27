import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
import path from "path";

export default defineConfig({
  base: "/EasyDriving",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
