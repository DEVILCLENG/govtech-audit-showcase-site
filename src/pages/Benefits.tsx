
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitSection from "@/components/BenefitSection";
import CallToAction from "@/components/CallToAction";
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const additionalBenefits = [
    {
      title: "Risk Mitigation",
      description: "Identify and address potential IT risks before they impact your operations or compromise sensitive government data."
    },
    {
      title: "Resource Optimization",
      description: "Maximize the value of your IT investments by ensuring systems and processes are operating at peak efficiency."
    },
    {
      title: "Stakeholder Confidence",
      description: "Build trust with citizens, other agencies, and oversight committees through demonstrated commitment to IT excellence."
    },
    {
      title: "Knowledge Transfer",
      description: "Our experts work alongside your team, transferring valuable skills and insights throughout the audit process."
    },
    {
      title: "Continuous Improvement",
      description: "Establish frameworks for ongoing monitoring and enhancement of your IT systems and processes."
    },
    {
      title: "Customized Solutions",
      description: "Receive recommendations tailored specifically to your agency's unique needs, constraints, and objectives."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Benefits of Our IT Audit Services</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Discover how our specialized IT audit services can help your government agency enhance security, improve compliance, and optimize performance.
            </p>
          </div>
        </div>
        
        <BenefitSection />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Benefits</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive IT audit services provide numerous advantages for government agencies beyond the core benefits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 ml-8">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
                  <p className="text-gray-700 mb-4">
                    GovTech IAD-SS brings together a team of certified IT auditors with specialized experience in government systems and processes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Certified Information Systems Auditors (CISA)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Government IT infrastructure specialists</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Security and compliance experts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                      <span>Process optimization consultants</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Our Methodology</h3>
                  <p className="text-gray-600 mb-4">
                    We follow a comprehensive, standards-based approach that ensures thorough evaluation while minimizing disruption to your operations.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span className="font-medium">Based on international standards (ISO 27001, COBIT)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span className="font-medium">Aligned with government regulations</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span className="font-medium">Tailored to public sector requirements</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span className="font-medium">Continually updated with emerging best practices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Benefits;
