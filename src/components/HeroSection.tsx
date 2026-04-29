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


      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground tracking-tight leading-[1.1] mb-6 drop-shadow-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Inkateam Travel <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400 drop-shadow-sm">
            Viaja Vive Más Emociones
          </span>
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-primary-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
          Descubre el Perú auténtico con viajes diseñados a tu medida, desde la historia imperial de Cusco hasta la espiritualidad del Lago Titicaca.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-4">
          <Button
            variant="hero"
            size="xl"
            className="w-full sm:w-auto text-base font-bold shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <Link to="/disena-tu-viaje">Diseña tu viaje</Link>
          </Button>
          <Button
            variant="hero-outline"
            size="xl"
            className="w-full sm:w-auto text-base font-bold backdrop-blur-md bg-black/20 hover:bg-black/40 border-white/70 hover:border-white transition-all duration-300 hover:-translate-y-1"
            onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver planes disponibles <ChevronDown className="w-5 h-5 animate-bounce-gentle" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-primary-foreground/60 animate-bounce-gentle" />
      </div>
    </section>
  );
};

export default HeroSection;
