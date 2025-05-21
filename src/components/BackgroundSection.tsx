import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, UserCheck, Shield, FileDigit, Building, Lock, Briefcase, Terminal, Database } from "lucide-react";
const BackgroundSection = () => {
  const milestones = [{
    icon: Clock,
    title: "FY20 Launch",
    description: "ICT Audit Shared Service established in FY20"
  }, {
    icon: Users,
    title: "Growing Team",
    description: "Current strength of 16 auditors"
  }, {
    icon: UserCheck,
    title: "Current Clients",
    description: "Currently engaged with 20 agencies"
  }];
  const benefits = [{
    icon: Shield,
    title: "High Security Clearance",
    description: "ICT Audit Services team members have Category 1 Security Clearance"
  }, {
    icon: FileDigit,
    title: "Knowledge",
    description: "In-depth knowledge of ICT systems, processes and IM8 policy"
  }, {
    icon: Building,
    title: "Capability Development",
    description: "Develop in-house ICT Audit Capabilities for agencies"
  }, {
    icon: Database,
    title: "Knowledge Retention",
    description: "Retain the knowledge of the Agency's ICT systems and control environment"
  }, {
    icon: Lock,
    title: "Information Security",
    description: "Minimise the exposure of classified/sensitive information"
  }, {
    icon: Briefcase,
    title: "Flexible Model",
    description: "Flexible working model (outsource, co-source, manpower)"
  }, {
    icon: Terminal,
    title: "Direct Access",
    description: "Direct \"Read\" access to central information repository tools for self-service evidence gathering"
  }, {
    icon: UserCheck,
    title: "Close Collaboration",
    description: "Close Working Relationship with IM8 Clause owners"
  }];
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4 text-5xl">Our Background</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl font-light">
            Established to address the critical need for specialized ICT audit services within agencies.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
          <h4 className="font-semibold mb-4 text-4xl">Our Value Proposition</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-start">
                <div className="bg-primary/10 p-3 rounded-full mb-3">
                  <benefit.icon size={20} className="text-primary" />
                </div>
                <h5 className="font-medium text-gray-900 mb-1 text-center">{benefit.title}</h5>
                <p className="text-gray-600 text-base font-normal">{benefit.description}</p>
              </div>)}
          </div>
        </div>

        <h3 className="font-semibold mb-6 text-4xl">Our Journey</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <milestone.icon size={24} className="text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-center">{milestone.title}</h4>
                <p className="text-gray-600 text-center">{milestone.description}</p>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h3 className="font-bold mb-4 text-4xl">Our Mission</h3>
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
    </section>;
};
export default BackgroundSection;