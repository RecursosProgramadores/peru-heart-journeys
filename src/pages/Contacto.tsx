import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Send, Clock, MessageCircle } from "lucide-react";

import bgHero from "@/assets/optimized/Filosofia.webp";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    pais: "",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Hola Inkateam, tengo una consulta general.*%0A%0A*Mis Datos:*%0A_Nombre:_ ${formData.nombre}%0A_Correo:_ ${formData.email}%0A_WhatsApp:_ ${formData.whatsapp}%0A_País de origen:_ ${formData.pais}%0A%0A*Mi Mensaje:*%0A${formData.mensaje}`;
    
    window.open(`https://wa.me/51942293293?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-body text-foreground">

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={bgHero}
          alt="Contáctanos - InkaTeam"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        <div className="container-narrow relative z-10 px-4 text-center text-white mt-24">
          <div className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-1.5 rounded-full mb-6 text-sm uppercase tracking-widest shadow-xl">
            <MessageCircle size={14} className="mr-2" /> Asistencia Inmediata
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Ponte en <span className="text-primary italic">Contacto</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-medium">
            Estamos aquí para despejar cualquier duda. Escríbenos y planifiquemos tu próxima gran aventura en Perú.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="py-20 lg:py-28 bg-background relative z-10 -mt-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Col: Contact Info */}
            <div className="w-full lg:w-5/12 space-y-12">
              <div className="space-y-6">
                <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                  Hablemos de tu viaje
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Tratamos cada mensaje con la máxima prioridad. Si prefieres un trato directo e instantáneo, el botón de WhatsApp es tu mejor vía.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 p-4 rounded-2xl shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Correo Electrónico</h4>
                    <a href="mailto:reservas@inkateamtravel.com" className="text-muted-foreground hover:text-primary transition-colors block break-all">
                      reservas@inkateamtravel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-[#25D366]/10 p-4 rounded-2xl shrink-0">
                    <Phone className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">WhatsApp | Teléfono</h4>
                    <a href="https://wa.me/51942293293" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#25D366] transition-colors block">
                      +51 942 293 293
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-amber-500/10 p-4 rounded-2xl shrink-0">
                    <Clock className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Horario de Atención</h4>
                    <p className="text-muted-foreground">
                      Lunes a Domingo<br/>Atención 24/7 (Soporte Viajeros)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: The Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white rounded-[3rem] shadow-2xl border border-border p-8 sm:p-12 h-full flex flex-col justify-center">
                <div className="mb-10">
                  <h3 className="font-display text-3xl font-bold mb-3 text-foreground">
                    Envíanos tu mensaje
                  </h3>
                  <p className="font-body text-muted-foreground text-lg">
                    Rellena este formulario rápido. Toda tu información se convertirá en un cómodo mensaje de WhatsApp directo a nuestros expertos.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-base font-bold text-foreground ml-1">Nombre Completo <span className="text-red-500">*</span></Label>
                      <Input 
                        name="nombre" 
                        value={formData.nombre} 
                        onChange={handleChange} 
                        required 
                        placeholder="Ej. María Sánchez" 
                        className="h-14 bg-muted/30 focus-visible:ring-primary/50 text-base rounded-xl border-border/80"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-base font-bold text-foreground ml-1">Correo Electrónico <span className="text-red-500">*</span></Label>
                      <Input 
                        type="email"
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="tucorreo@ejemplo.com" 
                        className="h-14 bg-muted/30 focus-visible:ring-primary/50 text-base rounded-xl border-border/80"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-base font-bold text-foreground ml-1">WhatsApp <span className="text-red-500">*</span></Label>
                      <Input 
                        name="whatsapp" 
                        value={formData.whatsapp} 
                        onChange={handleChange} 
                        required 
                        placeholder="Cod. País + Número" 
                        className="h-14 bg-muted/30 focus-visible:ring-primary/50 text-base rounded-xl border-border/80"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-base font-bold text-foreground ml-1">Ciudad o País <span className="text-red-500">*</span></Label>
                      <Input 
                        name="pais" 
                        value={formData.pais} 
                        onChange={handleChange} 
                        required 
                        placeholder="¿De dónde nos escribes?" 
                        className="h-14 bg-muted/30 focus-visible:ring-primary/50 text-base rounded-xl border-border/80"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-bold text-foreground ml-1">¿Cómo podemos ayudarte? <span className="text-red-500">*</span></Label>
                    <Textarea 
                      name="mensaje" 
                      value={formData.mensaje} 
                      onChange={handleChange} 
                      required 
                      placeholder="Cuéntanos brevemente tu consulta..." 
                      className="min-h-[160px] bg-muted/30 focus-visible:ring-primary/50 text-base resize-none rounded-2xl border-border/80 p-4"
                    />
                  </div>

                  <Button type="submit" className="w-full h-16 mt-4 text-base font-bold rounded-2xl bg-[#0A0F1C] hover:bg-[#1a233a] hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all text-white flex items-center justify-center gap-3">
                    Enviar a Nuestros Expertos <Send className="w-5 h-5" />
                  </Button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Width Map Section right above the Footer */}
      <section className="relative w-full h-[600px] border-t border-border group overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4080062947687!2d-77.0626565!3d-12.0841964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c79f48a52c59%3A0x49f36652103fc0b6!2sInkateam%20Travel!5e0!3m2!1ses!2spe!4v1773936730046!5m2!1ses!2spe" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full grayscale-[15%] contrast-[1.05] hover:grayscale-0 transition-all duration-1000"
          title="Inkateam Travel Mapa Oficial"
        />
        
        {/* Floating Overlay Badge that disappears when hovering the map for pure interaction */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl border border-border flex items-center justify-center gap-3 text-sm sm:text-lg font-bold text-foreground z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700 whitespace-nowrap">
          <MapPin className="w-6 h-6 text-primary" /> 
          Encuéntranos en Inkateam Travel
        </div>
      </section>

    </div>
  );
};

export default Contacto;
