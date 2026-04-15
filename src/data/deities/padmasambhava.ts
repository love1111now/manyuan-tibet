// @ts-nocheck
import type { Deity } from "@/lib/siteData";

import heroPadmaImg from "@/assets/visuals/deities/padmasambhava-hero-altar.jpeg";
import ritualPadmaImg from "@/assets/visuals/testimonial_bg_yellow.webp"; 
import padmaRitualAltar from "@/assets/visuals/deities/padmasambhava-ritual-altar.webp";
import padmaActionPuja from "@/assets/visuals/deities/padmasambhava-action-group-puja.webp";
import padmaVibeLamp from "@/assets/visuals/deities/padmasambhava-vibe-butter-lamp.webp";

export const padmasambhava: Deity = {
  key: "padmasambhava",
  name: "蓮花生大士",
  subtitle: "大威德護持・遣除違緣",
  route: "/deity/padmasambhava",
  primaryIntent: "息災除障與心靈安定",
  themeColor: { bg: "#2A180D", accent: "#FF6600" },
  heroKicker: "在生命的幽谷中，為您建立不可撼動的靠山",
  heroImage: heroPadmaImg,
  ritual: {
    title: "蓮師息災除障修法",
    image: ritualPadmaImg,
    imageAlt: "壇城光影：以金剛威猛之力護佑行者平安",
    mdPath: "padmasambhava-protection.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/padmasambhava",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
    keyPoints: [
      "安頓心念： 將極度的恐懼、迷茫與無助，完全交付給蓮師。",
      "儀軌相應： 祈請蓮師以金剛威德力，震懾並遣除有形無形的魔難。",
      "深層轉化： 將生命挫折視為鍛鍊心性的道場，長出堅韌智慧。",
      "善意回向： 願陷於危難與恐懼的眾生，皆獲庇護，重獲平安。"
    ],
    offeringsChecklist: [
      "清淨除障香與薈供品",
      "代表光明的酥油燈",
      "至誠懇切的祈請心"
    ],
    practiceFocus: [
      "內在看見： 直面內心最深處的恐懼，讓蓮師光芒將其融化。",
      "音頻共振： 持誦蓮師心咒，汲取來自宇宙深處的安定力量。",
      "擴展心量： 以無畏的勇氣，承擔起生命賦予的責任與挑戰。"
    ]
  },
  rituals: [
    { id: "p1", img: padmaRitualAltar, alt: "蓮師壇城", caption: "威猛而寂靜的法座，是最堅實的避風港" },
    { id: "p2", img: padmaActionPuja, alt: "蓮師薈供修法", caption: "僧眾齊聚，以浩大音聲震退一切災厄" },
    { id: "p3", img: padmaVibeLamp, alt: "息災供燈", caption: "無畏的燈火，照亮生命中最黑暗時刻" }
  ],
  testimonials: [
    { title: "在幽谷中發現無畏的靠山", body: "面臨巨大法律糾紛時，蓮師護持給我極大內在安定。原本恐慌無法入眠，修法後奇蹟般冷靜，穩穩陪我走過難熬關口。", by: "桃園 郭先生 ｜ 自營商" },
    { title: "化解了突如其來的莫名災厄", body: "家裡連續車禍籠罩在恐懼中。幫全家人點除障燈後，毛骨悚然的不安感終於散去。像被巨大防護罩保護著，終於能安心睡覺。", by: "新北 林小姐 ｜ 家管" },
    { title: "安定了孩子受驚嚇的神識", body: "女兒半夜莫名驚醒大哭，收驚也沒用。祈求蓮師護佑並播放心咒，當晚竟一覺到天亮，還笑說夢到發光金剛。保護力不可思議。", by: "台中 張太太 ｜ 幼教老師" }
  ],
  promise: "當遭遇突發風暴或難以跨越的低潮，蓮師的護持能提供最深層的安全感。我們承諾透過清淨修法，為您與家人建立大威德防護罩，在逆境中穩住腳步化險為夷。",
  scripture: [
    { quote: "「我無死亦無生，我於一切眾生前，如影隨形未嘗離。」", source: "《蓮花生大士傳》", hint: "只要您深切祈請，護持的力量就一直都在", url: "#" }
  ],
  painPoints: ["遭遇重大變故，或難解的違緣障礙", "長期處於極度焦慮與恐慌，缺乏安全感", "面臨危險環境，需要強大的心靈庇護"],
  whyThisDeity: ["具備降伏一切魔難與違緣的強大法力", "在末法時代，其加持護佑最為迅速威猛", "能賜予無畏勇氣，安定動盪不安的身心"],
  process: [
    { title: "發心與探索", body: "在恐懼中靜下心來，誠懇向蓮師發出呼救與祈請。" },
    { title: "相應與轉化", body: "透過修法，觀想金剛甲冑護佑全身，百邪不侵。" },
    { title: "回向與見證", body: "將平安回向法界；志工謹慎造冊築起隱形保護網。" }
  ],
  plans: [
    { id: "p-490", name: "無畏微光 ｜ 蓮師息災供燈回向", price: 490, blurb: "為動盪不安的心點亮一盞燈：溫柔安撫內在的恐懼，祈求日常出入的平安。", url: "https://cart.cashier.ecpay.com.tw/qp/z4Z5", suitableFor: ["安頓身心", "日常保平安"], details: ["清淨息災供燈", "✦ 本月結緣：每週六藥師佛息災煙供守護"] },
    { id: "p-980", name: "堅實護持 ｜ 蓮師除障相應回向", price: 980, blurb: "當生命遇到逆流或低潮：啟動強大的保護力，遣除疾病、災厄與無形的干擾。", url: "https://cart.cashier.ecpay.com.tw/qp/z5d7", hot: true, badge: "護持首選", suitableFor: ["逢凶化吉", "化解流年不利"], details: ["專屬除障相應修法", "無畏守護回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"] }
  ],
  faq: [
    { q: "這是一場真實祈福，還是商業買賣？", a: "這是一場真實的法事造冊與善緣探索。台灣團隊由志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。" },
    { q: "何時特別適合向蓮師祈福？", a: "遇到難以解決的困境、遭遇突發災難、前往磁場複雜之地，或每月初十的蓮師薈供日，都非常適合祈請。" }
  ],
  crossSell: [
    { title: "如果身心已經出現具體疾病與不適", desc: "探索藥師佛：尋求深層的醫療與細胞層級療癒。", to: "medicine-buddha" },
    { title: "如果需要極端迅速的急難救助", desc: "探索綠度母：以迅疾的大悲願力解除當下危機。", to: "green-tara" }
  ]
};