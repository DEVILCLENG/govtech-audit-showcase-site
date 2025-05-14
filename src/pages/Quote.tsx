
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

const Quote = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Request a Quote</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Tell us about your IT audit needs, and we'll provide a detailed quote tailored to your agency's specific requirements.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Get Your Custom IT Audit Quote</h2>
                <p className="text-gray-600">
                  Please provide the details below, and our team will prepare a customized quote for your agency's IT audit needs. We typically respond within 1-2 business days.
                </p>
              </div>
              
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
