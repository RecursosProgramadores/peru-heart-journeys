import imgMorada from "@/assets/optimized/MORADADIOSES.webp";
import imgCityPanoramico from "@/assets/optimized/FULLDAYCUSCOPANORAMICO.webp";
import imgCityQoricancha from "@/assets/optimized/FULLDAYCITTYCORICANCHA.webp";
import imgValleSagrado from "@/assets/optimized/FULLDAYVALLESAGRADO.webp";
import imgValleSur from "@/assets/optimized/FULLDAYVALLESUR.webp";
import imgMontana from "@/assets/optimized/FULLDAYMONTANA.webp";
import imgMachuPicchu from "@/assets/optimized/FULLDAYMACHUPICCHU.webp";
import imgHumantay from "@/assets/optimized/FULLDAYHUMANTAY.webp";
import imgParacas from "@/assets/optimized/FULLDAYPARACASICA.webp";

export interface FullDayTour {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  descriptionDetailed?: string[];
  itinerary?: { day: string; title: string; content: string }[];
  includes?: string[];
  notIncludes?: string[];
  difficulty?: string;
  packages?: {
    name: string;
    price: number;
    description: string;
    availability?: string;
  }[];
}

export const fullDayTours: FullDayTour[] = [
  {
    id: "morada-de-los-dioses",
    title: "Morada de los Dioses",
    category: "Full Day",
    location: "Cusco",
    duration: "1 day",
    price: 30,
    difficulty: "Fácil",
    image: imgMorada,
    description: "Un Viaje Místico a Través del Arte y la Naturaleza.",
    descriptionDetailed: [
      "Sumérgete en un lugar lleno de misticismo y espiritualidad en la Morada de los Dioses, un espacio único en las afueras de Cusco donde la naturaleza se fusiona con el arte. Este recorrido te llevará a descubrir impresionantes esculturas talladas en roca que representan figuras de la cosmovisión andina, como dioses y guardianes míticos.",
      "Durante el paseo, estarás rodeado de paisajes espectaculares, con montañas y valles que complementan este espacio artístico. Las obras fueron realizadas por artistas locales, quienes plasmaron en piedra la conexión entre los incas y sus deidades, creando un lugar de paz y reflexión.",
      "La Morada de los Dioses es perfecta para quienes buscan una experiencia espiritual y cultural, donde el arte contemporáneo se une a las tradiciones milenarias de los Andes, ofreciendo un entorno ideal para la contemplación y el disfrute de la naturaleza."
    ],
    includes: ["Movilidad", "Entrada", "Guia"],
    notIncludes: ["Alimentación", "Gastos personales"],
    itinerary: [
      {
        day: "Día 1",
        title: "Salida desde Cusco a la Morada de los Dioses",
        content: "Sumérgete en un lugar lleno de misticismo y espiritualidad en la Morada de los Dioses, un espacio único en las afueras de Cusco donde la naturaleza se fusiona con el arte. Descubrirás impresionantes esculturas talladas en roca de dioses guardianes míticos."
      }
    ],
    packages: [
      {
        name: "Morada de los dioses AM",
        price: 30,
        description: "Servicio grupal"
      }
    ]
  },
  {
    id: "city-tour-panoramico",
    title: "City Tour Cusco Panoramico",
    category: "Half Day",
    location: "Cusco",
    duration: "1 day",
    price: 27,
    difficulty: "Fácil",
    image: imgCityPanoramico,
    description: "Recorrido en bus panorámico por los atractivos más representativos de la ciudad imperial.",
    descriptionDetailed: [
      "Un paseo desde un Bus Panoramico en Cusco es la mejor opción, para todos aquellos turistas que deseen una visita corta por la ciudad del Cusco.",
      "El Bus Panorámico Cusco los llevará a los lugares más representativos de la ciudad y en solamente unas cuantas horas conocerá la belleza de esta increíble ciudad de los incas."
    ],
    includes: [
      "Recojo: Punto de encuentro Pileta Plaza de Regocijo",
      "Transporte Turístico: Unidad móvil autorizada",
      "Guía Profesional: Acreditado, en español o inglés",
      "Drop Off: finaliza en el centro de la ciudad de Cusco"
    ],
    notIncludes: ["Agua o Bebidas", "Propinas", "Seguro de viaje"],
    itinerary: [
      {
        day: "Día 1",
        title: "Centro Histórico - Qorikancha - Sacsayhuamán - Qenqo - Pucapucará",
        content: "Pasamos por lugares famosos del centro histórico: Fuente de agua 'Paccha Pumaqchupan', Templo del Sol 'Qorikancha', Plaza de Armas. Apreciaremos el Mirador San Cristóbal. Hacia las afueras de la ciudad, nos trasladaremos hacia parques arqueológicos como Sacsayhuamán, Qenqo y Pucapucará. Se incluye parada en Centro de Rituales Incas para ceremonia a la Pachamama y parada en el Cristo Blanco (8 metros) con la mejor vista de la ciudad. Recorrido de 2 horas y 30 minutos."
      }
    ],
    packages: [
      {
        name: "Bus Panoramico Cusco MAÑANA",
        price: 27,
        description: "ENCUENTRO: 09:45 AM. RETORNO: 12:30 PM."
      },
      {
        name: "Bus Panoramico Cusco MEDIODIA",
        price: 27,
        description: "ENCUENTRO: 12:45 PM. RETORNO: 15:30 PM."
      },
      {
        name: "Bus Panoramico Cusco TARDE",
        price: 27,
        description: "ENCUENTRO: 15:45 PM. RETORNO: 18:30 PM."
      }
    ]
  },
  {
    id: "city-tour-qoricancha",
    title: "City Tour & Qoricancha",
    category: "Half Day",
    location: "Cusco",
    duration: "1 day",
    price: 25,
    difficulty: "Fácil",
    image: imgCityQoricancha,
    description: "Explora el fascinante legado histórico de la capital del Imperio Inca empezando por el Templo del Sol.",
    descriptionDetailed: [
      "City Tour & Qoricancha: Historia Viva en el Corazón de Cusco",
      "Explora el fascinante legado histórico de la capital del Imperio Inca. Este recorrido te llevará por los lugares más emblemáticos de la ciudad de Cusco, empezando por el majestuoso Templo de Qoricancha, conocido como el 'Templo del Sol'. Admira la sorprendente combinación de arquitectura inca y colonial que hace de este sitio uno de los más impresionantes del Perú.",
      "A continuación, explorarás sitios arqueológicos cercanos como Sacsayhuamán, con sus colosales muros de piedra, y Tambomachay, conocido por sus fuentes ceremoniales.",
      "Este tour es perfecto para quienes deseen sumergirse en la historia y la cultura de Cusco."
    ],
    includes: ["Movilidad (Ida y Vuelta)", "Guia oficial de Turismo"],
    notIncludes: ["Boleto Qoricancha", "BTC Cusco"],
    itinerary: [
      {
        day: "Día 1",
        title: "Templo del Sol y Parque Arqueológico",
        content: "Iniciamos explorando el majestuoso Templo de Qoricancha. A continuación, el recorrido te lleva a sitios arqueológicos cercanos como Sacsayhuamán, con sus colosales muros de piedra, y Tambomachay, conocido por sus fuentes ceremoniales, sumergiéndote en la rica historia viva."
      }
    ],
    packages: [
      {
        name: "City Tour & Qoricancha",
        price: 25,
        description: "Servicio grupal"
      }
    ]
  },
  {
    id: "valle-sagrado-completo",
    title: "Valle Sagrado Completo",
    category: "Full Day",
    location: "Ollantaytambo",
    duration: "1 day",
    price: 45,
    difficulty: "Moderada",
    image: imgValleSagrado,
    description: "Un Viaje por el Corazón del Imperio Inca: Pisac, Moray, Maras, Ollantaytambo y Chinchero.",
    descriptionDetailed: [
      "Descubre los tesoros del Valle Sagrado de los Incas en un recorrido que te llevará a través de paisajes impresionantes y sitios arqueológicos de gran importancia histórica.",
      "Este tour completo te permitirá visitar lugares emblemáticos como Pisac, con su mercado artesanal y su impresionante complejo arqueológico, y Ollantaytambo, una fortaleza que aún conserva su traza urbana original y sus terrazas agrícolas.",
      "Además, explorarás Moray, un antiguo laboratorio agrícola inca, donde misteriosas terrazas circulares fueron usadas para experimentar con cultivos. Luego, visita las Salineras de Maras, un paisaje único donde miles de pozos de sal son explotados de manera tradicional desde tiempos preincaicos.",
      "También visitarás Chinchero, conocido por su tradición textil y por sus ruinas coloniales e incas. A lo largo del recorrido, disfrutarás de vistas panorámicas de valles fértiles y montañas nevadas."
    ],
    includes: [
      "Movilidad: Cusco - Chincheros - Maras - Moray - Ollantaytambo - Pisac",
      "Guia Oficial de Turismo",
      "Alimentación: Almuerzo Buffet"
    ],
    notIncludes: ["Boleto Maras", "BTC Cusco"],
    itinerary: [
      {
        day: "Día 1",
        title: "Maravillas del Valle Sagrado",
        content: "Empezamos entre 6:30 y 7:00 am viajando a Chinchero. Seguimos a Moray para visitar el centro agrícola circular, y luego a las Salineras de Maras. Almorzamos buffet en Urubamba. Visitamos la fortaleza de Ollantaytambo, con sus incomparables canales y muros. Finalizamos en el complejo de Pisac, lleno de enormes terrazas y finalizamos en el mercado, retornando a Cusco al final del día."
      }
    ],
    packages: [
      {
        name: "Full Day Valle Sagrado Completo",
        price: 45,
        description: "Servicio grupal"
      }
    ]
  },
  {
    id: "valle-sur",
    title: "Valle Sur",
    category: "Half Day",
    location: "Andahuaylillas",
    duration: "1 day",
    price: 34,
    difficulty: "Fácil",
    image: imgValleSur,
    description: "Explora la ruta menos conocida y fascinante: Tipón, Pikillacta y la Capilla Sixtina de América.",
    descriptionDetailed: [
      "Valle Sur: Historia y Cultura al Alcance de Cusco",
      "Explora una de las rutas menos conocidas pero igualmente fascinantes de Cusco en el Valle Sur. Este tour te llevará a sitios arqueológicos impresionantes como Tipón, un antiguo centro de adoración al agua con terrazas y canales que demuestran el increíble manejo hidráulico de los incas.",
      "También visitarás Pikillacta, una ciudad preincaica construida por la civilización Wari, con su diseño urbano avanzado y estructuras de piedra.",
      "El recorrido continúa hacia la hermosa Iglesia de Andahuaylillas, conocida como la 'Capilla Sixtina de América' por sus sorprendentes frescos y su impresionante arquitectura colonial."
    ],
    includes: [
      "Movilidad: Cusco - Tipon - Pikillacta - Andahuaylillas - Cusco",
      "Guia Oficial de Turismo"
    ],
    notIncludes: ["Entradas: Andahuaylillas", "BTC Cusco"],
    itinerary: [
      {
        day: "Día 1",
        title: "Tipón, Pikillacta y Andahuaylillas",
        content: "El tour visita Tipón (adoración al agua con avanzados canales hidráulicos), Pikillacta (ciudad preinca de los Wari) y culmina en la espectacular iglesia de Andahuaylillas."
      }
    ],
    packages: [
      {
        name: "Valle Sur: Historia y Cultura",
        price: 34,
        description: "Servicio grupal"
      }
    ]
  },
  {
    id: "montana-7-colores",
    title: "Full Day Montaña 7 Colores",
    category: "Full Day",
    location: "Cusipata",
    duration: "1 day",
    price: 43,
    difficulty: "Desafiante",
    image: imgMontana,
    description: "Una maravilla natural situada en los Andes a más de 5,000 metros con vibrantes franjas de colores.",
    descriptionDetailed: [
      "Montaña 7 Colores: Un Espectáculo Natural de los Andes Peruanos",
      "La Montaña 7 Colores, también conocida como Vinicunca, es una maravilla natural situada en los Andes peruanos que deslumbra a todos los que la visitan. A una altitud de más de 5,000 metros sobre el nivel del mar, esta montaña destaca por sus vibrantes franjas de colores que van desde el rojo, amarillo, verde, hasta el violeta, producto de la sedimentación de minerales a lo largo de millones de años.",
      "El trekking hacia la cima es una experiencia desafiante pero increíblemente gratificante, ya que te permite atravesar paisajes espectaculares, desde valles andinos hasta picos nevados.",
      "Al llegar a la cumbre, serás recompensado con una vista panorámica que parece sacada de otro mundo, donde los colores de la montaña contrastan de manera asombrosa con el cielo azul y las nubes que pasan."
    ],
    includes: [
      "Traslado ida y vuelta: Recojo en su hotel/airbnb céntrico",
      "Desayuno",
      "Almuerzo",
      "Guia",
      "Seguro SOAT vehícular"
    ],
    notIncludes: ["Entrada: (se paga directamente a la comunidad)", "Seguro de viaje"],
    itinerary: [
      {
        day: "Día 1",
        title: "Trekking hacia Vinicunca",
        content: "A las 4:30 AM recojo y traslado a las faldas del Nevado Ausangate. Parada en Cusipata para desayunar. Breve charla y caminata de 3 horas hacia la Montaña 7 Colores, apreciando las vibrantes franjas de minerales a 5,000 mts. Regreso a Cusipata para el almuerzo. Retorno a su hotel en Cusco aprox. 18:30 horas."
      }
    ],
    packages: [
      {
        name: "Full day Montaña 7 Colores",
        price: 43,
        description: "Servicio Compartido"
      }
    ]
  },
  {
    id: "machu-picchu-full-day",
    title: "Full Day Machu Picchu",
    category: "Full Day",
    location: "Machupicchu",
    duration: "1 day",
    price: 255,
    difficulty: "Moderada",
    image: imgMachuPicchu,
    description: "La majestuosa ciudadela de Machu Picchu en un viaje de inmersión cultural de todo un día.",
    descriptionDetailed: [
      "Cusco, la joya histórica de los Andes, deslumbra a los visitantes con su rica herencia arquitectónica, donde la magnificencia de las construcciones incaicas se fusiona armoniosamente con el esplendor de la arquitectura colonial.",
      "Este destino fascinante es el portal hacia las majestuosas ruinas de Machu Picchu, un testimonio eterno del ingenio y la espiritualidad de los antiguos incas."
    ],
    includes: [
      "Entrada: Circuito 1, 2 o 3 según la disponibilidad",
      "Traslado: Servicio Bimodal Bus+Tren (Inca Rail o Perú Rail según disponibilidad)",
      "Bus: Subida y Bajada a ciudadela (Consettur)",
      "Asesoria y Guia Privado"
    ],
    notIncludes: ["Alimentación", "Propinas para el guia", "Gastos personales"],
    itinerary: [
      {
        day: "Día 1",
        title: "Maravilla del Mundo: Machu Picchu",
        content: "Muy temprano nos trasladaremos a Ollantaytambo para dirigirnos en tren a Aguas Calientes. Subiremos en bus a la cima para realizar una visita guiada a la ciudadela por 2 horas. Observaremos el templo del sol, intihuatana, entre otros. Tendremos tiempo libre. Almuerzo sugerido en Aguas Calientes y retorno en tren."
      }
    ],
    packages: [
      {
        name: "Full day Machupicchu",
        price: 255,
        description: "Deposit: $100"
      }
    ]
  },
  {
    id: "laguna-humantay",
    title: "Full day Laguna Humantay",
    category: "Full Day",
    location: "Soraypampa",
    duration: "1 day",
    price: 43,
    difficulty: "Desafiante",
    image: imgHumantay,
    description: "Un Paraíso Escondido en los Andes. Aguas turquesas y picos nevados.",
    descriptionDetailed: [
      "Embárcate en una aventura de un día completo hacia la impresionante Laguna de Humantay, ubicada en las alturas de los Andes peruanos. Este viaje te llevará por paisajes espectaculares, desde valles verdes hasta montañas nevadas, mientras recorres uno de los senderos más bellos de la región de Cusco.",
      "Al llegar a la laguna, serás recibido por sus aguas turquesas, rodeadas de picos majestuosos, creando un ambiente de paz y majestuosidad.",
      "Además de disfrutar de la belleza natural, este trekking es ideal para los amantes del senderismo y quienes buscan un desafío físico en altitud."
    ],
    includes: [
      "Movilidad: Cusco - Soraypampa - Cusco",
      "Alimentación: Desayuno y Almuerzo",
      "Guia: Cultural y de Caminata",
      "Entrada: Laguna Humantay"
    ],
    notIncludes: ["Propinas", "Seguro de Viaje"],
    itinerary: [
      {
        day: "Día 1",
        title: "La joya turquesa a 4200 mts",
        content: "Empezamos nuestro viaje 4:30 AM en dirección a Mollepata. Desayuno y continuamos a Soraypampa (3,900 m). Emprendemos la caminata hasta la laguna Humantay (4,200 m). Tras apreciar la laguna color turquesa, regresamos a Mollepata para el almuerzo y retorno al Cusco."
      }
    ],
    packages: [
      {
        name: "Full Day Laguna Humantay",
        price: 43,
        description: "Servicio grupal"
      }
    ]
  },
  {
    id: "paracas-ica-huacachina",
    title: "Full Day Paracas & Ica con almuerzo",
    category: "Full Day",
    location: "Ica & Paracas",
    duration: "1 day",
    price: 68,
    difficulty: "Fácil",
    image: imgParacas,
    description: "Aventura y Naturaleza: Islas Ballestas y las enormes dunas del Oasis de Huacachina.",
    descriptionDetailed: [
      "Descubre dos joyas del sur peruano en un día lleno de aventura y paisajes impresionantes.",
      "Inicia tu recorrido visitando la Reserva Nacional de Paracas, donde podrás maravillarte con la biodiversidad de las Islas Ballestas, hogar de leones marinos, pingüinos de Humboldt y una gran variedad de aves marinas.",
      "Luego, dirígete hacia Ica para disfrutar de una emocionante experiencia en las dunas del Desierto de Huacachina. Vive la adrenalina a bordo de los buggies y prueba tus habilidades haciendo sandboarding en las impresionantes dunas.",
      "Para cerrar el día, degusta los mejores vinos y piscos en una bodega local, aprendiendo sobre el proceso."
    ],
    includes: [
      "Movilidad: Lima - Paracas - Ica - Lima desde su hotel (hoteles en Miraflores)",
      "Guia de Turismo",
      "Visita Islas Ballestas y Huacachina",
      "Degustación: Visita a Bodega Nietto, desgutación de vinos y piscos",
      "Buggies: Paseo en Tubulares y practica de sandboarding",
      "Alimentacion: Almuerzo"
    ],
    notIncludes: ["Gastos extras no especificados"],
    itinerary: [
      {
        day: "AM",
        title: "Balneario de Paracas e Islas Ballestas",
        content: "Visitaremos Paracas y nos trasladaremos en modernos deslizadores hacia las Islas Ballestas. Observaremos El Candelabro y rodearemos las islas para ver lobos marinos y pingüinos. También visitaremos el Boulevard y la Feria Artesanal."
      },
      {
        day: "PM",
        title: "Oasis Huacachina y Degustación Ica",
        content: "Nos dirigiremos a Ica. Visitaremos la Bodega Nietto donde un experto mostrará el proceso del Pisco. Luego seremos invitados a catar. Posteriormente, pasearemos al Oasis de Huacachina para la experiencia en Buggies en las dunas y sandboarding."
      }
    ],
    packages: [
      {
        name: "FULL DAY PARACAS & ICA",
        price: 68,
        description: "Servicio Grupal"
      }
    ]
  }
];
