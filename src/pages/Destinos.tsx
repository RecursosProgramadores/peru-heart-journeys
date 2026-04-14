import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Compass, ArrowRight, Camera, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";


import imgCusco from "@/assets/tour-cusco.jpg";
import imgMachuPicchu from "@/assets/hero-machu-picchu.jpg";
import imgLima from "@/assets/act-city-tour-lima.jpg";
import imgParacas from "@/assets/act-paracas-ica.jpg";
import imgTiticaca from "@/assets/dest-titicaca.jpg";
import imgAndes from "@/assets/dest-andes.jpg";
import bgHero from "@/assets/act-valle-sagrado.jpg";

const destinosData = [
  {
    id: "cusco",
    title: "Cusco",
    subtitle: "El corazón del Imperio Inca",
    description: "Antigua capital del imperio incaico y punto de partida de casi todas las expediciones andinas. Sus calles de piedra, muros incas que se integran con arquitectura colonial y su ambiente bohemio te atraparán desde el primer momento.",
    toSee: ["Plaza de Armas", "Sacsayhuamán", "Barrio de San Blas", "Qorikancha", "Mercado San Pedro"],
    bestTime: "Abril a Noviembre (Temporada seca)",
    image: imgCusco,
    link: "/tours/cusco"
  },
  {
    id: "machupicchu",
    title: "Machu Picchu",
    subtitle: "La maravilla del mundo moderno",
    description: "Una ciudadela inca construida en lo alto de los Andes. Es la joya indiscutible de Perú y uno de los yacimientos arqueológicos más impresionantes del planeta; un lugar cargado de misticismo y vistas de infarto.",
    toSee: ["Intihuatana", "Templo del Sol", "Puerta del Sol (Inti Punku)", "Montaña Huayna Picchu", "El Templo del Cóndor"],
    bestTime: "Abril a Octubre para cielos despejados",
    image: imgMachuPicchu,
    link: "/tours/machu-picchu"
  },
  {
    id: "lima",
    title: "Lima",
    subtitle: "La capital gastronómica de América",
    description: "La vibrante capital peruana es una mezcla perfecta de modernidad, herencia colonial e historia precolombina. Famosa mundialmente por albergar algunos de los mejores restaurantes del planeta.",
    toSee: ["Centro Histórico", "Malecón de Miraflores", "Barranco bohemio", "Huaca Pucllana", "Circuito Mágico del Agua"],
    bestTime: "Diciembre a Abril (Verano soleado)",
    image: imgLima,
    link: "/tours/lima"
  },
  {
    id: "paracas-ica",
    title: "Paracas & Ica",
    subtitle: "Reserva marina y oasis en el desierto",
    description: "Contrastes impresionantes donde el desierto más árido se encuentra con el océano Pacífico. Un paraíso para los amantes de la fauna marina y la aventura en las dunas doradas del oasis de Huacachina.",
    toSee: ["Islas Ballestas", "Reserva Nacional de Paracas", "El Candelabro", "Oasis de Huacachina", "Ruta del Pisco"],
    bestTime: "Todo el año (Destino siempre soleado)",
    image: imgParacas,
    link: "/tours/ica-paracas"
  },
  {
    id: "lago-titicaca",
    title: "Lago Titicaca",
    subtitle: "El lago navegable más alto del mundo",
    description: "Ubicado a 3,812 metros de altura en Puno, es la cuna mitológica del imperio Inca. Este gigantesco cuerpo de agua color zafrío profundo alberga fascinantes comunidades nativas que preservan sus tradiciones milenarias.",
    toSee: ["Islas Flotantes de los Uros", "Isla Taquile", "Isla Amantaní", "Chullpas de Sillustani"],
    bestTime: "Mayo a Octubre",
    image: imgTiticaca,
    link: "/tours/puno"
  },
  {
    id: "andes-trekking",
    title: "Andes & Trekking",
    subtitle: "El paraíso de la aventura extrema",
    description: "Desde las impresionantes lagunas turquesas a los pies de nevados imponentes hasta los senderos incas antiguos. Los Andes peruanos ofrecen las mejores rutas de senderismo y expediciones de Sudamérica.",
    toSee: ["Laguna Humantay", "Montaña de 7 Colores", "Nevado Salkantay", "Valle de Lares", "Ausangate Trek"],
    bestTime: "Mayo a Septiembre (Mejores vistas de nevados)",
    image: imgAndes,
    link: "/tours/aventura"
  }
];

const Destinos = () => {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={bgHero}
            alt="Destinos en Perú"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
            Destinos <span className="text-primary italic">Mágicos</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Descubre los rincones más fascinantes del Perú. Cada lugar cuenta una historia milenaria esperando ser vivida.
          </p>
        </div>
      </section>

      {/* Zig-Zag Destinations Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8 space-y-32">
          {destinosData.map((dest, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={dest.id} 
                id={dest.id}
                className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                  <div className="overflow-hidden rounded-[2.5rem] shadow-2xl relative">
                    <img 
                      src={dest.image} 
                      alt={dest.title} 
                      className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white/90 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                      <MapPin className="w-4 h-4" /> {dest.title}, Perú
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-4">
                    <Compass className="w-5 h-5" /> Región Destacada
                  </div>
                  
                  <h2 className="font-display text-5xl md:text-6xl font-extrabold mb-2 text-foreground">
                    {dest.title}
                  </h2>
                  <h3 className="font-display text-2xl text-muted-foreground mb-8 italic">
                    "{dest.subtitle}"
                  </h3>
                  
                  <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
                    {dest.description}
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    {/* Qué ver */}
                    <div>
                      <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                        <Camera className="w-5 h-5 text-primary" /> Imperdibles:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dest.toSee.map((item, i) => (
                          <span key={i} className="bg-muted px-4 py-1.5 rounded-full text-sm text-foreground border border-border">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Mejor época */}
                    <div>
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" /> Mejor época para visitar:
                      </h4>
                      <p className="text-muted-foreground ml-7">{dest.bestTime}</p>
                    </div>
                  </div>
                  
                  <Button size="xl" className="w-fit text-base font-bold px-8 shadow-xl hover:-translate-y-1 transition-transform group" asChild>
                    <Link to={dest.link}>
                      Ver planes para {dest.title} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Final (WhatsApp) */}
      <section className="py-24 bg-primary/5 border-t border-border/40">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
            ¿Listo para empezar tu viaje?
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-10 leading-relaxed">
            Escríbenos ahora y recibe asesoría personalizada de nuestros expertos.
          </p>
          <Button size="xl" className="font-bold text-lg px-8 py-7 rounded-full shadow-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white border-none transition-all duration-300 hover:scale-105 group" asChild>
            <a href="https://wa.me/51942293293" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6 mr-2 group-hover:animate-pulse" /> WhatsApp Solicita asesoría
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Destinos;
