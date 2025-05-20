
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
        <ServiceGrid services={services} />
      </TabsContent>
    </Tabs>
  );
};

export default ServiceTabs;
