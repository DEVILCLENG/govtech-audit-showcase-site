
import React from "react";
import ServiceTabs from "./services/ServiceTabs";
import { allServices } from "@/data/services";

const ServiceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our IT Audit Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive IT audit services aligned with government standards and best practices. Our audits cover crucial areas to ensure your IT systems meet the highest security, compliance, and operational requirements.
          </p>
        </div>

        <ServiceTabs services={allServices} />
      </div>
    </section>
  );
};

export default ServiceSection;
