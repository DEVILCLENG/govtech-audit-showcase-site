
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    // Get current count from localStorage
    const storedCount = localStorage.getItem("siteVisitCount");
    let newCount = 1;
    
    if (storedCount) {
      newCount = parseInt(storedCount) + 1;
    }
    
    // Update localStorage
    localStorage.setItem("siteVisitCount", newCount.toString());
    setVisitCount(newCount);
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto border-2 border-primary/20 shadow-md">
      <CardContent className="flex items-center justify-center p-6 space-x-3">
        <Eye className="h-6 w-6 text-primary" />
        <div className="text-center">
          <p className="text-lg font-medium">Site Visit Count</p>
          <p className="text-3xl font-bold text-primary">{visitCount}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default VisitCounter;
