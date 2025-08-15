import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Target, 
  Settings, 
  Activity, 
  Brain, 
  BookOpen,
  FileText,
  Users,
  Shield,
  TrendingUp,
  Lightbulb
} from "lucide-react";

const ThoughtLeadership = () => {
  const thoughtLeadershipSections = [
    {
      title: "Annual Audit Plan Methodology",
      description: "Risk-based approach with detailed process steps for comprehensive audit planning and resource allocation.",
      icon: Target,
      iconColor: "text-blue-500",
      link: "/annual-audit-plan",
      badge: "Methodology"
    },
    {
      title: "Common IT Audit Tools",
      description: "Categorized tools for security assessment, analytics, and compliance management across government systems.",
      icon: Settings,
      iconColor: "text-green-500",
      link: "/audit-tools",
      badge: "Tools & Resources"
    },
    {
      title: "Audit Issues Dashboard",
      description: "Real-time analysis of common audit findings with risk metrics and actionable solutions for immediate response.",
      icon: Activity,
      iconColor: "text-orange-500",
      link: "/issues-dashboard",
      badge: "Analytics"
    },
    {
      title: "Knowledge Management",
      description: "Emerging patterns, existing challenges, cyber threats, and strategic opportunities in internal audit.",
      icon: Brain,
      iconColor: "text-purple-500",
      link: "/knowledge-management",
      badge: "Intelligence"
    },
    {
      title: "Internal Audit Frameworks",
      description: "IIA standards, methodologies, and international frameworks for comprehensive audit excellence.",
      icon: BookOpen,
      iconColor: "text-indigo-500",
      link: "/audit-frameworks",
      badge: "Standards"
    },
    {
      title: "Audit Workpaper Templates",
      description: "Standardized templates and documentation frameworks with secure access and database integration.",
      icon: FileText,
      iconColor: "text-red-500",
      link: "/workpaper-templates",
      badge: "Templates",
      requiresAuth: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Key Features Section - Moved to banner area */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Why Our Thought Leadership Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Data-Driven Insights</h3>
                  <p className="text-white/90 text-sm">
                    Analytics and metrics that inform better audit decisions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Innovation Focus</h3>
                  <p className="text-white/90 text-sm">
                    Emerging technologies and methodologies for modern auditing
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Collaborative Approach</h3>
                  <p className="text-white/90 text-sm">
                    Shared knowledge and best practices across audit teams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Central Internal Audit Department</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Access comprehensive audit methodologies, tools, insights, and frameworks designed 
                specifically for government and enterprise internal audit functions. Our thought 
                leadership resources combine industry best practices with practical implementation guidance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {thoughtLeadershipSections.map((section, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <section.icon className={`${section.iconColor} flex-shrink-0`} size={28} />
                      <Badge variant="secondary" className="text-xs">
                        {section.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {section.title}
                      {section.requiresAuth && (
                        <Shield className="inline-block ml-2 text-amber-500" size={16} />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                      {section.description}
                    </CardDescription>
                    <Button asChild className="w-full">
                      <Link to={section.link}>
                        Explore {section.badge}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="py-12 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Enhance Your Audit Capabilities</h2>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Connect with our experts to discuss advanced audit methodologies, tools, and implementation strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/quote">Request Custom Solution</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ThoughtLeadership;