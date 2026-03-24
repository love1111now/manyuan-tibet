import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // shadcn/ui 與模板檔常包含 helper export；不影響生產環境
      "react-refresh/only-export-components": "off",

      // 本站以長頁敘事為主，React 19 + motion/互動會較常用到效果協調
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    // 模板 UI 元件內可能包含隨機值或工具函式；不作為產品邏輯檢查
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/purity": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);
