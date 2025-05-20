
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, BookOpen, Database, FileCheck, UserCheck, Shield, FileDigit, Building, Lock, Briefcase, Terminal, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BackgroundSection = () => {
  const location = useLocation();
  const isClientsPage = location.pathname === "/our-clients";
  
  const milestones = [
    {
      icon: Clock,
      title: "FY20 Launch",
      description: "ICT Audit Shared Service established in FY20"
    },
    {
      icon: Users,
      title: "Growing Team",
      description: "Current strength of 16 auditors"
    },
    {
      icon: FileCheck,
      title: "Current Clients",
      description: (
        <span>
          Currently engaged with{" "}
          <Link 
            to={isClientsPage ? "#client-section" : "/our-clients#client-section"}
            className="text-primary underline flex items-center inline-flex"
          >
            20 agencies <ExternalLink size={14} className="ml-1" />
          </Link>
        </span>
      )
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "High Security Clearance",
      description: "ICT Audit Services team members have Category 1 Security Clearance"
    },
    {
      icon: FileDigit,
      title: "Knowledge",
      description: "In-depth knowledge of ICT systems, processes and IM8 policy"
    },
    {
      icon: Building,
      title: "Capability Development",
      description: "Develop in-house ICT Audit Capabilities for agencies"
    },
    {
      icon: Database,
      title: "Knowledge Retention",
      description: "Retain the knowledge of the Agency's ICT systems and control environment"
    },
    {
      icon: Lock,
      title: "Information Security",
      description: "Minimise the exposure of classified/sensitive information"
    },
    {
      icon: Briefcase,
      title: "Flexible Model",
      description: "Flexible working model (outsource, co-source, manpower)"
    },
    {
      icon: Terminal,
      title: "Direct Access",
      description: "Direct \"Read\" access to central information repository tools for self-service evidence gathering"
    },
    {
      icon: UserCheck,
      title: "Close Collaboration",
      description: "Close Working Relationship with IM8 Clause owners"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Background</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Established to address the critical need for specialized ICT audit services within agencies.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
          <h4 className="text-lg font-semibold mb-4">Our Value Proposition</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-start">
                <div className="bg-primary/10 p-3 rounded-full mb-3">
                  <benefit.icon size={20} className="text-primary" />
                </div>
                <h5 className="font-medium text-gray-900 mb-1">{benefit.title}</h5>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-6">Our Journey</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <milestone.icon size={24} className="text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">{milestone.title}</h4>
                <p className="text-gray-600 text-center">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg opacity-90">
                To strengthen IT systems through specialized audit services that understand the unique needs of public agencies.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
              <div className="p-4 bg-white/20 rounded-full">
                <UserCheck size={48} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
