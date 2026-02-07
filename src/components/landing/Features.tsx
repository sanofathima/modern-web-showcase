import { Zap, Shield, Layers, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that delivers blazing fast load times and smooth interactions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols to keep your data safe and protected at all times.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Built to grow with you, from startup to enterprise with seamless scaling.",
  },
  {
    icon: Rocket,
    title: "Easy Integration",
    description: "Connect with your favorite tools and services in just a few clicks.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Nova</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you build better, faster, and smarter.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl glass hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4 group-hover:glow-cyan transition-all duration-300">
                <feature.icon className="w-7 h-7 text-neon-cyan" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-neon-cyan/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
