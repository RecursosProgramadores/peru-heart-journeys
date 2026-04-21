import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { toursByCategory } from "@/data/tours";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

import cuscoImg from "@/assets/act-valle-sagrado.jpg";
import limaImg from "@/assets/act-city-tour-lima.jpg";
import combinadosImg from "@/assets/act-lago-titicaca.jpg";

const categoryImages = {
    cusco: cuscoImg,
    lima: limaImg,
    combinados: combinadosImg
};

const ToursByCategory = () => {
    const { category } = useParams<{ category: "cusco" | "lima" | "combinados" }>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    if (!category || !toursByCategory[category as keyof typeof toursByCategory]) {
        return <div>Categoría no encontrada</div>;
    }

    const tours = toursByCategory[category as keyof typeof toursByCategory];
    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
    const heroImg = categoryImages[category] || cuscoImg;

    return (
        <div className="min-h-screen bg-[#FDFCFB]">

            {/* Hero Header */}
            <section className="relative h-[65vh] min-h-[450px] flex flex-col items-center justify-center overflow-hidden">
                <img
                    src={heroImg}
                    alt={`Tours ${categoryTitle}`}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

                <div className="container-narrow relative z-10 px-4 mt-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="text-white">
                            <Badge className="mb-4 bg-primary text-white border-none hover:bg-primary px-3 py-1 font-bold uppercase tracking-widest shadow-xl">
                                Explora {categoryTitle}
                            </Badge>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Tours {category === 'combinados' ? 'Combinados' : `en ${categoryTitle}`}
                            </h1>
                            <p className="mt-4 text-lg text-white/90 max-w-2xl font-medium">
                                Descubre los mejores paquetes turísticos diseñados para ofrecerte una experiencia inolvidable.
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20 flex flex-col items-center justify-center min-w-[160px] text-center">
                            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-black text-2xl mb-2 shadow-lg shadow-primary/30">
                                {tours.length}
                            </div>
                            <p className="text-sm font-bold text-white mb-0.5">Paquetes disponibles</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/70">Listos para reservar</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <div className="py-20 container-narrow px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tours.map((t) => (
                        <Link
                            to={`/tours/${category}/${t.slug}`}
                            key={t.slug}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 flex flex-col"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={t.img}
                                    alt={t.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-foreground hover:bg-white font-bold">
                                    {t.difficulty}
                                </Badge>
                                <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg cursor-default">
                                    Consultar
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-primary mb-3">
                                    <Clock size={16} />
                                    <span className="text-xs font-bold uppercase tracking-wider">{t.duration}</span>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {t.title}
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
                                    {t.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-border/50 text-foreground">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <MapPin size={14} className="text-primary" />
                                        <span className="font-medium">{categoryTitle}</span>
                                    </div>
                                    <div className="flex items-center text-primary font-bold hover:bg-primary/5 p-0 text-sm">
                                        Ver itinerario <Info size={16} className="ml-2" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ToursByCategory;
