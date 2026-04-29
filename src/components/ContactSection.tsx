import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    pais: "",
    fechas: "",
    destino: "",
    personas: "",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*SOLICITUD DE DISENO DE VIAJE*%0A%0A` +
      `Nombre: ${formData.nombre}%0A` +
      `Pais: ${formData.pais}%0A` +
      `Fechas: ${formData.fechas}%0A` +
      `Destino: ${formData.destino}%0A` +
      `Personas: ${formData.personas}%0A%0A` +
      `*Mensaje:*%0A${formData.mensaje}`;
    window.open(`https://wa.me/51942293293?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-background overflow-hidden relative">
      <div className="container-narrow px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-10">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Contacto</Badge>
              <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mb-6 leading-tight tracking-tight">
                Estamos aquí para <br /><span className="text-primary italic">ayudarte a planificar</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Si tienes dudas o quieres asesoría personalizada, puedes contactarnos directamente por nuestros canales oficiales.
              </p>
            </div>

            <div className="space-y-6">
               <div className="flex items-start gap-6 p-6 rounded-3xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</h4>
                    <a href="https://wa.me/51942293293?text=%C2%A1Hola%20Inkateam%20Travel!%20Estoy%20visitando%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20tours%20y%20experiencias%20en%20Per%C3%BA.%20%C2%BFPodr%C3%ADan%20asesorarme%3F%20Muchas%20gracias." target="_blank" rel="noopener noreferrer" className="text-xl font-black hover:text-primary transition-colors">
                      +51 942 293 293
                    </a>
                  </div>
               </div>

               <div className="flex items-start gap-6 p-6 rounded-3xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-1">Email</h4>
                    <a href="mailto:reservas@inkateamtravel.com" className="text-xl font-black hover:text-primary transition-colors">
                      reservas@inkateamtravel.com
                    </a>
                  </div>
               </div>

               <div className="flex items-start gap-6 p-6 rounded-3xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground mb-1">Ubicación</h4>
                    <p className="text-xl font-black">Lima, Perú</p>
                  </div>
               </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 flex items-center gap-4">
               <Clock className="text-primary shrink-0" size={24} />
               <p className="text-sm font-bold text-foreground">
                 <span className="text-primary italic">Tiempo de respuesta:</span> Respondemos en el menor tiempo posible para ayudarte a organizar tu viaje sin demoras.
               </p>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl border border-border p-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
             <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold mb-8 flex items-center gap-2">
                  <Send className="text-primary" size={20} /> Formulario de contacto
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <Label className="text-xs font-bold uppercase tracking-widest ml-1">Nombre</Label>
                         <Input name="nombre" onChange={handleChange} required className="rounded-xl h-12 bg-muted/20 border-border/60" placeholder="Tu nombre" />
                      </div>
                      <div className="space-y-2">
                         <Label className="text-xs font-bold uppercase tracking-widest ml-1">País</Label>
                         <Input name="pais" onChange={handleChange} required className="rounded-xl h-12 bg-muted/20 border-border/60" placeholder="Tu país" />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <Label className="text-xs font-bold uppercase tracking-widest ml-1">Fechas de viaje</Label>
                         <Input name="fechas" onChange={handleChange} required className="rounded-xl h-12 bg-muted/20 border-border/60" placeholder="Ej. Mayo 2026" />
                      </div>
                      <div className="space-y-2">
                         <Label className="text-xs font-bold uppercase tracking-widest ml-1">Destino de interés</Label>
                         <Input name="destino" onChange={handleChange} required className="rounded-xl h-12 bg-muted/20 border-border/60" placeholder="Ej. Machu Picchu" />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest ml-1">Número de personas</Label>
                      <Input name="personas" onChange={handleChange} required className="rounded-xl h-12 bg-muted/20 border-border/60" placeholder="¿Cuántos viajan?" />
                   </div>

                   <div className="space-y-2">
                      <Label className="text-xs font-bold uppercase tracking-widest ml-1">Mensaje</Label>
                      <Textarea name="mensaje" onChange={handleChange} required className="rounded-2xl min-h-[120px] bg-muted/20 border-border/60 resize-none p-4" placeholder="Cuéntanos más detalles..." />
                   </div>

                   <Button type="submit" className="w-full h-14 rounded-2xl bg-black hover:bg-black/90 text-white font-bold text-base shadow-xl transition-all hover:scale-[1.02]">
                     Empieza ahora a diseñar tu viaje
                   </Button>
                </form>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
