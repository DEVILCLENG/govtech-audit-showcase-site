import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Target, 
  Calendar, 
  FileText, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3,
  Users,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react";

const AnnualAuditPlan = () => {
  const methodologySteps = [
    {
      phase: "Risk Assessment",
      duration: "2-3 weeks",
      progress: 100,
      status: "Complete",
      activities: [
        "Identify key business processes and systems",
        "Assess inherent and residual risks",
        "Evaluate control environment effectiveness",
        "Map regulatory and compliance requirements"
      ]
    },
    {
      phase: "Resource Planning",
      duration: "1-2 weeks", 
      progress: 75,
      status: "In Progress",
      activities: [
        "Determine audit resource requirements",
        "Allocate skilled auditors to specific areas",
        "Plan external specialist involvement",
        "Coordinate with business stakeholders"
      ]
    },
    {
      phase: "Audit Scheduling",
      duration: "1 week",
      progress: 25,
      status: "Planned",
      activities: [
        "Create detailed audit calendar",
        "Schedule preliminary and fieldwork phases",
        "Plan interim and year-end procedures",
        "Coordinate with management availability"
      ]
    }
  ];

  const riskAreas = [
    { area: "Cybersecurity & Data Protection", risk: "High", priority: 1, frequency: "Quarterly" },
    { area: "Financial Management Systems", risk: "High", priority: 2, frequency: "Semi-Annual" },
    { area: "Procurement & Vendor Management", risk: "Medium", priority: 3, frequency: "Annual" },
    { area: "Human Resources & Payroll", risk: "Medium", priority: 4, frequency: "Annual" },
    { area: "Business Continuity Planning", risk: "High", priority: 5, frequency: "Annual" },
    { area: "Regulatory Compliance", risk: "Medium", priority: 6, frequency: "Ongoing" }
  ];

  const planningPrinciples = [
    {
      title: "Risk-Based Approach",
      description: "Focus audit resources on areas with highest risk impact to organizational objectives",
      icon: Target
    },
    {
      title: "Stakeholder Alignment", 
      description: "Ensure audit plan addresses management concerns and regulatory requirements",
      icon: Users
    },
    {
      title: "Resource Optimization",
      description: "Maximize audit coverage while efficiently utilizing available resources and expertise",
      icon: BarChart3
    },
    {
      title: "Continuous Monitoring",
      description: "Regular plan updates based on emerging risks and changing business environment",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Annual Audit Plan Methodology"
          description="Risk-based approach with detailed process steps for comprehensive audit planning"
          backgroundImage="/lovable-uploads/c88091f9-71d1-4c0e-943f-35759205b3fd.png"
        />

        {/* Methodology Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Planning Methodology Overview</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive annual audit planning methodology ensures systematic risk assessment, 
                  resource allocation, and strategic audit coverage aligned with organizational objectives.
                </p>
              </div>

              <Tabs defaultValue="methodology" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="methodology">Methodology</TabsTrigger>
                  <TabsTrigger value="risk-areas">Risk Areas</TabsTrigger>
                  <TabsTrigger value="principles">Principles</TabsTrigger>
                  <TabsTrigger value="timeline">Timeline</TabsTrigger>
                </TabsList>

                <TabsContent value="methodology" className="mt-8">
                  <div className="space-y-6">
                    {methodologySteps.map((step, index) => (
                      <Card key={index} className="relative">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold mr-3">
                                {index + 1}
                              </div>
                              {step.phase}
                            </CardTitle>
                            <div className="flex items-center space-x-2">
                              <Badge variant={step.status === "Complete" ? "default" : step.status === "In Progress" ? "secondary" : "outline"}>
                                {step.status}
                              </Badge>
                              <span className="text-sm text-gray-500">{step.duration}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">Progress</span>
                              <span className="text-sm text-gray-500">{step.progress}%</span>
                            </div>
                            <Progress value={step.progress} className="h-2" />
                          </div>
                          <ul className="space-y-2">
                            {step.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="risk-areas" className="mt-8">
                  <div className="space-y-4">
                    {riskAreas.map((area, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-1">{area.area}</h3>
                              <div className="flex items-center space-x-4">
                                <Badge variant={area.risk === "High" ? "destructive" : "secondary"}>
                                  {area.risk} Risk
                                </Badge>
                                <span className="text-sm text-gray-500">Priority {area.priority}</span>
                                <span className="text-sm text-gray-500">{area.frequency}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              {area.risk === "High" ? (
                                <AlertTriangle className="w-6 h-6 text-red-500" />
                              ) : (
                                <Shield className="w-6 h-6 text-yellow-500" />
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="principles" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {planningPrinciples.map((principle, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <principle.icon className="w-6 h-6 text-primary mr-3" />
                            {principle.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{principle.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="timeline" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="w-6 h-6 text-primary mr-3" />
                        Annual Planning Timeline
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-semibold">Q4 (Oct-Dec): Planning Phase</h4>
                          <p className="text-gray-600">Risk assessment, resource planning, and draft audit plan development</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold">Q1 (Jan-Mar): Implementation</h4>
                          <p className="text-gray-600">Finalize audit plan, communicate with stakeholders, begin execution</p>
                        </div>
                        <div className="border-l-4 border-orange-500 pl-4">
                          <h4 className="font-semibold">Q2-Q3 (Apr-Sep): Execution & Review</h4>
                          <p className="text-gray-600">Conduct planned audits, quarterly plan reviews, and adjustments</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Implement This Methodology?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with our audit planning experts to customize this methodology for your organization's specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact" className="flex items-center">
                  Schedule Consultation <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
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

export default AnnualAuditPlan;