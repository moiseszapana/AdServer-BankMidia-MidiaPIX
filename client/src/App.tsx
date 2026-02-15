import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/HomeMultilang";
import API from "./pages/API";
import APITester from "./pages/APITester";
import Introducao from "./pages/Introducao";
import Anunciantes from "./pages/Anunciantes";
import Editores from "./pages/Editores";


function Router() {
  return (
    <Switch>
      <Route path={"/?"} component={Home} />
      <Route path={"/introducao"} component={Introducao} />
      <Route path={"/anunciantes"} component={Anunciantes} />
      <Route path={"/editores"} component={Editores} />
      <Route path={"/api"} component={API} />
      <Route path={"/api-tester"} component={APITester} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}
function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
