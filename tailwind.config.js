/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 雲滿設計專屬品牌色系
        bgBase: '#FCFCFA',       // 宣紙白底色
        main: '#333333',         // 主要文字深灰
        muted: '#666666',        // 次要文字中灰
        dark: '#1A1A1A',         // 曜石黑
        card: '#FFFFFF',         // 卡片純白
        gold: {
          light: '#F9F6ED',      // 淡米金 (用於鋪底)
          base: '#D4AF37',       // 亮金 (用於點綴)
          deep: '#B8960C',       // 暗金 (用於大標題與按鈕)
        }
      },
      fontFamily: {
        // 確保中文排版優美
        serif: ['"Noto Serif TC"', 'serif'],
        sans: ['"Noto Sans TC"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}