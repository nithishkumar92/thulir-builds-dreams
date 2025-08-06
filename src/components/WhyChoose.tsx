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
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Why Choose Thulir?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence sets us apart in the construction industry
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-light hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Content */}
              <h4 className="font-heading font-semibold text-lg sm:text-xl mb-3 text-foreground">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;