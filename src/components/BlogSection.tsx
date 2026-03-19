import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  { title: "13 cosas que debes saber antes de viajar a Perú", tag: "Esencial" },
  { title: "Mal de altura: cómo evitarlo y disfrutar al máximo", tag: "Salud" },
  { title: "Qué empacar para Perú: guía definitiva", tag: "Preparación" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lecturas esenciales para tu aventura
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Guide card */}
          <div className="lg:row-span-1 bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Guía GRATIS para viajar a Perú
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Todo lo que necesitas saber en un solo PDF descargable. ¡Prepárate para la aventura!
            </p>
            <Button variant="default" size="lg">
              <Download className="w-5 h-5" />
              Descarga tu guía GRATIS
            </Button>
          </div>

          {/* Articles */}
          <div className="lg:col-span-2 space-y-4">
            {articles.map((a) => (
              <div
                key={a.title}
                className="flex items-center gap-6 bg-background rounded-2xl p-6 border border-border/50 hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <span className="shrink-0 text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1.5">
                  {a.tag}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
              </div>
            ))}
            <div className="pt-4">
              <Button variant="default" size="lg" asChild>
              <Link to="/blog">Ver todos los artículos</Link>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
