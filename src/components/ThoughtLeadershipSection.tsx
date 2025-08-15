import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, ArrowRight } from "lucide-react";
import thoughtLeadershipHero from "@/assets/thought-leadership-hero.jpg";

const ThoughtLeadershipSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Brain className="text-primary" size={24} />
                </div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  Professional Excellence
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                THOUGHT LEADERSHIP
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Access comprehensive audit methodologies, tools, insights, and frameworks designed 
                specifically for government and enterprise internal audit functions. Our thought 
                leadership resources combine industry best practices with practical implementation guidance.
              </p>
              
              <div className="pt-4">
                <Button asChild size="lg" className="group">
                  <Link to="/thought-leadership">
                    Explore Resources
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Professional Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={thoughtLeadershipHero}
                  alt="Central Internal Audit Department - Professional thought leadership and methodologies"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadershipSection;