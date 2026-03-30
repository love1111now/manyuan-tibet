import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
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
      // shadcn/ui 類型的元件檔常含 helper/variants，Fast Refresh 規則會誤判
      "react-refresh/only-export-components": "off",

      // 本專案允許在 useMemo/useEffect 內做一次性的隨機/唯一值初始化
      "react-hooks/purity": "off",

      // 專案內有少數資料檔採用 @ts-nocheck（避免因素材路徑造成 build 阻斷）
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
])
