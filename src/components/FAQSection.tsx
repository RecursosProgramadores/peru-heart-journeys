import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "./ui/badge";
import { HelpCircle, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "¿Con cuánto tiempo debo reservar?",
    answer: "Recomendamos hacerlo con al menos 1 a 3 meses de anticipación, especialmente para servicios con alta demanda como las entradas a Machu Picchu o el Camino Inca."
  },
  {
    question: "¿Los vuelos están incluidos?",
    answer: "No. Los vuelos internacionales y domésticos se cotizan por separado o pueden ser gestionados por nosotros bajo solicitud expresa de el cliente."
  },
  {
    question: "¿Qué pasa con la altura en Cusco?",
    answer: "La altura es un factor importante. Recomendamos descansar el primer día de llegada, mantenerse bien hidratado (el mate de coca ayuda mucho) y evitar esfuerzos físicos intensos durante las primeras 24 horas."
  },
  {
    question: "¿Qué incluye el viaje?",
    answer: "Cada plan detalla claramente lo que incluye y no incluye. Generalmente cubrimos traslados, hoteles seleccionados, entradas, trenes y guías expertos. Los detalles específicos se envían en tu itinerario final."
  },
  {
    question: "¿Cómo se realiza el pago?",
    answer: "El proceso es sencillo: puedes reservar con un pago inicial (depósito) para asegurar los permisos y hoteles, y completar el saldo restante un tiempo determinado antes del inicio del viaje."
  }
];

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
                Sabemos que planificar un viaje a Perú genera muchas preguntas. Aquí respondemos las más frecuentes para que sientas total seguridad.
              </p>
            </div>
            
            <div className="p-8 rounded-[2rem] bg-white shadow-xl border border-border/50">
               <HelpCircle className="text-primary mb-4" size={32} />
               <h4 className="font-bold mb-2">¿Tienes otra duda?</h4>
               <p className="text-sm text-muted-foreground mb-6">Estamos disponibles 24/7 para asistirte en lo que necesites.</p>
               <Button className="w-full rounded-xl bg-black hover:bg-black/90 text-white font-bold" asChild>
                  <a href="https://wa.me/51942293293" target="_blank" rel="noopener noreferrer">
                    <MessageSquare size={16} className="mr-2" /> Escríbenos por WhatsApp
                  </a>
               </Button>
            </div>
          </div>

          <div className="lg:w-2/3 bg-white p-6 md:p-10 rounded-[3rem] shadow-sm border border-border/60">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/60 last:border-0">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:text-primary transition-colors hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
