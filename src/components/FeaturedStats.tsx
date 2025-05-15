
import { Card, CardContent } from "@/components/ui/card";

const FeaturedStats = () => {
  return (
    <section className="py-12 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Agencies
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto">
            We specialize in comprehensive IT audit solutions tailored specifically for systems and infrastructure.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-blue-900 opacity-10 pattern-dots"></div>
    </section>
  );
};

export default FeaturedStats;
