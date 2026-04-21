import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ToursSection from "@/components/ToursSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import AboutSection from "@/components/AboutSection";
import DestinationsSection from "@/components/DestinationsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyUsSection />
      <ToursSection />
      <ActivitiesSection />
      <DestinationsSection />
      <AboutSection />
      <BlogSection />
      <FAQSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Index;
