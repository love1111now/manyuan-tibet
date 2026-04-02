import React from "react";
import { HelmetProvider } from "react-helmet-async";
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
        <Route path="/deity/:key">{(params) => <Deity deityKey={params.key} />}</Route>
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
  return (
    <ErrorBoundary>
      <HelmetProvider>
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