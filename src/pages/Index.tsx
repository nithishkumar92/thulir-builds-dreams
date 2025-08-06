import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = "THULIR Construction - Building Dreams with Excellence | Professional Construction Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'THULIR Construction offers professional construction services in Chennai. Specializing in residential, commercial, and renovation projects with quality craftsmanship and on-time delivery.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
