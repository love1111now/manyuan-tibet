import React, { Suspense, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Router, Route, Switch, useLocation } from "wouter";

// --- 組件與上下文引入 ---
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import AnalyticsTracker from "./components/AnalyticsTracker";
import LiveRegistrations from "./components/LiveRegistrations";
import VercelScriptsLoader from "./components/VercelScriptsLoader";

// 頁面組件 - 採用 React.lazy 進行程式碼分割，優化 LCP 載入速度
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
const ExitIntent = React.lazy(() => import("./components/ExitIntent"));

// --- 型別防護網 ---
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

function isValidDeityKey(key: string | undefined): key is AppDeityKey {
  return !!key && VALID_DEITY_KEYS.includes(key as AppDeityKey);
}

/**
 * 🟢 Hash 自動校正器
 * 當使用者經由舊連結 (帶有 #) 進入時，自動修正為 History 網址
 */
function HashRedirector() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#/")) {
      const cleanPath = hash.replace("#/", "/");
      // 使用 replaceState 修正網址但不留下歷史紀錄，避免使用者回退時卡住
      window.history.replaceState(null, "", cleanPath);
      // 通知 wouter 網址已變動
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  }, []);
  return null;
}

/**
 * 強化的換頁自動置頂
 * 解決行動端切換路由時，捲軸卡在中間的問題
 */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 50);
    return () => clearTimeout(timer);
  }, [location]);
  return null;
}

function AppRouter() {
  return (
    <Router> {/* 🔴 絕對不要在這裡加上 hook={useHashLocation} */}
      <AnalyticsTracker />
      <HashRedirector />
      <ScrollToTop />

      <Suspense fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-t-2 border-primary animate-spin" />
        </div>
      }>
        <Switch>
          <Route path="/" component={Home} />
          
          {/* 神尊頁面：支援 /deity/yellow 格式 */}
          <Route path="/deity/:key">
            {(params) => {
              if (isValidDeityKey(params.key)) {
                return <Deity deityKey={params.key} />;
              }
              return <NotFound />;
            }}
          </Route>

          <Route path="/proof" component={Proof} />
          <Route path="/pay" component={Pay} />
          <Route path="/sutra" component={Sutra} />
          <Route path="/puja" component={Puja} />
          <Route path="/wallpaper" component={Wallpaper} />
          <Route path="/about" component={About} />
          <Route path="/terms" component={Terms} />
          
          {/* 文章專題路由 */}
          <Route path="/topics/:slug">
            {(params) => <Topic slug={params.slug} />}
          </Route>

          {/* 404 頁面 */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default function App() {
  // AEO 結構化資料：建立搜尋引擎信任感
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "滿願藏庫 (Zambala Tibetan)",
    "url": "https://zambala-tibetan.com.tw",
    "logo": "https://zambala-tibetan.com.tw/vite.svg",
    "description": "由台灣志工團隊維護的專屬祈福法事造冊系統。提供綠界 256-bit SSL 安全金流。",
    "location": { "@type": "Place", "name": "Taiwan" },
    "knowsAbout": ["Tibetan Buddhism", "Puja", "Spiritual Healing", "祈福法事", "點燈"]
  };

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(organizationSchema)}
          </script>
        </Helmet>

        <ThemeProvider defaultTheme="dark">
          <VercelScriptsLoader />
          <AppRouter />
          <LiveRegistrations />
          <Suspense fallback={null}>
            <ExitIntent />
          </Suspense>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}