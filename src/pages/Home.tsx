"use client";

import { Link } from "wouter";
import {
  ArrowRight,
  Sparkles,
  Check,
  ShieldCheck,
  Heart,
  Flame,
  Droplets,
  Wind,
  Download,
  Gift,
  MessageSquareQuote,
  Timer,
} from "lucide-react";
import Seo from "@/components/Seo";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingFb from "@/components/FloatingFb";
import StickyCta from "@/components/StickyCta";
import TreasuryQuiz from "@/components/TreasuryQuiz";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// 視覺素材：使用 webp 版本以提升畫質/檔案效率
import heroBrocade from "@/assets/visuals/generated/hero-brocade.webp";

// ----------------------------------------------------------------------
// 1. 核心五路徑：正信藏傳語境與痛點對位
// ----------------------------------------------------------------------
const CORE_PATHS = [
  {
    id: "yellow",
    name: "黃財神",
    subtitle: "積聚資糧",
    painPoint: "資源匱乏、事業停滯",
    description: "培養布施之心，對治慳吝業障。祈願福德資糧盈滿，為事業與生活開啟正向的增益緣起。",
    icon: <Flame className="w-5 h-5 text-amber-500" />,
    color: "amber",
    tag: "廣修布施"
  },
  {
    id: "mahashri",
    name: "大吉祥天女",
    subtitle: "豐饒吉祥",
    painPoint: "福報耗損、生活匱乏",
    description: "依止《金光明經》之願力，洗滌耗損福報之業。祈請天女賜予財寶豐饒，令生活資具無所匱乏。",
    icon: <Droplets className="w-5 h-5 text-blue-400" />,
    color: "blue",
    tag: "資具無缺"
  },
  {
    id: "ganapati",
    name: "象頭財神",
    subtitle: "無礙成就",
    painPoint: "決策無明、重重違緣",
    description: "照破愚痴與無明迷霧，強力掃除前行道路上之外、內、密違緣，於事業與競爭中掌握自在主導。",
    icon: <Wind className="w-5 h-5 text-slate-400" />,
    color: "slate",
    tag: "平息違緣"
  },
  {
    id: "kurukulla",
    name: "作明佛母",
    subtitle: "懷攝善緣",
    painPoint: "情感疏離、人際對立",
    description: "轉化情執與負面惡緣，增長自身威儀與慈悲磁場。化解人際對立，修復並圓滿愛情與善緣。",
    icon: <Heart className="w-5 h-5 text-pink-500" />,
    color: "pink",
    tag: "情感圓滿"
  },
  {
    id: "tara",
    name: "綠度母",
    subtitle: "慈悲救護",
    painPoint: "突發焦慮、內心怖畏",
    description: "仰仗大悲度母誓願，度脫一切苦厄與突發之怖畏。祈願生活平安、諸事順遂、所作皆辦。",
    icon: <Sparkles className="w-5 h-5 text-green-400" />,
    color: "green",
    tag: "迅疾大悲"
  }
];

// ----------------------------------------------------------------------
// 2. 首頁精選見證 (完整五神明 + 真實背景)
// ----------------------------------------------------------------------
const TESTIMONIALS = [
  { 
    deity: "黃財神", 
    text: "原本卡住的資金順利到位，不穩定的收支逐漸平衡，心也定了。更神奇的是，上個月意外接到一筆大額長期訂單，徹底解決了公司的現金流危機。",
    location: "台北市",
    occupation: "創業品牌主",
    name: "張先生"
  },
  { 
    deity: "大吉祥天女", 
    text: "財庫的漏洞彷彿被補上了，無謂的意外開銷明顯減少。護持後家裡的氣氛變得特別和諧，現在每個月都能穩穩存下錢，不再對生活感到匱乏恐慌。",
    location: "台中市",
    occupation: "科技業主管",
    name: "林小姐"
  },
  { 
    deity: "象頭財神", 
    text: "面臨轉職跟投資的十字路口一直很焦慮，點燈護持後，思緒突然變得異常清晰。順利避開了一個有問題的合夥案，並在新崗位上迅速站穩腳步。",
    location: "新竹縣",
    occupation: "資深工程師",
    name: "吳先生"
  },
  { 
    deity: "作明佛母", 
    text: "護持後原本冷戰的僵局化解，感受到久違的被重視與溫暖。不僅感情順利修復，連在公司跨部門溝通時也遇到許多貴人幫忙，不再四處碰壁。",
    location: "高雄市",
    occupation: "行銷企劃",
    name: "陳小姐"
  },
  { 
    deity: "綠度母", 
    text: "之前生活常常莫名充滿窒息感與突發狀況。報名火供後，那種壓在胸口的重擔感消失了，睡眠品質大幅改善，整個人重新找回了踏實的安全感。",
    location: "新北市",
    occupation: "自由設計師",
    name: "郭小姐"
  }
];

