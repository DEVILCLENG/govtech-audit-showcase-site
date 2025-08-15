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
  BookOpen, 
  Shield, 
  Globe, 
  Target, 
  CheckCircle, 
  FileText,
  BarChart3,
  Settings,
  Users,
  Award,
  ExternalLink,
  Download
} from "lucide-react";

const AuditFrameworks = () => {
  const frameworks = [
    {
      name: "IIA International Standards",
      description: "Professional practices framework for internal auditing",
      category: "Core Standards",
      issuer: "Institute of Internal Auditors",
      lastUpdated: "2022",
      components: [
        "Attribute Standards - Purpose, Authority, Responsibility",
        "Performance Standards - Managing, Planning, Performing",
        "Implementation Standards - Specific engagement types"
      ],
      focus: "Global internal audit standards and best practices",
      benefits: [
        "Universal professional standards",
        "Enhanced audit quality and consistency",
        "Professional development framework",
        "Stakeholder confidence building"
      ]
    },
    {
      name: "NIST Cybersecurity Framework",
      description: "Risk-based approach to managing cybersecurity risk",
      category: "Cybersecurity",
      issuer: "National Institute of Standards and Technology",
      lastUpdated: "2024",
      components: [
        "Identify - Asset management and risk assessment",
        "Protect - Access controls and data security",
        "Detect - Continuous monitoring and detection",
        "Respond - Incident response and communications",
        "Recover - Recovery planning and improvements"
      ],
      focus: "Cybersecurity risk management and resilience",
      benefits: [
        "Comprehensive cyber risk framework",
        "Industry-agnostic approach",
        "Regulatory alignment capability",
        "Continuous improvement focus"
      ]
    },
    {
      name: "ISO 27001/27002",
      description: "Information security management systems",
      category: "Information Security",
      issuer: "International Organization for Standardization",
      lastUpdated: "2022",
      components: [
        "Security Policy - Information security governance",
        "Risk Management - Risk assessment and treatment",
        "Asset Management - Information asset classification",
        "Access Control - Identity and access management",
        "Cryptography - Encryption and key management"
      ],
      focus: "Information security management and controls",
      benefits: [
        "International certification standard",
        "Systematic risk management",
        "Regulatory compliance support",
        "Continuous monitoring framework"
      ]
    },
    {
      name: "COBIT 2019",
      description: "Governance and management of enterprise IT",
      category: "IT Governance",
      issuer: "ISACA",
      lastUpdated: "2019",
      components: [
        "Governance Objectives - Strategic alignment",
        "Management Objectives - Operational excellence",
        "Design Factors - Customization guidance",
        "Performance Management - Metrics and KPIs"
      ],
      focus: "IT governance, management, and value creation",
      benefits: [
        "Holistic IT governance approach",
        "Business-IT alignment",
        "Risk and value optimization",
        "Stakeholder needs focus"
      ]
    },
    {
      name: "COSO Framework",
      description: "Internal control and enterprise risk management",
      category: "Risk Management",
      issuer: "Committee of Sponsoring Organizations",
      lastUpdated: "2023",
      components: [
        "Control Environment - Governance and culture",
        "Risk Assessment - Objective setting and identification",
        "Control Activities - Policies and procedures",
        "Information & Communication - Relevant information flow",
        "Monitoring Activities - Ongoing and separate evaluations"
      ],
      focus: "Internal control and enterprise risk management",
      benefits: [
        "Proven internal control framework",
        "Risk management integration",
        "Regulatory compliance support",
        "Organizational governance enhancement"
      ]
    },
    {
      name: "ITIL 4",
      description: "IT service management best practices",
      category: "Service Management",
      issuer: "AXELOS",
      lastUpdated: "2019",
      components: [
        "Service Value System - Holistic approach to service delivery",
        "Four Dimensions Model - Organizations, people, partners, value streams",
        "Guiding Principles - Core recommendations for service management",
        "Governance - Direction and control mechanisms"
      ],
      focus: "IT service management and value co-creation",
      benefits: [
        "Service-centric approach",
        "Digital transformation support",
        "Continuous improvement culture",
        "Stakeholder value focus"
      ]
    }
  ];

  const implementationGuide = [
    {
      phase: "Assessment & Planning",
      duration: "2-4 weeks",
      activities: [
        "Current state assessment",
        "Framework selection criteria",
        "Gap analysis execution",
        "Implementation roadmap development"
      ]
    },
    {
      phase: "Framework Customization",
      duration: "4-6 weeks", 
      activities: [
        "Organizational context mapping",
        "Control tailoring and design",
        "Policy and procedure development",
        "Training material preparation"
      ]
    },
    {
      phase: "Pilot Implementation",
      duration: "6-8 weeks",
      activities: [
        "Pilot scope definition",
        "Limited deployment execution",
        "Results monitoring and evaluation",
        "Adjustment and refinement"
      ]
    },
    {
      phase: "Full Deployment",
      duration: "12-16 weeks",
      activities: [
        "Organization-wide rollout",
        "Training and change management",
        "Monitoring and measurement",
        "Continuous improvement integration"
      ]
    }
  ];

  const frameworkComparison = [
    { criteria: "Scope", iia: "Internal Audit", nist: "Cybersecurity", iso: "Info Security", cobit: "IT Governance", coso: "Internal Control", itil: "Service Mgmt" },
    { criteria: "Industry Focus", iia: "All Industries", nist: "All Industries", iso: "All Industries", cobit: "IT-focused", coso: "All Industries", itil: "IT Services" },
    { criteria: "Certification", iia: "Yes", nist: "No", iso: "Yes", cobit: "Yes", coso: "No", itil: "Yes" },
    { criteria: "Complexity", iia: "Medium", nist: "Medium", iso: "High", cobit: "High", coso: "Medium", itil: "Medium" },
    { criteria: "Implementation Time", iia: "3-6 months", nist: "6-12 months", iso: "12-18 months", cobit: "12-24 months", coso: "6-12 months", itil: "6-12 months" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Internal Audit Frameworks"
          description="IIA standards, methodologies, and international frameworks for comprehensive audit excellence"
          backgroundImage="/lovable-uploads/c88091f9-71d1-4c0e-943f-35759205b3fd.png"
        />

        {/* Frameworks Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Professional Audit Frameworks</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive collection of internationally recognized frameworks and standards 
                  for establishing robust internal audit practices and governance structures.
                </p>
              </div>

              <Tabs defaultValue="frameworks" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                  <TabsTrigger value="implementation">Implementation</TabsTrigger>
                  <TabsTrigger value="comparison">Comparison</TabsTrigger>
                </TabsList>

                <TabsContent value="frameworks" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {frameworks.map((framework, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center">
                              <BookOpen className="w-6 h-6 text-blue-500 mr-3" />
                              <div>
                                <CardTitle className="text-lg">{framework.name}</CardTitle>
                                <p className="text-sm text-gray-500">{framework.issuer}</p>
                              </div>
                            </div>
                            <div className="flex flex-col items-end space-y-1">
                              <Badge variant="secondary" className="text-xs">
                                {framework.category}
                              </Badge>
                              <span className="text-xs text-gray-400">Updated {framework.lastUpdated}</span>
                            </div>
                          </div>
                          <CardDescription>{framework.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Key Components:</h4>
                              <ul className="space-y-1">
                                {framework.components.map((component, compIndex) => (
                                  <li key={compIndex} className="flex items-start text-sm">
                                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">{component}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 text-sm">Primary Benefits:</h4>
                              <div className="grid grid-cols-1 gap-1">
                                {framework.benefits.map((benefit, benefitIndex) => (
                                  <Badge key={benefitIndex} variant="outline" className="text-xs justify-start">
                                    {benefit}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="implementation" className="mt-8">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Target className="w-6 h-6 text-blue-500 mr-3" />
                          Framework Implementation Methodology
                        </CardTitle>
                        <CardDescription>
                          Systematic approach for implementing audit frameworks in your organization
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {implementationGuide.map((phase, index) => (
                            <div key={index} className="border-l-4 border-blue-500 pl-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">{phase.phase}</h4>
                                <Badge variant="outline">{phase.duration}</Badge>
                              </div>
                              <ul className="space-y-1">
                                {phase.activities.map((activity, actIndex) => (
                                  <li key={actIndex} className="flex items-start text-sm">
                                    <Settings className="w-3 h-3 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="comparison" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <BarChart3 className="w-6 h-6 text-blue-500 mr-3" />
                        Framework Comparison Matrix
                      </CardTitle>
                      <CardDescription>
                        Comparative analysis of major audit and governance frameworks
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2 font-semibold">Criteria</th>
                              <th className="text-left p-2 font-semibold">IIA</th>
                              <th className="text-left p-2 font-semibold">NIST</th>
                              <th className="text-left p-2 font-semibold">ISO 27001</th>
                              <th className="text-left p-2 font-semibold">COBIT</th>
                              <th className="text-left p-2 font-semibold">COSO</th>
                              <th className="text-left p-2 font-semibold">ITIL</th>
                            </tr>
                          </thead>
                          <tbody>
                            {frameworkComparison.map((row, index) => (
                              <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="p-2 font-medium">{row.criteria}</td>
                                <td className="p-2">{row.iia}</td>
                                <td className="p-2">{row.nist}</td>
                                <td className="p-2">{row.iso}</td>
                                <td className="p-2">{row.cobit}</td>
                                <td className="p-2">{row.coso}</td>
                                <td className="p-2">{row.itil}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Framework Selection Guide */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Framework Selection Guidelines</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 text-blue-500 mr-2" />
                      Organizational Needs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Assess current audit maturity level</li>
                      <li>• Identify regulatory requirements</li>
                      <li>• Evaluate resource availability</li>
                      <li>• Consider organizational culture</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 text-green-500 mr-2" />
                      Implementation Factors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Timeline and budget constraints</li>
                      <li>• Staff training requirements</li>
                      <li>• Technology infrastructure needs</li>
                      <li>• Change management capacity</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 text-purple-500 mr-2" />
                      Stakeholder Considerations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Board and management expectations</li>
                      <li>• External auditor requirements</li>
                      <li>• Regulatory body preferences</li>
                      <li>• Industry best practices</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Implement Framework Excellence?</h2>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Our experts can guide you through framework selection, customization, and implementation 
              to establish world-class audit practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Get Framework Consultation</Link>
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

export default AuditFrameworks;