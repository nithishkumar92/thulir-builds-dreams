import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  FileText, 
  Calculator, 
  Droplets, 
  Settings, 
  Home 
} from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: Shield,
      title: "Anti-Termite Treatment",
      description: "Complete anti-termite treatment after soil filling to ensure long-term protection for your investment."
    },
    {
      icon: FileText,
      title: "Detailed Agreements",
      description: "Comprehensive agreement copies with all specifications and payment schedules for complete transparency."
    },
    {
      icon: Calculator,
      title: "Structural Analysis",
      description: "Detailed structural analysis and elevation photos shared before completing basement work."
    },
    {
      icon: Droplets,
      title: "Water Leakage Testing",
      description: "Thorough water leakage tests with pressure PU grout treatment before any plastering work."
    },
    {
      icon: Settings,
      title: "Modern Equipment",
      description: "State-of-the-art machinery including mini mixers, vibrators, and power trowel machines for superior quality."
    },
    {
      icon: Home,
      title: "Clean Handovers",
      description: "Thorough cleaning of every area before handover, ensuring a spotless finish for your new space."
    }
  ];

  return (
    <section id="why-choose" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold gradient-text">
            Why Choose Thulir?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence sets us apart in the construction industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background"
            >
              <CardContent className="p-6 lg:p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
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

export default WhyChoose;