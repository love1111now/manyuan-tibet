# 視覺 / 文字辨識 / 連結修復（第二輪）

## 你回報的問題
- **美觀度與文字辨識度下降**
- **很多配圖變醜**
- **連結有問題**

## 本輪已修

### 1) 站內連結修正（根因：hash router）
**根因**：專案原本使用 `useHashLocation`（網址需要 `#/xxx`），但站內多數導覽連結是 `/xxx`，因此會出現：
- 點擊後不換頁 / 換頁錯誤
- 直接分享連結給別人，開起來回到首頁

**修正**：改用 history router（一般網址路由）
- `src/App.tsx`
  - 移除 `useHashLocation`
  - `Router` 改為預設 history
  - 統一桌布路由：以 `/wallpaper` 為主，並保留 `/wallpapers`、`/topics/wallpapers` 轉址相容
- `src/pages/Home.tsx`
  - 修正錯誤連結：`/deity/tara` → `/deities/green-tara`

### 2) 配圖變醜（根因：JPEG 壓縮/體積）
**作法**：將主要大圖轉成高品質 WebP（同等畫質更省流量、細節更乾淨），並更新程式引用。
- 新增 WebP 檔案（保留原 JPEG 不動）：
  - `src/assets/visuals/generated/altar-*.webp`
  - `src/assets/visuals/generated/green-tara-gallery-0*.webp`
  - `src/assets/visuals/generated/sutra-closeup.webp`
  - `src/assets/visuals/generated/deity-page-banner-abstract.webp`
  - `src/assets/visuals/generated/icon-water-offering.webp`
  - `src/assets/visuals/generated/icon-incense-lamp.webp`
- 更新引用：
  - `src/pages/Deity.tsx`、`src/pages/Sutra.tsx`、`src/pages/About.tsx`
- 首頁 hero 圖：改用更清晰、體積更小的 `hero-brocade.webp`

### 3) 文字辨識度
- `src/index.css`
  - 加強字體渲染：`text-rendering: optimizeLegibility` + font smoothing
  - 新增 `.text-on-dark`：深色背景文字加柔和陰影，提高手機端可讀性
- `src/pages/Home.tsx`
  - 針對深底區塊主標題/段落套用 `.text-on-dark`，並略提升文字亮度

### 4) 部署路徑與資源載入
- `vite.config.ts`
  - `base` 從 `./` 改為 `/`（Vercel root 部署更穩，避免子路徑/重整造成資源相對路徑錯誤，間接導致「圖片/樣式怪怪的」）

## 驗證
- `npm run lint`：✅
- `npm run build`：✅
