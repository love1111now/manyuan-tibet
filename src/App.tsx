import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import LiveRegistrations from "@/components/LiveRegistrations";
import { useIsMobile } from "@/hooks/use-mobile";
import { Router, Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

// 追蹤元件（保留既有追蹤，另補 Vercel Analytics）
import AnalyticsTracker from "@/components/AnalyticsTracker";

import Home from "@/pages/Home";
import Puja from "@/pages/Puja";
import Pay from "@/pages/Pay";
import Proof from "@/pages/Proof";
import Sutra from "@/pages/Sutra";
import About from "@/pages/About";
import Terms from "@/pages/Terms";
import Wallpaper from "@/pages/Wallpaper";
import Topic from "@/pages/Topic";
import DeityPage from "@/pages/Deity";
import NotFound from "@/pages/NotFound";

function Redirect({ to }: { to: string }) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation(to);
  }, [setLocation, to]);

  return null;
}

function ScrollToTop() {
  const [loc] = useLocation();

  useEffect(() => {
    // 讓瀏覽器先有機會完成下一次 paint，再捲動（減少主執行緒阻塞，改善 INP）
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }, [loc]);

  return null;
}

function AppRouter() {
  return (
    <Router>
      {/* 抵達任何頁面都自動捲動至最上方 */}
      <ScrollToTop />

      {/* 追蹤器放在 Router 內部，監聽 location 變化 */}
      <AnalyticsTracker />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/puja" component={Puja} />
        <Route path="/pay" component={Pay} />
        <Route path="/proof" component={Proof} />
        <Route path="/sutra" component={Sutra} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />

        {/* 桌布下載：以 /wallpaper 為主，保留相容 */}
        <Route path="/wallpaper" component={Wallpaper} />
        <Route path="/wallpapers">{() => <Redirect to="/wallpaper" />}</Route>
        <Route path="/topics/wallpapers">{() => <Redirect to="/wallpaper" />}</Route>

        {/* 動態路由 */}
        <Route path="/topics/:slug">{(params) => <Topic slug={params.slug} />}</Route>
        <Route path="/deities/:deityKey">{(params) => <DeityPage deityKey={params.deityKey} />}</Route>

        {/* 快速轉址：五大本尊 */}
        <Route path="/yellow-dzambhala">{() => <Redirect to="/deities/yellow" />}</Route>
        <Route path="/mahashri-devi">{() => <Redirect to="/deities/mahashri" />}</Route>
        <Route path="/ganapati">{() => <Redirect to="/deities/ganapati" />}</Route>
        <Route path="/kurukulla">{() => <Redirect to="/deities/kurukulla" />}</Route>
        <Route path="/green-tara">{() => <Redirect to="/deities/green-tara" />}</Route>

        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default function App() {
  const isMobile = useIsMobile();

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position={isMobile ? "top-center" : "bottom-right"} />
          <LiveRegistrations />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
