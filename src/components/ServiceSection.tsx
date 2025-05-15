
import React from "react";
import ServiceTabs from "./services/ServiceTabs";
import { allServices } from "@/data/services";

const ServiceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <ServiceTabs services={allServices} />
      </div>
    </section>
  );
};

export default ServiceSection;
