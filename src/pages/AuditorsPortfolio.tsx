
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, FileCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AuditorsPortfolio = () => {
  const auditors = [
    {
      name: "Sarah Chen",
      title: "Lead IT Security Auditor",
      certifications: ["CISA", "CISSP", "ISO 27001 LA"],
      expertise: ["Network Security", "Vulnerability Assessment", "Risk Management"],
      yearsExperience: 12,
      projects: 87,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Michael Johnson",
      title: "Senior Compliance Auditor",
      certifications: ["CISA", "CRISC", "ITIL"],
      expertise: ["Regulatory Compliance", "Internal Controls", "IT Governance"],
      yearsExperience: 9,
      projects: 65,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Priya Nair",
      title: "IT Infrastructure Auditor",
      certifications: ["CISA", "CCNA", "CompTIA Security+"],
      expertise: ["Cloud Infrastructure", "Systems Architecture", "Disaster Recovery"],
      yearsExperience: 7,
      projects: 42,
      image: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Audit Professionals</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Meet our team of certified IT audit specialists with extensive experience working with government agencies.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {auditors.map((auditor, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={auditor.image} 
                    alt={auditor.name} 
                    className="w-full h-52 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{auditor.name}</h3>
                    <p className="text-gray-600 font-medium mb-4">{auditor.title}</p>
                    
                    <div className="flex items-center mb-3">
                      <Award className="text-primary mr-2" size={18} />
                      <span className="text-sm font-medium">Certifications:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {auditor.certifications.map((cert, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-md">
                          {cert}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <FileCheck className="text-primary mr-2" size={18} />
                      <span className="text-sm font-medium">Areas of Expertise:</span>
                    </div>
                    <ul className="text-sm text-gray-600 mb-4 ml-6 list-disc">
                      {auditor.expertise.map((area, idx) => (
                        <li key={idx}>{area}</li>
                      ))}
                    </ul>
                    
                    <div className="flex justify-between mt-6 pt-4 border-t border-gray-200">
                      <div>
                        <span className="text-primary text-xl font-bold">{auditor.yearsExperience}</span>
                        <p className="text-xs text-gray-500">Years Experience</p>
                      </div>
                      <div>
                        <span className="text-primary text-xl font-bold">{auditor.projects}</span>
                        <p className="text-xs text-gray-500">Projects Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Why Choose Our Auditors?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Government Experience</h3>
                  <p className="text-gray-600">Our auditors specialize in government IT systems and understand their unique requirements and challenges.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certified Professionals</h3>
                  <p className="text-gray-600">All our auditors hold industry-recognized certifications and stay updated with the latest standards.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">Our team has successfully completed hundreds of IT audits across different government agencies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to work with our expert auditors?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our audit professionals can help your agency improve security, compliance, and performance.
            </p>
            <Button asChild size="lg">
              <Link to="/quote" className="flex items-center">
                Request a Quote <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AuditorsPortfolio;
