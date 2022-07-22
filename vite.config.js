import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { crypto: "crypto-js" },
  },
  build: {
    sourcemap: true,
    minify: "esbuild",
  },
  esbuild: {
    // drop: ["console", "debugger"],
  },
  css: {
    modules: {
      scopeBehaviour: "local",
    },
  },
});
