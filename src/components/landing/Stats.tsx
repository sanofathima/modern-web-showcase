const stats = [
  { value: "99.9%", label: "Uptime SLA", description: "Industry-leading reliability" },
  { value: "50M+", label: "API Calls", description: "Processed monthly" },
  { value: "150+", label: "Countries", description: "Global coverage" },
  { value: "<10ms", label: "Latency", description: "Average response time" },
];

const Stats = () => {
  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform is trusted by thousands of companies worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group"
            >
              {/* Glassmorphism card */}
              <div className="p-8 rounded-2xl glass text-center hover:bg-card/80 transition-all duration-300 h-full">
                {/* Value with gradient */}
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-xl font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                     style={{ boxShadow: "0 0 40px hsl(199 89% 48% / 0.15)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
