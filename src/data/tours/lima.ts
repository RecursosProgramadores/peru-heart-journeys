import { Tour } from "../../types/tour";

// Tour Images
import imgLima2D from "@/assets/optimized/LIMA2D1N.webp";
import imgLima3D from "@/assets/optimized/LIMA3D2N.webp";
import imgLima4D from "@/assets/optimized/LIMA4D3N.webp";

export const limaTours: Tour[] = [
    {
        slug: "lima-2d-1n",
        category: "lima",
        title: "Lima 2D / 1N: Escapada Urbana 2026",
        shortTitle: "LIMA 2D-1N",
        duration: "2 Días / 1 Noche",
        price: "191",
        difficulty: "Fácil",
        img: imgLima2D,
        alt: "Lima City Tour",
        excerpt: "Una experiencia breve pero completa en la capital del Perú.",
        description: [
            "Ideal para quienes tienen poco tiempo pero desean conocer lo esencial de Lima con comodidad y buena logística.",
            "Esta escapada urbana te permite descubrir la única ciudad capital de Sudamérica con vista al mar, desde su centro histórico colonial hasta la modernidad vibrante de sus barrios costeros.",
            "Experiencia destacada: El Circuito Mágico del Agua combina tecnología, arte y espectáculo en una de las experiencias nocturnas más sorprendentes de Lima."
        ],
        highlights: ["Circuito Mágico del Agua", "City Tour Lima", "Traslados Privados", "Cultura Urbana"],
        itinerary: [
            { day: 1, title: "Llegada y Circuito Mágico", content: "Recepción en el aeropuerto, traslado al hotel y visita nocturna al Circuito Mágico del Agua." },
            { day: 2, title: "City Tour y Salida", content: "City Tour por Lima Panorámico y traslado al aeropuerto según el horario de tu vuelo." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "01 noche de alojamiento con desayuno",
            "Visita al Circuito Mágico del Agua",
            "City Tour Lima Panorámico",
            "Tarjeta de Asistencia"
        ],
        notIncludes: ["Vuelos", "Alimentación no especificada", "Gastos personales"],
        rates: [
            { hotel: "Hotel Señorial", single: "191", doble: "141", triple: "124" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "202", doble: "136", triple: "117", isRecommended: true },
            { hotel: "Radisson Red Miraflores", single: "227", doble: "149", triple: "135" }
        ]
    },
    {
        slug: "lima-3d-2n",
        category: "lima",
        title: "Lima 3D / 2N: Cultura y Gastronomía",
        shortTitle: "LIMA 3D-2N",
        duration: "3 Días / 2 Noches",
        price: "247",
        difficulty: "Fácil",
        img: imgLima3D,
        alt: "Artesanías y cultura en Lima",
        excerpt: "Descubre la esencia de Lima con tiempo para disfrutarla.",
        description: [
            "Una experiencia equilibrada entre historia, modernidad y gastronomía. Descubre por qué Lima es considerada una de las capitales culinarias del mundo.",
            "Tendrás el tiempo ideal para sumergirte en la riqueza cultural del centro histórico y la sofisticación de distritos como Miraflores y San Isidro.",
            "Experiencia: Lima es considerada una de las capitales gastronómicas del mundo. Aprovecha tu tiempo libre para explorar su cocina."
        ],
        highlights: ["Inmersión Gastronómica", "Centro Histórico", "Modernidad limeña", "Tiempo Libre"],
        itinerary: [
            { day: 1, title: "Llegada y Traslado", content: "Recepción en el aeropuerto y traslado privado a tu hotel seleccionado." },
            { day: 2, title: "City Tour + Circuito Mágico", content: "City Tour Lima Panorámico y visita nocturna al espectacular Circuito Mágico del Agua." },
            { day: 3, title: "Salida", content: "Tiempo libre para actividades personales y traslado final al aeropuerto." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "02 noches de alojamiento con desayuno",
            "Visita al Circuito Mágico del Agua",
            "City Tour Lima Panorámico",
            "Tarjeta de asistencia"
        ],
        notIncludes: ["Alimentación no indicada", "Vuelos", "Gastos personales"],
        rates: [
            { hotel: "Hotel Señorial", single: "247", doble: "182", triple: "160" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "270", doble: "172", triple: "146", isRecommended: true },
            { hotel: "Radisson Red Miraflores", single: "320", doble: "198", triple: "181" }
        ]
    },
    {
        slug: "lima-4d-3n",
        category: "lima",
        title: "Lima 4D / 3N: Explora a tu ritmo",
        shortTitle: "LIMA 4D-3N",
        duration: "4 Días / 3 Noches",
        price: "304",
        difficulty: "Fácil",
        img: imgLima4D,
        alt: "Miraflores y Costa Verde",
        excerpt: "Más tiempo para descubrir Lima a tu manera.",
        description: [
            "Perfecto para viajeros que quieren combinar los tours esenciales con tiempo libre para explorar por su cuenta.",
            "Disfruta de la libertad de caminar por el malecón, visitar museos específicos o realizar tus propias rutas gastronómicas con la seguridad de tener nuestro soporte constante.",
            "Experiencia: El día libre te permite personalizar tu viaje: gastronomía, museos o compras en Larcomar o mercados artesanales."
        ],
        highlights: ["Personalización", "Seguridad y Confort", "Barranco bohemio", "Vistas al Pacífico"],
        itinerary: [
            { day: 1, title: "Bienvenida en Lima", content: "Recepción en el aeropuerto y traslado privado a tu hotel." },
            { day: 2, title: "Cultura y Fuentes", content: "City Tour Lima Panorámico y visita nocturna al Circuito Mágico del Agua." },
            { day: 3, title: "Día Libre", content: "Día Libre para explorar la ciudad a su manera (gastronomía, museos o compras)." },
            { day: 4, title: "Salida", content: "Tiempo libre y traslado final al aeropuerto Jorge Chávez." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "03 noches de alojamiento con desayuno",
            "Visita al Circuito Mágico del Agua",
            "City Tour Lima Panorámico",
            "Tarjeta de Asistencia"
        ],
        notIncludes: ["Actividades en día libre", "Vuelos", "Consumos extras"],
        rates: [
            { hotel: "Hotel Señorial", single: "304", doble: "223", triple: "196" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "338", doble: "208", triple: "174", isRecommended: true },
            { hotel: "Radisson Red Miraflores", single: "413", doble: "248", triple: "227" }
        ]
    }
];
