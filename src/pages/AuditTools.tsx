import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Search, 
  FileText, 
  BarChart3, 
  Database, 
  Globe, 
  Settings,
  Zap,
  Eye,
  CheckCircle,
  ExternalLink,
  Download
} from "lucide-react";

const AuditTools = () => {
  const toolCategories = [
    {
      category: "Security Assessment",
      icon: Shield,
      color: "text-red-500",
      tools: [
        { 
          name: "Nessus", 
          description: "Comprehensive vulnerability scanning and assessment platform", 
          type: "Commercial",
          vendor: "Tenable",
          features: ["Vulnerability Detection", "Compliance Scanning", "Web Application Testing", "Malware Detection"]
        },
        { 
          name: "Qualys VMDR", 
          description: "Cloud-based vulnerability management and detection response", 
          type: "Commercial",
          vendor: "Qualys",
          features: ["Continuous Monitoring", "Asset Discovery", "Patch Management", "Threat Detection"]
        },
        { 
          name: "Rapid7 InsightVM", 
          description: "Real-time vulnerability assessment and remediation", 
          type: "Commercial",
          vendor: "Rapid7",
          features: ["Risk Prioritization", "Remediation Analytics", "Integration APIs", "Compliance Reporting"]
        },
        { 
          name: "OpenVAS", 
          description: "Open-source vulnerability scanner and management solution", 
          type: "Open Source",
          vendor: "Greenbone",
          features: ["Network Scanning", "Web Application Testing", "Custom Policies", "Reporting Dashboard"]
        }
      ]
    },
    {
      category: "Analytics & Monitoring",
      icon: BarChart3,
      color: "text-blue-500",
      tools: [
        { 
          name: "Splunk Enterprise", 
          description: "Security information and event management platform", 
          type: "Commercial",
          vendor: "Splunk",
          features: ["Log Analysis", "Real-time Monitoring", "Machine Learning", "Custom Dashboards"]
        },
        { 
          name: "IBM QRadar", 
          description: "Security intelligence and analytics platform", 
          type: "Commercial",
          vendor: "IBM",
          features: ["Threat Detection", "Incident Response", "Compliance Reporting", "Network Monitoring"]
        },
        { 
          name: "ELK Stack", 
          description: "Elasticsearch, Logstash, and Kibana for data analysis", 
          type: "Open Source",
          vendor: "Elastic",
          features: ["Search & Analytics", "Data Visualization", "Log Processing", "Real-time Analysis"]
        },
        { 
          name: "Tableau", 
          description: "Advanced data visualization and business intelligence", 
          type: "Commercial",
          vendor: "Salesforce",
          features: ["Interactive Dashboards", "Data Modeling", "Statistical Analysis", "Collaboration Tools"]
        }
      ]
    },
    {
      category: "Compliance Management",
      icon: FileText,
      color: "text-green-500",
      tools: [
        { 
          name: "RSA Archer", 
          description: "Integrated governance, risk and compliance platform", 
          type: "Commercial",
          vendor: "RSA Security",
          features: ["Risk Assessment", "Policy Management", "Audit Management", "Regulatory Compliance"]
        },
        { 
          name: "ServiceNow GRC", 
          description: "Integrated risk management and compliance automation", 
          type: "Commercial",
          vendor: "ServiceNow",
          features: ["Policy Automation", "Risk Monitoring", "Audit Workflows", "Compliance Tracking"]
        },
        { 
          name: "NIST Cybersecurity Framework", 
          description: "Risk management framework and implementation guidance", 
          type: "Framework",
          vendor: "NIST",
          features: ["Risk Assessment", "Security Controls", "Implementation Guide", "Maturity Model"]
        },
        { 
          name: "COBIT 2019", 
          description: "IT governance and management framework", 
          type: "Framework",
          vendor: "ISACA",
          features: ["Governance Objectives", "Management Practices", "Design Factors", "Performance Management"]
        }
      ]
    },
    {
      category: "Data Analysis",
      icon: Database,
      color: "text-purple-500",
      tools: [
        { 
          name: "ACL Analytics", 
          description: "Data analytics software for audit and compliance", 
          type: "Commercial",
          vendor: "Galvanize",
          features: ["Data Import", "Statistical Analysis", "Fraud Detection", "Audit Sampling"]
        },
        { 
          name: "IDEA Data Analysis", 
          description: "Comprehensive data analysis tool for auditors", 
          type: "Commercial",
          vendor: "CaseWare",
          features: ["Data Mining", "Trend Analysis", "Exception Testing", "Visualization"]
        },
        { 
          name: "Power BI", 
          description: "Business analytics and data visualization platform", 
          type: "Commercial",
          vendor: "Microsoft",
          features: ["Interactive Reports", "Real-time Dashboards", "Data Modeling", "AI Insights"]
        },
        { 
          name: "R Statistical Software", 
          description: "Open-source programming language for statistical computing", 
          type: "Open Source",
          vendor: "R Foundation",
          features: ["Statistical Analysis", "Data Visualization", "Machine Learning", "Custom Scripts"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Common IT Audit Tools"
          description="Categorized tools for security assessment, analytics, and compliance management"
          backgroundImage="/lovable-uploads/c88091f9-71d1-4c0e-943f-35759205b3fd.png"
        />

        {/* Tools Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Professional Audit Tool Categories</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive collection of industry-standard tools for conducting thorough IT audits, 
                  from vulnerability assessments to compliance monitoring and data analytics.
                </p>
              </div>

              <Tabs defaultValue="security" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="security">Security Assessment</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics & Monitoring</TabsTrigger>
                  <TabsTrigger value="compliance">Compliance Management</TabsTrigger>
                  <TabsTrigger value="data">Data Analysis</TabsTrigger>
                </TabsList>

                {toolCategories.map((category, categoryIndex) => (
                  <TabsContent 
                    key={categoryIndex} 
                    value={category.category.toLowerCase().split(' ')[0]} 
                    className="mt-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.tools.map((tool, toolIndex) => (
                        <Card key={toolIndex} className="hover:shadow-lg transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex items-center">
                                <category.icon className={`${category.color} mr-3 flex-shrink-0`} size={24} />
                                <div>
                                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                                  <p className="text-sm text-gray-500">{tool.vendor}</p>
                                </div>
                              </div>
                              <Badge variant={tool.type === "Commercial" ? "default" : tool.type === "Open Source" ? "secondary" : "outline"}>
                                {tool.type}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="mb-4">
                              {tool.description}
                            </CardDescription>
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                              <div className="grid grid-cols-1 gap-1">
                                {tool.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center text-sm">
                                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                    <span className="text-gray-600">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Tool Selection Guide */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Tool Selection Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 text-blue-500 mr-2" />
                      Commercial Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Professional support and documentation</li>
                      <li>• Regular updates and security patches</li>
                      <li>• Advanced features and integrations</li>
                      <li>• Compliance with industry standards</li>
                      <li>• Vendor-provided training and certification</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-5 h-5 text-green-500 mr-2" />
                      Open Source Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Cost-effective implementation</li>
                      <li>• Customizable and extensible</li>
                      <li>• Community-driven development</li>
                      <li>• Transparent security model</li>
                      <li>• Educational and learning value</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Recommendations */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Implementation Best Practices</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg">
                  <Eye className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Assess Requirements</h3>
                  <p className="text-sm text-gray-600">Evaluate organizational needs, budget, and technical capabilities before tool selection</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <Zap className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Pilot Testing</h3>
                  <p className="text-sm text-gray-600">Conduct proof-of-concept testing with key stakeholders before full deployment</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <Settings className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Integration Planning</h3>
                  <p className="text-sm text-gray-600">Ensure tools integrate with existing systems and workflows for maximum efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Selecting the Right Tools?</h2>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Our experts can help you evaluate and implement the most suitable audit tools for your organization's specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Get Tool Recommendations</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/thought-leadership">Back to Thought Leadership</Link>
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