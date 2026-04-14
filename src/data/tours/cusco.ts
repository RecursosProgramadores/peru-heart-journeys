import { Tour } from "../../types/tour";

export const cuscoTours: Tour[] = [
    {
        slug: "cusco-machupicchu-3d-2n",
        category: "cusco",
        title: "Cusco & Machu Picchu 3D / 2N (Esencial)",
        shortTitle: "CUSCO & MACHU PICCHU 3D-2N",
        duration: "3 Días / 2 Noches",
        price: "452",
        difficulty: "Fácil",
        img: "/assets/act-machu-picchu.jpg",
        alt: "Machu Picchu vista clásica",
        excerpt: "Machu Picchu en 3 días: experiencia rápida y completa para conocer lo esencial.",
        description: [
            "Ideal para viajeros con poco tiempo que desean conocer la maravilla del mundo sin complicaciones y con una logística impecable.",
            "Este viaje está diseñado para que vivas Machu Picchu de forma directa, sin perder tiempo en traslados innecesarios y con todo el soporte de nuestros guías expertos.",
            "⭐ Experiencia destacada: Este viaje está diseñado para que vivas Machu Picchu de forma directa, sin perder tiempo en logística ni traslados innecesarios."
        ],
        highlights: ["Inmersión Directa", "Tren Turístico", "Cusco Colonial", "Almuerzo en Machu Picchu"],
        itinerary: [
            { day: 1, title: "Llegada a Cusco", content: "Recepción en el aeropuerto y traslado al hotel. Tiempo libre para aclimatación y un recorrido suave por las calles históricas de la ciudad." },
            { day: 2, title: "Machu Picchu Mágico", content: "Traslado a la estación de tren y viaje hacia Aguas Calientes. Ascenso en bus y visita guiada profunda a la ciudadela de Machu Picchu. Almuerzo incluido." },
            { day: 3, title: "Despedida de los Andes", content: "Tiempo libre para últimas compras de artesanías y traslado al aeropuerto según el horario de tu vuelo." }
        ],
        includes: [
            "Traslados aeropuerto / hotel / aeropuerto",
            "2 noches de alojamiento con desayuno",
            "Full Day Machu Picchu completo",
            "Tren turístico y Bus de subida/bajada",
            "Entrada a Machu Picchu",
            "Almuerzo en Machu Picchu",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos nacionales o internacionales", "Tours adicionales", "Gastos personales", "Propinas"],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "452", doble: "415", triple: "403" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "462", doble: "420", triple: "414", isRecommended: true },
            { hotel: "HSA Dorado", single: "552", doble: "454", triple: "436" }
        ]
    },
    {
        slug: "cusco-tradicional-5d-4n",
        category: "cusco",
        title: "Cusco Tradicional 5D / 4N",
        shortTitle: "CUSCO TRADICIONAL 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "567",
        difficulty: "Fácil",
        img: "/assets/tour-adventure.jpg",
        alt: "Cusco tradicional colonial",
        excerpt: "Valle Sagrado y Machu Picchu en una experiencia completa e histórica.",
        description: [
            "La mejor opción para una primera visita en Cusco. Descubre la majestuosidad del Valle Sagrado y el misticismo de la ciudadela inca.",
            "Este itinerario te permite comprender la historia Inca antes de llegar a Machu Picchu, haciendo que la experiencia sea mucho más completa y significativa.",
            "⭐ Experiencia destacada: Este itinerario te permite comprender la historia Inca antes de llegar a Machu Picchu, haciendo que la experiencia sea mucho más completa y significativa."
        ],
        highlights: ["Sacsayhuamán", "Valle Sagrado de los Incas", "Ollantaytambo", "Pueblo de Pisac"],
        itinerary: [
            { day: 1, title: "Llegada y Aclimatación", content: "Recepción y traslado al hotel. Tiempo libre para descansar y adaptarse a la altura." },
            { day: 2, title: "City Tour Arqueológico", content: "Visita guiada a Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay. Una introducción perfecta a la arquitectura inca." },
            { day: 3, title: "Magia del Valle Sagrado", content: "Recorrido por Chinchero, Moray, las Salineras de Maras, Ollantaytambo y Pisac. Incluye almuerzo buffet con productos locales." },
            { day: 4, title: "Cumbre en Machu Picchu", content: "Viaje en tren y visita guiada a la maravilla. Incluye bus, entrada y un delicioso almuerzo en Aguas Calientes." },
            { day: 5, title: "Retorno", content: "Traslado al aeropuerto para tu vuelo de salida." }
        ],
        includes: [
            "Traslados aeropuerto / hotel / aeropuerto",
            "4 noches de alojamiento con desayuno",
            "City Tour Cusco",
            "Valle Sagrado con almuerzo buffet",
            "Machu Picchu completo (tren + bus + entrada + almuerzo)",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos", "Boleto Turístico Integral (aprox. USD 38)", "Entrada a Maras (aprox. USD 8)", "Gastos personales"],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "567", doble: "504", triple: "482" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "589", doble: "514", triple: "505", isRecommended: true },
            { hotel: "HSA Dorado", single: "769", doble: "581", triple: "550" }
        ]
    },
    {
        slug: "cusco-inolvidable-6d-5n",
        category: "cusco",
        title: "Cusco Inolvidable 6D / 5N",
        shortTitle: "CUSCO INOLVIDABLE 6D-5N",
        duration: "6 Días / 5 Noches",
        price: "636",
        difficulty: "Moderada",
        img: "/assets/tour-sacred-valley.jpg",
        alt: "Paisaje inolvidable de Cusco",
        excerpt: "Cultura + naturaleza: elige tu propia aventura final en los Andes.",
        description: [
            "Seis días diseñados para dejar una huella imborrable. Combina los sitios clásicos con un día de reto personal en la montaña.",
            "Aquí el viaje se vuelve personal: eliges tu reto (Montaña 7 Colores o Laguna Humantay) y conectas con la naturaleza de forma directa.",
            "⭐ Experiencia destacada: Aquí el viaje se vuelve personal: eliges tu reto y conectas con la naturaleza de forma directa."
        ],
        highlights: ["City Tour", "Valle Sagrado", "Machu Picchu", "Aventura Personalizada"],
        itinerary: [
            { day: 1, title: "Llegada", content: "Recepción y traslado al hotel. Aclimatación importante." },
            { day: 2, title: "Exploración Imperial", content: "City Tour visitando los centros arqueológicos más emblemáticos de los alrededores de Cusco." },
            { day: 3, title: "Corazón del Valle Sagrado", content: "Visita completa al Valle Sagrado: Moray, Maras y Ollantaytambo con almuerzo incluido." },
            { day: 4, title: "La Maravilla", content: "Viaje en tren y visita guiada a Machu Picchu con almuerzo en Aguas Calientes." },
            { day: 5, title: "Día de Aventura a Elección", content: "Elige entre la Montaña 7 Colores (Vinicunca) o la Laguna de Humantay. Incluye transporte y alimentación completa." },
            { day: 6, title: "Traslado Final", content: "Traslado al aeropuerto para tu viaje de retorno." }
        ],
        includes: [
            "Traslados completos",
            "5 noches de alojamiento con desayuno",
            "City Tour Cusco",
            "Valle Sagrado con almuerzo",
            "Machu Picchu completo",
            "Trekking elegido (Humantay o 7 Colores) con alimentación",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos", "Boleto Turístico", "Entradas a Humantay o Montaña 7 Colores", "Gastos personales"],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "636", doble: "559", triple: "533" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "663", doble: "573", triple: "562", isRecommended: true }
        ]
    },
    {
        slug: "cusco-colorido-7d-6n",
        category: "cusco",
        title: "Cusco Colorido 7D / 6N",
        shortTitle: "CUSCO COLORIDO 7D-6N",
        duration: "7 Días / 6 Noches",
        price: "702",
        difficulty: "Moderada",
        img: "/assets/tour-cusco.jpg",
        alt: "Colores de los Andes",
        excerpt: "Machu Picchu, Montaña 7 Colores y Laguna de Humantay en una semana total.",
        description: [
            "Una experiencia completa que combina historia, cultura y los paisajes más impresionantes de los Andes peruanos.",
            "Este viaje reúne lo mejor de Cusco en una sola experiencia: la historia de los Incas, la energía de Machu Picchu y los paisajes únicos de los Andes.",
            "⭐ Experiencia destacada: Este viaje reúne lo mejor de Cusco en una sola experiencia: la historia de los Incas, la energía de Machu Picchu y los paisajes únicos de los Andes."
        ],
        highlights: ["Vinicunca", "Laguna Humantay", "Machu Picchu", "Semana Completa"],
        itinerary: [
            { day: 1, title: "Bienvenida", content: "Traslado al hotel y tiempo de aclimatación suave." },
            { day: 2, title: "Cusco Arqueológico", content: "City Tour visitando Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay." },
            { day: 3, title: "Valle Sagrado", content: "Recorrido por Chinchero, Moray, Maras y Ollantaytambo con almuerzo." },
            { day: 4, title: "Energía en Machu Picchu", content: "Tour guiado a la ciudadela con tren y almuerzo incluidos." },
            { day: 5, title: "Espectáculo de la Naturaleza: Vinicunca", content: "Trekking hacia la famosa Montaña de 7 Colores a más de 5,000 msnm." },
            { day: 6, title: "Espejo de Agua: Laguna Humantay", content: "Ruta hacia Soraypampa y caminata hacia la laguna turquesa a los pies del Salkantay." },
            { day: 7, title: "Retorno", content: "Traslado al aeropuerto." }
        ],
        includes: [
            "Traslados aeropuerto / hotel / aeropuerto",
            "6 noches de alojamiento con desayuno",
            "City Tour Cusco y Valle Sagrado",
            "Machu Picchu completo",
            "Montaña 7 Colores y Laguna de Humantay con alimentación",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos", "Boleto Turístico Integral", "Entradas a parques naturales", "Gastos personales"],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "702", doble: "611", triple: "581" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "734", doble: "627", triple: "615", isRecommended: true }
        ]
    },
    {
        slug: "cusco-completo-8d-7n",
        category: "cusco",
        title: "Cusco Completo 8D / 7N",
        shortTitle: "CUSCO COMPLETO 8D-7N",
        duration: "8 Días / 7 Noches",
        price: "767",
        difficulty: "Moderada",
        img: "/assets/act-valle-sur.jpg",
        alt: "Valle Sur de Cusco",
        excerpt: "Experiencia total con Valle Sur, naturaleza y cultura profunda.",
        description: [
            "El itinerario más completo para conocer Cusco en profundidad, incluyendo rutas menos turísticas y experiencias culturales únicas.",
            "Este es el viaje más completo para descubrir Cusco: combina historia, naturaleza y rutas culturales poco exploradas, ofreciendo una visión total del mundo andino.",
            "⭐ Experiencia destacada: Este es el viaje más completo para descubrir Cusco: combina historia, naturaleza y rutas culturales poco exploradas, ofreciendo una visión total del mundo andino."
        ],
        highlights: ["Valle Sur Cultural", "Pikillacta", "Tipón", "Inmersión Total"],
        itinerary: [
            { day: 1, title: "Llegada", content: "Recepción y traslado. Descanso para aclimatación." },
            { day: 2, title: "Raíces del Imperio", content: "City Tour por los principales recintos incas periféricos." },
            { day: 3, title: "Valle Sagrado", content: "Excursión por los pueblos y centros arqueológicos del valle." },
            { day: 4, title: "Visita a Machu Picchu", content: "Encuentro guiado con la maravilla del mundo moderno." },
            { day: 5, title: "Trekking Vinicunca", content: "Caminata de alta montaña hacia la Montaña de 7 Colores." },
            { day: 6, title: "Laguna Humantay", content: "Caminata hacia la impresionante laguna turquesa." },
            { day: 7, title: "Ruta Cultural Valle Sur", content: "Visita a Tipón (ingeniería hidráulica), Pikillacta (ciudad pre-Inca) y Andahuaylillas." },
            { day: 8, title: "Fin del Viaje", content: "Traslado al aeropuerto según tu horario de vuelo." }
        ],
        includes: [
            "Traslados completos",
            "7 noches de alojamiento con desayuno",
            "Todos los tours mencionados (Cusco, Valle Sagrado, Machu Picchu, 7 Colores, Humantay, Valle Sur)",
            "Alimentación según itinerario",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos", "Boleto Turístico Integral", "Entradas a sitios específicos (Maras, 7 colores, Humantay, Andahuaylillas)", "Propinas"],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "767", doble: "663", triple: "628" },
            { hotel: "Hoteles Tambo (I,II, 2 de Mayo) ❤️", single: "805", doble: "682", triple: "668", isRecommended: true }
        ]
    }
];
