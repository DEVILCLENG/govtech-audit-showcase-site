
import { 
  Shield, UserCheck, FileCheck, Bug, Server, LifeBuoy, 
  BadgeAlert, Cloud, Lock, Database, Terminal, FileCode, 
  Activity, FileSearch, FileText 
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  category: "what-we-offer";
}

// All audit services
export const allServices: Service[] = [
  {
    title: "ICT System Audit",
    description: "Technical Thematic Audits by Systems and Organisation controls",
    icon: FileSearch,
    features: [
      "Accounts & Access Management",
      "Security Monitoring",
      "Vulnerability Management",
      "Application Security",
      "Data Security & Cryptography",
      "Business Continuity",
      "Infrastructure and Cloud Security"
    ],
    category: "what-we-offer"
  },
  {
    title: "Secret System",
    description: "Full spectrum of IM8 requirements",
    icon: Shield,
    features: [
      "Secret system controls assessment",
      "Risk-based analytical testing and assessment",
      "IM8 Compliance verification"
    ],
    category: "what-we-offer"
  },
  {
    title: "CCOP",
    description: "Compliance audit on Critical Information Infrastructure (CII) systems against CSA",
    icon: Shield,
    features: [
      "CII system compliance verification",
      "CSA regulatory alignment",
      "Security control assessment",
      "Compliance gap analysis"
    ],
    category: "what-we-offer"
  },
  {
    title: "Data Analytics",
    description: "Automated Audit Testing of IT systems and controls",
    icon: Activity,
    features: [
      "Pattern recognition in large datasets",
      "Anomaly detection through automation",
      "Continuous control monitoring",
      "Risk-based analytical testing"
    ],
    category: "what-we-offer"
  },
  {
    title: "Pre-implementation Review",
    description: "Review of systems during ICT system development to comply with IM8 requirements",
    icon: FileCode,
    features: [
      "Early design phase security review",
      "IM8 compliance verification",
      "Security by design assessment",
      "Pre-deployment security validation"
    ],
    category: "what-we-offer"
  },
  {
    title: "Integrated Audit",
    description: "Partner with business auditors to test IT General controls and application controls",
    icon: FileText,
    features: [
      "Combined business and IT audit approach",
      "IT general control assessment",
      "Application control testing",
      "Cross-functional risk assessment"
    ],
    category: "what-we-offer"
  },
  {
    title: "Sudo Configurations Review",
    description: "Review of sudo configuration to assess use of wildcards, executable commands and permissive permissions",
    icon: Terminal,
    features: [
      "Privileged command assessment",
      "Wildcard usage evaluation",
      "Permission structure review",
      "Security configuration hardening"
    ],
    category: "what-we-offer"
  }
];
