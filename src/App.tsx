import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async"; // 🟢 引入 Helmet
import { Router, Route, Switch, useLocation } from "wouter";

// --- 關鍵修正：指向正確的 components 資料夾 ---
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import AnalyticsTracker from "./components/AnalyticsTracker";
import VercelScriptsLoader from "./components/VercelScriptsLoader";
import LiveRegistrations from "./components/LiveRegistrations";

// 頁面組件 — 以 React.lazy 做路由層程式碼分割
// 每個頁面只在首次導航時才載入，初始 bundle 可縮減約 60%
const Home      = React.lazy(() => import("./pages/Home"));
const Deity     = React.lazy(() => import("./pages/Deity"));
const Proof     = React.lazy(() => import("./pages/Proof"));
const Pay       = React.lazy(() => import("./pages/Pay"));
const Sutra     = React.lazy(() => import("./pages/Sutra"));
const Puja      = React.lazy(() => import("./pages/Puja"));
const Topic     = React.lazy(() => import("./pages/Topic"));
const Wallpaper = React.lazy(() => import("./pages/Wallpaper"));
const About     = React.lazy(() => import("./pages/About"));
const Terms     = React.lazy(() => import("./pages/Terms"));
const NotFound  = React.lazy(() => import("./pages/NotFound"));

// 🟢 建立強型別防護網：定義所有合法的神尊 Key
const VALID_DEITY_KEYS = [
  "yellow", 
  "mahashri", 
  "ganapati", 
  "kurukulla", 
  "medicine-buddha", 
  "green-tara", 
  "padmasambhava"
] as const;

export type AppDeityKey = typeof VALID_DEITY_KEYS[number];

// 🟢 型別守衛 (Type Guard)：在執行期驗證參數是否合法
function isValidDeityKey(key: string): key is AppDeityKey {
  return VALID_DEITY_KEYS.includes(key as AppDeityKey);
}

/**
 * 強化的 ScrollToTop
 * 確保在手機端 History Router 換頁時，頁面能確實回到最上方
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
    <Router>
      <AnalyticsTracker />
      <ScrollToTop />

      {/* Suspense fallback：頁面切換時的過渡畫面 */}
      <React.Suspense fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" aria-label="載入中" />
        </div>
      }>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* 🟢 徹底消滅 as any！加上嚴格的型別與路由校驗 */}
        <Route path="/deity/:key">
          {(params) => {
            // 防護網：若無參數或參數不是合法的神尊 Key，導向 NotFound 避免崩潰
            if (!params.key || !isValidDeityKey(params.key)) {
              return <NotFound />;
            }
            
            // 通過上方檢查後，TypeScript 已經完全確信 params.key 是合法的神尊型別
            return <Deity deityKey={params.key} />;
          }}
        </Route>

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
      </React.Suspense>
    </Router>
  );
}

export default function App() {
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
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        </Helmet>

        <ThemeProvider defaultTheme="dark">
          <VercelScriptsLoader />
          <AppRouter />
          <LiveRegistrations /> 
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}