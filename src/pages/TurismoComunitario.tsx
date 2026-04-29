import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Users, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Waves, 
  Compass, 
  Instagram,
  MessageCircle,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImg from "@/assets/optimized/HOMEEXPERULAGotITI.webp";

const TurismoComunitario = () => {
  const itinerary = [
    {
      day: 1,
      title: "El Despertar en la Ciudad Imperial",
      content: "Bienvenida a la capital histórica de los Incas. A su llegada, el equipo le asistirá para asegurar una correcta aclimatación a los 3,400 m.s.n.m. de la ciudad de Cusco. Por la tarde, realizaremos un City Tour Panorámico diseñado para honrar el ritmo de su cuerpo en la altura. Desde un bus acondicionado, conectaremos con la majestuosidad de la Plaza de Armas, el misticismo del templo del Qorikancha y las vistas imponentes de la fortaleza de Sacsayhuamán.",
      icon: <MapPin className="text-primary" />
    },
    {
      day: 2,
      title: "La Ciudadela Sagrada de Machu Picchu",
      content: "Iniciamos la jornada con el traslado a la estación de Ollantaytambo para abordar el tren hacia Aguas Calientes. En la ciudadela sagrada de Machu Picchu, nuestra guía especializada nos conducirá por templos y terrazas ceremoniales, permitiéndonos absorber la poderosa energía que emana de este centro oráculo del mundo.",
      icon: <Sparkles className="text-primary" />
    },
    {
      day: 3,
      title: "Gratitud en la Cumbre de Vinicunca",
      content: "Partimos antes del amanecer hacia la Montaña de Siete Colores. Tras una caminata de 1.5 horas, alcanzaremos los 5,000 m.s.n.m. para presenciar una paleta de colores natural que desafía la imaginación. Tras un almuerzo reconfortante, abordaremos a las 22:00 h el bus turístico nocturno con destino al Altiplano.",
      icon: <Compass className="text-primary" />
    },
    {
      day: 4,
      title: "Rituales de Tierra y Agua (Amantaní)",
      content: "Llegada a Puno y traslado a la Península de Capachica. Zarparemos en un bote de vela tradicional hacia la Isla Tikonata. Luego, en Amantaní, participaremos en la preparación de una Pachamanca ritual con familias quechuas y ascenderemos al templo de Pachatata para una ceremonia de pago a la Pachamama.",
      icon: <Heart className="text-primary" />
    },
    {
      day: 5,
      title: "Reciprocidad y el Banquete del Quqawi (Karina y Uros Titino)",
      content: "Navegamos hacia la comunidad aimara de Karina para vivir el Quqawi, un almuerzo ritual comunitario que celebra la abundancia y la reciprocidad andina. Posteriormente, exploraremos las Islas Uros Titino para aprender sus técnicas constructivas ancestrales de vida sobre la totora.",
      icon: <Users className="text-primary" />
    },
    {
      day: 6,
      title: "Saberes del Silencio y Titikayak",
      content: "En Llachón nos integraremos en labores cotidianas (adobe, agricultura, hilado). Como cierre espiritual, viviremos la experiencia de Titikayak: remar en kayak sobre las aguas sagradas del Titicaca acompañados por un pescador local. Traslado al aeropuerto de Juliaca para el retorno.",
      icon: <Waves className="text-primary" />
    }
  ];

  const inclusions = [
    "Traslados privados aeropuerto – hotel – estación – terminal",
    "02 noches de hotel en Cusco (base doble/triple) con desayunos",
    "City Tour Panorámico, tren turístico (RT), buses de acceso y entrada a Machu Picchu",
    "Excursión Vinicunca con guía, transporte, desayuno y almuerzo",
    "Bus turístico nocturno (semi cama) Cusco - Puno",
    "Transporte lacustre (bote de vela y lanchas motoras)",
    "02 noches en casas de familia (Amantaní y Llachón) con alimentación completa",
    "Ritual de Pago a la Pachamama, Quqawi y Titikayak",
    "Talleres de adobe, agricultura, tejido y cerámica"
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Turismo Comunitario en Perú" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container-narrow relative z-10 text-center text-white px-4 mt-24">
          <Badge className="mb-6 bg-primary/20 hover:bg-primary/30 text-white border-white/20 px-4 py-1 animate-fade-in uppercase tracking-widest text-xs">
            Comunidad Tejiendo Viajes
          </Badge>
          <h1 className="text-4xl md:text-7xl font-display font-black mb-6 leading-tight">
            Viaja para conectar, <br /> <span className="text-primary italic">no solo para conocer</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
            Vivir el Perú desde adentro, compartiendo con personas reales, tradiciones vivas y formas de vida ancestrales.
          </p>
          <Button size="lg" className="mt-10 rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-bold h-14 text-lg shadow-xl shadow-primary/20" asChild>
            <a href="https://wa.me/51942293293?text=%C2%A1Hola%20Inkateam!%20Me%20gustar%C3%ADa%20tejer%20mi%20propia%20aventura%20con%20la%20comunidad.%20Estoy%20interesado%20en%20la%20experiencia%20de%20Turismo%20Comunitario.%20%C2%BFMe%20podr%C3%ADan%20brindar%20disponibilidad%3F" target="_blank" rel="noopener noreferrer">
              Quiero tejer mi propia aventura
            </a>
          </Button>
        </div>
      </section>

      {/* Intro Section - El Latido de los Andes */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container-narrow px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 tracking-tight text-foreground">
            El Latido de los Andes
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              El turismo comunitario en el corazón de los Andes peruanos no es un simple itinerario; es una invitación abierta a la transformación personal. A través del turismo vivencial, el viajero trasciende la superficie del paisaje para sumergirse en la sabiduría ancestral de las comunidades andinas, donde la vida se rige por el ritmo de la tierra y la generosidad del espíritu.
            </p>
            <p>
              En esta sección, presentamos experiencias auténticas diseñadas para quienes anhelan una conexión humana real, basada en la reciprocidad y el respeto mutuo. Al caminar junto a las familias locales, compartir su mesa y participar en sus ritos, el visitante deja de ser un observador para integrarse en un tejido social de vínculos profundos.
            </p>
            <p className="font-bold text-primary italic">
              Descubra un Perú donde cada encuentro es un aprendizaje y cada paso es una huella en el alma.
            </p>
          </div>
        </div>
      </section>

      {/* Itinerary Section */}
      <section className="py-24 container-narrow px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">6 Días de Inmersión</Badge>
          <h2 className="text-4xl font-display font-bold mb-4">Tejiendo Aventuras Andinas</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Cusco & Lago Titicaca: Un viaje grupal diseñado para generar conexión humana y recuerdos auténticos.</p>
        </div>

        <div className="relative space-y-8 md:space-y-0 md:flex md:flex-col items-center">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {itinerary.map((item, index) => (
            <div key={item.day} className={`relative md:flex md:w-full items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Point on timeline */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-background bg-white shadow-xl items-center justify-center z-10 transition-transform hover:scale-110">
                <span className="text-primary font-bold">{item.day}</span>
              </div>

              {/* Content Card */}
              <div className="md:w-[42%] bg-white p-8 rounded-3xl shadow-sm border hover:shadow-xl transition-all group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl leading-tight">Día {item.day}: {item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.content}
                </p>
              </div>
              <div className="md:w-[42%]" />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Experiences Grid */}
      <section className="py-24 bg-black text-white">
        <div className="container-narrow px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <Badge className="bg-primary hover:bg-primary mb-4">Experiencia destacada</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Aquí no eres un turista. <br /> <span className="text-primary">Eres parte de la comunidad.</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 text-white rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors">
              <CardContent className="p-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-bold">Convivencia Real</h3>
                <ul className="space-y-3 opacity-80 text-sm">
                   <li className="flex items-start gap-2">• Familias locales reales</li>
                   <li className="flex items-start gap-2">• Pernocte en Amantaní y Llachón</li>
                   <li className="flex items-start gap-2">• Labores cotidianas compartidas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors">
              <CardContent className="p-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <Heart size={28} />
                </div>
                <h3 className="text-2xl font-bold">Rituales Ancestrales</h3>
                <ul className="space-y-3 opacity-80 text-sm">
                   <li className="flex items-start gap-2">• Preparación de Pachamanca</li>
                   <li className="flex items-start gap-2">• Banquete Quqawi ritual</li>
                   <li className="flex items-start gap-2">• Pago a la Pachamama en Pachatata</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 text-white rounded-[2rem] overflow-hidden hover:bg-white/10 transition-colors">
              <CardContent className="p-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <Waves size={28} />
                </div>
                <h3 className="text-2xl font-bold">Aventura en Conexión</h3>
                <ul className="space-y-3 opacity-80 text-sm">
                   <li className="flex items-start gap-2">• Navegación en vela tradicional</li>
                   <li className="flex items-start gap-2">• Titikayak (Kayak en el Titicaca)</li>
                   <li className="flex items-start gap-2">• Talleres de hilado y cerámica</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing and Logistics Section */}
      <section className="py-24 container-narrow px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Guía Práctica del Viajero</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este viaje es una experiencia exclusiva para la comunidad de Tejiendo Viajes, diseñada bajo estándares de turismo responsable y sostenible.
              </p>
            </div>

            <div className="space-y-4">
               <h4 className="font-bold flex items-center gap-2 text-primary">
                 <CheckCircle2 size={20} /> Lo que incluye este viaje
               </h4>
               <ul className="grid grid-cols-1 gap-3">
                 {inclusions.map((inc, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground bg-muted/30 p-3 rounded-xl border border-border/50">
                     <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                     {inc}
                   </li>
                 ))}
               </ul>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200">
               <h4 className="font-bold flex items-center gap-2 text-amber-700 mb-3">
                 <AlertCircle size={20} /> Consideraciones adicionales
               </h4>
               <ul className="space-y-2 text-sm text-amber-800 opacity-80">
                  <li>• Vuelos domésticos e internacionales.</li>
                  <li>• Cena del Día 3 en Cusco.</li>
                  <li>• Seguro de viaje (obligatorio para la seguridad del grupo).</li>
               </ul>
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="bg-white rounded-[2.5rem] border-2 border-primary/20 p-10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
               <div className="relative z-10 space-y-8">
                  <div className="text-center">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">Inversión del Viaje</p>
                    <div className="flex items-baseline justify-center gap-2">
                       <span className="text-xl font-bold text-muted-foreground">DESDE</span>
                       <span className="text-6xl font-black text-foreground">$890</span>
                       <span className="text-xl font-bold text-muted-foreground">USD</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 italic">Precio por persona en base doble</p>
                  </div>

                  <div className="space-y-4">
                     <Button className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]" asChild>
                       <a href="https://wa.me/51942293293?text=%C2%A1Hola!%20Deseo%20consultar%20disponibilidad%20para%20la%20experiencia%20de%20Turismo%20Comunitario.%20Muchas%20gracias." target="_blank" rel="noopener noreferrer">
                         <MessageCircle className="mr-2" size={20} /> Consultar disponibilidad
                       </a>
                     </Button>
                     <Button variant="outline" className="w-full h-16 rounded-2xl border-2 font-bold text-lg hover:bg-muted transition-all" asChild>
                       <a href="https://wa.me/51942293293?text=%C2%A1Hola!%20Estoy%20listo%20para%20asegurar%20mi%20cupo%20con%20$100%20para%20el%20viaje%20de%20Turismo%20Comunitario.%20%C2%BFPodr%C3%ADan%20indicarme%20los%20pasos%20de%20pago%3F" target="_blank" rel="noopener noreferrer">
                         <CheckCircle2 className="mr-2" size={20} /> Asegura tu cupo con $100
                       </a>
                     </Button>
                  </div>

                  <div className="pt-8 border-t flex items-center justify-between">
                     <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Sigue la aventura</span>
                        <span className="font-bold">@tejiendoviajes</span>
                     </div>
                     <Button size="icon" variant="ghost" className="rounded-full w-12 h-12 bg-muted hover:text-primary transition-colors">
                        <Instagram size={24} />
                     </Button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TurismoComunitario;
