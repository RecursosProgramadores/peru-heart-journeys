export interface Tour {
    slug: string;
    category: "cusco" | "lima" | "combinados";
    title: string;
    shortTitle: string;
    duration: string;
    price: string;
    difficulty: "Fácil" | "Moderada" | "Exigente";
    img: string;
    alt: string;
    excerpt: string;
    description: string[];
    highlights: string[];
    itinerary: { day: number; title: string; content: string }[];
    includes: string[];
    notIncludes: string[];
    rates?: {
        hotel: string;
        single: string;
        doble: string;
        triple: string;
        isRecommended?: boolean;
    }[];
}
