import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ToursSection from "@/components/ToursSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import AboutSection from "@/components/AboutSection";
import DestinationsSection from "@/components/DestinationsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import LegalInfoSection from "@/components/LegalInfoSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <ToursSection />
      <ActivitiesSection />
      <DestinationsSection />
      <AboutSection />
      <BlogSection />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
      <LegalInfoSection />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
