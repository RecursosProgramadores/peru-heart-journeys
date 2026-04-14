import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, BookOpen, Compass, Info, Calendar } from "lucide-react";

const articles = [
  {
    title: "Qué hacer en Cusco",
    desc: "Descubre los secretos de la capital histórica del imperio inca.",
    category: "Guías de destinos",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: "Mejor época para viajar a Perú",
    desc: "Planifica tu viaje considerando el clima en costa, sierra y selva.",
    category: "Consejos de viaje",
    icon: <Calendar className="w-5 h-5" />
  },
  {
    title: "Cómo visitar Machu Picchu",
    desc: "Todo lo que necesitas saber sobre entradas, trenes y horarios.",
    category: "Recomendaciones prácticas",
    icon: <Info className="w-5 h-5" />
  },
  {
    title: "Consejos para la altura",
    desc: "Aclimatate correctamente y disfruta de los Andes sin molestias.",
    category: "Información actualizada",
    icon: <Compass className="w-5 h-5" />
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/5 -skew-x-12 translate-x-32 -z-10" />
      
      <div className="container-narrow px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Nuestro Blog</Badge>
            <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
              Información útil para tu <br /><span className="text-primary italic">viaje a Perú</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En nuestro blog encontrarás contenido diseñado estratégicamente para ayudarte a planificar mejor tu viaje y aprovechar cada momento en el destino.
            </p>
          </div>
          <Button variant="outline" className="rounded-full h-14 px-8 border-2 font-bold mb-2 group">
             Ver todos los artículos <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, i) => (
            <div 
              key={article.title} 
              className="bg-white p-8 rounded-[2.5rem] border border-border/60 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {article.icon}
              </div>
              <Badge variant="outline" className="text-[10px] uppercase tracking-widest mb-4 bg-muted/50 border-none font-bold">
                {article.category}
              </Badge>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors flex-1">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed italic mb-8">
                "{article.desc}"
              </p>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:gap-3 transition-all">
                Explorar artículo <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Featured Recommendation Text Box */}
        <div className="mt-16 p-8 rounded-[2rem] bg-muted/30 border border-border/50 text-center">
           <p className="text-sm font-bold text-foreground">
             ¿No encuentras lo que buscas? <span className="text-primary italic">Planifica mejor tu viaje con nuestra asesoría personalizada.</span>
           </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
