import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // 這些資料夾不是正式原始碼（備份/匯入/輸出），避免影響 lint
  globalIgnores(["dist", "_import", "_imported", "追蹤碼備份"]),
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
      // UI 元件檔常會 export helper/variants；不需要強制只 export component
      "react-refresh/only-export-components": "off",

      // 這條規則對「切頁後關閉 mobile menu」等情境太嚴格；保留可讀性即可
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);
