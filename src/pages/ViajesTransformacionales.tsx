import { useState } from "react";
import { MapPin, Mountain, Calendar, Check, X, ArrowRight, HeartPulse, Compass, Tent, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/act-laguna-humantay.jpg";
import salkantayImg from "@/assets/tour-adventure.jpg";
import machuPicchu from "@/assets/hero-machu-picchu.jpg";
import valleSagrado from "@/assets/act-valle-sagrado.jpg";
import montanaColores from "@/assets/act-montana-colores.jpg";

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

const noIncluyeList = [
  "Vuelos internacionales y domésticos",
  "Seguro de viaje obligatorio",
  "Cenas libres en la ciudad del Cusco",
  "Gastos personales y snacks adicionales",
  "Ingreso extra a las Montañas Huayna Picchu o Machu Picchu Montaña (sujeto a disponibilidad)",
  "Ingreso a los baños termales de Cocalmayo (Santa Teresa) y Aguas Calientes",
  "Propinas para guías, arrieros y personal de apoyo (opcional)"
];

const ViajesTransformacionales = () => {
  const [openDay, setOpenDay] = useState<number | null>(0);

  const toggleDay = (index: number) => {
    setOpenDay(openDay === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Paisaje transformacional andino"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            Viajes <span className="text-primary">Transformacionales</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-md">
            Algunos viajes tienen el poder de transformar la forma en que vemos el mundo.
          </p>
        </div>
      </section>

      {/* Types of Trips */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-muted/30 p-8 rounded-3xl border border-border text-center hover:border-primary/50 transition-colors">
              <Mountain className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-display text-xl font-bold mb-2">Desafío Salkantay</h3>
            </div>
            <div className="bg-muted/30 p-8 rounded-3xl border border-border text-center hover:border-primary/50 transition-colors">
              <HeartPulse className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-display text-xl font-bold mb-2">Viajes de bienestar</h3>
            </div>
            <div className="bg-muted/30 p-8 rounded-3xl border border-border text-center hover:border-primary/50 transition-colors">
              <Tent className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-display text-xl font-bold mb-2">Viajes de aventura</h3>
            </div>
            <div className="bg-muted/30 p-8 rounded-3xl border border-border text-center hover:border-primary/50 transition-colors">
              <Compass className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-display text-xl font-bold mb-2">Viajes culturales profundos</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Salkantay Project Feature */}
      <section className="py-20 bg-muted/10 border-t border-border/50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Content: Description and Details */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full mb-6 text-sm uppercase tracking-wider">
                <Mountain className="w-4 h-4" /> Proyecto Destacado
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Desafío Salkantay: <br/> 
                <span className="text-muted-foreground font-light text-3xl md:text-4xl">Supera tus Límites en el Camino hacia Machu Picchu</span>
              </h2>
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                Es un viaje diseñado para aquellos que buscan un reto físico y una transformación personal. A lo largo del Salkantay Trek, experimentarás paisajes impresionantes mientras enfrentas desafíos que pondrán a prueba tu resistencia y determinación. Este viaje no solo te llevará a través de montañas imponentes y valles sagrados, sino que culminará con la recompensa de llegar al majestuoso Machu Picchu, tras haber superado tus propios límites. Una experiencia de aventura y crecimiento, ideal para quienes desean descubrir su verdadero potencial.
              </p>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:border-primary/30 transition-colors">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold text-lg mb-1">Ciudades</h4>
                  <p className="text-sm text-muted-foreground">Cusco, Mollepata, Challacancha, Soraypampa, Aguas Calientes</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:border-primary/30 transition-colors">
                  <HeartPulse className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold text-lg mb-1">Dificultad</h4>
                  <p className="text-sm text-muted-foreground">Moderado - Desafiante (altitudes de 4630 a 5000 msnm)</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:border-primary/30 transition-colors">
                  <Calendar className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold text-lg mb-1">Mejor Temporada</h4>
                  <p className="text-sm text-muted-foreground">Abril a Octubre</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 h-full flex flex-col justify-center items-center">
                  <Button className="w-full text-md h-12 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all bg-[#0A0F1C] hover:bg-[#1a233a] text-white">
                    Reservar Aventura
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content: Images */}
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <img src={montanaColores} alt="Montaña 7 Colores" className="w-full h-64 object-cover rounded-3xl col-span-2 shadow-xl hover:scale-[1.02] transition-transform duration-500" />
              <img src={salkantayImg} alt="Trek Salkantay" className="w-full h-48 object-cover rounded-3xl shadow-md hover:scale-[1.02] transition-transform duration-500" />
              <img src={machuPicchu} alt="Machu Picchu" className="w-full h-48 object-cover rounded-3xl shadow-md hover:scale-[1.02] transition-transform duration-500" />
            </div>

          </div>
        </div>
      </section>

      {/* Itinerary Accordion */}
      <section className="py-24 bg-white relative">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Itinerario y Actividades</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora Perú con nuestro itinerario detallado de 10 días, planificado al milímetro para que vivas una experiencia insuperable.
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

          {/* Includes / Doesn't Include */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50/70 p-8 rounded-3xl border border-emerald-100 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-emerald-800 mb-8 flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Check className="w-6 h-6 text-emerald-600" /> 
                </div>
                Qué Incluye
              </h3>
              <ul className="space-y-5">
                {incluyeList.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-emerald-950/80">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-rose-50/70 p-8 rounded-3xl border border-rose-100 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-rose-800 mb-8 flex items-center gap-3">
                <div className="p-2 bg-rose-100 rounded-lg">
                  <X className="w-6 h-6 text-rose-600" />
                </div>
                 Qué No Incluye
              </h3>
              <ul className="space-y-5">
                {noIncluyeList.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-rose-950/80">
                    <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Join Group CTA */}
          <div className="mt-20 bg-[#0A0F1C] rounded-[3rem] p-10 md:p-16 text-center border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/30 transition-colors duration-1000" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-amber-500/20 transition-colors duration-1000" />
            
            <h2 className="relative z-10 font-display text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              ¿Tienes dudas sobre <br className="hidden sm:block"/> esta aventura?
            </h2>
            <p className="relative z-10 font-body text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
              Únete a nuestro grupo de WhatsApp exclusivo y habla directamente con nuestros expertos andinos y otros aventureros de todo el mundo.
            </p>
            <Button size="xl" className="relative z-10 font-bold text-lg px-8 h-18 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.5)] transition-all hover:-translate-y-1 rounded-2xl" asChild>
              <a href="https://wa.me/51942293293" target="_blank" rel="noopener noreferrer">
                Únete al Grupo para Resolver Tus Dudas <ArrowRight className="ml-3 w-5 h-5" />
              </a>
            </Button>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ViajesTransformacionales;
