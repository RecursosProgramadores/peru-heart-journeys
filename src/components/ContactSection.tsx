import { Star, MessageSquareQuote } from "lucide-react";

const reviews = [
  {
    author: "María Fernández",
    date: "marzo 2026",
    title: "¡Experiencia inolvidable en Machu Picchu!",
    text: "Inkateam organizó todo a la perfección. Desde los traslados hasta los hoteles, cada detalle fue cuidado con mucho profesionalismo. Los guías sabían muchísimo y nos hicieron sentir seguros siempre.",
  },
  {
    author: "Carlos Ruiz",
    date: "febrero 2026",
    title: "Superaron todas nuestras expectativas",
    text: "La atención al detalle de esta agencia es increíble. Sentimos que éramos los únicos clientes. El trato personalizado y el conocimiento local marcaron por completo la diferencia de nuestro viaje.",
  },
  {
    author: "Laura y Diego",
    date: "enero 2026",
    title: "El mejor viaje de nuestras vidas",
    text: "Hicimos el recorrido por el Valle Sagrado y Cusco. Todo el equipo fue extremadamente puntual, amable y profesional. Sin duda volveremos a viajar con ellos para visitar el sur de Perú.",
  },
  {
    author: "Familia Gómez",
    date: "diciembre 2025",
    title: "Excelente trato y organización",
    text: "Viajar en familia siempre es un reto, pero ellos lo hicieron muy fácil e inolvidable. Nos sentimos seguros y súper bien atendidos en todo momento. 100% recomendados si viajan con niños.",
  }
];

const ContactSection = () => {
  return (
    <section id="testimonios" className="py-24 bg-muted/20">
      <div className="container-narrow px-4 mx-auto leading-relaxed">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
            Lo que dicen nuestros <span className="text-primary">viajeros</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
            Nuestra mayor recompensa es leer sobre las experiencias inolvidables que ayudamos a crear día a día.
          </p>

          <a 
            href="https://www.tripadvisor.com.pe/Attraction_Review-g15221445-d27953529-Reviews-Inkateam_Travel-Magdalena_del_Mar_Lima_Region.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 py-3 px-6 sm:px-8 bg-white rounded-full border border-border shadow-sm hover:shadow-md hover:border-[#00AF87]/50 hover:-translate-y-1 transition-all duration-300 group"
          >
            <span className="text-sm sm:text-base font-body font-medium text-foreground">
              Calificado con un <span className="font-bold">96% de "Excelente"</span> en
            </span>
            <div className="flex items-center gap-1.5 py-1 px-3 bg-[#00AF87] rounded text-white font-bold text-xs">
              <span className="text-[11px] uppercase tracking-wide">Tripadvisor</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-white" />
                ))}
              </div>
            </div>
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <a
              key={i}
              href="https://www.tripadvisor.com.pe/Attraction_Review-g15221445-d27953529-Reviews-Inkateam_Travel-Magdalena_del_Mar_Lima_Region.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border hover:border-[#00AF87]/40 flex flex-col h-full hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00AF87] to-[#00AF87]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-[#00AF87] text-[#00AF87]" />
                  ))}
                </div>
                <MessageSquareQuote className="w-8 h-8 text-muted/30 group-hover:text-[#00AF87]/20 transition-colors duration-300" />
              </div>
              
              <h3 className="font-display font-bold text-lg text-foreground mb-4 leading-snug group-hover:text-[#00AF87] transition-colors duration-300">
                "{r.title}"
              </h3>
              
              <p className="font-body text-muted-foreground mb-8 flex-grow text-sm leading-relaxed">
                {r.text}
              </p>
              
              <div className="mt-auto pt-5 border-t border-border flex flex-col">
                <span className="font-bold text-foreground text-sm">{r.author}</span>
                <span className="text-xs text-muted-foreground mt-1">{r.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
