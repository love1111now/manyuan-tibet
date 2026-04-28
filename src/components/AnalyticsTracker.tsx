import { useEffect } from "react";
import { useLocation } from "wouter";
import { trackPageView } from "@/lib/tracking";


/**
 * AnalyticsTracker 組件
 * 負責處理：頁面捲動置頂、GA4 追蹤、Meta Pixel (Facebook) 追蹤、Vercel 數據追蹤
 */
export default function AnalyticsTracker() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. 頁面切換後立即將捲動位置重置於頂部
    window.scrollTo(0, 0);

    /**
     * 2. 數據追蹤邏輯
     * 使用 100ms 延遲是為了確保 react-helmet 等組件已完成 <title> 的更新，
     * 這樣傳送給 GA4 與 FB 的數據才會帶有正確的頁面名稱。
     */
    const timer = setTimeout(() => {
      
      // GA4 + Meta Pixel 統一由 tracking 模組處理
      trackPageView(location);

      // --- (C) Vercel Analytics 追蹤 ---
      if (window.va) {
        window.va("pageview");
      }

      // 開發環境除錯 (選用，若不需看到 console 可刪除)
      if (import.meta.env.DEV) {
        console.log(`[Analytics] Tracked: ${location} (${document.title})`);
      }

    }, 100);

    // 清理函數，避免在快速切換頁面時產生重複的追蹤請求
    return () => clearTimeout(timer);
  }, [location]);

  return null;
}