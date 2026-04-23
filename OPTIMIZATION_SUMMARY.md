# 手機／Android 全面優化：本次修改摘要

## 主要痛點（行動裝置／Android 常見）

1. **大型圖片解碼與重繪成本高**
   - 原本神明頁使用的 OG 圖（`5504×3072`、約 `3.1MB`）雖然不一定會被「頁面渲染」下載，但會增加分享/爬蟲抓取時的流量負擔，也讓維護上容易誤用到首屏。

2. **部分圖片缺少 `decoding="async"` / `loading` 策略**
   - Android（特別是中低階機）對大張圖片同步解碼更敏感，容易造成首屏卡頓或滾動時掉幀。

3. **行動端滾動時的過度繪製（overdraw）**
   - `body::before` 的固定顆粒層在部分 Android 裝置可能造成滾動時 GPU/CPU 壓力增加。

4. **觸控點擊目標（tap target）一致性**
   - 觸控裝置建議點擊目標至少 `44px`，避免誤觸（Android 使用者特別常見）。

---

## 已完成的程式調整

### A. OG 圖與分享圖最佳化

- ✅ 新增較小且符合分享規格的 OG 圖：
  - `src/assets/visuals/seo/optimized/og-deity-1200x630.webp`（約 `240KB`）
- ✅ 神明頁改用新 OG 圖：
  - `src/pages/Deity.tsx`

### B. HTML Meta（Android 體驗）

- ✅ 加入：
  - `theme-color`（影響 Android Chrome 位址列顏色）
  - `color-scheme`（配合暗黑模式）
- 檔案：`index.html`

### C. 觸控與滾動效能（Android 友善）

- ✅ `body` 加入 `touch-action: manipulation;`（降低點擊延遲/誤觸）
- ✅ 行動端降低 `body::before` 顆粒層透明度（減少 overdraw）
- ✅ `@media (pointer: coarse)`：提供觸控裝置通用的 `touch-action` 與最小點擊高度建議
- 檔案：`src/index.css`

### D. 圖片載入策略統一（降低卡頓、提升滾動順暢）

- ✅ 多個頁面補上 `decoding="async"`，並在適當位置補上/調整 `loading="lazy"`：
  - `src/components/deity/DeityHero.tsx`
  - `src/pages/Home.tsx`
  - `src/pages/About.tsx`
  - `src/pages/Puja.tsx`
  - `src/pages/Topic.tsx`
  - `src/pages/Wallpaper.tsx`
  - `src/components/EditorialPhotoBlock.tsx`

---

## 建議下一步（如果你要再更進一步）

> 這些屬於「更大手術」或「需要設計/取捨」的優化，我先不直接改以免影響現有視覺與轉換。

1. **神尊/儀軌圖片做 responsive variants（480/768/1200）+ `srcset/sizes`**
   - 目前多張圖片仍在 `200KB~1MB` 區間；在 Android 行動網路下，實際顯示尺寸通常不需要這麼大。

2. **針對低階機的視覺特效降級**
   - 如 `backdrop-blur`、大型陰影層、複雜混合模式（mix-blend）可在 `prefers-reduced-motion` 或小螢幕情境下再降一級。

3. **加入更嚴格的圖片 LCP 策略**
   - 只讓首屏唯一的 LCP 圖片使用 `fetchPriority="high"`；其餘全部 `lazy + async`，避免資源競爭。
