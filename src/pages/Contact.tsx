
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    
    // In a real app, you would send this data to your server
    toast({
      title: "Message Sent",
      description: "We've sent you a confirmation email with the details of your message.",
    });
    
    setIsSubmitted(true);
  };

  const handleNewMessage = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Contact Us"
          description="Have questions or ready to discuss your IT audit needs? Our team is here to help you navigate the complexities of government IT systems."
          backgroundImage="/lovable-uploads/1470813740244-df37b8c1edcb.png"
        />
        
        <ContactSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-8 bg-green-50 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for contacting us. A confirmation has been sent to <span className="font-medium">{formData.email}</span>.
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Our team will review your message and get back to you as soon as possible.
                  </p>
                  
                  <div className="mt-2 bg-white p-6 border rounded-lg max-w-lg mx-auto shadow-sm">
                    <div className="text-left">
                      <div className="border-b pb-2 mb-4">
                        <div className="flex items-center">
                          <MessageSquare size={16} className="text-primary mr-2" />
                          <span className="font-medium">Auto-Reply: Message Received</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          From: <span className="text-gray-700">no-reply@tech.gov.sg</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          To: <span className="text-gray-700">{formData.email}</span>
                        </div>
                      </div>
                      <p className="text-sm mb-3">Dear {formData.name},</p>
                      <p className="text-sm mb-3">
                        Thank you for contacting our IT Audit Services team. This email confirms that we have received your message regarding "{formData.subject}".
                      </p>
                      <p className="text-sm mb-3">
                        A member of our team will review your inquiry and respond within 1-2 business days.
                      </p>
                      <p className="text-sm mb-5">Thank you for your patience.</p>
                      <p className="text-sm">Best regards,</p>
                      <p className="text-sm font-medium">IT Audit Services Team</p>
                    </div>
                  </div>
                  
                  <Button onClick={handleNewMessage} className="mt-6">Send Another Message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
