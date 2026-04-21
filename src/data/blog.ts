import imgMachuPicchu from "@/assets/hero-machu-picchu.jpg";
import imgCusco from "@/assets/tour-cusco.jpg";
import imgAndes from "@/assets/dest-andes.jpg";
import imgHumantay from "@/assets/act-laguna-humantay.jpg";
import imgValleSagrado from "@/assets/act-valle-sagrado.jpg";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
  content: {
    type: 'p' | 'h2' | 'h3' | 'ul' | 'quote' | 'highlight';
    text?: string;
    items?: string[];
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "como-viajar-a-machu-picchu",
    slug: "como-viajar-a-machu-picchu",
    title: "Cómo viajar a Machu Picchu en 2026: guía completa paso a paso sin errores",
    excerpt: "Paso a paso para planificar tu visita a la Ciudadela Inca, desde la compra de boletos hasta cómo llegar en tren desde Cusco.",
    category: "Guías de Viaje",
    readTime: "8 min",
    image: imgMachuPicchu,
    featured: true,
    content: [
      { type: 'h2', text: 'Introducción' },
      { type: 'p', text: 'Viajar a Machu Picchu en 2026 es una experiencia única, pero requiere planificación estratégica. Entre boletos limitados, rutas diversas y logística compleja, muchos viajeros cometen errores que afectan su experiencia.' },
      { type: 'p', text: 'En esta guía completa aprenderás cómo organizar tu viaje a Machu Picchu paso a paso, con información actualizada, consejos expertos y recomendaciones prácticas.' },
      
      { type: 'h2', text: 'Cómo viajar a Machu Picchu (respuesta rápida)' },
      { type: 'p', text: 'La mejor forma de viajar a Machu Picchu es tomar un tren desde Cusco u Ollantaytambo hasta Aguas Calientes y luego un bus hacia la ciudadela. También existen opciones como trekking o la ruta por Hidroeléctrica.' },
      
      { type: 'h2', text: 'Cómo llegar a Machu Picchu desde Cusco' },
      { type: 'p', text: 'No existe acceso directo por carretera, por lo que debes combinar transporte.' },
      
      { type: 'h3', text: '1. Tren + bus (la opción más recomendada)' },
      { type: 'p', text: 'Cusco → Ollantaytambo → Aguas Calientes → Bus a Machu Picchu' },
      { type: 'ul', items: ['Más rápido', 'Más cómodo', 'Ideal para la mayoría de viajeros'] },
      
      { type: 'h3', text: '2. Camino Inca (experiencia premium)' },
      { type: 'p', text: 'Duración: 4 días | Requiere reserva anticipada' },
      { type: 'ul', items: ['Experiencia cultural única', 'Entrada directa a Machu Picchu'] },
      
      { type: 'h3', text: '3. Salkantay Trek' },
      { type: 'p', text: 'Duración: 4 a 5 días | Mayor exigencia física' },
      { type: 'ul', items: ['Paisajes impresionantes', 'Menos restricciones'] },
      
      { type: 'h3', text: '4. Ruta Hidroeléctrica (opción económica)' },
      { type: 'ul', items: ['Más barato', 'Requiere más tiempo'] },
      
      { type: 'highlight', text: 'Si quieres evitar errores logísticos y asegurar disponibilidad, Inkateam Travel puede ayudarte a organizar toda la experiencia.' },
      
      { type: 'h2', text: 'Boletos Machu Picchu 2026' },
      { type: 'p', text: 'Comprar tu entrada con anticipación es clave.' },
      { type: 'ul', items: ['Machu Picchu Solo', 'Machu Picchu + Huayna Picchu', 'Machu Picchu + Montaña'] },
      { type: 'h3', text: 'Recomendaciones' },
      { type: 'ul', items: ['Comprar en la web oficial', 'Reservar con 1–3 meses de anticipación', 'Elegir horarios tempranos'] },
      
      { type: 'h2', text: 'Datos clave para tu visita' },
      { type: 'ul', items: ['Altitud: 2,430 msnm', 'Clima: templado húmedo', 'Mejor época: abril a octubre', 'Dificultad: moderada'] },
      
      { type: 'h2', text: 'Mejor época para viajar a Machu Picchu' },
      { type: 'p', text: 'La mejor época es durante la temporada seca (abril a octubre), cuando hay menos lluvias y mejor visibilidad.' },
      
      { type: 'h2', text: 'Consejos expertos' },
      { type: 'ul', items: ['Aclimátate en Cusco antes', 'Viaja ligero', 'Llega temprano', 'Reserva todo con anticipación'] },
      
      { type: 'h2', text: 'Errores comunes' },
      { type: 'ul', items: ['Comprar boletos tarde', 'No aclimatarse', 'Subestimar tiempos', 'No planificar rutas'] },
      
      { type: 'h2', text: 'FAQs' },
      { type: 'h3', text: '¿Cuál es la mejor forma de ir a Machu Picchu?' },
      { type: 'p', text: 'El tren es la opción más rápida y segura.' },
      { type: 'h3', text: '¿Cuántos días necesito?' },
      { type: 'p', text: 'Entre 2 y 3 días.' },
      { type: 'h3', text: '¿Es mejor tour o por cuenta propia?' },
      { type: 'p', text: 'Un tour evita errores y optimiza tiempos.' },
      
      { type: 'h2', text: 'Conclusión' },
      { type: 'p', text: 'Machu Picchu es un destino que vale cada esfuerzo, pero la clave está en la planificación. Elegir bien la ruta, comprar boletos con anticipación y organizar el itinerario marcará la diferencia.' },
      { type: 'highlight', text: 'Inkateam Travel puede ayudarte a diseñar un viaje optimizado, sin complicaciones y adaptado a tu estilo.' }
    ]
  },
  {
    id: "dias-para-cusco",
    slug: "cuantos-dias-en-cusco",
    title: "¿Cuántos días necesitas para visitar Cusco? Guía completa 2026",
    excerpt: "Descubre el tiempo ideal para aclimatarte, recorrer la ciudad, visitar el Valle Sagrado y experimentar la magia inca sin apuros.",
    category: "Planificación",
    readTime: "5 min",
    image: imgCusco,
    featured: false,
    content: [
      { type: 'h2', text: 'Introducción' },
      { type: 'p', text: 'Cusco es mucho más que la puerta de entrada a Machu Picchu. Para disfrutarlo realmente, necesitas planificar bien tu tiempo.' },
      
      { type: 'h2', text: '¿Cuántos días se necesitan en Cusco? (respuesta rápida)' },
      { type: 'p', text: 'Lo ideal es pasar entre 4 y 5 días en Cusco para incluir aclimatación, Valle Sagrado y Machu Picchu sin prisas.' },
      
      { type: 'h2', text: 'Recomendación según tiempo' },
      { type: 'ul', items: ['3 días: básico', '4–5 días: ideal', '6–7 días: completo'] },
      
      { type: 'h2', text: 'Itinerario recomendado' },
      { type: 'ul', items: ['Día 1: Aclimatación + city tour', 'Día 2: Valle Sagrado', 'Día 3: Machu Picchu'] },
      
      { type: 'h2', text: 'Datos clave' },
      { type: 'ul', items: ['Altitud: 3,399 msnm', 'Clima: frío por las noches', 'Mejor época: mayo–septiembre', 'Dificultad: moderada'] },
      
      { type: 'h2', text: 'Consejo clave' },
      { type: 'p', text: 'No subestimes la aclimatación. Es fundamental para disfrutar el viaje.' },
      
      { type: 'h2', text: 'FAQs' },
      { type: 'h3', text: '¿Puedo ir en 2 días?' },
      { type: 'p', text: 'Sí, pero es muy limitado.' },
      
      { type: 'h2', text: 'Conclusión' },
      { type: 'p', text: 'Planificar bien tus días en Cusco mejora completamente tu experiencia.' },
      { type: 'highlight', text: 'Inkateam Travel puede optimizar tu itinerario según tu tiempo disponible.' }
    ]
  },
  {
    id: "mejor-epoca-peru",
    slug: "mejor-epoca-para-viajar-a-peru",
    title: "Mejor época para viajar a Perú: clima por regiones 2026",
    excerpt: "Analizamos el clima mes a mes. Ya sea que busques el sol en la costa o los cielos azules despejados para hacer trekking en los Andes.",
    category: "Consejos",
    readTime: "6 min",
    image: imgAndes,
    featured: false,
    content: [
      { type: 'h2', text: 'Introducción' },
      { type: 'p', text: 'Elegir cuándo viajar a Perú puede cambiar completamente tu experiencia.' },
      
      { type: 'h2', text: 'Mejor época para viajar a Perú (respuesta rápida)' },
      { type: 'p', text: 'La mejor época es de mayo a septiembre para visitar los Andes, incluyendo Cusco y Machu Picchu.' },
      
      { type: 'h2', text: 'Clima por regiones' },
      { type: 'h3', text: 'Costa' },
      { type: 'ul', items: ['Verano: sol', 'Invierno: nublado'] },
      { type: 'h3', text: 'Andes' },
      { type: 'ul', items: ['Seca: mayo–octubre', 'Lluvias: noviembre–abril'] },
      { type: 'h3', text: 'Amazonía' },
      { type: 'p', text: 'Calor todo el año' },
      
      { type: 'h2', text: 'Datos clave' },
      { type: 'ul', items: ['Altitud: variable', 'Clima: diverso', 'Dificultad: variable'] },
      
      { type: 'h2', text: 'FAQs' },
      { type: 'h3', text: '¿Cuál es el mejor mes?' },
      { type: 'p', text: 'Mayo y septiembre.' },
      
      { type: 'h2', text: 'Conclusión' },
      { type: 'p', text: 'Perú se puede visitar todo el año, pero elegir bien la temporada mejora tu experiencia.' },
      { type: 'highlight', text: 'Inkateam Travel adapta tu viaje según clima y temporada.' }
    ]
  },
  {
    id: "aclimatarse-altura",
    slug: "soroche-mal-de-altura",
    title: "Soroche en Perú: cómo prevenir el mal de altura",
    excerpt: "Remedios prácticos, desde el milenario mate de coca hasta los medicamentos recomendados, para que la altura no interrumpa tu aventura.",
    category: "Salud e Higiene",
    readTime: "4 min",
    image: imgHumantay,
    featured: false,
    content: [
      { type: 'h2', text: 'Introducción' },
      { type: 'p', text: 'El mal de altura es común en destinos como Cusco, pero se puede prevenir fácilmente.' },
      
      { type: 'h2', text: 'Qué es el soroche (respuesta rápida)' },
      { type: 'p', text: 'Es una reacción del cuerpo a la baja presión de oxígeno en altitudes superiores a 2,500 msnm.' },
      
      { type: 'h2', text: 'Cómo prevenirlo' },
      { type: 'ul', items: ['Descansar', 'Hidratarse', 'Evitar alcohol', 'Tomar mate de coca'] },
      
      { type: 'h2', text: 'Datos clave' },
      { type: 'ul', items: ['Altitud crítica: 2,500 msnm', 'Duración: 24–48 horas', 'Dificultad: leve'] },
      
      { type: 'h2', text: 'FAQs' },
      { type: 'h3', text: '¿Es peligroso?' },
      { type: 'p', text: 'Generalmente no, si se toman precauciones.' },
      
      { type: 'h2', text: 'Conclusión' },
      { type: 'p', text: 'La aclimatación es clave para disfrutar Cusco sin problemas.' },
      { type: 'highlight', text: 'Inkateam Travel diseña itinerarios que facilitan la adaptación.' }
    ]
  },
  {
    id: "que-llevar-machu-picchu",
    slug: "que-empacar-machu-picchu",
    title: "Qué empacar para Machu Picchu: checklist completo 2026",
    excerpt: "La lista de equipaje definitiva para la selva alta. Entérate qué está permitido ingresar y qué cosas esenciales te salvarán el día.",
    category: "Equipaje",
    readTime: "5 min",
    image: imgValleSagrado,
    featured: false,
    content: [
      { type: 'h2', text: 'Introducción' },
      { type: 'p', text: 'Empacar bien es clave para disfrutar Machu Picchu sin inconvenientes.' },
      
      { type: 'h2', text: 'Qué llevar a Machu Picchu (respuesta rápida)' },
      { type: 'p', text: 'Debes llevar ropa ligera en capas, protector solar, impermeable, agua y tu pasaporte.' },
      
      { type: 'h2', text: 'Lista esencial' },
      { type: 'ul', items: ['Pasaporte', 'Mochila pequeña', 'Ropa ligera', 'Impermeable', 'Protector solar', 'Repelente', 'Agua'] },
      
      { type: 'h2', text: 'Qué no llevar' },
      { type: 'ul', items: ['Drones', 'Mochilas grandes'] },
      
      { type: 'h2', text: 'Datos clave' },
      { type: 'ul', items: ['Altitud: 2,430 msnm', 'Clima: variable', 'Dificultad: moderada'] },
      
      { type: 'h2', text: 'FAQs' },
      { type: 'h3', text: '¿Necesito botas de trekking?' },
      { type: 'p', text: 'Recomendado.' },
      
      { type: 'h2', text: 'Conclusión' },
      { type: 'p', text: 'Empacar ligero y correctamente mejora tu experiencia en Machu Picchu.' },
      { type: 'highlight', text: 'Inkateam Travel te brinda recomendaciones personalizadas según tu ruta.' }
    ]
  }
];
