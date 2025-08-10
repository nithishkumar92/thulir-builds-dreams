import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Eye, Award, Clock, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                Building Dreams Since Day One
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="gradient-text">Your Vision,</span>
                <br />
                <span className="gradient-text">Our Expertise.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl lg:max-w-none">
                At Thulir Construction, we blend innovative design with expert craftsmanship 
                to deliver exceptional construction projects. From residential homes to commercial 
                spaces, we exceed expectations through quality workmanship and transparent communication.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2">
                <Phone size={18} />
                Get Free Quote
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/gallery">
                  <Eye size={18} />
                  View Projects
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Construction Excellence"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 space-y-4 hidden md:block">
              <div className="bg-background/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Award size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Quality Assured</div>
                    <div className="text-xs text-muted-foreground">Premium materials</div>
                  </div>
                </div>
              </div>

              <div className="bg-background/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">On-Time Delivery</div>
                    <div className="text-xs text-muted-foreground">As promised</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;