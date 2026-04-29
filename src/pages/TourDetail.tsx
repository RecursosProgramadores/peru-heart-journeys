import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { allTours } from "@/data/tours";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";
import {
    Clock,
    MapPin,
    Mountain,
    CheckCircle2,
    XCircle,
    Calendar,
    Utensils,
    Hotel,
    ArrowRight,
    ChevronRight,
    Info,
    Ticket
} from "lucide-react";

const TourDetail = () => {
    const { category, slug } = useParams<{ category: string; slug: string }>();
    const tour = allTours.find((t) => t.slug === slug);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!tour) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Tour no encontrado</h2>
                    <Button asChild>
                        <Link to="/">Volver al inicio</Link>
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                    src={tour.img}
                    alt={tour.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="container-narrow relative z-10 px-4 text-center text-white mt-24">
                    <Badge className="mb-6 bg-primary text-white border-none py-1.5 px-4 text-sm font-bold uppercase tracking-widest">
                        {tour.category === 'combinados' ? 'Tour Combinado' : `Tour ${tour.category}`}
                    </Badge>
                    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        {tour.title}
                    </h1>
                    <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
                        <div className="flex items-center gap-2">
                            <Clock className="text-primary" size={20} />
                            <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-primary" size={20} />
                            <span className="capitalize">{tour.category}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Info className="text-primary" size={20} />
                            <span>Dificultad: {tour.difficulty}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container-narrow px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Left Column: Details */}
                        <div className="lg:col-span-2">
                            {/* Description */}
                            <div className="mb-16">
                                <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-primary rounded-full" /> Resumen del Viaje
                                </h2>
                                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                    {tour.description.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Itinerary */}
                            <div className="mb-16">
                                <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3 text-foreground">
                                    <Calendar className="text-primary" /> Itinerario Detallado
                                </h2>
                                <div className="space-y-4">
                                    {tour.itinerary.map((item) => (
                                        <div
                                            key={item.day}
                                            className="border border-border/50 rounded-2xl px-6 py-6 bg-white shadow-sm"
                                        >
                                            <div className="flex items-center gap-4 text-left mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold font-display text-xl">
                                                    {item.day}
                                                </div>
                                                <span className="text-xl font-bold text-foreground">{item.title}</span>
                                            </div>
                                            <div className="text-muted-foreground text-lg leading-relaxed pl-16">
                                                {item.content}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Rates Info */}
                            {tour.rates && (
                                <div className="mb-16">
                                    <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
                                        <Hotel className="text-primary" /> Tarifas del Paquete
                                    </h2>
                                    {(() => {
                                        const prices = tour.rates.flatMap(r => [parseInt(r.single), parseInt(r.doble), parseInt(r.triple)]);
                                        const validPrices = prices.filter(n => !isNaN(n));
                                        const lowestPrice = validPrices.length > 0 ? Math.min(...validPrices) : null;
                                        
                                        return lowestPrice ? (
                                            <div className="bg-gradient-to-br from-primary/10 via-white to-white border border-primary/20 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between shadow-xl relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
                                                
                                                <div className="mb-8 md:mb-0 relative z-10 text-center md:text-left">
                                                    <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1.5 text-sm uppercase tracking-widest transition-colors font-bold">
                                                        Mejor Tarifa Disponible
                                                    </Badge>
                                                    <h3 className="text-3xl font-display font-bold text-foreground mb-2">Descubre este destino</h3>
                                                    <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
                                                        Contamos con múltiples opciones de hoteles. Cotiza con nosotros y elige la que mejor se adapte a ti.
                                                    </p>
                                                </div>
                                                
                                                <div className="relative z-10 text-center flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-lg border border-border/50 min-w-[240px] transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                                                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2 flex items-center gap-1">
                                                        A partir de
                                                    </span>
                                                    <div className="flex items-start text-primary">
                                                        <span className="text-3xl font-bold mt-1 mr-1">$</span>
                                                        <span className="text-7xl font-display font-bold leading-none tracking-tighter">{lowestPrice}</span>
                                                    </div>
                                                    <span className="text-xs font-semibold text-muted-foreground mt-3 uppercase tracking-widest border-t border-border/50 pt-2 w-full">
                                                        USD por persona
                                                    </span>
                                                </div>
                                            </div>
                                        ) : null;
                                    })()}
                                </div>
                            )}
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="space-y-8">
                            {/* Inclusions Card */}
                            <div className="bg-white p-8 rounded-3xl border border-border/50 shadow-lg sticky top-32">
                                <h3 className="font-display text-2xl font-bold mb-6 text-foreground">Información Útil</h3>

                                <div className="mb-8">
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-tighter mb-4">
                                        <CheckCircle2 size={16} /> Lo que incluye
                                    </h4>
                                    <ul className="space-y-3">
                                        {tour.includes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-10">
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-red-500 uppercase tracking-tighter mb-4">
                                        <XCircle size={16} /> No incluye
                                    </h4>
                                    <ul className="space-y-3">
                                        {tour.notIncludes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Button 
                                    className="w-full py-8 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform bg-primary text-white"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <Ticket size={20} className="mr-2" /> Reserva Aquí
                                </Button>

                                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-muted" />
                                        ))}
                                    </div>
                                    <span>+21k viajeros felices</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BookingModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                tour={tour} 
            />
        </div>
    );
};

export default TourDetail;
