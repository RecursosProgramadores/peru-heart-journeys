import { useParams, Link, Navigate } from "react-router-dom";
import { blogPosts } from "@/data/blog";

import { ArrowLeft, Clock, CalendarDays, Share2, Link as LinkIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import logo from "@/assets/logos/logoinkateam.png";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-50 grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground font-bold px-4 py-1.5 rounded-full mb-6 text-sm uppercase tracking-wider backdrop-blur-md">
            {post.category}
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600 mb-8 tracking-tight drop-shadow-2xl leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm font-medium">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime} de lectura
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> 2026
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Link to="/blog" className="inline-flex items-center text-primary font-bold hover:text-primary/70 transition-colors mb-12 uppercase tracking-widest text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Blog
          </Link>

          {/* Article Content */}
          <article className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-li:marker:text-primary">
            {post.content.map((block, index) => {
              if (block.type === 'h2') return <h2 key={index} className="text-foreground">{block.text}</h2>;
              if (block.type === 'h3') return <h3 key={index} className="text-foreground">{block.text}</h3>;
              if (block.type === 'p') return <p key={index} className="text-muted-foreground">{block.text}</p>;
              if (block.type === 'ul' && block.items) {
                return (
                  <ul key={index} className="space-y-2 mt-4 mb-8 text-muted-foreground">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-3 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === 'highlight') {
                return (
                  <div key={index} className="my-10 p-8 rounded-2xl bg-primary/5 border border-primary/20 shadow-inner">
                    <p className="text-foreground font-medium text-lg leading-relaxed m-0 flex items-center">
                      <span className="mr-3 text-2xl">👉</span> {block.text}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </article>

          {/* Share Section */}
          <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-md border-2 border-primary/20 flex items-center justify-center bg-white p-1">
                <img src={logo} alt="Inkateam Travel Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-bold text-foreground">Escrito por Expertos Locales</p>
                <p className="text-sm font-medium text-primary">Inkateam Travel</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-muted/50 p-3 rounded-2xl border border-border">
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground hidden lg:flex items-center gap-2">
                <Share2 className="w-4 h-4 ml-2" /> Compartir Artículo
              </span>
              <Button 
                variant={copied ? "default" : "outline"}
                className={`rounded-xl transition-all ${copied ? "bg-green-600 hover:bg-green-700 text-white border-green-600 shadow-lg shadow-green-600/20" : "hover:border-primary hover:text-primary"}`}
                onClick={handleCopyLink}
              >
                {copied ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <LinkIcon className="w-4 h-4 mr-2" />}
                {copied ? "¡Enlace Copiado!" : "Copiar Enlace"}
              </Button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default BlogPost;
