import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    plugins: [
      react(
        isDev
          ? {
              babel: {
                plugins: [
                  // Dev only：為 AI agent 注入 data-source（避免影響正式站效能）
                  "./scripts/babel-plugin-jsx-source-location.cjs",
                ],
              },
            }
          : undefined,
      ),
      tailwindcss(),
    ],
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
    // 部署到 Vercel root path，使用絕對 base 可避免子路徑資源/連結問題
    base: "/",
    build: {
      outDir: "dist",
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;

            // React 本身常被許多 chunk 共用，強行拆出來容易造成 circular chunk 警告
            if (id.includes("react-dom") || id.includes("react")) return "vendor";
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("recharts")) return "vendor-charts";
            if (id.includes("@radix-ui")) return "vendor-radix";
            if (id.includes("react-hook-form") || id.includes("zod") || id.includes("@hookform")) {
              return "vendor-form";
            }

            return "vendor";
          },
        },
      },
    },
  };
});
