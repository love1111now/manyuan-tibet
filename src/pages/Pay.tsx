"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ShieldCheck,
  Info,
  CheckCircle2,
  Sparkles,
  Heart,
  Flame,
  Droplets,
  Wind,
  Sparkle,
  Gem,
  Flower2,
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// 引入全站元件
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Seo from "@/components/Seo";

// GA4 追蹤函數
const trackPayClick = (planName: string, price: string, deityName: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "begin_checkout", {
      currency: "TWD",
      value: parseInt(price),
      items: [{
        item_name: `${deityName} - ${planName}`,
        price: price,
        quantity: 1
      }]
    });
  }
};

// ----------------------------------------------------------------------
// 1. 資料定義：如法對位藏傳佛教與經典語境
// ----------------------------------------------------------------------
interface Plan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  isPopular?: boolean;
  tag?: string;
  icon: React.ReactNode;
}

const plans: Record<string, Plan[]> = {
  yellow: [
    { id: 'y490', name: '黃財神｜智慧明燈', price: '490', description: '點燃智慧與福德之光。以布施心開啟善緣，破除求財路上的無明與焦慮。', features: ['如法供燈祈福', '對治慳吝業障'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4W0', icon: <Flame className="w-4 h-4 text-amber-500" /> },
    { id: 'y980', name: '黃財神｜如意水供', price: '980', description: '清淨過去的匱乏與耗損。祈願資糧如八功德水般盈滿，事業順遂。', features: ['清淨水供儀軌', '增益福德回向'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4XF', isPopular: true, tag: '奠定資糧首選', icon: <Droplets className="w-5 h-5 text-amber-500" /> },
    { id: 'y1860', name: '黃財神｜除障香供', price: '1860', description: '淨化事業擴張與財務決策上的違緣障礙，穩固福報與增益磁場。', features: ['淨化財務違緣', '專屬名單回向'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4Y3', icon: <Wind className="w-5 h-5 text-amber-500" /> },
    { id: 'y3680', name: '黃財神｜增益薈供', price: '3680', description: '最廣大的福德供養。總集資糧，祈請大悲護念，成就世間與出世間之圓滿。', features: ['大乘福德薈供', '數位回向證明'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4Z5', icon: <Gem className="w-5 h-5 text-[#D4AF37]" /> }
  ],
  mahashri: [
    { id: 'm490', name: '大吉祥天女｜吉祥明燈', price: '490', description: '依《金光明經》之願力，照破貧窮幽暗，迎來吉祥與安隱之光。', features: ['供燈祈福儀軌', '迎請吉祥安隱'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4ND', icon: <Flame className="w-4 h-4 text-blue-400" /> },
    { id: 'm980', name: '大吉祥天女｜豐饒水供', price: '980', description: '祈請天女賜予財寶豐饒。洗滌耗損福報之業，令生活資具無所匱乏。', features: ['清淨八功德水', '止息損耗惡緣'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4PD', isPopular: true, tag: '豐足護持首選', icon: <Droplets className="w-5 h-5 text-blue-400" /> },
    { id: 'm1860', name: '大吉祥天女｜清淨香供', price: '1860', description: '以清淨妙香化解生活中的生存危機與匱乏感，安立於豐足磁場之中。', features: ['淨化貧苦業力', '專屬名單回向'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4Q7', icon: <Wind className="w-5 h-5 text-slate-400" /> },
    { id: 'm3680', name: '大吉祥天女｜滿願薈供', price: '3680', description: '仰仗天女於佛前之大悲誓願，廣聚善緣福德，護佑家宅平安、所求願滿。', features: ['豐饒大薈供', '數位回向證明'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4V8', icon: <Sparkle className="w-5 h-5 text-slate-200" /> }
  ],
  ganapati: [
    { id: 'g490', name: '象頭財神｜清明燈供', price: '490', description: '照破愚痴與無明迷霧，開啟事業決策上的清明智慧。', features: ['開啟智慧直覺', '如法供燈祈福'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4R5', icon: <Flame className="w-4 h-4 text-slate-400" /> },
    { id: 'g980', name: '象頭財神｜平息水供', price: '980', description: '洗滌身心焦慮。平息職場與事業推展上的外在干擾與內在紛擾。', features: ['平息事業違緣', '清淨水供儀軌'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4S8', isPopular: true, tag: '破除迷惘必備', icon: <Droplets className="w-5 h-5 text-slate-400" /> },
    { id: 'g1860', name: '象頭財神｜破障香供', price: '1860', description: '強力掃除前行道路上之外、內、密重重違緣，確保專案與談判順利成辦。', features: ['強力除障淨化', '專屬名單回向'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4T1', icon: <Wind className="w-5 h-5 text-slate-300" /> },
    { id: 'g3680', name: '象頭財神｜成就薈供', price: '3680', description: '總集權勢與威德加持。無礙成辦一切世間善業，於競爭中掌握自在主導。', features: ['無礙成就薈供', '數位回向證明'], link: 'https://cart.cashier.ecpay.com.tw/qp/z4U2', icon: <Gem className="w-5 h-5 text-[#D4AF37]" /> }
  ],
  kurukulla: [
    { id: 'k490', name: '作明佛母｜懷愛明燈', price: '490', description: '點燃慈悲與懷攝之光。化解人際關係中的冷戰、對立與無明疏離。', features: ['照亮善緣路徑', '化解人際對立'], link: 'https://cart.cashier.ecpay.com.tw/qp/z5a8', icon: <Flame className="w-4 h-4 text-pink-400" /> },
    { id: 'k980', name: '作明佛母｜攝受花供', price: '980', description: '以莊嚴鮮花供養，增長自身威儀與魅力磁場，修復並圓滿愛情與情感善緣。', features: ['懷攝磁場啟動', '圓滿情感善緣'], link: 'https://cart.cashier.ecpay.com.tw/qp/z5bF', isPopular: true, tag: '關係圓滿首選', icon: <Flower2 className="w-5 h-5 text-pink-500" /> },
    { id: 'k1860', name: '作明佛母｜淨緣香供', price: '1860', description: '淨化情執與情感中的負面惡緣。轉化煩惱，為長期的孤立感帶來溫溫暖接應。', features: ['淨化情執惡緣', '專屬名單回向'], link: 'https://cart.cashier.ecpay.com.tw/qp/z5c3', icon: <Wind className="w-5 h-5 text-pink-500" /> },
    { id: 'k3680', name: '作明佛母｜自在薈供', price: '3680', description: '成就蓮花部懷業總集。令眾生見者歡喜，情感、人脈與威望皆得大自在。', features: ['懷攝大薈供', '數位回向證明'], link: 'https://cart.cashier.ecpay.com.tw/qp/z5d7', icon: <Heart className="w-5 h-5 text-pink-600" /> }
  ],
  tara: [
    { id: 't680', name: '綠度母｜慈悲明燈', price: '680', description: '度母救八難。祈請度母迅疾加持，照亮諸事晦暗，遠離突發之怖畏與焦慮。', features: ['救苦除難回向', '度母智慧加持'], link: 'https://cart.cashier.ecpay.com.tw/qp/zEJ1', icon: <Flame className="w-5 h-5 text-green-400" /> },
    { id: 't1280', name: '綠度母｜救護薈供', price: '1280', description: '仰仗大悲度母誓願，度脫一切苦厄。祈願生活平安、諸事順遂、所作皆辦。', features: ['無畏救護薈供', '數位回向證明'], link: 'https://cart.cashier.ecpay.com.tw/qp/zED7', isPopular: true, tag: '全方位守護', icon: <Sparkles className="w-6 h-6 text-green-500" /> }
  ]
};

// ----------------------------------------------------------------------
// 2. UI 組件：方案卡片
// ----------------------------------------------------------------------
const PlanCard = ({ plan, deityName }: { plan: Plan; deityName: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-500 group ${
      plan.isPopular 
        ? 'border-amber-500/50 bg-amber-500/10 shadow-xl' 
        : 'border-white/10 bg-white/[0.03] hover:border-white/20'
    }`}
  >
    {plan.isPopular && (
      <div className="absolute -top-3 left-8 px-4 py-1 bg-amber-500 text-black text-[10px] font-bold rounded-full tracking-widest uppercase shadow-lg">
        POPULAR
      </div>
    )}
    
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 rounded-2xl bg-black border border-white/10 group-hover:border-amber-500/50 transition-colors">
        {plan.icon}
      </div>
      {plan.tag && (
        <span className="text-[11px] text-amber-500 font-bold tracking-wider flex items-center gap-1.5 uppercase">
          <Sparkles className="w-3 h-3" /> {plan.tag}
        </span>
      )}
    </div>

    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{plan.name}</h3>
    <p className="text-sm text-slate-400 mb-8 leading-relaxed flex-grow font-normal">
      {plan.description}
    </p>

    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-sm text-amber-500/80 font-bold">NT$</span>
      <span className="text-4xl font-bold text-amber-500 tracking-tighter">{plan.price}</span>
    </div>

    <ul className="space-y-4 mb-10">
      {plan.features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3 text-xs text-slate-300 font-medium">
          <CheckCircle2 className="w-4 h-4 text-amber-500/60 shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    {/* 按鈕樣式優化：確保深色背景下清晰 */}
    <Button 
      className={`w-full mt-auto py-7 text-sm font-bold tracking-widest uppercase group/btn transition-all duration-300 ${
        plan.isPopular ? 'bg-amber-500 text-black hover:bg-amber-400' : 'bg-white text-black hover:bg-slate-200'
      }`}
      onClick={() => {
        trackPayClick(plan.name, plan.price, deityName);
        window.open(plan.link, '_blank');
      }}
    >
      立即預約護持 
      <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
    </Button>
  </motion.div>
);

const Pay = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentHash = window.location.hash;
      const targetMatch = currentHash.match(/\?target=([^&]+)/);
      const targetId = targetMatch ? targetMatch[1] : null;

      if (targetId) {
        const timer = setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            element.classList.add('animate-gold-pulse');
          }
        }, 400);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-amber-500/30 overflow-x-hidden">
      <Seo title="預約您的資糧路徑｜滿願藏庫" path="/pay" />
      
      {/* ✅ 補回頂部導覽列 */}
      <SiteHeader />

      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-40 pb-32">
        <header className="text-center mb-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(245,158,11,0.05)_0%,transparent_70%)] -z-10" />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter"
          >
            預約您的<span className="text-[#D4AF37] italic font-light">資糧路徑</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-medium leading-loose">
            依止佛法經典與藏密續法訊如法彙整。付款完成後 24 小時內，<br className="hidden md:block" />
            名單將由法會現場進行安排吉日如法回向。
          </p>
        </header>

        <div className="space-y-48">
          {Object.entries(plans).map(([category, categoryPlans]) => {
            const deityNames: Record<string, string> = {
              yellow: '黃財神', mahashri: '大吉祥天女', ganapati: '象頭財神', kurukulla: '作明佛母', tara: '綠度母'
            };
            return (
              <section key={category} id={category} className="scroll-mt-32">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#D4AF37] tracking-widest whitespace-nowrap uppercase">
                    {category === 'yellow' && '黃財神｜廣修布施・積聚資糧'}
                    {category === 'mahashri' && '大吉祥天女｜豐饒吉祥・資具無缺'}
                    {category === 'ganapati' && '象頭財神｜平息違緣・無礙成就'}
                    {category === 'kurukulla' && '作明佛母｜懷攝善緣・情感圓滿'}
                    {category === 'tara' && '綠度母｜迅疾大悲・遠離怖畏'}
                  </h2>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-500/40 via-amber-500/10 to-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                  {categoryPlans.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} deityName={deityNames[category]} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* 信任 Footer 區塊 */}
        <footer className="mt-48 max-w-4xl mx-auto">
          <div className="p-10 md:p-16 rounded-[3rem] border border-white/10 bg-[#0A0A0A] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.03),transparent_50%)] pointer-events-none" />
            
            <ShieldCheck className="w-20 h-20 text-amber-500/20 mx-auto mb-10" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">護持如法性與安全性說明</h3>
            <p className="text-base text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              滿願藏庫致力於守護每一份清淨發心。所有金流皆透過「綠界科技 ECPay」第三方平台處理，本站不在站內儲存任何敏感財務個資。
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="px-10 py-7 bg-transparent border-white/20 hover:bg-white/5 text-slate-200 text-sm font-bold tracking-widest uppercase">
                    <Info className="w-5 h-5 mr-3" /> 了解回向流程
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#0A0A0A] border-white/10 text-slate-300">
                  <DialogHeader className="mb-6 border-b border-white/10 pb-6">
                    <DialogTitle className="text-white text-xl font-bold tracking-widest">如法回向流程</DialogTitle>
                    <DialogDescription className="text-slate-500 mt-2 font-medium">您的發心將被妥善安置於密壇</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-8 py-4 text-base font-normal leading-loose">
                    <div className="flex gap-5">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center font-black text-sm shrink-0 border border-amber-500/30">1</div>
                      <p>完成支付後，系統自動記錄您的護持項目與名單。</p>
                    </div>
                    <div className="flex gap-5">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center font-black text-sm shrink-0 border border-amber-500/30">2</div>
                      <p>名單將於 24 小時內傳送至法會現場，由工作人員依供法類別如法彙整。</p>
                    </div>
                    <div className="flex gap-5">
                      <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center font-black text-sm shrink-0 border border-amber-500/30">3</div>
                      <p>法師於壇城前進行名字如法迴向，系統隨後發送數位證明，圓滿此功德緣起。</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button 
                variant="link" 
                className="text-slate-500 text-xs tracking-widest uppercase hover:text-amber-500 transition-all font-bold" 
                onClick={() => window.open('/terms', '_blank')}
              >
                Terms & Privacy Policy
              </Button>
            </div>
          </div>

          <div className="mt-20 text-center opacity-40 px-4">
            <p className="text-[11px] text-slate-500 uppercase tracking-[0.3em] leading-loose font-bold">
              Dharma Practice Disclaimer: No medical or financial guarantees. <br/>
              滿願藏庫致力於正信傳承。所有護持皆基於發心，不做立即見效與保證獲利等承諾。
            </p>
          </div>
        </footer>
      </div>

      <SiteFooter />

      <style>{`
        @keyframes gold-pulse {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); border-color: rgba(212, 175, 55, 0.8); background: rgba(212, 175, 55, 0.05); }
          70% { box-shadow: 0 0 0 40px rgba(212, 175, 55, 0); border-color: rgba(212, 175, 55, 0.2); }
          100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
        .animate-gold-pulse {
          animation: gold-pulse 2.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Pay;