import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Flag, Gem, Flame, ShieldCheck } from "lucide-react";
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
    title: "風馬旗",
    tibetan: "རླུང་རྟ་ · Lungta",
    kicker: "讓願心隨風而行",
    heroImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ladakh_prayer_flag.jpg",
    secondaryImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Olympic_Lungtas.jpg",
    powerText: "在藏傳佛教的脈絡裡，真正重要的從來不只是旗幟本身，而是經咒、發心、供養、修持與回向所共同形成的善業因緣。風馬旗讓願心有一個可被憶念的依止，也讓個人的一念延伸到更廣大的善願與回向。",
    suitable: ["為自己與家人祈願平安、順遂與善緣","正在面對人生轉折，希望以佛法因緣安定身心","希望為父母、伴侶、子女或重要親友共同發心","重視長期護持，而不只想做一次性祈福"],
    feedback: [["為家人一起發心","一次登記最多五人，讓父母、夫妻、孩子可以共同參與；各自有願，卻共同回向。","共同發心的典型分享方向"],["把願心安定下來","一季時間讓祈願不必急著在某一天看到結果，而是回到發心、行善與日常。","參與者常見感受整理"],["親友一起同行","多人共同參與，讓一份法事從個人祈願成為共同發心。","親友共同參與情境整理"]],
    subtitle: "讓祈願隨風而行，將善願延續為一季護持",
    icon: Flag,
    intro:
      "風馬旗是藏地極具代表性的祈願傳統。透過經咒、祈願與回向，將對自己、家人與眾生的善願寄託於風馬旗之中。這次特別祭典採一季護持的方式，讓祈願不只停留在一日，而是在一段較完整的時間裡持續累積善緣、發願與回向。",
    benefits: [
      "NT$6,000／一季護持",
      "以風馬旗祈願傳統為核心，持續發願與回向",
      "適合為自己、家人、事業與生活祈求平安順遂、善緣增長",
      "首發限定 18 席，讓每一份發心都被珍惜地承接與回向",
    ],
    sections: [
      ["什麼是「風馬」？", "Lungta 直譯為「風馬」。風馬通常位於旗幟中央，周圍可見三寶與其他吉祥象徵。這裡的「馬」不是世俗交通工具的單純意象，而是與活力、力量及善願傳遞相關的宗教象徵。"],
      ["一季護持的意義", "特別祭典不以一次性的祈願作為終點，而重視發心、持續與回向。以一季為一段護持週期，是希望讓信眾把一份願心安定下來，在較長的時間裡持續憶念善願、培植善緣。"],
      ["真正重要的是發心", "風馬旗不是用來向某位神明交換願望的物品。藏傳佛教的祈願傳統重視發心、善行、持誦、回向與利益眾生；旗幟隨風飄動所承載的，是這份修持與祈願的象徵。"],
    ],
  },
  "mani-stone": {
    title: "瑪尼石",
    tibetan: "མ་ཎི་རྡོ་ · Maṇi Stone",
    kicker: "一石承咒，一願長存",
    heroImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mantra_rocks_along_the_Manasarovar_pilgrimage_trail.jpg",
    secondaryImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/British_Museum_Tibetan_Mani_Stone.jpg",
    powerText: "瑪尼石把原本看不見的願心，留在一個可以長久存在的載體之中。經咒不是裝飾文字，供養也不只是形式；當發心、供養、經咒與回向彼此相應，便形成提醒自己持續向善、培養慈悲與智慧的修持力量。",
    suitable: ["希望為自己與家人累積善緣、培養慈悲與智慧","對六字大明咒、觀世音菩薩法門有信心","希望為重要人生階段留下長期善願","想邀請家人或親友一起共同供養、共同回向"],
    feedback: [["為父母留下善願","一次登記最多五人，也能讓兄弟姊妹一起參與，把對父母的心意放進同一份護持。","家庭共同發心的典型分享方向"],["從祈求走向發心","有些參與者最深的感受，是更常提醒自己行善、持咒、回向，把外在儀軌慢慢帶回內心。","參與者常見感受整理"],["朋友也可以一起","幾位多年好友共同發心，各自有願望，卻共同參與同一期護持。","親友共同參與情境整理"]],
    subtitle: "以經咒入石，以願心延續一季的深度護持",
    icon: Gem,
    intro:
      "瑪尼石是藏地及喜馬拉雅佛教文化中常見的石刻。石上經常刻有觀世音菩薩六字大明咒「唵嘛呢叭咪吽」，也可能刻有其他佛教經咒、偈頌、佛像或供養文字。這次特別祭典以一季護持為期，讓信眾以供養、發願與回向，將一份心願安住於持續的善緣之中。",
    benefits: [
      "NT$6,000／一季護持",
      "以瑪尼石、經咒與供養傳統承接祈願",
      "適合為自己與家人累積善緣、祈願平安與順遂",
      "首發限定 18 席，讓每一份願心都有一季時間持續回向",
    ],
    sections: [
      ["瑪尼石是什麼？", "瑪尼石並不只指刻有六字大明咒的石頭，也可泛指帶有經咒、佛教圖像或其他宗教文字的石刻。它們常被排列成瑪尼牆、石堆，或設置於村落、道路、寺院、山口等處。"],
      ["以石承咒，以願承心", "經咒刻於石上，是把佛法文字融入日常環境的一種宗教與文化表現。對參與者而言，更重要的是藉由供養與發願，提醒自己持續行善、培養慈悲，並將善願回向自己與有緣眾生。"],
      ["一季護持", "一份祈願若能持續，心也更容易安定。一季護持的安排，是讓信眾有一段完整的時間安住於自己的願心，不必只在特定一天匆匆祈求，而能把供養、發願與回向延續下去。"],
    ],
  },
  "butter-lamp-festival": {
    title: "燃燈節",
    tibetan: "ཆོ་འཕྲུལ་དུས་ཆེན་ · Chötrul Düchen",
    kicker: "以一盞燈，供養智慧與光明",
    heroImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/A_Tibetan_Pilgrim_Lighting_Ghee_Lamps.jpg",
    secondaryImage: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Light_butter_lamps.jpg",
    powerText: "供燈真正供養的不是佛需要光，而是我們以光明提醒自己向智慧靠近。當供燈與發心、布施、持誦、善行與回向相應，便成為一種強而有力的修持象徵：願破除無明，願智慧增長。",
    suitable: ["希望為自己與家人祈願光明、智慧與平安","正處於人生轉折，希望以供燈與善願安定自己的心","希望為父母、伴侶、孩子或重要親友共同發心","重視供燈、布施、回向與藏傳佛教節日因緣"],
    feedback: [["一家人一起點亮願心","一次登記最多五人，很適合一家人共同參與，各自有願，也共同把一份光明回向給彼此。","家庭共同發心的典型分享方向"],["在忙亂裡留一盞燈","一季護持讓供燈的象徵從節日延續到日常，成為提醒自己不要忘記願心的依止。","參與者常見感受整理"],["替重要的人發一份心","供燈適合成為送給父母、伴侶或親友的一份善意，是一份真誠的善願與回向。","親友共同參與情境整理"]],
    subtitle: "一盞燈明一份願心，延續一季光明護持",
    icon: Flame,
    intro:
      "燃燈節常用來指藏傳佛教的 Chötrul Düchen（神變節），是藏曆正月十五的重要佛教節日。供燈以光明象徵智慧、以驅散黑暗譬喻去除無明。此次特別祭典以一季護持為期，讓一盞燈所代表的願心，不只停留在節日當下，而能延續為一段持續的祈願與回向。",
    benefits: [
      "NT$6,000／一季護持",
      "以燃燈供養象徵智慧、光明與善願",
      "適合為自己、家人與重要心願作長期祈願回向",
      "首發限定 18 席，讓一份光明願心持續陪伴一季日常",
    ],
    sections: [
      ["為什麼叫「燃燈節」？", "Chötrul Düchen 的核心是「神變節」本身，而「燃燈節」是因藏地在此期間盛行供燈與燈飾而形成的通俗稱呼。因此正式介紹同時保留「燃燈節」與「Chötrul Düchen／神變節」，避免把它誤解成單純的民俗燈會。"],
      ["供燈代表什麼？", "在藏傳佛教中，燈供常以光明象徵智慧，並以驅散黑暗來譬喻去除無明。供燈不是因為佛需要光，而是以供養培養恭敬、布施、發願與智慧的心。"],
      ["一季護持", "燃燈所象徵的不只是眼前的一盞燈，更是提醒自己守住願心、培養智慧與善念。以一季為一期的護持安排，讓這份願心有時間沉澱、持續與回向，將節日的殊勝因緣延續到日常生活之中。"],
    ],
  },
} as const;

