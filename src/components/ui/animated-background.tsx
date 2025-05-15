
import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  opacity?: number;
}

const AnimatedBackground = ({ 
  imageSrc, 
  opacity = 0.2, 
  className, 
  ...props 
}: AnimatedBackgroundProps) => {
  return (
    <div 
      className={cn(
        "absolute inset-0 bg-cover bg-center bg-no-repeat animate-subtle-pulse", 
        className
      )} 
      style={{ 
        backgroundImage: `url(${imageSrc})`,
        opacity 
      }}
      {...props}
    />
  );
};

export default AnimatedBackground;
