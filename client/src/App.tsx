import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Introducao from "./pages/Introducao";
import Anunciantes from "./pages/Anunciantes";
import Editores from "./pages/Editores";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/introducao"} component={Introducao} />
      <Route path={"/anunciantes"} component={Anunciantes} />
      <Route path={"/editores"} component={Editores} />
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
