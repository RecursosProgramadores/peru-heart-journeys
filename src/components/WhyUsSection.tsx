import { Map, Sparkles, Wand2 } from "lucide-react";
import expertosImg from "@/assets/principal/expertos.jpg";

const features = [
  {
    icon: <Map className="w-6 h-6" />,
    title: "Planes de viaje",
    desc: "Itinerarios diseñados para descubrir lo mejor de Perú, cubriendo los rincones más icónicos con detalles exclusivos.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Viajes transformacionales",
    desc: "Experiencias inmersivas que conectan con la cultura ancestral y renuevan tu perspectiva del mundo.",
  },
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: "Diseño de viajes personalizados",
    desc: "Creación a medida de la aventura de tus sueños, cuidando cada detalle para que sea exactamente como tú deseas.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden" id="nosotros">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Qué hacemos
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-foreground/80">Inkateam Travel</span> es un proyecto especializado en diseñar experiencias de viaje en Perú. Ofrecemos itinerarios cuidadosamente planificados que combinan cultura, naturaleza, aventura y gastronomía.
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
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:-translate-y-1">
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
