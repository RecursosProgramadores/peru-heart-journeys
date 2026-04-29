import { Button } from "@/components/ui/button";
import tourCusco from "@/assets/optimized/HOMESALKANTAY.webp";
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 bg-background">
      <div className="container-narrow px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={tourCusco}
              alt="Cusco y Salkantay"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
            />
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center min-h-[450px] lg:min-h-[550px] max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-400 font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider text-sm w-max backdrop-blur-sm border border-amber-400/30">
              <MapPin className="w-4 h-4" />
              <span>Cusco</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1] drop-shadow-xl tracking-tight">
              Desafío Salkantay: <br className="hidden sm:block" />
              <span className="text-white/90 font-light">Supera tus Límites en el Camino hacia Machu Picchu</span> - Grupal
            </h2>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10 mb-10 text-white/95 text-lg">
              <div className="flex items-center gap-3 font-semibold bg-black/30 px-5 py-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                <Calendar className="w-6 h-6 text-amber-400" />
                <span>10 días - 9 noches</span>
              </div>
              <div className="flex items-center gap-3 font-semibold bg-black/30 px-5 py-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                <Users className="w-6 h-6 text-amber-400" />
                <span>10 personas</span>
              </div>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-max group/btn shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)] transition-all duration-500 font-bold text-lg px-8 py-6 rounded-2xl"
              asChild
            >
              <Link to="/viajes-transformacionales">
                Más información
                <ArrowRight className="w-6 h-6 ml-3 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
