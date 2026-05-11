import { Tour } from "../../types/tour";

// Tour Images
import imgLimaCusco from "@/assets/optimized/COMBUNADOSLIMAYCUSCO5D4N.webp";
import imgPeruCompleto from "@/assets/optimized/COMINADOPERUCOMPLETO.webp";
import imgCuscoPuno from "@/assets/optimized/COMBINADOCUSCOYPUNO8D7N.webp";
import imgLimaIca3D from "@/assets/optimized/COMBINADOSLIMAICA3D2N.webp";
import imgLimaIca4D from "@/assets/optimized/COMBINADOLIMAICA4D3N.webp";

export const combinadosTours: Tour[] = [
    {
        slug: "lima-cusco-5d-4n",
        category: "combinados",
        title: "Lima & Cusco 5D / 4N: Costa y Andes",
        shortTitle: "LIMA & CUSCO 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "769",
        difficulty: "Fácil",
        img: imgLimaCusco,
        alt: "Lima y Cusco combinado",
        excerpt: "Una combinación perfecta entre la modernidad de Lima y la historia milenaria de Cusco.",
        description: [
            "Conoce lo mejor del Perú en un solo viaje: la capital gastronómica de Sudamérica y la maravilla del mundo, Machu Picchu.",
            "Este itinerario optimiza tu tiempo, permitiéndote disfrutar de los contrastes culturales más impactantes del país con una logística de primera clase.",
            "Experiencia destacada: Este viaje combina lo mejor del Perú: la capital gastronómica de Sudamérica y la maravilla del mundo."
        ],
        highlights: ["City Tour Lima", "Circuito Mágico del Agua", "Machu Picchu", "Capitales Peruanas"],
        itinerary: [
            { day: 1, title: "Bienvenida en Lima", content: "Recepción en el aeropuerto, traslado al hotel y City Tour Lima + Circuito Mágico del Agua (2pm)." },
            { day: 2, title: "Lima – Cusco", content: "Vuelo a Cusco y traslado al hotel. Por la tarde, disfrute de un Tour Panorámico por la ciudad (2pm)." },
            { day: 3, title: "Valle Sagrado Completo", content: "Full Day visitando Chincheros, Maras, Moray, Ollantaytambo y Pisac con almuerzo incluido." },
            { day: 4, title: "Machu Picchu", content: "Visita guiada a la ciudadela inca con tren turístico, bus y almuerzo incluidos." },
            { day: 5, title: "Salida", content: "Tiempo libre en la ciudad imperial y traslado final al aeropuerto según tu vuelo." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Lima y Cusco",
            "01 noche de alojamiento en Lima + 03 noches de alojamiento en Cusco con desayunos",
            "City Tour Lima + Circuito Mágico del Agua (2pm)",
            "Tour Panorámico Cusco (2pm)",
            "Full Day Valle Sagrado con almuerzo (Chincheros, Maras, Moray, Ollantaytambo, Pisac)",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
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
        slug: "lima-ica-cusco-8d-7n",
        category: "combinados",
        title: "Lima, Ica & Cusco 8D / 7N: El Perú Completo",
        shortTitle: "LIMA, ICA & CUSCO 8D-7N",
        duration: "8 Días / 7 Noches",
        price: "1012",
        difficulty: "Moderada",
        img: imgPeruCompleto,
        alt: "Triángulo de oro Perú",
        excerpt: "Una experiencia integral que combina ciudad, desierto y las montañas de los Andes.",
        description: [
            "Desde el océano Pacífico hasta los Andes, este viaje muestra la diversidad total del Perú en una sola ruta perfectamente coordinada.",
            "Disfruta de la modernidad limeña, la adrenalina del desierto de Ica y la espiritualidad profunda de la cultura inca en Cusco.",
            "Experiencia destacada: Desde el océano Pacífico hasta los Andes, este viaje muestra la diversidad total del Perú en una sola ruta."
        ],
        highlights: ["Huacachina", "Machu Picchu", "Islas Ballestas", "Valle Sagrado"],
        itinerary: [
            { day: 1, title: "Llegada a Lima", content: "Recepción en el aeropuerto y traslado privado a tu hotel seleccionado." },
            { day: 2, title: "Lima Cultural", content: "City Tour Panorámico por la ciudad de los reyes (Lima Colonial y Moderna)." },
            { day: 3, title: "Paracas, Ica & Huacachina", content: "Full Day visitando Islas Ballestas, bodega de vinos y aventura en los tubulares de Huacachina con almuerzo." },
            { day: 4, title: "Vuelo a Cusco", content: "Traslado al aeropuerto, vuelo a la ciudad imperial y tiempo libre para aclimatación." },
            { day: 5, title: "City Tour Cusco", content: "Visita guiada a Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay." },
            { day: 6, title: "Valle Sagrado Completo", content: "Recorrido por Chinchero, Moray, Maras, Ollantaytambo y Pisac con almuerzo." },
            { day: 7, title: "Machu Picchu", content: "Visita guiada a la maravilla con tren turístico, bus y almuerzo incluidos." },
            { day: 8, title: "Salida", content: "Tiempo libre para compras y traslado final al aeropuerto de Cusco." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Lima y Cusco",
            "03 noche de alojamiento en Lima + 04 noches de alojamiento en Cusco con desayunos",
            "City Tour Panorámico Lima",
            "Full Day Paracas, Ica, Huacachina con almuerzo (Islas Ballestas, Bodega de Vinos y Piscos, Tubulares en Huacachina)",
            "City Tour Cusco (Sacsayhuaman, Qenqo, PukaPukara, Tambomachay)",
            "Full Day Valle Sagrado con almuerzo (Chincheros, Maras, Moray, Ollantaytambo, Pisac)",
            "Full Day Machu Picchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Guías para las visitas",
            "Tarjeta de Asistencia"
        ],
        notIncludes: [
            "Alimentación no especificada",
            "Boleto Turístico Integral (USD$38 aprox)",
            "Entrada a Maras (USD$8 aprox)",
            "Tiquetes aéreos"
        ],
        rates: [
            { hotel: "Hotel Cat Turista", single: "1012", doble: "760", triple: "704" },
            { hotel: "Hotel Cat Turista Sup", single: "1244", doble: "867", triple: "807", isRecommended: true }
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
        img: imgCuscoPuno,
        alt: "Lago Titicaca vivencial",
        excerpt: "Ruta del Sol y Lago Titicaca vivencial: cultura auténtica y paisajes del altiplano.",
        description: [
            "Conecta el corazón del Imperio Inca con el lago navegable más alto del mundo en una experiencia que combina historia y convivencia.",
            "Dormir en una isla del Lago Titicaca y compartir con una familia local transforma el viaje en una experiencia auténtica, más allá del turismo tradicional.",
            "Experiencia destacada: Dormir en una isla del Lago Titicaca y compartir con una familia local transforma el viaje en una experiencia auténtica."
        ],
        highlights: ["Lago Titicaca", "Isla Amantani", "Ruta del Sol", "Machu Picchu"],
        itinerary: [
            { day: 1, title: "Llegada a Cusco", content: "Recepción en el aeropuerto y traslado privado al hotel seleccionado." },
            { day: 2, title: "City Tour Cusco", content: "Visita guiada a Sacsayhuamán y los principales templos de la ciudad imperial." },
            { day: 3, title: "Valle Sagrado Completo", content: "Recorrido por Moray, Maras y Ollantaytambo con almuerzo buffet incluido." },
            { day: 4, title: "Machu Picchu", content: "Visita guiada profunda a la maravilla del mundo con tren, bus y almuerzo." },
            { day: 5, title: "Ruta del Sol (Cusco–Puno)", content: "Traslado a la estación y viaje escénico visitando Andahuaylillas, La Raya y Pukara con almuerzo." },
            { day: 6, title: "Vivencial Titicaca D1", content: "Lancha por el lago, visita a las Islas de Los Uros y noche con una familia local en Amantaní." },
            { day: 7, title: "Vivencial Titicaca D2", content: "Visita a la Isla Taquile y retorno a la ciudad de Puno para descanso." },
            { day: 8, title: "Salida", content: "Tiempo libre y traslado final al aeropuerto de Juliaca para tu vuelo de retorno." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto - estación en privado en Cusco y Puno",
            "04 noches de alojamiento en Cusco + 02 noches de alojamiento en Puno + 01 noche de alojamiento en casa de Familia, con desayunos",
            "City Tour Cusco (Sacsayhuaman, Qenqo, PukaPukara, Tambomachay)",
            "Full Day Valle Sagrado con almuerzo (Chincheros, Maras, Moray, Ollantaytambo, Pisac)",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Ruta del Sol Cusco a Puno con almuerzo (Andahuaylillas, La Raya, Pukara)",
            "Experiencia Vivencial Lago Titicaca 2D-1N con alimentación (Islas de Los Uros, Isla Amantani, Isla Taquile)",
            "Guías para las visitas",
            "Tarjeta de asistencia"
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
        slug: "lima-ica-3d-2n",
        category: "combinados",
        title: "Lima & Ica 3D / 2N: Aventura en el Desierto",
        shortTitle: "LIMA & ICA 3D",
        duration: "3 Días / 2 Noches",
        price: "311",
        difficulty: "Moderada",
        img: imgLimaIca3D,
        alt: "Oasis de Huacachina",
        excerpt: "Del mar al desierto en una experiencia de contraste único.",
        description: [
            "Combina la metrópoli limeña con la aventura inigualable de Paracas e Ica en solo tres días.",
            "Desde la fauna marina de las Islas Ballestas hasta la adrenalina de los tubulares en el desierto de Huacachina.",
            "Experiencia: La Huacachina es el único oasis natural de Sudamérica, rodeado de dunas gigantes que te quitarán el aliento."
        ],
        highlights: ["Islas Ballestas", "Oasis Huacachina", "Sandboarding & Tubulares", "Cata de Pisco"],
        itinerary: [
            { day: 1, title: "Llegada y City Tour", content: "Recepción en el aeropuerto y City Tour Panorámico por la ciudad de Lima." },
            { day: 2, title: "Full Day Paracas, Ica & Huacachina", content: "Expedición visitando Islas Ballestas, bodega de vinos/piscos y aventura en Huacachina con almuerzo incluido." },
            { day: 3, title: "Salida", content: "Tiempo libre para actividades personales y traslado final al aeropuerto Jorge Chávez." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "02 noches de alojamiento con desayuno",
            "City Tour Lima Panorámico",
            "Full Day Paracas, Ica, Huacachina con almuerzo (Islas Ballestas, Bodega de Vinos y Piscos, Tubulares en Huacachina)",
            "Tarjeta de Asistencia"
        ],
        notIncludes: ["Impuestos locales en Paracas (S/ 22 aprox)", "Vuelos", "Cenas"],
        rates: [
            { hotel: "Hoteles Tambo", single: "311", doble: "217", triple: "192" },
            { hotel: "Ibis Budget Lima Miraflores", single: "318", doble: "217", triple: "189", isRecommended: true },
            { hotel: "Radisson Red Miraflores", single: "358", doble: "242", triple: "226" }
        ]
    },
    {
        slug: "lima-ica-4d-3n",
        category: "combinados",
        title: "Lima & Ica 4D / 3N: Costa y Desierto sin prisas",
        shortTitle: "LIMA & ICA 4D",
        duration: "4 Días / 3 Noches",
        price: "388",
        difficulty: "Fácil",
        img: imgLimaIca4D,
        alt: "Vistas costeras",
        excerpt: "Una experiencia más completa y relajada en la costa peruana.",
        description: [
            "Ideal para aquellos que desean disfrutar del mar y el desierto sin los apuros de un viaje corto.",
            "Incluye lo mejor de Lima, con su magia nocturna, y la expedición completa hacia el sur en una logística perfectamente coordinada.",
            "Experiencia: Desde fauna marina en Paracas hasta adrenalina en el desierto, este viaje ofrece el contraste total del Perú costero."
        ],
        highlights: ["Circuito Mágico", "Costa Verde", "Huacachina", "Logística Premium"],
        itinerary: [
            { day: 1, title: "Llegada a Lima", content: "Recepción en el aeropuerto y traslado privado a tu hotel." },
            { day: 2, title: "City Tour + Circuito Mágico", content: "City Tour Lima Panorámico y visita nocturna al Circuito Mágico del Agua." },
            { day: 3, title: "Full Day Paracas, Ica & Huacachina", content: "Expedición completa visitando Islas Ballestas y el Oasis de Huacachina con almuerzo incluido." },
            { day: 4, title: "Salida", content: "Tiempo libre para actividades y traslado final al aeropuerto." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "03 noches de alojamiento con desayuno",
            "City Tour Lima Panorámico",
            "Visita Circuito Mágico del Agua",
            "Full Day Paracas, Ica, Huacachina con almuerzo (Islas Ballestas, Bodega de Vinos y Piscos, Tubulares en Huacachina)",
            "Tarjeta de Asistencia"
        ],
        notIncludes: ["Vuelos", "Impuestos locales en muelle", "Gastos no mencionados"],
        rates: [
            { hotel: "Hoteles Tambo", single: "388", doble: "263", triple: "232" },
            { hotel: "Ibis Budget Lima Miraflores", single: "399", doble: "264", triple: "227", isRecommended: true },
            { hotel: "Radisson Red Miraflores", single: "458", doble: "301", triple: "282" }
        ]
    }
];
