import React, { useEffect } from "react";
import { fullDayTours } from "@/data/fullDayTours";
import FullDayCard from "@/components/FullDayCard";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-machu-picchu.jpg";

const FullDays = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB]">

      {/* Modern Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Full Days y Actividades en Perú"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

        <div className="container-narrow relative z-10 px-4 text-center text-white mt-16">
          <Badge className="mb-6 bg-primary text-white border-none px-4 py-1.5 rounded-full font-bold uppercase tracking-widest shadow-xl">
            <Sparkles size={14} className="mr-2 fill-current" /> Experiencias de un día
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Full Days <span className="text-primary italic">&</span> <br /> Actividades
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
      <section className="pb-32 container-narrow px-4">
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
