import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Phone, Mail, FileQuestion, BookOpen, LifeBuoy, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpServices = () => {
  const faqs = [
    {
      question: "What are the audit objectives and scope?",
      answer: "Our audits assess controls across key areas including: Accounts and Access Management (privileged access, security controls, account validation), Security Monitoring (logging, independent review, anomalous activity), Vulnerability Management (remediation processes, patch management, EOSL monitoring), Business Continuity (backup plans, disaster recovery, system redundancy), and more. We tailor the scope to your agency's specific requirements while ensuring alignment with government standards."
    },
    {
      question: "What types of IT audits does GovTech IAD-SS provide?",
      answer: "We provide comprehensive IT audit services including security audits, compliance audits, performance audits, risk assessments, disaster recovery assessments, and custom audit solutions tailored to your agency's specific needs."
    },
    {
      question: "How long does a typical IT audit take to complete?",
      answer: "The duration varies based on the scope and complexity of the audit. A focused audit might take 2-4 weeks, while a comprehensive assessment of a large agency could take 8-12 weeks. During our initial consultation, we'll provide a detailed timeline based on your specific requirements."
    },
    {
      question: "How do we prepare for an IT audit?",
      answer: "We'll provide a pre-audit checklist and documentation request that outlines everything you need to prepare. Typically, this includes access to relevant policies, procedures, system documentation, previous audit reports, and key personnel for interviews. Our team will guide you through the entire preparation process."
    },
    {
      question: "What credentials do your auditors hold?",
      answer: "Our auditors hold various professional certifications including CISA (Certified Information Systems Auditor), CISSP (Certified Information Systems Security Professional), ISO 27001 Lead Auditor, CRISC (Certified in Risk and Information Systems Control), and other relevant qualifications. You can view specific credentials in our Auditor's Portfolio section."
    },
    {
      question: "How much disruption will an audit cause to our operations?",
      answer: "We design our audit processes to minimize disruption to your daily operations. Most of our work involves documentation review, system testing during non-peak hours, and scheduled interviews with staff. We work closely with your team to ensure the audit activities don't interfere with critical business functions."
    },
    {
      question: "What happens after the audit is complete?",
      answer: "After completing the audit, we provide a comprehensive report detailing our findings, identified risks, and specific recommendations. We then schedule a debriefing session to walk through the results and answer any questions. Additionally, we offer post-audit support to help implement our recommendations and can conduct follow-up assessments to verify improvements."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner 
          title="Help Services"
          description="Get assistance with our IT audit services, find answers to common questions, and learn how to make the most of our offerings."
          backgroundImage="/lovable-uploads/1526374965328-7f61d4dc18c5.png"
        />
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <HelpCircle className="text-primary" size={24} />
                </div>
                <h2 className="text-xl font-bold mb-3">Frequently Asked Questions</h2>
                <p className="text-gray-600 mb-4">Find answers to common questions about our IT audit services and processes.</p>
                <a href="#faqs" className="text-primary font-medium flex items-center">
                  View FAQs <ArrowRight className="ml-1" size={16} />
                </a>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h2 className="text-xl font-bold mb-3">Knowledge Base</h2>
                <p className="text-gray-600 mb-4">Access guides, best practices, and resources to enhance your understanding of IT audits.</p>
                <Button variant="outline" className="text-primary" asChild>
                  <a href="https://intranet.mof.gov.sg/portal/IM/Themes/IT-Management.aspx" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Browse Resources <ExternalLink className="ml-1" size={16} />
                  </a>
                </Button>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <LifeBuoy className="text-primary" size={24} />
                </div>
                <h2 className="text-xl font-bold mb-3">Contact Support</h2>
                <p className="text-gray-600 mb-4">Need personalized assistance? Our support team is ready to help with your inquiries.</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="text-primary mr-2" size={16} />
                    <span className="text-gray-700">(+65) 6211 0888</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-primary mr-2" size={16} />
                    <span className="text-gray-700">support@tech.gov.sg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="faqs" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-6">
                  <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                  <p className="text-gray-600 max-w-xl">
                    If you couldn't find the information you're looking for, our team is ready to assist. Get in touch with us for personalized support.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline">
                    <Link to="/contact" className="flex items-center">
                      <Phone className="mr-2" size={16} />
                      Contact Us
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link to="/quote" className="flex items-center">
                      <FileQuestion className="mr-2" size={16} />
                      Request a Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpServices;
