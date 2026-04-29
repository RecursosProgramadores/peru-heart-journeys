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
  { label: "Lima", count: 3, href: "/tours/lima" },
  { label: "Cusco", count: 8, href: "/tours/cusco" },
  { label: "Combinados", count: 5, href: "/tours/combinados" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-border/50 ${scrolled ? "py-2 shadow-lg" : "py-4 shadow-sm"
        }`}
    >
      <div className="container-narrow flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Inka Team Logo"
            className={`transition-all duration-300 ${scrolled ? "h-10 md:h-12" : "h-12 md:h-14"} w-auto object-contain`}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {/* Tipos de viaje Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary transition-all outline-none uppercase tracking-widest text-[11px]">
              Tipos de viaje <ChevronDown size={14} className="mt-0.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 p-2 bg-white rounded-2xl shadow-2xl border-border/50 animate-in fade-in zoom-in duration-200">
              {tripTypes.map((type) => (
                <DropdownMenuItem key={type.href} asChild>
                  <Link
                    to={type.href}
                    className="flex items-center gap-3 w-full px-3 py-3 cursor-pointer rounded-xl hover:bg-primary/5 group transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {type.icon}
                    </div>
                    <span className="font-bold text-foreground text-sm">{type.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Planes de viaje Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold text-foreground hover:text-primary transition-all outline-none uppercase tracking-widest text-[11px]">
              Planes de viaje <ChevronDown size={14} className="mt-0.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 p-2 bg-white rounded-2xl shadow-2xl border-border/50 animate-in fade-in zoom-in duration-200">
              {tourCategories.map((cat) => (
                <DropdownMenuItem key={cat.href} asChild>
                  <Link
                    to={cat.href}
                    className="flex items-center justify-between w-full px-3 py-3 cursor-pointer rounded-xl hover:bg-primary/5 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <MapPin size={16} />
                      </div>
                      <span className="font-bold text-foreground">{cat.label}</span>
                    </div>
                    <span className="text-[10px] font-black bg-muted px-2 py-0.5 rounded-full text-muted-foreground group-hover:bg-primary group-hover:text-white transition-colors">
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
              className="text-sm font-bold text-foreground hover:text-primary transition-all uppercase tracking-widest text-[11px]"
            >
              {l.label}
            </Link>
          ))}
          <Button
            variant="default"
            size="sm"
            className="shadow-xl bg-black hover:bg-black/90 text-white font-bold rounded-xl px-6 h-11 text-[11px] uppercase tracking-widest transition-all hover:-translate-y-0.5"
            asChild
          >
            <Link to="/disena-tu-viaje">Personaliza tu viaje</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-border px-6 pb-10 pt-6 animate-fade-in shadow-2xl h-screen overflow-y-auto">
          <div className="space-y-8">
            <div className="py-2">
              <span className="block text-xs font-black text-muted-foreground mb-6 uppercase tracking-[0.2em]">Tipos de viaje</span>
              <div className="grid grid-cols-1 gap-4">
                {tripTypes.map((type) => (
                  <Link
                    key={type.href}
                    to={type.href}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50 text-sm font-bold text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">{type.icon}</div>
                    {type.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-2">
              <span className="block text-xs font-black text-muted-foreground mb-6 uppercase tracking-[0.2em]">Planes de viaje</span>
              <div className="grid grid-cols-1 gap-4">
                {tourCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    to={cat.href}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30 border border-border/50 text-sm font-bold text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><MapPin size={18} /></div>
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href + l.label}
                  to={l.href}
                  className="block py-4 text-xl font-bold text-foreground border-b border-border/50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <Button variant="default" size="xl" className="w-full bg-black text-white font-bold h-16 rounded-2xl shadow-2xl" asChild>
              <Link to="/disena-tu-viaje" onClick={() => setOpen(false)}>
                Personaliza tu viaje
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
