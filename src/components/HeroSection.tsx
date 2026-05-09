import { Button } from "@/components/ui/button";
import { Heart, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/optimized/HOmeprincipal.webp";

const stats = [
  { icon: <Heart className="w-4 h-4" />, value: "21K+", label: "Viajeros felices" },
  { icon: <Star className="w-4 h-4" />, value: "1,500+", label: "Reseñas 5 estrellas" },
  { icon: <Star className="w-4 h-4" />, value: "96%", label: "Excelente" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroImg}
        alt="Machu Picchu al amanecer envuelto en niebla dorada, sin multitudes"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />


      {/* Background Gradient overlay - ONLY bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#151517]/80 via-transparent to-transparent z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center justify-end h-full pb-20 pt-32">
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl"
          style={{ animationDelay: "0.2s" }}
        >
          Inkateam Travel <br className="hidden sm:block" />
          <span className="text-white drop-shadow-lg">
            Viaja Vive Más Emociones
          </span>
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
          Descubre el Perú auténtico con viajes diseñados a tu medida, desde la historia imperial de Cusco hasta la espiritualidad del Lago Titicaca.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-4">
          <Button
            variant="hero"
            size="xl"
            className="w-full sm:w-auto bg-primary text-[#151517] text-base font-bold shadow-2xl hover:bg-primary/90 hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 uppercase"
            asChild
          >
            <Link to="/disena-tu-viaje">Diseña tu viaje</Link>
          </Button>
          <Button
            variant="hero-outline"
            size="xl"
            className="w-full sm:w-auto text-base text-white font-bold backdrop-blur-md bg-black/20 hover:bg-black/40 border-white/70 hover:border-white transition-all duration-300 hover:-translate-y-1 uppercase"
            onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver planes disponibles <ChevronDown className="w-5 h-5 animate-bounce-gentle ml-2" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-white/80 animate-bounce-gentle" />
      </div>
    </section>
  );
};

export default HeroSection;
