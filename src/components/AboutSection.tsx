import { Search, CheckCircle2, ShieldCheck, Heart, UserCheck } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";


const workCriteria = [
  { title: "Logística eficiente", desc: "Rutas optimizadas para aprovechar cada minuto." },
  { title: "Proveedores confiables", desc: "Selección rigurosa de hoteles, transporte y guías." },
  { title: "Equilibrio perfecto", desc: "Actividades estimulantes con tiempo libre para el descanso." },
  { title: "Experiencia real", desc: "Sumergirte de verdad en la esencia de cada destino." }
];

const commitmentItems = [
  { text: "Ofrecer experiencias bien organizadas", icon: <CheckCircle2 className="w-5 h-5 text-primary" /> },
  { text: "Garantizar acompañamiento constante", icon: <UserCheck className="w-5 h-5 text-primary" /> },
  { text: "Brindar información clara y actualizada", icon: <ShieldCheck className="w-5 h-5 text-primary" /> }
];

const AboutSection = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-background border-t border-border/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/5 pointer-events-none" />
      
      <div className="container-narrow px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Core Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Sobre Nosotros</Badge>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground mb-6 leading-tight">
                Expertos en diseñar <br /><span className="text-primary italic">viajes en Perú</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                En <span className="font-bold text-foreground">Inkateam Travel</span> somos especialistas en la creación de experiencias de viaje en Perú, combinando conocimiento local, planificación estratégica y un enfoque personalizado.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 relative">
               <div className="absolute top-4 right-4 text-primary/20">
                 <Search size={40} />
               </div>
               <h3 className="text-xl font-bold mb-4">No solo organizamos itinerarios.</h3>
               <p className="text-muted-foreground text-sm leading-relaxed">
                 Diseñamos viajes que tienen sentido, que fluyen y que permiten vivir el destino de forma auténtica, alejándonos de lo convencional para brindarte una conexión real.
               </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="rounded-full px-8"
                onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Descubre nuestros planes
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Diseña tu viaje
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-border/60">
               <h3 className="font-display text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                 <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-primary/10 border-none">1</Badge>
                 Nuestra forma de trabajar
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {workCriteria.map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-muted/30 border border-border/40 hover:border-primary/30 transition-colors">
                      <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-border/60">
               <h3 className="font-display text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
                 <Badge variant="outline" className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-primary/10 border-none">2</Badge>
                 Nuestro compromiso
               </h3>
               <div className="space-y-4">
                  {commitmentItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                      {item.icon}
                      <span className="text-sm font-semibold">{item.text}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
