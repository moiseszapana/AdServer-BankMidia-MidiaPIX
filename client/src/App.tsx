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

function Router() {
  return (
    <Switch>
      {/* Português */}
      <Route path={"/pt/?"} component={Home} />
      <Route path={"/pt/introducao"} component={Introducao} />
      <Route path={"/pt/anunciantes"} component={Anunciantes} />
      <Route path={"/pt/editores"} component={Editores} />
      <Route path={"/pt/api"} component={API} />
      <Route path={"/pt/api-tester"} component={APITester} />

      {/* English */}
      <Route path={"/en/?"} component={Home} />
      <Route path={"/en/introducao"} component={Introducao} />
      <Route path={"/en/anunciantes"} component={Anunciantes} />
      <Route path={"/en/editores"} component={Editores} />
      <Route path={"/en/api"} component={API} />
      <Route path={"/en/api-tester"} component={APITester} />

      {/* Español */}
      <Route path={"/es/?"} component={Home} />
      <Route path={"/es/introducao"} component={Introducao} />
      <Route path={"/es/anunciantes"} component={Anunciantes} />
      <Route path={"/es/editores"} component={Editores} />
      <Route path={"/es/api"} component={API} />
      <Route path={"/es/api-tester"} component={APITester} />

      {/* Redirect root to Portuguese */}
      <Route path={"/?"} component={Home} />

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
