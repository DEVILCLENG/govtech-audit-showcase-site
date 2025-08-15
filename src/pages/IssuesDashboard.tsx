import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  AlertTriangle, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  XCircle,
  BarChart3,
  Target,
  Zap,
  Eye,
  Settings,
  RefreshCw
} from "lucide-react";

const IssuesDashboard = () => {
  const riskMetrics = [
    { category: "Critical", count: 12, percentage: 15, color: "bg-red-500", textColor: "text-red-500" },
    { category: "High", count: 28, percentage: 35, color: "bg-orange-500", textColor: "text-orange-500" },
    { category: "Medium", count: 32, percentage: 40, color: "bg-yellow-500", textColor: "text-yellow-500" },
    { category: "Low", count: 8, percentage: 10, color: "bg-green-500", textColor: "text-green-500" }
  ];

  const commonIssues = [
    {
      issue: "Inadequate Access Controls",
      risk: "High",
      frequency: "47%",
      description: "Insufficient privileged access management and role-based permissions",
      solutions: [
        "Implement principle of least privilege",
        "Regular access reviews and certifications",
        "Multi-factor authentication enforcement",
        "Privileged access management (PAM) solution"
      ],
      impact: "Data breaches, unauthorized access",
      remediation: "2-4 weeks"
    },
    {
      issue: "Outdated Software & Patches",
      risk: "Critical",
      frequency: "38%",
      description: "Systems running unpatched software with known vulnerabilities",
      solutions: [
        "Automated patch management system",
        "Vulnerability scanning and assessment",
        "End-of-life software replacement",
        "Change management procedures"
      ],
      impact: "System compromise, malware infections",
      remediation: "1-3 weeks"
    },
    {
      issue: "Insufficient Backup & Recovery",
      risk: "High",
      frequency: "42%",
      description: "Inadequate backup procedures and untested disaster recovery plans",
      solutions: [
        "Regular backup testing and validation",
        "Offsite backup storage implementation",
        "Disaster recovery plan updates",
        "Recovery time objective (RTO) definition"
      ],
      impact: "Data loss, extended downtime",
      remediation: "3-6 weeks"
    },
    {
      issue: "Weak Security Monitoring",
      risk: "Medium",
      frequency: "35%",
      description: "Limited security event monitoring and incident response capabilities",
      solutions: [
        "SIEM/SOAR implementation",
        "Security operations center (SOC) setup",
        "Incident response procedures",
        "24/7 monitoring capabilities"
      ],
      impact: "Undetected threats, delayed response",
      remediation: "4-8 weeks"
    },
    {
      issue: "Compliance Gaps",
      risk: "Medium",
      frequency: "29%",
      description: "Non-compliance with regulatory requirements and industry standards",
      solutions: [
        "Compliance framework implementation",
        "Regular compliance assessments",
        "Policy and procedure updates",
        "Staff training and awareness"
      ],
      impact: "Regulatory penalties, reputation damage",
      remediation: "6-12 weeks"
    }
  ];

  const trendingVulnerabilities = [
    { name: "SQL Injection", trend: "+15%", severity: "High" },
    { name: "Cross-Site Scripting (XSS)", trend: "+8%", severity: "Medium" },
    { name: "Insecure Direct Object References", trend: "+22%", severity: "High" },
    { name: "Security Misconfiguration", trend: "+31%", severity: "Critical" },
    { name: "Broken Authentication", trend: "+12%", severity: "High" }
  ];

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
          title="Audit Issues Dashboard"
          description="Real-time analysis of common audit findings with risk metrics and actionable solutions"
          backgroundImage="/lovable-uploads/c88091f9-71d1-4c0e-943f-35759205b3fd.png"
        />

        {/* Risk Metrics Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Risk Distribution Analysis</h2>
                <p className="text-gray-600">Current audit findings categorized by risk severity</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {riskMetrics.map((metric, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className={`text-2xl font-bold ${metric.textColor}`}>
                        {metric.count}
                      </CardTitle>
                      <CardDescription className="font-medium">
                        {metric.category} Risk Issues
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-2">
                        <Progress value={metric.percentage} className="h-3" />
                      </div>
                      <p className="text-sm text-gray-500">{metric.percentage}% of total findings</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Trending Vulnerabilities */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
                    Trending Vulnerabilities
                  </CardTitle>
                  <CardDescription>Most frequently identified security vulnerabilities this quarter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {trendingVulnerabilities.map((vuln, index) => (
                      <div key={index} className="p-4 border rounded-lg text-center">
                        <h4 className="font-semibold text-sm mb-2">{vuln.name}</h4>
                        <Badge variant={getRiskBadgeVariant(vuln.severity)} className="mb-2">
                          {vuln.severity}
                        </Badge>
                        <p className="text-green-600 font-medium text-sm">{vuln.trend}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Issues Analysis */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Common Audit Issues & Solutions</h2>
                <p className="text-gray-600">Frequently identified issues with proven remediation strategies</p>
              </div>

              <div className="space-y-6">
                {commonIssues.map((issue, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex-1 mb-4 md:mb-0">
                          <div className="flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                            <CardTitle className="text-xl">{issue.issue}</CardTitle>
                          </div>
                          <CardDescription className="text-gray-600">
                            {issue.description}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col md:items-end space-y-2">
                          <Badge variant={getRiskBadgeVariant(issue.risk)}>
                            {issue.risk} Risk
                          </Badge>
                          <div className="text-sm text-gray-500">
                            Found in {issue.frequency} of audits
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Target className="w-4 h-4 text-blue-500 mr-2" />
                            Recommended Solutions
                          </h4>
                          <ul className="space-y-2">
                            {issue.solutions.map((solution, solIndex) => (
                              <li key={solIndex} className="flex items-start text-sm">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                            Potential Impact
                          </h4>
                          <p className="text-sm text-gray-600">{issue.impact}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Clock className="w-4 h-4 text-purple-500 mr-2" />
                            Remediation Timeline
                          </h4>
                          <p className="text-sm text-gray-600">{issue.remediation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Features */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Dashboard Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 text-blue-500 mr-2" />
                      Real-time Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Live dashboard updates with current audit findings, risk trends, and remediation progress tracking.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <RefreshCw className="w-5 h-5 text-green-500 mr-2" />
                      Automated Reporting
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Scheduled reports and alerts for critical findings, compliance status, and remediation deadlines.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 text-purple-500 mr-2" />
                      Customizable Views
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Personalized dashboards with role-based access and customizable metrics for different stakeholders.
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
            <h2 className="text-2xl font-bold mb-4">Access the Full Issues Dashboard</h2>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Get detailed insights into your organization's audit findings with our comprehensive analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Request Dashboard Access</Link>
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

export default IssuesDashboard;