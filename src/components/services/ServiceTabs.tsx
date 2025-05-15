
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceGrid from "./ServiceGrid";
import { Service } from "@/data/services";

interface ServiceTabsProps {
  services: Service[];
}

const ServiceTabs = ({ services }: ServiceTabsProps) => {
  const coreServices = services.filter(service => service.category === "core");
  const specializedServices = services.filter(service => service.category === "specialized");

  return (
    <Tabs defaultValue="all" className="mb-8">
      <TabsList className="mx-auto flex justify-center mb-6">
        <TabsTrigger value="all">All Services</TabsTrigger>
        <TabsTrigger value="core">Core Services</TabsTrigger>
        <TabsTrigger value="specialized">Specialized Services</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all">
        <ServiceGrid services={services} />
      </TabsContent>
      
      <TabsContent value="core">
        <ServiceGrid services={coreServices} />
      </TabsContent>
      
      <TabsContent value="specialized">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializedServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ServiceTabs;
