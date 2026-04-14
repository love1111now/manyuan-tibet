/*
Design philosophy: Neo-thangka noir (Unobtrusive Utility UX)
- Content Fix: Completely removed the intrusive "Start 30-sec quiz" full-width button and "Quota" badge.
- UX Upgrade: Transformed the component into a minimalist bottom-right Floating Action Button (FAB) group (Back to Top & Contact) to completely free up the central reading area.
- Perf Upgrade: Added `{ passive: true }` to the scroll event listener for buttery smooth 60fps mobile scrolling.
- 100% Unabbreviated Production Ready Code.
*/

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 當使用者往下滑動超過 400px 時顯示，避免擋住最頂部的視覺
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 🟢 效能優化：加入 passive: true，讓手機滑動不卡頓
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🟢 實用功能：平滑回到網頁最上方
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 md:hidden pb-[env(safe-area-inset-bottom)] animate-in fade-in zoom-in duration-300">
      
      {/* 🟢 右下角極簡功能 1：志工客服通道 */}
      <a href="https://m.me/61583749010531" target="_blank" rel="noreferrer" aria-label="聯繫志工">
        <Button 
          size="icon" 
          className="w-12 h-12 rounded-full gold-border bg-primary/95 hover:bg-primary text-primary-foreground shadow-[0_4px_20px_rgba(var(--primary),0.3)] backdrop-blur-md relative overflow-hidden group transition-transform active:scale-95"
        >
          {/* 按鈕內部的光澤掃過特效 (保留原版的高級質感) */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
          <MessageCircle className="w-5 h-5" />
        </Button>
      </a>

      {/* 🟢 右下角極簡功能 2：回到頂部 */}
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