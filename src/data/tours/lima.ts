import { Tour } from "../../types/tour";

export const limaTours: Tour[] = [
    {
        slug: "lima-2d-1n",
        category: "lima",
        title: "Lima 2D / 1N: Escapada Urbana 2026",
        shortTitle: "LIMA 2D-1N",
        duration: "2 Días / 1 Noche",
        price: "199",
        difficulty: "Fácil",
        img: "/assets/act-city-tour-lima.jpg",
        alt: "Lima City Tour",
        excerpt: "Una experiencia breve pero completa en la capital del Perú.",
        description: [
            "Ideal para quienes tienen poco tiempo pero desean conocer lo esencial de Lima con comodidad y buena logística.",
            "Esta escapada urbana te permite descubrir la única ciudad capital de Sudamérica con vista al mar, desde su centro histórico colonial hasta la modernidad vibrante de sus barrios costeros.",
            "⭐ Experiencia destacada: El Circuito Mágico del Agua combina tecnología, arte y espectáculo en una de las experiencias nocturnas más sorprendentes de Lima."
        ],
        highlights: ["Circuito Mágico del Agua", "City Tour Lima", "Traslados Privados", "Cultura Urbana"],
        itinerary: [
            { day: 1, title: "Llegada y Circuito Mágico", content: "Recepción en el aeropuerto y traslado al hotel. Por la noche, visita al Circuito Mágico del Agua para disfrutar de un espectáculo de fuentes único." },
            { day: 2, title: "City Tour y Despedida", content: "City Tour por Lima (Centro Histórico y Miraflores). A la hora coordinada, traslado al aeropuerto para tu vuelo de retorno." }
        ],
        includes: [
            "Traslados privados",
            "1 noche de hotel con desayuno",
            "City Tour Lima",
            "Circuito Mágico del Agua",
            "Guía profesional"
        ],
        notIncludes: ["Vuelos", "Alimentación no especificada", "Gastos personales"],
        rates: [
            { hotel: "Lima Wasi Miraflores", single: "199", doble: "136", triple: "117" },
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
        price: "264",
        difficulty: "Fácil",
        img: "/assets/act-circuito-agua.jpg",
        alt: "Artesanías y cultura en Lima",
        excerpt: "Descubre la esencia de Lima con tiempo para disfrutarla.",
        description: [
            "Una experiencia equilibrada entre historia, modernidad y gastronomía. Descubre por qué Lima es considerada una de las capitales culinarias del mundo.",
            "Tendrás el tiempo ideal para sumergirte en la riqueza cultural del centro histórico y la sofisticación de distritos como Miraflores y San Isidro.",
            "⭐ Experiencia: Lima es considerada una de las capitales gastronómicas del mundo. Aprovecha tu tiempo libre para explorar su cocina."
        ],
        highlights: ["Inmersión Gastronómica", "Centro Histórico", "Modernidad limeña", "Tiempo Libre"],
        itinerary: [
            { day: 1, title: "Llegada y Traslado", content: "Bienvenida en el aeropuerto y traslado privado a tu hotel seleccionado." },
            { day: 2, title: "City Tour + Circuito Mágico", content: "Recorrido por la ciudad colonial y moderna. Por la noche, visita guiada al Circuito Mágico del Agua." },
            { day: 3, title: "Día libre y Salida", content: "Mañana libre para compras o disfrutar de la gastronomía local. Traslado final al aeropuerto." }
        ],
        includes: [
            "Traslados privados",
            "2 noches con desayuno",
            "Tours mencionados",
            "Guía profesional"
        ],
        notIncludes: ["Alimentación no indicada", "Vuelos", "Gastos personales"],
        rates: [
            { hotel: "Lima Wasi Miraflores", single: "264", doble: "171", triple: "146" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "270", doble: "172", triple: "146", isRecommended: true },
            { hotel: "Ibis Reducto", single: "286", doble: "176", triple: "-" }
        ]
    },
    {
        slug: "lima-4d-3n",
        category: "lima",
        title: "Lima 4D / 3N: Explora a tu ritmo",
        shortTitle: "LIMA 4D-3N",
        duration: "4 Días / 3 Noches",
        price: "328",
        difficulty: "Fácil",
        img: "/assets/dest-costa.jpg",
        alt: "Miraflores y Costa Verde",
        excerpt: "Más tiempo para descubrir Lima a tu manera.",
        description: [
            "Perfecto para viajeros que quieren combinar los tours esenciales con tiempo libre para explorar por su cuenta.",
            "Disfruta de la libertad de caminar por el malecón, visitar museos específicos o realizar tus propias rutas gastronómicas con la seguridad de tener nuestro soporte constante.",
            "⭐ Experiencia: El día libre te permite personalizar tu viaje: gastronomía, museos o compras en Larcomar o mercados artesanales."
        ],
        highlights: ["Personalización", "Seguridad y Confort", "Barranco bohemio", "Vistas al Pacífico"],
        itinerary: [
            { day: 1, title: "Bienvenida en Lima", content: "Recepción y traslado privado a tu hotel." },
            { day: 2, title: "Descubriendo la Capital", content: "City Tour Lima (Colonial y Moderna) + Visita nocturna al Circuito Mágico del Agua." },
            { day: 3, title: "Tu día, tu ritmo", content: "Día completamente libre para actividades opcionales, compras o descanso." },
            { day: 4, title: "Traslado de Salida", content: "A la hora coordinada, traslado al aeropuerto Jorge Chávez." }
        ],
        includes: [
            "Traslados privados",
            "3 noches con desayuno",
            "Tours esenciales",
            "Guía"
        ],
        notIncludes: ["Actividades en día libre", "Vuelos", "Consumos extras"],
        rates: [
            { hotel: "Lima Wasi Miraflores", single: "328", doble: "207", triple: "175" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "338", doble: "208", triple: "174", isRecommended: true }
        ]
    },
    {
        slug: "lima-ica-3d-2n",
        category: "lima",
        title: "Lima & Ica 3D / 2N: Aventura en el Desierto",
        shortTitle: "LIMA & ICA 3D",
        duration: "3 Días / 2 Noches",
        price: "Consulte",
        difficulty: "Moderada",
        img: "/assets/act-paracas-ica.jpg",
        alt: "Oasis de Huacachina",
        excerpt: "Del mar al desierto en una experiencia de contraste único.",
        description: [
            "Combina la metrópoli limeña con la aventura inigualable de Paracas e Ica en solo tres días.",
            "Desde la fauna marina de las Islas Ballestas hasta la adrenalina de los tubulares en el desierto de Huacachina.",
            "⭐ Experiencia: La Huacachina es el único oasis natural de Sudamérica, rodeado de dunas gigantes que te quitarán el aliento."
        ],
        highlights: ["Islas Ballestas", "Oasis Huacachina", "Sandboarding & Tubulares", "Cata de Pisco"],
        itinerary: [
            { day: 1, title: "Llegada y City Tour", content: "Bienvenida en Lima y City Tour por los puntos más importantes de la ciudad." },
            { day: 2, title: "Full Day Paracas e Ica", content: "Viaje a Paracas para ver las Islas Ballestas. Continuación a Ica para visita a bodega de vinos/piscos y aventura en Huacachina (tubulares + sandboarding). Retorno a Lima." },
            { day: 3, title: "Salida", content: "Traslado al aeropuerto para continuar con tu viaje." }
        ],
        includes: [
            "Traslados privados en Lima",
            "2 noches de hotel en Lima",
            "Full Day Paracas e Ica (Grupal)",
            "Almuerzo en Ica",
            "Actividades y entradas"
        ],
        notIncludes: ["Impuestos locales en Paracas (S/ 22 aprox)", "Vuelos", "Cenas"],
    },
    {
        slug: "lima-ica-4d-3n",
        category: "lima",
        title: "Lima & Ica 4D / 3N: Costa y Desierto sin prisas",
        shortTitle: "LIMA & ICA 4D",
        duration: "4 Días / 3 Noches",
        price: "Consulte",
        difficulty: "Fácil",
        img: "/assets/act-valle-sagrado.jpg",
        alt: "Vistas costeras",
        excerpt: "Una experiencia más completa y relajada en la costa peruana.",
        description: [
            "Ideal para aquellos que desean disfrutar del mar y el desierto sin los apuros de un viaje corto.",
            "Incluye lo mejor de Lima, con su magia nocturna, y la expedición completa hacia el sur en una logística perfectamente coordinada.",
            "⭐ Experiencia: Desde fauna marina en Paracas hasta adrenalina en el desierto, este viaje ofrece el contraste total del Perú costero."
        ],
        highlights: ["Circuito Mágico", "Costa Verde", "Huacachina", "Logística Premium"],
        itinerary: [
            { day: 1, title: "Llegada", content: "Recepción en el aeropuerto y traslado a tu hotel." },
            { day: 2, title: "City Tour + Circuito Mágico", content: "Recorrido por Lima Colonial y Moderna. Show nocturno de fuentes de agua." },
            { day: 3, title: "Full Day Paracas e Ica", content: "Expedición completa a las Islas Ballestas y el Oasis de Huacachina con almuerzo incluido." },
            { day: 4, title: "Despedida", content: "Mañana libre y traslado al aeropuerto." }
        ],
        includes: [
            "Traslados privados",
            "3 noches con desayuno",
            "Tours mencionados",
            "Almuerzo en Ica"
        ],
        notIncludes: ["Vuelos", "Impuestos locales en muelle", "Gastos no mencionados"],
    }
];
