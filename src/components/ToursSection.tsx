import { Button } from "@/components/ui/button";
import tourSacred from "@/assets/tour-sacred-valley.jpg";
import tourAdventure from "@/assets/tour-adventure.jpg";
import tourCulinary from "@/assets/tour-culinary.jpg";
import tourDiscover from "@/assets/tour-discover.jpg";
import tourOdyssey from "@/assets/tour-odyssey.jpg";
import tourCusco from "@/assets/tour-cusco.jpg";

const tours = [
  {
    img: tourSacred,
    title: "Tour Auténtico por Perú",
    desc: "Machu Picchu, Cusco & Valle Sagrado",
    duration: "8 días",
    price: "USD 1,919",
    popular: true,
    alt: "Valle Sagrado de los Incas con terrazas ancestrales y luz dorada del atardecer",
  },
  {
    img: tourAdventure,
    title: "Aventura en Perú",
    desc: "Montaña Arcoíris, Camino Inca & Selva",
    duration: "12 días",
    price: "USD 2,549",
    popular: false,
    alt: "Montaña de los Siete Colores Vinicunca con cielo azul intenso",
  },
  {
    img: tourCulinary,
    title: "Tour Culinario",
    desc: "Lima, Cusco & Arequipa gastronómica",
    duration: "10 días",
    price: "USD 2,199",
    popular: false,
    alt: "Ceviche peruano fresco con ingredientes coloridos en mesa rústica",
  },
  {
    img: tourDiscover,
    title: "Perú al Descubierto",
    desc: "Cusco, Puno & Lago Titicaca",
    duration: "9 días",
    price: "USD 1,799",
    popular: true,
    alt: "Guía local peruano sonriente con sombrero tradicional y montañas andinas de fondo",
  },
  {
    img: tourOdyssey,
    title: "Odisea Peruana",
    desc: "Colca, Nazca, Amazonía & Machu Picchu",
    duration: "15 días",
    price: "USD 3,299",
    popular: false,
    alt: "Cañón del Colca con cóndores volando sobre acantilados dorados",
  },
  {
    img: tourCusco,
    title: "Maravillas Peruanas",
    desc: "Lima, Cusco & Selva Amazónica",
    duration: "11 días",
    price: "USD 2,449",
    popular: false,
    alt: "Calles coloniales de Cusco con edificios coloridos al atardecer",
  },
];

const ToursSection = () => {
  return (
    <section id="tours" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tours auténticos por Perú
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Viajar con nosotros no es solo un viaje, es una experiencia inolvidable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((t) => (
            <div
              key={t.title}
              className="group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={t.img}
                  alt={t.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {t.popular && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                    ❤️ Popular
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{t.title}</h3>
                <p className="font-body text-muted-foreground mb-4">{t.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-muted-foreground">
                    {t.duration} •{" "}
                    <span className="font-semibold text-primary">desde {t.price}</span>
                  </span>
                  <Button variant="outline" size="sm">
                    Ver detalles
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="andes" size="lg">
            Ver todos los tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
