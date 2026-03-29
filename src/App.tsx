import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import LiveRegistrations from "@/components/LiveRegistrations";
import { useIsMobile } from "@/hooks/use-mobile";
import { Router, Route, Switch, useLocation } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";

// 👇 1. 引入追蹤元件
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

// ✅ 修正：加上 useEffect，完美避開 React 無限渲染導致的白畫面
function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.hash = `#${to}`;
  }, [to]);
  return null;
}

function ScrollToTop() {
  const [loc] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loc]);

  return null;
}

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      {/* 抵達任何頁面都自動捲動至最上方 */}
      <ScrollToTop />

      {/* 將追蹤器放在 Router 內部 */}
      <AnalyticsTracker /> 
      
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/puja" component={Puja} />
        <Route path="/pay" component={Pay} />
        <Route path="/proof" component={Proof} />
        <Route path="/sutra" component={Sutra} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />
        
        {/* ✅ 修正：將桌布路由加上 s，以對接首頁的按鈕連結 */}
        <Route path="/wallpapers" component={Wallpaper} />
        <Route path="/wallpaper">{() => <Redirect to="/wallpapers" />}</Route>
        <Route path="/topics/wallpapers">{() => <Redirect to="/wallpapers" />}</Route>

        <Route path="/topics/:slug">{(params) => <Topic slug={params.slug} />}</Route>
        <Route path="/deities/:deityKey">{(params) => <DeityPage deityKey={params.deityKey} />}</Route>

        {/* 快速轉址：五大本尊 */}
        <Route path="/yellow-dzambhala">{() => <Redirect to="/deities/yellow" />}</Route>
        <Route path="/mahashri-devi">{() => <Redirect to="/deities/mahashri" />}</Route>
        <Route path="/ganapati">{() => <Redirect to="/deities/ganapati" />}</Route>
        <Route path="/kurukulla">{() => <Redirect to="/deities/kurukulla" />}</Route>
        {/* ✅ 補上綠度母的快速轉址 */}
        <Route path="/green-tara">{() => <Redirect to="/deities/green-tara" />}</Route>

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