import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// 🟢 改用傳入函式的寫法，藉此取得當前執行的指令 (command)
export default defineConfig(({ command }) => {
  // 判斷是否為開發環境 (執行 npm run dev 時 command 會是 'serve')
  const isDev = command === "serve";

  return {
    plugins: [
      react({
        babel: {
          // 🛡️ 資安與效能修正：只在開發環境才載入 source location 外掛，Production 時給空陣列
          plugins: isDev ? ["./scripts/babel-plugin-jsx-source-location.cjs"] : [],
        },
      }),
      tailwindcss(),
    ],
    resolve: { 
      alias: { "@": path.resolve(__dirname, "./src") },
      // 🟢 確保全站只使用同一個 React 實體，防止底層狀態丟失
      dedupe: ["react", "react-dom"]
    },
    // 🚨 SEO / History Router 關鍵修正：
    // 將原本的 "./" 改為 "/"，確保在 /deity/yellow 子路由重新整理時，能正確往根目錄找靜態資源
    base: "/", 
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
  };
});