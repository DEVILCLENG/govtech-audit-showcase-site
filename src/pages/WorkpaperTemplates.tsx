import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Shield, 
  Lock, 
  Download, 
  Database,
  Users,
  Settings,
  AlertTriangle,
  CheckCircle,
  Eye,
  Zap
} from "lucide-react";

const WorkpaperTemplates = () => {
  const templateCategories = [
    {
      category: "Risk Assessment Templates",
      description: "Comprehensive risk evaluation and assessment workpapers",
      templates: [
        "IT Risk Assessment Workpaper",
        "Cybersecurity Risk Matrix",
        "Vendor Risk Assessment Template",
        "Business Continuity Risk Analysis"
      ],
      securityLevel: "Confidential"
    },
    {
      category: "Control Testing Templates", 
      description: "Standardized templates for testing internal controls",
      templates: [
        "Access Control Testing Workpaper",
        "Financial Controls Testing Template",
        "IT General Controls (ITGC) Testing",
        "Compliance Testing Documentation"
      ],
      securityLevel: "Restricted"
    },
    {
      category: "Audit Planning Templates",
      description: "Strategic planning and resource allocation workpapers",
      templates: [
        "Annual Audit Plan Template",
        "Audit Scope and Objectives Workpaper",
        "Resource Allocation Matrix",
        "Stakeholder Communication Plan"
      ],
      securityLevel: "Internal"
    },
    {
      category: "Finding Documentation",
      description: "Structured templates for documenting audit findings",
      templates: [
        "Audit Finding Summary Template",
        "Root Cause Analysis Workpaper",
        "Recommendation Tracking Matrix",
        "Management Response Documentation"
      ],
      securityLevel: "Confidential"
    }
  ];

  const authenticationRequirements = [
    {
      requirement: "Multi-Factor Authentication",
      description: "Required for all workpaper template access",
      status: "Mandatory"
    },
    {
      requirement: "Role-Based Access Control",
      description: "Templates assigned based on user roles and clearance levels",
      status: "Enforced"
    },
    {
      requirement: "Audit Trail Logging",
      description: "All template access and modifications are logged",
      status: "Active"
    },
    {
      requirement: "Document Version Control",
      description: "Automated versioning and change tracking",
      status: "Enabled"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Audit Workpaper Templates"
          description="Standardized templates and documentation frameworks with secure access and database integration"
          backgroundImage="/lovable-uploads/c88091f9-71d1-4c0e-943f-35759205b3fd.png"
        />

        {/* Authentication Notice */}
        <section className="py-8 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Alert className="border-amber-300 bg-amber-50">
                <Shield className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong>Authentication Required:</strong> Access to audit workpaper templates requires user authentication 
                  and appropriate security clearance. Please connect to Supabase to enable secure user authentication and 
                  database integration for this feature.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Templates Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Professional Workpaper Templates</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Comprehensive collection of standardized audit workpaper templates designed to ensure 
                  consistency, compliance, and efficiency in audit documentation processes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {templateCategories.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <FileText className="w-6 h-6 text-blue-500 mr-3" />
                          <div>
                            <CardTitle className="text-lg">{category.category}</CardTitle>
                            <CardDescription className="mt-1">{category.description}</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Lock className="w-3 h-3 mr-1" />
                          {category.securityLevel}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.templates.map((template, templateIndex) => (
                          <div key={templateIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium">{template}</span>
                            <Button size="sm" variant="outline" disabled>
                              <Download className="w-3 h-3 mr-1" />
                              Access
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Security & Authentication Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {authenticationRequirements.map((req, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center text-base">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {req.requirement}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">{req.description}</p>
                      <Badge variant="default" className="text-xs">
                        Status: {req.status}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Database Integration */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Database Integration Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg">
                  <Database className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Centralized Storage</h3>
                  <p className="text-sm text-gray-600">All templates stored in secure, centralized database with backup and recovery</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Collaborative Access</h3>
                  <p className="text-sm text-gray-600">Team collaboration features with real-time editing and comment capabilities</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <Settings className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Version Control</h3>
                  <p className="text-sm text-gray-600">Automated version management with change tracking and rollback capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supabase Integration Notice */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Supabase Integration Required</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To enable secure access to audit workpaper templates with user authentication and database integration, 
                  this application needs to be connected to Supabase. Supabase provides the backend infrastructure for:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">User authentication and authorization</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Secure database storage for templates</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Role-based access control</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Audit trail and logging capabilities</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Please click the green Supabase button in the top right of the interface to connect to Supabase 
                  and enable these secure workpaper template features.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/thought-leadership">Back to Thought Leadership</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkpaperTemplates;