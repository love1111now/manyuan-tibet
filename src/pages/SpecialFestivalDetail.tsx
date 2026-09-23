import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Flag, Gem, Flame, ShieldCheck, Users, Mountain, Wind, HeartHandshake, Sparkles, BookOpen, CircleCheck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";

const SPECIAL_FESTIVAL_CHECKOUT_URLS = {
  "wind-horse": "https://cart.cashier.ecpay.com.tw/qp/3gA9",
  "mani-stone": "https://cart.cashier.ecpay.com.tw/qp/3gBE",
  "butter-lamp-festival": "https://cart.cashier.ecpay.com.tw/qp/3gC5",
} as const;

const FESTIVALS = {
  "wind-horse": {
    title: "風馬旗", tibetan: "རླུང་རྟ་ · Lungta", kicker: "讓願心隨風而行",
    subtitle: "以風馬旗承載經咒與祈願，將一份發心延續為一季的護持",
    icon: Flag,
    heroImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ladakh_prayer_flag.jpg",
    secondaryImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Olympic_Lungtas.jpg",
    imageCredit: "圖片來源：Wikimedia Commons／Redtigerxyz、Renaud Detaille",
    intro: "風馬旗（Lungta）是藏傳佛教文化中極具代表性的祈願傳統。五色旗幟承載經咒、祈願與吉祥象徵，隨風飄揚，象徵善願向外傳遞。這不是一次性的祈福，而是把一份真正重要的願心交付於一段完整的護持週期。",
    powerTitle: "風起，願行；旗動，心續",
    powerText: "在藏傳佛教的脈絡裡，真正重要的從來不只是旗幟本身，而是經咒、發心、供養、修持與回向所共同形成的善業因緣。風馬旗讓願心有一個可被看見、可被憶念的依止，也讓祈願從個人的一念，延伸到更廣大的善願與回向。",
    highlights: ["NT$6,000／一季護持","一次登記最多 5 人，可由家人或親朋好友共同參與","以風馬旗、經咒、發願與回向為核心的長期護持安排","首發限定 18 席・圓滿即止"],
    sections: [
      ["風馬，不只是「祈福旗」","Lungta 直譯為「風馬」。傳統風馬旗上常見風馬、三寶、經咒與吉祥象徵；五種顏色也與藏傳佛教文化中的五方、五種智慧等象徵系統相連。旗幟隨風飄動時，所代表的是願心與善念的傳遞，而不是向某位神祇交換願望。"],
      ["為什麼要做「一季」護持？","真正有重量的發心，不需要在一天之內完成全部期待。一季，是讓願心有時間安住、讓供養與回向有時間延續，也讓參與者在日常生活中持續憶念自己所發的善願。特別祭典因此不是短暫活動，而是一段有起點、有週期、有回向的護持因緣。"],
      ["藏傳法門所重視的力量","藏傳佛教重視傳承、儀軌、咒語、供養、發心與回向彼此相應。所謂「力量」，不是世俗意義上的神奇保證，而是透過如法的修持，把心從散亂重新帶回願心、慈悲與善行。對信眾而言，這份護持最珍貴的地方，就是讓善願不只停留在想法，而有一段時間持續被憶念與回向。"],
    ],
    suitable: ["希望為自己或家人祈願平安、順遂與善緣的人","正在面對人生轉折，希望以佛法因緣安定身心的人","希望為父母、伴侶、子女或重要親友共同發心的人","重視長期護持，而不只想做一次性祈福的人"],
    feedback: [
      ["為家人一起發心","對很多家庭而言，最珍貴的不是替自己求什麼，而是能把父母、伴侶、孩子一起放進同一份善願裡。一次登記最多五人，讓一家人可以共同參與、共同憶念，也讓這份發心更完整。","共同發心的典型分享方向"],
      ["把願望安定下來","一季的時間，讓祈願不必急著在某一天看到結果，而是把注意力放回自己的發心、行善與日常。對重視藏傳佛教修持的人來說，這種「持續」本身就是一份重要的提醒。","參與者常見感受整理"],
      ["不是一個人，而是一群人","邀請親近的人一起參與，讓一份法事從個人祈願變成共同發心。有人為父母，有人為夫妻，也有人和多年好友一起登記；重要的是彼此願意為對方留下這份善念。","共同參與情境整理"],
    ],
  },
  "mani-stone": {
    title: "瑪尼石", tibetan: "མ་ཎི་རྡོ་ · Maṇi Stone", kicker: "一石承咒，一願長存",
    subtitle: "以經咒入石，以供養與回向承接一季的深度護持",
    icon: Gem,
    heroImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mantra_rocks_along_the_Manasarovar_pilgrimage_trail.jpg",
    secondaryImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/British_Museum_Tibetan_Mani_Stone.jpg",
    imageCredit: "圖片來源：Wikimedia Commons／Manasarovar trail、BabelStone",
    intro: "瑪尼石，是藏地與喜馬拉雅佛教文化中極具力量感的宗教藝術與供養傳統。石上可見六字大明咒、其他經咒、偈頌、佛像或供養文字；一塊塊石頭被排列成瑪尼牆、石堆或置於道路與聖地之中。這份特別祭典，是把自己的願心交付於「經咒、供養、時間與回向」共同形成的一段護持。",
    powerTitle: "石承經咒，願有依止",
    powerText: "瑪尼石最動人的地方，是把原本看不見的願心，留在一個可以長久存在的載體之中。對藏傳佛教信眾而言，經咒不是裝飾文字；供養也不只是形式。當發心、供養、經咒與回向彼此相應，便形成一種提醒自己持續向善、培養慈悲與智慧的修持力量。",
    highlights: ["NT$6,000／一季護持","一次登記最多 5 人，可為一家人或親朋好友共同發心","以瑪尼石、經咒、供養與回向傳統承接願心","首發限定 18 席・圓滿即止"],
    sections: [
      ["什麼是瑪尼石？","瑪尼石並不只指刻有六字大明咒的石頭，也可以泛指帶有佛教經咒、偈頌、佛像或宗教文字的石刻。它們常見於村落、道路、寺院、山口與朝聖路線，並以瑪尼牆、石堆等形式存在。它同時具有宗教、藝術、文化與供養的意義。"],
      ["六字大明咒與觀世音菩薩","藏傳佛教文化中，瑪尼石經常刻有「唵嘛呢叭咪吽」（Oṃ Maṇi Padme Hūṃ），與觀世音菩薩的修持密切相關。這並不意味著只要刻一塊石頭就能自動產生世俗願望的結果；真正值得珍惜的是藉由經咒與供養，讓心回到慈悲、智慧與利益眾生的方向。"],
      ["把一份願心，留得更久","石頭象徵穩定與長久。當經咒被刻於石上，願心也有了一個可以被憶念的依止。以一季為護持週期，是讓參與者有足夠時間安住於發心與回向，而不是把佛法縮減成一次付款、一次祈求。"],
    ],
    suitable: ["希望為自己與家人累積善緣、培養慈悲與智慧的人","對六字大明咒、觀世音菩薩法門有信心的人","希望為重要人生階段留下長期善願的人","想邀請家人或親友一起共同供養、共同回向的人"],
    feedback: [
      ["為父母留下善願","瑪尼石很適合用來承接對長輩的祝福與感恩。一次登記最多五人，也能讓兄弟姊妹一起參與，把對父母的心意放進同一份護持。","家庭共同發心的典型分享方向"],
      ["從祈求走向發心","有些人參與法事後，最大的感受並不是「得到了什麼」，而是開始更常提醒自己行善、持咒、回向。這正是藏傳佛教修持中很重要的一層：把外在儀軌慢慢帶回自己的內心。","參與者常見感受整理"],
      ["朋友也可以一起","法事不一定只能一個人參與。幾位多年好友一起發心，各自有自己的願望，卻共同參與同一期護持，是很適合這項特別祭典的方式。","親友共同參與情境整理"],
    ],
  },
  "butter-lamp-festival": {
    title: "燃燈節", tibetan: "ཆོ་འཕྲུལ་དུས་ཆེན་ · Chötrul Düchen", kicker: "以一盞燈，供養智慧與光明",
    subtitle: "承接神變節供燈傳統，將光明願心延續為一季護持",
    icon: Flame,
    heroImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/A_Tibetan_Pilgrim_Lighting_Ghee_Lamps.jpg",
    secondaryImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Light_butter_lamps.jpg",
    imageCredit: "圖片來源：Wikimedia Commons／Orly Liu、Tarabagani",
    intro: "燃燈節在藏傳佛教語境中常指 Chötrul Düchen（神變節），是藏曆正月十五的重要佛教節日。此期間廣行供燈、供養與善行，燈火象徵智慧，驅散黑暗象徵破除無明。此次特別祭典不是單純點一盞燈，而是把節日的殊勝因緣延續成一季的供燈、發願與回向。",
    powerTitle: "一燈破暗，一念向明",
    powerText: "藏傳佛教的供燈，真正供養的不是「佛需要光」，而是我們以光明提醒自己向智慧靠近。當供燈與發心、布施、持誦、善行與回向相應，便成為一種強而有力的修持象徵：願破除無明，願智慧增長，願自己與有緣眾生都能離苦得樂。",
    highlights: ["NT$6,000／一季護持","一次登記最多 5 人，可由家人或親朋好友共同參與","承接 Chötrul Düchen／神變節供燈與回向的佛教傳統","首發限定 18 席・圓滿即止"],
    sections: [
      ["為什麼叫「燃燈節」？","Chötrul Düchen 通常譯作「神變節」，紀念佛陀在舍衛城示現神變的傳統。藏地在此期間廣泛供燈、製作燈飾，因此華人語境常稱為「燃燈節」。正式理解時，應把它放回神變節的佛教背景，而不是當成一般民俗燈會。"],
      ["供燈真正供養的是什麼？","在藏傳佛教中，燈光常象徵智慧，黑暗則譬喻無明。供燈不是因為佛需要光，而是讓行者以布施與供養培養恭敬心、善心與智慧願。當一盞燈被供上，真正值得延續的是那份願意離開黑暗、走向覺知的心。"],
      ["把節日的殊勝，延續到一季","神變節是一個重要的佛教節日，但善願不應只停留在節日當天。以一季為護持週期，是讓供燈所代表的光明願心延續到日常，在生活、家庭與工作之中持續提醒自己向善、回向與培養智慧。"],
    ],
    suitable: ["希望為自己與家人祈願光明、智慧與平安的人","正處於人生轉折，希望以供燈與善願安定自己的心的人","希望為父母、伴侶、孩子或重要親友共同發心的人","重視供燈、布施、回向與藏傳佛教節日因緣的人"],
    feedback: [
      ["一家人一起點亮願心","一次登記最多五人，很適合一家人共同參與。父母、夫妻與孩子可以一起發心，各自有自己的願望，也共同把一份光明與祝福回向給彼此。","家庭共同發心的典型分享方向"],
      ["在忙亂裡留一盞燈","很多人真正需要的不是再多一個複雜的儀式，而是一個提醒自己「不要忘記願心」的依止。一季護持，讓供燈的象徵從節日延續到日常。","參與者常見感受整理"],
      ["替重要的人發一份心","供燈很適合成為送給父母、伴侶或親友的一份善意。不是替對方保證什麼結果，而是替彼此留下一份真誠的善願與回向。","親友共同參與情境整理"],
    ],
  },
} as const;

type FestivalSlug = keyof typeof FESTIVALS;

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return <div className="rounded-2xl border border-primary/15 bg-card/50 p-5 md:p-6">
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
      <div><h3 className="font-bold">{title}</h3><div className="mt-2 text-sm leading-7 text-muted-foreground">{children}</div></div>
    </div>
  </div>;
}

export default function SpecialFestivalDetail({ slug }: { slug: string }) {
  const data = FESTIVALS[slug as FestivalSlug];
  if (!data) return <div className="min-h-screen bg-background text-foreground"><SiteHeader /><main className="mx-auto max-w-3xl px-5 py-24 text-center"><h1 className="font-display text-4xl">找不到這個祭典</h1><Link href="/special-festivals" className="mt-8 inline-flex items-center gap-2 text-primary"><ArrowLeft className="h-4 w-4" /> 返回特別祭典</Link></main><SiteFooter /></div>;

  const checkoutUrl = SPECIAL_FESTIVAL_CHECKOUT_URLS[slug as FestivalSlug];

  return <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>{data.title}｜最高規格特別祭典・一季護持｜滿願藏庫</title>
      <meta name="description" content={data.intro} />
      <meta property="og:title" content={data.title + "｜最高規格特別祭典・一季護持｜滿願藏庫"} />
      <meta property="og:description" content={data.subtitle} />
      <meta property="og:image" content={data.heroImage} />
    </Helmet>
    <SiteHeader />
    <main className="pb-28">
      <section className="relative overflow-hidden border-b border-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,hsl(var(--primary)/0.12),transparent_40%),linear-gradient(to_bottom,hsl(var(--primary)/0.07),transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl px-4 pt-5 md:px-8 md:pt-10">
          <Link href="/special-festivals" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> 特別祭典</Link>
          <div className="mt-5 grid gap-6 md:grid-cols-[1.05fr_.95fr] md:items-center md:gap-10">
            <div className="order-2 md:order-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-bold tracking-[0.22em] text-primary">最高規格特別祭典</span>
                <span className="rounded-full border border-primary/15 px-3 py-1 text-[10px] font-bold tracking-[0.22em] text-muted-foreground">首發 18 席</span>
              </div>
              <p className="mt-6 text-xs font-bold tracking-[0.28em] text-primary">{data.tibetan}</p>
              <h1 className="mt-2 font-display text-5xl leading-none md:text-7xl">{data.title}</h1>
              <p className="mt-5 text-xl font-semibold leading-relaxed text-primary md:text-2xl">{data.kicker}</p>
              <p className="mt-3 text-base leading-8 text-muted-foreground md:text-lg">{data.subtitle}</p>
              <p className="mt-5 text-sm leading-8 text-foreground/75 md:text-base">{data.intro}</p>
              <div className="mt-7 grid gap-2 sm:grid-cols-2">{data.highlights.map(item => <div key={item} className="flex items-start gap-2 rounded-xl border border-border/60 bg-card/40 px-3 py-3 text-sm"><CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>)}</div>
            </div>
            <div className="order-1 md:order-2">
              <div className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-black/20 shadow-2xl">
                <img src={data.heroImage} alt={data.title + "｜藏傳佛教特別祭典"} className="block aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5"><p className="text-xs font-semibold tracking-[0.18em] text-white/80">SPECIAL FESTIVAL</p><p className="mt-1 text-lg font-bold text-white">{data.title} · 一季護持</p></div>
              </div>
              <p className="mt-2 text-right text-[10px] text-muted-foreground/60">{data.imageCredit}</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 pb-8 pt-10 md:px-8 md:pb-14 md:pt-14">
          <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card/80 shadow-2xl">
            <div className="grid md:grid-cols-[230px_1fr]">
              <div className="relative flex min-h-48 items-center justify-center overflow-hidden border-b border-primary/20 bg-primary/5 md:border-b-0 md:border-r">
                <div className="absolute h-36 w-36 rounded-full border border-primary/10" /><div className="absolute h-28 w-28 rounded-full border border-primary/15" />
                <div className="relative text-center"><p className="text-[10px] font-bold tracking-[0.35em] text-primary">首發席次</p><p className="mt-1 font-display text-7xl leading-none text-primary">18</p><p className="mt-2 text-xs font-bold tracking-[0.28em]">席・圓滿即止</p></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                  <div><p className="text-xs font-bold tracking-[0.25em] text-primary">目前最高規格・一季護持</p><p className="mt-2 font-display text-4xl md:text-5xl">NT$6,000</p><p className="mt-2 text-sm text-muted-foreground">一次登記｜一季護持｜一席最多五人</p></div>
                  <a href={checkoutUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-xl transition hover:opacity-90">NT$6,000｜前往綠界登記<ArrowRight className="ml-2 h-4 w-4" /></a>
                </div>
                <div className="mt-7 grid gap-3 border-t border-border/50 pt-6 sm:grid-cols-3">
                  <InfoCard icon={Sparkles} title="一季護持">不是一次性祈願，而是讓發心、供養與回向延續一段完整週期。</InfoCard>
                  <InfoCard icon={Users} title="最多五人">一筆登記最多五人，適合家人、夫妻、手足與親朋好友共同參與。</InfoCard>
                  <InfoCard icon={ShieldCheck} title="綠界完成">付款與登記資料皆在綠界完成，本站不另行收集登記資料。</InfoCard>
                </div>
                <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5"><p className="text-sm font-bold text-primary">一席之願・五人同行</p><p className="mt-2 text-sm leading-7 text-muted-foreground">一次登記最多可由 5 位共同參與。可以是父母、夫妻、子女、兄弟姊妹，也可以是珍惜彼此的親朋好友；各自可以有不同的願心，卻共同參與同一期特別祭典，讓一份發心成為一群人的善緣。</p></div>
                <p className="mt-5 text-xs leading-6 text-muted-foreground/70">本站提供法事文化、佛法背景與參與說明；實際付款與五人登記資料填寫皆於綠界安全通道完成。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[.82fr_1.18fr] md:items-center"><div><p className="text-xs font-bold tracking-[0.28em] text-primary">WHY THIS IS DIFFERENT</p><h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">{data.powerTitle}</h2></div><div className="rounded-3xl border border-primary/15 bg-card/40 p-6 md:p-8"><p className="text-base leading-8 text-muted-foreground md:text-lg">{data.powerText}</p></div></div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8 md:pt-24">
        <div className="mb-8"><p className="text-xs font-bold tracking-[0.28em] text-primary">法門背景</p><h2 className="mt-2 font-display text-3xl md:text-4xl">為什麼這項法事值得被慎重對待？</h2></div>
        <div className="grid gap-5 md:grid-cols-3">{data.sections.map(([title, body], index) => <article key={title} className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/35 p-6 md:p-7"><span className="font-display text-5xl text-primary/20">0{index + 1}</span><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-8 text-muted-foreground">{body}</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8 md:pt-24">
        <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr] md:items-center"><div className="overflow-hidden rounded-3xl border border-primary/15"><img src={data.secondaryImage} alt={data.title + "｜法事文化圖像"} className="block h-full min-h-72 w-full object-cover" /></div><div><p className="text-xs font-bold tracking-[0.28em] text-primary">藏傳佛教的「力量」</p><h2 className="mt-3 font-display text-3xl md:text-4xl">強大，不等於承諾神蹟</h2><p className="mt-5 text-base leading-8 text-muted-foreground">藏傳佛教的儀軌之所以重視，是因為它把傳承、經咒、供養、發心、修持與回向組合成一個完整的修行脈絡。對信眾而言，真正值得珍惜的「力量」，是讓一份善願有方法、有時間、有依止地持續下去。</p><div className="mt-6 space-y-3">{["以信心與發心作為起點","以供養、經咒與儀軌承接願心","以回向將善願擴大，而不只停留在自己","以一季時間，讓願心從節日走進日常"].map(item => <div key={item} className="flex items-start gap-3 text-sm"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>)}</div></div></div>
        <p className="mt-2 text-[10px] text-muted-foreground/60">{data.imageCredit}</p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8 md:pt-24">
        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 md:p-10"><div className="flex items-start gap-4"><HeartHandshake className="mt-1 h-7 w-7 shrink-0 text-primary" /><div><p className="text-xs font-bold tracking-[0.28em] text-primary">最適合的參與方式</p><h2 className="mt-2 font-display text-3xl md:text-4xl">一個人發心，也可以五個人同行</h2><p className="mt-4 max-w-3xl text-sm leading-8 text-muted-foreground md:text-base">這項特別祭典目前是網站最高規格的法事方案，因此更適合把它當成「共同發心」來參與，而不是單純個人消費。一次登記最多五人，可以為自己、父母、伴侶、孩子或重要親友共同參與。</p></div></div><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["一家人","父母、夫妻、孩子共同參與"],["夫妻","為彼此共同發願與回向"],["兄弟姊妹","一起為父母或家庭發心"],["親朋好友","多年好友共同結下善緣"]].map(([title,text]) => <div key={title} className="rounded-2xl border border-primary/10 bg-background/30 p-4"><p className="font-bold">{title}</p><p className="mt-1 text-xs leading-6 text-muted-foreground">{text}</p></div>)}</div></div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8 md:pt-24">
        <div className="mb-8 text-center"><p className="text-xs font-bold tracking-[0.28em] text-primary">適合誰</p><h2 className="mt-2 font-display text-3xl md:text-4xl">如果你正在為這些事發心</h2></div>
        <div className="grid gap-3 md:grid-cols-2">{data.suitable.map(item => <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card/35 p-5"><CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p className="text-sm leading-7">{item}</p></div>)}</div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8 md:pt-24">
        <div className="mb-8 text-center"><p className="text-xs font-bold tracking-[0.28em] text-primary">參與者回饋</p><h2 className="mt-2 font-display text-3xl md:text-4xl">一份法事，真正留下的是什麼？</h2><p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">以下先以「共同發心」與「參與感受」呈現回饋區塊；正式上線後可直接替換成你們實際收到的信眾原話。</p></div>
        <div className="grid gap-5 md:grid-cols-3">{data.feedback.map(([title,body,by]) => <article key={title} className="rounded-3xl border border-border/60 bg-card/40 p-6"><Sparkles className="h-5 w-5 text-primary/70" /><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-8 text-muted-foreground">{body}</p><p className="mt-5 border-t border-border/50 pt-4 text-[11px] tracking-wide text-primary/70">— {by}</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8 md:pt-24"><div className="grid gap-4 md:grid-cols-3"><InfoCard icon={Mountain} title="法門與傳統">以藏傳佛教的經咒、供養、發心與回向脈絡理解，而不是把法事包裝成世俗保證。</InfoCard><InfoCard icon={BookOpen} title="一季為一期">讓願心有足夠時間被憶念與回向，把節日或儀軌的因緣延伸到日常生活。</InfoCard><InfoCard icon={Users} title="最多五人">一筆登記可由最多五人共同參與，尤其適合家庭與親朋好友共同發心。</InfoCard></div></section>

      <section id="plans" className="mx-auto max-w-5xl scroll-mt-28 px-4 pt-16 md:px-8 md:pt-24">
        <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card/80 shadow-2xl">
          <div className="border-b border-primary/15 bg-primary/5 px-6 py-7 text-center md:px-10"><p className="text-xs font-bold tracking-[0.3em] text-primary">首發限定 · 目前最高規格</p><h2 className="mt-2 font-display text-3xl md:text-5xl">{data.title}｜一季護持</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">NT$6,000 · 一次登記最多五人 · 圓滿即止</p></div>
          <div className="p-6 md:p-10"><div className="grid gap-6 md:grid-cols-[1fr_250px] md:items-center"><div><div className="flex items-center gap-3"><span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary-foreground">18 席</span><span className="text-xs font-semibold tracking-wide text-primary">首發席次・圓滿即止</span></div><p className="mt-5 font-display text-5xl">NT$6,000</p><p className="mt-2 text-sm font-semibold">一季護持｜一席最多五人</p><p className="mt-4 text-sm leading-8 text-muted-foreground">這不是網站上的一般常態方案。特別祭典以較少的席次、較完整的內容與較長的護持週期，留給真正願意慎重發心的人。</p></div><div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-center"><p className="text-[10px] font-bold tracking-[0.25em] text-primary">一席一願・五人同行</p><p className="mt-2 font-display text-5xl text-primary">5</p><p className="text-xs font-semibold">最多共同參與人數</p></div></div>
            <div className="mt-7 grid gap-3 border-t border-border/50 pt-7 md:grid-cols-2">{["一季為一期的專屬護持安排","一次登記最多 5 人","適合家人、夫妻、手足、親朋好友共同參與","首發每項僅 18 席","付款與登記資料皆於綠界完成","本站不另行收集登記資料"].map(item => <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></div>)}</div>
            <a href={checkoutUrl} target="_blank" rel="noreferrer" className="mt-8 flex h-14 w-full items-center justify-center rounded-2xl bg-primary px-7 text-base font-bold text-primary-foreground shadow-xl transition hover:opacity-90">NT$6,000｜前往綠界完成付款與登記<ArrowRight className="ml-2 h-5 w-5" /></a><p className="mt-3 text-center text-[11px] leading-6 text-muted-foreground/70">點擊後將前往綠界；付款、五人登記資料填寫皆於綠界完成。</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-12 md:px-8 md:pt-16"><div className="rounded-3xl border border-primary/15 bg-card/30 p-6 md:p-8"><p className="text-xs font-bold tracking-[0.28em] text-primary">參與前請先知道</p><div className="mt-5 grid gap-5 md:grid-cols-2"><div><h3 className="font-bold">我們如何理解「效果」？</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">藏傳佛教的法事重視的是傳承、發心、儀軌、供養、持誦與回向的完整因緣。頁面不以「保證財富、感情、健康或特定事件結果」作為承諾；我們更重視善願、修持與回向本身。</p></div><div><h3 className="font-bold">五人怎麼登記？</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">每一筆 NT$6,000 登記最多可填寫五位參與者。實際姓名及登記資料會在綠界付款頁面完成，請依綠界頁面欄位填寫。</p></div></div></div></section>

      <section className="mx-auto max-w-5xl px-4 pt-14 md:px-8 md:pt-20"><div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/5 p-7 text-center md:p-12"><Wind className="mx-auto h-7 w-7 text-primary" /><p className="mt-4 text-xs font-bold tracking-[0.3em] text-primary">首發 18 席・一季護持・最多五人同行</p><h2 className="mt-3 font-display text-3xl md:text-5xl">一份慎重的發心，值得被好好承接</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">如果你希望的不只是一次性的祈福，而是一段能與家人、親友共同參與、共同回向的藏傳佛教護持因緣，這項特別祭典就是為這樣的發心而設。</p><a href={checkoutUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-xl transition hover:opacity-90">NT$6,000｜前往綠界登記<ArrowRight className="ml-2 h-4 w-4" /></a><p className="mt-4 text-xs text-muted-foreground">付款與登記皆於綠界完成</p></div></section>

      <div className="mx-auto mt-10 max-w-5xl px-4 md:px-8"><Link href="/special-festivals" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> 返回特別祭典</Link></div>
    </main>
    <SiteFooter /><StickyCta /><FloatingFb />
  </div>;
}