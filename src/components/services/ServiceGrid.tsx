
import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { Service } from "@/data/services";

interface ServiceGridProps {
  services: Service[];
}

const ServiceGrid = ({ services }: ServiceGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          features={service.features}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;
