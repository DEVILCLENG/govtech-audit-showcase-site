
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import BackgroundSection from "@/components/BackgroundSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Award, Users, FileDigit, ShieldCheck } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our audit engagements."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and challenges."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every audit we perform, delivering actionable insights."
    },
    {
      icon: Building,
      title: "Independence",
      description: "Our audits are conducted with complete objectivity and professional skepticism."
    },
    {
      icon: FileDigit,
      title: "Innovation",
      description: "We continuously improve our audit methodologies to address emerging IT risks."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="About Us" 
          description="Learn about our mission, values, and the dedicated team behind our IT audit services."
        />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Established to address the critical need for specialized ICT audit services within agencies, 
                    IAD-SS has grown to become a trusted partner for IT audit and assurance services.
                  </p>
                  <p>
                    Our team of experienced auditors combines deep technical expertise with 
                    industry knowledge to deliver audit services that help agencies strengthen their 
                    IT governance, risk management, and compliance.
                  </p>
                  <p>
                    We understand the unique challenges faced by agencies and 
                    are committed to providing tailored audit solutions that meet their specific needs.
                  </p>
                </div>
              </div>
              <div className="h-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/445e6afb-4e7b-4e2f-abb5-e09b9e7a4d65.png" 
                  alt="Hand holding soil with a growing plant" 
                  className="rounded-lg shadow-lg w-full object-cover h-auto max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        <BackgroundSection />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide our approach to every audit engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border border-gray-200 transition-all hover:shadow-md">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