export default function Home() {
  
  // 安全的捲動函數，避開 a 標籤與 Hash Router 的衝突
  const scrollToPaths = (e: any) => {
    e.preventDefault();
    const element = document.getElementById('paths');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    // 修正：移除 font-serif，改用預設 font-sans 確保中文字體清晰好讀
    <div className="min-h-screen bg-[#050505] font-sans text-slate-200 selection:bg-amber-500/30 overflow-x-hidden">
      <Seo title="滿願藏庫｜法財滿願，如法護持" path="/" />
      <SiteHeader />

      <main>
        {/* =========================================================
            1. Hero 區塊 
        ========================================================= */}
        <section className="relative pt-32 pb-32 md:pt-48 md:pb-56 px-6 flex items-center justify-center min-h-[85vh]">
          {/* 修正：移除 mix-blend-screen 避免背景過髒，改用單純的 opacity 與漸層 */}
          <div className="absolute inset-0 z-0">
            <img src={heroBrocade} alt="Brocade Texture" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/80 to-[#050505]" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="mb-6 bg-amber-500/10 text-amber-500 border border-amber-500/20 px-4 py-2 text-sm font-bold tracking-widest">
              依佛法經典與藏密續法訊
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              別讓無形的福報耗損，<br className="hidden md:block" />
              <span className="text-[#D4AF37]">拖累你現有的努力。</span>
            </h1>
            
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              你渴望的改變其實很具體：資糧盈滿、遠離怖畏、決策清明，以及<strong className="text-pink-400 font-bold">關係不再疏離冷戰</strong>。我們以清淨如法的路徑，助您修復生活中的種種違緣卡點。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/pay">
                {/* 修正：按鈕字體改為 font-bold 與 text-base，移除 font-black 與過度擠壓的 tracking */}
                <Button className="w-full sm:w-auto h-14 px-8 bg-[#D4AF37] hover:bg-amber-400 text-black font-bold text-base transition-all duration-300">
                  預約您的護持路徑 <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={scrollToPaths}
                className="w-full sm:w-auto h-14 px-8 border-white/20 hover:bg-white/10 text-white font-bold text-base backdrop-blur-sm"
              >
                了解 5 條對位路徑
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. 超吸睛活動專區 (綠度母限時免費)
        ========================================================= */}
        <section className="px-6 relative z-20 -mt-28 md:-mt-36 mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="group relative rounded-[2.5rem] p-[2px] bg-gradient-to-r from-red-800 via-red-500 to-amber-600 overflow-hidden shadow-[0_10px_40px_rgba(239,68,68,0.2)] hover:shadow-[0_10px_60px_rgba(239,68,68,0.35)] transition-all duration-500">
              <div className="bg-[#0A0A0A] rounded-[2.4rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                
                {/* 修正：替換 blur-[80px] 為 radial-gradient 效能優化 */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(239,68,68,0.15)_0%,transparent_70%)] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-[radial-gradient(circle,rgba(239,68,68,0.25)_0%,transparent_70%)] transition-colors duration-500" />
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 z-10 w-full text-center sm:text-left">
                  <div className="shrink-0 w-20 h-20 rounded-full bg-red-950 border border-red-500/50 flex items-center justify-center text-red-500 shadow-inner">
                    <Timer className="w-10 h-10 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-4">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </span>
                      <Badge className="bg-red-500/20 text-red-500 border border-red-500/30 font-bold text-sm px-3 py-1">
                        最後倒數
                      </Badge>
                      <span className="text-red-400 text-sm font-bold tracking-wide">優惠截止日：4 月 2 日 23:59 準時關閉</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-4 leading-snug">
                      清明除障最速件：綠度母火供<span className="text-[#D4AF37] mx-1">「限時免費」</span>入名單！
                    </h3>
                    
                    <p className="text-slate-200 text-base font-normal leading-relaxed mb-4">
                      清明節將至，您是否感覺生活有些沉重？事業遇到瓶頸、小人頻繁出現，或是身體總感到莫名疲累？這不是您不夠努力，而是累積的「障礙」需要一次徹底的清算。
                    </p>

                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 inline-block text-left mb-4">
                      <p className="text-[#D4AF37] text-base font-bold leading-relaxed">
                        <strong className="text-white">即日起至 4/2，凡於官網登記【任一法事】，滿願藏庫即免費送您：</strong><br />
                        【清明節・綠度母滿願除障護摩火供】專屬功德迴向
                      </p>
                      <p className="text-slate-400 text-sm mt-2">
                        （※此法會四月才正式對外開放登記，現在登記現省千元結緣金！）
                      </p>
                    </div>

                    <div className="block mt-2">
                      <Link href="/deities/green-tara" className="inline-flex items-center text-amber-500 hover:text-amber-400 text-base font-bold transition-colors">
                        ▶ 展開：為何「綠度母」能最快改變您的運勢？
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto z-10 self-center md:self-stretch justify-center mt-6 md:mt-0">
                  <Link href="/pay">
                    <Button className="w-full bg-[#D4AF37] hover:bg-amber-400 text-black transition-colors px-8 h-14 font-bold text-base shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                      立即登記任一法事 <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-white/20 text-slate-300 hover:bg-white/10 transition-colors px-6 h-12 font-bold text-sm cursor-not-allowed opacity-70">
                    了解綠度母火供（4/7開放）
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. 測驗
        ========================================================= */}
        <section className="py-16 bg-gradient-to-b from-transparent to-white/[0.02] border-t border-white/10 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#D4AF37] mb-4 tracking-widest">30秒現況定位</h2>
              <p className="text-base text-slate-300">透過簡單檢測，找出目前最需要修補的磁場與資糧缺口。</p>
            </div>
            <TreasuryQuiz /> 
          </div>
        </section>

        {/* =========================================================
            4. 核心方案導流區
        ========================================================= */}
        <section id="paths" className="py-32 px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="text-sm font-bold text-amber-500 mb-4 tracking-widest uppercase">Choose Your Path</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">找到你的對位路徑</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {CORE_PATHS.map((path) => (
                <Card key={path.id} className="group relative p-8 rounded-3xl border border-white/20 bg-white/[0.03] hover:bg-white/[0.06] hover:border-amber-500/50 transition-all duration-300 flex flex-col h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 rounded-2xl bg-black border border-white/10 group-hover:scale-110 transition-transform duration-500">
                      {path.icon}
                    </div>
                    <Badge className="bg-black border-white/20 text-slate-200 font-bold px-3 py-1 text-sm">
                      {path.tag}
                    </Badge>
                  </div>

                  <div className="mb-3 text-sm font-bold text-slate-400">對治：{path.painPoint}</div>
                  <h3 className="text-3xl font-bold text-[#D4AF37] mb-4 flex items-center gap-3">
                    {path.name} <span className="text-lg text-slate-300 font-medium">| {path.subtitle}</span>
                  </h3>
                  
                  <p className="text-base text-slate-300 leading-relaxed mb-10 flex-grow">
                    {path.description}
                  </p>

                  {/* 修正：使用 ?target= 避免 Hash Router 報錯 */}
                  <Link href={`/pay?target=${path.id}`}>
                    <Button className="w-full bg-black border border-white/20 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-white transition-all py-6 font-bold text-base">
                      預約專屬護持 <ArrowRight className="w-5 h-5 ml-2 opacity-70" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            5. 透明護持流程
        ========================================================= */}
        <section className="py-24 bg-white/[0.02] border-y border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">透明、極簡的三步驟</h2>
              <p className="text-slate-300 text-base">不需繁雜手續，我們讓如法供養回歸最純粹的發心。</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0 -z-10" />
              
              {[
                { step: "01", title: "選擇對位本尊", desc: "依據您目前的卡點（如財務、關係），選擇最契合的路徑。" },
                { step: "02", title: "挑選合適方案", desc: "從基礎祈福到總集大薈供，依照您的發心與能力選擇方案。" },
                { step: "03", title: "綠界安全護持", desc: "透過第三方平台完成，24小時內由法會現場進行如法回向。" }
              ].map((s, i) => (
                <Card key={i} className="p-8 bg-[#0A0A0A] border border-white/20 text-center relative overflow-hidden group hover:border-amber-500/50 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">{s.desc}</p>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
               <Link href="/pay">
                  <Button className="h-16 px-12 bg-white hover:bg-amber-100 text-black font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    準備好開始了 <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
               </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. 真實見證 (升級版五神明)
        ========================================================= */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <MessageSquareQuote className="w-12 h-12 text-amber-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">來自護持者的真實回饋</h2>
              <p className="text-slate-400 text-base">願您是下一位回來感恩的人</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <Card key={i} className="p-8 bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-colors flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-amber-500 text-sm font-bold bg-amber-500/10 px-3 py-1 rounded-full">{t.deity}</div>
                    <div className="text-sm text-slate-500 tracking-wider font-bold">{t.location}</div>
                  </div>
                  <p className="text-base text-slate-200 leading-relaxed flex-grow">"{t.text}"</p>
                  
                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-end">
                    <div>
                      <div className="text-base font-bold text-white">{t.name}</div>
                      <div className="text-sm text-slate-400 mt-1">{t.occupation}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            7. 結緣桌布下載
        ========================================================= */}
        <section className="py-24 px-6 bg-[#0A0A0A] border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <Gift className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              滿願藏庫專屬｜<span className="text-[#D4AF37]">法相結緣桌布</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed mb-10">
              我們將深奧的佛法意象轉化為現代精品視覺。免費下載手機/電腦桌布，讓清淨莊嚴的能量時刻陪伴您的日常。
            </p>
            
            <Link href="/wallpapers">
              <Button variant="outline" className="h-16 px-12 border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-black font-bold text-lg transition-all">
                免費下載結緣桌布 <Download className="w-5 h-5 ml-3" />
              </Button>
            </Link>
          </div>
        </section>

        {/* =========================================================
            8. 經典與合規聲明
        ========================================================= */}
        <section className="py-32 bg-gradient-to-b from-transparent to-[#111] border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <Card className="p-10 md:p-16 rounded-[3rem] border border-amber-500/30 bg-[#0A0A0A] text-center relative overflow-hidden">
              <ShieldCheck className="w-14 h-14 text-amber-500/50 mx-auto mb-8 relative z-10" />
              <div className="text-sm font-bold text-amber-500 mb-6 tracking-widest uppercase relative z-10">正信傳承，清淨發心</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 relative z-10">
                我們把路徑說清楚，<br className="hidden md:block"/>才值得您的護持
              </h2>
              
              <blockquote className="text-base text-slate-300 leading-loose mb-12 max-w-2xl mx-auto bg-white/[0.03] p-6 rounded-2xl border-l-4 border-amber-500 relative z-10">
                「於諸賢聖給施所須；見求利者，方便佐助；見世飢饉，心生憐愍... 能令眾生得多資生報。」<br/>
                <span className="text-sm text-slate-400 mt-4 block font-bold">— 《佛為首迦長者說業報差別經》</span>
              </blockquote>

              <div className="grid sm:grid-cols-3 gap-8 text-left border-t border-white/10 pt-10 relative z-10">
                <div>
                  <div className="text-[#D4AF37] font-bold mb-3 flex items-center gap-2 text-lg"><Check className="w-5 h-5"/> 依止正信</div>
                  <p className="text-base text-slate-300 leading-relaxed">不迷信盲從，以藏傳與大乘經典為核心，對治福德耗損與種種違緣。</p>
                </div>
                <div>
                  <div className="text-[#D4AF37] font-bold mb-3 flex items-center gap-2 text-lg"><Check className="w-5 h-5"/> 流程透明</div>
                  <p className="text-base text-slate-300 leading-relaxed">24 小時內傳送名單至現場，法會當日如法回向並提供數位證明。</p>
                </div>
                <div>
                  <div className="text-[#D4AF37] font-bold mb-3 flex items-center gap-2 text-lg"><Check className="w-5 h-5"/> 交易安全</div>
                  <p className="text-base text-slate-300 leading-relaxed">串接綠界第三方金流，本站絕不保存敏感財務個資。</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

      </main>

      <StickyCta />
      <SiteFooter />
      <FloatingFb />
    </div>
  );
}