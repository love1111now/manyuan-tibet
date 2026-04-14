import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageCircle, ExternalLink, ClipboardList, ShieldCheck, Heart } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function Success() {
  useEffect(() => {
    // 💡 專業級追蹤：當信眾抵達此頁，發送 Meta Pixel 的「購買 (Purchase)」事件
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', { currency: 'TWD' });
    }
    // 💡 同步發送 Google Analytics 的轉換事件
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag('event', 'purchase', { currency: 'TWD' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 mx-auto w-full max-w-4xl px-4 py-12 md:py-20 flex items-center justify-center">
        <Card className="p-8 md:p-14 gold-border bg-card/80 backdrop-blur paper-grain w-full relative overflow-hidden shadow-2xl">
          {/* 背景裝飾 */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <ShieldCheck className="w-64 h-64 text-primary" />
          </div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 border border-primary/30 shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            
            <div className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-bold mb-3">
              Delegation Confirmed
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground/90 leading-tight">生命維度修復委託<br className="md:hidden"/>已正式確立</h1>
            <p className="mt-6 text-muted-foreground readable text-lg md:text-xl leading-relaxed max-w-2xl">
              感恩您的信任與護持。綠界安全支付系統已確認您的款項，您的修復名額已正式保留。<br/>
              <strong className="text-foreground text-xl block mt-2">請放下心中的焦慮，接下來的轉化工程，交給我們。</strong>
            </p>

            <div className="mt-10 p-8 rounded-xl bg-background/60 border border-primary/20 shadow-inner">
              <div className="text-sm tracking-[0.25em] text-primary uppercase font-bold mb-6 flex items-center gap-3">
                <ClipboardList className="w-5 h-5" /> 接下來的系統修復進程
              </div>
              <ul className="space-y-6 text-base text-muted-foreground readable">
                <li className="flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-md">1</span>
                  <div>
                    <strong className="text-foreground/90 block text-lg mb-1">Phase 2: 志工晚間排程造冊</strong>
                    台灣團隊將於下班後的靜心時刻，將您的祈願內容如實登錄至名冊，並準備傳遞至西藏壇城，啟動能量對位。
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-full bg-primary/20 text-primary border border-primary/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-foreground/90 block text-lg mb-1">Phase 3: 隔週公佈透明名錄</strong>
                    修持完成後，志工將彙整資料，於隔週在 FB 粉絲專頁公佈「去識別化」的功德名錄。您可以前往核對您的發心，見證善緣的流動。
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-5 rounded-lg bg-primary/5 border-l-4 border-primary/40 flex items-start gap-3 text-sm text-muted-foreground readable">
              <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-foreground">溫暖提醒：</span>
                在等待名錄公佈的這段期間，請您保持規律的作息，多喝水，並對身邊的人釋放善意。您自身頻率的穩定，將能讓本尊的修復能量發揮最大的共振效果。
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <a href={SITE.fb} target="_blank" rel="noreferrer" className="flex-1">
                <Button className="w-full h-16 text-lg font-bold tracking-[0.15em] gold-border bg-[#0866FF]/90 hover:bg-[#0866FF] text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-95">
                  追蹤 FB 粉專等待名單 <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href={SITE.fb} target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="outline" className="w-full h-16 text-base tracking-widest gold-border hover:bg-accent/40 border-primary/30 transition-colors">
                  <MessageCircle className="w-5 h-5 mr-2 text-primary" /> 我有填寫錯誤需要修改
                </Button>
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <a href="/" className="text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase font-bold underline underline-offset-4">
                返回滿願藏庫首頁
              </a>
            </div>

          </div>
        </Card>
      </main>

      <SiteFooter />
    </div>
  );
}