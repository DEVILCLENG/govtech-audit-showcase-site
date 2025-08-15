
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BenefitSection from "@/components/BenefitSection";
import FeaturedStats from "@/components/FeaturedStats";
import TestimonialSection from "@/components/TestimonialSection";
import CallToAction from "@/components/CallToAction";
import BackgroundSection from "@/components/BackgroundSection";
import ThoughtLeadershipSection from "@/components/ThoughtLeadershipSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <FeaturedStats />
        <BackgroundSection />
        <BenefitSection />
        <ThoughtLeadershipSection />
        <TestimonialSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
