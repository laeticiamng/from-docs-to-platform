import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Domaines from "./pages/Domaines.tsx";
import PackAutonomie from "./pages/PackAutonomie.tsx";
import Afrique from "./pages/Afrique.tsx";
import APropos from "./pages/APropos.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/domaines" element={<Domaines />} />
          <Route path="/pack-autonomie" element={<PackAutonomie />} />
          <Route path="/afrique" element={<Afrique />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
