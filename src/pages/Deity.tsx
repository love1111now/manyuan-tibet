"use client";

import React, { useEffect } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  ChevronRight, 
  BookOpen,
  Check,
  Flame,
  Droplets,
  Wind
} from "lucide-react";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { DEITY_BY_KEY, money, type Deity, type DeityKey } from "@/lib/siteData";

// 圖片資源路徑引入
import altarYellow from "@/assets/visuals/generated/altar-yellow-water-offering.webp";
import altarMahashri from "@/assets/visuals/generated/altar-mahashri-home-wealth.webp";
import altarGanapati from "@/assets/visuals/generated/altar-ganapati-obstacle-removal.webp";
import altarKurukulla from "@/assets/visuals/generated/altar-kurukulla-magnetizing.webp";
import altarGreenTara from "@/assets/visuals/generated/altar-green-tara-fire-offering.webp";

import iconYellow from "@/assets/visuals/generated/image_w1024_h1024_icon-yellow-water-offering.webp";
import iconMahashri from "@/assets/visuals/generated/image_w1024_h1024_icon-mahashri-home.webp";
import iconGanapati from "@/assets/visuals/generated/image_w1024_h1024_icon-ganapati-clarity.webp";
import iconKurukulla from "@/assets/visuals/generated/image_w1024_h1024_icon-kurukulla-magnetize.webp";
import iconGreenTara from "@/assets/visuals/generated/image_w1024_h1024_icon-green-tara-quick-help.webp";

import iconWater from "@/assets/visuals/generated/icon-water-offering.webp";
import iconIncense from "@/assets/visuals/generated/icon-incense-lamp.webp";
import greenTaraGallery01 from "@/assets/visuals/generated/green-tara-gallery-01.webp";
import greenTaraGallery02 from "@/assets/visuals/generated/green-tara-gallery-02.webp";

// ----------------------------------------------------------------------
// GA4 追蹤函數
// ----------------------------------------------------------------------
const trackEcPayClick = (planName: string, price: number, deityName: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "begin_checkout", {
      currency: "TWD",
      value: price,
      items: [{
        item_id: planName,
        item_name: `${deityName} - ${planName}`,
        price: price,
        quantity: 1
      }]
    });
    (window as any).gtag("event", "click_ecpay", {
      deity: deityName,
      plan: planName,
      value: price
    });
  }
};

type RitualBlock = {
  title: string;
  note: string;
  steps: string[];
  used: string[];
  sources: { label: string; url: string }[];
};

type RitualVisual = {
  photo: string;
  iconA: string;
  iconALabel: string;
  iconATitle: string;
  iconB: string;
  iconBLabel: string;
  iconBTitle: string;
};

// ----------------------------------------------------------------------
// 視覺與儀軌資料庫定義
// ----------------------------------------------------------------------
const RITUAL_VISUAL_BY_KEY: Record<DeityKey, RitualVisual> = {
  yellow: { photo: altarYellow, iconA: iconYellow, iconALabel: "Water", iconATitle: "黃財神水供", iconB: iconIncense, iconBLabel: "Incense", iconBTitle: "香／燈供" },
  mahashri: { photo: altarMahashri, iconA: iconMahashri, iconALabel: "Sutra", iconATitle: "護持資糧", iconB: iconWater, iconBLabel: "Bowl", iconBTitle: "清淨水供" },
  ganapati: { photo: altarGanapati, iconA: iconGanapati, iconALabel: "Clear", iconATitle: "除障清明", iconB: iconIncense, iconBLabel: "Offerings", iconBTitle: "供香／供甜" },
  kurukulla: { photo: altarKurukulla, iconA: iconKurukulla, iconALabel: "Love", iconATitle: "攝受善緣", iconB: iconIncense, iconBLabel: "Offerings", iconBTitle: "花／香供" },
  "green-tara": { photo: altarGreenTara, iconA: iconGreenTara, iconALabel: "Help", iconATitle: "綠度母除障", iconB: iconIncense, iconBLabel: "Homa", iconBTitle: "護摩火供" },
};

