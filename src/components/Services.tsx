import { Card, CardContent } from "@/components/ui/card";
import { 
  Compass, 
  Building, 
  ClipboardCheck, 
  Wrench, 
  Leaf, 
  MessageSquare 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Compass,
      title: "Architectural Design",
      description: "Creating innovative and functional designs that perfectly balance aesthetics with practicality for your dream space."
    },
    {
      icon: Building,
      title: "General Contracting",
      description: "Complete construction services from foundation to finishing, ensuring quality workmanship at every stage."
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Efficient project coordination and management to ensure timely completion within budget and specifications."
    },
    {
      icon: Wrench,
      title: "Renovations & Remodeling",
      description: "Transform existing spaces with modern upgrades and renovations that add value and functionality."
    },
    {
      icon: Leaf,
      title: "Sustainable Building",
      description: "Eco-friendly construction practices using sustainable materials and energy-efficient solutions."
    },
    {
      icon: MessageSquare,
      title: "Construction Consulting",
      description: "Expert advice and consultation for all your construction needs, from planning to execution."
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text">
            Our Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive construction services with attention to detail 
            and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary/20 hover:border-l-primary"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;