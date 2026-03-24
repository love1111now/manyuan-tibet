import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";

import Home from "@/pages/Home";
import Puja from "@/pages/Puja";
import Pay from "@/pages/Pay";
import Proof from "@/pages/Proof";
import Sutra from "@/pages/Sutra";
import About from "@/pages/About";
import Terms from "@/pages/Terms";
import Topic from "@/pages/Topic";
import DeityPage from "@/pages/Deity";
import NotFound from "@/pages/NotFound";

function Redirect({ to }: { to: string }) {
  // wouter v3: setting location can be done via hash navigation by rendering <a> style.
  // We'll just render Home with a side-effectless redirect via window.location.hash.
  if (typeof window !== "undefined") {
    window.location.hash = `#${to}`;
  }
  return null;
}

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/puja" component={Puja} />
        <Route path="/pay" component={Pay} />
        <Route path="/proof" component={Proof} />
        <Route path="/sutra" component={Sutra} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />

        <Route path="/topics/:slug">{(params) => <Topic slug={params.slug} />}</Route>
        <Route path="/deities/:deityKey">{(params) => <DeityPage deityKey={params.deityKey} />}</Route>

        {/* Legacy routes */}
        <Route path="/yellow-dzambhala">{() => <Redirect to="/deities/yellow" />}</Route>
        <Route path="/mahashri-devi">{() => <Redirect to="/deities/mahashri" />}</Route>
        <Route path="/ganapati">{() => <Redirect to="/deities/ganapati" />}</Route>
        <Route path="/kurukulla">{() => <Redirect to="/deities/kurukulla" />}</Route>

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
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
