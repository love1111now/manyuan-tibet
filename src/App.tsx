/*
  DESIGN REMINDER (App)
  - Gilded Monastic Modernism: quiet luxury, black + gold, strong hierarchy
  - No quirky fonts; rely on Noto Sans/Serif TC
*/

import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";

import AnalyticsTracker from "@/components/AnalyticsTracker";
import VercelScriptsLoader from "@/components/VercelScriptsLoader";

import Home from "@/pages/Home";
import Deity from "@/pages/Deity";
import Proof from "@/pages/Proof";
import Pay from "@/pages/Pay";
import Sutra from "@/pages/Sutra";
import NotFound from "@/pages/NotFound";

// 強化的 ScrollToTop：專門對付 Hash Router 的捲動問題
function ScrollToTop() {
  const [location] = useLocation();

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    
    // 使用 setTimeout(..., 0) 讓捲動指令排在瀏覽器原生渲染與 Hash 定位之後執行
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      {/* 追蹤器與置頂器都必須放在 Router 內部，才能抓到 location 變化 */}
      <AnalyticsTracker />
      <ScrollToTop />
      
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/deity/:key">{(params) => <Deity deityKey={params.key} />}</Route>
        <Route path="/proof" component={Proof} />
        <Route path="/pay" component={Pay} />
        <Route path="/sutra" component={Sutra} />
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
          <TooltipProvider>
            <Toaster />
            <VercelScriptsLoader />
            <AppRouter />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}