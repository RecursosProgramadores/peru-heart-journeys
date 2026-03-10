import fbIcon from "@/assets/logos/facebook.svg";
import igIcon from "@/assets/logos/instagram.svg";
import ytIcon from "@/assets/logos/youtube.svg";
import ttIcon from "@/assets/logos/tiktok.svg";
import liIcon from "@/assets/logos/linkedin.svg";
import { MapPin, ShieldCheck, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: fbIcon, label: "Facebook", path: "#" },
    { icon: igIcon, label: "Instagram", path: "#" },
    { icon: ytIcon, label: "Youtube", path: "#" },
    { icon: ttIcon, label: "TikTok", path: "#" },
    { icon: liIcon, label: "LinkedIn", path: "#" },
  ];

  const footerLinks = {
    Información: [
      { name: "Blog", path: "/blog" },
      { name: "Sobre nosotros", path: "/sobre-nosotros" },
      { name: "Para socios B2B", path: "#" },
      { name: "Guía de viaje de Perú GRATIS", path: "#" },
      { name: "Destinos", path: "/tours/cusco" },
      { name: "Sostenibilidad", path: "/sostenibilidad" },
      { name: "Proyecto Social", path: "#" },
    ],
    General: [
      { name: "Preguntas frecuentes", path: "#" },
      { name: "Reseñas", path: "#" },
      { name: "Contáctenos", path: "#contacto" },
      { name: "Política de privacidad", path: "/privacidad" },
      { name: "Libro de reclamaciones", path: "#" },
      { name: "Términos y condiciones", path: "/terminos" },
    ],
    "Los tours más vendidos": [
      { name: "Tour Auténtico de 8 días por Perú", path: "/tours/combinados/cusco-puno-8d-7n" },
      { name: "Maravillas peruanas en 8 días", path: "/tours/combinados/lima-ica-cusco-8d-7n" },
      { name: "Aventura épica de 12 días en Perú", path: "#" },
      { name: "Tours personalizados en Perú", path: "#contacto" },
      { name: "Tours en Perú", path: "/tours/cusco" },
      { name: "Excursiones de un día", path: "/tours/cusco" },
    ],
  };

  return (
    <footer className="bg-[#fcfcfc] border-t border-border mt-20">
      <div className="container px-4 mx-auto py-20">

        {/* Top Section: Contact & Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-border/60">
          <div className="space-y-4">
            <h4 className="font-bold text-base uppercase tracking-wider text-foreground/80">Correo electrónico</h4>
            <a href="mailto:reservas@inkateamtravel.com" className="text-muted-foreground hover:text-primary transition-colors text-lg">
              reservas@inkateamtravel.com
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-base uppercase tracking-wider text-foreground/80">Teléfono</h4>
            <div className="space-y-1">
              <p className="text-muted-foreground flex items-center gap-2">
                <span className="font-bold text-foreground/70">PE:</span> +51 942293293
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <span className="font-bold text-foreground/70">Email:</span> reservas@inkateamtravel.com
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-base uppercase tracking-wider text-foreground/80">DIRECCIÓN</h4>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 shrink-0 text-primary/60 mt-0.5" />
              <p className="leading-relaxed">Jose Gregorio Paredes 273, Pueblo Libre, Lima - Perú</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-base uppercase tracking-wider text-foreground/80">Social</h4>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.path}
                  className="p-2.5 rounded-full bg-muted/40 hover:bg-primary transition-all duration-300 flex items-center justify-center grayscale hover:grayscale-0"
                  aria-label={social.label}
                >
                  <img src={social.icon} alt={social.label} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-xl text-foreground mb-8">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Awards */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-12 border-t border-border/60">
          {[2022, 2023, 2024, 2025].map((year) => (
            <div key={year} className="flex flex-col items-center text-center">
              <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full border-4 border-[#00AF87]/20 flex items-center justify-center bg-white shadow-sm">
                  <div className="text-[10px] font-bold text-[#00AF87] flex flex-col items-center">
                    <span className="uppercase">Tripadvisor</span>
                    <span className="text-xs">Travelers' Choice</span>
                    <span className="text-base font-black">{year}</span>
                  </div>
                </div>
                {/* Wreath effect with small dots/stars */}
                <div className="absolute -inset-2 border-2 border-dashed border-[#00AF87]/10 rounded-full animate-spin-slow" />
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div className="pt-12 text-center space-y-8">
          <h4 className="text-lg font-bold text-foreground/70 uppercase tracking-widest">Afiliaciones y certificaciones de viajes</h4>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Mock logos based on image text */}
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">Member ATTA</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-black italic text-red-600">prom<span className="text-foreground">perú</span></span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-10 h-10 text-blue-600" />
              <span className="text-[10px] font-bold uppercase">Agencia Registrada</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-bold text-green-700 font-serif">Travelife</span>
              <span className="text-[8px] uppercase font-bold text-muted-foreground text-center leading-tight">Committed to<br />sustainability</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center p-2">
                <ShieldCheck className="w-full h-full text-white" />
              </div>
              <span className="text-[10px] font-bold uppercase">Protégeme</span>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="mt-20 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Inka Team Travel. Orgullosamente peruanos 🇵🇪. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
