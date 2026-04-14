import { Tour } from "../../types/tour";

export const combinadosTours: Tour[] = [
    {
        slug: "lima-cusco-5d-4n",
        category: "combinados",
        title: "Lima & Cusco 5D / 4N: Costa y Andes",
        shortTitle: "LIMA & CUSCO 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "769",
        difficulty: "Fácil",
        img: "/assets/act-city-tour-lima.jpg",
        alt: "Lima y Cusco combinado",
        excerpt: "Una combinación perfecta entre la modernidad de Lima y la historia milenaria de Cusco.",
        description: [
            "Conoce lo mejor del Perú en un solo viaje: la capital gastronómica de Sudamérica y la maravilla del mundo, Machu Picchu.",
            "Este itinerario optimiza tu tiempo, permitiéndote disfrutar de los contrastes culturales más impactantes del país con una logística de primera clase.",
            "⭐ Experiencia destacada: Este viaje combina lo mejor del Perú: la capital gastronómica de Sudamérica y la maravilla del mundo."
        ],
        highlights: ["City Tour Lima", "Circuito Mágico del Agua", "Machu Picchu", "Capitales Peruanas"],
        itinerary: [
            { day: 1, title: "Llegada a Lima", content: "Recepción en el aeropuerto Jorge Chávez y traslado privado a tu hotel. Tiempo libre para descansar." },
            { day: 2, title: "Lima: Historia y Fuentes", content: "Recorrido por el Centro Histórico y Miraflores. Por la noche, visita al espectacular Circuito Mágico del Agua." },
            { day: 3, title: "Lima – Cusco", content: "Vuelo a Cusco (no incluido). Recepción en el aeropuerto Velasco Astete y traslado al hotel para aclimatación." },
            { day: 4, title: "Machu Picchu", content: "Viaje en tren y visita guiada a la ciudadela arqueológica. Incluye bus, entrada y un delicioso almuerzo." },
            { day: 5, title: "Salida", content: "Mañana libre en Cusco y traslado final al aeropuerto según tu horario de vuelo." }
        ],
        includes: [
            "Traslados en Lima y Cusco",
            "2 noches en Lima + 2 noches en Cusco con desayunos",
            "City Tour Lima + Circuito Mágico del Agua",
            "Machu Picchu completo con almuerzo",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos internacionales y Lima–Cusco", "Boleto Turístico Cusco", "Gastos personales"],
        rates: [
            { hotel: "Hotel Cat Turista", single: "769", doble: "610", triple: "573" },
            { hotel: "Hotel Cat Turista Sup", single: "918", doble: "675", triple: "629", isRecommended: true }
        ]
    },
    {
        slug: "lima-ica-cusco-8d-7n",
        category: "combinados",
        title: "Lima, Ica & Cusco 8D / 7N: El Perú Completo",
        shortTitle: "LIMA, ICA & CUSCO 8D-7N",
        duration: "8 Días / 7 Noches",
        price: "1020",
        difficulty: "Moderada",
        img: "/assets/hero-machu-picchu.jpg",
        alt: "Triángulo de oro Perú",
        excerpt: "Una experiencia integral que combina ciudad, desierto y las montañas de los Andes.",
        description: [
            "Desde el océano Pacífico hasta los Andes, este viaje muestra la diversidad total del Perú en una sola ruta perfectamente coordinada.",
            "Disfruta de la modernidad limeña, la adrenalina del desierto de Ica y la espiritualidad profunda de la cultura inca en Cusco.",
            "⭐ Experiencia destacada: Desde el océano Pacífico hasta los Andes, este viaje muestra la diversidad total del Perú en una sola ruta."
        ],
        highlights: ["Huacachina", "Machu Picchu", "Islas Ballestas", "Valle Sagrado"],
        itinerary: [
            { day: 1, title: "Llegada a Lima", content: "Recepción y traslado privado a tu hotel seleccionado." },
            { day: 2, title: "Lima Cultural", content: "Exploración del Centro histórico y visita nocturna al Circuito Mágico del Agua." },
            { day: 3, title: "Paracas & Ica", content: "Expedición a las Islas Ballestas. Continuación a Ica para visita a bodega y aventura en Huacachina (tubulares + sandboarding). Incluye almuerzo." },
            { day: 4, title: "Hacia la Capital Inca", content: "Vuelo a Cusco y traslado al hotel para aclimatación segura." },
            { day: 5, title: "City Tour Cusco", content: "Visita a Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay." },
            { day: 6, title: "Valle Sagrado de los Incas", content: "Tour por Chinchero, Moray, Maras, Ollantaytambo y Pisac con almuerzo buffet." },
            { day: 7, title: "Machu Picchu", content: "Día completo en la ciudadela con tren, bus, entrada y almuerzo incluidos." },
            { day: 8, title: "Regreso", content: "Traslado final al aeropuerto." }
        ],
        includes: [
            "Traslados completos en privado",
            "3 noches en Lima + 4 noches en Cusco con desayunos",
            "City Tour Lima + Circuito Mágico",
            "Full Day Paracas & Ica (Grupal)",
            "City Tour Cusco y Valle Sagrado",
            "Machu Picchu completo con almuerzo",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos", "Impuestos en Paracas", "Boleto Turístico Cusco", "Entradas adicionales"],
        rates: [
            { hotel: "Hotel Cat Turista", single: "1020", doble: "769", triple: "712" },
            { hotel: "Hotel Cat Turista Sup", single: "1252", doble: "876", triple: "815", isRecommended: true }
        ]
    },
    {
        slug: "cusco-puno-8d-7n-vivencial",
        category: "combinados",
        title: "Cusco & Puno 8D / 7N: Andes en profundidad",
        shortTitle: "CUSCO & PUNO 8D-7N",
        duration: "8 Días / 7 Noches",
        price: "1040",
        difficulty: "Moderada",
        img: "/assets/act-lago-titicaca.jpg",
        alt: "Lago Titicaca vivencial",
        excerpt: "Ruta del Sol y Lago Titicaca vivencial: cultura auténtica y paisajes del altiplano.",
        description: [
            "Conecta el corazón del Imperio Inca con el lago navegable más alto del mundo en una experiencia que combina historia y convivencia.",
            "Dormir en una isla del Lago Titicaca y compartir con una familia local transforma el viaje en una experiencia auténtica, más allá del turismo tradicional.",
            "⭐ Experiencia destacada: Dormir en una isla del Lago Titicaca y compartir con una familia local transforma el viaje en una experiencia auténtica."
        ],
        highlights: ["Lago Titicaca", "Isla Amantani", "Ruta del Sol", "Machu Picchu"],
        itinerary: [
            { day: 1, title: "Llegada a Cusco", content: "Recepción y traslado. Tiempo libre para aclimatación." },
            { day: 2, title: "City Tour Cusco", content: "Introducción a la cosmovisión Inca visitando Sacsayhuamán y otros centros arqueológicos." },
            { day: 3, title: "Valle Sagrado", content: "Recorrido por Moray, Maras y Ollantaytambo con almuerzo buffet." },
            { day: 4, title: "Machu Picchu", content: "Visita guiada profunda a la maravilla del mundo con almuerzo incluido." },
            { day: 5, title: "Ruta del Sol", content: "Viaje escénico hacia Puno visitando Andahuaylillas, Raqchi y Pukara. Incluye almuerzo." },
            { day: 6, title: "Experiencia Vivencial: Uros y Amantaní", content: "Lancha por el Titicaca. Noche con familia local en Amantaní, compartiendo su cultura y alimentación." },
            { day: 7, title: "Isla Taquile", content: "Visita a los famosos tejedores de Taquile y retorno a Puno." },
            { day: 8, title: "Salida", content: "Traslado al aeropuerto de Juliaca." }
        ],
        includes: [
            "Traslados completos",
            "4 noches en Cusco + 2 noches en Puno + 1 noche en Amantaní",
            "Todos los tours mencionados (Cusco, Valle, Machu Picchu, Ruta del Sol, Titicaca)",
            "Alimentación completa en Amantaní",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos", "Boleto Turístico Integral Cusco", "Entradas específicas (Maras, Andahuaylillas)", "Propinas"],
        rates: [
            { hotel: "Hotel Cat Turista", single: "1040", doble: "830", triple: "779" },
            { hotel: "Hotel Cat Turista Sup", single: "1213", doble: "900", triple: "832", isRecommended: true }
        ]
    },
    {
        slug: "cusco-trekking-4d-3n",
        category: "combinados",
        title: "Cusco Machu Picchu & Trekking 4D / 3N",
        shortTitle: "CUSCO TREKKING 4D-3N",
        duration: "4 Días / 3 Noches",
        price: "Consulte",
        difficulty: "Exigente",
        img: "/assets/act-montana-colores.jpg",
        alt: "Aventura en Vinicunca",
        excerpt: "Aventura en los Andes: Machu Picchu y Montaña 7 Colores en 4 días intensos.",
        description: [
            "Este itinerario combina dos extremos: la historia de Machu Picchu y la exigencia física de la alta montaña.",
            "Una experiencia completa diseñada para viajeros activos que buscan paisajes inolvidables y retos personales.",
            "⭐ Experiencia destacada: Este itinerario combina dos extremos: la historia de Machu Picchu y la exigencia física de la alta montaña."
        ],
        highlights: ["Desafío Vinicunca", "Machu Picchu", "Alta Montaña", "Experiencia Activa"],
        itinerary: [
            { day: 1, title: "Llegada a Cusco", content: "Recepción y traslado. Descanso para aclimatación." },
            { day: 2, title: "Machu Picchu", content: "Visita guiada a la ciudadela con tren y almuerzo incluidos." },
            { day: 3, title: "Montaña 7 Colores", content: "Trekking hacia la cumbre de Vinicunca (5,000 msnm) con alimentación completa." },
            { day: 4, title: "Traslado de Salida", content: "Traslado final al aeropuerto." }
        ],
        includes: [
            "Traslados completos",
            "3 noches de alojamiento con desayuno",
            "Full Day Machu Picchu completo",
            "Tour Montaña 7 Colores con alimentación",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos", "Entrada a Montaña 7 Colores", "Boleto Turístico Cusco", "Gastos personales"]
    },
    {
        slug: "cusco-valle-trekking-5d-4n",
        category: "combinados",
        title: "Cusco Valle Sagrado & Trekking 5D / 4N",
        shortTitle: "CUSCO VALLE TREKKING 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "Consulte",
        difficulty: "Moderada",
        img: "/assets/act-valle-sagrado.jpg",
        alt: "Valle y montaña",
        excerpt: "Historia Inca y aventura en altura: una combinación equilibrada y completa.",
        description: [
            "Un viaje que combina el legado Inca con el reto físico de la montaña, ideal para quienes buscan una experiencia completa.",
            "Disfruta de la arqueología del Valle Sagrado antes de coronar tu viaje con una visita a Machu Picchu y un trekking panorámico.",
            "⭐ Experiencia destacada: Un viaje que combina el legado Inca con el reto físico de la montaña, ideal para quienes buscan una experiencia completa."
        ],
        highlights: ["Valle Sagrado", "Vinicunca", "Machu Picchu", "Cusco Imperial"],
        itinerary: [
            { day: 1, title: "Bienvenida", content: "Llegada y traslado al hotel seleccionado." },
            { day: 2, title: "Cusco Arqueológico", content: "City Tour visitando Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay." },
            { day: 3, title: "Valle Sagrado", content: "Recorrido por Chinchero, Moray, Maras y Ollantaytambo con almuerzo." },
            { day: 4, title: "Machu Picchu", content: "Tour guiado a la ciudadela con tren y almuerzo incluidos." },
            { day: 5, title: "Montaña 7 Colores", content: "Caminata de alta montaña y traslado final al aeropuerto por la noche." }
        ],
        includes: [
            "Traslados completos",
            "4 noches de alojamiento con desayuno",
            "Tours mencionados (Cusco, Valle, Machu Picchu, 7 Colores)",
            "Alimentación según itinerario",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos", "Entradas específicas", "Boleto Turístico", "Gastos personales"]
    },
    {
        slug: "cusco-cultural-adventure-5d-4n",
        category: "combinados",
        title: "Cusco Cultural & Trekking 5D / 4N",
        shortTitle: "CUSCO CULTURAL ADVENTURE 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "Consulte",
        difficulty: "Exigente",
        img: "/assets/act-laguna-humantay.jpg",
        alt: "Laguna y Montaña",
        excerpt: "El itinerario más completo en trekking para viajeros activos: Machu Picchu, Humantay y 7 Colores.",
        description: [
            "Dos de los trekkings más impresionantes del Perú en un solo viaje, combinados con la visita a Machu Picchu.",
            "Diseñado para quienes no quieren perderse nada de los paisajes de alta montaña y buscan una experiencia de trekking real.",
            "⭐ Experiencia destacada: Dos de los trekkings más impresionantes del Perú en un solo viaje, combinados con la visita a Machu Picchu."
        ],
        highlights: ["Laguna Humantay", "Montaña 7 Colores", "Machu Picchu", "Trekkings icónicos"],
        itinerary: [
            { day: 1, title: "Llegada", content: "Recepción y traslado para aclimatación." },
            { day: 2, title: "Machu Picchu", content: "Visita guiada a la maravilla con tren y almuerzo." },
            { day: 3, title: "Laguna de Humantay", content: "Salida hacia Soraypampa y caminata a la laguna turquesa con alimentación." },
            { day: 4, title: "Montaña 7 Colores", content: "Caminata hacia Vinicunca con alimentación completa." },
            { day: 5, title: "Regreso", content: "Traslado al aeropuerto." }
        ],
        includes: [
            "Traslados completos",
            "4 noches de alojamiento con desayuno",
            "Machu Picchu completo",
            "Laguna de Humantay y Montaña 7 Colores con alimentación",
            "Guía profesional y asistencia permanente"
        ],
        notIncludes: ["Vuelos", "Entradas a parques naturales", "Boleto Turístico", "Gastos personales"]
    }
];
