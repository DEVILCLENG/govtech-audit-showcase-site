
import { CheckCircle } from "lucide-react";

const Hero = () => {
  const keyPoints = [
    "Specialized in government IT systems",
    "Comprehensive audit solutions",
    "Compliance with international standards",
    "Expert team of certified auditors"
  ];

  return (
    <div className="hero-gradient text-white min-h-[600px] flex items-center pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional IT Audit Services for Government Agencies
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Enhance your agency's security, compliance, and performance with our specialized IT audit services tailored for government institutions.
            </p>
            <div>
              <ul className="space-y-2">
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle size={20} className="text-blue-300 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="IT Audit Services" 
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
