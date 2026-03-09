import actCityTourCusco from "@/assets/act-city-tour-cusco.jpg";
import actMachuPicchu from "@/assets/act-machu-picchu.jpg";
import actValleSagrado from "@/assets/act-valle-sagrado.jpg";
import actMontanaColores from "@/assets/act-montana-colores.jpg";
import actLagunaHumantay from "@/assets/act-laguna-humantay.jpg";
import actValleSur from "@/assets/act-valle-sur.jpg";
import actRutaSol from "@/assets/act-ruta-sol.jpg";
import actLagoTiticaca from "@/assets/act-lago-titicaca.jpg";
import actCityTourLima from "@/assets/act-city-tour-lima.jpg";
import actCircuitoAgua from "@/assets/act-circuito-agua.jpg";
import actParacasIca from "@/assets/act-paracas-ica.jpg";

export interface Activity {
  slug: string;
  emoji: string;
  title: string;
  shortTitle: string;
  location: string;
  duration: string;
  difficulty: "Fácil" | "Moderada" | "Exigente";
  altitude?: string;
  img: string;
  alt: string;
  excerpt: string;
  description: string[];
  highlights: string[];
  keywords: string[];
}

export const activities: Activity[] = [
  {
    slug: "city-tour-cusco",
    emoji: "🏛",
    title: "City Tour Cusco",
    shortTitle: "City Tour Cusco",
    location: "Cusco",
    duration: "Medio día",
    difficulty: "Fácil",
    altitude: "3,400 msnm",
    img: actCityTourCusco,
    alt: "Fortaleza de Sacsayhuamán en Cusco con enormes bloques de piedra inca y cielo dorado",
    excerpt: "La mejor introducción a la antigua capital del Imperio Inca con Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay.",
    description: [
      "El City Tour en Cusco es la mejor introducción a la antigua capital del Imperio Inca. La experiencia inicia generalmente por la tarde, recorriendo los principales sitios arqueológicos ubicados en los alrededores de la ciudad.",
      "Durante el tour se visita la imponente fortaleza de Sacsayhuamán, famosa por sus enormes bloques de piedra perfectamente ensamblados. Luego se continúa hacia Qenqo, antiguo centro ceremonial; Puka Pukara, puesto militar estratégico; y Tambomachay, conocido como el templo del agua.",
      "Este recorrido permite comprender la historia, arquitectura e ingeniería inca antes de visitar Machu Picchu. Ideal para aclimatarse y comenzar a conectar con la cultura andina.",
    ],
    highlights: ["Sacsayhuamán", "Qenqo", "Puka Pukara", "Tambomachay", "Aclimatación"],
    keywords: ["city tour cusco", "sacsayhuaman", "tours cusco", "sitios arqueológicos cusco"],
  },
  {
    slug: "tour-machu-picchu",
    emoji: "🏔",
    title: "Tour Machu Picchu Full Day",
    shortTitle: "Machu Picchu",
    location: "Cusco – Aguas Calientes",
    duration: "Full day",
    difficulty: "Moderada",
    altitude: "2,430 msnm",
    img: actMachuPicchu,
    alt: "Ciudadela de Machu Picchu al amanecer con niebla y montañas andinas de fondo",
    excerpt: "La experiencia más emblemática del Perú: visita guiada a la ciudadela inca, una de las 7 Maravillas del Mundo Moderno.",
    description: [
      "El Tour a Machu Picchu es la experiencia más emblemática del Perú. La jornada inicia con el traslado a la estación de tren para viajar hacia Aguas Calientes, disfrutando de impresionantes paisajes andinos durante el trayecto.",
      "Al llegar, se asciende en bus hacia la ciudadela de Machu Picchu, una de las 7 Maravillas del Mundo Moderno. Durante la visita guiada recorrerás los principales sectores arqueológicos, templos ceremoniales, terrazas agrícolas y miradores panorámicos.",
      "El tour incluye tiempo para fotografías y explicaciones históricas detalladas sobre la civilización inca. Posteriormente se desciende a Aguas Calientes para almorzar antes del retorno a Cusco.",
    ],
    highlights: ["Tren turístico", "Ciudadela inca", "Templos ceremoniales", "Terrazas agrícolas", "Miradores panorámicos"],
    keywords: ["tour machu picchu", "entrada machu picchu", "tren turístico machu picchu", "visita guiada machu picchu"],
  },
  {
    slug: "tour-valle-sagrado",
    emoji: "🌄",
    title: "Tour Valle Sagrado de los Incas",
    shortTitle: "Valle Sagrado",
    location: "Cusco – Valle Sagrado",
    duration: "Full day",
    difficulty: "Fácil",
    altitude: "2,800 – 3,800 msnm",
    img: actValleSagrado,
    alt: "Terrazas circulares de Moray en el Valle Sagrado con montañas andinas al fondo",
    excerpt: "Recorrido cultural completo por Chincheros, Moray, Salineras de Maras, Ollantaytambo y el mercado de Pisac.",
    description: [
      "El Valle Sagrado de los Incas es uno de los recorridos culturales más completos de Cusco. Este tour de día completo permite explorar pueblos tradicionales y complejos arqueológicos rodeados de paisajes andinos.",
      "El itinerario incluye visitas a Chincheros, reconocido por su tradición textil; el laboratorio agrícola de Moray; las famosas Salineras de Maras; la fortaleza de Ollantaytambo; y el mercado artesanal de Pisac.",
      "Durante el recorrido se incluye almuerzo en restaurante local. Este tour es ideal para comprender la importancia agrícola, religiosa y estratégica del Valle Sagrado dentro del Imperio Inca.",
    ],
    highlights: ["Chincheros", "Moray", "Salineras de Maras", "Ollantaytambo", "Mercado de Pisac"],
    keywords: ["valle sagrado cusco", "salineras maras", "moray cusco", "ollantaytambo tour"],
  },
  {
    slug: "montana-7-colores",
    emoji: "🌈",
    title: "Tour Montaña de 7 Colores (Vinicunca)",
    shortTitle: "Montaña 7 Colores",
    location: "Cusco – Cusipata",
    duration: "Full day",
    difficulty: "Exigente",
    altitude: "5,200 msnm",
    img: actMontanaColores,
    alt: "Montaña de 7 Colores Vinicunca con capas minerales coloridas y cielo azul",
    excerpt: "Caminata hasta el mirador de Vinicunca para apreciar el impresionante contraste de colores minerales en la montaña.",
    description: [
      "El tour a la Montaña de 7 Colores, también conocida como Vinicunca, es una de las experiencias naturales más impactantes del sur del Perú.",
      "La excursión inicia muy temprano con traslado hacia la zona de Cusipata. Desde allí comienza una caminata progresiva hasta alcanzar el mirador natural donde se aprecia el impresionante contraste de colores minerales en la montaña.",
      "Durante el recorrido se observan comunidades andinas, alpacas y paisajes de alta montaña. Es una actividad ideal para viajeros que buscan aventura y fotografías únicas.",
    ],
    highlights: ["Vinicunca", "Comunidades andinas", "Alpacas", "Alta montaña", "Fotografía"],
    keywords: ["montaña de 7 colores cusco", "trekking vinicunca", "tour aventura cusco", "rainbow mountain peru"],
  },
  {
    slug: "laguna-humantay",
    emoji: "🏞",
    title: "Tour Laguna de Humantay",
    shortTitle: "Laguna Humantay",
    location: "Cusco – Mollepata",
    duration: "Full day",
    difficulty: "Moderada",
    altitude: "4,200 msnm",
    img: actLagunaHumantay,
    alt: "Laguna de Humantay con aguas turquesas rodeada de glaciares y montañas nevadas",
    excerpt: "Caminata moderada hasta la laguna de aguas turquesas rodeada de glaciares y montañas nevadas a más de 4,200 msnm.",
    description: [
      "La Laguna de Humantay es uno de los paisajes más impresionantes de la región de Cusco. Este tour combina caminata moderada y vistas espectaculares de montaña.",
      "La experiencia inicia con traslado hacia Mollepata y luego hacia Soraypampa, punto de inicio de la caminata. Desde allí se asciende hasta la laguna de aguas turquesas ubicada a más de 4,200 msnm.",
      "El entorno natural, rodeado de glaciares y montañas nevadas, convierte esta excursión en una experiencia ideal para amantes de la naturaleza y la fotografía.",
    ],
    highlights: ["Laguna turquesa", "Glaciares", "Soraypampa", "Trekking", "Fotografía de naturaleza"],
    keywords: ["laguna humantay cusco", "trekking humantay", "lagunas cusco", "tour naturaleza cusco"],
  },
  {
    slug: "ruta-valle-sur-cusco",
    emoji: "🛕",
    title: "Ruta Valle Sur Cusco",
    shortTitle: "Valle Sur",
    location: "Cusco – Valle Sur",
    duration: "Medio día",
    difficulty: "Fácil",
    img: actValleSur,
    alt: "Interior ornamentado de la iglesia de Andahuaylillas con altar barroco dorado",
    excerpt: "Sitios arqueológicos menos masificados: Tipón, Pikillacta y la Capilla Sixtina de América en Andahuaylillas.",
    description: [
      "El Tour Valle Sur Cusco permite conocer sitios arqueológicos menos masificados pero de gran valor histórico.",
      "Incluye visita a Tipón, famoso por su sistema hidráulico inca; Pikillacta, complejo preinca de la cultura Wari; y la iglesia de Andahuaylillas, conocida como la Capilla Sixtina de América por su impresionante arte colonial.",
      "Es una excursión cultural ideal para viajeros interesados en historia y arquitectura.",
    ],
    highlights: ["Tipón", "Pikillacta", "Andahuaylillas", "Arte colonial", "Sistema hidráulico inca"],
    keywords: ["valle sur cusco", "tipon cusco", "andahuaylillas", "capilla sixtina america"],
  },
  {
    slug: "ruta-del-sol-cusco-puno",
    emoji: "🚌",
    title: "Ruta del Sol Cusco – Puno",
    shortTitle: "Ruta del Sol",
    location: "Cusco – Puno",
    duration: "Full day (~10h)",
    difficulty: "Fácil",
    img: actRutaSol,
    alt: "Carretera del altiplano peruano con llama y montañas nevadas al fondo",
    excerpt: "Recorrido turístico de 10 horas conectando Cusco y Puno con paradas culturales en Andahuaylillas, La Raya y Pukara.",
    description: [
      "La Ruta del Sol Cusco a Puno es un recorrido turístico de aproximadamente 10 horas que conecta ambos destinos con paradas culturales.",
      "Incluye visitas a la iglesia de Andahuaylillas, el paso de La Raya (punto más alto del recorrido) y el museo de Pukara. Durante el trayecto se incluye almuerzo buffet.",
      "Este viaje permite apreciar los paisajes del altiplano peruano antes de llegar al Lago Titicaca.",
    ],
    highlights: ["Andahuaylillas", "Paso La Raya", "Museo Pukara", "Altiplano peruano", "Almuerzo buffet"],
    keywords: ["ruta del sol cusco puno", "bus turístico cusco puno", "viaje cusco puno"],
  },
  {
    slug: "lago-titicaca-uros-amantani-taquile",
    emoji: "🌊",
    title: "Experiencia Lago Titicaca – Uros, Amantaní y Taquile",
    shortTitle: "Lago Titicaca",
    location: "Puno – Lago Titicaca",
    duration: "2 días / 1 noche",
    difficulty: "Fácil",
    altitude: "3,812 msnm",
    img: actLagoTiticaca,
    alt: "Islas flotantes de los Uros en el Lago Titicaca con botes coloridos y casas de totora",
    excerpt: "Navegación por las islas Uros, convivencia con familias en Amantaní y tradición textil UNESCO en Taquile.",
    description: [
      "La experiencia vivencial en el Lago Titicaca combina naturaleza y cultura ancestral.",
      "Se inicia con navegación hacia las islas flotantes de los Uros, construidas con totora. Luego se continúa hacia la isla de Amantaní, donde se comparte con una familia local, viviendo una experiencia auténtica.",
      "Al día siguiente se visita la isla de Taquile, conocida por su tradición textil reconocida por la UNESCO.",
    ],
    highlights: ["Islas Uros", "Amantaní vivencial", "Taquile UNESCO", "Navegación", "Cultura ancestral"],
    keywords: ["lago titicaca tour", "islas uros puno", "amantani taquile", "experiencia vivencial titicaca"],
  },
  {
    slug: "city-tour-lima",
    emoji: "🌆",
    title: "City Tour Lima Panorámico",
    shortTitle: "City Tour Lima",
    location: "Lima",
    duration: "Medio día",
    difficulty: "Fácil",
    img: actCityTourLima,
    alt: "Vista panorámica de Miraflores Lima con el malecón y el Océano Pacífico al atardecer",
    excerpt: "Descubre Lima entre modernidad y tradición: Miraflores, el Malecón, Centro Histórico y plazas coloniales.",
    description: [
      "El City Tour en Lima permite descubrir la capital del Perú desde su contraste entre modernidad y tradición.",
      "Incluye recorrido por el distrito de Miraflores, el Malecón con vista al Océano Pacífico, el Centro Histórico de Lima y sus principales plazas coloniales.",
      "Ideal como complemento previo a Cusco.",
    ],
    highlights: ["Miraflores", "Malecón del Pacífico", "Centro Histórico", "Plazas coloniales"],
    keywords: ["city tour lima", "tour lima panorámico", "miraflores tour", "centro histórico lima"],
  },
  {
    slug: "circuito-magico-del-agua",
    emoji: "💦",
    title: "Circuito Mágico del Agua",
    shortTitle: "Circuito del Agua",
    location: "Lima",
    duration: "Noche (~2h)",
    difficulty: "Fácil",
    img: actCircuitoAgua,
    alt: "Fuentes iluminadas del Circuito Mágico del Agua en Lima con luces de colores de noche",
    excerpt: "Espectáculo nocturno de fuentes iluminadas con luces y música en el Parque de la Reserva de Lima.",
    description: [
      "El Circuito Mágico del Agua en Lima es uno de los atractivos nocturnos más visitados de la ciudad. Presenta un espectáculo de fuentes iluminadas con luces y música en el Parque de la Reserva.",
    ],
    highlights: ["Fuentes iluminadas", "Parque de la Reserva", "Espectáculo nocturno", "Música y luces"],
    keywords: ["circuito mágico del agua lima", "fuentes lima", "parque de la reserva lima"],
  },
  {
    slug: "paracas-ica-huacachina",
    emoji: "🏜",
    title: "Paracas – Ica – Huacachina",
    shortTitle: "Paracas & Huacachina",
    location: "Ica – Paracas",
    duration: "Full day",
    difficulty: "Moderada",
    img: actParacasIca,
    alt: "Oasis de Huacachina con palmeras y dunas doradas en el desierto de Ica",
    excerpt: "Aventura en el desierto: Islas Ballestas, bodega de piscos y sandboarding en las dunas de Huacachina.",
    description: [
      "El tour a Paracas, Ica y Huacachina es una experiencia de aventura en el desierto peruano.",
      "Incluye navegación a las Islas Ballestas, visita a bodega de vinos y piscos, y recorrido en tubulares por las dunas de Huacachina.",
      "Perfecto para combinar con Lima.",
    ],
    highlights: ["Islas Ballestas", "Bodega de pisco", "Dunas de Huacachina", "Tubulares", "Sandboarding"],
    keywords: ["paracas tour", "huacachina dunas", "islas ballestas", "ica pisco tour"],
  },
];
