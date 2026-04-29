import React, { useEffect } from "react";
import { fullDayTours } from "@/data/fullDayTours";
import FullDayCard from "@/components/FullDayCard";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin } from "lucide-react";
import heroImg from "@/assets/optimized/FULLDAYPRINCIPAL.webp";

const FullDays = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB]">

      {/* Modern Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Experiencias Full Day en Perú"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>
        
        <div className="container-narrow relative z-10 px-4 text-center text-white mt-24">
          <Badge className="mb-6 bg-primary/20 hover:bg-primary/30 text-white border-white/20 px-4 py-1.5 rounded-full uppercase tracking-widest text-xs font-bold animate-fade-in">
            <Sparkles size={14} className="mr-2 text-primary" /> Experiencias de un día
          </Badge>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Nuestros <span className="text-primary italic">Full Days</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-medium">
            Explora maravillas naturales y tesoros históricos en tours diseñados para maximizar tu tiempo y brindarte recuerdos inolvidables en un solo día.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-white/80 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" /> Cusco
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" /> Ica
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" /> Lima
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24 container-narrow px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {fullDayTours.map((tour) => (
            <div key={tour.id} className="h-full">
              <FullDayCard tour={tour} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default FullDays;
