
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const QuoteForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    agency: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormState((prev) => ({ ...prev, serviceType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    
    // In a real app, you would send this data to your server
    // For now, we'll just simulate a successful submission
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you within 1-2 business days.",
    });
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="bg-green-100 rounded-full p-4 mb-4">
          <CheckCircle size={48} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Quote Request Submitted</h3>
        <p className="text-gray-600 mb-6 max-w-md">
          Thank you for your interest in our IT audit services. A member of our team will review your request and get back to you within 1-2 business days.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Submit Another Request</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="agency">Agency / Department</Label>
          <Input
            id="agency"
            name="agency"
            placeholder="Enter your agency or department"
            required
            value={formState.agency}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formState.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceType">Service Type</Label>
        <Select onValueChange={handleServiceChange} value={formState.serviceType}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="security-audit">Security Audit</SelectItem>
            <SelectItem value="infrastructure-audit">Infrastructure Audit</SelectItem>
            <SelectItem value="process-audit">Process Audit</SelectItem>
            <SelectItem value="compliance-audit">Compliance Audit</SelectItem>
            <SelectItem value="application-audit">Application Audit</SelectItem>
            <SelectItem value="project-assurance">Project Assurance</SelectItem>
            <SelectItem value="other">Other (Please specify)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Information</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Please provide details about your requirements or any specific questions"
          rows={5}
          value={formState.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" className="w-full">Submit Quote Request</Button>

      <p className="text-sm text-gray-500 text-center">
        Your information will be handled in accordance with our privacy policy.
      </p>
    </form>
  );
};

export default QuoteForm;
