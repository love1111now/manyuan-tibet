// @ts-nocheck
import type { Deity } from "@/lib/siteData";

import heroTaraImg from "@/assets/visuals/deities/green-tara-hero-altar.jpeg";
import ritualTaraImg from "@/assets/visuals/deities/green-tara-vibe-butter-lamp.webp"; 
import taraRitualAltar from "@/assets/visuals/deities/green-tara-ritual-altar.webp";
import taraActionPuja from "@/assets/visuals/deities/green-tara-action-group-puja.webp";
import taraVibeLamp from "@/assets/visuals/deities/green-tara-vibe-butter-lamp.webp";

export const greenTara: Deity = {
  key: "green-tara", 
  name: "綠度母",
  subtitle: "迅疾滿願・救苦救難",
  route: "/deity/green-tara",
  primaryIntent: "解除急難與迅速滿願",
  themeColor: { bg: "#0F2E14", accent: "#228B22" }, 
  heroKicker: "以母親般的迅疾與溫柔，接住您的焦慮與急難",
  heroImage: heroTaraImg,
  ritual: {
    title: "綠度母迅疾滿願修法",
    image: ritualTaraImg,
    imageAlt: "壇城光影：如翡翠般的慈悲光芒，瞬間撫平一切恐懼",
    mdPath: "green-tara-swift.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/green-tara",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
    keyPoints: [
      "安頓心念：在極度的焦慮與急迫中，試著深呼吸，將求救的訊號傳遞給大悲度母。",
      "儀軌相應：觀想綠度母以右腳伸出的姿態，隨時準備躍下蓮座，迅疾奔赴您的苦難。",
      "深層轉化：將對未來的掌控欲與得失心，化為對度母的完全信任，讓緊繃的神經得以放鬆。",
      "善意回向：願世間所有遭受突發急難、恐懼與八大怖畏的眾生，皆能瞬間獲得度母的救援。"
    ],
    offeringsChecklist: [
      "清淨的供水與鮮花",
      "代表生機與清新的綠色供品",
      "毫無保留的信任與呼喚"
    ],
    practiceFocus: [
      "內在看見：承認自己的脆弱，允許自己在此刻被慈悲的力量溫柔接住。",
      "音頻共振：快速而專注地持誦度母心咒，讓心跳與度母迅疾救度的頻率同步。",
      "擴展心量：當自己度過難關後，也期許自己能成為他人生命中的度母，及時伸出援手。"
    ]
  },
  rituals: [
    { id: "gt1", img: taraRitualAltar, alt: "綠度母壇城", caption: "充滿生機與慈悲的綠色壇城，撫慰一切不安" },
    { id: "gt2", img: taraActionPuja, alt: "僧眾共修", caption: "匯聚迅疾的修法力量，第一時間將祝福傳遞給您" },
    { id: "gt3", img: taraVibeLamp, alt: "滿願供燈", caption: "點亮希望之光，讓停滯的願望重新啟動" }
  ],
  testimonials: [
    { title: "被卡住的合約，在最後一刻解套", body: "我們公司面臨一個即將違約的生死關頭，如果對方不點頭，資金鏈就會斷裂。在那種恐慌到想吐的狀態下，我求助了綠度母。就在修法登記後的隔天下午，對方主管突然改變主意同意延期。那種『瞬間得救』的感覺，我一輩子都不會忘記。", by: "台北市 林先生 (企業主)" },
    { title: "備孕五年的奇蹟生機", body: "做過三次試管都失敗，身心俱疲的我都打算放棄了。在朋友建議下，我向綠度母祈求生機。修法的那段時間，我放下了執念與焦慮，心境變得前所未有的平和。半年後，我竟然自然受孕了。綠度母真的像慈母一樣滿了我的願。", by: "桃園市 邱小姐 (行政人員)" },
    { title: "平息了莫名爆發的極度焦慮", body: "有一陣子我深受恐慌症發作之苦，常常覺得自己快喘不過氣來。點了綠度母解憂供燈後，我開始跟著唸綠度母心咒。咒音彷彿有一種神奇的魔力，能瞬間把狂飆的心跳壓下來，讓我感覺到『我安全了』。", by: "台南市 吳小姐 (設計師)" }
  ],
  promise: "度母就像一位時刻關注著孩子的母親，祂的特德就是『迅疾』。當您面臨突發的危機、急迫的抉擇，或是深陷難以自拔的焦慮時，我們祈願透過綠度母的修持，為您帶來即時的庇護與安慰，讓事情以最圓滿的方式迅速落幕。",
  scripture: [
    { quote: "「敬禮救度速勇母，目如剎那閃電光...」", source: "《二十一度母讚》", hint: "救度之速，猶如閃電，絕不遲疑", url: "#" }
  ],
  painPoints: ["面臨突發的危機、官非或急迫的財務/決策關卡", "內心充滿極度的焦慮、恐慌，感覺快被壓力壓垮", "長時間祈求的事情（如求子、求職）遲遲沒有進展"],
  whyThisDeity: ["感應最為迅速，專治各種『急難』與突發狀況", "能破除八大怖畏，徹底安頓動盪不安的心理狀態", "所求皆能迅速滿願，包含求子、事業與婚姻"],
  process: [
    { title: "發心與探索", body: "安頓身心，皈依三寶；在焦慮中呼喚度母的名字，將急迫的願望與恐懼毫無保留地傾訴。" },
    { title: "相應與轉化", body: "透過修法與點燈，感受度母的綠光瞬間包圍，將危機轉化為生機。" },
    { title: "回向與見證", body: "將滿願的功德回向；志工將以最快速度為您造冊，與您一起期待轉機的到來。" }
  ],
  plans: [
    { id: "gt-680", name: "平靜微光｜綠度母解憂供燈回向", price: 680, blurb: "為焦慮的心點亮一盞燈：溫柔釋放緊繃的情緒，祈求在迷茫中看見希望的光。", url: "https://cart.cashier.ecpay.com.tw/qp/zEJ1", suitableFor: ["解除重度焦慮", "日常小願祈福"], details: ["清淨解憂供燈", "✦ 本月結緣：每週六藥師佛息災煙供守護"] },
    { id: "gt-1280", name: "迅疾滿願｜綠度母急難救護相應", price: 1280, blurb: "當事情迫在眉睫：祈求度母以最快的速度介入，解除危機，滿足您迫切的願望。", url: "https://cart.cashier.ecpay.com.tw/qp/zED7", hot: true, badge: "急難首選", suitableFor: ["急難救助", "事業/求子速滿願"], details: ["專屬迅疾滿願修法", "急難護佑回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"] }
  ],
  faq: [
    { q: "這是一場真實的祈福，還是商業買賣？", a: "這是一場真實的法事造冊與善緣探索。我們採用『綠界科技 ECPay』確保您的金流安全。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。修持完成後，我們會在 FB 粉專公佈「去識別化」名錄，讓您的付出成為純粹且透明的善意。" },
    { q: "在這場探索中，我需要自行操作儀軌嗎？", a: "不需要。專業的僧眾會依循古老傳承如法修持，您只需要放鬆身心，保持清淨的祈願即可。" },
    { q: "如何寫下我的祈願，讓改變更容易發生？", a: "我們建議在備註欄中，誠實寫下您目前的『生命掙扎』（例如：急迫的焦慮、迫切的願望）。越真實的描述，越能與本尊的慈悲頻率產生共鳴。" },
    { q: "我可以同時探索多個生命面向的改變嗎？", a: "可以的，但我們鼓勵您先聚焦於當下『最渴望轉變』的一個核心，讓心念的光芒更加集中。" },
    { q: "我內心的掙扎與隱私會被保護嗎？", a: "絕對會。所有的祈願僅供壇城修持對位使用，名錄公開時也會進行嚴格的去識別化（如：陳*明），溫柔守護您的信任。" },
    { q: "綠度母法門有何特點？", a: "最大的特點就是『快』。如果您遇到的問題非常急迫，或者內心極度焦慮無法等待，祈求綠度母是最好的選擇。" },
    { q: "求子可以拜綠度母嗎？", a: "非常靈驗。綠度母具備強大的慈悲與孕育生機的力量，藏地有許多求子滿願的真實感應。" },
    { q: "這份善緣何時會開始運作？", a: "針對綠度母的急難祈求，志工會以最快的速度為您造冊對位。在等待名錄公開的過程中，請深呼吸，將焦慮交託給度母。" }
  ],
  crossSell: [
    { title: "如果您的急難主要來自於事業競爭或小人陷害", desc: "探索象神（精靈主）：同時啟動強力的除障與反擊能量。", to: "ganapati" },
    { title: "如果您需要溫暖的善緣來解決人際急難", desc: "探索咕嚕咕咧佛母：以懷愛的力量化解人際危機。", to: "kurukulla" }
  ]
};