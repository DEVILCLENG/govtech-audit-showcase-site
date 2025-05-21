import { Brain, Award, BarChart } from "lucide-react";
const Hero = () => {
  const keyPoints = [{
    icon: Brain,
    title: "Best-in Class Audit Service",
    description: "IAD-SS sets the standard for innovative audit methodology with risk-based approach uncovering visibility of what's on your network and control enabling Agencies to focus on vulnerable areas within your systems to autonomously prevent, detect, and recover from threats."
  }, {
    icon: Award,
    title: "Recognition & Results",
    description: "IAD-SS is a proud Audit Leader in GovTech being recognized by Agencies for our innovative audit skills and delication to aid them uncovering lapses there were never being disovered."
  }, {
    icon: BarChart,
    title: "Measurable, Performance Advantage",
    description: "IAD-SS is committed to the success of our Agencies with at least 98% satisfaction rate and seamless service engagement and hassle-free security clearance required by Agencies."
  }];
  return <div className="bg-[#D3E4FD] text-black min-h-[600px] flex items-center pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex justify-center items-center">
            <img src="/lovable-uploads/4e7a431e-837d-4f2d-bf04-06cd754e0b22.png" alt="IT Auditor with magnifying glass" className="rounded-lg shadow-lg max-w-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-black">GovTech Shared Services Overview</h2>
            <p className="text-base md:text-lg text-black mb-6">
              At Shared Services, we are uncovering cybersecurity gaps by pushing the boundaries out from conventional compliance audit methodology to out-of-box. Our turn-key service encompasses customised audit planning for Agencies, leveraging on WOG central and AI tools for detection and risk hunting across Cloud, on-prem to user endpoints. Enabling Agencies to prevent potential vulnerabilities instead of fire-fighting.
            </p>
            <h1 className="text-3xl leading-tight text-black my-0 text-center py-[100px] font-bold md:text-5xl">
              One Intelligent Service. Three Reasons to Believe
            </h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyPoints.map((point, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <point.icon size={32} className="text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">{point.title}</h3>
              <p className="text-sm md:text-base text-black text-center">{point.description}</p>
            </div>)}
        </div>
      </div>
    </div>;
};
export default Hero;