import { Instagram, Facebook, Youtube, Mail } from "lucide-react";

const links = {
  Tours: ["Tour Auténtico", "Aventura en Perú", "Tour Culinario", "Odisea Peruana"],
  Destinos: ["Los Andes", "Amazonía", "Costa Desértica", "Lago Titicaca"],
  Empresa: ["Sobre Nosotros", "Sostenibilidad", "Blog", "Contacto"],
};

const socials = [
  { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
  { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
  { icon: <Youtube className="w-5 h-5" />, label: "YouTube" },
  { icon: <Mail className="w-5 h-5" />, label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">
              Exploor <span className="text-primary">Perú</span>
            </h3>
            <p className="font-body text-primary-foreground/70 leading-relaxed mb-6">
              Explorando Perú con amor ❤️
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary/80 flex items-center justify-center transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/60">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-primary-foreground/70 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-sm text-primary-foreground/50">
            Hecho con pasión en Perú 🇵🇪 © {new Date().getFullYear()} Exploor Perú. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
