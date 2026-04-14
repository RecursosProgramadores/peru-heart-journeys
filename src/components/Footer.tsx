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
              <h4 className="font-bold text-base uppercase tracking-wider text-foreground">Contactanos </h4>
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
                  <span>Lunes a Domingo</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-base uppercase tracking-wider text-foreground">Ubicación</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <p className="leading-relaxed">
                    Lima, Perú.<br/>
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
            © {currentYear} InkaTeam Travel. Orgullosamente peruanos 🇵🇪. Construyendo sueños. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
