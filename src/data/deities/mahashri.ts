// @ts-nocheck
import type { Deity } from "@/lib/siteData";

import heroMahashriImg from "@/assets/visuals/deities/mahashri-hero-altar.jpeg";
import ritualMahashriImg from "@/assets/visuals/deities/mahashri-vibe-butter-lamp.webp"; 
import mahashriRitualAltar from "@/assets/visuals/deities/mahashri-ritual-altar.webp";
import mahashriActionPuja from "@/assets/visuals/deities/mahashri-action-group-puja.webp";
import mahashriVibeLamp from "@/assets/visuals/deities/mahashri-vibe-butter-lamp.webp";

export const mahashri: Deity = {
  key: "mahashri",
  name: "大吉祥天女",
  subtitle: "賜予吉祥・圓滿富足",
  route: "/deity/mahashri",
  primaryIntent: "家庭和諧與事業順利",
  themeColor: { bg: "#2B2414", accent: "#E6B800" }, 
  heroKicker: "迎接生命中全方位的豐盛與吉祥",
  heroImage: heroMahashriImg,
  ritual: {
    title: "大吉祥天女祈福修法（Mahashri Auspiciousness）",
    image: ritualMahashriImg,
    imageAlt: "壇城光影：以無上的恭敬迎接吉祥與豐盈",
    mdPath: "mahashri-auspicious.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/mahashri",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
    keyPoints: [
      "安頓心念：洗滌內心的焦躁與不安，以柔軟、感恩的心，準備迎接生命中的善意。",
      "儀軌相應：祈請大吉祥天女降臨，將世間的財富與出世間的智慧，如甘露般灑落。",
      "深層轉化：將對物質的匱乏恐懼，轉化為知足與慷慨，讓自身成為散發吉祥氣息的所在。",
      "善意回向：願世間充滿祥和，願每個家庭皆能遠離災厄，享有安康與富足。",
    ],
    offeringsChecklist: [
      "清淨的檀香或沉香",
      "象徵豐盛的甜點、乳製品與鮮花",
      "八吉祥圖騰或莊嚴的供器",
    ],
    practiceFocus: [
      "內在看見：覺察生活中的微小幸福，放大感恩的頻率，讓吉祥的能量自然匯聚。",
      "音頻共振：持誦大吉祥天女咒，感受平靜而喜悅的聲波，共振出富足的實相。",
      "擴展心量：樂於分享所擁有的，以無私的布施，種下未來更廣大福報的種子。",
    ],
  },
  rituals: [
    { id: "m1", img: mahashriRitualAltar, alt: "吉祥天女壇城", caption: "寧靜而莊嚴的空間，邀請吉祥與豐盛入駐" },
    { id: "m2", img: mahashriActionPuja, alt: "僧眾修法", caption: "以清淨的梵音，為世界注入和平與富足的祈願" },
    { id: "m3", img: mahashriVibeLamp, alt: "吉祥供燈", caption: "點亮心燈，驅逐厄運的陰霾，迎來圓滿" },
  ],
  testimonials: [
    { 
      title: "讓家裡的磁場穩定下來了", 
      body: "搬入新家後家裡總是紛爭不斷，小病小災接二連三。參與天女護持方案後，最明顯的感覺是家裡的空氣變『清爽』了，原本愛頂撞的小孩也變得懂事許多。這種家庭磁場的穩定，是花多少錢都買不到的。", 
      by: "高雄市 陳小姐 (行政人員)" 
    },
    { 
      title: "流年不利時的最強靠山", 
      body: "今年我的星象運勢很低迷，本來很擔心事業會受挫。但這一整年我都堅持向大吉祥天女供燈，結果不僅公司轉型成功，還在年底意外領到一筆獎金。這份吉祥的能量，真的護住了我的平安。", 
      by: "台北市 郭先生 (資深顧問)" 
    },
    { 
      title: "善緣開展，福氣自來", 
      body: "以前我總是覺得錢財留不住。在天女的修持指引下，我學會了如何正確地『布施』。漸漸地，我發現身邊的人對我越來越友善，很多好的機會不需要搶，也會主動找上門。這才是真正的圓滿。", 
      by: "台中市 林小姐 (創業者)" 
    }
  ],
  promise: "在汲汲營營的日常中，我們容易忘記生活本該有的從容與美好。大吉祥天女的修持，是一場喚醒內在豐足的旅程。我們祈願透過這份護持，為您的生活注入一股溫柔而安定的力量，讓好運與吉祥，能在您放鬆的時刻悄然降臨。",
  scripture: [
    {
      quote: "「能令眾生得大自在，獲大果報... 所須之物悉皆具足。」",
      source: "《金光明最勝王經》",
      hint: "真正的富足，是身心靈的全面平衡與自在",
      url: "#",
    },
  ],
  painPoints: ["家庭關係緊繃，家中常有不安寧的氛圍", "雖然努力工作，但總覺得生活缺少一份『好運』與順遂", "渴望事業與生活能同時達到平衡與圓滿"],
  whyThisDeity: ["帶來全方位的吉祥，護佑家庭和諧安康", "增長世間財富與福報，讓努力更容易看見成果", "帶來內在的平靜與喜悅，散發吸引好運的氣場"],
  process: [
    { title: "發心與探索", body: "安頓身心，皈依三寶；以感恩的心，檢視生活中已擁有的美好，為迎接更多吉祥騰出空間。" },
    { title: "相應與轉化", body: "透過修法，觀想吉祥天女賜予的福慧甘露，洗淨厄運，充滿光明與喜悅。" },
    { title: "回向與見證", body: "將這份祥和回向給家人與法界；志工造冊後，隔週將公開去識別化名錄，見證福氣的累積。" },
  ],
  plans: [
    {
      id: "m-490",
      name: "平靜微光｜大吉祥天女平安供燈",
      price: 490,
      blurb: "為家庭氛圍點亮一盞燈：溫柔化解家中的緊繃感，祈求日常互動的和諧與平安。",
      url: "https://cart.cashier.ecpay.com.tw/qp/z4ND",
      suitableFor: ["家庭祈福", "日常保平安"],
      details: ["清淨吉祥供燈", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
    },
    {
      id: "m-980",
      name: "迎祥納福｜大吉祥天女相應回向",
      price: 980,
      blurb: "當您渴望生活多一份順遂：以完整的儀軌相應，為生活各個層面注入吉祥的能量。",
      url: "https://cart.cashier.ecpay.com.tw/qp/z4PD",
      hot: true,
      badge: "圓滿首選",
      suitableFor: ["流年祈福", "提升整體運勢"],
      details: ["專屬吉祥相應修法", "家庭圓滿祈願", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
    },
    {
      id: "m-1860",
      name: "富足綿延｜大吉祥天女圓滿加強回向",
      price: 1860,
      blurb: "為事業與家庭雙軌並進的您設計：深層鞏固福德資糧，讓物質與心靈的豐盛長久留存。",
      url: "https://cart.cashier.ecpay.com.tw/qp/z4Q7",
      suitableFor: ["家業傳承", "追求全方位圓滿"],
      details: ["深層吉祥香供", "加強福德回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"],
    },
  ],
  faq: [
    { q: "這是一場真實的祈福，還是商業買賣？", a: "這是一場真實的法事造冊與善緣探索。滿願藏庫台灣團隊由志工組成，護持金扣除手續費後全數化作西藏壇城的莊嚴供養，並會在 FB 公佈去識別化名錄。" },
    { q: "大吉祥天女適合什麼人祈求？", a: "適合希望家庭和睦、生活平順、事業穩定發展，以及渴望在生活中多一點『幸運』與『圓滿』的信眾。" },
    { q: "祈求吉祥天女需要特別發願嗎？", a: "我們建議您在備註欄寫下對家庭或生活的期盼。若能同時發願在生活中多行善事、多布施，將能與天女的頻率產生更深層的共鳴。" },
    { q: "這份善緣何時會開始運作？", a: "志工將於晚間靜心為您造冊。修法後將於隔週公佈名錄；在等待的過程中，請給予自己多一點的平靜與耐心等待轉變。" }
  ],
  crossSell: [
    { title: "如果您面臨明顯的事業阻礙需要突破", desc: "探索紅象頭財神：以剛猛之力掃除違緣。", to: "ganapati" },
    { title: "如果您急需現金流動的轉機", desc: "探索黃財神：直接啟動財富的善因緣。", to: "yellow" },
  ],
};