type FestivalSlug = keyof typeof FESTIVALS;

export default function SpecialFestivalDetail({ slug }: { slug: string }) {
  const data = FESTIVALS[slug as FestivalSlug];

  if (!data) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h1 className="font-display text-4xl">找不到這個祭典</h1>
          <Link href="/special-festivals" className="mt-8 inline-flex items-center gap-2 text-primary">
            <ArrowLeft className="h-4 w-4" /> 返回特別祭典
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const checkoutUrl = SPECIAL_FESTIVAL_CHECKOUT_URLS[slug as FestivalSlug];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{data.title}｜一季護持・特別祭典｜滿願藏庫</title>
        <meta name="description" content={data.intro} />
      </Helmet>

      <SiteHeader />

      <main className="pb-24">
        <section className="border-b bg-gradient-to-b from-primary/10 to-background">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <Link href="/special-festivals" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> 特別祭典
            </Link>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Special Festival · 首發限定 18 席 · 一季護持</p>
                <h1 className="mt-1 font-display text-4xl md:text-6xl">{data.title}</h1>
              </div>
            </div>

            <p className="mt-4 text-sm tracking-wide text-primary">{data.tibetan}</p>
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm leading-7 text-foreground/80"><strong className="text-primary">一筆登記，最多五人共同參與。</strong> 最適合家人、夫妻、父母子女、兄弟姊妹與親朋好友一起發心；每位可各自有願，共同參與同一期護持。</div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-primary"><span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">首發限定 18 席</span><span className="rounded-full border border-primary/20 px-4 py-1.5">NT$6,000／一季護持</span></div>
            <p className="mt-4 text-lg font-semibold text-primary">{data.kicker}</p>
            <p className="mt-2 text-lg text-foreground/80">{data.subtitle}</p>
            <p className="mt-6 max-w-3xl text-base md:text-lg leading-loose text-muted-foreground">{data.intro}</p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-primary/15 bg-black/20"><img src={data.heroImage} alt={data.title} className="block aspect-[16/7] w-full object-cover" /><p className="px-4 py-2 text-[10px] text-muted-foreground">法門文化圖像｜Wikimedia Commons</p></div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-primary/30 bg-card/70 shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="relative flex min-h-40 items-center justify-center border-b border-primary/20 bg-primary/5 px-8 py-7 md:w-56 md:border-b-0 md:border-r">
                  <div className="absolute inset-5 rounded-full border border-primary/15" />
                  <div className="absolute inset-8 rounded-full border border-primary/10" />
                  <div className="relative text-center">
                    <p className="text-[10px] font-bold tracking-[0.35em] text-primary">首發席次</p>
                    <p className="mt-1 font-display text-6xl leading-none text-primary">18</p>
                    <p className="mt-2 text-xs font-semibold tracking-[0.3em] text-foreground/70">席・圓滿即止</p>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-xs font-bold tracking-[0.25em] text-primary">首發限定・一季護持</p>
                      <p className="mt-2 font-display text-3xl md:text-4xl">NT$6,000</p>
                      <p className="mt-2 text-sm text-muted-foreground">一席一願｜一季為一期的專屬護持安排</p>
                    </div>
                    <div className="md:w-64">
                      <a href={checkoutUrl} target="_blank" rel="noreferrer" className="block">
                        <button className="w-full rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:opacity-90">
                          NT$6,000｜立即登記
                          <ArrowRight className="ml-2 inline-block h-4 w-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 border-t border-border/50 pt-5 sm:grid-cols-2">
                    {data.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm leading-relaxed text-foreground/80">
                    <span className="font-semibold text-primary">為何首發僅 18 席？</span> 首發特別祭典希望保留一份難得與莊重，因此本期每一項僅開放 18 席；「圓滿即止」，不以大量登記為目的，而是珍惜每一位真正願意把願心交付於此的人。
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">
                    付款與登記資料填寫皆於綠界安全通道完成；本站不另行收集登記資料。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 pt-14 md:pt-20">
          <div className="mb-12 grid gap-8 rounded-3xl border border-primary/15 bg-primary/5 p-6 md:grid-cols-[.9fr_1.1fr] md:p-8 md:items-center"><div className="overflow-hidden rounded-2xl"><img src={data.secondaryImage} alt={data.title + "法門文化"} className="block aspect-[4/3] w-full object-cover" /></div><div><p className="text-xs font-bold tracking-[0.25em] text-primary">藏傳法門的力量</p><h2 className="mt-2 font-display text-3xl md:text-4xl">{data.kicker}</h2><p className="mt-4 text-sm leading-8 text-muted-foreground">{data.powerText}</p><div className="mt-5 rounded-xl border border-primary/15 bg-background/30 p-4 text-sm leading-7 text-foreground/80">力量不等於世俗保證；真正值得珍惜的是傳承、發心、儀軌、供養、持誦與回向彼此相應。</div></div></div>
          <div className="space-y-10">
            {data.sections.map(([title, body]) => (
              <article key={title} className="border-b border-border/50 pb-10">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">{title}</h2>
                <p className="mt-4 text-base leading-loose text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-primary/15 bg-card/40 p-6 md:p-8"><p className="text-xs font-bold tracking-[0.25em] text-primary">適合誰</p><h2 className="mt-2 font-display text-2xl md:text-3xl">如果你正在為這些事發心</h2><div className="mt-5 grid gap-3 md:grid-cols-2">{data.suitable.map(item => <div key={item} className="rounded-xl border border-border/60 bg-background/30 px-4 py-3 text-sm text-muted-foreground">✓ {item}</div>)}</div></div>

          <div className="mt-10"><div className="mb-6 text-center"><p className="text-xs font-bold tracking-[0.25em] text-primary">參與者回饋</p><h2 className="mt-2 font-display text-2xl md:text-3xl">共同發心之後，最珍貴的是什麼？</h2></div><div className="grid gap-4 md:grid-cols-3">{data.feedback.map(([title,body,by]) => <article key={title} className="rounded-2xl border border-border/60 bg-card/40 p-5"><p className="text-sm font-bold text-primary">{title}</p><p className="mt-3 text-sm leading-7 text-muted-foreground">{body}</p><p className="mt-4 border-t border-border/50 pt-3 text-[10px] text-primary/70">— {by}</p></article>)}</div></div>

          <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center md:p-8">
            <p className="text-xs font-bold tracking-[0.25em] text-primary">首發 18 席・一份心願・一季護持</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">不是每一次發心，都有這樣的因緣</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              首發每項僅 18 席，NT$6,000 一次完成登記與一季護持。願真正珍惜這份因緣的人，能在一季之中持續被憶念、被回向，也讓自己在日常裡持續與善法相應。
            </p>
            <a href={checkoutUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-lg transition hover:opacity-90">
              NT$6,000｜立即登記
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-xs text-muted-foreground/80">付款與登記皆於綠界完成</p>
          </div>

          <div className="mt-10">
            <Link href="/special-festivals" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> 返回特別祭典
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
      <StickyCta />
      <FloatingFb />
    </div>
  );
}