import { MapPin, ShieldCheck, Award, Facebook, Instagram, Twitter, Mail, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logos/logoinkateam.png";
import minceturImg from "@/assets/Mincetur.png";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", path: "https://www.facebook.com/inkateamtravelperu" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", path: "https://www.instagram.com/inkateamtravel/?__pwa=1" },
    { icon: <Twitter className="w-5 h-5" />, label: "X (Twitter)", path: "https://x.com/inkateamtravel" },
  ];

  const footerLinks = {
    "Rutas de la Página": [
      { name: "Inicio", path: "/" },
      { name: "Tours Destacados", path: "/tours/cusco" },
      { name: "Viajes Transformacionales", path: "/viajes-transformacionales" },
      { name: "Diseña Tu Viaje", path: "/disena-tu-viaje" },
      { name: "Nuestros Destinos", path: "/destinos" },
      { name: "Blog de Viajes", path: "/blog" },
      { name: "Contacto", path: "/contacto" },
    ],
    "Acerca de Nosotros": [],
  };

  const legalLinks = [
    { name: "Términos y Condiciones", path: "/terminos" },
    { name: "Política de Privacidad", path: "/privacidad" },
    { name: "Libro de Reclamaciones", path: "#" },
  ];

  return (
    <footer className="bg-[#fcfcfc] border-t border-border mt-20">
      <div className="container px-4 mx-auto pt-20 pb-10">

        {/* Top Section: Logo, Slogan & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-border/60">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
              <img src={logo} alt="Inka Team Travel Logo" className="h-16 md:h-20 w-auto object-contain drop-shadow-sm" />
            </Link>
            <p className="font-display text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-600 italic uppercase tracking-wider">
              #ViajaViveMasEmociones
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.path}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white border border-border shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center text-muted-foreground"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section: Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-border/60">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h4 className="font-bold text-base uppercase tracking-wider text-foreground">Contacto Oficial</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href="mailto:reservas@inkateamtravel.com" className="hover:text-primary transition-colors hover:underline">
                    reservas@inkateamtravel.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="https://wa.me/51942293293" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:underline">
                    +51 942 293 293
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span>Lunes a Domingo<br />Atención 24/7 p/Viajeros</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-base uppercase tracking-wider text-foreground">Ubicación</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <p className="leading-relaxed">
                    Operaciones Centrales en<br/>
                    Cusco & Lima, Perú.<br/>
                    Jose Gregorio Paredes 273, Pueblo Libre
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-base uppercase tracking-wider text-foreground mb-6">{category}</h4>
              
              {links.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm md:text-base font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              
              {/* Certificación Mincetur */}
              {category === "Acerca de Nosotros" && (
                <div className="mt-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="transition-transform hover:scale-105 active:scale-95 group flex flex-col items-start gap-2">
                        <div className="bg-white p-2 rounded-md shadow-sm border border-border/50 group-hover:border-primary/50 inline-block">
                          <img 
                            src={minceturImg} 
                            alt="Certificación Mincetur" 
                            className="h-16 w-auto object-contain"
                          />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-primary">
                          Ver Certificación Mincetur
                        </span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 flex justify-center items-center">
                      <DialogTitle className="sr-only">Documento de Certificación Mincetur</DialogTitle>
                      <img 
                        src={minceturImg} 
                        alt="Mincetur Certificación" 
                        className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Row */}
        <div className="pt-12 pb-8 text-center space-y-8 border-b border-border/60">
          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Con el respaldo y certificaciones de:</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Tripadvisor */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-full border-2 border-[#00AF87]/30 flex items-center justify-center bg-white shadow-sm hover:border-[#00AF87] transition-colors">
                <span className="text-[10px] font-black text-[#00AF87]">T.A</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Travelers Choice</span>
            </div>
            {/* ATTA */}
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-10 h-10 text-slate-800" />
              <span className="text-[10px] font-bold uppercase tracking-tighter">Member ATTA</span>
            </div>
            {/* PROMPERU */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-black italic text-red-600">prom<span className="text-slate-800">perú</span></span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">Marca Perú</span>
            </div>
            {/* Turismo Oficial */}
            <div className="flex flex-col items-center gap-1">
              <Award className="w-10 h-10 text-amber-600" />
              <span className="text-[10px] font-bold uppercase tracking-tight">Agencia Calificada</span>
            </div>
            {/* Travelife */}
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-bold text-green-700 font-serif border border-green-700 px-2 rounded">Travelife</span>
              <span className="text-[8px] uppercase font-bold text-muted-foreground text-center leading-tight">Sostenibilidad</span>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-10 text-center space-y-8">
          
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm font-medium text-muted-foreground">
            {legalLinks.map((link) => (
               <li key={link.name}>
                 <Link to={link.path} className="hover:text-primary transition-colors hover:underline">
                   {link.name}
                 </Link>
               </li>
            ))}
          </ul>
          
          <p className="text-xs md:text-sm font-bold text-foreground/70 uppercase tracking-widest max-w-4xl mx-auto leading-relaxed border border-border/60 bg-white inline-block px-6 py-3 rounded-full shadow-sm">
            INKATEAM TRAVEL SAC - RUC 20565445261 - INSCRITO EN EL DIRECTORIO NACIONAL DE PRESTADORES DE SERVICIOS TURÍSTICOS CALIFICADOS
          </p>
          <p className="text-xs text-muted-foreground bg-clip-text">
            © {currentYear} Inka Team Travel. Orgullosamente peruanos 🇵🇪. Construyendo sueños. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
