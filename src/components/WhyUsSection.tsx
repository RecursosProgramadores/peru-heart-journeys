import { MapPin, ShieldCheck, Headphones, Star, Sliders, Check } from "lucide-react";
import expertosImg from "@/assets/principal/expertos.jpg";
import { Badge } from "./ui/badge";

const pillars = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Conocimiento local real",
    desc: "Somos peruanos diseñando viajes en Perú. Conocemos el destino de primera mano, lo que nos permite ofrecerte lugares y experiencias que no aparecen en las guías convencionales.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Planificación sin improvisaciones",
    desc: "Cada itinerario está estructurado meticulosamente para optimizar tiempos, evitar errores logísticos y mejorar tu experiencia global.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Asistencia constante",
    desc: "No estás solo. Te acompañamos antes, durante y después del viaje con atención personalizada y soporte 24/7.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Experiencias auténticas",
    desc: "Trabajamos con proveedores locales y experiencias reales, enfocadas en la calidad y la autenticidad, lejos del turismo masivo.",
  },
  {
    icon: <Sliders className="w-6 h-6" />,
    title: "Flexibilidad",
    desc: "Entendemos que cada viajero es único. Por eso ofrecemos tanto planes listos como viajes completamente personalizados según tus necesidades.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-muted/20 overflow-hidden relative" id="por-que-elegirnos">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Por qué elegirnos</Badge>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
            Más que una agencia, <br /><span className="text-primary italic">un aliado en tu viaje</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Elegir quién organiza tu viaje es una decisión clave. En <span className="font-bold text-foreground">Inkateam Travel</span> nos enfocamos en ofrecer seguridad, claridad y experiencias diseñadas con maestría.
          </p>
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
            
            <div className="absolute bottom-8 left-8 right-8 space-y-4">
               <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-fade-up">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                    <Check size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Seguridad Total</h4>
                    <p className="text-xs text-muted-foreground">Tu tranquilidad es nuestra prioridad.</p>
                  </div>
               </div>
               <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl flex items-center gap-4 animate-fade-up delay-150">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                    <Check size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Claridad Absoluta</h4>
                    <p className="text-xs text-muted-foreground">Sin cargos ocultos ni sorpresas.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right: Pillars List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8 text-foreground pb-4 border-b border-border/60">Lo que nos diferencia</h3>
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="flex gap-6 p-6 rounded-[2rem] hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group border border-transparent hover:border-border/60"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0 self-start">
                  {p.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed italic line-clamp-3 group-hover:line-clamp-none transition-all">{p.desc}</p>
                </div>
              </div>
            ))}
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
