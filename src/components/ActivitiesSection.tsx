import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { activities } from "@/data/activities";

const ActivitiesSection = () => {
  // Selección personalizada de 8 experiencias (2 Cusco, 2 Lima, 4 Combinados)
  const displayActivities = [
    { ...activities[0], category: "cusco" }, // 0: Machu Picchu (Hero)
    { ...activities[8], category: "lima", shortTitle: "Lima Colonial" }, // 1: Lima
    { ...activities[2], category: "cusco" }, // 2: Valle Sagrado
    { ...activities[9], category: "lima", shortTitle: "Circuito del Agua" }, // 3: Lima 2
    { ...activities[10], category: "combinados", shortTitle: "Ica, Paracas & Huacachina" }, // 4: Combinado 1
    { ...activities[6], category: "combinados" }, // 5: Ruta del Sol
    { ...activities[7], category: "combinados" }, // 6: Lago Titicaca
    { 
      slug: "lima-cusco-5d-4n", 
      title: "Lima & Cusco 5D / 4N",
      shortTitle: "Lima & Cusco",
      location: "Lima – Cusco",
      difficulty: "Fácil",
      img: activities[0].img, // Usamos Mapi como fallback o una representativa
      category: "combinados",
      isTour: true 
    }, // 7: Combinado 4
  ];

  return (
    <section id="actividades" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row gap-16 item-start mb-16 px-4">
          {/* Left: Text Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              Experiencias únicas
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.1]">
              Experiencias <br /> en Perú
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Explora nuestros paquetes turísticos diseñados para conectarte con la esencia más pura del Perú.
            </p>
            <Button size="xl" className="font-bold px-10" asChild>
              <Link to="/destinos">Ver todos los planes <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </div>

          {/* Right: Grid Layout */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[240px]">
              {displayActivities.map((a, index) => {
                // Determine link
                const linkTo = a.isTour 
                  ? `/tours/combinados/${a.slug}` 
                  : `/actividades/${a.slug}`;

                // Specific spans for a balanced 8-item grid
                const spans = [
                  "md:col-span-2 md:row-span-2", // 0: Machu Picchu (Hero)
                  "md:col-span-1 md:row-span-1", // 1: Lima
                  "md:col-span-1 md:row-span-1", // 2: Valle Sagrado
                  "md:col-span-1 md:row-span-1", // 3: Circuito Agua
                  "md:col-span-1 md:row-span-1", // 4: Ica Paracas
                  "md:col-span-1 md:row-span-2", // 5: Ruta del Sol (Larga)
                  "md:col-span-1 md:row-span-1", // 6: Lago Titicaca
                  "md:col-span-1 md:row-span-1", // 7: Lima & Cusco
                ];

                const spanClass = spans[index] || "md:col-span-1 md:row-span-1";

                return (
                  <Link
                    to={linkTo}
                    key={a.slug}
                    className={`${spanClass} relative group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700`}
                  >
                    <img
                      src={a.img}
                      alt={a.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                      loading="lazy"
                    />
                    {/* Dark Professional Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {a.location.split(' – ')[0]}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                        {a.shortTitle}
                      </h3>
                      <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 mt-3" />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                      <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 uppercase tracking-tighter">
                        {a.difficulty}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
