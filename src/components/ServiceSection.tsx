
import ServiceCard from "@/components/ServiceCard";
import { Shield, UserCheck, FileCheck, Bug, Server, LifeBuoy, BadgeAlert, Cloud, Lock, Database } from "lucide-react";

const ServiceSection = () => {
  const services = [
    {
      title: "Accounts & Access Management",
      description: "Comprehensive assessment of privileged access controls and user access management",
      icon: UserCheck,
      features: [
        "Privileged access management evaluation",
        "User access management controls",
        "Account validation and disablement processes",
        "Central Account Management (CAM) review"
      ]
    },
    {
      title: "Security Monitoring",
      description: "Assessment of logging, monitoring, and anomaly detection processes for security events",
      icon: Shield,
      features: [
        "Privileged accounts activity logging",
        "Independent review verification",
        "Anomalous activity monitoring",
        "Automated Baseline Log Review (ABLR) implementation"
      ]
    },
    {
      title: "Vulnerability Management",
      description: "Evaluation of processes to identify, assess, and remediate security vulnerabilities",
      icon: Bug,
      features: [
        "Vulnerability identification and remediation",
        "Patch management assessment",
        "End-of-Service-Life (EOSL) monitoring",
        "Penetration testing and code reviews"
      ]
    },
    {
      title: "Infrastructure & Cloud Security",
      description: "Review of infrastructure design, cloud security controls and data protection measures",
      icon: Cloud,
      features: [
        "Network segmentation verification",
        "Firewall configuration assessment",
        "Remote administration security",
        "Cloud service provider evaluation"
      ]
    },
    {
      title: "Business Continuity",
      description: "Assessment of backup, recovery, and disaster planning processes",
      icon: Server,
      features: [
        "Backup and recovery plan testing",
        "Disaster Recovery Planning (DRP) review",
        "System redundancy verification",
        "Business Continuity Plan (BCP) alignment"
      ]
    },
    {
      title: "Third-Party Management",
      description: "Evaluation of third-party onboarding, monitoring and exit processes",
      icon: LifeBuoy,
      features: [
        "Vendor onboarding process assessment",
        "Periodic audit verification",
        "Performance monitoring review",
        "Exit plan adequacy evaluation"
      ]
    },
    {
      title: "Application Security",
      description: "Analysis of application design, secure coding practices and security by design",
      icon: Lock,
      features: [
        "Security by design implementation",
        "Secure coding practice assessment",
        "Security testing adequacy",
        "Interface vulnerability evaluation"
      ]
    },
    {
      title: "Data Security & Cryptography",
      description: "Review of data protection controls and cryptographic implementation",
      icon: Database,
      features: [
        "Data protection measures",
        "Cryptographic key management",
        "Encryption at rest and in transit",
        "Personal data protection assessment"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our IT Audit Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive IT audit services aligned with government standards and best practices. Our audits cover crucial areas to ensure your IT systems meet the highest security, compliance, and operational requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
