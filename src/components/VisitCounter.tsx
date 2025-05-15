
import { useEffect, useState } from "react";
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
    <div className="flex items-center text-gray-400 hover:text-white transition-colors">
      <Eye className="h-4 w-4 mr-2" />
      <span className="text-sm">Visits: {visitCount}</span>
    </div>
  );
};

export default VisitCounter;
