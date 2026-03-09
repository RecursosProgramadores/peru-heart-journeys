import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import ToursSection from "@/components/ToursSection";
import AboutSection from "@/components/AboutSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import DestinationsSection from "@/components/DestinationsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <ToursSection />
      <AboutSection />
      <SustainabilitySection />
      <DestinationsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
