import { Link } from "wouter";
import { ArrowRight, ExternalLink, ShieldCheck, Sparkles, Heart, Zap } from "lucide-react";
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
import altarYellow from "@/assets/visuals/generated/altar-yellow-water-offering.jpeg";
import altarMahashri from "@/assets/visuals/generated/altar-mahashri-home-wealth.jpeg";
import altarGanapati from "@/assets/visuals/generated/altar-ganapati-obstacle-removal.jpeg";
import altarKurukulla from "@/assets/visuals/generated/altar-kurukulla-magnetizing.jpeg";

import iconYellow from "@/assets/visuals/generated/image_w1024_h1024_icon-yellow-water-offering.webp";
import iconMahashri from "@/assets/visuals/generated/image_w1024_h1024_icon-mahashri-home.webp";
import iconGanapati from "@/assets/visuals/generated/image_w1024_h1024_icon-ganapati-clarity.webp";
import iconKurukulla from "@/assets/visuals/generated/image_w1024_h1024_icon-kurukulla-magnetize.webp";

import iconWater from "@/assets/visuals/generated/icon-water-offering.jpeg";
import iconIncense from "@/assets/visuals/generated/icon-incense-lamp.jpeg";

// GA4 追蹤函數
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

// ✅ 修正點：補齊 iconBLabel 確保符合 RitualVisual 型別要求
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
    iconBTitle: "花／香／燈供",
  },
};

const RITUAL_BY_KEY: Record<DeityKey, RitualBlock> = {
  yellow: {
    title: "黃財神專屬儀軌：灑淨水供",
    note: "依贊巴拉傳承次第：以清淨水作供，洗滌累世匱乏印記，令法財增廣。",
    steps: [
      "安置清淨水供：依據不以空器上供之教誡，整齊排列水供碗。",
      "正立動機：先皈依三寶、發菩提心，將「求財」轉為「為利他而增上資糧」。",
      "水供與持誦：於持誦心咒時對本尊行水供，觀想甘露消除貧窮業障。",
      "結行迴向：將功德迴向眾生，願障礙消融、財路清明。",
    ],
    used: ["純銀/純銅水供杯", "藏紅花清淨水", "特級臥香", "酥油長明燈", "新鮮黃色鮮花", "黃金曼達盤", "計數念珠"],
    sources: [{ label: "Lama Yeshe Archive｜Dzambhala Practice", url: "https://www.lamayeshe.com/advice/dzambhala-practice-increasing-wealth" }],
  },
  mahashri: {
    title: "大吉祥天女：資糧圓滿儀軌",
    note: "依《金光明最勝王經》：令受持者飲食、衣服、臥具、醫藥皆圓滿無缺。",
    steps: [
      "莊嚴五供：準備香、燈、花、食、水，表法資具圓滿。",
      "誦持經典誓願：讀誦《最勝王經》天女品，對接資糧法流。",
      "安住家宅：平撫環境燥氣，化解衰耗頻率。",
      "結行迴向：功德迴向家宅平安，資糧續航。",
    ],
    used: ["特製食子 (Torma)", "五色水果拼盤", "精緻糕點", "沉香薰香", "蓮花燈", "《金光明最勝王經》經本", "絲綢五色布"],
    sources: [{ label: "本站經典引用｜大吉祥天女增長財物品", url: "#/sutra" }],
  },
  ganapati: {
    title: "象神：除障與智慧財商儀軌",
    note: "依經示：持誦心陀羅尼七遍，令所作皆成，碎裂理財盲點。",
    steps: [
      "禮敬與供養：先供奉象神喜愛之甜食，建立歡喜連結。",
      "持誦七遍陀羅尼：依經文教示持誦，劈開投資決策之迷霧。",
      "觀想與攝心：以本尊作為智慧除障的所緣境，令散亂心收束。",
      "結行迴向：將清明與善巧功德迴向現前理財抉擇。",
    ],
    used: ["傳統拉度甜點 (Laddu)", "紅糖與蜂蜜", "乳香供香", "智慧明燈", "吉祥草", "紅花水", "除障金剛鈴"],
    sources: [{ label: "Virtual Vinodh｜Ārya Mahā Gaṇapati Hṛdaya", url: "https://www.virtualvinodh.com/writings/mantras/arya-maha-ganapati" }],
  },
  kurukulla: {
    title: "作明佛母：懷愛與攝受儀軌",
    note: "蓮花部事業：以攝受力調整磁場，非操控他人，而是感召善緣。",
    steps: [
      "由空性起觀：觀想本尊由種子字顯現，散發紅蓮光芒。",
      "鮮花供養：特別以紅鮮花作供，增長攝受資糧。",
      "持誦攝心：持誦心咒調伏自心，消除感情內耗。",
      "結行迴向：願爛桃花斷除，正緣與貴人自然靠攏。",
    ],
    used: ["鮮豔紅蓮花/玫瑰", "玫瑰精油香氛", "紅色酥油燈", "石榴/紅葡萄", "懷愛哈達", "紅珊瑚裝飾", "懷愛心咒輪"],
    sources: [{ label: "Lotsawa House｜Kurukullā Sādhana", url: "https://www.lotsawahouse.org/tibetan-masters/mipham/kurukulla-sadhana" }],
  },
};

