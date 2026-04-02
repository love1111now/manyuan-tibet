import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, ExternalLink, ClipboardList } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function Success() {
  useEffect(() => {
    // 💡 這裡是拯救廣告轉換率的關鍵！
    // 當信眾抵達此頁，發送 Meta Pixel 的「購買 (Purchase)」事件
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'Purchase', { currency: 'TWD' });
    }
    // 同步發送 Google Analytics 的轉換事件 (如果有用 GA4)
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag('event', 'purchase', { currency: 'TWD' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 mx-auto w-full max-w-3xl px-4 py-16 flex items-center justify-center">
        <Card className="p-8 md:p-10 gold-border bg-card/70 paper-grain w-full relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <CheckCircle2 className="w-40 h-40 text-green-500" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl">您的發心，我們已經收到</h1>
            <p className="mt-4 text-muted-foreground readable text-lg leading-relaxed">
              感恩您的護持。綠界科技已確認您的款項，您的名額已正式保留。<br/>
              <strong className="text-foreground/90">請放下心中的焦慮，接下來的事情，交給我們。</strong>
            </p>

            <div className="mt-8 p-6 rounded-md bg-background/50 border border-border/50">
              <div className="text-xs tracking-[0.2em] text-primary uppercase font-bold mb-4 flex items-center gap-2">
                <ClipboardList className="w-4 h-4" /> 接下來的流程
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground readable">
                <li className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-foreground/80 block">志工晚間排程造冊</strong>
                    台灣團隊將於下班後，將您的祈願內容如實登錄至名冊，並準備傳遞至西藏壇城。
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground/80 block">隔週公佈功德名錄</strong>
                    志工彙整後，將於隔週在 FB 粉專公佈去識別化的名錄，您可以前往核對您的發心。
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={SITE.fb} target="_blank" rel="noreferrer" className="flex-1">
                <Button className="w-full h-12 font-bold tracking-[0.1em] gold-border bg-[#0866FF]/90 hover:bg-[#0866FF] text-white">
                  追蹤 FB 粉專等待名單 <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href={SITE.fb} target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="outline" className="w-full h-12 gold-border hover:bg-accent/40">
                  <MessageCircle className="w-4 h-4 mr-2" /> 我有填寫錯誤需要修改
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </main>

      <SiteFooter />
    </div>
  );
}