
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Mail, ChevronDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import EmailConfirmation from "./EmailConfirmation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

// Service type options
const serviceTypes = [
  { value: "audit-planning", label: "Audit Planning" },
  { value: "ict-system-audit", label: "ICT System Audit (Thermatic)" },
  { value: "secret-system-audit", label: "Secret System Audit" },
  { value: "ccop-audit", label: "CCOP Audit" },
  { value: "data-analytics", label: "Data Analytics" },
  { value: "pre-implementation-review", label: "Pre-Implementation Review" },
  { value: "integrated-audit", label: "Integrated Audit" },
  { value: "sudo-configurations", label: "Sudo Configurations" },
  { value: "third-party-management-audit", label: "Third Party Management Audit (ITSM/ Exit)" },
  { value: "others", label: "Others" }
];

const initialFormState = {
  name: "",
  email: "",
  agency: "",
  otherAgency: "",
  department: "",
  phone: "",
  serviceTypes: [],
  otherServiceType: "",
  message: "",
  systemCriticality: "",
  dataSensitivity: "",
  internetAccessibility: "",
  ciiSii: "",
};

const QuoteForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendConfirmation, setSendConfirmation] = useState(true);
  const [validationErrors, setValidationErrors] = useState({
    agency: false,
    serviceTypes: false,
    systemCriticality: false,
    dataSensitivity: false,
    internetAccessibility: false,
    ciiSii: false,
  });
  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    
    // Clear validation error when a selection is made
    if (validationErrors[field]) {
      setValidationErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleAgencyChange = (value: string) => {
    // Reset otherAgency if the selected agency is not "other"
    if (value !== "other") {
      setFormState((prev) => ({ ...prev, agency: value, otherAgency: "" }));
    } else {
      setFormState((prev) => ({ ...prev, agency: value }));
    }
    
    setValidationErrors(prev => ({ ...prev, agency: false }));
  };

  const handleServiceTypeChange = (value: string, checked: boolean) => {
    let updatedServiceTypes = [...formState.serviceTypes];
    
    if (checked) {
      updatedServiceTypes.push(value);
    } else {
      updatedServiceTypes = updatedServiceTypes.filter(type => type !== value);
    }
    
    setFormState(prev => ({ ...prev, serviceTypes: updatedServiceTypes }));
    setSelectedServiceTypes(updatedServiceTypes);
    
    // Reset otherServiceType if "others" is not selected
    if (!updatedServiceTypes.includes("others")) {
      setFormState(prev => ({ ...prev, otherServiceType: "" }));
    }
    
    setValidationErrors(prev => ({ ...prev, serviceTypes: false }));
  };

  const handleSystemCriticalityChange = (value: string) => {
    handleSelectChange("systemCriticality", value);
  };

  const handleDataSensitivityChange = (value: string) => {
    handleSelectChange("dataSensitivity", value);
  };

  const handleInternetAccessibilityChange = (value: string) => {
    handleSelectChange("internetAccessibility", value);
  };
  
  const handleCiiSiiChange = (value: string) => {
    handleSelectChange("ciiSii", value);
  };

  const getSelectedServiceLabels = () => {
    return formState.serviceTypes.map(value => {
      const service = serviceTypes.find(type => type.value === value);
      return service ? service.label : "";
    }).filter(Boolean).join(", ");
  };

  const validateForm = () => {
    const errors = {
      agency: !formState.agency || (formState.agency === "other" && !formState.otherAgency),
      serviceTypes: formState.serviceTypes.length === 0,
      systemCriticality: !formState.systemCriticality,
      dataSensitivity: !formState.dataSensitivity,
      internetAccessibility: !formState.internetAccessibility,
      ciiSii: !formState.ciiSii,
    };
    
    setValidationErrors(errors);
    
    return !Object.values(errors).some(hasError => hasError);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please complete all required fields",
        description: "Some required fields are missing. Please check the form for alerts.",
        variant: "destructive",
      });
      return;
    }
    
    // Prepare data for submission
    const submissionData = {
      ...formState,
      // Use otherAgency as the agency name if "other" is selected
      agency: formState.agency === "other" ? formState.otherAgency : formState.agency,
    };
    
    console.log("Form submitted:", submissionData);
    console.log("Send confirmation email:", sendConfirmation);
    
    // In a real app, you would send this data to your server
    // and handle email sending there
    if (sendConfirmation && formState.email) {
      // Simulate sending confirmation email
      console.log("Sending confirmation email to:", formState.email);
    }
    
    toast({
      title: "Quote Request Submitted",
      description: sendConfirmation 
        ? "We'll get back to you within 1-2 business days. A confirmation has been sent to your email."
        : "We'll get back to you within 1-2 business days.",
    });
    
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setFormState(initialFormState);
    setSendConfirmation(true);
    setIsSubmitted(false);
    setSelectedServiceTypes([]);
    setValidationErrors({
      agency: false,
      serviceTypes: false,
      systemCriticality: false,
      dataSensitivity: false,
      internetAccessibility: false,
      ciiSii: false,
    });
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
          {sendConfirmation && (
            <span className="block mt-2">
              <Mail className="inline-block mr-1 text-primary" size={16} />
              A confirmation has been sent to your email.
            </span>
          )}
        </p>
        <Button onClick={handleResetForm}>Submit Another Request</Button>
        
        {/* Preview of the email that would be sent (in a real app this would be sent to the server) */}
        {sendConfirmation && (
          <div className="mt-8 border rounded-lg p-4 w-full max-w-2xl">
            <h4 className="text-sm font-medium mb-2 text-gray-500">Email Preview:</h4>
            <div className="border rounded">
              <EmailConfirmation 
                name={formState.name} 
                email={formState.email} 
                agency={formState.agency === "other" ? formState.otherAgency : formState.agency} 
                serviceType={getSelectedServiceLabels()} 
              />
            </div>
          </div>
        )}
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
          <Label htmlFor="agency">Agency</Label>
          <Select onValueChange={handleAgencyChange} value={formState.agency}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an agency" />
            </SelectTrigger>
            <SelectContent>
              {agencies.map((agency) => (
                <SelectItem key={agency.acronym} value={agency.name}>
                  <div className="flex flex-col">
                    <span>{agency.name}</span>
                    <span className="text-xs text-gray-500">{agency.acronym}</span>
                  </div>
                </SelectItem>
              ))}
              <SelectItem value="other">
                <div className="flex flex-col">
                  <span>Other</span>
                  <span className="text-xs text-gray-500">Not in the list</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          {validationErrors.agency && (
            <Alert variant="destructive" className="mt-2 py-2">
              <AlertDescription>Please select an agency</AlertDescription>
            </Alert>
          )}
          
          {formState.agency === "other" && (
            <div className="mt-2">
              <Input
                id="otherAgency"
                name="otherAgency"
                placeholder="Enter agency name"
                value={formState.otherAgency}
                onChange={handleChange}
                className="mt-1"
                required={formState.agency === "other"}
              />
              {formState.agency === "other" && validationErrors.agency && !formState.otherAgency && (
                <Alert variant="destructive" className="mt-2 py-2">
                  <AlertDescription>Please enter agency name</AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Input
            id="department"
            name="department"
            placeholder="Enter your department"
            value={formState.department}
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
        
        <div className="space-y-2">
          <Label htmlFor="serviceTypes">Service Type</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {formState.serviceTypes.length > 0 
                  ? `${formState.serviceTypes.length} selected` 
                  : "Select service types"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-[200px]">
              {serviceTypes.map((service) => (
                <DropdownMenuCheckboxItem
                  key={service.value}
                  checked={formState.serviceTypes.includes(service.value)}
                  onCheckedChange={(checked) => handleServiceTypeChange(service.value, checked)}
                >
                  {service.label}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {validationErrors.serviceTypes && (
            <Alert variant="destructive" className="mt-2 py-2">
              <AlertDescription>Please select at least one service type</AlertDescription>
            </Alert>
          )}
          
          {formState.serviceTypes.includes("others") && (
            <div className="mt-2">
              <Label htmlFor="otherServiceType" className="text-sm">Please specify</Label>
              <Textarea
                id="otherServiceType"
                name="otherServiceType"
                placeholder="Please specify the service type"
                value={formState.otherServiceType}
                onChange={handleChange}
                required={formState.serviceTypes.includes("others")}
                className="mt-1"
                rows={6}
                maxLength={3000}
              />
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="systemCriticality">System Criticality</Label>
          <Select onValueChange={handleSystemCriticalityChange} value={formState.systemCriticality}>
            <SelectTrigger>
              <SelectValue placeholder="Select system criticality level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="official-closed">Official Closed</SelectItem>
              <SelectItem value="restricted">Restricted</SelectItem>
              <SelectItem value="confidential">Confidential</SelectItem>
              <SelectItem value="secret">Secret</SelectItem>
            </SelectContent>
          </Select>
          {validationErrors.systemCriticality && (
            <Alert variant="destructive" className="mt-2 py-2">
              <AlertDescription>Please select system criticality level</AlertDescription>
            </Alert>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="dataSensitivity">Data Sensitivity</Label>
          <Select onValueChange={handleDataSensitivityChange} value={formState.dataSensitivity}>
            <SelectTrigger>
              <SelectValue placeholder="Select data sensitivity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="non-sensitive">Non-sensitive</SelectItem>
              <SelectItem value="sensitive-normal">Sensitive Normal</SelectItem>
              <SelectItem value="sensitive-high">Sensitive High</SelectItem>
            </SelectContent>
          </Select>
          {validationErrors.dataSensitivity && (
            <Alert variant="destructive" className="mt-2 py-2">
              <AlertDescription>Please select data sensitivity level</AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="internetAccessibility">Internet Accessibility</Label>
          <Select onValueChange={handleInternetAccessibilityChange} value={formState.internetAccessibility}>
            <SelectTrigger>
              <SelectValue placeholder="Select internet accessibility level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="not-internet-accessible">Not Internet Accessible</SelectItem>
              <SelectItem value="not-internet">Not Internet</SelectItem>
              <SelectItem value="intranet">Intranet</SelectItem>
              <SelectItem value="internet-facing">Internet-facing</SelectItem>
              <SelectItem value="internet-accessible">Internet Accessible</SelectItem>
            </SelectContent>
          </Select>
          {validationErrors.internetAccessibility && (
            <Alert variant="destructive" className="mt-2 py-2">
              <AlertDescription>Please select internet accessibility level</AlertDescription>
            </Alert>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="ciiSii">CII/SII Classification</Label>
          <Select onValueChange={handleCiiSiiChange} value={formState.ciiSii}>
            <SelectTrigger>
              <SelectValue placeholder="Select CII/SII classification" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cii">CII (Critical Information Infrastructure)</SelectItem>
              <SelectItem value="sii">SII (Strategic Information Infrastructure)</SelectItem>
              <SelectItem value="non-cii-sii">Non-CII/SII</SelectItem>
              <SelectItem value="not-applicable">Not Applicable</SelectItem>
            </SelectContent>
          </Select>
          {validationErrors.ciiSii && (
            <Alert variant="destructive" className="mt-2 py-2">
              <AlertDescription>Please select CII/SII classification</AlertDescription>
            </Alert>
          )}
        </div>
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

      <div className="flex items-center space-x-2">
        <Checkbox
          id="sendConfirmation"
          checked={sendConfirmation}
          onCheckedChange={(checked) => setSendConfirmation(!!checked)}
          className="h-4 w-4 rounded border-gray-300 text-primary"
        />
        <Label htmlFor="sendConfirmation" className="text-sm">
          Send me a confirmation email with details of my quote request
        </Label>
      </div>

      <Button type="submit" className="w-full">Submit Quote Request</Button>

      <p className="text-sm text-gray-500 text-center">
        Your information will be handled in accordance with our privacy policy.
      </p>
    </form>
  );
};

export default QuoteForm;
