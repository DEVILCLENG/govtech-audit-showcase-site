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
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  Shield, 
  Lightbulb, 
  Target,
  Zap,
  Eye,
  Globe,
  Users,
  FileText,
  BarChart3
} from "lucide-react";

const KnowledgeManagement = () => {
  const emergingPatterns = [
    {
      pattern: "Cloud Security Misconfigurations",
      trend: "Increasing",
      impact: "High",
      description: "Growing number of cloud infrastructure security gaps due to rapid digital transformation",
      insights: [
        "Inadequate identity and access management in cloud environments",
        "Misconfigured storage buckets and database permissions",
        "Insufficient network segmentation and monitoring",
        "Lack of cloud-specific security policies and procedures"
      ]
    },
    {
      pattern: "Remote Work Security Challenges",
      trend: "Stable",
      impact: "Medium",
      description: "Persistent security issues related to distributed workforce and hybrid environments",
      insights: [
        "Endpoint security management complexities",
        "VPN capacity and security limitations",
        "Home network security vulnerabilities",
        "Increased phishing and social engineering attacks"
      ]
    },
    {
      pattern: "AI/ML Security Considerations",
      trend: "Emerging",
      impact: "High",
      description: "New security challenges arising from artificial intelligence and machine learning implementations",
      insights: [
        "Data privacy concerns in AI model training",
        "Adversarial attacks on machine learning systems",
        "Algorithmic bias and fairness issues",
        "Model security and intellectual property protection"
      ]
    }
  ];

  const existingChallenges = [
    {
      challenge: "Legacy System Integration",
      frequency: "Very High",
      description: "Ongoing difficulties in securing and auditing legacy systems",
      impactAreas: ["Security Updates", "Compliance", "Integration", "Performance"],
      solutions: ["Gradual modernization", "Compensating controls", "Enhanced monitoring", "Risk acceptance"]
    },
    {
      challenge: "Skills Gap in Cybersecurity",
      frequency: "High",
      description: "Shortage of qualified cybersecurity professionals and audit specialists",
      impactAreas: ["Detection Capabilities", "Response Time", "Coverage", "Quality"],
      solutions: ["Training programs", "Automation tools", "Outsourcing", "Cross-training"]
    },
    {
      challenge: "Regulatory Compliance Complexity",
      frequency: "High",
      description: "Increasing complexity of regulatory requirements across multiple jurisdictions",
      impactAreas: ["Compliance Costs", "Resource Allocation", "Risk Management", "Reporting"],
      solutions: ["Unified frameworks", "Automation", "Expert consultation", "Regular updates"]
    }
  ];

  const cyberThreats = [
    {
      threat: "Advanced Persistent Threats (APTs)",
      riskLevel: "Critical",
      description: "Sophisticated, long-term cyberattacks targeting sensitive data and systems",
      indicators: ["Unusual network traffic", "Privilege escalation attempts", "Data exfiltration patterns", "Lateral movement"],
      mitigation: "Advanced threat detection, network segmentation, zero-trust architecture"
    },
    {
      threat: "Supply Chain Attacks",
      riskLevel: "High",
      description: "Attacks targeting third-party vendors and suppliers to access primary targets",
      indicators: ["Compromised vendor systems", "Suspicious software updates", "Unusual vendor communications", "New vulnerabilities"],
      mitigation: "Vendor security assessments, supply chain monitoring, secure development practices"
    },
    {
      threat: "Ransomware Evolution",
      riskLevel: "Critical",
      description: "Increasingly sophisticated ransomware attacks with double and triple extortion tactics",
      indicators: ["File encryption activity", "Data exfiltration", "Backup system targeting", "Communication with threat actors"],
      mitigation: "Backup strategies, endpoint protection, user training, incident response planning"
    },
    {
      threat: "IoT Device Vulnerabilities",
      riskLevel: "Medium",
      description: "Security weaknesses in Internet of Things devices creating network entry points",
      indicators: ["Unusual device behavior", "Network scanning activity", "Default credentials", "Unpatched firmware"],
      mitigation: "Device inventory, network segmentation, firmware updates, access controls"
    }
  ];

  const opportunities = [
    {
      opportunity: "AI-Powered Audit Analytics",
      potential: "High",
      description: "Leveraging artificial intelligence for enhanced audit efficiency and effectiveness",
      benefits: ["Anomaly detection", "Pattern recognition", "Predictive analytics", "Automated reporting"],
      timeline: "1-2 years"
    },
    {
      opportunity: "Continuous Audit Frameworks",
      potential: "High",
      description: "Implementing real-time monitoring and continuous audit capabilities",
      benefits: ["Real-time insights", "Reduced audit cycles", "Proactive risk management", "Cost efficiency"],
      timeline: "6-12 months"
    },
    {
      opportunity: "Zero Trust Security Models",
      potential: "Medium",
      description: "Adopting zero trust principles for enhanced security posture",
      benefits: ["Improved access controls", "Better threat detection", "Reduced attack surface", "Enhanced compliance"],
      timeline: "12-18 months"
    },
    {
      opportunity: "Cloud-Native Audit Tools",
      potential: "High",
      description: "Utilizing cloud-native solutions for scalable and flexible audit operations",
      benefits: ["Scalability", "Cost optimization", "Global accessibility", "Integration capabilities"],
      timeline: "3-6 months"
    }
  ];

  const getTrendBadgeVariant = (trend: string) => {
    switch (trend) {
      case "Increasing": return "destructive";
      case "Emerging": return "secondary";
      case "Stable": return "outline";
      default: return "outline";
    }
  };

  const getRiskBadgeVariant = (risk: string) => {
    switch (risk) {
      case "Critical": return "destructive";
      case "High": return "destructive";
      case "Medium": return "secondary";
      case "Low": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Knowledge Management"
          description="Emerging patterns, existing challenges, cyber threats, and strategic opportunities"
          backgroundImage="/lovable-uploads/c88091f9-71d1-4c0e-943f-35759205b3fd.png"
        />

        {/* Knowledge Management Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Strategic Intelligence Hub</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive analysis of emerging trends, persistent challenges, cyber threat landscape, 
                  and strategic opportunities in the internal audit domain.
                </p>
              </div>

              <Tabs defaultValue="patterns" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="patterns">Emerging Patterns</TabsTrigger>
                  <TabsTrigger value="challenges">Existing Challenges</TabsTrigger>
                  <TabsTrigger value="threats">Cyber Threats</TabsTrigger>
                  <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
                </TabsList>

                <TabsContent value="patterns" className="mt-8">
                  <div className="space-y-6">
                    {emergingPatterns.map((pattern, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="flex items-center mb-2">
                                <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                                {pattern.pattern}
                              </CardTitle>
                              <CardDescription>{pattern.description}</CardDescription>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <Badge variant={getTrendBadgeVariant(pattern.trend)}>
                                {pattern.trend}
                              </Badge>
                              <Badge variant={getRiskBadgeVariant(pattern.impact)}>
                                {pattern.impact} Impact
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold mb-3">Key Insights:</h4>
                          <ul className="space-y-2">
                            {pattern.insights.map((insight, insightIndex) => (
                              <li key={insightIndex} className="flex items-start text-sm">
                                <Eye className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{insight}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="challenges" className="mt-8">
                  <div className="space-y-6">
                    {existingChallenges.map((challenge, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="flex items-center mb-2">
                                <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                                {challenge.challenge}
                              </CardTitle>
                              <CardDescription>{challenge.description}</CardDescription>
                            </div>
                            <Badge variant="secondary">
                              {challenge.frequency} Frequency
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Impact Areas:</h4>
                              <div className="flex flex-wrap gap-2">
                                {challenge.impactAreas.map((area, areaIndex) => (
                                  <Badge key={areaIndex} variant="outline" className="text-xs">
                                    {area}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3">Potential Solutions:</h4>
                              <div className="flex flex-wrap gap-2">
                                {challenge.solutions.map((solution, solIndex) => (
                                  <Badge key={solIndex} variant="secondary" className="text-xs">
                                    {solution}
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

                <TabsContent value="threats" className="mt-8">
                  <div className="space-y-6">
                    {cyberThreats.map((threat, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="flex items-center mb-2">
                                <Shield className="w-5 h-5 text-red-500 mr-2" />
                                {threat.threat}
                              </CardTitle>
                              <CardDescription>{threat.description}</CardDescription>
                            </div>
                            <Badge variant={getRiskBadgeVariant(threat.riskLevel)}>
                              {threat.riskLevel} Risk
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Threat Indicators:</h4>
                              <ul className="space-y-1">
                                {threat.indicators.map((indicator, indIndex) => (
                                  <li key={indIndex} className="flex items-start text-sm">
                                    <AlertTriangle className="w-3 h-3 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">{indicator}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3">Mitigation Strategy:</h4>
                              <p className="text-sm text-gray-600">{threat.mitigation}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="opportunities" className="mt-8">
                  <div className="space-y-6">
                    {opportunities.map((opportunity, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="flex items-center mb-2">
                                <Lightbulb className="w-5 h-5 text-green-500 mr-2" />
                                {opportunity.opportunity}
                              </CardTitle>
                              <CardDescription>{opportunity.description}</CardDescription>
                            </div>
                            <div className="flex flex-col space-y-2">
                              <Badge variant="default">
                                {opportunity.potential} Potential
                              </Badge>
                              <span className="text-xs text-gray-500">{opportunity.timeline}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold mb-3">Expected Benefits:</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {opportunity.benefits.map((benefit, benefitIndex) => (
                              <Badge key={benefitIndex} variant="outline" className="text-xs justify-center">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Knowledge Sharing Features */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Knowledge Sharing Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 text-blue-500 mr-2" />
                      Trend Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Advanced analytics to identify and track emerging patterns in audit findings and risk landscapes.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 text-green-500 mr-2" />
                      Collaborative Intelligence
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Shared knowledge repository with contributions from audit professionals across organizations.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 text-purple-500 mr-2" />
                      Best Practice Library
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Curated collection of proven methodologies, tools, and solutions for common audit challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Contribute to Our Knowledge Base</h2>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Share your insights and learn from the collective intelligence of the audit community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Join Knowledge Network</Link>
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

export default KnowledgeManagement;