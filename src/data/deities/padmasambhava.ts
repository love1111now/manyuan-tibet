// @ts-nocheck
import type { Deity } from "@/lib/siteData";

import heroPadmaImg from "@/assets/visuals/deities/padmasambhava-hero-altar.jpeg";
import ritualPadmaImg from "@/assets/visuals/deities/padmasambhava-vibe-butter-lamp.webp"; 
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
    imageAlt: "壇城光影：以金剛威猛之力，護佑行者平安",
    mdPath: "padmasambhava-protection.md",
    sourceUrl: "https://www.lotsawahouse.org/tibetan-masters/padmasambhava",
    license: "CC BY-NC 4.0 (Lotsawa House)",
    note: "我們以『精華指南』協助您探索深奧意涵；經典原文則保留權威譯本，確保智慧的純粹傳遞。",
    keyPoints: [
      "安頓心念：將極度的恐懼、迷茫與無助，完全交付給蓮師，相信其無所不在的護念。",
      "儀軌相應：祈請蓮花生大士以金剛威德力，震懾並遣除一切有形無形的魔難與障礙。",
      "深層轉化：將生命中的重大挫折，視為鍛鍊心性的道場，從脆弱中長出堅韌的智慧。",
      "善意回向：願一切陷於危難與恐懼中的眾生，皆能獲得蓮師的庇護，重獲平安。"
    ],
    offeringsChecklist: [
      "清淨除障香與薈供品",
      "代表光明的酥油燈",
      "至誠懇切的祈請心"
    ],
    practiceFocus: [
      "內在看見：直面內心最深處的恐懼，看見它，然後讓蓮師的光芒將其融化。",
      "音頻共振：持誦蓮師心咒或金剛七句祈請文，汲取來自宇宙深處的安定力量。",
      "擴展心量：不再自怨自艾，而是以無畏的勇氣，承擔起生命賦予的責任與挑戰。"
    ]
  },
  rituals: [
    { id: "p1", img: padmaRitualAltar, alt: "蓮師壇城", caption: "威猛而寂靜的法座，是修行者最堅實的避風港" },
    { id: "p2", img: padmaActionPuja, alt: "蓮師薈供修法", caption: "僧眾齊聚，以浩大的音聲震退一切災厄" },
    { id: "p3", img: padmaVibeLamp, alt: "息災供燈", caption: "無畏的燈火，照亮生命中最黑暗的時刻" }
  ],
  testimonials: [
    { title: "在幽谷中發現無畏的靠山", body: "在事業最黑暗、幾乎失去所有力氣，甚至面臨巨大法律糾紛的時候，蓮師的護持給了我極大的內在安定。原本恐慌到無法入眠的我，在修法後奇蹟般地冷靜下來，穩穩地陪我走過生命中最難熬的關口。", by: "桃園市 郭先生 (自營商)" },
    { title: "化解了突如其來的莫名災厄", body: "那陣子家裡連續發生兩起車禍，雖然人沒大礙，但整個家籠罩在恐懼中。幫全家人點了蓮師除障燈後，那種毛骨悚然的不安感終於散去。我覺得像是被一個巨大的防護罩保護著，終於能安心睡覺了。", by: "新北市 林小姐 (家管)" },
    { title: "安定了孩子受驚嚇的神識", body: "四歲的女兒連續好幾天半夜莫名驚醒大哭，帶去收驚也沒用。後來祈求蓮師護佑，並在床頭播放蓮師心咒。當天晚上，她竟然一覺到天亮，醒來還笑著說夢到了發光的金剛。這份保護力真的不可思議。", by: "台中市 張太太 (幼教老師)" }
  ],
  promise: "當生命遭遇突如其來的風暴，或陷入難以跨越的低潮時，蓮師的護持能為您提供最深層的安全感。我們承諾，透過清淨的修法，將這份大威德的防護罩籠罩於您與家人，讓您在逆境中有力量穩住腳步，化險為夷。",
  scripture: [
    { quote: "「我無死亦無生，我於一切眾生前，如影隨形未嘗離。」", source: "《蓮花生大士傳》", hint: "只要您深切祈請，護持的力量就一直都在", url: "#" }
  ],
  painPoints: ["遭遇重大的生活變故或難以解釋的違緣障礙", "長期處於極度的焦慮、恐慌，缺乏安全感", "面臨危險的環境或需要強大的心靈庇護"],
  whyThisDeity: ["具備降伏一切魔難與違緣的強大法力", "在末法時代，其加持力與護佑最為迅速且威猛", "能賜予無畏的勇氣，安定動盪不安的身心"],
  process: [
    { title: "發心與探索", body: "在恐懼中靜下心來，安頓身心，誠懇地向蓮師發出呼救與祈請。" },
    { title: "相應與轉化", body: "透過息災除障修法，觀想蓮師的金剛甲冑護佑全身，百邪不侵。" },
    { title: "回向與見證", body: "將平安的祈願回向給法界；志工將謹慎造冊修持，為您築起隱形的保護網。" }
  ],
  plans: [
    { id: "p-490", name: "無畏微光｜蓮師息災供燈回向", price: 490, blurb: "為動盪不安的心點亮一盞燈：溫柔安撫內在的恐懼，祈求日常出入的平安。", url: "https://cart.cashier.ecpay.com.tw/qp/p8J1", suitableFor: ["安頓身心", "日常保平安"], details: ["清淨息災供燈", "✦ 本月結緣：每週六藥師佛息災煙供守護"] },
    { id: "p-980", name: "堅實護持｜蓮師除障相應回向", price: 980, blurb: "當生命遇到逆流或低潮：啟動強大的保護力，遣除疾病、災厄與無形的干擾。", url: "https://cart.cashier.ecpay.com.tw/qp/p8K2", hot: true, badge: "護持首選", suitableFor: ["逢凶化吉", "化解流年不利"], details: ["專屬除障相應修法", "無畏守護回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"] },
    { id: "p-1860", name: "大威德防護｜蓮師深層淨障加強回向", price: 1860, blurb: "面臨重大人生關卡或複雜磁場：深度淨化生命中的惡緣，建立堅不可摧的心靈靠山。", url: "https://cart.cashier.ecpay.com.tw/qp/p8L3", suitableFor: ["重大違緣化解", "高壓環境工作者"], details: ["深層淨障香供", "加強守護回向", "✦ 本月結緣：每週六藥師佛息災煙供守護"] }
  ],
  faq: [
    { q: "這是一場真實的祈福，還是商業買賣？", a: "這是一場真實的法事造冊與善緣探索。滿願藏庫台灣團隊由不支薪志工組成，護持金扣除手續費後，全數化作西藏壇城的莊嚴供養。" },
    { q: "何時特別適合向蓮師祈福？", a: "遇到難以解決的困境、遭遇突發的災難、前往磁場複雜的地方，或是每月藏曆初十的蓮師薈供日，都非常殊勝。" }
  ],
  crossSell: [
    { title: "如果您的身心已經出現具體的疾病與不適", desc: "探索藥師佛：尋求深層的醫療與細胞層級的療癒。", to: "medicine-buddha" },
    { title: "如果您需要極端迅速的急難救助", desc: "探索綠度母：以迅疾的大悲願力解除當下危機。", to: "green-tara" }
  ]
};