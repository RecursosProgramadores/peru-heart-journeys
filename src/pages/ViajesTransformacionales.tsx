import { useState } from "react";
import { 
  MapPin, 
  Mountain, 
  Calendar, 
  Check, 
  X, 
  ArrowRight, 
  HeartPulse, 
  Compass, 
  Tent, 
  ChevronDown, 
  Sparkles, 
  Flame, 
  Brain, 
  Apple, 
  Users, 
  Trophy,
  AlertTriangle,
  Target
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import heroImg from "@/assets/optimized/VIAJESTRANSPRINCIPAL.webp";
import salkantayImg from "@/assets/optimized/HOMESALKANTAY.webp";
import machuPicchu from "@/assets/optimized/FULLDAYMACHUPICCHU.webp";
import montanaColores from "@/assets/optimized/FULLDAYMONTANA.webp";

const itineraryDays = [
  {
    title: "Día 1 - CUSCO IN - RECEPCIÓN EN EL AEROPUERTO",
    text: "Recepción en el aeropuerto del Cusco, traslado al hotel, tiempo libre para poder aclimatarse a los 3350 msnm, tiempo libre para recorrer sus calles y conocer interesantes lugares como el barrio de San Blas, Piedra de los 12 ángulos, Plaza Mayor del Cusco, Calle Loreto, noche libre."
  },
  {
    title: "Día 2 - VALLE SAGRADO DE LOS INCAS",
    text: "En este tour más extenso realizamos un paseo por todo lo mejor del Valle Sagrado de los Incas. Viajamos a Chinchero, Moray (con sus impresionantes andenes circulares) y a la antigua salinera de Maras. Almorzamos estilo buffet en Urubamba, seguimos a la imponente fortaleza de Ollantaytambo y finalizamos en Pisac antes de volver a Cusco."
  },
  {
    title: 'Día 3 - Cuzco | Mollepata - Soraypampa "Lodge del cielo" - Lago Humantay',
    text: "Viajamos temprano hacia Mollepata y Challacancha, donde iniciamos el trek hacia Soraypampa. Tras un delicioso almuerzo, subimos a la impresionante Laguna Humantay para asombrarnos con su color turquesa rodeada de nevados. Descanso en nuestro campamento Lodge del cielo."
  },
  {
    title: "Día 4 - Salkantay Pampa – Paso Salkantay – Huayracmachay – Collpapampa Lodge",
    text: "La etapa más fría y desafiante. Ascendemos al majestuoso Paso Salkantay (4630 msnm), el punto más alto, bordeando picos nevados espectaculares. Tras coronar el paso, iniciamos el largo descenso hacia la ceja de selva hasta llegar a nuestro Lodge en Collpapampa."
  },
  {
    title: "Día 5 - Collapapampa – Ruta del café – Santa Teresa - Lucmabamba Lodge",
    text: "Caminamos rodeados de exuberante vegetación por el valle del río Santa Teresa, conociendo de cerca plantaciones de café orgánico y frutales. Llegada al Lodge en Lucmabamba y posibilidad de relajarnos en las aguas termales de Santa Teresa (Cocalmayo)."
  },
  {
    title: "Día 6 - Lucmabamba – Llactapata – Hidroeléctrica - Machu Picchu pueblo",
    text: "Iniciamos el ascenso al Paso Llactapata, un mirador con vistas exclusivas al lado sureste de Machu Picchu. Luego descendemos a Hidroeléctrica para caminar junto a las vías del tren hasta llegar a nuestro hotel en Aguas Calientes (Machu Picchu Pueblo)."
  },
  {
    title: "Día 7 - Machu Picchu | Cuzco",
    text: "¡El día esperado! Visita inolvidable al Santuario histórico de Machu Picchu, recorriendo sus templos con nuestro guía experto. Por la tarde, regreso en tren Expedition hasta Ollantaytambo y traslado de vuelta a tu hotel en Cusco."
  },
  {
    title: "Día 8 - Día de Descanso en la Ciudad de Cusco: Exploración y Relajación",
    text: "Día libre merecido para reponerte de la exigencia del Salkantay. Podrás participar en el City Tour panorámico incluido y recorrer con tranquilidad la capital imperial y sus mercados artesanales."
  },
  {
    title: "Día 9 - Aventura en la Montaña de 7 Colores: Una Experiencia Inolvidable",
    text: "Descubre uno de los destinos más impresionantes de los Andes: la Montaña de 7 Colores (Vinicunca). Caminata a más de 5000 msnm, siempre acompañados por nuestro equipo con oxígeno, para admirar este asombroso paisaje natural."
  },
  {
    title: "Día 10 - Último Día en Cusco: Despedida y Tiempo Libre Antes del Retorno",
    text: "Mañana libre para compras de recuerdos de último minuto o relajarse en un café de la Plaza de Armas antes de llevarte de forma segura al aeropuerto para tu vuelo de regreso."
  }
];

const incluyeList = [
  "Traslados de Llegada y Salida en Cusco",
  "5 noches de alojamiento en Cusco con desayunos",
  "Full day Valle Sagrado (privado con almuerzo + guía)",
  "Full day Montaña 7 Colores (privado con almuerzo, entrada + guía)",
  "Recorrido Panorámico por Cusco y Centros Arqueológicos",
  "Transporte Cusco - Challacancha",
  "Guía Trekking Salkantay + Guía Turístico Machu Picchu",
  "Campamentos Lodge Del Cielo (Soraypampa, Collpapampa, Lucmabamba)",
  "1 noche de alojamiento en hotel en Aguas Calientes",
  "Chef profesional de caminata y agua segura todos los días",
  "Té de coca al despertar y snacks diarios en los campamentos de trek",
  "Kit médico y botella de oxígeno portátil",
  "Tren Expedition (Aguas Calientes - Ollantaytambo) y traslados a Cusco",
  "Bus turístico Consettur a Machu Picchu (subida y bajada)",
  "Entradas: Laguna Humantay y Santuario de Machu Picchu",
  "Bolsa de dormir invernal y bastones de Trekking",
  "Alimentación completa en ruta de Salkantay (Opciones vegetarianas/veganas)"
];

const viajasList = [
  "Sientes que necesitas un cambio en tu vida",
  "Quieres mejorar tu condición física",
  "Buscas un reto personal real",
  "Te atrae la montaña, la naturaleza y la aventura",
  "Quieres vivir algo diferente a un viaje tradicional"
];

const ViajesTransformacionales = () => {
  const [openDay, setOpenDay] = useState<number | null>(0);

  const toggleDay = (index: number) => {
    setOpenDay(openDay === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background font-body text-foreground">

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Paisaje transformacional andino"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        <div className="container-narrow relative z-10 px-4 text-center text-white mt-24">
          <Badge className="mb-6 bg-primary text-white border-none px-6 py-1.5 rounded-full uppercase tracking-widest text-xs font-bold shadow-xl">
            Viajes que van más allá del destino
          </Badge>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Viajes <br /><span className="text-primary italic">Transformacionales</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-medium italic">
            "A veces, viajar es una oportunidad para cambiar, reconectar y superar límites."
          </p>
        </div>
      </section>

      {/* Intro Narrative */}
      <section className="py-24 bg-background">
        <div className="container-narrow px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              En <span className="font-bold text-foreground">Inkateam Travel</span>, hemos diseñado experiencias transformacionales en los Andes, donde el entorno natural se convierte en el escenario perfecto para el crecimiento personal.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-8 border-y border-border/60">
               <div className="flex items-center gap-3">
                  <Sparkles className="text-primary" />
                  <span className="font-bold uppercase tracking-widest text-sm">Cada paso tiene un propósito</span>
               </div>
               <div className="hidden md:block w-px h-8 bg-border" />
               <div className="flex items-center gap-3">
                  <Flame className="text-primary" />
                  <span className="font-bold uppercase tracking-widest text-sm">Cada desafío, una enseñanza</span>
               </div>
               <div className="hidden md:block w-px h-8 bg-border" />
               <div className="flex items-center gap-3">
                  <Compass className="text-primary" />
                  <span className="font-bold uppercase tracking-widest text-sm">Inicio de una nueva versión</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desafío Salkantay - Featured Section */}
      <section id="salkantay" className="py-24 bg-muted/20 overflow-hidden relative">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
            <div className="lg:w-1/2">
              <Badge className="mb-4 bg-primary text-white">EXPERIENCIA DESTACADA</Badge>
              <h2 className="font-display text-4xl md:text-6xl font-black mb-8 text-foreground leading-tight">
                Desafío Salkantay: <br />
                <span className="text-primary italic">Transforma tu cuerpo y conquista Machu Picchu</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Este no es un viaje tradicional a Cusco. Es un proceso. Un reto que comienza antes de subirte al avión y termina con algo mucho más valioso que una foto en Machu Picchu: <span className="font-bold text-foreground italic">la sensación de haberlo logrado.</span>
              </p>
              
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-primary/10">
                 <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                   <Target className="text-primary" /> ¿Para quién es?
                 </h4>
                 <ul className="space-y-3">
                   {viajasList.map((item, i) => (
                     <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="text-primary shrink-0 mt-1" size={16} />
                        <span>{item}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full z-0 group-hover:bg-primary/30 transition-colors" />
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                 <img src={salkantayImg} alt="Desafío Salkantay" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                 <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-sm font-bold uppercase tracking-widest mb-2">Proyecto Transformacional</p>
                    <h3 className="text-3xl font-bold italic">"No se trata de llegar, se trata de en quién te conviertes"</h3>
                 </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
             <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">¿POR QUÉ ES UN VIAJE TRANSFORMACIONAL?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
             <div className="bg-white p-10 rounded-[2.5rem] border border-border/60 shadow-sm group hover:shadow-2xl transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                   <Brain />
                </div>
                <h4 className="text-xl font-bold mb-4">1. Empieza antes del viaje</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Comienzas tu preparación con un programa estructurado que te ayuda a llegar listo para el reto. <span className="font-bold text-foreground">No improvisas. Te preparas.</span></p>
             </div>

             <div className="bg-white p-10 rounded-[2.5rem] border border-border/60 shadow-sm group hover:shadow-2xl transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                   <Apple />
                </div>
                <h4 className="text-xl font-bold mb-4">2. Asesoría Nutricional</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Trabajarás con una especialista para mejorar tus hábitos, preparar tu cuerpo para el trekking y aumentar tu energía. <span className="font-bold text-foreground">Un proceso de cambio real.</span></p>
             </div>

             <div className="bg-white p-10 rounded-[2.5rem] border border-border/60 shadow-sm group hover:shadow-2xl transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                   <Mountain />
                </div>
                <h4 className="text-xl font-bold mb-4">3. Enfrentas un reto real</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Atraviesas montañas y nevados con climas extremos (Paso Salkantay 4630 msnm), lo que exige fortaleza física y mental. <span className="font-bold text-foreground">Aquí ocurre la transformación.</span></p>
             </div>

             <div className="bg-white p-10 rounded-[2.5rem] border border-border/60 shadow-sm group hover:shadow-2xl transition-all h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                   <Users />
                </div>
                <h4 className="text-xl font-bold mb-4">4. Lo vives en grupo</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Compartes el proceso con personas que buscan superarse. <span className="font-bold text-foreground">Se crea comunidad, motivación y conexión real.</span></p>
             </div>

             <div className="bg-white p-10 rounded-[2.5rem] border border-border/60 shadow-sm group hover:shadow-2xl transition-all h-full md:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                   <Trophy />
                </div>
                <h4 className="text-xl font-bold mb-4">5. Nueva Recompensa</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Machu Picchu deja de ser un destino y se convierte en el premio a tu disciplina y esfuerzo. <span className="font-bold text-foreground">Llegas como alguien que lo logró.</span></p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
             <div className="bg-amber-50 border border-amber-200 p-10 rounded-[3rem] space-y-6">
                <div className="flex items-center gap-3 text-amber-700">
                   <AlertTriangle />
                   <h4 className="text-2xl font-black uppercase tracking-widest">⚠️ IMPORTANTE</h4>
                </div>
                <p className="text-amber-900 font-medium">Este no es un viaje para todos. Requiere compromiso, preparación y decisión. Pero si estás listo, será una de las experiencias más importantes de tu vida.</p>
             </div>

             <div className="bg-primary/5 border border-primary/20 p-10 rounded-[3rem] space-y-6">
                <h4 className="text-2xl font-black uppercase tracking-widest text-primary flex items-center gap-3">🚀 LO QUE TE LLEVAS</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <li className="flex items-center gap-2 text-sm font-bold"><Check className="text-primary" size={16} /> Más confianza</li>
                   <li className="flex items-center gap-2 text-sm font-bold"><Check className="text-primary" size={16} /> Cuerpo preparado</li>
                   <li className="flex items-center gap-2 text-sm font-bold"><Check className="text-primary" size={16} /> Nuevos hábitos</li>
                   <li className="flex items-center gap-2 text-sm font-bold"><Check className="text-primary" size={16} /> Una historia real</li>
                </ul>
                <p className="text-xs text-muted-foreground italic">"La certeza de que puedes lograr más de lo que creías."</p>
             </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
             <Button size="xl" className="rounded-full px-10 bg-black text-white hover:bg-black/90 font-bold h-16 shadow-2xl shadow-black/20" asChild>
                <a href="https://wa.me/51942293293?text=%C2%A1Hola%20Inkateam!%20Me%20interesa%20unirme%20al%20Desaf%C3%ADo%20Salkantay.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20detalles%20sobre%20el%20programa%20de%20preparaci%C3%B3n%20y%20las%20pr%C3%B3ximas%20fechas%3F%20Gracias." target="_blank" rel="noopener noreferrer">Quiero ser parte del Desafío Salkantay</a>
             </Button>
             <Button size="xl" variant="outline" className="rounded-full px-10 border-2 font-bold h-16" asChild>
                <a href="https://wa.me/51942293293?text=%C2%A1Hola%20Inkateam!%20Estoy%20interesado%20en%20reservar%20mi%20cupo%20para%20el%20Desaf%C3%ADo%20Salkantay.%20%C2%BFPodr%C3%ADan%20indicarme%20los%20pasos%20a%20seguir%3F%20Gracias." target="_blank" rel="noopener noreferrer">Reservar cupo</a>
             </Button>
          </div>
        </div>
      </section>

      {/* Technical Itinerary Section */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 italic">Itinerario: El proceso día a día</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Detalle técnico del recorrido de 10 días para asegurar tu logística y seguridad.
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-20">
            {itineraryDays.map((day, index) => {
              const isOpen = openDay === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-muted/10 border-primary/30 shadow-md' : 'bg-white border-border hover:border-primary/20'}`}
                >
                  <button 
                    onClick={() => toggleDay(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg font-display transition-colors duration-300 ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                        {index + 1}
                      </div>
                      <h4 className={`font-bold text-lg transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                        {day.title}
                      </h4>
                    </div>
                    <ChevronDown className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    <div className="p-6 pt-0 pl-[5.5rem] pr-8 text-muted-foreground leading-relaxed">
                      {day.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-6">Detalles del Servicio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50/70 p-8 rounded-[2.5rem] border border-emerald-100">
               <h3 className="font-display text-2xl font-bold text-emerald-800 mb-8 flex items-center gap-3">
                 <Check className="text-emerald-500" /> Qué Incluye
               </h3>
               <ul className="space-y-4">
                 {incluyeList.map((item, i) => (
                   <li key={i} className="flex items-start gap-4 text-emerald-950/80 text-sm">
                     <Check className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                     <span className="leading-tight">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            
            <div className="flex flex-col gap-8">
               <div className="bg-rose-50/70 p-8 rounded-[2.5rem] border border-rose-100">
                  <h3 className="font-display text-2xl font-bold text-rose-800 mb-6 flex items-center gap-3">
                    <X className="text-rose-500" /> Qué No Incluye
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm text-rose-950/80"><X className="text-rose-500" size={16}/> Vuelos internacionales y domésticos</li>
                    <li className="flex items-center gap-3 text-sm text-rose-950/80"><X className="text-rose-500" size={16}/> Seguro de viaje obligatorio</li>
                    <li className="flex items-center gap-3 text-sm text-rose-950/80"><X className="text-rose-500" size={16}/> Gastos personales y propinas</li>
                  </ul>
               </div>

               <div className="bg-black text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                     <h4 className="text-2xl font-bold mb-4">¿Diseñamos tu viaje?</h4>
                     <p className="text-white/60 text-sm mb-8">Personalizamos cada paso para que tu transformación sea única.</p>
                     <Button className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold" asChild>
                        <a href="https://wa.me/51942293293" target="_blank" rel="noopener noreferrer">
                          Diseña tu viaje transformacional
                        </a>
                     </Button>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px]" />
               </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ViajesTransformacionales;
