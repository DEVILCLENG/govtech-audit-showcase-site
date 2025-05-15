
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
  category: "core" | "specialized";
}

// All audit services
export const allServices: Service[] = [
  {
    title: "Accounts & Access Management",
    description: "Comprehensive assessment of privileged access controls and user access management",
    icon: UserCheck,
    features: [
      "Privileged access management evaluation",
      "User access management controls",
      "Account validation and disablement processes",
      "Central Account Management (CAM) review"
    ],
    category: "core"
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
    ],
    category: "core"
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
    ],
    category: "core"
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
    ],
    category: "core"
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
    ],
    category: "core"
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
    ],
    category: "core"
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
    ],
    category: "core"
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
    ],
    category: "core"
  },
  {
    title: "ICT System & Secret System Audit",
    description: "Technical Thematic Audits by Systems and Organisation controls",
    icon: FileSearch,
    features: [
      "Secret system controls assessment",
      "System configuration review",
      "Organizational control evaluation",
      "Technical control verification"
    ],
    category: "specialized"
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
    category: "specialized"
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
    category: "specialized"
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
    category: "specialized"
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
    category: "specialized"
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
    category: "specialized"
  }
];
