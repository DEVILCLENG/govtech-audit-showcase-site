
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, FileCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const AuditorsPortfolio = () => {
  const auditors = [
    // Lead Auditors first
    {
      name: "Koh Sook Bing",
      title: "Lead Auditor",
      certifications: ["CISA", "Masters in Technology"],
      expertise: ["Technology Audit", "Data Science", "Risk & Analytics"],
      yearsExperience: "10+",
      profile: "Sook Bing is an experienced technology auditor with a well-balanced mix of both internal and external audit experience in the financial services and government sector. Prior to joining Govtech, Sook had her previous stints in E&Y, PwC(UK), Standard Aberdeen (UK) and GIC. She spent nearly a decade working in London where she built up a track record of managing diverse multi-disciplinary teams and leading complex global audit engagements for international companies from Western Europe and North America. She also advises on topics such as Technology, Risk & Analytics. She was also the data science champion in her previous audit roles. She holds a Masters Degree in Technology (Intelligent Systems) from NUS together with an accounting degree from NTU. She is a qualified accountant and a certified infosystem auditor."
    },
    {
      name: "Linus Teo",
      title: "Lead Auditor",
      certifications: ["CISA", "CCSK"],
      expertise: ["ICT Infrastructure", "Trading Room Infrastructure", "Market Data Infrastructure"],
      yearsExperience: "24",
      profile: "Has 24 years of ICT experience in public sector, banking and system integrator environment. He was with GIG managing central services such as GoMAX, SG-VPN and SG-EPP. Prior to joining GovTech and armed with an EEE degree from NTU, he spent 11 years in a demanding trading room environment (DBS and OCBC). His areas of responsibility includes the implementation and maintenance of trading room infra (data center facilities, firewalls, network, fire safety, BCP, etc) and market data infra (Bloomberg, Reuters, etc) in Singapore, Mumbai, Seoul, Shanghai, Taipei and Jakarta. His information security certifications CISA (Certified Information System Auditor) and CCSK (Certificate of Cloud Security Knowledge)"
    },
    {
      name: "Leonard Siau",
      title: "Lead Auditor",
      certifications: ["CISA", "CISSP", "CCSP"],
      expertise: ["Cloud Architecture", "Identity Management", "Infrastructure Consulting"],
      yearsExperience: "20+",
      profile: "Leonard comes from an infrastructure consulting background and has been a Cloud, Identity and collaboration architect/consultant for 20+ years. He has worked for companies such as Microsoft, NCS/Singtel, Hewlett Packard and Dimension Data. In his career, he has engaged with numerous enterprise clientele across various industry verticals such as public sector, media and communications, manufacturing, travel and transport and financial services. In Govtech, he has worked on major projects such as GDC, Government Private Cloud, Government Commercial Cloud, Digital Workplace Program and NDI. He holds a Bachelor's Degree in Information Systems from the University of Melbourne and as well multiple professional technical certifications in AWS, Azure and Microsoft. Relevant certifications include CISA, CISSP and CCSP."
    },
    // Senior Auditors second
    {
      name: "Isaac Lau",
      title: "Senior Auditor",
      certifications: ["CISA", "CCSK"],
      expertise: ["Risk Management", "Access Security", "IT General Controls", "Business Continuity Management"],
      yearsExperience: "10+",
      profile: "Isaac is a qualified CISA (Certified Information System Auditor) with more than 10 years of working experiences in both external and internal audits in the financial services, manufacturing and government sector. Prior to joining GovTech, Isaac was the Senior Internal Auditor with one of the local Financial Institution in Singapore and Audit Lead for multiple engagements in the Group Audit function inclusive of CII systems. His areas of specialisation include risk management, access security, IT General Controls, Business Continuity Management, Outsourcing Arrangements, application and infrastructure security controls. Isaac developed risk and controls library for IM8 policies and standards, and possesses strong working knowledge on MAS Technology Risk Management Framework, ABS OSPAR Framework and COBIT5 Framework. Isaac holds a Bachelor's Degree in Information System and major in Accountancy from Singapore Management University. His relevant certifications include CISA and CCSK (Certificate of Cloud Security Knowledge)."
    },
    {
      name: "Luke Chang",
      title: "Senior Auditor",
      certifications: ["CISSP", "CISA", "CRISC", "CISM"],
      expertise: ["Information Security Audits", "Risk Assessments", "Threat Modeling"],
      yearsExperience: "12+",
      profile: "Luke has been in the Information Technology industry for more than 12 years, where he has always focused on delivering valued outcomes to his clients. Prior to joining GovTech, he was part of Ensign InfoSecurity's consulting arm. There, he led the GRC Team in the delivery of both external and internal information security audits against frameworks and standards such as NIST, PCI DSS, CCoP, and IEC/ISO 27001. Luke has conducted several risk assessments using well-known frameworks, where his most recent one took a threat-informed approach, leveraging cyber threat intelligence, the MITRE ATT&CK framework, and STRIDE threat modelling. His relevant information security certifications include CISSP, CISA, CRISC, and CISM. He holds a Bachelor's Degree in Cyber Forensics, Information Security and Management and Business Information Systems."
    },
    {
      name: "Leslie Ho",
      title: "Senior Auditor",
      certifications: ["CISA", "CISSP", "CCSP"],
      expertise: ["IT Infrastructure", "Security", "Vulnerability Management"],
      yearsExperience: "20+",
      profile: "Leslie has over 20 years of experience in IT Infrastructure and security and had held roles in servers, network and security in the Logistics, Education and telecommunication sectors. Prior to joining ACD, he was seconded as Technical Services Manager (TSM) to a Ministry to oversee the IT Infrastructure services and deliver valued IT services to the Ministry. During his stint with the Ministry, he led the vulnerability management programme and implemented stringent regime to strengthen the vulnerability hygiene posture. His relevant information security certifications include CISA and CISSP, CCSP. He holds a Bachelor's Degree (Hons) in Business Information Technology."
    },
    {
      name: "Abdillah Ali",
      title: "Senior Auditor",
      certifications: ["CISA", "CCSK", "CISSP", "CCSP"],
      expertise: ["IT Operations", "Cybersecurity", "Systems Integration"],
      yearsExperience: "18",
      profile: "Abdillah has been working in various IT roles over the past 18 years and took interest in cybersecurity, governance and compliance recently. He has held roles in contributing to the strategic planning, budgeting, design, development, implementation and enforcement of IT operational procedures, policies and standards associated with servers/endpoint security protection technologies for the Whole of Government since 2015. Prior to joining GovTech, he was leading system integration projects, technical support and administration for systems and software for customers such as Changi General Hospital and the Ministry of Education. He is undergoing relevant information security certifications which includes CISA and CCSK, CISSP, CCSP"
    },
    // Regular Auditors last
    {
      name: "Vivien Yeo",
      title: "Auditor",
      certifications: ["CISA", "CCSK"],
      expertise: ["Internal IT Audits", "Application & Infrastructure Audits", "IT General Controls"],
      yearsExperience: "27", // 12 years audit + 15 years IT
      profile: "Vivien has close to 12 years of working experiences in internal IT audits, mainly with the financial services. Prior to audit, she has 15 years of IT experience in the defence, telecommunication, manufacturing and financial sectors. Prior joining GovTech, she has led and/or participated in audits on applications, infrastructure, data centre, project management, outsourcing / third party management, IT general controls, service management, technology governance, and cybersecurity. Vivien holds a Bachelor of Science Degree, from National University of Singapore (in Computational Science and Chemistry). Her relevant information security certifications include CISA (Certified Information System Auditor) and CCSK (Certificate of Cloud Security Knowledge)."
    },
    {
      name: "Jeremy Low",
      title: "Auditor",
      certifications: ["CISA", "CISM"],
      expertise: ["Infrastructure", "Security", "Technical Services"],
      yearsExperience: "8+",
      profile: "Held infrastructure roles in servers, network, desktop and security as technical services consultant (TSC). Supported Agencies like SportSG, MOM and GovTech since 2015. Notable key projects undertaken include the 28th SEA and Para Games with SportSG, GPC cloud migration, facial recognition trials at MOM and Digital Governance Platform (DGP) system for GVG GovTech. His relevant information security certifications include CISA and CISM."
    },
    {
      name: "Cecilia Leng",
      title: "Auditor",
      certifications: ["CISA", "CRISC", "ITIL 4", "CQM", "CISSP", "CCSP"],
      expertise: ["Governance", "Compliance", "Internal Audits", "Third Party Management"],
      yearsExperience: "24+", // 10 years IT + 14 years global
      profile: "Cecilia has more than 10 years of IT experience specializing in governance, compliance, internal audits, and as a single Point-Of-Contact (POC) for 3rd party audits in defence, telecommunication, and healthcare industries. Prior to joining ATS (Assurity Trusted Solutions), she has more than 14 years global experiences in leading 1st and 2nd party auditing, Third Party management, spearheading business improvements initiatives, new business functions setup and business re-constructions using LEAN Six-Sigma methodology in Oil and Gas, Chemical, Automotive and Semi-conductor industries. Her relevant certifications include CISA (Certified Information System Auditor), CRISC (Certified Risk Information System Certification), ITIL 4 (Information Technology Infrastructure Library), and CQM (Certified Quality Manager), CISSP and CCSP."
    },
    {
      name: "Eileen Tan",
      title: "Auditor",
      certifications: ["CISSP", "CISA"],
      expertise: ["ICT Infrastructure Management", "UNIX Engineering", "System Platforms"],
      yearsExperience: "19",
      profile: "Eileen has 19 years of experience in ICT infrastructure management. Using her extensive technical experience in designing, deploying and managing enterprise level ICT infrastructure, she collaborates with service providers to design, develop, deploy and configure infrastructure to meet resiliency, availability and data integrity needs. Prior to joining GovTech, Eileen led and managed the UNIX engineering team, responsible for maintaining the Unix system platform hosting mission critical applications. She also took the lead on upgrade projects to enhance the platform's performance and capabilities. Her relevant information security certification includes CISSP, CISA. She holds a Bachelor's Degree in Information Technology with double major in Systems Development and Network Technology."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Audit Professionals</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Meet our team of certified IT audit specialists with extensive experience working with government agencies.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Table was removed from here */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {auditors.map((auditor, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-primary text-white">
                          {auditor.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold">{auditor.name}</h3>
                        <p className="text-sm text-gray-600">{auditor.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <Award className="text-primary mr-2" size={18} />
                      <span className="text-sm font-medium">Certifications:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {auditor.certifications.map((cert, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-md">
                          {cert}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <Users className="text-primary mr-2" size={18} />
                      <span className="text-sm font-medium">Experience: {auditor.yearsExperience} years</span>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      <FileCheck className="text-primary mr-2" size={18} />
                      <span className="text-sm font-medium">Areas of Expertise:</span>
                    </div>
                    <ul className="text-sm text-gray-600 mb-4 ml-6 list-disc">
                      {auditor.expertise.map((area, idx) => (
                        <li key={idx}>{area}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-700 line-clamp-4">{auditor.profile}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Why Choose Our Auditors?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Government Experience</h3>
                  <p className="text-gray-600">Our auditors specialize in government IT systems and understand their unique requirements and challenges.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Certified Professionals</h3>
                  <p className="text-gray-600">All our auditors hold industry-recognized certifications and stay updated with the latest standards.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">Our team has successfully completed hundreds of IT audits across different government agencies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to work with our expert auditors?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our audit professionals can help your agency improve security, compliance, and performance.
            </p>
            <Button asChild size="lg">
              <Link to="/quote" className="flex items-center">
                Request a Quote <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AuditorsPortfolio;
