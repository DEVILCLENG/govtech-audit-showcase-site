import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Search, 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Target, 
  BarChart3, 
  Database, 
  Globe, 
  Users, 
  BookOpen,
  Lightbulb,
  Activity,
  Zap,
  Eye,
  Brain,
  Settings
} from "lucide-react";

const ThoughtLeadership = () => {
  const riskMetrics = [
    { category: "Critical", count: 12, percentage: 15, color: "bg-red-500" },
    { category: "High", count: 28, percentage: 35, color: "bg-orange-500" },
    { category: "Medium", count: 32, percentage: 40, color: "bg-yellow-500" },
    { category: "Low", count: 8, percentage: 10, color: "bg-green-500" }
  ];

  const auditTools = [
    {
      category: "Security Assessment",
      tools: [
        { name: "Nessus", description: "Vulnerability scanning and assessment", type: "Commercial" },
        { name: "Qualys VMDR", description: "Cloud-based vulnerability management", type: "Commercial" },
        { name: "Rapid7 InsightVM", description: "Real-time vulnerability assessment", type: "Commercial" },
        { name: "OpenVAS", description: "Open-source vulnerability scanner", type: "Open Source" }
      ]
    },
    {
      category: "Analytics & Monitoring",
      tools: [
        { name: "Splunk", description: "Security information and event management", type: "Commercial" },
        { name: "IBM QRadar", description: "Security intelligence platform", type: "Commercial" },
        { name: "ELK Stack", description: "Elasticsearch, Logstash, and Kibana", type: "Open Source" },
        { name: "Tableau", description: "Data visualization and analytics", type: "Commercial" }
      ]
    },
    {
      category: "Compliance Management",
      tools: [
        { name: "RSA Archer", description: "Governance, risk and compliance platform", type: "Commercial" },
        { name: "ServiceNow GRC", description: "Integrated risk management", type: "Commercial" },
        { name: "NIST Cybersecurity Framework", description: "Risk management framework", type: "Framework" },
        { name: "COBIT 2019", description: "IT governance and management framework", type: "Framework" }
      ]
    }
  ];

  const emergingThreats = [
    {
      title: "AI-Powered Attacks",
      risk: "High",
      description: "Sophisticated attacks using machine learning to bypass traditional security measures",
      mitigation: "Implement AI-driven defense systems and enhanced behavioral analytics"
    },
    {
      title: "Supply Chain Vulnerabilities",
      risk: "Critical",
      description: "Third-party software and hardware compromises affecting entire ecosystems",
      mitigation: "Enhanced vendor assessment and continuous supply chain monitoring"
    },
    {
      title: "Cloud Misconfiguration",
      risk: "High",
      description: "Improper cloud settings leading to data exposure and unauthorized access",
      mitigation: "Automated configuration monitoring and cloud security posture management"
    },
    {
      title: "Quantum Computing Threats",
      risk: "Medium",
      description: "Future quantum capabilities potentially breaking current encryption standards",
      mitigation: "Migration to quantum-resistant cryptographic algorithms"
    }
  ];

  const frameworks = [
    {
      name: "IIA International Standards",
      description: "Professional practices framework for internal auditing",
      components: ["Attribute Standards", "Performance Standards", "Implementation Standards"],
      focus: "Global internal audit standards and best practices"
    },
    {
      name: "NIST Cybersecurity Framework",
      description: "Risk-based approach to managing cybersecurity risk",
      components: ["Identify", "Protect", "Detect", "Respond", "Recover"],
      focus: "Cybersecurity risk management"
    },
    {
      name: "ISO 27001/27002",
      description: "Information security management systems",
      components: ["Security Policy", "Risk Management", "Asset Management", "Access Control"],
      focus: "Information security management"
    },
    {
      name: "COBIT 2019",
      description: "Governance and management of enterprise IT",
      components: ["Governance Objectives", "Management Objectives", "Design Factors"],
      focus: "IT governance and management"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Thought Leadership"
          description="Advanced IT audit methodologies, tools, and insights for government agencies"
          backgroundImage="/lovable-uploads/c88091f9-71d1-4c0e-943f-35759205b3fd.png"
        />

        {/* Navigation Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Professional IT Audit Resources</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Access comprehensive audit methodologies, tools, insights, and frameworks designed for government IT environments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 text-blue-500" size={24} />
                      Annual Audit Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Risk-based methodology with detailed process steps for comprehensive audit planning and resource allocation.</p>
                    <Button asChild>
                      <Link to="/annual-audit-plan">Explore Methodology</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="mr-2 text-green-500" size={24} />
                      IT Audit Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Categorized tools for security assessment, analytics, and compliance management across government systems.</p>
                    <Button asChild>
                      <Link to="/audit-tools">View Tools</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Activity className="mr-2 text-orange-500" size={24} />
                      Issues Dashboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Real-time analysis of audit findings with risk metrics and actionable solutions for immediate response.</p>
                    <Button asChild>
                      <Link to="/issues-dashboard">Access Dashboard</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="mr-2 text-purple-500" size={24} />
                      Knowledge Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Emerging patterns, challenges, cyber threats, and strategic opportunities in government IT audit.</p>
                    <Button asChild>
                      <Link to="/knowledge-management">Explore Intelligence</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="mr-2 text-indigo-500" size={24} />
                      IIA Frameworks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">International standards and methodologies including NIST, ISO 27001, and COBIT for comprehensive audits.</p>
                    <Button asChild>
                      <Link to="/iia-frameworks">View Standards</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 text-blue-600" size={24} />
                      Integrated Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Comprehensive audit strategy combining all methodologies for maximum effectiveness and coverage.</p>
                    <Button variant="outline" asChild>
                      <Link to="/quote">Request Consultation</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Enhance Your IT Audit Capabilities?</h2>
            <p className="text-xl mb-6 opacity-90">
              Connect with our experts to discuss advanced audit methodologies and tools
            </p>
            <Button variant="secondary" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThoughtLeadership;