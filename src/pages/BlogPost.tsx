import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Clock, CalendarDays, Share2, Link as LinkIcon, CheckCircle2, ChevronRight, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logos/logoinkateam.png";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("¡Enlace copiado!", {
      description: "El enlace al artículo ya está en tu portapapeles listo para compartir.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-muted/30">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out" 
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <nav className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-[0.2em] mb-8 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight size={12} />
              <span className="text-primary">{post.category}</span>
            </nav>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-10 tracking-tight leading-[1.05] max-w-4xl drop-shadow-2xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-8 text-black text-sm font-bold tracking-wide">
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <User size={16} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-black/50 uppercase leading-none mb-1 font-black">Autor</p>
                  <p className="leading-none">Expertos Inkateam</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                  <Clock size={16} className="text-zinc-600" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-black/50 uppercase leading-none mb-1 font-black">Lectura</p>
                  <p className="leading-none">{post.readTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                  <CalendarDays size={16} className="text-zinc-600" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-black/50 uppercase leading-none mb-1 font-black">Publicado</p>
                  <p className="leading-none">2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Left (Social & Tools) */}
            <aside className="lg:w-20 hidden lg:flex flex-col items-center gap-6 sticky top-32 h-fit">
              <div className="flex flex-col gap-4">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className={`rounded-full w-12 h-12 transition-all ${copied ? "bg-primary text-white border-primary" : "hover:border-primary hover:text-primary"}`}
                  onClick={handleCopyLink}
                  title="Copiar enlace"
                >
                  <LinkIcon size={20} />
                </Button>
                <div className="h-px w-8 bg-border mx-auto my-2" />
                <Button size="icon" variant="outline" className="rounded-full w-12 h-12 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]">
                  <span className="font-bold">f</span>
                </Button>
                <Button size="icon" variant="outline" className="rounded-full w-12 h-12 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]">
                  <span className="font-bold text-lg">w</span>
                </Button>
              </div>
            </aside>

            {/* Article Content */}
            <div className="flex-1 max-w-3xl">
              <article className="prose prose-lg md:prose-xl prose-zinc max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-primary prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:tracking-tight prose-h3:text-primary prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-p:leading-[1.8] prose-p:text-zinc-600 prose-p:mb-8 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-zinc-900 prose-ul:my-10">
                {post.content.map((block, index) => {
                  if (block.type === 'h2') return <h2 key={index} id={`heading-${index}`} className="text-primary">{block.text}</h2>;
                  if (block.type === 'h3') return <h3 key={index} className="text-primary">{block.text}</h3>;
                  if (block.type === 'p') return <p key={index}>{block.text}</p>;
                  if (block.type === 'ul' && block.items) {
                    return (
                      <ul key={index} className="space-y-4 list-none pl-0">
                        {block.items.map((item, i) => (
                          <li key={i} className="flex items-start group">
                            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                              <ChevronRight size={14} strokeWidth={3} />
                            </span>
                            <span className="text-zinc-700 font-medium pt-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === 'highlight') {
                    return (
                      <div key={index} className="my-16 p-10 rounded-[2rem] bg-zinc-50 border border-zinc-200 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary transition-all duration-500 group-hover:w-4" />
                        <p className="text-zinc-800 font-bold text-xl md:text-2xl leading-relaxed m-0 italic font-display">
                          "{block.text}"
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                          <div className="w-8 h-px bg-zinc-300" />
                          <span className="text-xs font-black uppercase tracking-widest text-primary">Consejo Inkateam</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </article>

              {/* Author & Footer Share */}
              <div className="mt-24 pt-12 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-10">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center bg-white p-2 transform -rotate-3">
                    <img src={logo} alt="Inkateam Travel Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-1">Escrito por</p>
                    <h4 className="text-xl font-bold text-zinc-900 mb-1">Staff Inkateam</h4>
                    <p className="text-sm text-zinc-500 font-medium">Expertos en Destinos de Lujo y Aventura en Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Right (CTA & Related) */}
            <aside className="lg:w-80 space-y-10 h-fit lg:sticky lg:top-32">
              <div className="p-8 rounded-[2rem] bg-zinc-900 text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-primary/40 transition-all duration-700" />
                <h4 className="text-2xl font-display font-bold mb-4 relative z-10">¿Listo para vivir esta aventura?</h4>
                <p className="text-white/60 mb-8 relative z-10 text-sm leading-relaxed">
                  Diseñamos itinerarios personalizados que transforman viajes en experiencias de vida inolvidables.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl h-14 relative z-10 shadow-xl shadow-primary/20" asChild>
                  <Link to="/disena-tu-viaje">Personalizar mi viaje</Link>
                </Button>
              </div>

              <div className="p-8 rounded-[2rem] border border-zinc-200 bg-white shadow-sm">
                <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Tag size={18} className="text-primary" /> Categoría
                </h4>
                <Link to="/blog" className="inline-block px-4 py-2 rounded-xl bg-zinc-100 text-zinc-600 text-sm font-bold hover:bg-primary hover:text-white transition-all">
                  {post.category}
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>
      
      {/* Newsletter / CTA Section Bottom */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Continúa explorando Perú</h2>
          <p className="text-zinc-500 mb-10 text-lg">Regresa a nuestro blog para descubrir más guías, consejos y secretos de los mejores destinos de los Andes.</p>
          <Button variant="outline" size="xl" className="rounded-2xl px-10 border-zinc-300 hover:border-primary hover:text-primary" asChild>
            <Link to="/blog">Explorar más artículos</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
