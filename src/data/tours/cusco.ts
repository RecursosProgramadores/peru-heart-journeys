import { Tour } from "../../types/tour";

// Tour Images
import imgEsencial from "@/assets/optimized/CUSCOESECNCIAL.webp";
import imgTradicional from "@/assets/optimized/CUSCOTRADICIONAL.webp";
import imgInolvidable from "@/assets/optimized/CUSCOINOLVIDABLE.webp";
import imgColorido from "@/assets/optimized/CUSCOCOLORIDO.webp";
import imgCompleto from "@/assets/optimized/CUSCOCOMPLETO.webp";
import imgMapiTrekking from "@/assets/optimized/CUSCOMAPIYTREKING4D3N.webp";
import imgValleTrekking from "@/assets/optimized/CUSCOVALLETREKKING5D4N.webp";
import imgCulturalTrekking from "@/assets/optimized/CUSCOCULTURALTREKKING5D4N.webp";

export const cuscoTours: Tour[] = [
    {
        slug: "cusco-machupicchu-3d-2n",
        category: "cusco",
        title: "Cusco & Machu Picchu 3D / 2N (Esencial)",
        shortTitle: "CUSCO & MACHU PICCHU 3D-2N",
        duration: "3 Días / 2 Noches",
        price: "452",
        difficulty: "Fácil",
        img: imgEsencial,
        alt: "Machu Picchu vista clásica",
        excerpt: "Machu Picchu en 3 días: experiencia rápida y completa para conocer lo esencial.",
        description: [
            "Ideal para viajeros con poco tiempo que desean conocer la maravilla del mundo sin complicaciones y con una logística impecable.",
            "Este viaje está diseñado para que vivas Machu Picchu de forma directa, sin perder tiempo en traslados innecesarios y con todo el soporte de nuestros guías expertos.",
            "Experiencia destacada: Este viaje está diseñado para que vivas Machu Picchu de forma directa, sin perder tiempo en logística ni traslados innecesarios."
        ],
        highlights: ["Inmersión Directa", "Tren Turístico", "Cusco Colonial", "Almuerzo en Machu Picchu"],
        itinerary: [
            { day: 1, title: "Llegada y Traslado", content: "Recepción en el aeropuerto, traslado al hotel y tiempo libre para descanso y aclimatación." },
            { day: 2, title: "Full Day Machu Picchu", content: "Visita guiada a la ciudadela inca con tren turístico, bus de subida y almuerzo incluido." },
            { day: 3, title: "Salida", content: "Tiempo libre para actividades personales y traslado final al aeropuerto según tu vuelo." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto",
            "02 noches de alojamiento con desayunos",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Tarjeta de Asistencia",
            "Guía para la visita"
        ],
        notIncludes: ["Vuelos nacionales o internacionales", "Tours adicionales", "Gastos personales", "Propinas"],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "452", doble: "415", triple: "403" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas) ❤️", single: "462", doble: "420", triple: "414", isRecommended: true },
            { hotel: "Novotel Cusco", single: "688", doble: "532", triple: "-" }
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
        img: imgTradicional,
        alt: "Cusco tradicional colonial",
        excerpt: "Valle Sagrado y Machu Picchu en una experiencia completa e histórica.",
        description: [
            "La mejor opción para una primera visita en Cusco. Descubre la majestuosidad del Valle Sagrado y el misticismo de la ciudadela inca.",
            "Este itinerario te permite comprender la historia Inca antes de llegar a Machu Picchu, haciendo que la experiencia sea mucho más completa y significativa.",
            "Experiencia destacada: Este itinerario te permite comprender la historia Inca antes de llegar a Machu Picchu, haciendo que la experiencia sea mucho más completa y significativa."
        ],
        highlights: ["Sacsayhuamán", "Valle Sagrado de los Incas", "Ollantaytambo", "Pueblo de Pisac"],
        itinerary: [
            { day: 1, title: "Llegada y Traslado", content: "Recepción en el aeropuerto, traslado al hotel y tiempo libre para aclimatación." },
            { day: 2, title: "City Tour Cusco", content: "Visita guiada por los templos y centros arqueológicos más importantes de la ciudad imperial." },
            { day: 3, title: "Valle Sagrado Completo", content: "Full Day visitando Chincheros, Maras, Moray, Ollantaytambo y Pisac con almuerzo incluido." },
            { day: 4, title: "Machu Picchu", content: "Visita guiada a la ciudadela inca con almuerzo, tren turístico y bus incluidos." },
            { day: 5, title: "Salida", content: "Tiempo libre para actividades personales y traslado al aeropuerto para tu vuelo de retorno." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Cusco",
            "04 noches de alojamiento en Cusco con desayunos",
            "City Tour Cusco (Sacsayhuaman, Qenqo, PukaPukara, Tambomachay)",
            "Full Day Valle Sagrado con almuerzo (Chincheros, Maras, Moray, Ollantaytambo, Pisac)",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Tarjeta de Asistencia",
            "Guías para las visitas"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Boleto Turístico Integral (USD$38 aprox)",
            "Entrada a Maras (USD$8 aprox)",
            "Tiquetes aéreos"
        ],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "567", doble: "504", triple: "482" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas) ❤️", single: "589", doble: "514", triple: "505", isRecommended: true },
            { hotel: "Novotel Cusco", single: "1040", doble: "738", triple: "-" }
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
        img: imgInolvidable,
        alt: "Paisaje inolvidable de Cusco",
        excerpt: "Cultura + naturaleza: elige tu propia aventura final en los Andes.",
        description: [
            "Seis días diseñados para dejar una huella imborrable. Combina los sitios clásicos con un día de reto personal en la montaña.",
            "Aquí el viaje se vuelve personal: eliges tu reto (Montaña 7 Colores o Laguna Humantay) y conectas con la naturaleza de forma directa.",
            "Experiencia destacada: Aquí el viaje se vuelve personal: eliges tu reto y conectas con la naturaleza de forma directa."
        ],
        highlights: ["City Tour", "Valle Sagrado", "Machu Picchu", "Aventura Personalizada"],
        itinerary: [
            { day: 1, title: "Llegada y Traslado", content: "Recepción en el aeropuerto, traslado al hotel y tiempo libre." },
            { day: 2, title: "City Tour Cusco", content: "Visita a los centros arqueológicos más emblemáticos de los alrededores de Cusco." },
            { day: 3, title: "Valle Sagrado Completo", content: "Recorrido por Chincheros, Maras, Moray, Ollantaytambo y Pisac con almuerzo incluido." },
            { day: 4, title: "Machu Picchu", content: "Viaje en tren y visita guiada a la maravilla con almuerzo en Aguas Calientes." },
            { day: 5, title: "Aventura a Elección", content: "Elige entre la Montaña 7 Colores o la Laguna de Humantay con alimentación completa." },
            { day: 6, title: "Salida", content: "Tiempo libre para compras finales y traslado al aeropuerto según tu vuelo." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Cusco",
            "05 noches de alojamiento en Cusco con desayunos",
            "City Tour Cusco (Sacsayhuaman, Qenqo, PukaPukara, Tambomachay)",
            "Full Day Valle Sagrado con almuerzo (Chincheros, Maras, Moray, Ollantaytambo, Pisac)",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Full Day Montaña 7 Colores o Laguna Humantay con alimentación",
            "Tarjeta de Asistencia",
            "Guías para las visitas"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Boleto Turístico Integral (USD$38 aprox)",
            "Entrada a Maras (USD$8 aprox)",
            "Entrada Montaña 7 Colores (USD$8 aprox)",
            "Entrada Laguna Humantay (USD$10 aprox)",
            "Tiquetes aéreos"
        ],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "636", doble: "559", triple: "533" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas) ❤️", single: "663", doble: "573", triple: "562", isRecommended: true },
            { hotel: "Novotel Cusco", single: "1227", doble: "852", triple: "-" }
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
        img: imgColorido,
        alt: "Colores de los Andes",
        excerpt: "Machu Picchu, Montaña 7 Colores y Laguna de Humantay en una semana total.",
        description: [
            "Una experiencia completa que combina historia, cultura y los paisajes más impresionantes de los Andes peruanos.",
            "Este viaje reúne lo mejor de Cusco en una sola experiencia: la historia de los Incas, la energía de Machu Picchu y los paisajes únicos de los Andes.",
            "Experiencia destacada: Este viaje reúne lo mejor de Cusco en una sola experiencia: la historia de los Incas, la energía de Machu Picchu y los paisajes únicos de los Andes."
        ],
        highlights: ["Vinicunca", "Laguna Humantay", "Machu Picchu", "Semana Completa"],
        itinerary: [
            { day: 1, title: "Llegada y Traslado", content: "Recepción en el aeropuerto, traslado al hotel y tiempo libre." },
            { day: 2, title: "City Tour Cusco", content: "Recorrido por Sacsayhuaman, Qenqo, Puka Pukara y Tambomachay." },
            { day: 3, title: "Valle Sagrado Completo", content: "Visita a Chincheros, Maras, Moray, Ollantaytambo y Pisac con almuerzo." },
            { day: 4, title: "Machu Picchu", content: "Tour guiado a la ciudadela con tren, bus y almuerzo incluidos." },
            { day: 5, title: "Montaña 7 Colores", content: "Trekking hacia Vinicunca con transporte y alimentación completa." },
            { day: 6, title: "Laguna Humantay", content: "Caminata hacia la laguna turquesa con alimentación y guía." },
            { day: 7, title: "Salida", content: "Tiempo libre y traslado al aeropuerto según el horario de tu vuelo." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Cusco",
            "06 noches de alojamiento en Cusco con desayunos",
            "City Tour Cusco (Sacsayhuaman, Qenqo, PukaPukara, Tambomachay)",
            "Full Day Valle Sagrado con almuerzo (Chincheros, Maras, Moray, Ollantaytambo, Pisac)",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Full Day Montaña 7 Colores",
            "Full Day Laguna Humantay",
            "Tarjeta de Asistencia",
            "Guías para las visitas"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Boleto Turístico Integral (USD$38 aprox)",
            "Entrada a Maras (USD$8 aprox)",
            "Entrada Montaña 7 Colores (USD$8 aprox)",
            "Entrada Laguna Humantay (USD$10 aprox)",
            "Tiquetes aéreos"
        ],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "702", doble: "611", triple: "581" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas) ❤️", single: "734", doble: "627", triple: "615", isRecommended: true },
            { hotel: "Novotel Cusco", single: "1411", doble: "963", triple: "-" }
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
        img: imgCompleto,
        alt: "Valle Sur de Cusco",
        excerpt: "Experiencia total con Valle Sur, naturaleza y cultura profunda.",
        description: [
            "El itinerario más completo para conocer Cusco en profundidad, incluyendo rutas menos turísticas y experiencias culturales únicas.",
            "Este es el viaje más completo para descubrir Cusco: combina historia, naturaleza y rutas culturales poco exploradas, ofreciendo una visión total del mundo andino.",
            "Experiencia destacada: Este es el viaje más completo para descubrir Cusco: combina historia, naturaleza y rutas culturales poco exploradas, ofreciendo una visión total del mundo andino."
        ],
        highlights: ["Valle Sur Cultural", "Pikillacta", "Tipón", "Inmersión Total"],
        itinerary: [
            { day: 1, title: "Llegada y Traslado", content: "Recepción en el aeropuerto, traslado al hotel y tiempo libre." },
            { day: 2, title: "City Tour Cusco", content: "Recorrido por los principales recintos incas periféricos y la ciudad imperial." },
            { day: 3, title: "Valle Sagrado Completo", content: "Excursión por los pueblos y centros arqueológicos del valle con almuerzo." },
            { day: 4, title: "Machu Picchu", content: "Encuentro guiado con la maravilla del mundo moderno con almuerzo y tren." },
            { day: 5, title: "Montaña 7 Colores", content: "Caminata de alta montaña hacia Vinicunca con alimentación completa." },
            { day: 6, title: "Laguna Humantay", content: "Caminata hacia la impresionante laguna turquesa con alimentación." },
            { day: 7, title: "Ruta Valle Sur", content: "Visita a Tipón, Pikillacta y Andahuaylillas (la Sixtina de América)." },
            { day: 8, title: "Salida", content: "Traslado al aeropuerto según tu horario de vuelo programado." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Cusco",
            "07 noches de alojamiento en Cusco con desayunos",
            "City Tour Cusco (Sacsayhuaman, Qenqo, PukaPukara, Tambomachay)",
            "Full Day Valle Sagrado con almuerzo (Chincheros, Maras, Moray, Ollantaytambo, Pisac)",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Full Day Montaña 7 Colores",
            "Full Day Laguna Humantay",
            "Half Day Ruta Valle Sur (Tipon, Pikillacta, Andahuaylillas)",
            "Tarjeta de Asistencia",
            "Guías para las visitas"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Boleto Turístico Integral (USD$38 aprox)",
            "Entrada a Maras (USD$8 aprox)",
            "Entrada Montaña 7 Colores (USD$8 aprox)",
            "Entrada Laguna Humantay (USD$10 aprox)",
            "Ingreso Andahuaylillas (USD$5 aprox)",
            "Tiquetes aéreos"
        ],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "767", doble: "663", triple: "628" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas) ❤️", single: "805", doble: "682", triple: "668", isRecommended: true },
            { hotel: "Novotel Cusco", single: "1595", doble: "1074", triple: "-" }
        ]
    },
    {
        slug: "cusco-trekking-4d-3n",
        category: "cusco",
        title: "Cusco Machu Picchu & Trekking 4D / 3N",
        shortTitle: "CUSCO TREKKING 4D-3N",
        duration: "4 Días / 3 Noches",
        price: "519",
        difficulty: "Exigente",
        img: imgMapiTrekking,
        alt: "Aventura en Vinicunca",
        excerpt: "Aventura en los Andes: Machu Picchu y Montaña 7 Colores en 4 días intensos.",
        description: [
            "Este itinerario combina dos extremos: la historia de Machu Picchu y la exigencia física de la alta montaña.",
            "Una experiencia completa diseñada para viajeros activos que buscan paisajes inolvidables y retos personales.",
            "Experiencia destacada: Este itinerario combina dos extremos: la historia de Machu Picchu y la exigencia física de la alta montaña."
        ],
        highlights: ["Desafío Vinicunca", "Machu Picchu", "Alta Montaña", "Experiencia Activa"],
        itinerary: [
            { day: 1, title: "Llegada y Traslado", content: "Recepción en el aeropuerto, traslado al hotel y descanso para aclimatación." },
            { day: 2, title: "Machu Picchu", content: "Visita guiada a la ciudadela con tren turístico, bus y almuerzo incluidos." },
            { day: 3, title: "Montaña 7 Colores", content: "Trekking hacia la cumbre de Vinicunca con transporte y alimentación completa." },
            { day: 4, title: "Salida", content: "Tiempo libre y traslado final al aeropuerto según tu horario de vuelo." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto",
            "03 noches de alojamiento con desayunos",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Full Day Montaña 7 Colores con alimentación",
            "Tarjeta de Asistencia",
            "Guía para las visitas"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Entrada Montaña 7 Colores (USD$8 aprox)"
        ],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "519", doble: "469", triple: "452" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas) ❤️", single: "535", doble: "477", triple: "469", isRecommended: true },
            { hotel: "Novotel Cusco", single: "874", doble: "645", triple: "-" }
        ]
    },
    {
        slug: "cusco-valle-trekking-5d-4n",
        category: "cusco",
        title: "Cusco Valle Sagrado & Trekking 5D / 4N",
        shortTitle: "CUSCO VALLE TREKKING 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "586",
        difficulty: "Moderada",
        img: imgValleTrekking,
        alt: "Valle y montaña",
        excerpt: "Historia Inca y aventura en altura: una combinación equilibrada y completa.",
        description: [
            "Un viaje que combina el legado Inca con el reto físico de la montaña, ideal para quienes buscan una experiencia completa.",
            "Disfruta de la arqueología del Valle Sagrado antes de coronar tu viaje con una visita a Machu Picchu y un trekking panorámico.",
            "Experiencia destacada: Un viaje que combina el legado Inca con el reto físico de la montaña, ideal para quienes buscan una experiencia completa."
        ],
        highlights: ["Valle Sagrado", "Vinicunca", "Machu Picchu", "Cusco Imperial"],
        itinerary: [
            { day: 1, title: "Llegada y Traslado", content: "Recepción en el aeropuerto, traslado al hotel y tiempo de descanso." },
            { day: 2, title: "Valle Sagrado", content: "Full Day visitando Chincheros, Maras, Moray, Ollantaytambo y Pisac con almuerzo." },
            { day: 3, title: "Machu Picchu", content: "Día completo en la ciudadela con tren turístico, bus y almuerzo incluido." },
            { day: 4, title: "Montaña 7 Colores", content: "Trekking de aventura hacia Vinicunca con alimentación completa." },
            { day: 5, title: "Salida", content: "Tiempo libre y traslado al aeropuerto según itinerario." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto",
            "04 noches de alojamiento con desayunos",
            "Full Day Valle Sagrado con almuerzo (Chincheros, Maras, Moray, Ollantaytambo, Pisac)",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Full Day Montaña 7 Colores con alimentación",
            "Tarjeta de Asistencia",
            "Guía para las visitas"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Boleto Turístico Parcial (USD$20 aprox)",
            "Entrada Montaña 7 Colores (USD$8 aprox)"
        ],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "586", doble: "523", triple: "502" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas) ❤️", single: "608", doble: "534", triple: "524", isRecommended: true },
            { hotel: "Novotel Cusco", single: "1059", doble: "757", triple: "-" }
        ]
    },
    {
        slug: "cusco-cultural-adventure-5d-4n",
        category: "cusco",
        title: "Cusco Cultural & Trekking 5D / 4N",
        shortTitle: "CUSCO CULTURAL ADVENTURE 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "584",
        difficulty: "Exigente",
        img: imgCulturalTrekking,
        alt: "Laguna y Montaña",
        excerpt: "El itinerario más completo en trekking para viajeros activos: Machu Picchu, Humantay y 7 Colores.",
        description: [
            "Dos de los trekkings más impresionantes del Perú en un solo viaje, combinados con la visita a Machu Picchu.",
            "Diseñado para quienes no quieren perderse nada de los paisajes de alta montaña y buscan una experiencia de trekking real.",
            "Experiencia destacada: Dos de los trekkings más impresionantes del Perú en un solo viaje, combinados con la visita a Machu Picchu."
        ],
        highlights: ["Laguna Humantay", "Montaña 7 Colores", "Machu Picchu", "Trekkings icónicos"],
        itinerary: [
            { day: 1, title: "Llegada y Traslado", content: "Recepción en el aeropuerto, traslado al hotel y descanso." },
            { day: 2, title: "Machu Picchu", content: "Full Day guiado a la maravilla con tren turístico y almuerzo." },
            { day: 3, title: "Laguna Humantay", content: "Aventura hacia la laguna turquesa con alimentación y guía." },
            { day: 4, title: "Montaña 7 Colores", content: "Trekking hacia Vinicunca con alimentación y transporte incluido." },
            { day: 5, title: "Salida", content: "Tiempo libre y traslado al aeropuerto según el horario coordinado." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto",
            "04 noches de alojamiento con desayunos",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Full Day Montaña 7 Colores con alimentación",
            "Full Day Laguna Humantay con alimentación",
            "Tarjeta de Asistencia",
            "Guía para las visitas"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Entrada Montaña 7 Colores (USD$8 aprox)",
            "Entrada Laguna Humantay (USD$10 aprox)"
        ],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "584", doble: "521", triple: "500" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas) ❤️", single: "606", doble: "532", triple: "522", isRecommended: true },
            { hotel: "Novotel Cusco", single: "1057", doble: "756", triple: "-" }
        ]
    }
];
