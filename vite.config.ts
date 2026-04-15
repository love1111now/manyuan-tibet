import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // Inject data-source attribute for AI agent source location
          "./scripts/babel-plugin-jsx-source-location.cjs",
        ],
      },
    }),
    tailwindcss(),
  ],
  resolve: { 
    alias: { "@": path.resolve(__dirname, "./src") } 
  },
  base: "./",
  build: { 
    outDir: "dist", 
    emptyOutDir: true,
    // 🟢 新增 1：提高警告門檻至 1000kb，消滅終端機黃字警告
    chunkSizeWarningLimit: 1000,
    // 🟢 新增 2：企業級 Code Splitting，將大型套件拆分，提升二次載入速度
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/wouter')) {
            return 'vendor-router';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
});