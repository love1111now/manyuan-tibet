import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter"; // 移除未使用的 useLocation
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";

import AnalyticsTracker from "@/components/AnalyticsTracker";
import VercelScriptsLoader from "@/components/VercelScriptsLoader";
import LiveRegistrations from "@/components/LiveRegistrations"; // 建議加入，提升信任感

import Home from "@/pages/Home";
import Deity from "@/pages/Deity";
import Proof from "@/pages/Proof";
import Pay from "@/pages/Pay";
import Sutra from "@/pages/Sutra";
import Puja from "@/pages/Puja";
import Topic from "@/pages/Topic";
import Wallpaper from "@/pages/Wallpaper";
import About from "@/pages/About";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      {/* 追蹤器已內含 scrollTo(0,0)，不需額外的 ScrollToTop 組件 */}
      <AnalyticsTracker />
      
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
        <ThemeProvider>
          <TooltipProvider>
            <AppRouter />
            <Toaster position="top-center" />
            <VercelScriptsLoader />
            <LiveRegistrations />
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}