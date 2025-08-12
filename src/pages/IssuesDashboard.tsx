import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Clock, ArrowLeft, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const IssuesDashboard = () => {
  const riskMetrics = [
    { category: "Critical", count: 12, percentage: 15, color: "bg-red-500", trend: "+3", description: "Immediate action required" },
    { category: "High", count: 28, percentage: 35, color: "bg-orange-500", trend: "-2", description: "Address within 30 days" },
    { category: "Medium", count: 32, percentage: 40, color: "bg-yellow-500", trend: "+5", description: "Address within 90 days" },
    { category: "Low", count: 8, percentage: 10, color: "bg-green-500", trend: "-1", description: "Monitor and review" }
  ];

  const recentFindings = [
    {
      id: "AUD-2024-001",
      title: "Privileged Access Management Deficiencies",
      severity: "Critical",
      category: "Access Control",
      description: "Excessive administrative privileges identified across multiple systems without proper justification or review processes",
      impact: "High risk of unauthorized access and privilege escalation",
      recommendation: "Implement principle of least privilege and conduct quarterly access reviews",
      status: "Open",
      dateFound: "2024-01-15",
      dueDate: "2024-02-15"
    },
    {
      id: "AUD-2024-002",
      title: "Patch Management Process Gaps",
      severity: "High",
      category: "Vulnerability Management",
      description: "Critical security patches pending deployment for over 45 days across production systems",
      impact: "Exposure to known vulnerabilities and potential security breaches",
      recommendation: "Accelerate patch deployment process and implement automated testing",
      status: "In Progress",
      dateFound: "2024-01-10",
      dueDate: "2024-02-10"
    },
    {
      id: "AUD-2024-003",
      title: "Data Encryption Standards Non-Compliance",
      severity: "Medium",
      category: "Data Protection",
      description: "Sensitive data transmission occurring without adequate encryption protocols",
      impact: "Potential data exposure during transmission",
      recommendation: "Implement end-to-end encryption for all sensitive data transfers",
      status: "Open",
      dateFound: "2024-01-08",
      dueDate: "2024-03-08"
    }
  ];

  const complianceStatus = [
    { framework: "NIST Cybersecurity Framework", compliance: 85, gaps: 12, color: "bg-blue-500" },
    { framework: "ISO 27001", compliance: 78, gaps: 18, color: "bg-purple-500" },
    { framework: "Government IT Standards", compliance: 92, gaps: 6, color: "bg-green-500" },
    { framework: "COBIT 2019", compliance: 73, gaps: 22, color: "bg-orange-500" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-100 text-red-900 border-red-200";
      case "High": return "bg-orange-100 text-orange-900 border-orange-200";
      case "Medium": return "bg-yellow-100 text-yellow-900 border-yellow-200";
      case "Low": return "bg-green-100 text-green-900 border-green-200";
      default: return "bg-gray-100 text-gray-900 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open": return <XCircle className="text-red-500" size={16} />;
      case "In Progress": return <Clock className="text-orange-500" size={16} />;
      case "Closed": return <CheckCircle className="text-green-500" size={16} />;
      default: return <AlertCircle className="text-gray-500" size={16} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Issues Dashboard"
          description="Real-time analysis of audit findings with risk metrics and actionable solutions"
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

            <div className="max-w-7xl mx-auto space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Real-Time Risk Analysis</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive dashboard providing instant visibility into audit findings, risk metrics, and remediation progress across all government IT systems.
                </p>
              </div>

              {/* Risk Metrics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {riskMetrics.map((metric, index) => (
                  <Card key={index} className="relative overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{metric.category} Risk</CardTitle>
                        <Badge variant={metric.trend.startsWith('+') ? "destructive" : "secondary"}>
                          {metric.trend}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold mb-2">{metric.count}</div>
                      <Progress value={metric.percentage} className="mb-3" />
                      <div className="space-y-1">
                        <p className="text-sm text-gray-600">{metric.percentage}% of total issues</p>
                        <p className="text-xs text-gray-500">{metric.description}</p>
                      </div>
                      <div className={`absolute top-0 right-0 w-1 h-full ${metric.color}`}></div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Critical Findings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="mr-2 text-orange-500" size={24} />
                    Recent Audit Findings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recentFindings.map((finding, index) => (
                      <div key={index} className={`border rounded-lg p-6 ${getSeverityColor(finding.severity)}`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-lg">{finding.title}</h4>
                              <Badge variant="outline" className="text-xs">
                                {finding.id}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                {getStatusIcon(finding.status)}
                                <span className="text-sm">{finding.status}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <span>Category: {finding.category}</span>
                              <span>Found: {finding.dateFound}</span>
                              <span>Due: {finding.dueDate}</span>
                            </div>
                          </div>
                          <Badge 
                            variant={
                              finding.severity === "Critical" ? "destructive" : 
                              finding.severity === "High" ? "default" : 
                              "secondary"
                            }
                          >
                            {finding.severity}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-medium mb-1">Description</h5>
                            <p className="text-sm">{finding.description}</p>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Business Impact</h5>
                            <p className="text-sm">{finding.impact}</p>
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">Recommendation</h5>
                            <p className="text-sm">{finding.recommendation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Compliance Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 text-blue-500" size={24} />
                    Compliance Framework Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {complianceStatus.map((framework, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">{framework.framework}</h4>
                          <Badge variant="outline">{framework.gaps} gaps</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Compliance Score</span>
                            <span className="font-medium">{framework.compliance}%</span>
                          </div>
                          <Progress value={framework.compliance} className="h-2" />
                          <p className="text-xs text-gray-500">
                            {framework.gaps} control areas require attention
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Performance Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-900">Average Resolution Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 mb-2">18 days</div>
                    <p className="text-sm text-blue-700">7 days improvement from last quarter</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Critical:</span>
                        <span className="font-medium">5 days</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>High:</span>
                        <span className="font-medium">15 days</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Medium:</span>
                        <span className="font-medium">30 days</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-900">Issues Resolved This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 mb-2">47</div>
                    <p className="text-sm text-green-700">23% increase from previous month</p>
                    <div className="mt-4">
                      <Progress value={78} className="mb-2" />
                      <p className="text-xs text-green-600">78% of planned resolutions completed</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-900">Risk Score Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-600 mb-2">2.8</div>
                    <p className="text-sm text-purple-700">0.4 point improvement this quarter</p>
                    <div className="mt-4 space-y-1">
                      <div className="flex items-center text-xs">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span>Trending downward (positive)</span>
                      </div>
                      <p className="text-xs text-purple-600">Target: &lt; 2.5 by end of year</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Want Real-Time Visibility Into Your IT Risks?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our advanced dashboard solutions provide comprehensive risk monitoring and issue tracking tailored to your agency's specific needs.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/quote">Request Dashboard Demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Schedule Consultation</Link>
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