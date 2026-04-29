import { MapPin, Facebook, Instagram, Twitter, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logos/logoinkateam.png";
import minceturImg from "@/assets/Mincetur.png";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", path: "https://www.facebook.com/inkateamtravelperu" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", path: "https://www.instagram.com/accounts/login/?next=%2Finkateamtravel%2F&source=omni_redirect&__pwa=1" },
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
    { name: "Libro de Reclamaciones", path: "https://docs.google.com/forms/d/e/1FAIpQLSdimxVhPBQ2slXybhvC50xrhozc7CqlFuL4Q7jwkYxZmB5_zQ/viewform?usp=publish-editor" },
  ];

  return (
    <footer className="relative bg-white pt-24 overflow-hidden border-t border-border mt-20">
      {/* Decorative Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-40 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container px-4 mx-auto pb-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="inline-block group">
              <div className="bg-white p-5 rounded-3xl shadow-xl shadow-primary/5 border border-border transition-transform duration-500 group-hover:scale-105 group-hover:shadow-primary/10 group-hover:border-primary/20">
                <img src={logo} alt="Inka Team Travel Logo" className="h-16 md:h-20 w-auto object-contain" />
              </div>
            </Link>
            
            <p className="text-muted-foreground leading-relaxed font-medium">
              Especialistas en crear experiencias de viaje inolvidables. Conectamos tu espíritu con la magia, historia y naturaleza viva del Perú.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-muted/30 border border-border/50 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 flex items-center justify-center text-foreground hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-8">
            <div>
               <h4 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
                 Contáctanos
               </h4>
               <ul className="space-y-5">
                 <li>
                   <a href="mailto:reservas@inkateamtravel.com" className="group flex items-start gap-4 p-4 rounded-2xl border border-border/40 bg-muted/10 hover:bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all">
                     <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                       <Mail className="w-5 h-5" />
                     </div>
                     <div>
                       <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Email Oficial</p>
                       <p className="text-foreground font-medium group-hover:text-primary transition-colors">reservas@inkateamtravel.com</p>
                     </div>
                   </a>
                 </li>
                 <li>
                   <a href="https://wa.me/51942293293?text=%C2%A1Hola%20Inkateam%20Travel!%20Estoy%20visitando%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20tours%20y%20experiencias%20en%20Per%C3%BA.%20%C2%BFPodr%C3%ADan%20asesorarme%3F%20Muchas%20gracias." target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4 p-4 rounded-2xl border border-border/40 bg-muted/10 hover:bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all">
                     <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                       <Phone className="w-5 h-5" />
                     </div>
                     <div>
                       <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">WhatsApp Directo</p>
                       <p className="text-foreground font-medium group-hover:text-primary transition-colors">+51 942 293 293</p>
                     </div>
                   </a>
                 </li>
                 <li className="flex items-start gap-4 px-4">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">
                      Lima, Perú.<br/>
                      Jose Gregorio Paredes 273, Pueblo Libre
                    </p>
                 </li>
               </ul>
            </div>
          </div>

          {/* Nav Links & Mincetur */}
          <div className="lg:col-span-4 flex flex-col md:flex-row lg:flex-col xl:flex-row gap-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex-1">
                <h4 className="font-display font-bold text-xl text-foreground mb-6">{category}</h4>
                
                {links.length > 0 && (
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="group flex items-center text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                          <span className="w-0 h-0.5 bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                
                {/* Mincetur Certification */}
                {category === "Acerca de Nosotros" && (
                  <div className="mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="group relative overflow-hidden rounded-3xl p-1 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 w-fit cursor-pointer text-left focus:outline-none">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary opacity-20 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                          <div className="relative bg-white rounded-[1.35rem] p-4 flex flex-col items-center gap-3">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1">
                              CERTIFICACIÓN OFICIAL <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                            <img 
                              src={minceturImg} 
                              alt="Certificación Mincetur" 
                              className="h-16 w-auto object-contain"
                            />
                          </div>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl bg-transparent border-none shadow-none p-0 flex justify-center items-center">
                        <DialogTitle className="sr-only">Documento de Certificación Mincetur</DialogTitle>
                        <img 
                          src={minceturImg} 
                          alt="Mincetur Certificación" 
                          className="w-full h-auto max-h-[90vh] object-contain rounded-2xl shadow-2xl"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Dark Luxury Bottom Bar */}
      <div className="bg-[#0A0F1C] relative border-t border-white/10 rounded-t-[2rem] sm:rounded-t-[3rem] px-4 pt-10 pb-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        
        <div className="container mx-auto flex flex-col items-center gap-8">
          
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm font-semibold text-white/60">
            {legalLinks.map((link) => (
               <li key={link.name}>
                 {link.path.startsWith('http') ? (
                   <a href={link.path} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors hover:underline decoration-primary/50 underline-offset-4">
                     {link.name}
                   </a>
                 ) : (
                   <Link to={link.path} className="hover:text-white transition-colors hover:underline decoration-primary/50 underline-offset-4">
                     {link.name}
                   </Link>
                 )}
               </li>
            ))}
          </ul>
          
          <div className="w-full max-w-4xl mx-auto py-4 px-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-[10px] sm:text-xs font-black text-white/90 uppercase tracking-[0.2em] text-center leading-relaxed">
              INKATEAM TRAVEL SAC <span className="text-primary mx-2">•</span> RUC 20565445261 <span className="text-primary mx-2 hidden sm:inline">•</span><br className="sm:hidden"/> INSCRITO EN EL DIRECTORIO NACIONAL DE PRESTADORES DE SERVICIOS TURÍSTICOS CALIFICADOS
            </p>
          </div>

          <p className="text-xs text-white/50 text-center font-medium">
            © {currentYear} InkaTeam Travel. Orgullosamente peruanos 🇵🇪. Todos los derechos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
