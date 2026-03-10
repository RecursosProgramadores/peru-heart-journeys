import { useParams, Link } from "react-router-dom";
import { allTours } from "@/data/tours";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    Info
} from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const TourDetail = () => {
    const { category, slug } = useParams<{ category: string; slug: string }>();
    const tour = allTours.find((t) => t.slug === slug);

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
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <img
                    src={tour.img}
                    alt={tour.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="container-narrow relative z-10 px-4 text-center text-white">
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
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {tour.itinerary.map((item) => (
                                        <AccordionItem
                                            key={item.day}
                                            value={`day-${item.day}`}
                                            className="border border-border/50 rounded-2xl px-6 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                        >
                                            <AccordionTrigger className="hover:no-underline py-6 group">
                                                <div className="flex items-center gap-4 text-left">
                                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold font-display text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                        {item.day}
                                                    </div>
                                                    <span className="text-xl font-bold text-foreground">{item.title}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-8 text-muted-foreground text-lg leading-relaxed pl-16">
                                                {item.content}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>

                            {/* Rates Table */}
                            {tour.rates && (
                                <div className="mb-16">
                                    <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
                                        <Hotel className="text-primary" /> Tarifas por Hotel
                                    </h2>
                                    <div className="overflow-hidden rounded-3xl border border-border/50 bg-white shadow-xl">
                                        <Table>
                                            <TableHeader className="bg-muted/50">
                                                <TableRow>
                                                    <TableHead className="py-6 px-6 font-bold text-foreground">Hotel</TableHead>
                                                    <TableHead className="font-bold text-foreground text-center">SINGLE</TableHead>
                                                    <TableHead className="font-bold text-foreground text-center">DOBLE</TableHead>
                                                    <TableHead className="font-bold text-foreground text-center">TRIPLE</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {tour.rates.map((rate, i) => (
                                                    <TableRow key={i} className={rate.isRecommended ? "bg-primary/5 hover:bg-primary/10" : ""}>
                                                        <TableCell className="py-4 px-6 font-medium">
                                                            {rate.hotel}
                                                            {rate.isRecommended && (
                                                                <Badge className="ml-2 bg-primary text-[10px] animate-pulse">Recomendado</Badge>
                                                            )}
                                                        </TableCell>
                                                        <TableCell className="text-center font-bold text-primary">${rate.single}</TableCell>
                                                        <TableCell className="text-center font-bold text-primary">${rate.doble}</TableCell>
                                                        <TableCell className="text-center font-bold text-primary">${rate.triple}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <p className="mt-4 text-sm text-muted-foreground italic">
                                        * Precios por persona expresados en Dólares Americanos (USD).
                                    </p>
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

                                <Button className="w-full py-8 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                    Personaliza tu viaje <ArrowRight className="ml-2" />
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
        </div>
    );
};

export default TourDetail;
