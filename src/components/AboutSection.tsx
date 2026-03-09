import { Button } from "@/components/ui/button";
import foundersImg from "@/assets/about-founders.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={foundersImg}
              alt="Fundadores de Exploor Perú sonriendo con paisaje andino de fondo"
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-6 py-3 font-body font-bold shadow-lg hidden sm:block">
              ❤️ Desde 2015
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nuestra historia de amor con Perú
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Fundada por dos alemanes que se enamoraron perdidamente de Perú durante un viaje de mochileros. Lo que empezó como una aventura personal se convirtió en una misión: compartir la magia auténtica de este país increíble con viajeros de todo el mundo.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Hoy, nuestro equipo de guías locales y expertos en viajes crea experiencias que van más allá del turismo. Cada itinerario es una carta de amor a Perú.
            </p>
            <Button variant="outline" size="lg">
              Conócenos mejor
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
