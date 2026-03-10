import { Tour } from "../../types/tour";

export const combinadosTours: Tour[] = [
    {
        slug: "cusco-puno-8d-7n-vivencial",
        category: "combinados",
        title: "CUSCO & PUNO 8D-7N: Experiencia Vivencial",
        shortTitle: "CUSCO & PUNO 8D-7N",
        duration: "8 Días / 7 Noches",
        price: "1040",
        difficulty: "Moderada",
        img: "/assets/act-lago-titicaca.jpg",
        alt: "Lago Titicaca experiencia vivencial",
        excerpt: "Una inmersión profunda en la cultura andina, desde la capital inca hasta las islas del Titicaca.",
        description: [
            "Este viaje combina la majestuosidad del Cusco con la espiritualidad del Lago Titicaca.",
            "Vivirás una experiencia única pernoctando en una casa de familia local en la Isla Amantani, compartiendo tradiciones y costumbres ancestrales."
        ],
        highlights: ["Ruta del Sol", "Noche vivencial en Amantani", "Machu Picchu", "Isla de los Uros"],
        itinerary: [
            { day: 1, title: "Recepción en Cusco", content: "Traslado privado del aeropuerto al hotel. Tarde libre para aclimatación." },
            { day: 2, title: "City Tour Cusco", content: "Exploración de Sacsayhuaman, Qenqo, Puka Pukara y Tambomachay." },
            { day: 3, title: "Valle Sagrado Completo", content: "Visita a Pisac, Ollantaytambo y Chincheros con almuerzo incluido." },
            { day: 4, title: "Machu Picchu", content: "Día completo en la ciudadela sagrada. Almuerzo buffet incluido." },
            { day: 5, title: "Ruta del Sol a Puno", content: "Viaje en bus turístico con paradas en Andahuaylillas, La Raya y Pukara." },
            { day: 6, title: "Titicaca Día 1 (Uros y Amantani)", content: "Visita a las islas flotantes y noche en casa de una familia local en Amantani." },
            { day: 7, title: "Titicaca Día 2 (Taquile)", content: "Exploración de Taquile y retorno a Puno por la tarde." },
            { day: 8, title: "Traslado a Juliaca", content: "Traslado al aeropuerto de Juliaca para su vuelo de salida." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto - estación en privado en Cusco y Puno",
            "04 noches en Cusco + 02 noches en Puno + 01 noche en casa de Familia",
            "City Tour Cusco",
            "Full Day Valle Sagrado con almuerzo",
            "Full Day MachuPicchu con almuerzo",
            "Ruta del Sol Cusco a Puno con almuerzo",
            "Experiencia Vivencial Lago Titicaca 2D-1N con alimentación",
            "Guías para las visitas"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Boleto Turístico Integral (USD$38 aprox)",
            "Entrada a Maras (USD$8 aprox)",
            "Tiquetes aéreos"
        ],
        rates: [
            { hotel: "Hotel Cat Turista", single: "1040", doble: "830", triple: "779" },
            { hotel: "Hotel Cat Turista Sup", single: "1213", doble: "900", triple: "832", isRecommended: true }
        ]
    },
    {
        slug: "lima-cusco-5d-4n",
        category: "combinados",
        title: "LIMA & CUSCO 5D-4N: Las Dos Capitales",
        shortTitle: "LIMA & CUSCO 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "769",
        difficulty: "Fácil",
        img: "/assets/act-city-tour-lima.jpg",
        alt: "Lima y Cusco combinado",
        excerpt: "Conoce la Lima moderna y colonial antes de sumergirte en el corazón del Imperio Inca.",
        description: [
            "El paquete ideal para quienes visitan Perú por primera vez.",
            "Disfruta de la gastronomía de Lima y la historia viva del Cusco y Machu Picchu en un solo itinerario perfectamente organizado."
        ],
        highlights: ["City Tour Lima", "Circuito Mágico del Agua", "Valle Sagrado", "Machu Picchu"],
        itinerary: [
            { day: 1, title: "Lima: Recepción y City Tour", content: "Llegada a Lima y tour por la ciudad incluyendo el Circuito Mágico del Agua." },
            { day: 2, title: "Vuelo a Cusco", content: "Traslado al aeropuerto. Al llegar a Cusco, tour panorámico por la ciudad." },
            { day: 3, title: "Valle Sagrado", content: "Día completo explorando los rincones más bellos del valle." },
            { day: 4, title: "Machu Picchu", content: "Visita guiada a la ciudadela con almuerzo incluido." },
            { day: 5, title: "Traslado", content: "Tiempo libre y traslado al aeropuerto de Cusco." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Lima y Cusco",
            "01 noche en Lima + 03 noches en Cusco con desayunos",
            "City Tour Lima + Circuito Mágico del Agua",
            "Tour Panorámico Cusco",
            "Full Day Valle Sagrado con almuerzo",
            "Full Day MachuPicchu con almuerzo",
            "Guías para las visitas",
            "Tarjeta de Asistencia"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Boleto Turístico Parcial (USD$20 aprox)",
            "Entrada a Maras (USD$8 aprox)",
            "Tiquetes aéreos"
        ],
        rates: [
            { hotel: "Hotel Cat Turista", single: "769", doble: "610", triple: "573" },
            { hotel: "Hotel Cat Turista Sup", single: "918", doble: "675", triple: "629", isRecommended: true }
        ]
    },
    {
        slug: "lima-ica-3d-2n",
        category: "combinados",
        title: "LIMA & ICA 3D-2N: Costa y Desierto",
        shortTitle: "LIMA & ICA 3D-2N",
        duration: "3 Días / 2 Noches",
        price: "311",
        difficulty: "Fácil",
        img: "/assets/act-paracas-ica.jpg",
        alt: "Huacachina y Paracas",
        excerpt: "Escápate de la ciudad hacia las dunas de la Huacachina y la fauna marina de Paracas.",
        description: [
            "Una aventura rápida pero intensa en la costa peruana.",
            "Descubre la fauna de las Islas Ballestas y siente la adrenalina de los tubulares en el desierto de Ica."
        ],
        highlights: ["Islas Ballestas", "Desierto de Huacachina", "Vinos y Piscos", "Tubulares"],
        itinerary: [
            { day: 1, title: "Lima: Recepción", content: "Bienvenida y City Tour por la capital." },
            { day: 2, title: "Full Day Ica y Paracas", content: "Viaje a la costa. Tour en lancha, cata de pisco y aventura en el desierto." },
            { day: 3, title: "Traslado", content: "Tiempo libre y traslado final al aeropuerto de Lima." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "02 noches de alojamiento con desayuno",
            "City Tour Lima Panorámico",
            "Full Day Paracas, Ica, Huacachina con almuerzo",
            "Tarjeta de Asistencia"
        ],
        notIncludes: ["Vuelos internacionales", "Cenas"],
        rates: [
            { hotel: "Hoteles Tambo", single: "311", doble: "217", triple: "192" },
            { hotel: "Ibis Budget Lima Miraflores", single: "318", doble: "217", triple: "189" },
            { hotel: "Radisson Red Miraflores", single: "358", doble: "242", triple: "226", isRecommended: true }
        ]
    },
    {
        slug: "lima-ica-4d-3n",
        category: "combinados",
        title: "LIMA & ICA 4D-3N: Relax y Aventura",
        shortTitle: "LIMA & ICA 4D-3N",
        duration: "4 Días / 3 Noches",
        price: "398",
        difficulty: "Fácil",
        img: "/assets/tour-adventure.jpg",
        alt: "Aventura en Ica",
        excerpt: "Más tiempo para disfrutar de la capital y la magia del desierto peruano.",
        description: [
            "Este paquete añade una visita al Circuito Mágico del Agua en Lima, ideal para familias.",
            "Disfruta de la mejor gastronomía costera y paisajes únicos en el desierto y el océano."
        ],
        highlights: ["Circuito Mágico del Agua", "Huacachina", "Ballestas", "Cata de Piscos"],
        itinerary: [
            { day: 1, title: "Llegada a Lima", content: "Traslado al hotel." },
            { day: 2, title: "City Tour y Fuentes", content: "Tour por Lima y visita nocturna al Circuito Mágico del Agua." },
            { day: 3, title: "Aventura en la Costa", content: "Día completo en Paracas e Ica con almuerzo incluido." },
            { day: 4, title: "Finalización", content: "Traslado al aeropuerto." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "03 noches de alojamiento con desayuno",
            "City Tour Lima Panorámico",
            "Visita Circuito Mágico del Agua",
            "Full Day Paracas, Ica, Huacachina con almuerzo",
            "Tarjeta de Asistencia"
        ],
        notIncludes: ["Propinas", "Extras"],
        rates: [
            { hotel: "Hoteles Tambo", single: "398", doble: "274", triple: "242" },
            { hotel: "Ibis Budget Lima Miraflores", single: "410", doble: "274", triple: "237" },
            { hotel: "Radisson Red Miraflores", single: "469", doble: "312", triple: "292", isRecommended: true }
        ]
    },
    {
        slug: "lima-ica-cusco-8d-7n",
        category: "combinados",
        title: "LIMA, ICA & CUSCO 8D-7N: El Gran Triángulo",
        shortTitle: "LIMA, ICA & CUSCO 8D-7N",
        duration: "8 Días / 7 Noches",
        price: "1020",
        difficulty: "Moderada",
        img: "/assets/hero-machu-picchu.jpg",
        alt: "Triángulo de oro Perú",
        excerpt: "El recorrido definitivo que incluye ciudad, costa, desierto y montañas sagradas.",
        description: [
            "Conoce la diversidad del Perú en solo 8 días.",
            "Desde la vibrante Lima hasta las dunas de Ica, culminando en la asombrosa ciudadela de Machu Picchu."
        ],
        highlights: ["Huacachina", "Machu Picchu", "Islas Ballestas", "Valle Sagrado"],
        itinerary: [
            { day: 1, title: "Llegada a Lima", content: "Recepción y traslado." },
            { day: 2, title: "Lima Colonial", content: "City Tour Panorámico." },
            { day: 3, title: "Costa y Desierto", content: "Full Day Paracas e Ica." },
            { day: 4, title: "Hacia los Andes", content: "Vuelo de Lima a Cusco. Tarde libre." },
            { day: 5, title: "Cusco Sagrado", content: "City Tour por la ciudad de piedra." },
            { day: 6, title: "Corazón del Valle", content: "Full Day Valle Sagrado Completo." },
            { day: 7, title: "Machu Picchu", content: "Día inolvidable en la maravilla." },
            { day: 8, title: "Fin del Viaje", content: "Traslado al aeropuerto de Cusco." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Lima y Cusco",
            "03 noches en Lima + 04 noches en Cusco con desayunos",
            "City Tour Panorámico Lima",
            "Full Day Paracas, Ica, Huacachina con almuerzo",
            "City Tour Cusco",
            "Full Day Valle Sagrado con almuerzo",
            "Full Day MachuPicchu con almuerzo",
            "Tarjeta de Asistencia"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Boleto Turístico Integral (USD$38 aprox)",
            "Entrada a Maras (USD$8 aprox)",
            "Tiquetes aéreos"
        ],
        rates: [
            { hotel: "Hotel Cat Turista", single: "1020", doble: "769", triple: "712" },
            { hotel: "Hotel Cat Turista Sup", single: "1252", doble: "876", triple: "815", isRecommended: true }
        ]
    }
];
