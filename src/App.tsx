/*
  DESIGN REMINDER (App)
  - Gilded Monastic Modernism: quiet luxury, black + gold, strong hierarchy
  - No quirky fonts; rely on Noto Sans/Serif TC
*/

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
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

function AppRouter() {
  return (
    <Router>
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
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <VercelScriptsLoader />
          <AnalyticsTracker />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
