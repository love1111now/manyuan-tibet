import { useEffect } from "react";
import { useLocation } from "wouter";

// 宣告全域變數，讓 TypeScript 不會對 gtag / fbq / va 報錯
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    va?: (...args: unknown[]) => void; // Vercel Analytics
  }
}

export default function AnalyticsTracker() {
  const [location] = useLocation();

  useEffect(() => {
    // 確保在瀏覽器環境下執行
    if (typeof window !== "undefined") {
      // 1. 發送 GA4 PageView（保留既有追蹤）
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_path: location,
          page_location: window.location.href,
        });
      }

      // 2. 發送 FB Pixel PageView（保留既有追蹤）
      if (window.fbq) {
        window.fbq("track", "PageView");
      }

      // 3. Vercel Analytics：hash router 需要手動補 pageview
      if (window.va) {
        window.va("pageview");
      }

      // 測試用：開發時可以把下面這行打開，確認切換頁面時有沒有觸發
      // console.log("[Analytics] 已追蹤路徑:", location);
    }
  }, [location]);

  return null; // 此元件只在背景執行，不渲染任何畫面
}
