import { 
  Compass, 
  Building, 
  CheckSquare, 
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
      icon: CheckSquare,
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
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive construction services with attention to detail 
            and commitment to excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-2xl shadow-light hover:shadow-large transition-all duration-300 hover:-translate-y-2 border border-primary/5 hover:border-primary/20"
            >
              {/* Icon */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Gradient Border Top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;