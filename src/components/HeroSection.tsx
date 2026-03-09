import { Button } from "@/components/ui/button";
import { Heart, Star, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-machu-picchu.jpg";

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
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h1
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-6"
          style={{ animationDelay: "0.2s" }}
        >
          ¿Listos para el viaje de su vida a Perú?
        </h1>
        <p className="font-body text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Descubran el auténtico Perú, sin multitudes. Vivan experiencias reales, personalizadas y con amor.
        </p>

        {/* Stats badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2.5"
            >
              <span className="text-accent">{s.icon}</span>
              <span className="font-body font-bold text-primary-foreground text-sm">{s.value}</span>
              <span className="font-body text-primary-foreground/80 text-sm">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#contacto">Personaliza tu aventura ahora</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#tours">
              Ver tours destacados <ChevronDown className="w-5 h-5 animate-bounce-gentle" />
            </a>
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
