
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ClientSection from "@/components/ClientSection";
import TestimonialSection from "@/components/TestimonialSection";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const OurClients = () => {
  const caseStudies = [
    {
      title: "Infrastructure Security Assessment",
      client: "Agency 1",
      description: "Comprehensive security assessment of critical IT infrastructure, identifying vulnerabilities and providing remediation strategies.",
      outcome: "Enhanced security posture with 40% reduction in high-risk vulnerabilities."
    },
    {
      title: "Data Protection Compliance Audit",
      client: "Agency 2",
      description: "Evaluation of data protection practices and controls against regulatory requirements and industry standards.",
      outcome: "Achieved full compliance with Personal Data Protection requirements."
    },
    {
      title: "Cloud Migration Assurance",
      client: "Agency 3",
      description: "Audit of cloud migration strategy and implementation to ensure security, compliance, and operational efficiency.",
      outcome: "Successfully migrated critical applications with zero security incidents."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Our Clients" 
          description="We partner with government agencies across Singapore." 
        />

        <ClientSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto">
                See how our IT audit services have helped organizations strengthen their IT governance, risk management, and compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="border border-gray-200 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <span className="text-lg md:text-xl lg:text-2xl font-medium text-primary">{study.client}</span>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-1">{study.title}</h3>
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4">{study.description}</p>
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex items-center text-primary text-lg md:text-xl lg:text-2xl">
                        <span className="font-medium">Outcome:</span> 
                        <span className="ml-2">{study.outcome}</span>
                        <ChevronRight className="h-5 w-5 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default OurClients;
