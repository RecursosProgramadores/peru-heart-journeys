import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";
import logo from "@/assets/logos/logoinkateam.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const tripTypes = [
  { label: "Viajes transformacionales", href: "/viajes-transformacionales", icon: <MapPin size={16} /> },
  { label: "Turismos comunitario", href: "/turismo-comunitario", icon: <MapPin size={16} /> },
  { label: "Diseña tu viaje", href: "/disena-tu-viaje", icon: <MapPin size={16} /> },
];

const navLinks = [
  { label: "Full Days", href: "/full-days" },
  { label: "Destinos", href: "/destinos" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const tourCategories = [
  { label: "Tour Lima", count: 3, href: "/tours/lima" },
  { label: "Tour Cusco", count: 8, href: "/tours/cusco" },
  { label: "Tour Combinado", count: 5, href: "/tours/combinados" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container-narrow flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Inka Team Logo"
            className={`transition-all duration-300 ${scrolled ? "h-10 md:h-12" : "h-12 md:h-16"} w-auto object-contain`}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {/* Tipos de viaje Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors outline-none ${scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-accent"}`}>
              Tipos de viaje <ChevronDown size={14} className="mt-0.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 p-2 bg-white rounded-xl shadow-xl border-border/50 animate-in fade-in zoom-in duration-200">
              {tripTypes.map((type) => (
                <DropdownMenuItem key={type.href} asChild>
                  <Link
                    to={type.href}
                    className="flex items-center gap-3 w-full px-3 py-2.5 cursor-pointer rounded-lg hover:bg-primary/5 group transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      {type.icon}
                    </div>
                    <span className="font-semibold text-foreground text-sm">{type.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Planes de viaje Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors outline-none ${scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-accent"}`}>
              Planes de viaje <ChevronDown size={14} className="mt-0.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 p-2 bg-white rounded-xl shadow-xl border-border/50 animate-in fade-in zoom-in duration-200">
              {tourCategories.map((cat) => (
                <DropdownMenuItem key={cat.href} asChild>
                  <Link
                    to={cat.href}
                    className="flex items-center justify-between w-full px-3 py-2.5 cursor-pointer rounded-lg hover:bg-primary/5 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <MapPin size={16} />
                      </div>
                      <span className="font-semibold text-foreground">{cat.label}</span>
                    </div>
                    <span className="text-[10px] font-bold bg-muted px-2 py-0.5 rounded-full text-muted-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                      {cat.count}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((l) => (
            <Link
              key={l.href + l.label}
              to={l.href}
              className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:text-primary" : "text-primary-foreground hover:text-accent"
                }`}
            >
              {l.label}
            </Link>
          ))}
          <Button
            variant="default"
            size="sm"
            className="shadow-md transition-all duration-300"
            asChild
          >
            <Link to="/disena-tu-viaje">Personaliza tu viaje</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-border px-4 pb-6 pt-2 animate-fade-up">
          <div className="py-3">
            <span className="block text-base font-medium text-muted-foreground mb-2">Tipos de viaje</span>
            <div className="pl-4 flex flex-col gap-3">
              {tripTypes.map((type) => (
                <Link
                  key={type.href}
                  to={type.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  • {type.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="py-3">
            <span className="block text-base font-medium text-muted-foreground mb-2">Planes de viaje</span>
            <div className="pl-4 flex flex-col gap-3">
              {tourCategories.map((cat) => (
                <Link
                  key={cat.href}
                  to={cat.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setOpen(false)}
                >
                  • {cat.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.href + l.label}
              to={l.href}
              className="block py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Button variant="outline" size="default" className="w-full mt-4" asChild>
            <Link to="/disena-tu-viaje" onClick={() => setOpen(false)}>
              Personaliza tu viaje
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
