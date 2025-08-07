import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <WhyChoose />
      <Footer />
    </div>
  );
};

export default Index;
