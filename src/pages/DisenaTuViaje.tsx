import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, MessageSquareText, FileSignature, PlaneTakeoff, ArrowRight, Star, Compass, MousePointer2, Send, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import heroImg from "@/assets/dest-amazonia.jpg";
import featureImg from "@/assets/act-valle-sagrado.jpg";

const steps = [
  {
    icon: <MousePointer2 className="w-10 h-10 text-primary" />,
    title: "1. Imagina",
    desc: "Elige tus destinos favoritos, las fechas en las que deseas viajar, el tipo de experiencia que buscas y el nivel de confort que prefieres (desde económico hasta lujo).",
  },
  {
    icon: <MessageSquareText className="w-10 h-10 text-primary" />,
    title: "2. Conecta",
    desc: "Agendamos una videollamada contigo para entender tu viaje ideal y resolver dudas. Luego, iniciamos el diseño detallado con un pago parcial.",
  },
  {
    icon: <PlaneTakeoff className="w-10 h-10 text-primary" />,
    title: "3. Logra",
    desc: "Recibes tu itinerario completo con rutas optimizadas, reservas confirmadas y una guía personalizada en PDF. Te acompañamos en todo el proceso.",
  }
];

const DESTINOS_OPCIONES = [
  "Lima", 
  "Paracas & Ica", 
  "Cusco", 
  "Machu Picchu", 
  "Montaña de 7 Colores", 
  "Laguna de Humantay", 
  "Puno & Lago Titicaca", 
  "Huaraz / Arequipa / Nasca"
];

const EXPERIENCIAS_OPCIONES = [
  "Cultural", 
  "Aventura (trekking, naturaleza)", 
  "Relax", 
  "Gastronómica", 
  "Turismo Vivencial - Comunitario"
];

const CONFORT_OPCIONES = [
  "Económico (Hostels / Hoteles 2*)",
  "Estándar (Hoteles 3*)",
  "Superior (Hoteles 4*)",
  "Lujo / Boutique (Hoteles 5*)"
];

