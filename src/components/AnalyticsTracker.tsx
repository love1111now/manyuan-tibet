/*
  DESIGN REMINDER (AnalyticsTracker)
  - Keep tracking stable for SPA (hash router)
  - Manual page_view: GA4 + Meta Pixel + Vercel Analytics
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

    // 1) GA4
    window.gtag?.("event", "page_view", {
      page_path: location,
      page_location: window.location.href,
    });

    // 2) Meta Pixel
    window.fbq?.("track", "PageView");

    // 3) Vercel Analytics (hash router needs manual)
    window.va?.("pageview");
  }, [location]);

  return null;
}