const RITUAL_BY_KEY: Record<DeityKey, RitualBlock> = {
  yellow: {
    title: "黃財神專屬儀軌：灑淨水供",
    note: "依贊巴拉傳承次第：以清淨水作供，洗滌累世慳吝印記，令福德資糧增廣。",
    steps: ["安置清淨水供：排列水供碗", "正立動機：發菩提心", "水供與持誦心咒", "結行迴向資源充沛"],
    used: ["純銀水供杯", "藏紅花水", "特級臥香", "酥油長明燈", "黃金曼達盤"],
    sources: [{ label: "Lama Yeshe Archive", url: "#" }],
  },
  mahashri: {
    title: "大吉祥天女：資糧圓滿儀軌",
    note: "依《金光明經》：令受持者飲食、衣服、臥具、醫藥皆圓滿無缺。",
    steps: ["莊嚴五供備辦", "誦持經典誓願", "安住家宅氣場", "結行迴向財庫穩固"],
    used: ["特製食子", "五色水果", "蓮花燈", "《金光明最勝王經》"],
    sources: [{ label: "經典引用｜天女品", url: "#" }],
  },
  ganapati: {
    title: "象頭財神：除障與無礙成就儀軌",
    note: "強力掃除前行道路上之外、內、密違緣，令所作皆成。",
    steps: ["禮敬供養甜食", "持誦七遍陀羅尼", "觀想智慧除障", "結行迴向現前事業"],
    used: ["傳統拉度甜點", "乳香供香", "智慧明燈", "除障金剛鈴"],
    sources: [{ label: "Virtual Vinodh", url: "#" }],
  },
  kurukulla: {
    title: "作明佛母：懷愛與攝受儀軌",
    note: "以慈悲與威儀攝受人心，轉化情執，圓滿一切善緣。",
    steps: ["由空性起觀紅蓮光", "莊嚴紅花供養", "持誦心咒調伏自內心", "結行迴向善緣自然靠攏"],
    used: ["鮮豔紅玫瑰", "紅色酥油燈", "懷愛心咒輪", "哈達"],
    sources: [{ label: "Lotsawa House", url: "#" }],
  },
  "green-tara": {
    title: "綠度母：清明除障護摩火供",
    note: "度母以『迅速』聞名：以火供轉化力，清算障礙，令利樂快速落地。",
    steps: ["立清淨動機", "安置火供壇城", "護摩聖火轉化障礙", "結行迴向遠離怖畏"],
    used: ["護摩火供爐", "酥油燈", "青蓮花供", "迴向疏文"],
    sources: [{ label: "《二十一尊度母讚》", url: "#" }],
  },
};

