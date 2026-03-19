import { Search, Pencil, Plane } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Explora nuestros planes",
    desc: "Revisa nuestros itinerarios base y encuentra la inspiración perfecta para tu próxima gran aventura en Perú.",
    icon: <Search className="w-8 h-8" />
  },
  {
    step: "02",
    title: "Personaliza tu viaje",
    desc: "Trabajamos contigo para adaptar cada detalle a tus gustos, presupuesto y ritmo, creando tu itinerario ideal.",
    icon: <Pencil className="w-8 h-8" />
  },
  {
    step: "03",
    title: "Viaja a Perú",
    desc: "Nos encargamos de toda la logística. Tú solo relájate, disfruta y prepárate para vivir experiencias inolvidables.",
    icon: <Plane className="w-8 h-8" />
  }
];

const AboutSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background border-t border-b border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/10 pointer-events-none" />
      <div className="container-narrow px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Cómo <span className="text-primary">funciona</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tu viaje de ensueño a Perú está a solo tres sencillos pasos de distancia. Nosotros nos encargamos de todo el trabajo pesado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-background border border-border/60 shadow-xl flex items-center justify-center text-primary group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 z-10 relative">
                  {s.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold font-display shadow-lg transform group-hover:scale-110 transition-transform">
                  {s.step}
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
