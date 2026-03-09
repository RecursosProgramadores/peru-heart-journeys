import { TreePine, HandHeart, Leaf } from "lucide-react";

const pillars = [
  {
    icon: <TreePine className="w-10 h-10" />,
    title: "Reforestamos la Amazonía",
    desc: "Con cada viaje plantamos árboles nativos para devolver vida a la selva amazónica.",
  },
  {
    icon: <HandHeart className="w-10 h-10" />,
    title: "Apoyamos comunidades",
    desc: "Educación, salarios justos y oportunidades reales para las comunidades locales que nos acogen.",
  },
  {
    icon: <Leaf className="w-10 h-10" />,
    title: "Turismo responsable",
    desc: "Menos plástico, más respeto. Cada decisión se toma pensando en el planeta y su gente.",
  },
];

const SustainabilitySection = () => {
  return (
    <section id="sostenibilidad" className="section-padding bg-secondary/5">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Viajes sostenibles: devolviendo a Perú
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Creemos que viajar puede ser una fuerza para el bien. Cada aventura deja una huella positiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="text-center p-8 rounded-2xl bg-background border border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 text-secondary mb-6">
                {p.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-secondary/10 rounded-full px-8 py-4">
            <TreePine className="w-6 h-6 text-secondary" />
            <span className="font-display text-2xl font-bold text-secondary">+12,500</span>
            <span className="font-body text-muted-foreground">árboles plantados gracias a viajeros como tú 🌱</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
