import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const benefits = [
  "Sin pago inicial",
  "Respuesta en menos de 24h",
  "100% personalizado",
];

const testimonials = [
  {
    name: "María & Carlos",
    text: "¡El mejor viaje de nuestras vidas! Todo fue perfecto, sin una sola multitud.",
    rating: 5,
  },
  {
    name: "Anna Schmidt",
    text: "La atención personalizada y los guías locales hicieron de Perú una experiencia mágica.",
    rating: 5,
  },
  {
    name: "Pierre Dubois",
    text: "Increíble cómo combinan la organización alemana con la calidez peruana. ¡Volveremos!",
    rating: 5,
  },
];

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section-padding bg-muted/50">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¡Hagamos realidad tu viaje soñado hoy mismo!
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuéntennos tus sueños de viaje, nosotros los haremos realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div className="bg-background rounded-3xl p-8 md:p-10 shadow-lg border border-border/50">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="font-body text-muted-foreground">
                  Te responderemos en menos de 24 horas. ¡Prepárate para tu aventura!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="¿Cómo te llamas?"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                    🌄 ¿Cuándo viajas aproximadamente?
                  </label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 rounded-xl border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ej: Julio 2026, Navidad..."
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground mb-1.5 block">
                    🏔️ ¿Qué sueñas ver en Perú?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Machu Picchu, Amazonía, gastronomía, cultura... 🌿"
                  />
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {benefits.map((b) => (
                    <span
                      key={b}
                      className="flex items-center gap-1.5 text-sm font-body text-secondary font-medium"
                    >
                      <Check className="w-4 h-4" /> {b}
                    </span>
                  ))}
                </div>

                <Button variant="hero" size="xl" type="submit" className="w-full">
                  Enviar mi sueño de viaje ✨
                </Button>
              </form>
            )}
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Lo que dicen nuestros viajeros
            </h3>
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-background rounded-2xl p-6 border border-border/50 shadow-sm"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-foreground leading-relaxed mb-3 italic">
                  "{t.text}"
                </p>
                <p className="font-body text-sm font-semibold text-muted-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
