
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceSection from "@/components/ServiceSection";
import CallToAction from "@/components/CallToAction";

const Services = () => {
  const auditProcess = [
    {
      step: 1,
      title: "Planning Phase",
      duration: "2-3 weeks",
      activities: [
        "Propose IT Audit plan for Audit Committee",
        "Approval"
      ]
    },
    {
      step: 2,
      title: "Information Gathering",
      duration: "2-3 weeks",
      activities: [
        "Request for information",
        "Risks and Process walkthrough"
      ]
    },
    {
      step: 3,
      title: "Testing Phase",
      duration: "6-8 weeks",
      activities: [
        "Control Design Effectiveness Testing",
        "Control Operating Effectiveness Testing"
      ]
    },
    {
      step: 4,
      title: "Reporting Phase",
      duration: "3-4 weeks",
      activities: [
        "Draft Audit Findings",
        "Audit Report"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our IT Audit Services</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Comprehensive IT audit solutions specifically designed for government agencies to ensure security, compliance, and optimal performance.
            </p>
          </div>
        </div>
        
        <ServiceSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Our Audit Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {auditProcess.map((process) => (
                  <div key={process.step} className="border-l-4 border-primary pl-4">
                    <div className="font-bold text-xl mb-2 flex items-center">
                      <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">{process.step}</span>
                      {process.title}
                    </div>
                    <div className="bg-primary/10 text-sm px-3 py-1 rounded-full inline-block mb-3">
                      {process.duration}
                    </div>
                    <ul className="space-y-1 text-gray-600">
                      {process.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
