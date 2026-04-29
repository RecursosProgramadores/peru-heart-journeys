import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ActivityDetail from "./pages/ActivityDetail";
import ToursByCategory from "./pages/ToursByCategory";
import TourDetail from "./pages/TourDetail";
import ViajesTransformacionales from "./pages/ViajesTransformacionales";
import FullDays from "./pages/FullDays";
import FullDayDetail from "./pages/FullDayDetail";
import TurismoComunitario from "./pages/TurismoComunitario";
import DisenaTuViaje from "./pages/DisenaTuViaje";
import Destinos from "./pages/Destinos";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contacto from "./pages/Contacto";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/actividades/:slug" element={<ActivityDetail />} />
              <Route path="/tours/:category" element={<ToursByCategory />} />
              <Route path="/tours/:category/:slug" element={<TourDetail />} />
              <Route path="/viajes-transformacionales" element={<ViajesTransformacionales />} />
              <Route path="/full-days" element={<FullDays />} />
              <Route path="/full-days/:id" element={<FullDayDetail />} />
              <Route path="/turismo-comunitario" element={<TurismoComunitario />} />
              <Route path="/disena-tu-viaje" element={<DisenaTuViaje />} />
              <Route path="/destinos" element={<Destinos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/terminos" element={<Terminos />} />
              <Route path="/privacidad" element={<Privacidad />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
