import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";

// Document Platform (existing functionality preserved)
import Index from "./pages/Index.tsx";
import Domaines from "./pages/Domaines.tsx";
import PackAutonomie from "./pages/PackAutonomie.tsx";
import Afrique from "./pages/Afrique.tsx";
import APropos from "./pages/APropos.tsx";
import Precommande from "./pages/Precommande.tsx";
import NotFound from "./pages/NotFound.tsx";

// Platform Selector
import PlatformSelector from "./pages/PlatformSelector.tsx";

// AquaVent PhytoTech™ (lazy-loaded for code splitting)
const AquaVentLanding = lazy(() => import("./products/aquevent/pages/Landing.tsx"));
const AquaVentProduct = lazy(() => import("./products/aquevent/pages/Product.tsx"));
const AquaVentScience = lazy(() => import("./products/aquevent/pages/Science.tsx"));
const AquaVentBusiness = lazy(() => import("./products/aquevent/pages/Business.tsx"));
const AquaVentAcademy = lazy(() => import("./products/aquevent/pages/Academy.tsx"));
const AquaVentCommunity = lazy(() => import("./products/aquevent/pages/Community.tsx"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full border-3 border-[#8B2C5A] border-t-transparent animate-spin" />
      <span className="text-sm text-gray-400">Chargement...</span>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Platform Selector */}
              <Route path="/platform" element={<PlatformSelector />} />

              {/* AquaVent PhytoTech™ Routes */}
              <Route path="/aquevent" element={<AquaVentLanding />} />
              <Route path="/aquevent/product" element={<AquaVentProduct />} />
              <Route path="/aquevent/science" element={<AquaVentScience />} />
              <Route path="/aquevent/business" element={<AquaVentBusiness />} />
              <Route path="/aquevent/academy" element={<AquaVentAcademy />} />
              <Route path="/aquevent/community" element={<AquaVentCommunity />} />

              {/* Document Platform (existing functionality preserved) */}
              <Route path="/" element={<Index />} />
              <Route path="/domaines" element={<Domaines />} />
              <Route path="/pack-autonomie" element={<PackAutonomie />} />
              <Route path="/afrique" element={<Afrique />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/precommande" element={<Precommande />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
