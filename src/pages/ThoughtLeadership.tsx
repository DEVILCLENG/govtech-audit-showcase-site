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

        {/* Navigation Tabs */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="methodology" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-8">
                <TabsTrigger value="methodology">Annual Audit Plan</TabsTrigger>
                <TabsTrigger value="tools">IT Audit Tools</TabsTrigger>
                <TabsTrigger value="dashboard">Issues Dashboard</TabsTrigger>
                <TabsTrigger value="knowledge">Knowledge Management</TabsTrigger>
                <TabsTrigger value="frameworks">IIA Frameworks</TabsTrigger>
              </TabsList>

              {/* Annual Audit Plan Methodology */}
              <TabsContent value="methodology">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Annual Audit Plan Methodology</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Our risk-based approach ensures comprehensive coverage of critical areas while optimizing resource allocation
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Target className="mr-2 text-blue-500" size={24} />
                          Risk Assessment
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Identify key business processes</li>
                          <li>• Evaluate inherent and residual risks</li>
                          <li>• Assess control effectiveness</li>
                          <li>• Prioritize audit areas</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-green-500">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Settings className="mr-2 text-green-500" size={24} />
                          Resource Planning
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Allocate skilled auditors</li>
                          <li>• Determine audit duration</li>
                          <li>• Schedule audit activities</li>
                          <li>• Plan follow-up reviews</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-purple-500">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Activity className="mr-2 text-purple-500" size={24} />
                          Continuous Monitoring
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Real-time risk monitoring</li>
                          <li>• Quarterly plan reviews</li>
                          <li>• Emerging risk assessment</li>
                          <li>• Plan adjustments</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-blue-50">
                    <CardHeader>
                      <CardTitle>Risk-Based Audit Planning Process</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-2">1</div>
                          <h4 className="font-semibold">Risk Universe</h4>
                          <p className="text-sm text-gray-600">Identify all auditable areas</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-2">2</div>
                          <h4 className="font-semibold">Risk Assessment</h4>
                          <p className="text-sm text-gray-600">Evaluate and score risks</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-2">3</div>
                          <h4 className="font-semibold">Prioritization</h4>
                          <p className="text-sm text-gray-600">Rank audit priorities</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-2">4</div>
                          <h4 className="font-semibold">Plan Creation</h4>
                          <p className="text-sm text-gray-600">Develop annual schedule</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* IT Audit Tools */}
              <TabsContent value="tools">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">IT Audit Tools</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Comprehensive toolkit for security assessment, analytics, and compliance management
                    </p>
                  </div>

                  {auditTools.map((category, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          {index === 0 && <Shield className="mr-2 text-red-500" size={24} />}
                          {index === 1 && <BarChart3 className="mr-2 text-blue-500" size={24} />}
                          {index === 2 && <CheckCircle className="mr-2 text-green-500" size={24} />}
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.tools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="border rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">{tool.name}</h4>
                                <Badge variant={tool.type === "Commercial" ? "default" : tool.type === "Open Source" ? "secondary" : "outline"}>
                                  {tool.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600">{tool.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Issues Dashboard */}
              <TabsContent value="dashboard">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Issues Dashboard</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Real-time analysis of audit findings with risk metrics and actionable solutions
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {riskMetrics.map((metric, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{metric.category} Risk</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-3xl font-bold mb-2">{metric.count}</div>
                          <Progress value={metric.percentage} className="mb-2" />
                          <p className="text-sm text-gray-600">{metric.percentage}% of total issues</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="mr-2 text-orange-500" size={24} />
                        Recent Critical Findings
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                          <div className="w-3 h-3 rounded-full bg-red-500 mt-2"></div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-red-900">Privileged Access Management</h4>
                            <p className="text-red-700 text-sm">Excessive administrative privileges identified across multiple systems</p>
                            <p className="text-red-600 text-xs mt-1">Recommendation: Implement principle of least privilege</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                          <div className="w-3 h-3 rounded-full bg-orange-500 mt-2"></div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-orange-900">Patch Management</h4>
                            <p className="text-orange-700 text-sm">Critical security patches pending for 45+ days</p>
                            <p className="text-orange-600 text-xs mt-1">Recommendation: Accelerate patch deployment process</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                          <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2"></div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-yellow-900">Data Encryption</h4>
                            <p className="text-yellow-700 text-sm">Sensitive data transmission without adequate encryption</p>
                            <p className="text-yellow-600 text-xs mt-1">Recommendation: Implement end-to-end encryption</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Knowledge Management */}
              <TabsContent value="knowledge">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">Knowledge Management</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      Emerging patterns, challenges, cyber threats, and opportunities in IT audit
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Brain className="mr-2 text-purple-500" size={24} />
                          Emerging Patterns
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="border-l-4 border-l-blue-500 pl-4">
                            <h4 className="font-semibold">Cloud-First Strategies</h4>
                            <p className="text-sm text-gray-600">Government agencies rapidly adopting cloud services, requiring new audit approaches</p>
                          </div>
                          <div className="border-l-4 border-l-green-500 pl-4">
                            <h4 className="font-semibold">Zero Trust Architecture</h4>
                            <p className="text-sm text-gray-600">Shift towards "never trust, always verify" security models</p>
                          </div>
                          <div className="border-l-4 border-l-orange-500 pl-4">
                            <h4 className="font-semibold">DevSecOps Integration</h4>
                            <p className="text-sm text-gray-600">Security embedded in development and operations processes</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Lightbulb className="mr-2 text-yellow-500" size={24} />
                          Opportunities
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="border-l-4 border-l-purple-500 pl-4">
                            <h4 className="font-semibold">AI-Enhanced Auditing</h4>
                            <p className="text-sm text-gray-600">Leveraging machine learning for anomaly detection and risk assessment</p>
                          </div>
                          <div className="border-l-4 border-l-teal-500 pl-4">
                            <h4 className="font-semibold">Continuous Auditing</h4>
                            <p className="text-sm text-gray-600">Real-time monitoring and assessment capabilities</p>
                          </div>
                          <div className="border-l-4 border-l-indigo-500 pl-4">
                            <h4 className="font-semibold">Cross-Agency Collaboration</h4>
                            <p className="text-sm text-gray-600">Shared intelligence and best practices across government</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="mr-2 text-red-500" size={24} />
                        Emerging Cyber Threats
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {emergingThreats.map((threat, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{threat.title}</h4>
                              <Badge variant={threat.risk === "Critical" ? "destructive" : threat.risk === "High" ? "default" : "secondary"}>
                                {threat.risk}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">{threat.description}</p>
                            <div className="bg-gray-50 p-3 rounded">
                              <p className="text-xs font-medium text-gray-700">Mitigation Strategy:</p>
                              <p className="text-xs text-gray-600">{threat.mitigation}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* IIA Frameworks */}
              <TabsContent value="frameworks">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">IIA Frameworks & Standards</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      International standards and methodologies for comprehensive IT audit practices
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {frameworks.map((framework, index) => (
                      <Card key={index} className="h-full">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <BookOpen className="mr-2 text-blue-500" size={24} />
                            {framework.name}
                          </CardTitle>
                          <CardDescription>{framework.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Key Components:</h4>
                              <ul className="space-y-1">
                                {framework.components.map((component, compIndex) => (
                                  <li key={compIndex} className="text-sm text-gray-600 flex items-center">
                                    <CheckCircle className="mr-2 text-green-500" size={16} />
                                    {component}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                              <p className="text-sm font-medium text-blue-900">Focus Area:</p>
                              <p className="text-sm text-blue-700">{framework.focus}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="mr-2 text-blue-600" size={24} />
                        Framework Integration Approach
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                            <Eye className="text-blue-600" size={24} />
                          </div>
                          <h4 className="font-semibold mb-2">Assessment</h4>
                          <p className="text-sm text-gray-600">Evaluate current practices against international standards</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                            <Target className="text-purple-600" size={24} />
                          </div>
                          <h4 className="font-semibold mb-2">Alignment</h4>
                          <p className="text-sm text-gray-600">Align audit processes with relevant frameworks</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="text-green-600" size={24} />
                          </div>
                          <h4 className="font-semibold mb-2">Continuous Improvement</h4>
                          <p className="text-sm text-gray-600">Regular updates and enhancement of audit practices</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
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