import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, MessageSquareText, FileSignature, PlaneTakeoff, ArrowRight, Star, Compass } from "lucide-react";

import heroImg from "@/assets/dest-amazonia.jpg";
import featureImg from "@/assets/act-valle-sagrado.jpg";

const steps = [
  {
    icon: <MessageSquareText className="w-10 h-10 text-primary" />,
    title: "¿Que lugares de Perú te gustaria conocer?",
    desc: "\"Imagina tu viaje soñado: elige tu destino, decide cuándo y con quién quieres viajar, planifica las actividades que te apasionan, selecciona el transporte ideal y deléitate con la gastronomía que deseas probar. Cuéntanos tu visión, y nosotros nos encargamos de hacerla realidad.\""
  },
  {
    icon: <FileSignature className="w-10 h-10 text-primary" />,
    title: "!Nos conoceremos!",
    desc: "\"Realizaremos una videollamada para conocernos mejor y explorar en detalle lo que esperas de este viaje, enfocándonos en los aspectos que más te importan. Si decides confiar en nosotros para planificar tu aventura, solo necesitarás realizar un pago parcial para iniciar el proceso.\""
  },
  {
    icon: <PlaneTakeoff className="w-10 h-10 text-primary" />,
    title: "¡Viaje soñado conseguido!",
    desc: "\"En nuestras reuniones, definiremos cada detalle de tu viaje: ruta, documentación, vuelos, entradas y reservas. ¡Tu viaje soñado estará listo! Cuando tengamos la ruta final y los boletos de avión, completaremos el pago restante. Recibirás una guía personalizada en PDF y los documentos necesarios para garantizar el servicio y el soporte durante tu aventura.\""
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

const DisenaTuViaje = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    email: "",
    origen: "",
    dias: "",
    fechas: "",
    comentarios: ""
  });
  
  const [destinosSeleccionados, setDestinosSeleccionados] = useState<string[]>([]);
  const [experienciasSeleccionadas, setExperienciasSeleccionadas] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const message = `🌟 *Hola Inkateam, quiero diseñar un viaje personalizado.* 🌟%0A%0A*Mis Datos:*%0A👤 Nombre: ${formData.nombre}%0A📱 WhatsApp: ${formData.whatsapp}%0A📧 Correo: ${formData.email}%0A🌍 Origen: ${formData.origen}%0A%0A*Mi Viaje:*%0A📍 Destinos: ${destinosTxt}%0A⏱ Días disponibles: ${formData.dias}%0A🏕 Tipo de experiencia: ${experienciasTxt}%0A📅 Fechas tentativas: ${formData.fechas}%0A%0A*Comentarios Adicionales:*%0A${formData.comentarios || 'Ninguno'}`;
    
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
            alt="Diseña tu viaje a Perú"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-background/90" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-400 font-bold px-5 py-2 rounded-full mb-8 text-sm uppercase tracking-widest backdrop-blur-md border border-amber-400/30">
            <Star className="w-4 h-4 fill-amber-400" /> Servicio Premium Integral <Star className="w-4 h-4 fill-amber-400" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-2xl">
            Diseña tu <span className="text-primary italic">viaje perfecto</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Diseñamos viajes personalizados en Perú basándonos exclusivamente en tus intereses, fechas exactas y tu estilo único de viaje.
          </p>
        </div>
      </section>

      {/* Intro & Benefits "Todo lo que ganas" */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full z-0" />
              <img 
                src={featureImg} 
                alt="Turista feliz en el Valle Sagrado" 
                className="relative z-10 w-full rounded-[2.5rem] shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-border/50 animate-bounce-gentle">
                <Compass className="w-10 h-10 text-primary" />
                <div>
                  <h4 className="font-bold text-foreground">100% Para ti</h4>
                  <p className="text-sm text-muted-foreground">Itinerario a medida</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 text-foreground leading-tight">
                Todo lo que <span className="text-primary italic">ganas</span>
              </h2>
              
              <div className="space-y-6">
                <p className="font-body text-lg text-muted-foreground leading-relaxed flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Aprovecha nuestra experiencia en el mundo de los viajes. Llevamos muchos años viajando y planificando viajes y te lo vamos a planificar como si fuera para nosotros.</span>
                </p>
                
                <p className="font-body text-lg text-muted-foreground leading-relaxed flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>¡No pierdas tu tiempo en buscar información en blogs, guías, artículos… en ocasiones obsoleta! Ya lo hacemos nosotros por ti. Vive un viaje diferente sin volverte loc@.</span>
                </p>

                <p className="font-body text-lg text-muted-foreground leading-relaxed flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Una guía de viaje 100% para ti. Tú decides qué quieres vivir y qué no, cuánto tiempo pasar en cada lugar, cómo hacer los traslados… Tú pídenos lo que deseas y nosotros lo organizamos.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / Pasos a seguir */}
      <section className="py-24 bg-muted/30 border-y border-border/50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h4 className="font-bold text-primary tracking-widest uppercase mb-4">¿QUE TENGO QUE HACER?</h4>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-foreground uppercase">Pasos a seguir para el diseño de tu viaje</h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto italic">
              "Quiero que Inkateam Travel diseñe y planifique mi viaje"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-border/50 group hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-[8rem] font-display font-bold text-muted/20 z-0 select-none group-hover:text-primary/10 transition-colors duration-500">
                  0{idx + 1}
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                    <div className="group-hover:text-white transition-colors duration-500">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-6 text-foreground leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed text-lg bg-background/50 p-5 rounded-2xl border border-border/30 italic">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
              ¿Listo para diseñar tu viaje?
            </h2>
            <h3 className="font-display text-xl md:text-2xl font-bold mb-8 text-primary uppercase tracking-wide">
              Complete este formulario para hacer una reserva
            </h3>
            
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2rem] text-left shadow-sm">
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
                Bueno ya dejemos de imaginar y hagamos realidad ese sueño que tienes ahi en la mente.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
                La propuesta es sencilla: Tu me cuentas como es el viaje que tienes en mente y yo me encargo de aterrizarlo y luego de unas semanas hablaremos de todo lo que vas a necesitar para que este se haga realidad.
              </p>
              <p className="font-body text-lg font-bold text-foreground leading-relaxed border-l-4 border-primary pl-4">
                ¡Vamos a construir juntos algo que valga la pena, algo transformador. Vamos a dar el primer paso!
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-border p-8 sm:p-14">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* Nombres y Contacto */}
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-bold text-foreground mb-3 block">Nombre Completo <span className="text-red-500">*</span></Label>
                  <Input 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    required 
                    placeholder="NOMBRE Y APELLIDO" 
                    className="h-14 bg-background focus-visible:ring-primary/50 text-base shadow-sm border-gray-300"
                  />
                </div>

                <div>
                  <Label className="text-base font-bold text-foreground mb-3 block">Número de WhatsApp <span className="text-red-500">*</span></Label>
                  <Input 
                    name="whatsapp" 
                    value={formData.whatsapp} 
                    onChange={handleChange} 
                    required 
                    placeholder="COD PAIS + NUMERO" 
                    className="h-14 bg-background focus-visible:ring-primary/50 text-base shadow-sm border-gray-300"
                  />
                </div>

                <div>
                  <Label className="text-base font-bold text-foreground mb-3 block">Correo Electrónico <span className="text-red-500">*</span></Label>
                  <Input 
                    type="email"
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="TU MEJOR EMAIL" 
                    className="h-14 bg-background focus-visible:ring-primary/50 text-base shadow-sm border-gray-300"
                  />
                </div>

                <div>
                  <Label className="text-base font-bold text-foreground mb-3 block">Ciudad o País de origen <span className="text-red-500">*</span></Label>
                  <Input 
                    name="origen" 
                    value={formData.origen} 
                    onChange={handleChange} 
                    required 
                    placeholder="DE DONDE NOS ESCRIBES" 
                    className="h-14 bg-background focus-visible:ring-primary/50 text-base shadow-sm border-gray-300"
                  />
                </div>
              </div>

              {/* Destinos */}
              <div className="pt-4">
                <Label className="text-lg font-bold text-foreground mb-5 block">¿Que destinos te interesan? <span className="text-red-500">*</span></Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {DESTINOS_OPCIONES.map((dest) => (
                    <label key={dest} className="flex items-center gap-3 cursor-pointer group p-1">
                      <input 
                        type="checkbox" 
                        checked={destinosSeleccionados.includes(dest)}
                        onChange={() => toggleCheckbox(setDestinosSeleccionados, destinosSeleccionados, dest)}
                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white cursor-pointer accent-primary"
                      />
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">{dest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Días */}
              <div className="pt-4">
                <Label className="text-base font-bold text-foreground mb-3 block">¿Cuantos días tienes disponible para viajar? <span className="text-red-500">*</span></Label>
                <Input 
                  name="dias" 
                  value={formData.dias} 
                  onChange={handleChange} 
                  required 
                  className="h-14 bg-background focus-visible:ring-primary/50 text-base shadow-sm border-gray-300"
                />
              </div>

              {/* Experiencias */}
              <div className="pt-4">
                <Label className="text-lg font-bold text-foreground mb-5 block">¿Que tipo de experiencia buscas? <span className="text-red-500">*</span></Label>
                <div className="flex flex-col gap-4">
                  {EXPERIENCIAS_OPCIONES.map((exp) => (
                    <label key={exp} className="flex items-center gap-3 cursor-pointer group p-1 w-fit">
                      <input 
                        type="checkbox" 
                        checked={experienciasSeleccionadas.includes(exp)}
                        onChange={() => toggleCheckbox(setExperienciasSeleccionadas, experienciasSeleccionadas, exp)}
                        className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary bg-white cursor-pointer accent-primary"
                      />
                      <span className="text-foreground font-medium group-hover:text-primary transition-colors">{exp}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Fechas */}
              <div className="pt-4">
                <Label className="text-base font-bold text-foreground mb-3 block">¿Tienes una fecha tentativa de viaje? <span className="text-red-500">*</span></Label>
                <Input 
                  name="fechas" 
                  value={formData.fechas} 
                  onChange={handleChange} 
                  required 
                  className="h-14 bg-background focus-visible:ring-primary/50 text-base shadow-sm border-gray-300"
                />
              </div>

              {/* Comentarios extras */}
              <div className="pt-4">
                <Label className="text-base font-bold text-foreground mb-3 block">¿Hay algo más que debamos saber para diseñar tu viaje perfecto? <span className="text-red-500">*</span></Label>
                <Textarea 
                  name="comentarios" 
                  value={formData.comentarios} 
                  onChange={handleChange} 
                  required 
                  placeholder="ALGUN DETALLE QUE SEA IMPORTANTE PARA TU VIAJE" 
                  className="min-h-[120px] bg-background focus-visible:ring-primary/50 text-base resize-none shadow-sm border-gray-300"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8 flex justify-start">
                <Button type="submit" className="h-14 px-8 text-base font-bold rounded-lg bg-black hover:bg-black/80 text-white flex items-center gap-2 shadow-xl transition-all hover:pr-6 hover:pl-10">
                  Enviar <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
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
