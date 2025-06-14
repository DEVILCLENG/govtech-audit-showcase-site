import { Shield, TrendingUp, Award, Users, Layers } from "lucide-react";
const BenefitSection = () => {
  const benefits = [{
    icon: Shield,
    title: "Proactive Defense",
    description: "Identify vulnerabilities in your systems before they can be exploited, protecting sensitive government data and citizen information."
  }, {
    icon: TrendingUp,
    title: "Improved Performance",
    description: "Optimize your IT infrastructure and processes for better efficiency, faster response times, and improved user experience."
  }, {
    icon: Award,
    title: "Comprehensive Services",
    description: "From risk assessments to incident response, we cover all aspects of cybersecurity to provide a complete defense to ensure your agency meets IM8 requirements for IT systems and data management."
  }, {
    icon: Layers,
    title: "Tailored Services",
    description: "Our approach is not one-size-fits-all. We tailor our services to meet the specific needs of your Agency."
  }, {
    icon: Users,
    title: "Expert Guidance",
    description: "Benefit from our team of specialized government IT auditors who understand the unique challenges facing public sector technology."
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold mb-4 text-5xl">Why Choose GovTech IAD-SS</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-medium">
            Our specialized services provide numerous benefits for government agencies looking to strengthen their IT infrastructure and processes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <benefit.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default BenefitSection;