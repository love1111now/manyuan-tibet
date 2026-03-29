import { useEffect } from "react";
import { useLocation } from "wouter";

// 宣告全域變數，讓 TypeScript 不會對 gtag 和 fbq 報錯
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export default function AnalyticsTracker() {
  const [location] = useLocation();

  useEffect(() => {
    // 確保在瀏覽器環境下執行
    if (typeof window !== "undefined") {
      
      // 1. 發送 GA4 PageView
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_path: location,
          page_location: window.location.origin + window.location.hash,
        });
      }

      // 2. 發送 FB Pixel PageView
      if (window.fbq) {
        window.fbq("track", "PageView");
      }
      
      // 測試用：開發時可以把下面這行打開，確認切換頁面時有沒有觸發
      // console.log("[Analytics] 已追蹤路徑:", location); 
    }
  }, [location]);

  return null; // 此元件只在背景執行，不渲染任何畫面
}