import { Badge } from "./ui/badge";
import { Sparkles, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";


const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30 overflow-hidden relative">
      <div className="container-narrow px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/3 space-y-8">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">FAQ</Badge>
              <h2 className="font-display text-4xl font-black text-foreground mb-6 leading-tight">
                Resolvemos tus <br /><span className="text-primary italic">dudas antes de viajar</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Es normal tener preguntas. Por eso creamos Killa, nuestro asistente virtual, para ayudarte en tiempo real con toda la información que necesitas sobre tu viaje a Perú.
              </p>
            </div>
            
            <div className="p-8 rounded-[2rem] bg-white shadow-xl border border-border/50">
               <h4 className="font-bold mb-2">¿Prefieres hablar con una persona?</h4>
               <p className="text-sm text-muted-foreground mb-6">Nuestro equipo está listo para ayudarte por WhatsApp y resolver todas tus dudas de forma personalizada.</p>
               <Button className="w-full rounded-xl bg-black hover:bg-black/90 text-white font-bold" asChild>
                  <a href="https://wa.me/51942293293" target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={16} className="mr-2" /> Escríbenos por WhatsApp
                  </a>
               </Button>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-[3rem] shadow-2xl border border-primary/10 overflow-hidden relative">
              <div className="bg-primary/5 p-6 border-b border-primary/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                    <Sparkles size={24} className="animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">Killa Assistant</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">En línea ahora</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">IA Especializada</Badge>
              </div>
              
              <div className="relative h-[600px] w-full bg-slate-50">
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
    </section>
  );
};

export default FAQSection;
