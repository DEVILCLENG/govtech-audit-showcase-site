
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Benefits from "./pages/Benefits";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import AuditorsPortfolio from "./pages/AuditorsPortfolio";
import HelpServices from "./pages/HelpServices";
import ThoughtLeadership from "./pages/ThoughtLeadership";
import AnnualAuditPlan from "./pages/AnnualAuditPlan";
import AuditTools from "./pages/AuditTools";
import IssuesDashboard from "./pages/IssuesDashboard";
import KnowledgeManagement from "./pages/KnowledgeManagement";
import AuditFrameworks from "./pages/AuditFrameworks";
import WorkpaperTemplates from "./pages/WorkpaperTemplates";
import OurClients from "./pages/OurClients";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/auditors-portfolio" element={<AuditorsPortfolio />} />
          <Route path="/help-services" element={<HelpServices />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/thought-leadership" element={<ThoughtLeadership />} />
          <Route path="/annual-audit-plan" element={<AnnualAuditPlan />} />
          <Route path="/audit-tools" element={<AuditTools />} />
          <Route path="/issues-dashboard" element={<IssuesDashboard />} />
          <Route path="/knowledge-management" element={<KnowledgeManagement />} />
          <Route path="/audit-frameworks" element={<AuditFrameworks />} />
          <Route path="/workpaper-templates" element={<WorkpaperTemplates />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
