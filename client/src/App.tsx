import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/HomeMultilang";
import API from "./pages/API";
import APITester from "./pages/APITester";
import Introducao from "./pages/Introducao";
import Anunciantes from "./pages/Anunciantes";
import Editores from "./pages/Editores";
import Conformidade from "./pages/Conformidade";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      {/* Português */}
      <Route path={"/?"} component={Home} />
      <Route path={"/introducao"} component={Introducao} />
      <Route path={"/anunciantes"} component={Anunciantes} />
      <Route path={"/editores"} component={Editores} />
      <Route path={"/api"} component={API} />
      <Route path={"/api-tester"} component={APITester} />
      <Route path={"/conformidade"} component={Conformidade} />

      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
