import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Flag, Gem, Flame } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";

const FESTIVALS = {
  "wind-horse": {
    title: "風馬旗",
    tibetan: "རླུང་རྟ་ · Lungta",
    subtitle: "讓發願隨風傳遞的藏地祈願傳統",
    icon: Flag,
    intro:
      "「風馬」（Lungta）是藏地文化中極具代表性的祈願象徵。常見的風馬旗印有風馬、咒語、祈願文與吉祥圖像，懸掛於寺院、山口、道路及其他高處。其核心並非裝飾，而是藉由經咒、發願與回向，將善願遍及一切眾生。",
    sections: [
      ["什麼是「風馬」？", "Lungta 直譯為「風馬」。風馬通常位於旗幟中央，周圍可見三寶與其他吉祥象徵。這裡的「馬」不是世俗交通工具的單純意象，而是與活力、力量及善願傳遞相關的宗教象徵。"],
      ["風馬旗與祈願旗不是完全相同的概念", "藏地有不同形式的旗幟。Lungta 常指與風馬圖像及祈願傳統相關的旗幟；垂直旗幟另有 Darchor 等名稱。因此網站使用「風馬旗」時，特指以 Lungta 傳統為核心的形式，而不把所有藏地旗幟都混稱為風馬旗。"],
      ["五色旗的象徵", "常見的五色為藍、白、紅、綠、黃。不同傳承與地區對其對應關係的說法可能略有差異；常見解釋與五大元素、方向及佛教象徵相連。實際懸掛方式宜依所屬傳承或寺院指導。"],
      ["真正重要的是發心", "風馬旗不是用來向某位神明交換願望的物品。藏傳佛教的祈願傳統重視發心、善行、持誦、回向與利益眾生；旗幟隨風飄動所承載的，是這份修持與祈願的象徵。"],
    ],
  },
  "mani-stone": {
    title: "瑪尼石",
    tibetan: "མ་ཎི་རྡོ་ · Maṇi Stone",
    subtitle: "把經咒與祈願刻入山川道路的藏地傳統",
    icon: Gem,
    intro:
      "瑪尼石是藏地及喜馬拉雅佛教文化中常見的石刻。石上經常刻有觀世音菩薩六字大明咒「唵嘛呢叭咪吽」（Oṃ Maṇi Padme Hūṃ），也可能刻有其他佛教經咒、偈頌、佛像或供養者的文字。",
    sections: [
      ["瑪尼石是什麼？", "瑪尼石並不只指刻有六字大明咒的石頭；從研究與田野資料來看，也可泛指帶有經咒、佛教圖像或其他宗教文字的石刻。它們常被排列成瑪尼牆、石堆，或設置於村落、道路、寺院、山口等處。"],
      ["六字大明咒", "「唵嘛呢叭咪吽」（Oṃ Maṇi Padme Hūṃ）是與觀世音菩薩相關的重要六字真言，在藏地與喜馬拉雅佛教文化中極為普遍。將經咒刻於石上，是把佛法文字融入日常環境的一種宗教與文化表現。"],
      ["瑪尼牆與繞行", "瑪尼石經常被排列成長牆。傳統上，行經相關宗教空間時會依當地寺院與傳承的規範繞行；若實際參訪寺院或瑪尼牆，應以現場指示及當地傳統為準。"],
      ["不把瑪尼石神秘化", "瑪尼石的重點應放在經咒、信仰、發心與文化傳承，而不是宣稱石頭本身具有可以保證特定世俗結果的神秘力量。這也是我們介紹瑪尼石時希望保留的佛教脈絡。"],
    ],
  },
  "butter-lamp-festival": {
    title: "燃燈節",
    tibetan: "ཆོ་འཕྲུལ་དུས་ཆེན་ · Chötrul Düchen",
    subtitle: "神變節・燃燈供養：以光明象徵智慧",
    icon: Flame,
    intro:
      "「燃燈節」常用來指藏傳佛教的 Chötrul Düchen（神變節、神變大法會），是藏曆正月十五的重要佛教節日，也是藏傳佛教四大殊勝日之一。傳統上紀念釋迦牟尼佛在舍衛城示現神變、增長眾生信心的故事；節日期間也常見供燈、布施、誦經與回向等善行。",
    sections: [
      ["為什麼叫「燃燈節」？", "Chötrul Düchen 的核心是「神變節」本身，而「燃燈節」是因藏地在此期間盛行供燈與燈飾而形成的通俗稱呼。因此網站正式介紹會同時保留「燃燈節」與「Chötrul Düchen／神變節」，避免把它誤解成單純的民俗燈會。"],
      ["節日的佛教背景", "傳統說法認為，釋迦牟尼佛在舍衛城連續十五日示現神變，以調伏外道並令眾生生起信心；藏曆正月十五為這段紀念期的圓滿日。Chötrul Düchen 也是藏傳佛教四大殊勝日之一。"],
      ["供燈代表什麼？", "在藏傳佛教中，燈供常以光明象徵智慧，並以驅散黑暗來譬喻去除無明。供燈不是因為佛需要光，而是以供養培養恭敬、布施、發願與智慧的心。"],
      ["如何理解「功德增長」？", "部分藏傳佛教傳承依佛教經典與傳承教言，認為四大殊勝日善惡業果會大幅增長。不同傳承對倍數的具體說法並不完全一致，因此本網站不寫死單一倍數，而以「殊勝修行與回向日」呈現較為嚴謹。"],
      ["2026 年日期", "2026 年的 Chötrul Düchen 為 3 月 3 日；節日日期依藏曆計算，每年對應的西曆日期會改變。實際參與法會時，仍應以所依寺院、傳承或法會主辦方公告為準。"],
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

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{data.title}｜特別祭典｜滿願藏庫</title>
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
                <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Special Festival</p>
                <h1 className="mt-1 font-display text-4xl md:text-6xl">{data.title}</h1>
              </div>
            </div>

            <p className="mt-4 text-sm tracking-wide text-primary">{data.tibetan}</p>
            <p className="mt-4 text-lg text-foreground/80">{data.subtitle}</p>
            <p className="mt-6 max-w-3xl text-base md:text-lg leading-loose text-muted-foreground">{data.intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 pt-14 md:pt-20">
          <div className="space-y-10">
            {data.sections.map(([title, body]) => (
              <article key={title} className="border-b border-border/50 pb-10">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">{title}</h2>
                <p className="mt-4 text-base leading-loose text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <Link href="/special-festivals" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> 返回特別祭典
            </Link>
            <Link href="/pay" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              查看法事登記 <ArrowRight className="h-4 w-4" />
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
