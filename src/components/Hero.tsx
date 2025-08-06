import { Phone, Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-hero relative overflow-hidden pt-16 sm:pt-20"
    >
      {/* Floating Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[calc(100vh-4rem)] py-12 lg:py-20">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Your Vision,
                </span>
                <br />
                <span className="bg-gradient-gold bg-clip-text text-transparent">
                  Our Expertise.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-primary/80 font-medium">
                Building Dreams with Excellence Since Day One
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                At Thulir Construction, we blend innovative design with expert 
                craftsmanship to deliver exceptional construction projects. From 
                residential homes to commercial spaces, we are committed to exceeding 
                client expectations through quality workmanship, transparent 
                communication, and on-time project completion.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-gold hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Packages
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl bg-gradient-gold bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="THULIR Construction - Professional construction services"
                className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 space-y-3 sm:space-y-4">
                <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-medium animate-float">
                  <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white text-lg">🏆</span>
                  </div>
                  <h4 className="font-semibold text-sm">Quality Assured</h4>
                  <p className="text-xs text-muted-foreground">Premium materials & craftsmanship</p>
                </div>
                
                <div 
                  className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-medium animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white text-lg">⏰</span>
                  </div>
                  <h4 className="font-semibold text-sm">On-Time Delivery</h4>
                  <p className="text-xs text-muted-foreground">Projects delivered as promised</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce-slow">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;