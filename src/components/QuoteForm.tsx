
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Agency data for dropdown - ensure this data is properly initialized and sorted
const agencies = [
  { name: "Agency For Science, Technology And Research", acronym: "ASTAR" },
  { name: "Agri-Food & Veterinary", acronym: "AVA" },
  { name: "Accountant-General's Department", acronym: "AGD" },
  { name: "Attorney-General's Chambers", acronym: "AGC" },
  { name: "Auditor-General's Office", acronym: "AGO" },
  { name: "Building And Construction Authority", acronym: "BCA" },
  { name: "Corrupt Practices Investigation Bureau", acronym: "CPIB" },
  { name: "Council For Estate Agencies", acronym: "CEA" },
  { name: "Cyber Security Agency Of Singapore", acronym: "CSA" },
  { name: "Defence Science And Technology Agency", acronym: "DSTA" },
  { name: "Economic Development Board", acronym: "EDB" },
  { name: "Infocomm Media Development Authority of Singapore", acronym: "IMDA" },
  { name: "Inland Revenue Authority Of Singapore", acronym: "IRAS" },
  { name: "Institute of Technical Education", acronym: "ITE" },
  { name: "Majlis Ugama Islam Singapura", acronym: "MUIS" },
  { name: "Media Development Authority", acronym: "MDA" },
  { name: "Ministry of Culture, Community and Youth", acronym: "MCCY" },
  { name: "Ministry of Defence", acronym: "MINDEF" },
  { name: "Ministry of Digital Development and Information", acronym: "MDDI" },
  { name: "Ministry of Education", acronym: "MOE" },
  { name: "Ministry of Finance", acronym: "MOF" },
  { name: "Ministry of Foreign Affairs", acronym: "MFA" },
  { name: "Ministry of Home Affairs", acronym: "MHA" },
  { name: "Ministry of Law", acronym: "MLAW" },
  { name: "Ministry of Manpower", acronym: "MOM" },
  { name: "Ministry of National Development", acronym: "MND" },
  { name: "Ministry of Social and Family Development", acronym: "MSF" },
  { name: "Ministry of Sustainability and the Environment", acronym: "MSE" },
  { name: "Ministry of Trade and Industry", acronym: "MTI" },
  { name: "Ministry of Transport", acronym: "MOT" },
  { name: "National Arts Council", acronym: "NAC" },
  { name: "National Environment Agency", acronym: "NEA" },
  { name: "National Heritage Board", acronym: "NHB" },
  { name: "National Library Board", acronym: "NLB" },
  { name: "National Parks Board", acronym: "NPB" },
  { name: "Parliament of Singapore", acronym: "PARL" },
  { name: "People's Association", acronym: "PA" },
  { name: "Prime Minister Office", acronym: "PMO" },
  { name: "Public Service Division", acronym: "PSD" },
  { name: "Public Utilities Board", acronym: "PUB" },
  { name: "Science Centre Board", acronym: "SCB" },
  { name: "Singapore Customs", acronym: "CUSTOMS" },
  { name: "Singapore Examinations", acronym: "SEAD" },
  { name: "Singapore Food Agency", acronym: "SFA" },
  { name: "Singapore Labour Foundation", acronym: "SLF" },
  { name: "Sport Singapore", acronym: "SPORTSG" },
  { name: "Tote Board", acronym: "TOTEBOARD" },
  { name: "Urban Redevelopment Authority", acronym: "URA" },
  { name: "Vital", acronym: "VITAL" }
].sort((a, b) => a.name.localeCompare(b.name));

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
  const [open, setOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormState((prev) => ({ ...prev, serviceType: value }));
  };

  const handleAgencyChange = (value: string) => {
    setFormState((prev) => ({ ...prev, agency: value }));
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
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between text-left font-normal"
              >
                {formState.agency
                  ? agencies.find((agency) => 
                      agency.name === formState.agency || agency.acronym === formState.agency
                    )?.name || formState.agency
                  : "Select an agency"}
                <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Command>
                <CommandInput placeholder="Search agency..." />
                <CommandEmpty>No agency found.</CommandEmpty>
                <CommandGroup className="max-h-64 overflow-auto">
                  {agencies.map((agency) => (
                    <CommandItem
                      key={agency.acronym}
                      value={agency.name}
                      onSelect={() => {
                        handleAgencyChange(agency.name);
                        setOpen(false);
                      }}
                    >
                      <div className="flex flex-col">
                        <span>{agency.name}</span>
                        <span className="text-xs text-gray-500">{agency.acronym}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
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
