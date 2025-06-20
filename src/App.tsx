
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Produits from "./pages/Produits";
import Livraison from "./pages/Livraison";
import APropos from "./pages/APropos";
import ContactPage from "./pages/ContactPage";
import MentionsLegales from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import PolitiqueLivraison from "./pages/PolitiqueLivraison";
import PolitiqueRetour from "./pages/PolitiqueRetour";
import PolitiqueCookies from "./pages/PolitiqueCookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/livraison" element={<Livraison />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/politique-livraison" element={<PolitiqueLivraison />} />
          <Route path="/politique-retour" element={<PolitiqueRetour />} />
          <Route path="/politique-cookies" element={<PolitiqueCookies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
