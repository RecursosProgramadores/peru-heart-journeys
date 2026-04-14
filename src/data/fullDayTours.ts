
export interface FullDayTour {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  itineraryUrl?: string;
  packages?: {
    name: string;
    price: number;
    description: string;
    availability?: string;
  }[];
}

export const fullDayTours: FullDayTour[] = [
  {
    id: "montana-7-colores",
    title: "Montaña 7 Colores",
    category: "Full Day",
    location: "Cusco",
    duration: "Full Day",
    price: 43,
    image: "/assets/act-montana-colores.jpg",
    description: "Servicio Compartido. Disfruta de la belleza natural de Vinicunca.",
    packages: [
      {
        name: "FULL DAY MONTAÑA 7 COLORES (Serv Grupal)",
        price: 43,
        description: "Servicio Compartido",
        availability: "Disponible todos los días"
      }
    ]
  },
  {
    id: "paracas-ica-huacachina",
    title: "Paracas, Ica & Huacachina",
    category: "Full Day",
    location: "Ica",
    duration: "Full Day",
    price: 68,
    image: "/assets/act-paracas-ica.jpg",
    description: "Full Day Paracas & Ica con almuerzo.",
    packages: [
      {
        name: "FULL DAY PARACAS & ICA (Serv Grupal)",
        price: 68,
        description: "Disponible hasta 7 días antes de la salida",
        availability: "Salidas diarias"
      }
    ]
  },
  {
    id: "city-tour-panoramico",
    title: "City Tour Cusco Panorámico",
    category: "3 horas",
    location: "Cusco",
    duration: "3 horas",
    price: 27,
    image: "/assets/act-city-tour-cusco.jpg",
    description: "Recorrido en bus panorámico por la ciudad imperial.",
    packages: [
      {
        name: "Bus Panoramico Cusco MAÑANA",
        price: 27,
        description: "ENCUENTRO / SALIDA: 09:45 / 10:00 AM. RETORNO: 12:30. Duración 2h 30min."
      },
      {
        name: "Bus Panoramico Cusco MEDIODIA",
        price: 27,
        description: "ENCUENTRO / SALIDA: 12:45 / 13:00 PM. RETORNO: 15:30. Duración 2h 30min."
      },
      {
        name: "Bus Panoramico Cusco TARDE",
        price: 27,
        description: "ENCUENTRO / SALIDA: 15:45 / 16:00 PM. RETORNO: 18:30. Duración 2h 30min."
      }
    ]
  },
  {
    id: "laguna-humantay",
    title: "Laguna Humantay",
    category: "Full Day",
    location: "Cusco",
    duration: "Full Day",
    price: 43,
    image: "/assets/act-laguna-humantay.jpg",
    description: "Servicio grupal a la impresionante laguna turquesa.",
    packages: [
      {
        name: "Full Day Laguna Humantay",
        price: 43,
        description: "Servicio grupal",
        availability: "Disponible hasta 4 días antes de la salida"
      }
    ]
  },
  {
    id: "city-tour-qoricancha",
    title: "City Tour & Qoricancha",
    category: "Half Day",
    location: "Cusco",
    duration: "Half Day",
    price: 25,
    image: "/assets/act-city-tour-cusco.jpg",
    description: "Visita guiada por el centro histórico y el Templo del Sol.",
    packages: [
      {
        name: "City Tour & Qoricancha",
        price: 25,
        description: "Servicio grupal",
        availability: "Disponible hasta 2 días antes de la salida"
      }
    ]
  },
  {
    id: "valle-sagrado-completo",
    title: "Valle Sagrado Completo",
    category: "Full Day",
    location: "Cusco",
    duration: "Full Day",
    price: 45,
    image: "/assets/act-valle-sagrado.jpg",
    description: "Recorrido completo por Pisac, Ollantaytambo y Chinchero.",
    packages: [
      {
        name: "Full Day Valle Sagrado Completo",
        price: 45,
        description: "Servicio grupal",
        availability: "Disponible hasta 2 días antes de la salida"
      }
    ]
  },
  {
    id: "machu-picchu-full-day",
    title: "Machu Picchu",
    category: "Full Day",
    location: "Cusco",
    duration: "Full Day",
    price: 255,
    image: "/assets/act-machu-picchu.jpg",
    description: "La maravilla del mundo en un solo día.",
    packages: [
      {
        name: "Full day Machupicchu",
        price: 255,
        description: "Deposito: $100. Servicio completo con tren y guía."
      }
    ]
  },
  {
    id: "valle-sur",
    title: "Valle Sur",
    category: "Half Day",
    location: "Cusco",
    duration: "Half Day",
    price: 34,
    image: "/assets/act-valle-sur.jpg",
    description: "Historia y cultura en Tipón, Pikillacta y Andahuaylillas.",
    packages: [
      {
        name: "Valle Sur: Historia y Cultura",
        price: 34,
        description: "Servicio grupal",
        availability: "Disponible hasta 4 días antes de la salida"
      }
    ]
  },
  {
    id: "morada-de-los-dioses",
    title: "Morada de los Dioses",
    category: "3 horas",
    location: "Cusco",
    duration: "3 horas",
    price: 30,
    image: "/assets/tour-cusco.jpg",
    description: "Esculturas gigantes de piedra en los alrededores de Cusco.",
    packages: [
      {
        name: "Morada de los dioses AM",
        price: 30,
        description: "Servicio grupal",
        availability: "Disponible hasta 2 días antes de la salida"
      }
    ]
  }
];
