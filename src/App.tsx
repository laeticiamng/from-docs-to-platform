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
import TrackingProvider from "@/components/TrackingProvider";

// Document Platform (existing functionality preserved)
import Index from "./pages/Index.tsx";
import Domaines from "./pages/Domaines.tsx";
import PackAutonomie from "./pages/PackAutonomie.tsx";
import Afrique from "./pages/Afrique.tsx";
import APropos from "./pages/APropos.tsx";
import Precommande from "./pages/Precommande.tsx";
import Contact from "./pages/Contact.tsx";
import Faq from "./pages/Faq.tsx";
import Pricing from "./pages/Pricing.tsx";
import Features from "./pages/Features.tsx";
import MentionsLegales from "./pages/MentionsLegales.tsx";
import CGV from "./pages/CGV.tsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.tsx";
import NotFound from "./pages/NotFound.tsx";
import ResetPassword from "./pages/ResetPassword.tsx";
import Profile from "./pages/Profile.tsx";
import Admin from "./pages/Admin.tsx";
import AdminAudit from "./pages/AdminAudit.tsx";
import Preferences from "./pages/Preferences.tsx";
import Unsubscribe from "./pages/Unsubscribe.tsx";
import Methodologie from "./pages/Methodologie.tsx";
import Investisseurs from "./pages/Investisseurs.tsx";

// Platform Selector
import PlatformSelector from "./pages/PlatformSelector.tsx";

// AquaVent PhytoTech UNLIMITED™ (lazy-loaded for code splitting)
const AquaVentLanding = lazy(() => import("./products/aquevent/pages/Landing.tsx"));
const AquaVentProduct = lazy(() => import("./products/aquevent/pages/Product.tsx"));
const AquaVentScience = lazy(() => import("./products/aquevent/pages/Science.tsx"));
const AquaVentBusiness = lazy(() => import("./products/aquevent/pages/Business.tsx"));
const AquaVentAcademy = lazy(() => import("./products/aquevent/pages/Academy.tsx"));
const AquaVentCommunity = lazy(() => import("./products/aquevent/pages/Community.tsx"));
const AquaVentMentions = lazy(() => import("./products/aquevent/pages/Mentions.tsx"));

// BioBot — concept en exploration interne, contenu public mis hors-ligne
// (chiffres financiers, produits "validés" et trademarks non sourcés).
// Voir audit interne 2026-04-17. Les fichiers Landing/Technology/Applications/
// Science/Business/Ecosystem restent dans le repo mais ne sont plus routés.
const BioBotPlaceholder = lazy(() => import("./products/biobot/pages/Placeholder.tsx"));

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
          <TrackingProvider />
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
              <Route path="/aquevent/mentions" element={<AquaVentMentions />} />

              {/* BioBot — toutes les sous-routes pointent vers le placeholder honnête */}
              <Route path="/biobot" element={<BioBotPlaceholder />} />
              <Route path="/biobot/*" element={<BioBotPlaceholder />} />

              {/* Document Platform (existing functionality preserved) */}
              <Route path="/" element={<Index />} />
              <Route path="/domaines" element={<Domaines />} />
              <Route path="/pack-autonomie" element={<PackAutonomie />} />
              <Route path="/afrique" element={<Afrique />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/precommande" element={<Precommande />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/features" element={<Features />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
              <Route path="/cgv" element={<CGV />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/preferences" element={<Preferences />} />
              <Route path="/admin" element={<RequireAdmin><Admin /></RequireAdmin>} />
              <Route path="/admin/audit" element={<RequireAdmin><AdminAudit /></RequireAdmin>} />
              <Route path="/unsubscribe" element={<Unsubscribe />} />
              <Route path="/methodologie" element={<Methodologie />} />
              <Route path="/investisseurs" element={<Investisseurs />} />

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
