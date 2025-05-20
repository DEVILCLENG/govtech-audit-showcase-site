
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ServiceGrid from "./ServiceGrid";
import { Service } from "@/data/services";

interface ServiceTabsProps {
  services: Service[];
}

const ServiceTabs = ({ services }: ServiceTabsProps) => {
  return (
    <Tabs defaultValue="what-we-offer" className="mb-8">
      <TabsList className="mx-auto flex justify-center mb-6">
        <TabsTrigger value="what-we-offer">What we offer</TabsTrigger>
      </TabsList>
      
      <TabsContent value="what-we-offer">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
          <p className="text-gray-600">
            At the heart of our service is a proactive and holistic approach. We believe in the power of customization. 
            Each Agency is unique, and so are its cybersecurity needs. Our services are crafted precisely, aligning with 
            your business's specific challenges and goals covering the entire spectrum of cybersecurity.
          </p>
        </div>
        <ServiceGrid services={services} />
      </TabsContent>
    </Tabs>
  );
};

export default ServiceTabs;
