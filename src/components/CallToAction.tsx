
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to strengthen your agency's IT security?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Request a quote today and take the first step towards enhanced compliance, security, and performance.
        </p>
        <div>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/quote">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
