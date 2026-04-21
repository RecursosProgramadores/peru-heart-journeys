import { Link } from "react-router-dom";
import destLima from "@/assets/act-city-tour-lima.jpg";
import destCusco from "@/assets/act-city-tour-cusco.jpg";
import destCombinados from "@/assets/hero-machu-picchu.jpg";
import { toursByCategory } from "@/data/tours";

const categories = [
  {
    id: "cusco",
    name: "Cusco",
    img: destCusco,
    alt: "Ciudad del Cusco",
    count: toursByCategory.cusco.length,
    path: "/tours/cusco"
  },
  {
    id: "combinados",
    name: "Combinados",
    img: destCombinados,
    alt: "Combinados Perú",
    count: toursByCategory.combinados.length,
    path: "/tours/combinados"
  },
  {
    id: "lima",
    name: "Lima",
    img: destLima,
    alt: "Ciudad de Lima",
    count: toursByCategory.lima.length,
    path: "/tours/lima"
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinos" className="section-padding bg-muted/30">
      <div className="container-narrow px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Nuestros Planes de Viaje
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Destinos diseñados a tu medida
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige la región que deseas explorar y descubre itinerarios exclusivos creados por expertos locales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              to={cat.path}
              key={cat.id}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <img
                src={cat.img}
                alt={cat.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity group-hover:opacity-80" />

              <div className="absolute bottom-10 left-10 right-10">
                <div className="mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    {cat.count} Planes de Viaje
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-white/70 text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Explorar todos los destinos →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
