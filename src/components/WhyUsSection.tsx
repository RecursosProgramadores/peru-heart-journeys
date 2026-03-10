import { MapPin, Heart, Puzzle, Smile } from "lucide-react";
import expertosImg from "@/assets/principal/expertos.jpg";

const features = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Sin multitudes",
    desc: "Rutas exclusivas lejos de las masas turísticas. Perú como debe experimentarse.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Experiencias 100% auténticas",
    desc: "Conecta con comunidades locales, tradiciones vivas y sabores genuinos.",
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "Totalmente a tu medida",
    desc: "Cada viaje es único. Diseñamos tu itinerario perfecto de principio a fin.",
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Guías apasionados locales",
    desc: "Nuestros guías nacieron aquí y aman compartir sus secretos contigo.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden" id="nosotros">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Expertos en tu viaje soñado
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Somos exploradores apasionados… nos enamoramos de Perú y queremos que tú también lo hagas. Precisión alemana + pasión peruana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Features */}
          <div className="flex flex-col gap-10 order-2 lg:order-1">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed max-w-md">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl order-1 lg:order-2">
            <img
              src={expertosImg}
              alt="Expertos guías locales en Perú"
              className="w-full h-auto object-cover aspect-[4/5] lg:aspect-auto group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
