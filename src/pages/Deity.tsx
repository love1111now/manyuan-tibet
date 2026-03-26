import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
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
    title: "我們在儀軌中做了什麼（黃財神）",
    note:
      "依傳承常見次第『皈依與發菩提心 → 供養 → 持誦 → 結行迴向』進行。重點採用『以清淨水作供』的脈絡：一邊灑淨/水供，一邊持誦祈請，令匱乏與漏財的習氣先被洗淨、再談增益。",
    steps: [
      "安置供養：依水供/七供的原則，不以空器上供；先行清潔、整齊排列供具。",
      "正立動機：先皈依三寶、發菩提心，將『求財』轉為『為利他而增上資糧』。",
      "水供與持誦：依教導，於水供時持誦黃財神心咒/祈請文；觀想以水供令本尊歡喜，資糧與福德增長。",
      "隨分修善：依教誡，外在財的增上仍以佈施與供養作根本因；故以供養、隨喜、發願令功德穩固。",
      "結行迴向：將所修功德迴向眾生與現前因緣，願障礙消融、財路清明，並以善用資糧護持正法。",
    ],
    used: [
      "供碗與清淨水（或水供器具）",
      "香／燈／花／食等供品（隨分具足）",
      "念珠（持咒計數）",
      "本尊像／唐卡（作為所緣境）",
    ],
    sources: [
      { label: "Lama Yeshe Wisdom Archive｜Dzambhala Practice for Increasing Wealth（灑水供養與發心）", url: "https://www.lamayeshe.com/advice/dzambhala-practice-increasing-wealth" },
      { label: "Lama Yeshe Wisdom Archive｜Water Bowl Offerings（不以空器上供等次第）", url: "https://www.lamayeshe.com/article/chapter/13-water-bowl-offerings" },
    ],
  },
  mahashri: {
    title: "我們在儀軌中做了什麼（大吉祥天女）",
    note:
      "以《金光明最勝王經》『資具圓滿、離諸衰耗』的誓願作核心：先安住家宅與資糧，再談增祥。實作仍依儀軌次第完整做足供養、讚頌與迴向。",
    steps: [
      "清淨與安置：整理供桌、供碗、燈、香等，使供養莊嚴具足。",
      "皈依與發心：以護持三寶、利益眾生為方向，避免落入純求取式焦躁。",
      "供養與讚頌：以香燈水供等作供，令身口意進入恭敬與安住。",
      "誦持經典要義：依《金光明最勝王經》天女誓願（資具圓滿、離諸衰）作祈請與發願主軸。",
      "結行迴向：以『家運安穩、衰耗止息、資糧續航』為方向作迴向，令福德蓄水池長流不息。",
    ],
    used: [
      "供碗（含水供）與清淨水",
      "香、燈、花、食（表法供養）",
      "經本／經典段落（作為誦持與迴向依止）",
      "念珠（持咒/持誦計數）",
    ],
    sources: [
      { label: "本站經典引用｜《金光明最勝王經》大吉祥天女增長財物品（頁內引文）", url: "#/sutra" },
      { label: "Lama Yeshe Wisdom Archive｜Water Bowl Offerings（供養次第與不以空器上供）", url: "https://www.lamayeshe.com/article/chapter/13-water-bowl-offerings" },
    ],
  },
  ganapati: {
    title: "我們在儀軌中做了什麼（象神／精靈主·Ganapati）",
    note:
      "以《Ārya Mahā Gaṇapati Hṛdaya Dhāraṇī Sūtra》中『先禮敬佛、後持誦七遍，令所作皆成』的教示作骨架：先皈依、供養、再持誦心陀羅尼，以『除障』為先、清明自現。",
    steps: [
      "先皈依三寶、發菩提心：先把動機立正，讓『成辦』不離利他。",
      "供養與禮敬：先禮敬佛（亦可於壇前行簡要供養），令身口意入於恭敬與專注。",
      "持誦心陀羅尼：依經教示，持誦《聖大伽那鉢底心陀羅尼》七遍（或依儀軌/師承而增數）。",
      "觀想與攝心：以本尊作為智慧除障的所緣境，令散亂心收束，盲點自然顯露。",
      "結行迴向：將除障、清明與善巧方便之功德迴向現前抉擇與眾生所需。",
    ],
    used: [
      "香、燈、花、食等供品（隨分具足）",
      "念珠（持咒計數）",
      "本尊像／唐卡（作為所緣境）",
    ],
    sources: [
      { label: "Virtual Vinodh｜Ārya Mahā Gaṇapati Hṛdaya Dhāraṇī Sūtra（經文與『七遍成辦』段落）", url: "https://www.virtualvinodh.com/writings/mantras/arya-maha-ganapati" },
    ],
  },
  kurukulla: {
    title: "我們在儀軌中做了什麼（作明佛母·Kurukullā）",
    note:
      "以密續四事業之一『攝受』（magnetizing）為主題，但如法的第一步仍是攝受自心。依薩埵那所示：從空性中觀想本尊、持誦心咒，令『世出世一切殊勝』被攝入正道。",
    steps: [
      "發心與正見：先皈依、發菩提心，避免把修法誤用為世俗操控。",
      "由空性起觀：依薩埵那次第，觀想本尊由『Hrīḥ』等明點顯現，安住清明。",
      "持誦心咒：持誦 oṃ kurukulle hrīḥ svāhā（依師承而定遍數），以持誦攝心、收束散亂。",
      "供養與讚頌：以花、香、燈等作供，增長福德資糧，使善緣有處可依。",
      "結行迴向：迴向『調伏自心、增長慈悲與善緣』，令該靠近者自然靠近、該遠離者自然遠離。",
    ],
    used: [
      "花、香、燈、食等供品（特別以花供表法）",
      "念珠（持咒計數）",
      "本尊像／唐卡（作為所緣境）",
    ],
    sources: [
      { label: "Lotsawa House｜Kurukullā Sādhana by Mipham（薩埵那：觀想與持誦）", url: "https://www.lotsawahouse.org/tibetan-masters/mipham/kurukulla-sadhana" },
    ],
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
        <main className="mx-auto max-w-5xl px-4 pt-14 pb-24">
          <h1 className="font-display text-4xl">此本尊頁尚未上架</h1>
          <p className="mt-4 readable text-muted-foreground">你可以先回首頁用『困境對位』選一尊。</p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/" className="underline underline-offset-4 text-primary">
              回首頁
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link href="/pay" className="underline underline-offset-4 text-muted-foreground">
              去付款入口
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${d.name}｜${d.subtitle}`} path={d.route} />
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-10 pb-24">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[1.05fr_.95fr] items-start">
          <div>
            <div className="text-xs tracking-[0.26em] uppercase text-muted-foreground">四大神明 · 四條路徑</div>
            <h1 className="mt-2 font-display text-4xl md:text-6xl">{d.name}</h1>
            <div className="mt-3 text-sm tracking-[0.22em] uppercase text-primary">{d.subtitle}</div>

            <Card className="mt-7 p-7 gold-border bg-card paper-grain">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">你現在最貼近的卡點</div>
              <div className="mt-2 font-display text-2xl md:text-3xl">{d.oracle.question}</div>
              <div className="mt-3 readable text-muted-foreground">{d.promise}</div>
            </Card>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href="/pay">
                <Button className="h-12 px-6 font-black tracking-[0.24em] uppercase gold-border">
                  我想把這條路先安排好 <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="/puja"
                className="h-12 px-6 inline-flex items-center justify-center rounded-md border bg-card gold-border readable"
              >
                回法會總覽
              </Link>
            </div>

            <div className="mt-6 text-xs text-muted-foreground leading-relaxed">
              付款將跳轉第三方金流平台綠界完成；本站不在站內蒐集敏感個資。
            </div>
          </div>

          <div className="relative vignette">
            <div className="absolute -inset-5 -z-10 rounded-[32px] bg-accent/25 paper-grain" />
            <div className="rounded-[32px] overflow-hidden gold-border">
              <img src={d.heroImage} alt={d.name} className="w-full h-[360px] md:h-[520px] object-cover" loading="eager" />
            </div>
            <div className="mt-4 text-xs text-muted-foreground leading-relaxed">
              《金光明最勝王經》以護念、增益、除障的意象，讓你把路徑走穩。
            </div>
          </div>
        </section>

        {/* Gentle guide */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">經典對應功德與經文引用</h2>
          <Card className="mt-6 p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">{d.sutraMerit.quoteSource}</div>
            <div className="mt-2 font-display text-2xl md:text-3xl">{d.sutraMerit.title}</div>

            <blockquote className="mt-4 border-l-2 border-border pl-4 readable text-foreground">
              {d.sutraMerit.quote.split("\n").map((line) => (
                <div key={line}>{line}</div>
              ))}
            </blockquote>

            <div className="mt-5 grid gap-4">
              {d.sutraMerit.paragraphs.map((p) => (
                <p key={p} className="readable text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Card>
        </section>

        {/* Plans */}
        <section className="mt-12">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">方案與價位</h2>
              <p className="mt-2 readable text-muted-foreground">先從標示的首選方案開始，再依你的狀況往上加強護持。</p>
            </div>
            <Link href="/pay" className="text-sm tracking-[0.2em] uppercase underline underline-offset-4">
              想一次看完四尊方案，去總覽頁
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {d.plans.map((p) => (
              <Card key={p.id} className="p-7 gold-border bg-card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="font-semibold text-lg">{p.name}</div>
                      {p.hot ? (
                        <Badge className="gold-border bg-accent/35 text-accent-foreground">{p.badge || "優先"}</Badge>
                      ) : null}
                    </div>
                    <div className="mt-3 readable text-muted-foreground">{p.blurb}</div>
                    <div className="mt-3 text-sm text-primary/90">{p.feedback}</div>
                  </div>
                  <div className="text-sm font-semibold text-primary">{money(p.price)}</div>
                </div>

                <div className="mt-6">
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <Button className="h-12 px-6 font-black tracking-[0.22em] uppercase gold-border">
                      前往綠界填寫 <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>

                <div className="mt-4 text-[11px] text-muted-foreground leading-relaxed">
                  開啟綠界後，依頁面提示填寫祈願姓名與事項（可為本人或他人登記；把福德往外迴向，通常更增上），其餘依如法流程給您回應。
                  <span className="block mt-2">本期活動：完成登記法事者，免費加入「煙供聖典」一次（此法事之後才會正式開放）。</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Ritual: what we did & used */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">如法儀軌｜我們做了什麼、用了什麼</h2>
          <p className="mt-2 readable text-muted-foreground max-w-prose">
            你不需要背儀軌，但你有權知道：這場護持不是口號。
            我們會依傳承儀軌次第，將供養、持誦與迴向做完整，並以經典/傳承說明作依據。
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-[1.05fr_.95fr] items-start">
            <Card className="p-7 gold-border bg-card paper-grain">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">{RITUAL_BY_KEY[d.key].title}</div>
              <div className="mt-2 font-display text-2xl">把次第做完整，才叫如法</div>
              <p className="mt-3 readable text-muted-foreground">{RITUAL_BY_KEY[d.key].note}</p>

              <div className="mt-6">
                <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">主要次第</div>
                <ul className="mt-3 list-disc list-inside grid gap-2 readable text-muted-foreground">
                  {RITUAL_BY_KEY[d.key].steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">主要用到的供具／法器</div>
                <ul className="mt-3 list-disc list-inside grid gap-2 readable text-muted-foreground">
                  {RITUAL_BY_KEY[d.key].used.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 text-xs text-muted-foreground">
                參考資料：
                {RITUAL_BY_KEY[d.key].sources.map((x) => (
                  <div key={x.url} className="mt-2">
                    <a className="underline underline-offset-4" href={x.url} target="_blank" rel="noreferrer">
                      {x.label}
                    </a>
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-4">
              <Card className="overflow-hidden gold-border bg-card/80 backdrop-blur paper-grain">
                <img src={RITUAL_VISUAL_BY_KEY[d.key].photo} alt="供養與法器示意" className="h-[240px] w-full object-cover" loading="eager" />
              </Card>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 gold-border bg-card/70 paper-grain">
                  <img src={RITUAL_VISUAL_BY_KEY[d.key].iconA} alt="供養示意" className="aspect-square w-full rounded-xl object-cover gold-border" loading="lazy" />
                  <div className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">{RITUAL_VISUAL_BY_KEY[d.key].iconALabel}</div>
                  <div className="mt-1 font-semibold">{RITUAL_VISUAL_BY_KEY[d.key].iconATitle}</div>
                </Card>
                <Card className="p-4 gold-border bg-card/70 paper-grain">
                  <img src={RITUAL_VISUAL_BY_KEY[d.key].iconB} alt="供養示意" className="aspect-square w-full rounded-xl object-cover gold-border" loading="lazy" />
                  <div className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">{RITUAL_VISUAL_BY_KEY[d.key].iconBLabel}</div>
                  <div className="mt-1 font-semibold">{RITUAL_VISUAL_BY_KEY[d.key].iconBTitle}</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Sutra merit */}
        <section className="mt-12 grid gap-4 md:grid-cols-3">
          <Card className="p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">溫柔提醒</div>
            <div className="mt-2 font-display text-2xl">先把祈願寫成一句話</div>
            <p className="mt-3 readable text-muted-foreground">
              不用寫很玄。用一句你看得懂、也願意承擔的話就好：例如「願我把財務節奏穩住」或「願我做一次正確的選擇」。
            </p>
          </Card>
          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">完成法事後的你</div>
            <div className="mt-2 font-display text-2xl">把一件小事做完</div>
            <p className="mt-3 readable text-muted-foreground">
              護持不是把責任丟出去。你可以選一件最小、最可行的事情：打包垃圾、回一封訊息、把一個決策寫下來——讓福氣開始。
            </p>
          </Card>
          <Card className="p-7 gold-border bg-card">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">你可能感受到</div>
            <div className="mt-2 font-display text-2xl">心比較定、路比較清楚</div>
            <p className="mt-3 readable text-muted-foreground">
              我們不寫「保證」。比較常見的是：焦慮下降、猶豫變少、開啟機會,這種細微但會累積的改變。
            </p>
          </Card>
        </section>

        {/* Wealth story */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">經典裡，這尊如何給你『增益』</h2>
          <Card className="mt-6 p-7 gold-border bg-card paper-grain">
            <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">{d.wealthStory.source}</div>
            <div className="mt-2 font-display text-2xl md:text-3xl">{d.wealthStory.title}</div>
            <div className="mt-5 grid gap-4">
              {d.wealthStory.paragraphs.map((p) => (
                <p key={p} className="readable text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Card>
        </section>

        {/* Testimonials */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">見證回饋</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {d.testimonials.slice(0, 3).map((t) => (
              <Card key={t.title} className="p-7 gold-border bg-card">
                <div className="font-semibold">{t.title}</div>
                <div className="mt-3 readable text-muted-foreground">{t.body}</div>
                <div className="mt-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">{t.by}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">常見疑慮</h2>
          <div className="mt-6">
            <Accordion type="single" collapsible className="grid gap-3">
              {d.faq.map((x, i) => (
                <AccordionItem key={x.q} value={`${i}`} className="gold-border rounded-2xl bg-card px-2">
                  <AccordionTrigger className="px-3 text-left">{x.q}</AccordionTrigger>
                  <AccordionContent className="px-3 pb-4 readable text-muted-foreground">{x.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Cross links */}
        <section className="mt-12">
          <h2 className="font-display text-3xl md:text-4xl">你也可能更適合…</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {d.crossSell.map((x) => (
              <Link key={x.title} href={`/deities/${x.to}`}>
                <Card className="p-7 gold-border bg-card hover:bg-accent/25 transition-colors">
                  <div className="font-semibold">{x.title}</div>
                  <div className="mt-2 readable text-muted-foreground">{x.desc}</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
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
