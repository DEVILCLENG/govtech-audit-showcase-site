
import ServiceCard from "@/components/ServiceCard";
import { Shield, Server, Workflow, FileCheck, Bug, Briefcase } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      title: "Security Audit",
      description: "Comprehensive security assessment for your IT infrastructure and applications",
      icon: Shield,
      features: [
        "Vulnerability assessment",
        "Penetration testing",
        "Security controls review",
        "Risk mitigation strategies"
      ]
    },
    {
      title: "Infrastructure Audit",
      description: "Detailed evaluation of your IT infrastructure to ensure optimal performance",
      icon: Server,
      features: [
        "Hardware and software inventory",
        "Network configuration review",
        "Capacity planning assessment",
        "Disaster recovery evaluation"
      ]
    },
    {
      title: "Process Audit",
      description: "Optimization of your IT processes for better efficiency and compliance",
      icon: Workflow,
      features: [
        "ITIL compliance check",
        "Service delivery review",
        "Process efficiency analysis",
        "Improvement recommendations"
      ]
    },
    {
      title: "Compliance Audit",
      description: "Ensure your systems align with government and international standards",
      icon: FileCheck,
      features: [
        "Regulatory compliance check",
        "Policy implementation review",
        "Documentation assessment",
        "Compliance reporting"
      ]
    },
    {
      title: "Application Audit",
      description: "In-depth analysis of application security, performance, and functionality",
      icon: Bug,
      features: [
        "Code review",
        "Functionality testing",
        "Performance evaluation",
        "Security vulnerability scan"
      ]
    },
    {
      title: "Project Assurance",
      description: "Ensure your IT projects are on track, within budget, and delivering value",
      icon: Briefcase,
      features: [
        "Project governance review",
        "Risk assessment",
        "Quality assurance check",
        "Stakeholder management evaluation"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive IT audit services tailored specifically for government agencies. Our team of experts ensures your systems meet the highest standards of security, compliance, and efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
