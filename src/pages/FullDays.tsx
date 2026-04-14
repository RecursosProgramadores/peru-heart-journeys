import React from "react";
import Navbar from "@/components/Navbar";
import { fullDayTours } from "@/data/fullDayTours";
import FullDayCard from "@/components/FullDayCard";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

const FullDays = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      <Navbar />

      {/* Modern Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-accent/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        </div>

        <div className="container-narrow px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 rounded-full animate-fade-in">
            <Sparkles size={14} className="mr-2 fill-current" /> Experiencias de un día
          </Badge>
          
          <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight leading-[1.1]">
            Full Days <span className="text-primary italic">&</span> <br /> Actividades
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Explora maravillas naturales y tesoros históricos en tours diseñados para maximizar tu tiempo y brindarte recuerdos inolvidables en un solo día.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold text-muted-foreground/60 uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" /> Cusco
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border" />
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" /> Ica
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-border" />
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

      <Footer />
    </div>
  );
};

export default FullDays;