export default function DeityPage({ deityKey }: { deityKey: string }) {
  const keys: readonly DeityKey[] = ["yellow", "mahashri", "ganapati", "kurukulla"];
  const d: Deity | undefined = keys.includes(deityKey as DeityKey)
    ? DEITY_BY_KEY[deityKey as DeityKey]
    : undefined;

  if (!d) {
    return (
      <div className="min-h-screen bg-background">
        <Seo title="頁面不存在" noIndex />
        <SiteHeader />
        <main className="mx-auto max-w-5xl px-4 pt-14 pb-24 text-center">
          <h1 className="font-display text-4xl">此本尊頁尚未上架</h1>
          <Link href="/" className="mt-8 inline-block underline text-primary">回首頁</Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const r = RITUAL_BY_KEY[d.key];
  const rv = RITUAL_VISUAL_BY_KEY[d.key];

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${d.name}｜${d.subtitle}`} path={d.route} />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-24">
        {/* 1) Hero */}
        <section className="grid gap-10 md:grid-cols-[1.1fr_.9fr] items-start">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.26em] uppercase text-muted-foreground mb-3">
              <Sparkles className="h-4 w-4 text-primary" /> 如法儀軌 · 能量校正
            </div>
            <h1 className="mt-2 font-display text-4xl md:text-6xl">{d.name}</h1>
            <div className="mt-3 text-sm tracking-[0.22em] uppercase text-primary font-bold">{d.subtitle}</div>

            <Card className="mt-7 p-7 gold-border bg-card paper-grain shadow-sm">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">精準對位卡點</div>
              <div className="mt-2 font-display text-2xl md:text-3xl">{d.oracle.question}</div>
              <div className="mt-3 readable text-muted-foreground leading-relaxed">{d.promise}</div>
            </Card>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                className="h-14 px-8 font-black tracking-[0.24em] uppercase gold-border shadow-xl text-lg"
                onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}
              >
                查看專屬護持方案 <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Link href="/" className="h-14 px-8 inline-flex items-center justify-center rounded-md border bg-card gold-border readable text-muted-foreground hover:text-primary transition-colors">
                回首頁檢測能量
              </Link>
            </div>
          </div>

          <div className="relative vignette">
            <div className="rounded-[40px] overflow-hidden gold-border shadow-2xl">
              <img src={d.heroImage} alt={d.name} className="w-full h-[400px] md:h-[580px] object-cover" loading="eager" />
            </div>
          </div>
        </section>

        {/* 2) Info Cards */}
        <section className="mt-12 grid gap-4 md:grid-cols-3">
          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">溫柔提醒</div>
            <div className="mt-2 font-display text-2xl">先把祈願寫成一句話</div>
            <p className="mt-3 text-sm readable text-muted-foreground">不用寫很玄。用一句你看得懂、也願意承擔的話就好：例如「願我把財務節奏穩住」。</p>
          </Card>
          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">完成法事後的你</div>
            <div className="mt-2 font-display text-2xl">把一件小事做完</div>
            <p className="mt-3 text-sm readable text-muted-foreground">護持不是把責任丟出去。選一件最小、最可行的事情去執行——讓福氣開始。</p>
          </Card>
          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">你可能感受到</div>
            <div className="mt-2 font-display text-2xl">心比較定、路比較清楚</div>
            <p className="mt-3 text-sm readable text-muted-foreground">常見的是：焦慮下降、猶豫變少、開啟機會，這種細微但會累積的改變。</p>
          </Card>
        </section>

        {/* 3) Plans & GA4 Tracking */}
        <section id="plans" className="mt-16 scroll-mt-24">
          <div className="flex items-end justify-between border-b pb-6">
            <h2 className="font-display text-3xl md:text-4xl">專屬護持方案</h2>
            <Link href="/pay" className="text-sm tracking-[0.2em] uppercase underline underline-offset-4">去總覽頁一次看完</Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {d.plans.map((p) => (
              <Card key={p.id} className="p-8 gold-border bg-card hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="font-bold text-2xl">{p.name}</div>
                      {p.hot && <Badge className="gold-border bg-accent/35 text-accent-foreground px-3 py-1">{p.badge || "極致推薦"}</Badge>}
                    </div>
                    <div className="mt-4 readable text-muted-foreground text-sm">{p.blurb}</div>
                    <div className="mt-4 bg-accent/10 p-3 rounded-xl text-xs italic text-primary/90">
                      <Zap className="h-4 w-4 inline mr-2" /> {p.feedback}
                    </div>
                  </div>
                  <div className="text-xl font-black text-primary">{money(p.price)}</div>
                </div>

                <div className="mt-8">
                  <a 
                    href={p.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackEcPayClick(p.name, p.price, d.name)}
                  >
                    <Button className="w-full gold-border font-black uppercase tracking-widest h-14">
                      前往綠界安全登記 <ExternalLink className="h-5 w-5 ml-2" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 4) Ritual Detail */}
        <section className="mt-24">
          <h2 className="font-display text-3xl md:text-4xl mb-10 text-center">如法廣大供養｜法事細節</h2>
          <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr]">
            <Card className="p-10 gold-border bg-card paper-grain relative">
              <div className="absolute top-10 right-10 text-primary opacity-20"><ShieldCheck className="h-16 w-16" /></div>
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground mb-3">{r.title}</div>
              <p className="readable text-muted-foreground italic mb-8 border-b pb-6 text-lg">{r.note}</p>
              <div className="space-y-8">
                {r.steps.map((step: string, idx: number) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <span className="font-display text-3xl text-primary/30 leading-none">0{idx + 1}</span>
                    <p className="readable text-md pt-1">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs tracking-[0.24em] uppercase text-muted-foreground mb-6">
                  <Heart className="h-4 w-4 text-primary" /> 儀軌所需廣大供具 (全數具足)
                </div>
                <div className="flex flex-wrap gap-3">
                  {r.used.map((u: string) => (
                    <Badge key={u} variant="outline" className="font-normal px-4 py-2 bg-background/50 border-primary/20">{u}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-xs text-muted-foreground">
                參考資料：
                {r.sources.map((x) => (
                  <div key={x.url} className="mt-2">
                    <a className="underline underline-offset-4" href={x.url} target="_blank" rel="noreferrer">
                      {x.label}
                    </a>
                  </div>
                ))}
              </div>
            </Card>

            <div className="space-y-8">
              <Card className="overflow-hidden gold-border h-[320px] shadow-xl relative group">
                <img src={rv.photo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Altar" />
              </Card>
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 gold-border bg-card/50 text-center flex flex-col items-center gap-4">
                  <img src={rv.iconA} className="w-28 h-28 rounded-full gold-border object-cover shadow-lg" alt="Icon A" />
                  <div className="text-sm font-bold text-primary tracking-widest">{rv.iconATitle}</div>
                </Card>
                <Card className="p-6 gold-border bg-card/50 text-center flex flex-col items-center gap-4">
                  <img src={rv.iconB} className="w-28 h-28 rounded-full gold-border object-cover shadow-lg" alt="Icon B" />
                  <div className="text-sm font-bold text-primary tracking-widest">{rv.iconBTitle}</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 5) Sutra Merit (經典功德) */}
        <section className="mt-24">
          <h2 className="font-display text-3xl md:text-4xl mb-6">經典對應功德與經文引用</h2>
          <Card className="p-8 gold-border bg-card paper-grain shadow-sm">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground mb-2">{d.sutraMerit.quoteSource}</div>
            <div className="font-display text-2xl md:text-3xl mb-6">{d.sutraMerit.title}</div>
            <blockquote className="border-l-4 border-primary/40 pl-6 readable text-xl text-foreground italic bg-accent/5 py-4 rounded-r-lg">
              {d.sutraMerit.quote.split("\n").map((line, i) => <div key={i}>{line}</div>)}
            </blockquote>
            <div className="mt-8 grid gap-6">
              {d.sutraMerit.paragraphs.map((p, i) => <p key={i} className="readable text-muted-foreground text-lg">{p}</p>)}
            </div>
          </Card>
        </section>

        {/* 6) Wealth Story (增益故事) */}
        <section className="mt-24">
          <h2 className="font-display text-3xl md:text-4xl mb-6">經典裡，這尊如何給你『增益』</h2>
          <Card className="p-8 gold-border bg-card paper-grain shadow-sm">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground mb-2">{d.wealthStory.source}</div>
            <div className="font-display text-2xl md:text-3xl mb-6">{d.wealthStory.title}</div>
            <div className="grid gap-6">
              {d.wealthStory.paragraphs.map((p, i) => <p key={i} className="readable text-muted-foreground text-lg">{p}</p>)}
            </div>
          </Card>
        </section>

        {/* 7) Testimonials (見證回饋) */}
        <section className="mt-24">
          <h2 className="font-display text-3xl md:text-4xl mb-8">願你是下一個回來感恩的人</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {d.testimonials.map((t, i) => (
              <Card key={i} className="p-8 gold-border bg-card hover:bg-accent/5 transition-colors">
                <div className="font-bold text-primary mb-4 text-lg">{t.title}</div>
                <div className="text-sm readable text-muted-foreground leading-relaxed mb-6">{t.body}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground border-t pt-4">{t.by}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* 8) FAQ */}
        <section className="mt-24">
          <h2 className="font-display text-3xl md:text-4xl mb-10 text-center">常見疑慮</h2>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto space-y-4">
            {d.faq.map((x, i) => (
              <AccordionItem key={i} value={`${i}`} className="gold-border rounded-2xl bg-card px-4">
                <AccordionTrigger className="px-6 py-5 text-left font-semibold text-lg hover:no-underline">{x.q}</AccordionTrigger>
                <AccordionContent className="px-6 pb-6 readable text-muted-foreground text-md leading-relaxed">{x.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 9) Cross Sell */}
        <section className="mt-24">
          <h2 className="font-display text-3xl md:text-4xl mb-8">你也可能更適合…</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {d.crossSell.map((x, i) => (
              <Link key={i} href={`/deities/${x.to}`}>
                <Card className="p-8 gold-border bg-card hover:bg-accent/25 transition-all group cursor-pointer">
                  <div className="font-bold text-xl mb-3">{x.title}</div>
                  <div className="text-sm readable text-muted-foreground">{x.desc}</div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                    看對應路徑 <ArrowRight className="h-4 w-4" />
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
      <div className="h-20" />
    </div>
  );
}