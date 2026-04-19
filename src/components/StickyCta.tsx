/*
Design philosophy: Conversion-first sticky CTA
- 在神明頁顯示「立即護持 {神明} ↗」直通最熱門方案付款連結
- 非神明頁顯示原本的回到頂部 + 聯繫志工
- passive scroll listener for 60fps mobile
*/

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { DEITY_BY_KEY } from "@/data/deities";
import type { DeityKey } from "@/lib/siteData";

export default function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [location] = useLocation();

  // 從路由解析當前神明 key
  const deityMatch = location.match(/^\/deity\/([^/]+)/);
  const deityKey = deityMatch?.[1] as DeityKey | undefined;
  const deity = deityKey ? DEITY_BY_KEY[deityKey] : null;
  // 找出該神明最熱門方案（hot=true）或第一個方案
  const hotPlan = deity?.plans?.find((p) => p.hot) ?? deity?.plans?.[0];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  // 神明頁：顯示直通付款的浮動 CTA
  if (deity && hotPlan) {
    return (
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 md:hidden pb-[env(safe-area-inset-bottom)] animate-in fade-in slide-in-from-bottom-4 duration-300">
        <a
          href={hotPlan.url}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            window.gtag?.("event", "begin_checkout", {
              currency: "TWD",
              value: hotPlan.price,
              items: [{ item_name: `${deity.name}-${hotPlan.name}`, price: hotPlan.price }],
            });
            window.fbq?.("track", "InitiateCheckout", {
              content_name: hotPlan.name,
              value: hotPlan.price,
              currency: "TWD",
            });
          }}
          className="flex items-center gap-3 h-14 px-6 rounded-full gold-border bg-primary text-primary-foreground font-bold tracking-wider text-sm shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
          aria-label={`立即護持 ${deity.name}`}
        >
          護持 {deity.name} · NT${hotPlan.price.toLocaleString()}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  // 非神明頁：原本的回到頂部 + 聯繫志工
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 md:hidden pb-[env(safe-area-inset-bottom)] animate-in fade-in zoom-in duration-300">
      <a href="https://m.me/61583749010531" target="_blank" rel="noreferrer" aria-label="聯繫志工">
        <Button
          size="icon"
          className="w-12 h-12 rounded-full gold-border bg-primary/95 hover:bg-primary text-primary-foreground shadow-[0_4px_20px_rgba(var(--primary),0.3)] backdrop-blur-md relative overflow-hidden group transition-transform active:scale-95"
        >
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
          <MessageCircle className="w-5 h-5" />
        </Button>
      </a>
      <Button
        onClick={scrollToTop}
        size="icon"
        variant="outline"
        aria-label="回到最上方"
        className="w-12 h-12 rounded-full bg-background/80 hover:bg-background/95 text-foreground shadow-[0_4px_15px_rgba(0,0,0,0.1)] backdrop-blur-md border-primary/30 transition-transform active:scale-95"
      >
        <ArrowUp className="w-5 h-5 text-primary" />
      </Button>
    </div>
  );
}
