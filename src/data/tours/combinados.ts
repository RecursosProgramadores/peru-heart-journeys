import { Tour } from "../../types/tour";

// Tour Images
import imgLimaCusco from "@/assets/tours/combinadoslimacusco5dy4n.png";
import imgPeruCompleto from "@/assets/tours/combinadoperucompleto.png";
import imgCuscoPuno from "@/assets/tours/combinadocuscopuno.png";
import imgLimaIca3D from "@/assets/tours/combinadolimayica3d2n.png";
import imgLimaIca4D from "@/assets/tours/combinadolimaica4dy3n.png";

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
        img: imgPeruCompleto,
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
        img: imgCuscoPuno,
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
        slug: "lima-ica-3d-2n",
        category: "combinados",
        title: "Lima & Ica 3D / 2N: Aventura en el Desierto",
        shortTitle: "LIMA & ICA 3D",
        duration: "3 Días / 2 Noches",
        price: "Consulte",
        difficulty: "Moderada",
        img: imgLimaIca3D,
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
        notIncludes: ["Impuestos locales en Paracas (S/ 22 aprox)", "Vuelos", "Cenas"]
    },
    {
        slug: "lima-ica-4d-3n",
        category: "combinados",
        title: "Lima & Ica 4D / 3N: Costa y Desierto sin prisas",
        shortTitle: "LIMA & ICA 4D",
        duration: "4 Días / 3 Noches",
        price: "Consulte",
        difficulty: "Fácil",
        img: imgLimaIca4D,
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
        notIncludes: ["Vuelos", "Impuestos locales en muelle", "Gastos no mencionados"]
    }
];
