import { MapPin, Heart, Puzzle, Smile } from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Sin multitudes",
    desc: "Rutas exclusivas lejos de las masas turísticas. Perú como debe experimentarse.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Experiencias 100% auténticas",
    desc: "Conecta con comunidades locales, tradiciones vivas y sabores genuinos.",
  },
  {
    icon: <Puzzle className="w-8 h-8" />,
    title: "Totalmente a tu medida",
    desc: "Cada viaje es único. Diseñamos tu itinerario perfecto de principio a fin.",
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Guías apasionados locales",
    desc: "Nuestros guías nacieron aquí y aman compartir sus secretos contigo.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Expertos en tu viaje soñado
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Somos exploradores apasionados… nos enamoramos de Perú y queremos que tú también lo hagas. Precisión alemana + pasión peruana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="text-center p-8 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
