import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-blue/20" />
          <div className="absolute inset-0 bg-card/80 backdrop-blur-xl" />
          
          {/* Content */}
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get <span className="text-gradient">Started</span>?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of innovators building the future. Start your journey today with a free account.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 transition-all duration-300 glow-cyan text-lg px-8"
              >
                Start Building Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted/50 transition-all duration-300 text-lg px-8"
              >
                Contact Sales
              </Button>
            </div>

            {/* Trust indicators */}
            <p className="mt-8 text-sm text-muted-foreground">
              No credit card required • Free tier forever • Cancel anytime
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
