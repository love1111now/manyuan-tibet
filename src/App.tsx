import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";

import Home from "@/pages/Home";
import Puja from "@/pages/Puja";
import LiveRegistrations from "@/components/LiveRegistrations";
import Sutra from "@/pages/Sutra";
import Proof from "@/pages/Proof";
import About from "@/pages/About";
import Terms from "@/pages/Terms";
import Pay from "@/pages/Pay";
import NotFound from "@/pages/NotFound";
import DeityPage from "@/pages/Deity";
import Topic from "@/pages/Topic";
import { DEITIES } from "@/lib/siteData";

// Use hash-based routing (/#/) to support opening index.html directly via file:// protocol
function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/puja" component={Puja} />
        <Route path="/sutra" component={Sutra} />
        <Route path="/proof" component={Proof} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />
        <Route path="/pay" component={Pay} />

        <Route path="/deities/:key">{(p) => <DeityPage deityKey={p.key} />}</Route>
        <Route path="/topics/:slug">{(p) => <Topic slug={p.slug} />}</Route>

        {/* legacy routes (external links compatibility) */}
        {DEITIES.map((d) => (
          <Route key={d.legacyRoute} path={d.legacyRoute}>
            <DeityPage deityKey={d.key} />
          </Route>
        ))}

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <LiveRegistrations />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