const DisenaTuViaje = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    origen: "",
    dias: "",
    fechas: "",
    confort: "",
    comentarios: ""
  });
  
  const [destinosSeleccionados, setDestinosSeleccionados] = useState<string[]>([]);
  const [experienciasSeleccionadas, setExperienciasSeleccionadas] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleCheckbox = (setter: React.Dispatch<React.SetStateAction<string[]>>, current: string[], value: string) => {
    if (current.includes(value)) {
      setter(current.filter(item => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const destinosTxt = destinosSeleccionados.length > 0 ? destinosSeleccionados.join(', ') : 'No especificado';
    const experienciasTxt = experienciasSeleccionadas.length > 0 ? experienciasSeleccionadas.join(', ') : 'No especificado';

    const message = `🌟 *PLANIFICACIÓN DE VIAJE PERSONALIZADO* 🌟%0A%0A` +
      `👤 *NOMBRE:* ${formData.nombre}%0A` +
      `📱 *WHATSAPP:* ${formData.whatsapp}%0A` +
      `📧 *CORREO:* ${formData.email}%0A` +
      `🌍 *ORIGEN:* ${formData.origen}%0A%0A` +
      `📍 *DESTINOS:* ${destinosTxt}%0A` +
      `📅 *FECHAS:* ${formData.fechas}%0A` +
      `⏱ *DÍAS:* ${formData.dias}%0A` +
      `🏨 *CONFORT:* ${formData.confort || 'No especificado'}%0A` +
      `🏕 *EXPERIENCIA:* ${experienciasTxt}%0A%0A` +
      `💬 *COMENTARIOS:*%0A${formData.comentarios}`;
    
    window.open(`https://wa.me/51942293293?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Tu viaje a tu manera - Perú"
            className="w-full h-full object-cover opacity-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-background" />
        </div>
        
        <div className="container-narrow relative z-10 mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-6 py-1 animate-fade-in uppercase tracking-[0.2em] text-xs font-black">
            Personalización Total
          </Badge>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-2xl leading-tight">
            Tu viaje, <br /><span className="text-primary italic">a tu manera</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md font-light">
            No todos los viajeros buscan lo mismo. Por eso diseñamos experiencias completamente personalizadas en función de tus intereses, tiempo y estilo de viaje.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 h-14 text-lg font-bold shadow-xl shadow-primary/20" asChild>
                <a href="#proceso">¿Cómo funciona?</a>
             </Button>
             <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-white text-white hover:bg-white/10 h-14 text-lg font-bold" asChild>
                <a href="#formulario">Empieza ahora</a>
             </Button>
          </div>
        </div>
      </section>

      {/* Intro & Narrative */}
      <section className="py-24 bg-background">
        <div className="container-narrow mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 text-foreground leading-tight">
                El viaje que <span className="text-primary italic">imaginas</span>, lo hacemos realidad.
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 text-balance">
                En Inkateam Travel entendemos que la magia de un viaje reside en los detalles que importan para ti. Ya sea que busques una inmersión cultural profunda o una aventura extrema, nuestro equipo diseña cada minuto pensando en tu satisfacción.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   "Destinos a elección", 
                   "Flexibilidad de fechas", 
                   "Experiencia a tu ritmo", 
                   "Confort garantizado"
                 ].map(item => (
                   <div key={item} className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/40">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                      <span className="font-bold text-sm tracking-tight">{item}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full" />
              <img 
                src={featureImg} 
                alt="Personalización de viajes Inkateam" 
                className="relative z-10 w-full rounded-[3rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-border/50 max-w-xs animate-fade-up">
                <blockquote className="text-sm italic text-muted-foreground leading-relaxed mb-4">
                  "No pierdas tiempo buscando información obsoleta. Nosotros diseñamos tu viaje como si fuera para nosotros mismos."
                </blockquote>
                <div className="flex items-center gap-2">
                   <div className="h-0.5 w-8 bg-primary" />
                   <span className="text-xs font-bold uppercase tracking-widest text-primary">Expertos Inkateam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section id="proceso" className="py-24 bg-muted/20 border-y border-border/40">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 text-primary border-primary font-bold">Metodología Inkateam</Badge>
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-foreground leading-tight">¿Cómo <span className="text-primary italic">funciona?</span></h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">Un proceso sencillo y transparente para lograr el viaje de tus sueños.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 group border border-border/60">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button className="rounded-full px-10 h-14 bg-black text-white hover:bg-black/90 font-bold group shadow-xl" asChild>
                <a href="https://wa.me/51942293293" target="_blank" rel="noopener noreferrer">
                   O escríbenos directamente por WhatsApp <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
             </Button>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="formulario" className="py-24 bg-background">
        <div className="container-narrow mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-foreground">
              Empieza ahora a <br /><span className="text-primary italic">diseñar tu viaje</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed italic">
              "Deja de imaginar y hagamos realidad ese sueño. Cuéntanos qué tienes en mente y nosotros nos encargamos de aterrizarlo."
            </p>
          </div>

          <div className="bg-white rounded-[4rem] shadow-2xl border border-border/60 p-8 sm:p-16 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
             
            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              
              {/* Sección 1: Tus Datos */}
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                   <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Datos Personales</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Nombre Completo *</Label>
                    <Input name="nombre" value={formData.nombre} onChange={handleChange} required placeholder="Tu nombre y apellido" className="h-14 bg-muted/30 border-none rounded-2xl focus:ring-primary" />
                  </div>
                  <div className="space-y-3">
                    <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">WhatsApp *</Label>
                    <Input name="whatsapp" value={formData.whatsapp} onChange={handleChange} required placeholder="Cód. País + Número" className="h-14 bg-muted/30 border-none rounded-2xl focus:ring-primary" />
                  </div>
                  <div className="space-y-3">
                    <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Correo Electrónico *</Label>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="tucorreo@ejemplo.com" className="h-14 bg-muted/30 border-none rounded-2xl focus:ring-primary" />
                  </div>
                  <div className="space-y-3">
                    <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Origen *</Label>
                    <Input name="origen" value={formData.origen} onChange={handleChange} required placeholder="¿Desde dónde nos escribes?" className="h-14 bg-muted/30 border-none rounded-2xl focus:ring-primary" />
                  </div>
                </div>
              </div>

              {/* Sección 2: El Viaje */}
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                   <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Detalles del Viaje</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                      <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Destinos de Interés *</Label>
                      <div className="grid grid-cols-1 gap-1">
                        {DESTINOS_OPCIONES.map((dest) => (
                          <label key={dest} className="group flex items-center gap-4 cursor-pointer p-3 rounded-2xl hover:bg-muted/50 transition-all border border-transparent hover:border-border">
                            <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${destinosSeleccionados.includes(dest) ? 'bg-primary border-primary' : 'border-border bg-white group-hover:border-primary/50'}`}>
                              {destinosSeleccionados.includes(dest) && <Check size={14} className="text-white" strokeWidth={3} />}
                            </div>
                            <input 
                              type="checkbox" 
                              className="hidden"
                              checked={destinosSeleccionados.includes(dest)}
                              onChange={() => toggleCheckbox(setDestinosSeleccionados, destinosSeleccionados, dest)}
                            />
                            <span className={`text-sm font-bold transition-colors ${destinosSeleccionados.includes(dest) ? 'text-foreground' : 'text-muted-foreground'}`}>{dest}</span>
                          </label>
                        ))}
                      </div>
                   </div>

                   <div className="space-y-8">
                      <div className="space-y-3">
                        <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Fechas Tentativas *</Label>
                        <Input name="fechas" value={formData.fechas} onChange={handleChange} required placeholder="Mes o fechas específicas" className="h-14 bg-muted/30 border-none rounded-2xl" />
                      </div>
                      <div className="space-y-3">
                        <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Días Disponibles *</Label>
                        <Input name="dias" value={formData.dias} onChange={handleChange} required placeholder="Ej. 10 días" className="h-14 bg-muted/30 border-none rounded-2xl" />
                      </div>
                      <div className="space-y-3">
                        <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Nivel de Confort *</Label>
                        <div className="relative">
                          <select 
                            name="confort" 
                            value={formData.confort} 
                            onChange={handleChange} 
                            required 
                            className="w-full h-14 bg-muted/30 border-none rounded-2xl px-4 text-sm font-bold focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer"
                          >
                            <option value="">Selecciona nivel de confort</option>
                            {CONFORT_OPCIONES.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                          <Compass className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 pointer-events-none" size={20} />
                        </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* Sección 3: Experiencias */}
              <div className="space-y-6">
                 <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">Tipo de Experiencia *</Label>
                 <div className="flex flex-wrap gap-3">
                   {EXPERIENCIAS_OPCIONES.map((exp) => (
                     <label key={exp} className={`cursor-pointer px-6 py-4 rounded-2xl border-2 transition-all font-black text-[10px] uppercase tracking-widest ${experienciasSeleccionadas.includes(exp) ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20' : 'border-border bg-transparent text-muted-foreground hover:border-primary/50'}`}>
                       <input 
                         type="checkbox" 
                         className="hidden"
                         checked={experienciasSeleccionadas.includes(exp)}
                         onChange={() => toggleCheckbox(setExperienciasSeleccionadas, experienciasSeleccionadas, exp)}
                       />
                       {exp}
                     </label>
                   ))}
                 </div>
              </div>

              {/* Comentarios */}
              <div className="space-y-4">
                <Label className="font-bold text-xs uppercase tracking-widest text-muted-foreground ml-1">¿Algo más que debamos saber? *</Label>
                <Textarea 
                  name="comentarios" 
                  value={formData.comentarios} 
                  onChange={handleChange} 
                  required 
                  placeholder="Cuéntanos tus preferencias especiales, alergias alimentarias o cualquier detalle importante..." 
                  className="min-h-[160px] bg-muted/30 border-none rounded-[2rem] p-8 text-sm font-medium resize-none focus:ring-primary leading-relaxed"
                />
              </div>

              <div className="pt-10">
                <Button type="submit" className="w-full h-16 rounded-[2rem] bg-black hover:bg-black/90 text-white font-black text-lg shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3 active:scale-95">
                  <Send className="w-5 h-5 mr-1" /> Enviar a mis expertos
                </Button>
                <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <p className="text-xs font-bold uppercase tracking-widest">Respondemos en menos de 24 horas</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default DisenaTuViaje;
