import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { activities } from "@/data/activities";

const ActivitiesSection = () => {
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
              {activities.slice(0, 9).map((a, index) => {
                // Determine category based on slug/location for linking
                let linkTo = `/tours/cusco`;
                if (a.slug.includes("lima")) linkTo = "/tours/lima";
                if (a.slug.includes("puno") || a.slug.includes("ruta-del-sol")) linkTo = "/tours/combinados";

                // Specific spans for a balanced 9-item grid
                const spans = [
                  "md:col-span-2 md:row-span-2", // 0: Machu Picchu (Hero)
                  "md:col-span-1 md:row-span-1", // 1: City Tour Cusco
                  "md:col-span-1 md:row-span-1", // 2: Valle Sagrado
                  "md:col-span-1 md:row-span-1", // 3: Montaña 7 Colores
                  "md:col-span-1 md:row-span-1", // 4: Laguna Humantay
                  "md:col-span-1 md:row-span-2", // 5: Valle Sur
                  "md:col-span-1 md:row-span-1", // 6: Ruta del Sol
                  "md:col-span-1 md:row-span-1", // 7: Lago Titicaca
                  "md:col-span-1 md:row-span-1", // 8: City Tour Lima
                ];

                const spanClass = spans[index] || "md:col-span-1 md:row-span-1";

                return (
                  <Link
                    to={linkTo}
                    key={a.slug}
                    className={`${spanClass} relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700`}
                  >
                    <img
                      src={a.img}
                      alt={a.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                      loading="lazy"
                    />
                    {/* Dark Professional Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {a.location.split(' – ')[0]}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                        {a.shortTitle}
                      </h3>
                      <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 mt-3" />
                    </div>

                    {/* Subtle Hover Reveal for Location */}
                    <div className="absolute top-4 right-4 translate-x-10 group-hover:translate-x-0 transition-transform duration-500">
                      <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/30">
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