export default function DeityPage({ deityKey }: { deityKey: string }) {
  const keys: readonly DeityKey[] = ["yellow", "mahashri", "ganapati", "kurukulla", "green-tara"];
  const d: Deity | undefined = keys.includes(deityKey as DeityKey) ? DEITY_BY_KEY[deityKey as DeityKey] : undefined;

  // 404 防呆頁面
  if (!d) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col font-sans text-white">
        <Seo title="本尊路徑不存在" noIndex />
        <SiteHeader />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="text-4xl text-[#D4AF37] font-bold">此本尊路徑尚未開啟</h1>
          <p className="text-slate-400 mt-4">請返回首頁重新選擇您的護持路徑。</p>
          <Link href="/"><Button className="mt-8 bg-[#D4AF37] hover:bg-amber-400 text-black font-bold uppercase tracking-widest">回首頁</Button></Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const r = RITUAL_BY_KEY[d.key];
  const rv = RITUAL_VISUAL_BY_KEY[d.key];

  return (
    // ✅ 修正：改用 font-sans 提升易讀性，徹底拔除模糊的 font-serif
    <div className="min-h-screen bg-[#050505] font-sans text-slate-200 selection:bg-amber-500/30 overflow-x-hidden">
      <Seo title={`${d.name}｜${d.subtitle}`} path={d.route} />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 pt-24 md:pt-40 pb-32">
        
        {/* =========================================================
            1. Hero 區塊 (修復置中與清晰度)
        ========================================================= */}
        <section className="grid gap-12 lg:grid-cols-2 items-center relative">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
          
          <div className="relative z-10 text-left">
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-amber-500/80 mb-4 font-bold">
              <Sparkles className="h-4 w-4" /> 如法儀軌 · 能量校正
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">{d.name}</h1>
            <div className="text-sm md:text-base tracking-widest uppercase text-[#D4AF37] font-bold mb-10">{d.subtitle}</div>

            <Card className="p-8 md:p-10 rounded-[2rem] border border-amber-500/20 bg-white/[0.02] shadow-2xl relative overflow-hidden mb-10 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full -z-10 group-hover:bg-amber-500/10 transition-colors duration-500" />
              <div className="text-xs tracking-widest text-slate-500 mb-3 font-bold uppercase">對治現況卡點</div>
              <div className="text-2xl md:text-3xl text-white font-bold leading-snug mb-4">{d.oracle.question}</div>
              <div className="text-slate-400 leading-relaxed font-normal">{d.promise}</div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="h-14 px-8 font-bold tracking-widest uppercase bg-[#D4AF37] hover:bg-amber-400 text-black shadow-xl"
                onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
              >
                查看專屬護持方案 <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Link href="/">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 bg-transparent border-white/20 text-slate-300 font-bold tracking-widest uppercase backdrop-blur-sm hover:bg-white/5">
                  回首頁總覽
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-amber-500/20 rounded-[2.5rem] blur-2xl -z-10" />
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl w-full flex items-center justify-center bg-black/40">
              {/* ✅ 修復：object-center 確保神明配圖永遠維持中心對齊 */}
              <img 
                src={d.heroImage} 
                alt={d.name} 
                className="w-full h-[450px] md:h-[650px] object-cover object-center transform hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            2. 心理建設卡片 (教育消費者)
        ========================================================= */}
        <section className="mt-32 grid gap-6 md:grid-cols-3 text-left">
          {[
            { title: "溫柔提醒", sub: "先把祈願寫成一句話", desc: "例如「願我把財務節奏穩住」。用你看得懂、願意承擔的話就好。" },
            { title: "完成法事後", sub: "把一件小事做完", desc: "讓福氣與善緣在現實中流動。選一件最小的事情去執行——法流會加持您的行動。" },
            { title: "你可能感受到", sub: "心比較定、路比較清楚", desc: "常見的是：焦慮下降、猶豫變少，這種細微但會慢慢累積的改變。" }
          ].map((card, i) => (
            <Card key={i} className="p-8 md:p-10 rounded-[2rem] border border-white/10 bg-white/[0.02] hover:border-amber-500/30 transition-all">
              <div className="text-[10px] tracking-widest uppercase text-[#D4AF37] mb-4 font-bold">{card.title}</div>
              <div className="text-2xl font-bold text-white mb-5 tracking-tight">{card.sub}</div>
              <p className="text-sm text-slate-400 leading-relaxed font-normal">{card.desc}</p>
            </Card>
          ))}
        </section>

        {/* =========================================================
            3. 綠度母活動特別展示 (條件渲染)
        ========================================================= */}
        {d.key === "green-tara" && (
          <section className="mt-32">
            <Card className="p-10 md:p-12 rounded-[3rem] border border-amber-500/20 bg-black shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-left relative z-10">
                <div className="flex-1">
                  <Badge className="bg-red-500 text-white font-bold mb-4 px-3 py-1 uppercase tracking-widest">限時活動</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">清明・綠度母火供<span className="text-[#D4AF37] ml-3 italic font-light">已正式開放</span></h2>
                  <p className="text-slate-400 font-normal leading-relaxed">度母能最快平息生活中的恐懼。本次特別開放專屬方案，請至下方方案區預約護持。</p>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <img src={greenTaraGallery01} className="rounded-2xl h-48 w-full object-cover object-center border border-white/10" alt="Altar View" />
                  <img src={greenTaraGallery02} className="rounded-2xl h-48 w-full object-cover object-center border border-white/10" alt="Puja View" />
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* =========================================================
            4. 方案區塊 (對接 ECpay)
        ========================================================= */}
        <section id="plans" className="mt-40 scroll-mt-32 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-4">
            <div>
              <div className="text-[#D4AF37] text-xs tracking-widest uppercase mb-2 font-bold">Offerings</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">本尊專屬護持方案</h2>
            </div>
            <Link href="/pay">
              <Button variant="link" className="text-slate-400 hover:text-[#D4AF37] px-0 h-auto font-normal">
                前往總覽頁比較所有本尊 <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {d.plans.map((p) => (
              <Card key={p.id} className="p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.03] flex flex-col h-full hover:border-amber-500/30 transition-all group relative overflow-hidden">
                {p.hot && <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 blur-[40px] rounded-full pointer-events-none" />}
                
                <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="font-bold text-2xl text-white">{p.name}</div>
                      {p.hot && <Badge className="bg-amber-500 text-black font-bold px-3 py-1 uppercase tracking-widest">{p.badge || "熱門選擇"}</Badge>}
                    </div>
                    <div className="text-slate-400 text-sm font-normal leading-relaxed">{p.blurb}</div>
                  </div>
                </div>

                <div className="text-3xl font-bold text-amber-500 mb-8 font-sans relative z-10">{money(p.price)}</div>
                
                {p.feedback && (
                  <div className="mb-8 bg-black/60 p-5 rounded-2xl text-xs italic text-slate-400 leading-relaxed font-normal relative z-10 border border-white/5">
                    <span className="text-[#D4AF37] text-lg mr-1 font-serif">“</span>{p.feedback}
                  </div>
                )}

                <div className="mt-auto relative z-10">
                  <a 
                    href={p.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={() => trackEcPayClick(p.name, p.price, d.name)}
                  >
                    <Button className={`w-full py-7 font-bold text-base tracking-widest uppercase ${p.hot ? 'bg-[#D4AF37] text-black hover:bg-amber-400' : 'bg-white text-black hover:bg-slate-200'}`}>
                      前往登記護持 <ExternalLink className="h-4 w-4 ml-2 opacity-50" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* =========================================================
            5. 儀軌詳細內容 (打造莊嚴感)
        ========================================================= */}
        <section className="mt-40 text-left">
          <div className="text-center mb-16">
            <div className="text-[#D4AF37] text-xs tracking-widest uppercase mb-3 font-bold">Dharma Practice</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">如法廣大供養・法事細節</h2>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] items-start">
            <Card className="p-8 md:p-12 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent shadow-2xl relative overflow-hidden">
              <div className="absolute top-10 right-10 text-white/5"><ShieldCheck className="h-32 w-32" /></div>
              <div className="text-xs tracking-widest uppercase text-[#D4AF37] mb-4 font-bold relative z-10">{r.title}</div>
              <p className="text-slate-300 italic mb-10 border-b border-white/10 pb-8 text-lg font-normal leading-relaxed relative z-10">{r.note}</p>
              
              <div className="space-y-8 relative z-10">
                {r.steps.map((s, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <span className="text-4xl text-[#D4AF37]/30 font-bold group-hover:text-[#D4AF37] transition-colors">0{i + 1}</span>
                    <p className="text-slate-300 text-base pt-1 font-normal leading-relaxed">{s}</p>
                  </div>
                ))}
              </div>

              <div className="mt-14 pt-10 border-t border-white/10 relative z-10">
                <div className="text-xs uppercase text-slate-500 mb-6 font-bold flex items-center gap-2">
                  <Heart className="h-4 w-4 text-[#D4AF37]"/> 廣大供具具足 (全數具足)
                </div>
                <div className="flex flex-wrap gap-2">
                  {r.used.map((u) => (
                    <Badge key={u} variant="outline" className="px-4 py-2 border-white/10 text-slate-300 font-normal hover:border-amber-500/50 transition-colors">
                      {u}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-10 text-[10px] text-slate-600 tracking-wider uppercase relative z-10">
                資料來源參考：
                {r.sources.map((x) => (
                  <a key={x.url} className="ml-2 hover:text-amber-500 underline underline-offset-4" href={x.url} target="_blank" rel="noreferrer">{x.label}</a>
                ))}
              </div>
            </Card>

            <div className="space-y-6 flex flex-col justify-center">
              <Card className="overflow-hidden rounded-[3rem] border border-white/10 h-[400px] bg-black flex items-center justify-center relative shadow-2xl">
                <img src={rv.photo} className="w-full h-full object-cover object-center opacity-90 transition-transform duration-1000" alt="Altar Detail" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </Card>
              <div className="grid grid-cols-2 gap-6">
                {[ 
                  { img: rv.iconA, t: rv.iconATitle, l: rv.iconALabel }, 
                  { img: rv.iconB, t: rv.iconBTitle, l: rv.iconBLabel } 
                ].map((x, i) => (
                  <Card key={i} className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] text-center flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors shadow-xl">
                    <img src={x.img} className="w-20 h-20 rounded-full border-2 border-white/10 object-cover object-center shadow-lg" alt={x.l} />
                    <div className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase">{x.t}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. 經典引用 (建立信賴度)
        ========================================================= */}
        <section className="mt-40">
          <Card className="p-10 md:p-20 rounded-[3.5rem] border border-amber-500/20 bg-black text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6 font-bold relative z-10">{d.sutraMerit.quoteSource}</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight leading-tight relative z-10">{d.sutraMerit.title}</h2>
            
            <blockquote className="max-w-4xl mx-auto border-l-4 border-[#D4AF37] pl-8 md:pl-12 text-xl md:text-2xl text-slate-300 italic py-8 text-left mb-12 font-bold leading-loose relative z-10 bg-white/[0.02] rounded-r-3xl">
              {d.sutraMerit.quote}
            </blockquote>

            <div className="max-w-3xl mx-auto text-slate-400 text-left space-y-6 font-normal leading-relaxed relative z-10">
              {d.sutraMerit.paragraphs.map((p, i) => <p key={i} className="text-base md:text-lg">{p}</p>)}
            </div>
          </Card>
        </section>

        {/* =========================================================
            7. 增益故事與背景
        ========================================================= */}
        <section className="mt-40 max-w-4xl mx-auto text-left">
          <div className="text-center mb-16">
            <div className="text-[#D4AF37] text-xs tracking-widest uppercase mb-3 font-bold">{d.wealthStory.source}</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{d.wealthStory.title}</h2>
          </div>
          <Card className="p-10 md:p-16 rounded-[3rem] border border-white/10 bg-white/[0.01] relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 p-10 text-white/[0.03] pointer-events-none"><BookOpen className="h-64 w-64" /></div>
            <div className="space-y-8 relative z-10 text-slate-300 text-lg leading-loose font-normal">
              {d.wealthStory.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </Card>
        </section>

        {/* =========================================================
            8. 真實見證 (對應 siteData.ts 中的 TESTIMONIALS)
        ========================================================= */}
        <section className="mt-40 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight">願您是下一位回來感恩的人</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {d.testimonials.map((t, i) => (
              <Card key={i} className="p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] flex flex-col h-full hover:border-amber-500/20 transition-all hover:bg-white/[0.04]">
                <div className="font-bold text-[#D4AF37] mb-6 text-xl tracking-wide leading-snug">{t.title}</div>
                <div className="text-sm text-slate-300 font-normal leading-loose mb-8 flex-grow">"{t.body}"</div>
                <div className="text-[10px] tracking-widest uppercase text-slate-500 border-t border-white/10 pt-6 mt-auto font-bold tracking-[0.2em]">
                  {t.by}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* =========================================================
            9. FAQ 常見疑慮
        ========================================================= */}
        <section className="mt-40 max-w-3xl mx-auto text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center tracking-tight">常見疑慮</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {d.faq.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-white/10 bg-white/[0.01] rounded-2xl px-6 data-[state=open]:border-amber-500/30 transition-colors">
                <AccordionTrigger className="text-white hover:no-underline font-bold text-lg py-6 text-left leading-relaxed">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed text-base pb-6 font-normal">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* =========================================================
            10. 交叉銷售 (✅ 修復 404 連結問題)
        ========================================================= */}
        <section className="mt-40 border-t border-white/10 pt-32 pb-10 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">您也可能更適合…</h2>
            <p className="text-slate-400 text-base font-bold">探索其他本尊路徑，尋找最精準的能量對位</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto text-left">
            {d.crossSell.map((x, i) => (
              // ✅ 修正：連結路徑改為 /deities/ 複數，對接 siteData.ts 路由設定
              <Link key={i} href={`/deities/${x.to}`}>
                <Card className="p-10 rounded-[2.5rem] border border-white/10 bg-black hover:border-amber-500/30 transition-all group cursor-pointer shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-bl-full -z-10 group-hover:bg-amber-500/5 transition-colors duration-500" />
                  <div className="font-bold text-2xl text-white mb-4 group-hover:text-amber-500 transition-colors tracking-wide leading-tight">
                    {x.title}
                  </div>
                  <div className="text-sm text-slate-400 mb-10 font-normal leading-relaxed">
                    {x.desc}
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF37] group-hover:translate-x-2 transition-transform">
                    查看對應路徑 <ChevronRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <SiteFooter />
      <FloatingFb />
      <StickyCta />
    </div>
  );
}