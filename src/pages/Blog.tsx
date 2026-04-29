
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import bgHero from "@/assets/optimized/CUSCOCOLORIDO.webp";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
        <img
          src={bgHero}
          alt="Inkateam Travel Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        <div className="container-narrow relative z-10 px-4 text-center text-white mt-24">
          <div className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-1.5 rounded-full mb-6 text-sm uppercase tracking-widest shadow-xl">
            <BookOpen size={14} className="mr-2" /> Historias y Consejos
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
            Blog de <span className="text-primary italic">Viajes</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-medium">
            Inspiración, consejos expertos y guías detalladas para que tu próxima aventura en Perú sea simplemente perfecta.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-20">
              <h3 className="font-display text-2xl font-bold mb-8 text-foreground border-b border-border pb-4">Artículo Destacado</h3>
              <div className="group flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-primary/10 transition-shadow duration-500 border border-border">
                <div className="lg:w-3/5 h-80 lg:h-[500px] overflow-hidden relative">
                  <div className="absolute top-6 left-6 z-10 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                    {featuredPost.category}
                  </div>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="lg:w-2/5 p-10 lg:p-14 flex flex-col justify-center bg-white relative">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm font-medium mb-6">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime} de lectura</span>
                  </div>
                  <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-6 text-foreground leading-tight group-hover:text-primary transition-colors">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
                    {featuredPost.excerpt}
                  </p>
                  <Button size="xl" className="w-fit text-base font-bold px-8 shadow-xl bg-black hover:bg-black/80 text-white rounded-2xl" asChild>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      Leer Artículo <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-8 text-foreground border-b border-border pb-4">Últimas Publicaciones</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {regularPosts.map((post) => (
                <div key={post.id} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:-translate-y-2">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md text-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                      {post.category}
                    </div>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-muted-foreground text-xs font-medium mb-4">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime} lectura</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-4 text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed flex-grow mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="font-bold text-primary flex items-center hover:text-primary/70 transition-colors uppercase tracking-widest text-sm"
                    >
                      Seguir Leyendo <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Newsletter Subscribe */}
          <div className="mt-32 bg-[#0A0F1C] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60" />
            <h2 className="relative z-10 font-display text-3xl md:text-5xl font-bold mb-6 text-white">
              ¿Quieres más consejos de viaje?
            </h2>
            <p className="relative z-10 font-body text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Únete a nuestra newsletter y recibe directamente las mejores guías, secretos locales y ofertas exclusivas para tu aventura en Perú.
            </p>
            <form className="relative z-10 flex flex-col sm:flex-row justify-center max-w-lg mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Tu mejor correo electrónico" 
                className="w-full h-14 px-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                required
              />
              <Button type="submit" size="xl" className="h-14 px-8 rounded-2xl font-bold text-base whitespace-nowrap bg-primary hover:bg-primary/80 text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                Suscribirme
              </Button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Blog;
