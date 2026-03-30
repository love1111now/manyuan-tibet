/*
  DESIGN REMINDER (AnalyticsTracker)
  - Keep tracking stable for SPA (hash router)
  - Manual page_view: GA4 + Meta Pixel + Vercel Analytics
  - Optimized: Scroll to top on route change & title sync delay
*/

import { useEffect } from "react";
import { useLocation } from "wouter";

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
    if (typeof window === "undefined") return;

    // 優化 1：切換頁面時，畫面自動回到最上方
    window.scrollTo(0, 0);

    // 優化 2：微延遲 100ms，確保 Seo.tsx (Helmet) 已經完成 <title> 更新
    const timer = setTimeout(() => {
      // 1) GA4
      window.gtag?.("event", "page_view", {
        page_path: location,
        page_location: window.location.href,
        page_title: document.title, // 確保 GA4 收到最新的標題
      });

      // 2) Meta Pixel
      window.fbq?.("track", "PageView");

      // 3) Vercel Analytics
      window.va?.("pageview");
    }, 100);

    // 清理函數，避免快速連點切換頁面時重複發送
    return () => clearTimeout(timer);
  }, [location]);

  return null;
}