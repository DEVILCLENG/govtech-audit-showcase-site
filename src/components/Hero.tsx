
import { CheckCircle } from "lucide-react";

const Hero = () => {
  const keyPoints = [
    {
      title: "Best-in Class Audit Service",
      description: "IAD-SS sets the standard for innovative audit methodology with risk-based approach uncovering visibility of what's on your network and control enabling Agencies to focus on vulnerable areas within your systems to autonomously prevent, detect, and recover from threats."
    },
    {
      title: "Recognition & Results", 
      description: "IAD-SS is a proud Audit Leader in GovTech being recognized by Agencies for our innovative audit skills and delication to aid them uncovering lapses there were never being disovered."
    },
    {
      title: "Measurable, Performance Advantage",
      description: "IAD-SS is committed to the success of our Agencies with at least 98% satisfaction rate and seamless service engagement and hassle-free security clearance required by Agencies."
    }
  ];

  return (
    <div className="hero-gradient text-white min-h-[600px] flex items-center pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              One Intelligent Service. Three Reasons to Believe
            </h1>
            <div className="space-y-6">
              {keyPoints.map((point, index) => (
                <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">{point.title}</h3>
                  <p className="text-sm md:text-base opacity-90">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/e869a127-72de-4b9a-aefd-0faf7f96dab2.png" 
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
