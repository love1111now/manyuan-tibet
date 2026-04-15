// SiteHeader.tsx
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/siteData";
import React, { useState } from "react"; // 引入 React 和 useState
// 假設您有這些 Icon，否則您需要從 @/components/icons 導入
import { Menu, X } from "lucide-react"; 

// 導航結構保持不變
const nav = [
  { href: "/", label: "首頁" },
  { href: "/pay", label: "法事登記" },
  { href: "/proof", label: "回饋文" },
  { href: "/sutra", label: "經典依據" },
] as const;

export default function SiteHeader() {
  const [loc] = useLocation();
  // 狀態管理：控制手機菜單的開關
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 處理菜單開關邏輯
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 計算是否是當前頁面的樣式
  const getNavLinkClasses = (href: string) => {
    return cn(
      "px-3 py-2 text-sm rounded-md transition-colors",
      loc === href ? "text-foreground font-bold bg-accent/50" : "text-muted-foreground hover:bg-accent/10"
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        
        {/* 1. Logo (品牌識別) */}
        <Link href="/" className="flex items-baseline gap-2 min-w-0">
          <span className="font-display text-xl tracking-wide">{SITE.name}</span>
          <span className="hidden sm:inline text-xs text-muted-foreground tracking-[0.28em] uppercase">
            Ritual registration
          </span>
        </Link>

        {/* 2. 介面主導體 (Desktop/Mobile 都能用到的元素) */}
        <div className="flex items-center gap-3">
          
          {/* A. Desktop 導航 (md:flex) */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={getNavLinkClasses(n.href)}>
                {n.label}
              </Link>
            ))}
          </nav>

          {/* B. 手機漢堡菜單按鈕 (md:hidden) */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* 3. 右側行動呼籲區 (CTA / Social Links) */}
        <div className="flex items-center gap-2">
          
          {/* Desktop Only: Facebook Icon */}
          <a
            href={SITE.fb}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Facebook
          </a>
          
          {/* CTA Button (全版顯示，但手機版會和漢堡菜單內容合併) */}
          <Link href="/pay" className="hidden sm:block"> {/* 讓 CTA 在小螢幕手機版只在導航層面展示 */}
            <Button className="h-10 px-4 font-bold tracking-[0.2em] uppercase gold-border">
              立即登記
            </Button>
          </Link>
        </div>
      </div>

      {/* =============================================== */}
      {/* 4. 手機行動菜單 (Hamburger Menu Content) */}
      {/* 只有在 isMobileMenuOpen 為 true 時，才渲染這個整個區塊 */}
      {/* 這個區塊會被鎖定在 Header 下方，但在開關時，它會優雅地顯示/隱藏。 */}
      <div 
        id="mobile-nav-menu"
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 py-2 border-t' : 'max-h-0 opacity-0'
        }`}
        style={{ maxHeight: isMobileMenuOpen ? '300px' : '0' }} // 簡易動畫模擬
      >
        <div className="mx-auto max-w-6xl px-4 pb-3 grid grid-cols-4 gap-1 sm:grid-cols-2">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={getNavLinkClasses(n.href)}
              onClick={() => setIsMobileMenuOpen(false)} // 點擊任何菜單後，自動關閉菜單
            >
              {n.label}
            </Link>
          ))}
        </div>
        {/* 在手機菜單底部再次露出 CTA，讓用戶知道下一步動作 */}
        <div className="p-4 pt-0">
             <Link href="/pay">
                <Button className="w-full mt-2 bg-primary-500 hover:bg-primary-600">
                  立即登記
                </Button>
            </Link>
        </div>
      </div>
    </header>
  );
}
