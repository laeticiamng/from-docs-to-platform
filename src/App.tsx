import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import ErrorBoundary from "@/components/ErrorBoundary";
import RequireAdmin from "@/components/RequireAdmin";

// Document Platform (existing functionality preserved)
import Index from "./pages/Index.tsx";
import Domaines from "./pages/Domaines.tsx";
import PackAutonomie from "./pages/PackAutonomie.tsx";
import Afrique from "./pages/Afrique.tsx";
import APropos from "./pages/APropos.tsx";
import Precommande from "./pages/Precommande.tsx";
import Contact from "./pages/Contact.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import CGV from "./pages/CGV.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import NotFound from "./pages/NotFound.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Profile from "./pages/Profile.tsx";
import Admin from "./pages/Admin.tsx";

// Platform Selector
import PlatformSelector from "./pages/PlatformSelector.tsx";

// AquaVent PhytoTech UNLIMITED™ (lazy-loaded for code splitting)
const AquaVentLanding = lazy(() => import("./products/aquevent/pages/Landing.tsx"));
const AquaVentProduct = lazy(() => import("./products/aquevent/pages/Product.tsx"));
const AquaVentScience = lazy(() => import("./products/aquevent/pages/Science.tsx"));
const AquaVentBusiness = lazy(() => import("./products/aquevent/pages/Business.tsx"));
const AquaVentAcademy = lazy(() => import("./products/aquevent/pages/Academy.tsx"));
const AquaVentCommunity = lazy(() => import("./products/aquevent/pages/Community.tsx"));

// BioBot PhytoTech™ (lazy-loaded for code splitting)
const BioBotLanding = lazy(() => import("./products/biobot/pages/Landing.tsx"));
const BioBotTechnology = lazy(() => import("./products/biobot/pages/Technology.tsx"));
const BioBotApplications = lazy(() => import("./products/biobot/pages/Applications.tsx"));
const BioBotScience = lazy(() => import("./products/biobot/pages/Science.tsx"));
const BioBotBusiness = lazy(() => import("./products/biobot/pages/Business.tsx"));
const BioBotEcosystem = lazy(() => import("./products/biobot/pages/Ecosystem.tsx"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full border-3 border-primary border-t-transparent animate-spin" />
      <span className="text-sm text-muted-foreground">Chargement...</span>
    </div>
  </div>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Platform Selector */}
              <Route path="/platform" element={<PlatformSelector />} />

              {/* AquaVent PhytoTech UNLIMITED™ Routes */}
              <Route path="/aquevent" element={<AquaVentLanding />} />
              <Route path="/aquevent/product" element={<AquaVentProduct />} />
              <Route path="/aquevent/science" element={<AquaVentScience />} />
              <Route path="/aquevent/business" element={<AquaVentBusiness />} />
              <Route path="/aquevent/academy" element={<AquaVentAcademy />} />
              <Route path="/aquevent/community" element={<AquaVentCommunity />} />

              {/* BioBot PhytoTech™ Routes */}
              <Route path="/biobot" element={<BioBotLanding />} />
              <Route path="/biobot/technology" element={<BioBotTechnology />} />
              <Route path="/biobot/applications" element={<BioBotApplications />} />
              <Route path="/biobot/science" element={<BioBotScience />} />
              <Route path="/biobot/business" element={<BioBotBusiness />} />
              <Route path="/biobot/ecosystem" element={<BioBotEcosystem />} />

              {/* Document Platform (existing functionality preserved) */}
              <Route path="/" element={<Index />} />
              <Route path="/domaines" element={<Domaines />} />
              <Route path="/pack-autonomie" element={<PackAutonomie />} />
              <Route path="/afrique" element={<Afrique />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/precommande" element={<Precommande />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/cgv" element={<CGV />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/admin" element={<RequireAdmin><Admin /></RequireAdmin>} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieConsent />
        </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
