import { Tour } from "../../types/tour";

export const limaTours: Tour[] = [
    {
        slug: "lima-2d-1n",
        category: "lima",
        title: "Lima 2D-1N: La Ciudad de los Reyes",
        shortTitle: "LIMA 2D-1N",
        duration: "2 Días / 1 Noche",
        price: "199",
        difficulty: "Fácil",
        img: "/assets/act-city-tour-lima.jpg",
        alt: "Lima City Tour",
        excerpt: "Descubre la capital del Perú en una escapada perfecta de dos días.",
        description: [
            "Disfrute de una estancia inolvidable en la capital del Perú. Este paquete está diseñado para quienes disponen de poco tiempo pero desean conocer los atractivos más emblemáticos de Lima, la única capital sudamericana con vista al mar.",
            "Desde la modernidad de Miraflores hasta la majestuosidad de su centro histórico, Lima le cautivará con su historia y su mundialmente reconocida gastronomía."
        ],
        highlights: ["Circuito Mágico del Agua", "City Tour Panorámico", "Miraflores", "Centro Histórico"],
        itinerary: [
            { day: 1, title: "Recepción y Circuito Mágico del Agua", content: "Recepción en el aeropuerto y traslado al hotel. Por la noche, visita al Circuito Mágico del Agua, un espectáculo impresionante de fuentes ornamentales iluminadas con tecnología de punta." },
            { day: 2, title: "City Tour Lima y Traslado", content: "City Tour Lima Panorámico recorriendo los distritos modernos y el centro colonial. A la hora coordinada, traslado al aeropuerto para su vuelo de retorno." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "01 noche de alojamiento con desayuno",
            "Visita al Circuito Mágico del Agua",
            "City Tour Lima Panorámico",
            "Tarjeta de Asistencia"
        ],
        notIncludes: ["Vuelos", "Almuerzos y cenas", "Gastos personales"],
        rates: [
            { hotel: "Lima Wasi Miraflores", single: "199", doble: "136", triple: "117" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "202", doble: "136", triple: "117", isRecommended: true },
            { hotel: "Ibis Budget Lima Miraflores", single: "206", doble: "136", triple: "115" },
            { hotel: "Ibis Reducto", single: "210", doble: "138", triple: "-" },
            { hotel: "Ibis Larco Miraflores", single: "221", doble: "144", triple: "-" },
            { hotel: "Hotel Señorial", single: "191", doble: "141", triple: "124" },
            { hotel: "HSA Riviera - Centro de Lima", single: "197", doble: "131", triple: "116" },
            { hotel: "HSA Exclusive - Miraflores", single: "216", doble: "141", triple: "124" },
            { hotel: "Radisson Red Miraflores", single: "227", doble: "149", triple: "135" },
            { hotel: "Ibis Styles Lima San Isidro", single: "225", doble: "146", triple: "125" }
        ]
    },
    {
        slug: "lima-3d-2n",
        category: "lima",
        title: "Lima 3D-2N: Cultura y Modernidad",
        shortTitle: "LIMA 3D-2N",
        duration: "3 Días / 2 Noches",
        price: "264",
        difficulty: "Fácil",
        img: "/assets/act-circuito-agua.jpg",
        alt: "Circuito Mágico del Agua",
        excerpt: "Tres días para explorar la historia, el arte y el brillo nocturno de Lima.",
        description: [
            "Explore Lima con más calma. Este itinerario le permite sumergirse en la historia colonial y disfrutar de la vibrante vida moderna de los barrios más exclusivos de la capital.",
            "Ideal para familias y parejas que buscan un equilibrio entre visitas guiadas y tiempo personal en una de las ciudades más fascinantes del continente."
        ],
        highlights: ["Centro Histórico", "Convento de San Francisco", "Parque de la Reserva", "Gastronomía"],
        itinerary: [
            { day: 1, title: "Recepción", content: "Bienvenida en el aeropuerto de Lima y traslado directo a su hotel seleccionado en Miraflores o Centro de Lima." },
            { day: 2, title: "City Tour Lima + Circuito Mágico del Agua", content: "Por la mañana, descubre los secretos de la Lima Colonial y Moderna. Por la noche, déjate sorprender por el color y sonido de las fuentes iluminadas del Circuito Mágico." },
            { day: 3, title: "Tiempo Libre y Traslado", content: "Disfrute de tiempo libre para compras o visitas opcionales. A la hora indicada, traslado privado al aeropuerto." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "02 noches de alojamiento con desayuno",
            "Visita al Circuito Mágico del Agua",
            "City Tour Lima Panorámico",
            "Tarjeta de asistencia"
        ],
        notIncludes: ["Vuelos", "Actividades no mencionadas", "Seguro de viaje"],
        rates: [
            { hotel: "Lima Wasi Miraflores", single: "264", doble: "171", triple: "146" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "270", doble: "172", triple: "146", isRecommended: true },
            { hotel: "Ibis Budget Lima Miraflores", single: "278", doble: "172", triple: "142" },
            { hotel: "Ibis Reducto", single: "286", doble: "176", triple: "-" },
            { hotel: "Ibis Larco Miraflores", single: "309", doble: "187", triple: "-" },
            { hotel: "Hotel Señorial", single: "247", doble: "182", triple: "160" },
            { hotel: "HSA Riviera - Centro de Lima", single: "260", doble: "163", triple: "143" },
            { hotel: "HSA Exclusive - Miraflores", single: "298", doble: "182", triple: "160" },
            { hotel: "Radisson Red Miraflores", single: "320", doble: "198", triple: "181" },
            { hotel: "Ibis Styles Lima San Isidro", single: "317", doble: "191", triple: "161" }
        ]
    },
    {
        slug: "lima-4d-3n",
        category: "lima",
        title: "Lima 4D-3N: Experiencia Total",
        shortTitle: "LIMA 4D-3N",
        duration: "4 Días / 3 Noches",
        price: "328",
        difficulty: "Fácil",
        img: "/assets/dest-costa.jpg",
        alt: "Costa de Lima",
        excerpt: "La inmersión completa en la capital peruana, con tiempo para descubrirla por su cuenta.",
        description: [
            "Cuatro días en Lima es la duración ideal para aquellos que desean no perderse nada. Desde la arqueología local hasta los museos más prestigiosos.",
            "Este paquete combina visitas guiadas esenciales con un día libre total, dándole la flexibilidad de visitar los famosos restaurantes de Lima, mercados locales o el distrito artístico de Barranco."
        ],
        highlights: ["Exploración Profunda", "Barranco", "Día de Libertad", "Museos"],
        itinerary: [
            { day: 1, title: "Recepción", content: "Asistencia y recepción a su llegada a Lima, traslado privado hacia el hotel." },
            { day: 2, title: "City Tour Lima + Circuito Mágico del Agua", content: "Recorrido por la ciudad colonial y moderna durante el día, seguido de la magia de las fuentes iluminadas por la noche." },
            { day: 3, title: "Día Libre para explorar", content: "Un día entero a su disposición. Recomendamos visitar el Museo Larco o caminar por el romántico distrito de Barranco." },
            { day: 4, title: "Tiempo libre y Traslado", content: "Últimas compras o paseos. Traslado al aeropuerto para su partida." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "03 noches de alojamiento con desayuno",
            "Visita al Circuito Mágico del Agua",
            "City Tour Lima Panorámico",
            "Tarjeta de Asistencia"
        ],
        notIncludes: ["Tours opcionales día 3", "Alimentación no descrita", "Propinas"],
        rates: [
            { hotel: "Lima Wasi Miraflores", single: "328", doble: "207", triple: "175" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "338", doble: "208", triple: "174", isRecommended: true },
            { hotel: "Ibis Budget Lima Miraflores", single: "350", doble: "208", triple: "169" },
            { hotel: "Ibis Reducto", single: "363", doble: "214", triple: "-" },
            { hotel: "Ibis Larco Miraflores", single: "396", doble: "231", triple: "-" },
            { hotel: "Hotel Señorial", single: "304", doble: "223", triple: "196" },
            { hotel: "HSA Riviera - Centro de Lima", single: "323", doble: "194", triple: "171" },
            { hotel: "HSA Exclusive - Miraflores", single: "380", doble: "223", triple: "196" },
            { hotel: "Radisson Red Miraflores", single: "413", doble: "248", triple: "227" },
            { hotel: "Ibis Styles Lima San Isidro", single: "408", doble: "237", triple: "197" }
        ]
    }
];
