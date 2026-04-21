import { Check } from "lucide-react";
import expertosImg from "@/assets/principal/filosofi.png";
import { Badge } from "./ui/badge";

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-muted/20 overflow-hidden relative" id="por-que-elegirnos">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Por qué elegirnos</Badge>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Nuestra Filosofia<br /><span className="text-primary italic">de viaje</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image with text overlays */}
          <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
            <img
              src={expertosImg}
              alt="Expertos guías locales en Perú diseñando viajes"
              className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square group-hover:scale-110 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Right: Philosophy Text */}
          <div className="space-y-8 flex flex-col justify-center">
            <h3 className="font-display text-3xl font-extrabold text-foreground pb-4 border-b border-primary/20">
              Nuestro compromiso contigo
            </h3>
            <div className="space-y-6">
              <p className="font-body text-xl text-foreground/80 leading-relaxed text-pretty">
                En <span className="font-bold text-primary">Inkateam Travel</span> entendemos que un gran viaje no se improvisa, <span className="italic">se diseña</span>. Por eso, cada experiencia que creamos combina conocimiento local, planificación estratégica y una ejecución impecable, cuidando cada detalle como si fuera un viaje propio.
              </p>
              <p className="font-body text-xl text-foreground/80 leading-relaxed text-pretty">
                No se trata solo de visitar destinos como <span className="font-semibold text-foreground">Cusco, Machu Picchu o el Lago Titicaca</span>. Se trata de vivirlos de la manera correcta: con ritmo, sentido y sin fricciones.
              </p>
              <p className="font-body text-xl text-foreground/80 leading-relaxed text-pretty">
                Trabajamos con rutas optimizadas, proveedores confiables y una visión clara: ofrecerte un viaje auténtico, bien estructurado y memorable de principio a fin. 
              </p>
              <div className="p-8 rounded-3xl bg-primary/5 border-l-4 border-primary italic shadow-sm">
                <p className="font-body text-lg text-primary-dark font-medium leading-relaxed">
                  "Porque el verdadero valor está en lo bien pensado, no en lo improvisado. Tu viaje a Perú, diseñado por peruanos."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 p-10 rounded-[3rem] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <h3 className="text-3xl font-bold">¿Listo para empezar tu viaje?</h3>
            <p className="text-white/70 max-w-md">Escríbenos ahora y recibe asesoría personalizada de nuestros expertos.</p>
          </div>
          <div className="flex flex-wrap gap-4 relative z-10">
             <a 
              href="https://wa.me/51942293293" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 h-14 bg-primary hover:bg-primary/90 text-white rounded-full font-bold flex items-center justify-center transition-all hover:scale-105"
             >
               WhatsApp
             </a>
             <button className="px-8 h-14 bg-white text-black hover:bg-white/90 rounded-full font-bold transition-all hover:scale-105">
               Solicita asesoría
             </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
