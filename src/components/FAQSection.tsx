import { Badge } from "./ui/badge";
import { Sparkles, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import killamasImg from "../assets/killamas.png";

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30 overflow-hidden relative">
      <div className="container-narrow px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Columna Izquierda: Textos, Imagen y WhatsApp */}
          <div className="lg:w-1/2 space-y-10">
            {/* Textos */}
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
              <h2 className="font-display text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
                Resolvemos tus <br /><span className="text-primary italic">dudas antes de viajar</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Es normal tener preguntas. Por eso creamos Killa, nuestro asistente virtual, para ayudarte en tiempo real con toda la información que necesitas sobre tu viaje a Perú.
              </p>
            </div>
            
            {/* Imagen Killa */}
            <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/20 p-2 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-md shadow-lg max-w-sm mx-auto lg:mx-0">
               <img 
                 src={killamasImg} 
                 alt="Killa Asistente" 
                 className="w-full h-auto rounded-[2rem] object-cover transition-transform duration-700 hover:scale-[1.03]"
                 style={{ animation: 'float 6s ease-in-out infinite' }}
               />
            </div>
            
            {/* WhatsApp Box */}
            <div className="p-8 rounded-[2rem] bg-white shadow-xl border border-border/50 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
               <h4 className="font-bold mb-2 text-xl relative z-10">¿Prefieres hablar con una persona?</h4>
               <p className="text-sm text-muted-foreground mb-6 relative z-10">Nuestro equipo está listo para ayudarte por WhatsApp y resolver todas tus dudas de forma personalizada.</p>
               <Button className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold h-14 relative z-10 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-green-600/30" asChild>
                  <a href="https://wa.me/51942293293" target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={20} className="mr-2" /> Escríbenos por WhatsApp
                  </a>
               </Button>
            </div>
          </div>

          {/* Columna Derecha: Chatbot Iframe */}
          <div className="lg:w-1/2 w-full lg:sticky lg:top-24">
            <div className="bg-white rounded-[3rem] shadow-2xl border border-primary/10 overflow-hidden relative transition-transform duration-500 hover:shadow-primary/20">
              {/* Header del Chat */}
              <div className="bg-primary/5 p-6 border-b border-primary/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-50"></div>
                    <Sparkles size={24} className="animate-pulse relative z-10" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">Killa Assistant</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-green-600">En línea ahora</p>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">IA Especializada</Badge>
              </div>
              
              {/* Contenedor del Iframe */}
              <div className="relative h-[650px] w-full bg-slate-50">
                <iframe 
                  src="https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/06/19/23/20250619234923-XEDOUG7G.json" 
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  title="Killa - Asistente Virtual"
                  allow="clipboard-write; microphone;"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
