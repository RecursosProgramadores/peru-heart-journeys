import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Mountain } from "lucide-react";
import { activities } from "@/data/activities";

const ActivitiesSection = () => {
  return (
    <section id="actividades" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Experiencias únicas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Actividades en Perú
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada actividad está diseñada para conectarte con la cultura, naturaleza e historia del Perú auténtico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((a) => (
            <Link
              to={`/actividades/${a.slug}`}
              key={a.slug}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={a.img}
                  alt={a.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <span className="text-base">{a.emoji}</span> {a.shortTitle}
                </span>
                <span className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                  {a.difficulty}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4 flex-1">
                  {a.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-primary" /> {a.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-primary" /> {a.duration}
                  </span>
                  {a.altitude && (
                    <span className="flex items-center gap-1">
                      <Mountain size={14} className="text-primary" /> {a.altitude}
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Ver detalles →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
