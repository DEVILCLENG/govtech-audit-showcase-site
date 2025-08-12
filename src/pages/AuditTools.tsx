import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, BarChart3, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuditTools = () => {
  const auditTools = [
    {
      category: "Security Assessment Tools",
      icon: <Shield className="mr-2 text-red-500" size={24} />,
      description: "Comprehensive vulnerability scanning and security assessment platforms",
      tools: [
        { 
          name: "Nessus Professional", 
          description: "Industry-leading vulnerability scanner with extensive plugin database and compliance checking capabilities", 
          type: "Commercial",
          features: ["Vulnerability scanning", "Compliance auditing", "Web application testing", "Network discovery"]
        },
        { 
          name: "Qualys VMDR", 
          description: "Cloud-based vulnerability management, detection, and response platform with real-time insights", 
          type: "Commercial",
          features: ["Cloud-native scanning", "Asset inventory", "Threat prioritization", "Patch management"]
        },
        { 
          name: "Rapid7 InsightVM", 
          description: "Real-time vulnerability assessment with risk scoring and remediation guidance", 
          type: "Commercial",
          features: ["Live dashboards", "Risk scoring", "Remediation workflows", "Integration APIs"]
        },
        { 
          name: "OpenVAS", 
          description: "Open-source vulnerability scanner with comprehensive testing capabilities", 
          type: "Open Source",
          features: ["Network vulnerability testing", "Configuration auditing", "Custom scanning", "Reporting tools"]
        }
      ]
    },
    {
      category: "Analytics & Monitoring",
      icon: <BarChart3 className="mr-2 text-blue-500" size={24} />,
      description: "Advanced analytics platforms for security monitoring and data analysis",
      tools: [
        { 
          name: "Splunk Enterprise Security", 
          description: "Security information and event management with advanced analytics and machine learning", 
          type: "Commercial",
          features: ["SIEM capabilities", "Machine learning", "Threat hunting", "Incident response"]
        },
        { 
          name: "IBM QRadar", 
          description: "Security intelligence platform with integrated threat detection and response", 
          type: "Commercial",
          features: ["Threat detection", "Network insights", "User behavior analytics", "Compliance reporting"]
        },
        { 
          name: "ELK Stack", 
          description: "Elasticsearch, Logstash, and Kibana for centralized logging and analysis", 
          type: "Open Source",
          features: ["Log aggregation", "Real-time analysis", "Data visualization", "Search capabilities"]
        },
        { 
          name: "Tableau", 
          description: "Data visualization and business intelligence platform for audit analytics", 
          type: "Commercial",
          features: ["Interactive dashboards", "Data storytelling", "Advanced analytics", "Collaboration tools"]
        }
      ]
    },
    {
      category: "Compliance Management",
      icon: <CheckCircle className="mr-2 text-green-500" size={24} />,
      description: "Governance, risk, and compliance platforms for regulatory adherence",
      tools: [
        { 
          name: "RSA Archer", 
          description: "Integrated governance, risk and compliance platform with workflow automation", 
          type: "Commercial",
          features: ["Risk management", "Policy management", "Audit management", "Workflow automation"]
        },
        { 
          name: "ServiceNow GRC", 
          description: "Integrated risk management with policy, audit, and compliance capabilities", 
          type: "Commercial",
          features: ["Policy automation", "Risk assessment", "Audit planning", "Compliance tracking"]
        },
        { 
          name: "NIST Cybersecurity Framework", 
          description: "Risk management framework for improving cybersecurity posture", 
          type: "Framework",
          features: ["Risk identification", "Protection strategies", "Detection methods", "Response planning"]
        },
        { 
          name: "COBIT 2019", 
          description: "IT governance and management framework for enterprise technology", 
          type: "Framework",
          features: ["Governance principles", "Management objectives", "Design factors", "Performance metrics"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="IT Audit Tools"
          description="Comprehensive toolkit for security assessment, analytics, and compliance management"
          backgroundImage="/lovable-uploads/c88091f9-71d1-4c0e-943f-35759205b3fd.png"
        />

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Button variant="outline" asChild>
                <Link to="/thought-leadership" className="flex items-center">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Thought Leadership
                </Link>
              </Button>
            </div>

            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Professional Audit Toolkit</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive suite of tools enables thorough security assessments, advanced analytics, and effective compliance management across government IT environments.
                </p>
              </div>

              {auditTools.map((category, index) => (
                <div key={index} className="space-y-6">
                  <Card className="border-2 border-gray-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        {category.icon}
                        {category.category}
                      </CardTitle>
                      <p className="text-gray-600">{category.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {category.tools.map((tool, toolIndex) => (
                          <Card key={toolIndex} className="border border-gray-200 hover:shadow-md transition-shadow">
                            <CardHeader>
                              <div className="flex items-center justify-between mb-2">
                                <CardTitle className="text-lg">{tool.name}</CardTitle>
                                <Badge 
                                  variant={
                                    tool.type === "Commercial" ? "default" : 
                                    tool.type === "Open Source" ? "secondary" : 
                                    "outline"
                                  }
                                >
                                  {tool.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">{tool.description}</p>
                            </CardHeader>
                            <CardContent>
                              <div>
                                <h4 className="font-semibold mb-2">Key Features:</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-gray-600">
                                  {tool.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                      <CheckCircle className="mr-2 text-green-500 flex-shrink-0" size={14} />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardHeader>
                  <CardTitle>Tool Selection Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-blue-900">Technical Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Comprehensive coverage capabilities</li>
                        <li>• Integration with existing systems</li>
                        <li>• Scalability and performance</li>
                        <li>• Real-time monitoring support</li>
                        <li>• Automated reporting features</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-purple-900">Compliance Factors</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Government security standards</li>
                        <li>• Regulatory requirement support</li>
                        <li>• Audit trail capabilities</li>
                        <li>• Data privacy compliance</li>
                        <li>• Industry certification status</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-green-900">Operational Considerations</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Total cost of ownership</li>
                        <li>• Training and support needs</li>
                        <li>• Vendor stability and roadmap</li>
                        <li>• Community and ecosystem</li>
                        <li>• Implementation complexity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Tool Integration Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-3">1</div>
                      <h4 className="font-semibold mb-2">Assessment</h4>
                      <p className="text-sm text-gray-600">Evaluate current tool landscape and identify gaps</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-3">2</div>
                      <h4 className="font-semibold mb-2">Selection</h4>
                      <p className="text-sm text-gray-600">Choose tools based on requirements and compatibility</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-3">3</div>
                      <h4 className="font-semibold mb-2">Integration</h4>
                      <p className="text-sm text-gray-600">Implement unified workflows and data sharing</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-3">4</div>
                      <h4 className="font-semibold mb-2">Optimization</h4>
                      <p className="text-sm text-gray-600">Continuously improve tool effectiveness and efficiency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Selecting the Right Tools?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experts can help you evaluate, select, and implement the most effective audit tools for your specific requirements and environment.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/quote">Request Tool Assessment</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Speak with Experts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AuditTools;