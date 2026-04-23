/*
Design philosophy: Neo-thangka noir (Consultant Upgrade)
- L1 [Lead Magnet]: Transforming a free download into a high-value frequency anchor.
- L2 [Bridge]: Seamlessly routing traffic to the 30-second Treasury Quiz to reduce bounce rate.
- L6 [Social Proof]: Integrated Facebook community feed preview for maximum trust.
- Fix: Replaced external Facebook icon with an inline SVG component to prevent build errors.
- 100% Unabbreviated Production Ready Code.
*/

import { 
  Download, 
  ArrowRight, 
  Smartphone, 
  Sparkles, 
  ShieldCheck, 
  HeartHandshake, 
  ExternalLink,
  MessageCircle,
  CalendarCheck
} from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { SITE } from "@/lib/siteData";
import wallpaperUrl from "@/assets/downloads/huangcaishen-wallpaper.jpg?url";

// 🟢 防彈級組件：手寫 SVG Facebook 圖示，確保在任何環境下皆能 100% 編譯成功
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Wallpaper() {
  
  const handleDownloadTrack = () => {
    if (typeof window !== "undefined") {
      // 專業級追蹤：桌布下載事件
      if (window.gtag) {
        window.gtag("event", "download_wallpaper", {
          event_category: "engagement",
          event_label: "yellow_dzambhala",
        });
      }
      if (window.fbq) {
        window.fbq("trackCustom", "DownloadWallpaper");
      }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title="黃財神專屬手機桌布下載｜滿願藏庫" path="/wallpaper" />
      <SiteHeader />

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 pt-10 pb-32">
        <div className="grid gap-12 md:grid-cols-[1fr_.95fr] items-center">
          
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-bold mb-4">
              <ShieldCheck className="w-4 h-4" /> Free Gift & Energy Anchor
            </div>
            <h1 className="font-display text-4xl md:text-6xl leading-tight text-foreground/90">
              黃財神專屬手機桌布
            </h1>
            
            <div className="mt-6 space-y-4 readable text-muted-foreground text-lg leading-relaxed font-serif italic border-l-2 border-primary/40 pl-5 bg-primary/5 py-4 pr-4 rounded-r-xl">
              「這不僅僅是一張圖片，而是您的每日頻率錨點。」
            </div>

            <p className="mt-6 readable text-muted-foreground max-w-prose text-base md:text-lg leading-loose">
              慶祝滿願藏庫 FB 粉絲團成立，台灣志工團隊特別為您準備了這份禮物。在這焦慮與高壓的日常中，願您每天點亮手機螢幕時，都能被這份金黃色的能量接住。<br/><br/>
              <strong className="text-foreground italic">「我的財庫正在回正，我值得被善緣與資糧好好照顧。」</strong>
            </p>

            <div className="mt-8">
              <a href={wallpaperUrl} download="滿願藏庫_黃財神桌布.jpg" onClick={handleDownloadTrack} className="w-full sm:w-auto">
                <Button className="h-16 w-full md:w-auto px-10 text-lg font-bold tracking-[0.2em] uppercase gold-border bg-primary text-primary-foreground shadow-2xl active:scale-95 transition-all group">
                  <Download className="h-5 w-5 mr-3 group-hover:-translate-y-1 transition-transform" /> 立即領取高畫質桌布
                </Button>
              </a>
            </div>

            <div className="mt-5 text-[11px] md:text-xs text-muted-foreground/70 tracking-wide flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-primary/60" />
              小提醒：若手機自動裁切，建議在相簿內移動縮放位置後再設定。
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden group shadow-inner">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                <Sparkles className="w-24 h-24 text-primary" />
              </div>
              <Badge className="bg-destructive/10 text-destructive border-destructive/20 mb-4 px-3 py-1 font-bold tracking-widest text-[10px] uppercase">
                Next Step
              </Badge>
              <h3 className="font-display text-2xl md:text-3xl text-foreground/90 mb-3">
                領取完桌布，想找出資糧漏損點嗎？
              </h3>
              <p className="text-muted-foreground readable mb-8 max-w-xl text-base leading-relaxed">
                下載這份頻率後，給自己 30 秒的時間。讓我們用系統為您做一次深度的「生命能量診斷」，看看目前的您最需要哪一種維度的修復。
              </p>
              <Link href="/#quiz">
                <Button variant="outline" className="h-14 w-full md:w-auto px-8 gold-border hover:bg-primary/10 transition-all text-base font-bold tracking-widest group bg-background/50">
                  開始 30 秒能量診斷 <ArrowRight className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 relative px-4 md:px-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            <Card className="relative p-3 md:p-5 gold-border bg-card/60 backdrop-blur-xl paper-grain shadow-2xl mx-auto max-w-[320px] md:max-w-md transform rotate-1 hover:rotate-0 transition-transform duration-700">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-background/90 rounded-full z-20 shadow-sm border border-border/50" />
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-background/80 shadow-inner">
                <img
                  src={wallpaperUrl}
                  alt="黃財神桌布預覽"
                  className="w-full h-auto aspect-[9/19.5] object-cover hover:scale-105 transition-transform duration-1000"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
                <div className="absolute top-16 left-0 right-0 text-center z-10 pointer-events-none drop-shadow-md">
                  <div className="text-white/90 font-medium text-lg tracking-widest">星期三 18日</div>
                  <div className="text-white font-bold text-6xl tracking-tighter mt-1 font-sans">10:08</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="tibetan-divider h-12 opacity-60 mt-20" aria-hidden />

        <section className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary font-bold mb-3">
                <FacebookIcon className="w-4 h-4" /> Community & Transparency
              </div>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight">追蹤志工動態：每一份發心皆透明</h2>
              <p className="mt-4 readable text-muted-foreground text-lg max-w-2xl italic">
                我們不只提供下載。在 FB 粉絲專頁，我們每週公佈造冊名錄，與您分享真實的生命轉變故事。
              </p>
            </div>
            <a href={SITE.fb} target="_blank" rel="noreferrer" className="hidden md:block">
              <Button variant="outline" className="gold-border border-[#0866FF]/50 text-[#0866FF] hover:bg-[#0866FF]/10 h-14 px-8 font-bold tracking-widest transition-all">
                前往 FB 粉絲專頁 <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { 
                tag: "每週公告", 
                title: "【隔週名冊公佈】最新功德名錄已全數送達壇城", 
                desc: "感謝所有發心信眾，去識別化名單已正式發佈。您的每一分善意，我們皆如實造冊並由師兄姐完成儀軌對位...", 
                Icon: CalendarCheck 
              },
              { 
                tag: "真實轉變", 
                title: "「從焦慮到平靜」：一位創業者的黃財神護持心得", 
                desc: "「原本只是希望能改善現金流，沒想到最大的收穫是找回了失落已久的定見。」分享這則感人的回饋...", 
                Icon: HeartHandshake 
              },
              { 
                tag: "志工日誌", 
                title: "不支薪的堅持：為什麼我們要花時間做這件事？", 
                desc: "在台北忙碌的節奏中，我們一群志工選擇在晚間靜心造冊。這不是工作，而是我們與您的共同修持過程...", 
                Icon: MessageCircle 
              }
            ].map((post, idx) => (
              <a key={idx} href={SITE.fb} target="_blank" rel="noreferrer" className="block group">
                <Card className="p-8 h-full gold-border bg-card/70 paper-grain hover:bg-accent/10 hover:border-[#0866FF]/40 transition-all duration-500 relative flex flex-col justify-between group-hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <Badge variant="outline" className="text-[10px] tracking-widest border-primary/30 text-primary font-bold">{post.tag}</Badge>
                      <post.Icon className="w-5 h-5 text-muted-foreground opacity-40 group-hover:text-[#0866FF] group-hover:opacity-100 transition-all" />
                    </div>
                    <div className="font-display text-xl text-foreground/90 leading-snug mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </div>
                    <p className="text-sm text-muted-foreground readable leading-loose opacity-80">
                      {post.desc}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#0866FF] uppercase">
                    點擊查看完整動態 <ArrowRight className="w-3 h-3" />
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <a href={SITE.fb} target="_blank" rel="noreferrer">
              <Button className="w-full h-16 gold-border bg-[#0866FF] hover:bg-[#0866FF]/90 text-white font-bold text-lg tracking-widest">
                <FacebookIcon className="w-5 h-5 mr-2" /> 追蹤 FB 最新公告名單
              </Button>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}