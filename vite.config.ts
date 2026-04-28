import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react({
      babel: {
        // 僅在開發模式下啟用原始碼定位外掛，保護生產環境原始碼
        plugins: command === 'serve' 
          ? ["./scripts/babel-plugin-jsx-source-location.cjs"] 
          : [],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // 確保 React 只有一個實例，避免多版本導致的 Hook 錯誤
    dedupe: ["react", "react-dom"],
  },
  // 🔴 關鍵修正：必須為 "/"。解決 History Router 深度路由 (如 /deity/yellow) 找不到 CSS/JS 的問題
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // 確保靜態資源檔名正確
        manualChunks: undefined,
      }
    }
  },
  // 🟢 修正：移除 historyApiFallback。Vite 預設就會處理開發環境的 SPA 路由回退
  server: {
    port: 3000,
    strictPort: false,
  }
}));