
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, BookOpen, Database, FileCheck, UserCheck } from "lucide-react";

const BackgroundSection = () => {
  const milestones = [
    {
      icon: Clock,
      title: "FY20 Launch",
      description: "ICT Audit Shared Service established in FY20"
    },
    {
      icon: Users,
      title: "Growing Team",
      description: "Onboarded 5 GovTechies in FY20, with 4 more joining by Q2 FY23"
    },
    {
      icon: BookOpen,
      title: "Conversion Programme",
      description: "Successfully launched 2 batches of Conversion programme"
    },
    {
      icon: FileCheck,
      title: "Pilot Success",
      description: "Partnership with AGD providing ICT audit for 3 pilot agencies (VITAL, AGD, PSD)"
    }
  ];

  const challenges = [
    {
      icon: Users,
      text: "Increasing demand for ICT Audit Services but public agencies have limited in-house ICT audit capabilities"
    },
    {
      icon: BookOpen,
      text: "External auditors lack in-depth knowledge of government policies, ICT systems and processes"
    },
    {
      icon: Database,
      text: "Audit insights on technology landscape of agencies not retained"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Background</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Established to address the critical need for specialized ICT audit services within government agencies.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-10">
          <h3 className="text-xl font-semibold mb-4">Why We Exist</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <item.icon size={24} className="text-primary" />
                </div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-6">Our Journey</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                To strengthen government IT systems through specialized audit services that understand the unique needs of public agencies.
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
