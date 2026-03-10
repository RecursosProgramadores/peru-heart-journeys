import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import WhyUsSection from "@/components/WhyUsSection";
import ToursSection from "@/components/ToursSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import AboutSection from "@/components/AboutSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import DestinationsSection from "@/components/DestinationsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <WhyUsSection />
      <ToursSection />
      <ActivitiesSection />
      <AboutSection />
      <SustainabilitySection />
      <DestinationsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
