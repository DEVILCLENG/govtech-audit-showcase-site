
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileCheck, Users, Trophy } from "lucide-react";

const FeaturedStats = () => {
  const stats = [
    {
      icon: Shield,
      value: "500+",
      label: "Successful Audits",
      color: "text-blue-500"
    },
    {
      icon: FileCheck,
      value: "100%",
      label: "Compliance Rate",
      color: "text-green-500"
    },
    {
      icon: Users,
      value: "50+",
      label: "Government Agencies",
      color: "text-purple-500"
    },
    {
      icon: Trophy,
      value: "10+",
      label: "Years of Experience",
      color: "text-amber-500"
    }
  ];

  return (
    <section className="py-12 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/95 border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className={`mx-auto mb-4 ${stat.color}`}>
                  <stat.icon size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-blue-900 opacity-10 pattern-dots"></div>
    </section>
  );
};

export default FeaturedStats;
