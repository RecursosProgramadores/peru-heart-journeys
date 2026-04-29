import { Button } from "@/components/ui/button";
import { MessageCircle, FileText } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0F1C] border-t border-border/10">
      {/* Background Decorators */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-30%] left-[-20%] w-[70%] h-[150%] bg-primary/20 blur-[150px] rounded-full mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[70%] h-[150%] bg-amber-500/10 blur-[150px] rounded-full mix-blend-screen opacity-50" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-14 lg:p-20 shadow-2xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
            ¿Listo para descubrir <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-primary">Perú</span>?
          </h2>
          
          <p className="font-body text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Tu gran viaje comienza con un simple paso. Contáctanos ahora para recibir asesoría personalizada y armar el itinerario perfecto a tu medida.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* WhatsApp Button */}
            <Button
              className="w-full sm:w-auto h-16 sm:h-18 px-8 sm:px-10 text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-1.5 rounded-2xl flex items-center justify-center gap-3"
              asChild
            >
              <a href="https://wa.me/51942293293?text=%C2%A1Hola%20Inkateam%20Travel!%20Estoy%20visitando%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20tours%20y%20experiencias%20en%20Per%C3%BA.%20%C2%BFPodr%C3%ADan%20asesorarme%3F%20Muchas%20gracias." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                Hablar por WhatsApp
              </a>
            </Button>

            {/* Quote Button */}
            <Button
              variant="outline"
              className="w-full sm:w-auto h-16 sm:h-18 px-8 sm:px-10 text-lg font-bold bg-white/5 hover:bg-white/10 border-white/20 hover:border-white/50 text-white backdrop-blur-sm shadow-xl transition-all duration-300 hover:-translate-y-1.5 rounded-2xl flex items-center justify-center gap-3"
              asChild
            >
              <a href="mailto:reservas@inkateamtravel.com">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
                Solicitar cotización
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
