import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async"; // 🟢 引入 Helmet
import { Router, Route, Switch, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

// --- 關鍵修正：指向正確的 components 資料夾 ---
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import AnalyticsTracker from "./components/AnalyticsTracker";
import VercelScriptsLoader from "./components/VercelScriptsLoader";
import LiveRegistrations from "./components/LiveRegistrations";

// 頁面組件
import Home from "./pages/Home";
import Deity from "./pages/Deity";
import Proof from "./pages/Proof";
import Pay from "./pages/Pay";
import Sutra from "./pages/Sutra";
import Puja from "./pages/Puja";
import Topic from "./pages/Topic";
import Wallpaper from "./pages/Wallpaper";
import About from "./pages/About";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

/**
 * 強化的 ScrollToTop
 * 確保在手機端 Hash Router 換頁時，頁面能確實回到最上方
 */
function ScrollToTop() {
  const [location] = useLocation();

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    
    // 使用 100ms 延遲以確保手機瀏覽器完成渲染後才捲動
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <AnalyticsTracker />
      <ScrollToTop />
      
      <Switch>
        <Route path="/" component={Home} />
        {/* 🟢 唯一修改點：加上 as any 繞過嚴格型別檢查，完美對接 7 尊神明設定檔 */}
        <Route path="/deity/:key">{(params) => <Deity deityKey={params.key as any} />}</Route>
        <Route path="/proof" component={Proof} />
        <Route path="/pay" component={Pay} />
        <Route path="/sutra" component={Sutra} />
        <Route path="/puja" component={Puja} />
        <Route path="/wallpaper" component={Wallpaper} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />
        <Route path="/topics/:slug">{(params) => <Topic slug={params.slug} />}</Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default function App() {
  // 🟢 AI SEO (AEO) 核心晶片：全站 E-E-A-T 信任指標與組織宣告
  // 這段 JSON-LD 對人類隱形，但會被 Google 爬蟲與 AI 優先抓取
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "滿願藏庫 (Zambala Tibetan)",
    "url": "https://zambala-tibetan.com.tw",
    "description": "由台灣不支薪志工團隊維護的專屬祈福法事造冊系統。堅持因果透明、不造神，提供綠界 256-bit SSL 安全加密金流，護持金全數用於西藏壇城莊嚴供養。",
    "location": {
      "@type": "Place",
      "name": "Taiwan"
    },
    // 告訴 AI 我們是這個領域的專家，強化關聯性
    "knowsAbout": ["Tibetan Buddhism", "Puja", "Spiritual Healing", "祈福法事", "點燈", "煙供", "除障"]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "滿願藏庫",
    "alternateName": "Zambala Tibetan",
    "url": "https://zambala-tibetan.com.tw"
  };

  return (
    <ErrorBoundary>
      <HelmetProvider>
        {/* 🟢 將結構化資料注入到全站的 Head 中 */}
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        </Helmet>

        <ThemeProvider defaultTheme="dark">
          {/* 注意：已移除 Toaster 和 TooltipProvider。
            LiveRegistrations 現在會使用自己內部的 UI 顯示通知，不依賴外部套件。
          */}
          <VercelScriptsLoader />
          <AppRouter />
          <LiveRegistrations /> 
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}