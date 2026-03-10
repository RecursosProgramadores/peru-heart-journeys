import { Tour } from "../../types/tour";

export const cuscoTours: Tour[] = [
    {
        slug: "cusco-machupicchu-3d-2n",
        category: "cusco",
        title: "CUSCO - MACHUPICCHU 3D-2N: Esencial Inca",
        shortTitle: "CUSCO - MACHUPICCHU 3D-2N",
        duration: "3 Días / 2 Noches",
        price: "452",
        difficulty: "Moderada",
        img: "/assets/act-machu-picchu.jpg",
        alt: "Machu Picchu vista clásica",
        excerpt: "La forma más eficiente y completa de conocer la maravilla del mundo: Machu Picchu.",
        description: [
            "Descubre la majestuosidad de la ciudadela inca de Machu Picchu en un viaje de 3 días diseñado para aprovechar cada momento.",
            "Desde tu llegada a la capital histórica de Cusco hasta el asombro que genera una de las 7 Maravillas del Mundo Moderno, este paquete incluye todo lo necesario para una experiencia sin preocupaciones."
        ],
        highlights: ["Machu Picchu Full Day", "Tren Turístico", "Cusco Colonial", "Almuerzo en Aguas Calientes"],
        itinerary: [
            { day: 1, title: "Recepción y Traslado", content: "Recepción en el aeropuerto de Cusco y traslado privado a su hotel. Tiempo libre para aclimatación y descanso." },
            { day: 2, title: "Full Day Machu Picchu", content: "Viaje en tren hacia Aguas Calientes. Ascenso en bus a la ciudadela para una visita guiada inolvidable. Almuerzo buffet incluido. Retorno a Cusco por la tarde." },
            { day: 3, title: "Tiempo Libre y Traslado", content: "Disfrute de la mañana libre en el Cusco. A la hora indicada, traslado al aeropuerto para su vuelo de salida." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto",
            "02 noches de alojamiento con desayunos",
            "Full Day MachuPicchu con almuerzo (Entrada, Tren Turístico, Bus)",
            "Tarjeta de Asistencia",
            "Guía para la visita"
        ],
        notIncludes: ["Vuelos internos", "Cenas", "Propinas"],
        rates: [
            { hotel: "Polo Corporativo Infancia", single: "452", doble: "415", triple: "403" },
            { hotel: "Ankawa Boutique", single: "459", doble: "424", triple: "408" },
            { hotel: "Montes Pardo", single: "479", doble: "446", triple: "413" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas)", single: "462", doble: "420", triple: "414" },
            { hotel: "Montes Cabracancha", single: "490", doble: "442", triple: "418" },
            { hotel: "Montes San Blas", single: "497", doble: "454", triple: "425" },
            { hotel: "Puma Hotel", single: "483", doble: "427", triple: "416" },
            { hotel: "Inkarri Cusco", single: "490", doble: "434", triple: "418" },
            { hotel: "Inkarri Regocijo Plaza", single: "495", doble: "441", triple: "427" },
            { hotel: "Yawar Inka", single: "513", doble: "440", triple: "427" },
            { hotel: "Anahuarque Hotel", single: "514", doble: "454", triple: "442" },
            { hotel: "Royal Inn Cusco", single: "513", doble: "446", triple: "427" },
            { hotel: "HSA Internacional", single: "525", doble: "440", triple: "427" },
            { hotel: "Xima Cusco", single: "551", doble: "453", triple: "451" },
            { hotel: "HSA Dorado", single: "552", doble: "454", triple: "436", isRecommended: true },
            { hotel: "HSA Plaza", single: "566", doble: "461", triple: "441" },
            { hotel: "Novotel Cusco", single: "688", doble: "532", triple: "-" }
        ]
    },
    {
        slug: "cusco-cultural-trekking-5d-4n",
        category: "cusco",
        title: "CUSCO – CULTURAL & TREKKING 5D-4N: Aventura Total",
        shortTitle: "CUSCO – CULTURAL & TREKKING 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "584",
        difficulty: "Exigente",
        img: "/assets/act-laguna-humantay.jpg",
        alt: "Laguna Humantay turquesa",
        excerpt: "La combinación perfecta de cultura inca y retadores trekkings a lagunas y montañas de colores.",
        description: [
            "Este paquete es para los amantes de la naturaleza y el senderismo. Combina la visita a Machu Picchu con los dos trekkings de un día más populares del Cusco.",
            "Visitarás la Laguna Humantay con sus aguas turquesas a los pies de un glaciar y la famosa Montaña de 7 Colores (Vinicunca)."
        ],
        highlights: ["Machu Picchu", "Laguna Humantay", "Montaña 7 Colores", "Aventura en los Andes"],
        itinerary: [
            { day: 1, title: "Recepción y Traslado", content: "Bienvenida en el aeropuerto y traslado a su hotel." },
            { day: 2, title: "Full Day Machu Picchu", content: "Visita guiada a la maravilla del mundo con almuerzo incluido." },
            { day: 3, title: "Full Day Laguna Humantay", content: "Caminata hacia la impresionante laguna a 4,200 msnm. Incluye transporte y alimentación." },
            { day: 4, title: "Full Day Montaña 7 Colores", content: "Trekking hacia Vinicunca para ver los colores naturales de la tierra. Desayuno y almuerzo incluidos." },
            { day: 5, title: "Traslado al aeropuerto", content: "Mañana libre y traslado final." }
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
            { hotel: "Ankawa Boutique", single: "598", doble: "540", triple: "511" },
            { hotel: "Montes Pardo", single: "638", doble: "583", triple: "520" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas)", single: "606", doble: "532", triple: "522" },
            { hotel: "Montes Cabracancha", single: "661", doble: "575", triple: "531" },
            { hotel: "Montes San Blas", single: "676", doble: "599", triple: "545" },
            { hotel: "Puma Hotel", single: "648", doble: "546", triple: "525" },
            { hotel: "Inkarri Cusco", single: "661", doble: "559", triple: "530" },
            { hotel: "Inkarri Regocijo Plaza", single: "671", doble: "573", triple: "548" },
            { hotel: "Yawar Inka", single: "708", doble: "571", triple: "548" },
            { hotel: "Anahuarque Hotel", single: "710", doble: "599", triple: "579" },
            { hotel: "Royal Inn Cusco", single: "708", doble: "583", triple: "548" },
            { hotel: "HSA Internacional", single: "731", doble: "571", triple: "548" },
            { hotel: "Xima Cusco", single: "784", doble: "598", triple: "595" },
            { hotel: "HSA Dorado", single: "786", doble: "599", triple: "567", isRecommended: true },
            { hotel: "HSA Plaza", single: "814", doble: "613", triple: "576" },
            { hotel: "Novotel Cusco", single: "1057", doble: "756", triple: "-" }
        ]
    },
    {
        slug: "cusco-machupicchu-trekking-4d-3n",
        category: "cusco",
        title: "CUSCO – MACHUPICCHU & TREKKING 4D-3N: Cumbres y Cultura",
        shortTitle: "CUSCO – MACHUPICCHU & TREKKING 4D-3N",
        duration: "4 Días / 3 Noches",
        price: "519",
        difficulty: "Exigente",
        img: "/assets/act-montana-colores.jpg",
        alt: "Montaña de 7 colores paisaje",
        excerpt: "Machu Picchu y Vinicunca en 4 días intensos llenos de paisajes andinos únicos.",
        description: [
            "Optimiza tu tiempo conociendo los dos destinos más fotografiados del Perú.",
            "Este viaje requiere una buena condición física para el trekking a la Montaña de 7 Colores, pero recompensa con vistas panorámicas difíciles de encontrar en otro lugar del mundo."
        ],
        highlights: ["Santuario de Machu Picchu", "Trekking Vinicunca", "Alta Montaña", "Gastronomía Cusqueña"],
        itinerary: [
            { day: 1, title: "Recepción", content: "Llegada a Cusco, traslado al hotel y descanso." },
            { day: 2, title: "Full Day Machu Picchu", content: "Día completo en la ciudadela sagrada con guía local y almuerzo." },
            { day: 3, title: "Full Day Montaña 7 Colores", content: "Caminata de madrugada hacia la cumbre de Vinicunca." },
            { day: 4, title: "Tiempo libre y Traslado", content: "Últimas compras y traslado al aeropuerto." }
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
            { hotel: "Ankawa Boutique", single: "529", doble: "483", triple: "461" },
            { hotel: "Montes Pardo", single: "559", doble: "515", triple: "468" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas)", single: "535", doble: "477", triple: "469" },
            { hotel: "Montes Cabracancha", single: "577", doble: "509", triple: "475" },
            { hotel: "Montes San Blas", single: "588", doble: "527", triple: "486" },
            { hotel: "Puma Hotel", single: "566", doble: "487", triple: "471" },
            { hotel: "Inkarri Cusco", single: "577", doble: "498", triple: "475" },
            { hotel: "Inkarri Regocijo Plaza", single: "584", doble: "508", triple: "489" },
            { hotel: "Yawar Inka", single: "611", doble: "506", triple: "489" },
            { hotel: "Anahuarque Hotel", single: "613", doble: "527", triple: "511" },
            { hotel: "Royal Inn Cusco", single: "611", doble: "515", triple: "489" },
            { hotel: "HSA Internacional", single: "629", doble: "506", triple: "489" },
            { hotel: "Xima Cusco", single: "669", doble: "526", triple: "524" },
            { hotel: "HSA Dorado", single: "670", doble: "527", triple: "503", isRecommended: true },
            { hotel: "HSA Plaza", single: "691", doble: "538", triple: "510" },
            { hotel: "Novotel Cusco", single: "874", doble: "645", triple: "-" }
        ]
    },
    {
        slug: "cusco-valle-sagrado-trekking-5d-4n",
        category: "cusco",
        title: "CUSCO – VALLE SAGRADO & TREKKING 5D-4N: Un Recorrido Completo",
        shortTitle: "CUSCO – VALLE SAGRADO & TREKKING 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "586",
        difficulty: "Moderada",
        img: "/assets/act-valle-sagrado.jpg",
        alt: "Valle Sagrado de los Incas",
        excerpt: "Historia, arqueología y aventura. El tour más equilibrado para conocer Cusco a fondo.",
        description: [
            "Descubre por qué el Valle Sagrado era tan importante para los Incas antes de subir a Machu Picchu.",
            "Finalizarás tu experiencia con un reto físico hacia la Montaña de 7 Colores."
        ],
        highlights: ["Valle Sagrado de los Incas", "Machu Picchu", "Vinicunca", "Mercados Artesanales"],
        itinerary: [
            { day: 1, title: "Recepción", content: "Traslado del aeropuerto al hotel seleccionado." },
            { day: 2, title: "Full Day Valle Sagrado", content: "Visita a Chincheros, Maras, Moray, Ollantaytambo y Pisac con almuerzo buffet." },
            { day: 3, title: "Full Day Machu Picchu", content: "Visita guiada a la ciudadela y tiempo para disfrutar del paisaje." },
            { day: 4, title: "Full Day Montaña 7 Colores", content: "Caminata de alta montaña con desayuno y almuerzo." },
            { day: 5, title: "Traslado", content: "Traslado final al aeropuerto." }
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
            { hotel: "Ankawa Boutique", single: "600", doble: "542", triple: "513" },
            { hotel: "Montes Pardo", single: "640", doble: "584", triple: "522" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas)", single: "608", doble: "534", triple: "524" },
            { hotel: "Montes Cabracancha", single: "663", doble: "577", triple: "532" },
            { hotel: "Montes San Blas", single: "678", doble: "601", triple: "547" },
            { hotel: "Puma Hotel", single: "649", doble: "547", triple: "527" },
            { hotel: "Inkarri Cusco", single: "663", doble: "561", triple: "532" },
            { hotel: "Inkarri Regocijo Plaza", single: "673", doble: "575", triple: "550" },
            { hotel: "Yawar Inka", single: "710", doble: "573", triple: "550" },
            { hotel: "Anahuarque Hotel", single: "712", doble: "601", triple: "580" },
            { hotel: "Royal Inn Cusco", single: "710", doble: "584", triple: "550" },
            { hotel: "HSA Internacional", single: "733", doble: "573", triple: "550" },
            { hotel: "Xima Cusco", single: "786", doble: "599", triple: "597" },
            { hotel: "HSA Dorado", single: "788", doble: "601", triple: "569", isRecommended: true },
            { hotel: "HSA Plaza", single: "816", doble: "614", triple: "578" },
            { hotel: "Novotel Cusco", single: "1059", doble: "757", triple: "-" }
        ]
    },
    {
        slug: "cusco-colorido-7d-6n",
        category: "cusco",
        title: "CUSCO COLORIDO 7D-6N: Lo Mejor del Cusco en una Semana",
        shortTitle: "CUSCO COLORIDO 7D-6N",
        duration: "7 Días / 6 Noches",
        price: "702",
        difficulty: "Moderada",
        img: "/assets/tour-cusco.jpg",
        alt: "Cusco colorido",
        excerpt: "Una semana inolvidable explorando cada rincón del Cusco, desde su centro histórico hasta sus cumbres más altas.",
        description: [
            "Tómate el tiempo de conocer Cusco como se debe. Este paquete de 7 días te permite aclimatarte bien para los retos físicos finales.",
            "Incluye visitas a sitios arqueológicos, el Valle Sagrado, Machu Picchu y las dos joyas naturales: Humantay y Vinicunca."
        ],
        highlights: ["Inmersión Total", "City Tour Cusco", "Aclimatación perfecta", "Doble Trekking"],
        itinerary: [
            { day: 1, title: "Recepción", content: "Asistencia a su llegada y traslado al hotel. Tarde libre." },
            { day: 2, title: "City Tour Cusco", content: "Visita a Sacsayhuaman, Qenqo, Puka Pukara y Tambomachay." },
            { day: 3, title: "Full Day Valle Sagrado Completo", content: "Chincheros, Maras, Moray, Ollantaytambo y Pisac." },
            { day: 4, title: "Full Day Machu Picchu", content: "Día completo en el santuario histórico." },
            { day: 5, title: "Full Day Montaña 7 Colores", content: "Trekking a la montaña de colores." },
            { day: 6, title: "Full Day Laguna Humantay", content: "Trekking a la laguna turquesa." },
            { day: 7, title: "Traslado", content: "Traslado al aeropuerto." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado",
            "06 noches de alojamiento con desayunos",
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
            { hotel: "Ankawa Boutique", single: "723", doble: "639", triple: "598" },
            { hotel: "Montes Pardo", single: "782", doble: "704", triple: "612" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas)", single: "734", doble: "627", triple: "615" },
            { hotel: "Montes Cabracancha", single: "817", doble: "692", triple: "627" },
            { hotel: "Montes San Blas", single: "839", doble: "728", triple: "648" },
            { hotel: "Puma Hotel", single: "796", doble: "648", triple: "619" },
            { hotel: "Inkarri Cusco", single: "817", doble: "669", triple: "626" },
            { hotel: "Inkarri Regocijo Plaza", single: "831", doble: "690", triple: "654" },
            { hotel: "Yawar Inka", single: "886", doble: "686", triple: "654" },
            { hotel: "Anahuarque Hotel", single: "890", doble: "728", triple: "699" },
            { hotel: "Royal Inn Cusco", single: "886", doble: "704", triple: "654" },
            { hotel: "HSA Internacional", single: "921", doble: "686", triple: "654" },
            { hotel: "Xima Cusco", single: "1001", doble: "726", triple: "725" },
            { hotel: "HSA Dorado", single: "1004", doble: "728", triple: "682", isRecommended: true },
            { hotel: "HSA Plaza", single: "1046", doble: "749", triple: "696" },
            { hotel: "Novotel Cusco", single: "1411", doble: "963", triple: "-" }
        ]
    },
    {
        slug: "cusco-completo-8d-7n",
        category: "cusco",
        title: "CUSCO COMPLETO 8D-7N: Gran Tour del Sur",
        shortTitle: "CUSCO COMPLETO 8D-7N",
        duration: "8 Días / 7 Noches",
        price: "767",
        difficulty: "Moderada",
        img: "/assets/act-valle-sur.jpg",
        alt: "Valle Sur Cusco",
        excerpt: "La experiencia arqueológica y paisajística más extensa que puedes encontrar en Cusco.",
        description: [
            "Ocho días de pura cultura andina. Este paquete añade la Ruta del Valle Sur, donde se visita Tipón, Pikillacta y la famosa Capilla Sixtina de América en Andahuaylillas.",
            "Si quieres decirlo con propiedad: 'Conozco Cusco', este es tu tour."
        ],
        highlights: ["Valle Sur", "Machu Picchu", "Trekkings icónicos", "Inmersión Arqueológica"],
        itinerary: [
            { day: 1, title: "Recepción", content: "Recepción en el aeropuerto y traslado al hotel." },
            { day: 2, title: "City Tour Cusco", content: "Exploración de la antigua capital del imperio." },
            { day: 3, title: "Full Day Valle Sagrado Completo", content: "El corazón agrícola de los incas." },
            { day: 4, title: "Full Day Machu Picchu", content: "Encuentro con la maravilla." },
            { day: 5, title: "Full Day Montaña 7 Colores", content: "Paisajes de otro planeta." },
            { day: 6, title: "Full Day Laguna Humantay", content: "Reto físico en las bases del Salkantay." },
            { day: 7, title: "HD Ruta Valle Sur", content: "Tipon, Pikillacta y Andahuaylillas." },
            { day: 8, title: "Traslado", content: "Traslado final al aeropuerto." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Cusco",
            "07 noches de alojamiento con desayunos",
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
            { hotel: "Ankawa Boutique", single: "792", doble: "696", triple: "648" },
            { hotel: "Montes Pardo", single: "861", doble: "771", triple: "664" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas)", single: "805", doble: "682", triple: "668" },
            { hotel: "Montes Cabracancha", single: "902", doble: "757", triple: "682" },
            { hotel: "Montes San Blas", single: "927", doble: "799", triple: "707" },
            { hotel: "Puma Hotel", single: "878", doble: "706", triple: "673" },
            { hotel: "Inkarri Cusco", single: "902", doble: "730", triple: "681" },
            { hotel: "Inkarri Regocijo Plaza", single: "918", doble: "755", triple: "714" },
            { hotel: "Yawar Inka", single: "983", doble: "751", triple: "714" },
            { hotel: "Anahuarque Hotel", single: "987", doble: "799", triple: "766" },
            { hotel: "Royal Inn Cusco", single: "983", doble: "771", triple: "714" },
            { hotel: "HSA Internacional", single: "1023", doble: "751", triple: "714" },
            { hotel: "Xima Cusco", single: "1116", doble: "797", triple: "796" },
            { hotel: "HSA Dorado", single: "1120", doble: "799", triple: "746" },
            { hotel: "HSA Plaza", single: "1169", doble: "823", triple: "762" },
            { hotel: "Novotel Cusco", single: "1595", doble: "1074", triple: "-" }
        ]
    },
    {
        slug: "cusco-inolvidable-6d-5n",
        category: "cusco",
        title: "CUSCO INOLVIDABLE 6D-5N: La Experiencia Perfecta",
        shortTitle: "CUSCO INOLVIDABLE 6D-5N",
        duration: "6 Días / 5 Noches",
        price: "636",
        difficulty: "Moderada",
        img: "/assets/tour-sacred-valley.jpg",
        alt: "Cusco inolvidable",
        excerpt: "Seis días diseñados para dejar una huella imborrable en el corazón del viajero.",
        description: [
            "Este tour te permite elegir tu aventura final: ¿Prefieres la laguna turquesa o la montaña de 7 colores?",
            "Ideal para viajeros que buscan una experiencia completa pero flexible."
        ],
        highlights: ["City Tour", "Valle Sagrado", "Machu Picchu", "Aventura personalizable"],
        itinerary: [
            { day: 1, title: "Recepción", content: "Asistencia a su llegada a Cusco, traslado al hotel." },
            { day: 2, title: "City Tour Cusco", content: "Visita a los principales sitios arqueológicos periféricos." },
            { day: 3, title: "Full Day Valle Sagrado Completo", content: "Artesanías y fortalezas incas." },
            { day: 4, title: "Full Day Machu Picchu", content: "Visita guiada a la ciudadela." },
            { day: 5, title: "Trekking a Elegir", content: "Elige entre Montaña 7 Colores o Laguna Humantay según tu energía y preferencia." },
            { day: 6, title: "Traslado", content: "Traslado final al aeropuerto." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Cusco",
            "05 noches de alojamiento con desayunos",
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
            { hotel: "Ankawa Boutique", single: "654", doble: "583", triple: "547" },
            { hotel: "Montes Pardo", single: "704", doble: "636", triple: "559" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas)", single: "663", doble: "573", triple: "562" },
            { hotel: "Montes Cabracancha", single: "732", doble: "627", triple: "572" },
            { hotel: "Montes San Blas", single: "751", doble: "656", triple: "590" },
            { hotel: "Puma Hotel", single: "715", doble: "590", triple: "566" },
            { hotel: "Inkarri Cusco", single: "732", doble: "607", triple: "571" },
            { hotel: "Inkarri Regocijo Plaza", single: "744", doble: "625", triple: "594" },
            { hotel: "Yawar Inka", single: "790", doble: "622", triple: "594" },
            { hotel: "Anahuarque Hotel", single: "793", doble: "656", triple: "632" },
            { hotel: "Royal Inn Cusco", single: "790", doble: "636", triple: "594" },
            { hotel: "HSA Internacional", single: "819", doble: "622", triple: "594" },
            { hotel: "Xima Cusco", single: "885", doble: "655", triple: "653" },
            { hotel: "HSA Dorado", single: "888", doble: "656", triple: "618", isRecommended: true },
            { hotel: "HSA Plaza", single: "923", doble: "674", triple: "629" },
            { hotel: "Novotel Cusco", single: "1227", doble: "852", triple: "-" }
        ]
    },
    {
        slug: "cusco-tradicional-5d-4n",
        category: "cusco",
        title: "CUSCO TRADICIONAL 5D-4N: Lo Clásico Nunca Falla",
        shortTitle: "CUSCO TRADICIONAL 5D-4N",
        duration: "5 Días / 4 Noches",
        price: "567",
        difficulty: "Fácil",
        img: "/assets/tour-adventure.jpg",
        alt: "Cusco tradicional",
        excerpt: "Diseñado para quienes buscan conocer lo fundamental de la cultura inca sin recorrer largas distancias a pie.",
        description: [
            "Este tour omite los trekkings de alta montaña para centrarse plenamente en la arqueología y la historia.",
            "Ideal para adultos mayores, familias con niños o cualquier persona que prefiera un ritmo más tranquilo."
        ],
        highlights: ["City Tour arqueológico", "Valle Sagrado de los Incas", "Machu Picchu", "Comodidad y Cultura"],
        itinerary: [
            { day: 1, title: "Recepción", content: "Llegada a Cusco, traslado y descanso." },
            { day: 2, title: "City Tour Cusco", content: "Visita a la catedral (opcional) y sitios arqueológicos incas." },
            { day: 3, title: "Full Day Valle Sagrado Completo", content: "Excursión por el río Vilcanota conociendo los pueblos tradicionales." },
            { day: 4, title: "Full Day Machu Picchu", content: "Día completo en la cima del mundo inca." },
            { day: 5, title: "Traslado", content: "Traslado al aeropuerto." }
        ],
        includes: [
            "Traslados aeropuerto/hotel/aeropuerto en privado en Cusco",
            "04 noches de alojamiento con desayunos",
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
            { hotel: "Ankawa Boutique", single: "581", doble: "522", triple: "494" },
            { hotel: "Montes Pardo", single: "621", doble: "565", triple: "503" },
            { hotel: "Cusco Plaza (Saphi/Nazarenas)", single: "589", doble: "514", triple: "505" },
            { hotel: "Montes Cabracancha", single: "644", doble: "557", triple: "513" },
            { hotel: "Montes San Blas", single: "659", doble: "581", triple: "527" },
            { hotel: "Puma Hotel", single: "630", doble: "528", triple: "508" },
            { hotel: "Inkarri Cusco", single: "644", doble: "542", triple: "513" },
            { hotel: "Inkarri Regocijo Plaza", single: "653", doble: "556", triple: "531" },
            { hotel: "Yawar Inka", single: "690", doble: "554", triple: "531" },
            { hotel: "Anahuarque Hotel", single: "693", doble: "581", triple: "561" },
            { hotel: "Royal Inn Cusco", single: "690", doble: "565", triple: "531" },
            { hotel: "HSA Internacional", single: "713", doble: "554", triple: "531" },
            { hotel: "Xima Cusco", single: "767", doble: "580", triple: "578" },
            { hotel: "HSA Dorado", single: "769", doble: "581", triple: "550", isRecommended: true },
            { hotel: "HSA Plaza", single: "797", doble: "595", triple: "559" },
            { hotel: "Novotel Cusco", single: "1040", doble: "738", triple: "-" }
        ]
    }
];
