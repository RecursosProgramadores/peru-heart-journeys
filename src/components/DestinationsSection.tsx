import destAndes from "@/assets/dest-andes.jpg";
import destAmazonia from "@/assets/dest-amazonia.jpg";
import destCosta from "@/assets/dest-costa.jpg";
import destTiticaca from "@/assets/dest-titicaca.jpg";

const destinations = [
  { img: destAndes, name: "Los Andes", alt: "Montañas nevadas de los Andes peruanos con llamas" },
  { img: destAmazonia, name: "Amazonía", alt: "Selva amazónica con rayos de sol filtrándose entre la vegetación" },
  { img: destCosta, name: "Costa Desértica", alt: "Dunas doradas del desierto costero peruano al atardecer" },
  { img: destTiticaca, name: "Lago Titicaca", alt: "Islas flotantes de los Uros en el Lago Titicaca con botes tradicionales" },
];

const DestinationsSection = () => {
  return (
    <section id="destinos" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Destinos esperándolos
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Desde cumbres nevadas hasta selvas tropicales, Perú tiene un mundo por descubrir.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((d) => (
            <div
              key={d.name}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={d.img}
                alt={d.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                  {d.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
