/**
 * Tracking utilities (GA4 + Meta Pixel)
 *
 * 目標：
 * - 統一事件命名與參數格式，避免 GA4 報表碎裂
 * - 任何頁面/元件新增事件時，只需要呼叫 trackEvent()
 */

export type TrackingParams = Record<string, unknown>;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });

  window.fbq?.("track", "PageView", {
    page_path: path,
    page_title: document.title,
  });
}

export function trackEvent(name: string, params: TrackingParams = {}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", name, params);

  // 少量同步到 Pixel（避免噪音）
  switch (name) {
    case "begin_checkout":
      window.fbq?.("track", "InitiateCheckout", params);
      break;
    case "view_item":
      window.fbq?.("track", "ViewContent", params);
      break;
    case "contact_click":
      window.fbq?.("track", "Contact", params);
      break;
    default:
      break;
  }
}
