import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";

import Home from "@/pages/Home";
import Puja from "@/pages/Puja";
import Pay from "@/pages/Pay";
import Deity from "@/pages/Deity";
import Sutra from "@/pages/Sutra";
import About from "@/pages/About";
import Proof from "@/pages/Proof";
import Terms from "@/pages/Terms";
import Topic from "@/pages/Topic";
import NotFound from "@/pages/NotFound";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        {/* 某些靜態環境可能以 /index.html 開啟 */}
        <Route path="/index.html" component={Home} />

        <Route path="/puja" component={Puja} />
        <Route path="/pay" component={Pay} />

        <Route path="/deities/:key">{(p) => <Deity deityKey={p.key} />}</Route>

        <Route path="/sutra" component={Sutra} />
        <Route path="/about" component={About} />
        <Route path="/proof" component={Proof} />
        <Route path="/terms" component={Terms} />

        <Route path="/topics/:slug">{(p) => <Topic slug={p.slug} />}</Route>

        <Route path="/yellow-dzambhala">{() => <Deity deityKey="yellow" />}</Route>
        <Route path="/mahashri-devi">{() => <Deity deityKey="mahashri" />}</Route>
        <Route path="/ganapati">{() => <Deity deityKey="ganapati" />}</Route>
        <Route path="/kurukulla">{() => <Deity deityKey="kurukulla" />}</Route>

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <HelmetProvider>
          <TooltipProvider>
            <Toaster />
            <AppRouter />
          </TooltipProvider>
        </HelmetProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
