import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle, Globe, Target, TrendingUp, Eye, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const IIAFrameworks = () => {
  const frameworks = [
    {
      name: "IIA International Standards for the Professional Practice of Internal Auditing",
      acronym: "IPPF",
      description: "Comprehensive framework defining the mandatory elements of the International Professional Practices Framework",
      category: "Core Standards",
      components: [
        "Attribute Standards (1000 series) - Purpose, authority, and responsibility of internal audit",
        "Performance Standards (2000 series) - Nature of internal audit activities and quality criteria",
        "Implementation Standards - Application of attribute and performance standards to specific engagements"
      ],
      focus: "Global internal audit standards and professional practices",
      keyBenefits: [
        "Establishes consistent global audit practices",
        "Provides quality assurance framework",
        "Enhances audit effectiveness and efficiency",
        "Supports professional development and certification"
      ],
      implementation: [
        "Conduct gap analysis against current practices",
        "Develop implementation roadmap and timeline",
        "Train audit staff on standards requirements",
        "Establish quality assurance processes"
      ]
    },
    {
      name: "NIST Cybersecurity Framework",
      acronym: "CSF",
      description: "Risk-based approach to managing cybersecurity risk across all sectors including government",
      category: "Cybersecurity",
      components: [
        "Identify - Asset management, business environment, governance, risk assessment",
        "Protect - Identity management, access control, awareness training, data security",
        "Detect - Anomalies and events detection, continuous monitoring",
        "Respond - Response planning, communications, analysis, mitigation",
        "Recover - Recovery planning, improvements, communications"
      ],
      focus: "Cybersecurity risk management and resilience",
      keyBenefits: [
        "Provides structured approach to cybersecurity",
        "Enables risk-based decision making",
        "Facilitates communication across stakeholders",
        "Supports compliance with multiple regulations"
      ],
      implementation: [
        "Assess current cybersecurity posture",
        "Define target cybersecurity profile",
        "Identify and prioritize gaps",
        "Develop action plan for improvement"
      ]
    },
    {
      name: "ISO/IEC 27001:2022 Information Security Management",
      acronym: "ISO 27001",
      description: "International standard for information security management systems (ISMS)",
      category: "Information Security",
      components: [
        "Information Security Policy - High-level direction and support",
        "Organization of Information Security - Internal organization and mobile devices",
        "Human Resource Security - Prior to employment, during employment, termination",
        "Asset Management - Responsibility for assets, information classification, media handling",
        "Access Control - Business requirements, user access management, system responsibilities",
        "Cryptography - Cryptographic controls implementation",
        "Physical and Environmental Security - Secure areas, equipment protection",
        "Operations Security - Operational procedures, protection from malware, backup",
        "Communications Security - Network security management, information transfer",
        "System Acquisition, Development and Maintenance - Security requirements, security in development",
        "Supplier Relationships - Information security in supplier relationships",
        "Information Security Incident Management - Management of incidents and improvements",
        "Information Security Aspects of Business Continuity Management",
        "Compliance - Compliance with legal requirements and security policies"
      ],
      focus: "Information security management and continuous improvement",
      keyBenefits: [
        "Systematic approach to managing sensitive information",
        "Risk-based information security management",
        "Enhanced customer and stakeholder confidence",
        "Improved information security posture"
      ],
      implementation: [
        "Define ISMS scope and boundaries",
        "Conduct information security risk assessment",
        "Develop risk treatment plan",
        "Implement security controls and monitoring"
      ]
    },
    {
      name: "COBIT 2019 - Control Objectives for Information Technologies",
      acronym: "COBIT",
      description: "Governance and management framework for enterprise information technology",
      category: "IT Governance",
      components: [
        "Governance System - Governance components and design factors",
        "Governance Framework - Governance and management objectives",
        "Design Factors - Enterprise strategy, goals, risk profile, IT issues, threat landscape",
        "Performance Management - Performance and conformance measurement",
        "Process Assessment - Capability and maturity assessment"
      ],
      focus: "IT governance, management, and value creation",
      keyBenefits: [
        "Aligns IT with business objectives",
        "Optimizes IT resource utilization",
        "Manages IT-related risks effectively",
        "Enables better decision making"
      ],
      implementation: [
        "Assess current IT governance maturity",
        "Define target governance objectives",
        "Design governance system",
        "Implement and monitor governance processes"
      ]
    },
    {
      name: "ITIL 4 - IT Infrastructure Library",
      acronym: "ITIL",
      description: "Framework for IT service management focusing on aligning IT services with business needs",
      category: "Service Management",
      components: [
        "Service Value System (SVS) - Core components and activities",
        "Four Dimensions of Service Management - Organizations and people, information and technology, partners and suppliers, value streams and processes",
        "Guiding Principles - Focus on value, start where you are, progress iteratively",
        "Governance - Direction, oversight, and decision-making",
        "Service Value Chain - Operating model for service providers",
        "Practices - Sets of organizational resources for performing work",
        "Continual Improvement - Recurring organizational activity"
      ],
      focus: "IT service management and customer value creation",
      keyBenefits: [
        "Improves IT service quality and efficiency",
        "Enhances customer satisfaction",
        "Optimizes costs and resources",
        "Supports digital transformation initiatives"
      ],
      implementation: [
        "Assess current service management practices",
        "Identify improvement opportunities",
        "Implement ITIL practices incrementally",
        "Measure and improve service performance"
      ]
    },
    {
      name: "COSO Enterprise Risk Management Framework",
      acronym: "COSO ERM",
      description: "Framework for enterprise risk management to help organizations manage risk and uncertainty",
      category: "Risk Management",
      components: [
        "Governance and Culture - Oversight, structures, and commitment to core values",
        "Strategy and Objective-Setting - Risk appetite and tolerance aligned with strategy",
        "Performance - Risk identification, assessment, and response",
        "Review and Revision - Assessment of performance and substantial change",
        "Information, Communication, and Reporting - Continuous communication about risk"
      ],
      focus: "Enterprise-wide risk management and strategic decision making",
      keyBenefits: [
        "Integrates risk management with strategy",
        "Improves risk-informed decision making",
        "Enhances organizational resilience",
        "Supports regulatory compliance"
      ],
      implementation: [
        "Establish risk governance structure",
        "Define risk appetite and tolerance",
        "Implement risk assessment processes",
        "Develop risk monitoring and reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="IIA Frameworks & Standards"
          description="International standards and methodologies for comprehensive IT audit practices"
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

            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Professional Standards & Frameworks</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive guide to international audit standards and frameworks that govern professional IT audit practices across government organizations.
                </p>
              </div>

              {/* Framework Integration Approach */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 mb-12">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 text-blue-600" size={24} />
                    Framework Integration Methodology
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                        <Eye className="text-blue-600" size={24} />
                      </div>
                      <h4 className="font-semibold mb-2">Assessment & Gap Analysis</h4>
                      <p className="text-sm text-gray-600">Comprehensive evaluation of current practices against international standards to identify improvement opportunities and compliance gaps</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                        <Target className="text-purple-600" size={24} />
                      </div>
                      <h4 className="font-semibold mb-2">Strategic Alignment</h4>
                      <p className="text-sm text-gray-600">Align audit processes with relevant frameworks while considering organizational context, risk profile, and strategic objectives</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="text-green-600" size={24} />
                      </div>
                      <h4 className="font-semibold mb-2">Continuous Enhancement</h4>
                      <p className="text-sm text-gray-600">Regular updates and enhancement of audit practices based on framework evolution and emerging best practices</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Frameworks Grid */}
              <div className="space-y-8">
                {frameworks.map((framework, index) => (
                  <Card key={index} className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <CardTitle className="flex items-center text-2xl mb-2">
                            <BookOpen className="mr-2 text-blue-500" size={24} />
                            {framework.name}
                          </CardTitle>
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="font-semibold text-lg text-blue-600">({framework.acronym})</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                              {framework.category}
                            </span>
                          </div>
                          <p className="text-gray-600">{framework.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-lg">Framework Components</h4>
                            <ul className="space-y-2">
                              {framework.components.map((component, compIndex) => (
                                <li key={compIndex} className="text-sm text-gray-700 flex items-start">
                                  <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-0.5" size={16} />
                                  {component}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-blue-900">Primary Focus Area</h4>
                            <p className="text-sm text-blue-700">{framework.focus}</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-lg">Key Benefits</h4>
                            <ul className="space-y-2">
                              {framework.keyBenefits.map((benefit, benIndex) => (
                                <li key={benIndex} className="text-sm text-gray-700 flex items-start">
                                  <TrendingUp className="mr-2 text-green-500 flex-shrink-0 mt-0.5" size={16} />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-green-900">Implementation Approach</h4>
                            <ul className="space-y-1">
                              {framework.implementation.map((step, stepIndex) => (
                                <li key={stepIndex} className="text-sm text-green-700 flex items-start">
                                  <span className="inline-block w-5 h-5 rounded-full bg-green-200 text-green-800 text-xs font-bold flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                                    {stepIndex + 1}
                                  </span>
                                  {step}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Framework Mapping */}
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle>Framework Integration Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 p-3 text-left bg-gray-100">Framework</th>
                          <th className="border border-gray-300 p-3 text-center bg-gray-100">Governance</th>
                          <th className="border border-gray-300 p-3 text-center bg-gray-100">Risk Management</th>
                          <th className="border border-gray-300 p-3 text-center bg-gray-100">Security</th>
                          <th className="border border-gray-300 p-3 text-center bg-gray-100">Compliance</th>
                          <th className="border border-gray-300 p-3 text-center bg-gray-100">Operations</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">IIA IPPF</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">NIST CSF</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">○</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">ISO 27001</td>
                          <td className="border border-gray-300 p-3 text-center">○</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">COBIT 2019</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">○</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">ITIL 4</td>
                          <td className="border border-gray-300 p-3 text-center">○</td>
                          <td className="border border-gray-300 p-3 text-center">○</td>
                          <td className="border border-gray-300 p-3 text-center">○</td>
                          <td className="border border-gray-300 p-3 text-center">○</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-semibold">COSO ERM</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">✓</td>
                          <td className="border border-gray-300 p-3 text-center">○</td>
                          <td className="border border-gray-300 p-3 text-center">○</td>
                          <td className="border border-gray-300 p-3 text-center">○</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-4 text-sm text-gray-600">
                      <p><strong>Legend:</strong> ✓ Primary Focus | ○ Secondary Coverage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Implement Professional Standards?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experts can help you assess, select, and implement the most appropriate frameworks for your organization's audit requirements.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/quote">Request Framework Assessment</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Consult with Standards Experts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IIAFrameworks;