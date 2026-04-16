import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          "./scripts/babel-plugin-jsx-source-location.cjs",
        ],
      },
    }),
    tailwindcss(),
  ],
  resolve: { 
    alias: { "@": path.resolve(__dirname, "./src") },
    // 🟢 確保全站只使用同一個 React 實體，防止底層狀態丟失
    dedupe: ["react", "react-dom"]
  },
  base: "./",
  build: { 
    outDir: "dist", 
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    // 🟢 清除危險的 manualChunks 分割邏輯，交給 Vite 智能處理
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
});