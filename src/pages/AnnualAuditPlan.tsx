import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Settings, Activity, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AnnualAuditPlan = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Annual Audit Plan Methodology"
          description="Risk-based approach with detailed process steps for comprehensive audit planning"
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

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Risk-Based Audit Planning</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our methodology ensures comprehensive coverage of critical areas while optimizing resource allocation and maintaining audit quality standards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="mr-2 text-blue-500" size={24} />
                      Risk Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-blue-900">Key Activities:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Identify key business processes and systems</li>
                        <li>• Evaluate inherent and residual risks</li>
                        <li>• Assess control effectiveness and maturity</li>
                        <li>• Consider regulatory and compliance requirements</li>
                        <li>• Analyze previous audit findings and trends</li>
                        <li>• Prioritize audit areas based on risk scores</li>
                      </ul>
                    </div>
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
                    <div className="space-y-4">
                      <h4 className="font-semibold text-green-900">Resource Allocation:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Allocate skilled auditors with relevant expertise</li>
                        <li>• Determine audit duration and complexity</li>
                        <li>• Schedule audit activities across the year</li>
                        <li>• Plan for specialized tools and technologies</li>
                        <li>• Coordinate with external audit firms</li>
                        <li>• Schedule follow-up and monitoring reviews</li>
                      </ul>
                    </div>
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
                    <div className="space-y-4">
                      <h4 className="font-semibold text-purple-900">Ongoing Activities:</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Real-time risk monitoring and assessment</li>
                        <li>• Quarterly plan reviews and adjustments</li>
                        <li>• Emerging risk identification and analysis</li>
                        <li>• Stakeholder feedback integration</li>
                        <li>• Performance metrics tracking</li>
                        <li>• Plan flexibility and adaptation</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle>4-Step Risk-Based Planning Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <h4 className="font-semibold mb-2">Risk Universe Mapping</h4>
                      <p className="text-sm text-gray-600">Comprehensive identification of all auditable areas, processes, and systems across the organization</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <h4 className="font-semibold mb-2">Risk Assessment & Scoring</h4>
                      <p className="text-sm text-gray-600">Detailed evaluation and quantitative scoring of risks using standardized criteria and methodologies</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <h4 className="font-semibold mb-2">Prioritization Matrix</h4>
                      <p className="text-sm text-gray-600">Strategic ranking of audit priorities based on risk scores, regulatory requirements, and business impact</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl font-bold">4</span>
                      </div>
                      <h4 className="font-semibold mb-2">Annual Plan Creation</h4>
                      <p className="text-sm text-gray-600">Development of comprehensive annual audit schedule with resource allocation and timeline management</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Assessment Criteria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-l-red-500 pl-4">
                        <h4 className="font-semibold">Impact Assessment</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Financial impact potential</li>
                          <li>• Operational disruption risk</li>
                          <li>• Regulatory compliance exposure</li>
                          <li>• Reputational damage possibility</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-l-orange-500 pl-4">
                        <h4 className="font-semibold">Likelihood Factors</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Historical incident frequency</li>
                          <li>• Control environment maturity</li>
                          <li>• Technology complexity level</li>
                          <li>• External threat landscape</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Planning Considerations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-l-green-500 pl-4">
                        <h4 className="font-semibold">Strategic Alignment</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Government digital transformation initiatives</li>
                          <li>• Agency strategic objectives</li>
                          <li>• Regulatory requirements and changes</li>
                          <li>• Emerging technology adoption</li>
                        </ul>
                      </div>
                      <div className="border-l-4 border-l-blue-500 pl-4">
                        <h4 className="font-semibold">Resource Optimization</h4>
                        <ul className="text-sm text-gray-600 mt-2 space-y-1">
                          <li>• Auditor skills and specializations</li>
                          <li>• Technology tools and capabilities</li>
                          <li>• Budget constraints and allocations</li>
                          <li>• Timeline and scheduling factors</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Implement Risk-Based Audit Planning?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experts can help you develop and implement a comprehensive risk-based audit planning methodology tailored to your agency's needs.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link to="/quote">Request Consultation</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Contact Our Team</Link>
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