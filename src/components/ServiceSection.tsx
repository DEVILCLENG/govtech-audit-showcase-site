
import React from "react";
import ServiceTabs from "./services/ServiceTabs";
import { allServices } from "@/data/services";

const ServiceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our IT Audit Services</h2>
        </div>

        <ServiceTabs services={allServices} />
      </div>
    </section>
  );
};

export default ServiceSection;
