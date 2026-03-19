import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ActivityDetail from "./pages/ActivityDetail.tsx";
import ToursByCategory from "./pages/ToursByCategory.tsx";
import TourDetail from "./pages/TourDetail.tsx";
import ViajesTransformacionales from "./pages/ViajesTransformacionales.tsx";
import DisenaTuViaje from "./pages/DisenaTuViaje.tsx";
import Destinos from "./pages/Destinos.tsx";
import Blog from "./pages/Blog.tsx";
import Contacto from "./pages/Contacto.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/actividades/:slug" element={<ActivityDetail />} />
          <Route path="/tours/:category" element={<ToursByCategory />} />
          <Route path="/tours/:category/:slug" element={<TourDetail />} />
          <Route path="/viajes-transformacionales" element={<ViajesTransformacionales />} />
          <Route path="/disena-tu-viaje" element={<DisenaTuViaje />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
