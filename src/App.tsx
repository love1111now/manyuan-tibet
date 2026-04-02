import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Router, Route, Switch, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

// --- 這裡全部修正為「同層相對路徑」 ---
import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext"; // 請確認此資料夾是否存在，若報錯請改為 "./ThemeContext"

import AnalyticsTracker from "./AnalyticsTracker";
import VercelScriptsLoader from "./VercelScriptsLoader";
import LiveRegistrations from "./LiveRegistrations";

// 頁面組件（假設你的 pages 在 src/pages）
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

function ScrollToTop() {
  const [location] = useLocation();
  React.useEffect(() => {
    if (typeof window === "undefined") return;
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
          {/* 暫時移除 Toaster 和 TooltipProvider 以防 Module Not Found */}
          <VercelScriptsLoader />
          <AppRouter />
          <LiveRegistrations /> 
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}