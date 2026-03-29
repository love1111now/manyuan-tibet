"use client";

import { Link } from "wouter";
import { ArrowRight, ExternalLink, ShieldCheck, Sparkles, Heart, ChevronRight } from "lucide-react";
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

// 圖片路徑
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

// GA4 追蹤函數
const trackEcPayClick = (planName: string, price: number, deityName: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "begin_checkout", {
      currency: "TWD",
      value: price,
      items: [{
        item_id: planName,
        item_name: `${deityName} - ${planName}`,
        price: price,
        quantity: 1
      }]
    });
    window.gtag("event", "click_ecpay", {
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
// 視覺與儀軌資料定義：全面對齊大吉祥天女與正信藏傳語境
// ----------------------------------------------------------------------
const RITUAL_VISUAL_BY_KEY: Record<DeityKey, RitualVisual> = {
  yellow: {
    photo: altarYellow,
    iconA: iconYellow,
    iconALabel: "Water offering",
    iconATitle: "黃財神水供",
    iconB: iconIncense,
    iconBLabel: "Incense & lamp",
    iconBTitle: "香／燈供",
  },
  mahashri: {
    photo: altarMahashri,
    iconA: iconMahashri,
    iconALabel: "Sutra & offerings",
    iconATitle: "護持資糧",
    iconB: iconWater,
    iconBLabel: "Water bowl offering",
    iconBTitle: "清淨水供",
  },
  ganapati: {
    photo: altarGanapati,
    iconA: iconGanapati,
    iconALabel: "Obstacle removal",
    iconATitle: "除障清明",
    iconB: iconIncense,
    iconBLabel: "Offerings",
    iconBTitle: "供香／供甜",
  },
  kurukulla: {
    photo: altarKurukulla,
    iconA: iconKurukulla,
    iconALabel: "Magnetizing",
    iconATitle: "攝受善緣",
    iconB: iconIncense,
    iconBLabel: "Offerings",
    iconBTitle: "花／香供",
  },
  "green-tara": {
    photo: altarGreenTara,
    iconA: iconGreenTara,
    iconALabel: "Quick help",
    iconATitle: "綠度母迅疾除障",
    iconB: iconIncense,
    iconBLabel: "Homa offering",
    iconBTitle: "護摩火供",
  },
};

const RITUAL_BY_KEY: Record<DeityKey, RitualBlock> = {
  yellow: {
    title: "黃財神專屬儀軌：灑淨水供",
    note: "依贊巴拉傳承次第：以清淨水作供，洗滌累世慳吝印記，令福德資糧增廣。",
    steps: [
      "安置清淨水供：依據不以空器上供之教誡，整齊排列水供碗。",
      "正立動機：先皈依三寶、發菩提心，將「求財」轉為「為利他而增上資糧」。",
      "水供與持誦：於持誦心咒時對本尊行水供，觀想甘露消除匱乏業障。",
      "結行迴向：將功德迴向眾生，願資源充沛、財路清明。",
    ],
    used: ["純銀/純銅水供杯", "藏紅花清淨水", "特級臥香", "酥油長明燈", "黃色鮮花", "黃金曼達盤", "計數念珠"],
    sources: [{ label: "Lama Yeshe Archive｜Dzambhala Practice", url: "https://www.lamayeshe.com/advice/dzambhala-practice-increasing-wealth" }],
  },
  mahashri: {
    title: "大吉祥天女：資糧圓滿儀軌",
    note: "依《金光明最勝王經》：令受持者飲食、衣服、臥具、醫藥皆圓滿無缺。",
    steps: [
      "莊嚴五供：準備香、燈、花、食、水，表法資具圓滿。",
      "誦持經典誓願：讀誦《最勝王經》天女品，對接豐饒法流。",
      "安住家宅：平撫環境燥氣，洗滌耗損福報之惡業。",
      "結行迴向：功德迴向家宅平安，資具無缺，財庫穩固。",
    ],
    used: ["特製食子 (Torma)", "五色水果拼盤", "精緻糕點", "沉香薰香", "蓮花燈", "《金光明最勝王經》", "絲綢五色布"],
    sources: [{ label: "本站經典引用｜大吉祥天女增長財物品", url: "#" }],
  },
  ganapati: {
    title: "象頭財神：除障與無礙成就儀軌",
    note: "依經示：持誦心陀羅尼七遍，令所作皆成，強力掃除重重違緣。",
    steps: [
      "禮敬與供養：先供奉象神喜愛之甜食，建立歡喜連結。",
      "持誦七遍陀羅尼：依經文教示持誦，劈開投資與決策之迷霧。",
      "觀想與攝心：以本尊作為智慧除障的所緣境，令散亂心收束。",
      "結行迴向：將清明與無礙功德迴向現前事業，掌握主導權。",
    ],
    used: ["傳統拉度甜點 (Laddu)", "紅糖與蜂蜜", "乳香供香", "智慧明燈", "吉祥草", "紅花水", "除障金剛鈴"],
    sources: [{ label: "Virtual Vinodh｜Ārya Mahā Gaṇapati Hṛdaya", url: "https://www.virtualvinodh.com/writings/mantras/arya-maha-ganapati" }],
  },
  kurukulla: {
    title: "作明佛母：懷愛與攝受儀軌",
    note: "蓮花部事業：以慈悲與威儀攝受人心，轉化情執，圓滿一切善緣。",
    steps: [
      "由空性起觀：觀想本尊由種子字顯現，散發紅蓮光芒。",
      "莊嚴花供：特別以紅色鮮花作供，增長攝受資糧。",
      "持誦攝心：持誦心咒調伏自心，消除情感與人際內耗。",
      "結行迴向：願惡緣斷除，善緣自然靠攏，化解一切疏離對立。",
    ],
    used: ["鮮豔紅蓮花/玫瑰", "玫瑰精油香氛", "紅色酥油燈", "石榴/紅葡萄", "懷愛哈達", "紅珊瑚裝飾", "懷愛心咒輪"],
    sources: [{ label: "Lotsawa House｜Kurukullā Sādhana", url: "https://www.lotsawahouse.org/tibetan-masters/mipham/kurukulla-sadhana" }],
  },
  "green-tara": {
    title: "綠度母：清明除障護摩火供",
    note: "度母以『迅速』聞名：以火供的轉化力，清算障礙種子，令福德與利樂快速落地。",
    steps: [
      "立清淨動機：皈依三寶、發菩提心，將祈願寫成一句具體可承擔的話。",
      "安置火供壇城：備辦香、燈、花、食、淨水等供具，莊嚴壇場。",
      "護摩火供轉化：以聖火承載祈願與迴向，觀想障礙與恐懼在火中清淨。",
      "結行迴向：願『八怖即除』，令身心輕安，遠離一切突發之怖畏。",
    ],
    used: ["護摩火供爐", "酥油燈", "淨水供杯", "青蓮/綠色花供", "藏香", "供米/供糖", "迴向疏文"],
    sources: [{ label: "《二十一尊度母讚》", url: "#" }],
  },
};

export default function DeityPage({ deityKey }: { deityKey: string }) {
  const keys: readonly DeityKey[] = ["yellow", "mahashri", "ganapati", "kurukulla", "green-tara"];
  const d: Deity | undefined = keys.includes(deityKey as DeityKey)
    ? DEITY_BY_KEY[deityKey as DeityKey]
    : undefined;

  // 防呆：若路徑錯誤顯示 404
  if (!d) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col font-serif">
        <Seo title="本尊路徑不存在" noIndex />
        <SiteHeader />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="font-display text-4xl text-[#D4AF37]">此本尊路徑尚未開啟</h1>
          <p className="text-slate-400 mt-4">請返回首頁重新選擇您的護持路徑。</p>
          <Link href="/">
            <Button className="mt-8 bg-[#D4AF37] hover:bg-amber-400 text-black font-bold tracking-widest uppercase">
              回首頁
            </Button>
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const r = RITUAL_BY_KEY[d.key];
  const rv = RITUAL_VISUAL_BY_KEY[d.key];

  return (
    <div className="min-h-screen bg-[#050505] font-serif text-slate-200 selection:bg-amber-500/30 overflow-x-hidden">
      <Seo title={`${d.name}｜${d.subtitle}`} path={d.route} />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-6 pt-24 md:pt-32 pb-32">
        {/* =========================================================
            1) Hero 區塊 (頂級漆黑金箔視覺)
        ========================================================= */}
        <section className="grid gap-12 md:grid-cols-[1.1fr_.9fr] items-center relative">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs tracking-[0.26em] uppercase text-amber-500/80 mb-4 font-bold">
              <Sparkles className="h-4 w-4" /> 如法儀軌 · 能量校正
            </div>
            <h1 className="mt-2 font-display text-5xl md:text-7xl font-bold text-white drop-shadow-lg tracking-tighter">{d.name}</h1>
            <div className="mt-4 text-sm md:text-base tracking-[0.25em] uppercase text-[#D4AF37] font-bold">{d.subtitle}</div>

            <Card className="mt-10 p-8 md:p-10 rounded-[2rem] border border-amber-500/20 bg-gradient-to-br from-[#0a0a0a] to-[#111] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full -z-10 group-hover:bg-amber-500/10 transition-colors duration-500" />
              <div className="text-xs tracking-[0.24em] uppercase text-slate-500 mb-3">對治現況卡點</div>
              <div className="font-display text-2xl md:text-3xl text-white leading-snug mb-4">{d.oracle.question}</div>
              <div className="text-slate-400 leading-relaxed font-light">{d.promise}</div>
            </Card>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                className="h-14 px-8 font-black tracking-widest uppercase bg-[#D4AF37] hover:bg-amber-400 text-black shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all"
                onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
              >
                查看專屬護持方案 <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Link href="/">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 border-white/10 hover:bg-white/5 text-slate-300 tracking-widest uppercase backdrop-blur-sm">
                  回首頁總覽
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-amber-500/20 rounded-[2.5rem] blur-2xl group-hover:bg-amber-500/30 transition-colors duration-500 -z-10" />
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img src={d.heroImage} alt={d.name} className="w-full h-[450px] md:h-[650px] object-cover transform group-hover:scale-105 transition-transform duration-1000" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </section>

        {/* =========================================================
            2) 心理建設卡片 (Info Cards)
        ========================================================= */}
        <section className="mt-32 grid gap-6 md:grid-cols-3">
          {[
            { title: "溫柔提醒", sub: "先把祈願寫成一句話", desc: "不用寫很玄。用一句你看得懂、也願意承擔的話就好：例如「願我把財務節奏穩住」。" },
            { title: "完成法事後的你", sub: "把一件小事做完", desc: "護持不是把責任丟出去。選一件最小、最可行的事情去執行——讓福氣與善緣開始流動。" },
            { title: "你可能感受到", sub: "心比較定、路比較清楚", desc: "最常見的是：焦慮下降、猶豫變少、意外機會開啟，這種細微但會慢慢累積的改變。" }
          ].map((card, i) => (
            <Card key={i} className="p-8 md:p-10 rounded-[2rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-amber-500/30 transition-all duration-500">
              <div className="text-[10px] tracking-[0.24em] uppercase text-[#D4AF37] mb-4 font-bold">{card.title}</div>
              <div className="font-display text-2xl md:text-3xl text-white mb-5 tracking-tight">{card.sub}</div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{card.desc}</p>
            </Card>
          ))}
        </section>

        {/* =========================================================
            3) 綠度母特別企劃 (Gallery) - 方案已解鎖
        ========================================================= */}
        {d.key === "green-tara" && (
          <section className="mt-32">
            <Card className="p-10 md:p-12 rounded-[3rem] border border-amber-500/20 bg-gradient-to-br from-[#0a0a0a] to-[#111] shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="flex items-start justify-between gap-6 flex-wrap relative z-10">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-red-500 text-white border-none font-black tracking-widest text-[10px] px-3 py-1 uppercase">限時活動</Badge>
                    <span className="text-xs tracking-[0.2em] uppercase text-green-400/80 font-bold">Special Puja</span>
                  </div>
                  <div className="font-display text-3xl md:text-4xl text-white font-bold mb-4 tracking-tighter">清明・綠度母火供<span className="text-[#D4AF37] ml-3 italic">已正式開放</span></div>
                  <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">
                    度母以「迅疾」著稱，能最快平息生活中的恐懼與障礙。本次法會特別開放專屬方案，讓您能依發心選擇最適合的除障路徑。請至下方方案區直接預約護持。
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-5 relative z-10">
                <div className="rounded-[2rem] overflow-hidden border border-white/10 md:col-span-3 group">
                  <img src={greenTaraGallery01} alt="綠度母壇城與酥油燈" className="h-[300px] md:h-[400px] w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="rounded-[2rem] overflow-hidden border border-white/10 md:col-span-2 group">
                  <img src={greenTaraGallery02} alt="護摩火供儀軌" className="h-[300px] md:h-[400px] w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* =========================================================
            4) 方案區塊 (Plans & ECpay)
            ⚠️ 提示：這裡的資料來自 siteData.ts 裡的 d.plans 陣列
        ========================================================= */}
        <section id="plans" className="mt-32 scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-4">
            <div>
              <div className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-2 font-bold">Offerings</div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tighter">本尊專屬護持方案</h2>
            </div>
            <Link href="/pay">
              <Button variant="link" className="text-slate-400 hover:text-[#D4AF37] tracking-[0.1em] px-0 h-auto font-light">
                前往總覽頁比較所有本尊 <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {d.plans.map((p) => (
              <Card key={p.id} className="p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-amber-500/30 transition-all duration-500 group flex flex-col relative overflow-hidden">
                {/* 裝飾光暈 */}
                {p.hot && <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 blur-[40px] rounded-full pointer-events-none" />}

                <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-3">
                      <div className="font-bold text-2xl text-white">{p.name}</div>
                      {p.hot && <Badge className="bg-amber-500 text-black border-none px-3 py-1 font-black tracking-widest text-[10px] uppercase shadow-lg shadow-amber-500/20">{p.badge || "熱門選擇"}</Badge>}
                    </div>
                    <div className="text-slate-400 text-sm font-light leading-relaxed">{p.blurb}</div>
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-8 relative z-10">
                  <span className="text-sm text-amber-500/80 font-serif">NT$</span>
                  <span className="text-4xl font-bold text-amber-500 font-serif tracking-tighter">{money(p.price)}</span>
                </div>

                {p.feedback && (
                  <div className="mb-8 bg-black/60 border border-white/5 p-5 rounded-2xl text-xs italic text-slate-400 font-light leading-relaxed relative z-10">
                    <span className="text-[#D4AF37] text-lg mr-1 leading-none font-serif">“</span>
                    {p.feedback}
                  </div>
                )}

                <div className="mt-auto relative z-10">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEcPayClick(p.name, p.price, d.name)}
                  >
                    <Button className={`w-full font-black uppercase tracking-widest h-14 transition-colors ${p.hot ? 'bg-[#D4AF37] hover:bg-amber-400 text-black' : 'bg-white hover:bg-slate-200 text-black'}`}>
                      前往登記護持 <ExternalLink className="h-4 w-4 ml-2 opacity-50" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* =========================================================
            5) 儀軌細節 (Ritual Detail)
        ========================================================= */}
        <section className="mt-40">
          <div className="text-center mb-16">
            <div className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3 font-bold">Dharma Practice</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tighter">如法廣大供養・法事細節</h2>
          </div>
          
          <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr]">
            <Card className="p-8 md:p-12 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden shadow-2xl">
              <div className="absolute top-10 right-10 text-white/5"><ShieldCheck className="h-32 w-32" /></div>
              
              <div className="text-xs tracking-[0.24em] uppercase text-[#D4AF37] mb-4 font-bold relative z-10">{r.title}</div>
              <p className="text-slate-300 italic mb-10 border-b border-white/10 pb-8 text-lg font-light leading-relaxed relative z-10">{r.note}</p>
              
              <div className="space-y-8 relative z-10">
                {r.steps.map((step: string, idx: number) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <span className="font-display text-4xl text-[#D4AF37]/30 leading-none group-hover:text-[#D4AF37] transition-colors duration-300">0{idx + 1}</span>
                    <p className="text-slate-300 text-base font-light leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-14 pt-10 border-t border-white/10 relative z-10">
                <div className="flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-slate-500 mb-6 font-bold">
                  <Heart className="h-4 w-4 text-[#D4AF37]" /> 儀軌所需廣大供具 (全數具足)
                </div>
                <div className="flex flex-wrap gap-3">
                  {r.used.map((u: string) => (
                    <Badge key={u} variant="outline" className="font-normal px-4 py-2 bg-black/50 border-white/10 text-slate-300 hover:border-[#D4AF37] transition-colors backdrop-blur-sm">{u}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-10 text-[10px] text-slate-500 tracking-wider uppercase relative z-10">
                資料來源參考：
                {r.sources.map((x) => (
                  <a key={x.url} className="ml-2 hover:text-[#D4AF37] underline underline-offset-4 transition-colors" href={x.url} target="_blank" rel="noreferrer">
                    {x.label}
                  </a>
                ))}
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="overflow-hidden rounded-[3rem] border border-white/10 h-[400px] shadow-2xl relative group bg-black">
                <img src={rv.photo} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90" alt="Altar" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </Card>
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] text-center flex flex-col items-center gap-5 hover:bg-white/[0.05] transition-colors shadow-lg">
                  <img src={rv.iconA} className="w-24 h-24 rounded-full object-cover shadow-2xl border-2 border-white/10" alt={rv.iconALabel} loading="lazy" />
                  <div className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase">{rv.iconATitle}</div>
                </Card>
                <Card className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] text-center flex flex-col items-center gap-5 hover:bg-white/[0.05] transition-colors shadow-lg">
                  <img src={rv.iconB} className="w-24 h-24 rounded-full object-cover shadow-2xl border-2 border-white/10" alt={rv.iconBLabel} loading="lazy" />
                  <div className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase">{rv.iconBTitle}</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            6) 經典引用 (Sutra Merit)
        ========================================================= */}
        <section className="mt-40">
          <Card className="p-10 md:p-20 rounded-[3.5rem] border border-amber-500/20 bg-gradient-to-br from-[#050505] to-[#111] shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6 font-bold relative z-10">{d.sutraMerit.quoteSource}</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-12 tracking-tighter relative z-10">{d.sutraMerit.title}</h2>
            
            <blockquote className="max-w-4xl mx-auto border-l-4 border-[#D4AF37] pl-8 md:pl-12 text-lg md:text-2xl text-slate-300 italic py-8 rounded-r-3xl bg-white/[0.02] leading-loose text-left mb-12 relative z-10 shadow-inner">
              {d.sutraMerit.quote.split("\n").map((line, i) => <div key={i} className="mb-2">{line}</div>)}
            </blockquote>
            
            <div className="max-w-3xl mx-auto grid gap-6 text-slate-400 font-light leading-relaxed text-left relative z-10">
              {d.sutraMerit.paragraphs.map((p, i) => <p key={i} className="text-sm md:text-base">{p}</p>)}
            </div>
          </Card>
        </section>

        {/* =========================================================
            7) 增益故事 (Wealth Story)
        ========================================================= */}
        <section className="mt-40">
          <div className="text-center mb-16">
            <div className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase mb-3 font-bold">{d.wealthStory.source}</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tighter">{d.wealthStory.title}</h2>
          </div>
          <Card className="p-10 md:p-16 rounded-[3rem] border border-white/10 bg-white/[0.01] shadow-xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -top-20 -right-20 text-white/5"><BookOpen className="w-64 h-64" /></div>
            <div className="grid gap-8 relative z-10">
              {d.wealthStory.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-300 font-light leading-relaxed text-base md:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </Card>
        </section>

        {/* =========================================================
            8) 見證回饋 (Testimonials)
        ========================================================= */}
        <section className="mt-40">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4">願您是下一位<br className="md:hidden"/>回來感恩的人</h2>
            <p className="text-slate-400 text-sm">真實護持者的經驗與改變</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {d.testimonials.map((t, i) => (
              <Card key={i} className="p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors hover:border-amber-500/20 group flex flex-col h-full">
                <div className="font-bold text-[#D4AF37] mb-6 text-xl tracking-wide">{t.title}</div>
                <div className="text-sm text-slate-300 font-light leading-loose mb-8 flex-grow">"{t.body}"</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-slate-500 border-t border-white/10 pt-6 mt-auto">
                  {t.by}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* =========================================================
            9) 常見疑慮 (FAQ)
        ========================================================= */}
        <section className="mt-40">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tighter">常見疑慮</h2>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
            {d.faq.map((x, i) => (
              <AccordionItem key={i} value={`${i}`} className="border border-white/10 rounded-2xl bg-white/[0.02] px-2 overflow-hidden data-[state=open]:border-amber-500/30 transition-colors">
                <AccordionTrigger className="px-6 py-6 text-left font-bold text-lg text-slate-200 hover:text-white hover:no-underline [&[data-state=open]]:text-[#D4AF37]">
                  {x.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-400 text-sm font-light leading-relaxed">
                  {x.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* =========================================================
            10) 交叉銷售 (Cross Sell)
        ========================================================= */}
        <section className="mt-40 border-t border-white/10 pt-32 pb-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tighter">您也可能更適合…</h2>
            <p className="text-slate-400 text-sm mt-4">探索其他本尊路徑，尋找最精準的能量對位</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {d.crossSell.map((x, i) => (
              <Link key={i} href={`/deity/${x.to}`}>
                <Card className="p-8 md:p-10 rounded-[2.5rem] border border-white/10 bg-black hover:bg-white/[0.03] transition-all group cursor-pointer hover:border-amber-500/30">
                  <div className="font-bold text-2xl text-white mb-4 tracking-wide group-hover:text-[#D4AF37] transition-colors">{x.title}</div>
                  <div className="text-sm text-slate-400 font-light leading-relaxed">{x.desc}</div>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#D4AF37] group-hover:translate-x-2 transition-transform">
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

// 補上漏掉的 icon
import { BookOpen } from "lucide-react";