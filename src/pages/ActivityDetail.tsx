import { useParams, Link } from "react-router-dom";
import { activities } from "@/data/activities";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Mountain, ChevronLeft, CheckCircle2 } from "lucide-react";

const ActivityDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Actividad no encontrada</h1>
          <Link to="/#actividades">
            <Button variant="default">Volver a actividades</Button>
          </Link>
        </div>
      </div>
    );
  }

  const otherActivities = activities.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      {/* SEO: JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: activity.title,
            description: activity.excerpt,
            image: activity.img,
            touristType: "Aventura cultural",
            itinerary: {
              "@type": "ItemList",
              itemListElement: activity.highlights.map((h, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: h,
              })),
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative h-[50vh] md:h-[60vh] mt-16 md:mt-20">
          <img
            src={activity.img}
            alt={activity.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container-narrow">
              <Link
                to="/#actividades"
                className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium mb-4 transition-colors"
              >
                <ChevronLeft size={16} /> Todas las actividades
              </Link>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{activity.emoji}</span>
                <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {activity.difficulty}
                </span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {activity.title}
              </h1>
              <p className="font-body text-white/85 text-lg max-w-2xl">
                {activity.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                <article className="prose prose-lg max-w-none">
                  {activity.description.map((p, i) => (
                    <p key={i} className="font-body text-foreground/85 text-lg leading-relaxed mb-6">
                      {p}
                    </p>
                  ))}
                </article>

                {/* Highlights */}
                <div className="mt-10">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Puntos destacados
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activity.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3"
                      >
                        <CheckCircle2 size={18} className="text-secondary shrink-0" />
                        <span className="font-body text-foreground font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-2xl border border-border/50 p-6 shadow-sm space-y-5">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Detalles del tour
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Ubicación</p>
                        <p className="font-body font-semibold text-foreground">{activity.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Duración</p>
                        <p className="font-body font-semibold text-foreground">{activity.duration}</p>
                      </div>
                    </div>

                    {activity.altitude && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mountain size={18} className="text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Altitud</p>
                          <p className="font-body font-semibold text-foreground">{activity.altitude}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border pt-5">
                    <Button variant="default" size="lg" className="w-full rounded-full text-base" asChild>
                      <a href="/#contacto">Consultar disponibilidad</a>
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-3">
                      Sin compromiso • Respuesta en &lt;24h
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            {/* Related */}
            <div className="mt-20 pt-12 border-t border-border">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Otras actividades que te encantarán
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherActivities.map((a) => (
                  <Link
                    to={`/actividades/${a.slug}`}
                    key={a.slug}
                    className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-border/50"
                  >
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={a.img}
                        alt={a.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {a.emoji} {a.shortTitle}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mt-1">{a.location} • {a.duration}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ActivityDetail;
