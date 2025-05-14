
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceSection from "@/components/ServiceSection";
import CallToAction from "@/components/CallToAction";

const Services = () => {
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
              <h2 className="text-2xl font-bold mb-4">Our Audit Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-bold text-xl mb-2 flex items-center">
                    <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">1</span>
                    Planning
                  </div>
                  <p className="text-gray-600">We work with you to understand your needs and define the audit scope.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-bold text-xl mb-2 flex items-center">
                    <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">2</span>
                    Assessment
                  </div>
                  <p className="text-gray-600">Our expert team conducts a thorough review of your systems and processes.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-bold text-xl mb-2 flex items-center">
                    <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">3</span>
                    Reporting
                  </div>
                  <p className="text-gray-600">We provide detailed findings with clear recommendations for improvement.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-bold text-xl mb-2 flex items-center">
                    <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">4</span>
                    Follow-up
                  </div>
                  <p className="text-gray-600">We help implement changes and conduct follow-up assessments to ensure success.</p>
                </div>
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
