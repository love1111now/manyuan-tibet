/*
Design philosophy: Neo-thangka noir (Deep Immersion Engineering)
- Route Fix: Switched from react-router-dom to wouter to match package.json.
- Prop Alignment: Component now correctly accepts `deityKey` passed from App.tsx route render function, bypassing `params.id` undefined error.
- Data Fix: Centralized entity sourcing from @/data/deities.
- UX: Implemented Dynamic Theme Injection based on deity metadata.
- 100% Unabbreviated Production Ready Code.
*/

import React, { useEffect } from "react";
import { useLocation, Redirect } from "wouter";
import { Helmet } from "react-helmet-async";

// 🟢 資料來源精準對位
import { DEITY_BY_KEY } from "@/data/deities"; 
import type { DeityKey } from "@/lib/siteData";

// OG 圖片（神明頁共用）
import ogDeityImg from "@/assets/visuals/seo/image_w5504_h3072_page-deity-1.webp";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StickyCta from "@/components/StickyCta";
import FloatingFb from "@/components/FloatingFb";

// 子組件
import DeityHero from "../components/deity/DeityHero";
import DeityDiagnosis from "../components/deity/DeityDiagnosis";
import DeityRitualAndEvidence from "../components/deity/DeityRitualAndEvidence";
import DeityPlanSelection from "../components/deity/DeityPlanSelection";
import DeityFaqAndCrossSell from "../components/deity/DeityFaqAndCrossSell";

// 🚨 關鍵修正：定義 Props，承接 App.tsx 傳遞過來的 deityKey
interface DeityPageProps {
  deityKey: DeityKey;
}

/**
 * 本尊詳情頁主組件
 * 透過 App.tsx 傳入的 deityKey 動態加載對應本尊資料庫
 */
const DeityPage: React.FC<DeityPageProps> = ({ deityKey }) => {
  const [location] = useLocation();

  // 1. 定位本尊資料實體 (直接使用傳入的 deityKey)
  const d = deityKey ? DEITY_BY_KEY[deityKey] : null;

  // 2. 切換本尊時自動置頂，確保用戶體驗一致性
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // 3. 安全守護：若 URL 的 key 不存在於資料庫，立即導回首頁防止頁面崩潰
  if (!d) {
    return <Redirect to="/" replace />;
  }

  // FB Pixel ViewContent — 廣告再行銷池建立的關鍵事件
  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = setTimeout(() => {
      window.fbq?.("track", "ViewContent", {
        content_ids: [d.key],
        content_name: d.name,
        content_type: "product",
        value: d.plans?.find((p) => p.hot)?.price ?? d.plans?.[0]?.price ?? 0,
        currency: "TWD",
      });
      window.gtag?.("event", "view_item", {
        currency: "TWD",
        value: d.plans?.find((p) => p.hot)?.price ?? 0,
        items: [{ item_id: d.key, item_name: d.name, item_category: d.primaryIntent }],
      });
    }, 800);
    return () => clearTimeout(timer);
  }, [d.key]);

  return (
    <div 
      className="min-h-screen font-sans antialiased text-white selection:bg-white/20 transition-colors duration-700 ease-in-out"
      style={
        {
          backgroundColor: d.themeColor.bg,
          "--deity-accent": d.themeColor.accent,
        } as React.CSSProperties
      }
    >
      {/* OG / SEO meta — 讓神明頁分享出去顯示正確大圖 */}
      <Helmet>
        <title>{d.name}｜{d.primaryIntent}｜滿願藏庫</title>
        <meta name="description" content={`${d.heroKicker}。${d.promise.slice(0, 80)}…`} />
        <meta property="og:title" content={`${d.name}｜${d.primaryIntent}｜滿願藏庫`} />
        <meta property="og:description" content={d.heroKicker} />
        <meta property="og:image" content={ogDeityImg} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogDeityImg} />
      </Helmet>

      {/* 導覽列 */}
      <SiteHeader />
      
      <main className="relative pb-24 overflow-x-hidden">
        {/* L1: 視覺震撼區 - 展現本尊威德與核心承諾 */}
        <DeityHero d={d} />
        
        <div className="relative z-10 -mt-12 space-y-20 md:space-y-32">
          
          {/* L2: 痛點對位區 - 診斷用戶當下的生命困境 
              (調整 scroll-mt-32 確保點擊錨點時不會被 Header 擋住) */}
          <section id="diagnosis" className="scroll-mt-32">
            <DeityDiagnosis d={d} />
          </section>

          {/* L3: 儀軌實證區 - 展示西藏壇城現場與師兄姐實修證據 
              (調整 scroll-mt-32) */}
          <section id="evidence" className="scroll-mt-32">
            <DeityRitualAndEvidence d={d} />
          </section>

          {/* L4: 方案選擇區 - 透明定價與安全登記入口 
              (調整 scroll-mt-32，解決按鈕下滑未到位問題) */}
          <section id="plans" className="scroll-mt-32">
            <DeityPlanSelection d={d} />
          </section>

          {/* L5: 顧問釋疑與交叉對位 - 處理反對意見並引導至其他可能需要的本尊 */}
          <section id="cross-sell" className="pb-20">
            <DeityFaqAndCrossSell d={d} />
          </section>
          
        </div>

        {/* 裝飾性元素：藏式邊緣修飾 */}
        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-50 pointer-events-none" />
      </main>

      {/* 功能性組件 */}
      <SiteFooter />
      <StickyCta />
      <FloatingFb />
    </div>
  );
};

export default DeityPage;