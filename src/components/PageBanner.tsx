
import React from "react";

interface PageBannerProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const PageBanner = ({ title, description, backgroundImage = "/lovable-uploads/5c8478f1-fd07-4631-bf58-dbf185c07c13.png" }: PageBannerProps) => {
  return (
    <div className="bg-primary text-white py-16 relative overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-lg max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
