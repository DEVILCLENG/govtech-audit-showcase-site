
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, ChevronRight, FileCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

const AuditorsPortfolio = () => {
  const [expandedBio, setExpandedBio] = useState<number | null>(null);
  const [leaderBioExpanded, setLeaderBioExpanded] = useState<boolean>(false);

  const toggleBio = (index: number) => {
    setExpandedBio(expandedBio === index ? null : index);
  };

  const toggleLeaderBio = () => {
    setLeaderBioExpanded(!leaderBioExpanded);
  };

  // Updated image mapping for auditors with new Senior Auditor images
  const auditorImages = {
    "Nicholas Bok": "/lovable-uploads/8e491009-dcdb-4d20-88a2-0973d3d19221.png",
    "Koh Sook Bing": "/lovable-uploads/84af9c73-bb62-4053-a7b9-ecb62d4f6b98.png",
    "Linus Teo": "/lovable-uploads/00400227-a0ad-4dd9-bfcc-e7f082ed7250.png",
    "Leonard Siau": "/lovable-uploads/776f0a9d-0232-4a67-b5d1-479d01e7c4c9.png",
    "Isaac Lau": "/lovable-uploads/d0cd6c6f-0e7a-478a-91a6-9e76e9d86382.png", // Updated with new Senior Auditor image
    "Luke Chang": "/lovable-uploads/f55c9fee-9a81-4c53-9764-57681ffee863.png", // Updated with new Senior Auditor image
    "Leslie Ho": "/lovable-uploads/9295bb61-4cdd-4986-b769-4bd6b9909c44.png", // Updated with new Senior Auditor image
    "Abdillah Ali": "/lovable-uploads/80d13b51-9abc-4db2-bbe0-aee16134855e.png", // Updated with new Senior Auditor image
    "Vivien Yeo": "/lovable-uploads/8b639a41-0f8e-4e48-b2d1-b8526bd838b6.png",
    "Jeremy Low": "/lovable-uploads/c1630ab0-a1fa-495c-98f6-c0a1832949ce.png",
    "Cecilia Leng": "/lovable-uploads/e14c662f-3a5b-4800-aca2-dc86a4db90a5.png",
    "Eileen Tan": "/lovable-uploads/828c9d2b-858f-41d3-8f6f-b51f94834701.png",
    "Lionel Lee": "/lovable-uploads/aafd1849-65d2-4ced-aa0e-3c99c1f1e7cf.png",
    "Josephine Foo": "/lovable-uploads/f5de7d67-44a4-4ddc-815e-f3cc07a9cdb3.png",
    "Hermas Chong": "/lovable-uploads/f5ffcb4b-61f0-4537-b0dd-b9bd14c7ac13.png"
  };

  // Leadership section
  const leader = {
    name: "Nicholas Bok",
    title: "Group Chief Internal Auditor, MDDI, Director, Internal Audit and IT Audit Shared Services",
    certifications: ["CFA", "CA", "CIA", "CFE"],
    expertise: ["Audit management and transformation", "Integrated audits", "Data analytics"],
    yearsExperience: "20+",
    profile: "Nicholas is a seasoned risk and control specialist with over 20 years of experience in both internal and external audits. He has extensive experience in leading data-driven integrated audits that encompass both business and IT areas within the financial industry. Nicholas is also skilled in change management and audit transformation. His previous roles include positions at GIC, UBS and PwC."
  };
  
  // Updated auditors array, organized by designation
  // 1. Deputy Directors
  const deputyDirectors = [
    {
      name: "Koh Sook Bing",
      title: "Deputy Director",
      certifications: ["CISA", "Masters in Technology"],
      expertise: ["Technology Audit", "Data Science", "Risk & Analytics"],
      yearsExperience: "10+",
      profile: "Sook Bing is an experienced technology auditor with a well-balanced mix of both internal and external audit experience in the financial services and government sector. Prior to joining Govtech, Sook had her previous stints in E&Y, PwC(UK), Standard Aberdeen (UK) and GIC. She spent nearly a decade working in London where she built up a track record of managing diverse multi-disciplinary teams and leading complex global audit engagements for international companies from Western Europe and North America. She also advises on topics such as Technology, Risk & Analytics. She was also the data science champion in her previous audit roles. She holds a Masters Degree in Technology (Intelligent Systems) from NUS together with an accounting degree from NTU. She is a qualified accountant and a certified infosystem auditor."
    },
    {
      name: "Lionel Lee",
      title: "Deputy Director",
      certifications: ["GIAC", "CCSK"],
      expertise: ["Technology Audits", "Cloud Security", "Business Continuity", "Management", "Data Analytics"],
      yearsExperience: "17",
      profile: "Lionel has diverse experience in both internal and external IT audits covering government, financial, hospitality and healthcare industries. His previous companies include KPMG and GIC, with strong knowledge in public and private cloud security, network, infrastructure, data loss prevention, identity and access management and business continuity management."
    }
  ];
  
  // 2. Lead Auditors
  const leadAuditors = [
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
    {
      name: "Josephine Foo",
      title: "Lead Auditor",
      certifications: ["CISA", "CISM"],
      expertise: ["Risk Management", "Access Security", "IT General Controls", "Business Continuity Management", "Outsourcing Arrangements"],
      yearsExperience: "20+",
      profile: "Josephine has more than 20 years of working experiences in the technology and financial services sector. She first started out as a systems analyst then project manager before switching to IT internal audit. Prior joining GovTech, Josephine was the Risk Officer with one of the local Healthcare Institution that design and develop the control healthcare library that comprise of expected control objectives to comply with security and risk policies. Her areas of specialisation for IT audit include risk management, access security, IT General Controls, Business Continuity Management, Outsourcing Arrangements, application and Infrastructure security controls. Also, she has conducted regulatory reviews to assess the technology risk and cyber security posture of financial institutions in Asia Pacific. She holds a bachelor's degree in Computer Science major in Information System from Australia Deakin University and relevant certifications such as CISA and CISM."
    }
  ];
  
  // 3. Senior Auditors
  const seniorAuditors = [
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
    {
      name: "Hermas Chong",
      title: "Senior Auditor",
      certifications: ["CISA", "ITIL"],
      expertise: ["Infrastructure Service Management", "Incident, Problem and Change Management", "IT operation and Vendor Management", "End User Computing Management"],
      yearsExperience: "20+",
      profile: "Hermas has established himself as a seasoned IT leader across diverse sectors managing critical government-wide ICT incidents in GovTech. His leadership at DHL Global Forwarding as Lead Regional Infrastructure Services showcased his ability to manage IT operations across 21 APAC countries. In the healthcare sector, he strengthened IT infrastructure at Integrated Health Information System (IHiS). His manufacturing sector expertise was developed at Acument Asia Pacific and FCI Asia Pacific, where he managed ERP systems and B2B/EDI processes. At Baan Asia Pacific, he provided technical consultancy for ERP and E-Business Suite implementations, while at Singapore Computer System, he focused on ERP software development."
    }
  ];
  
  // 4. Regular Auditors
  const regularAuditors = [
    {
      name: "Vivien Yeo",
      title: "Auditor",
      certifications: ["CISA", "CCSK"],
      expertise: ["Internal IT Audits", "Application & Infrastructure Audits", "IT General Controls"],
      yearsExperience: "27",
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
      yearsExperience: "24+",
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

  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <PageBanner title="Our Team" description="Meet our team of certified IT audit specialists with extensive experience working with government agencies." backgroundImage="/lovable-uploads/1500673922987-e212871fec22.png" />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <p className="text-gray-700 text-base md:text-xl lg:text-xl">
                Our team of IT Audit experts, armed with industry certifications and extensive hands-on experience working with Agencies, serves as your trusted advisors. We identify gaps and provide appropriate recommendation to guide Agencies towards building a resilient cybersecurity posture for the future Singapore.
              </p>
            </div>
            
            {/* Leadership Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">Leadership</h2>
              <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                      <Avatar className="h-24 w-24 md:h-32 md:w-32">
                        <AvatarImage src={auditorImages[leader.name]} alt={`${leader.name} photo`} />
                        <AvatarFallback className="bg-primary text-white text-2xl">
                          {leader.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">{leader.name}</h3>
                        <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-1">{leader.title}</p>
                        
                        <div className="flex items-center mt-4 mb-2">
                          <Award className="text-primary mr-2" size={22} />
                          <span className="text-base md:text-lg lg:text-xl font-medium">Certifications:</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {leader.certifications.map((cert, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary text-sm md:text-base py-1 px-3 rounded-md">
                              {cert}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center mb-2">
                          <Users className="text-primary mr-2" size={22} />
                          <span className="text-base md:text-lg lg:text-xl font-medium">Experience: {leader.yearsExperience} years</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Button
                        variant="ghost" 
                        className="text-primary flex items-center text-base md:text-lg lg:text-lg w-full justify-between"
                        onClick={toggleLeaderBio}
                      >
                        Read Bio
                        <ChevronRight 
                          className={cn(
                            "transition-transform", 
                            leaderBioExpanded ? "rotate-90" : ""
                          )} 
                          size={20} 
                        />
                      </Button>
                      
                      {leaderBioExpanded && (
                        <div className="mt-4 text-base md:text-lg lg:text-lg text-gray-700 animate-accordion-down">
                          <div className="mb-4">
                            <h4 className="font-medium mb-2">Areas of Expertise:</h4>
                            <ul className="ml-6 list-disc">
                              {leader.expertise.map((area, idx) => <li key={idx}>{area}</li>)}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Bio:</h4>
                            <p>{leader.profile}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center">Our Audit Team</h2>
            
            {/* Deputy Directors Section */}
            {deputyDirectors.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary">Deputy Directors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {deputyDirectors.map((auditor, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={auditorImages[auditor.name]} alt={`${auditor.name} photo`} />
                            <AvatarFallback className="bg-primary text-white">
                              {auditor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{auditor.name}</h3>
                            <p className="text-sm md:text-base lg:text-lg text-gray-600">{auditor.title}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <Award className="text-primary mr-2" size={20} />
                          <span className="text-sm md:text-base lg:text-lg font-medium">Certifications:</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {auditor.certifications.map((cert, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary text-xs md:text-sm lg:text-base py-1 px-2 rounded-md">
                              {cert}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <Users className="text-primary mr-2" size={20} />
                          <span className="text-sm md:text-base lg:text-lg font-medium">Experience: {auditor.yearsExperience} years</span>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Button
                            variant="ghost" 
                            className="text-primary flex items-center text-sm md:text-base lg:text-lg w-full justify-between"
                            onClick={() => toggleBio(index)}
                          >
                            Read Bio
                            <ChevronRight 
                              className={cn(
                                "transition-transform", 
                                expandedBio === index ? "rotate-90" : ""
                              )} 
                              size={20} 
                            />
                          </Button>
                          {expandedBio === index && (
                            <div className="mt-4 text-sm md:text-base lg:text-lg text-gray-700 animate-accordion-down">
                              <div className="mb-4">
                                <h4 className="font-medium mb-2">Areas of Expertise:</h4>
                                <ul className="ml-6 list-disc">
                                  {auditor.expertise.map((area, idx) => <li key={idx}>{area}</li>)}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Bio:</h4>
                                <p>{auditor.profile}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {/* Lead Auditors Section */}
            {leadAuditors.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary">Lead Auditors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {leadAuditors.map((auditor, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={auditorImages[auditor.name]} alt={`${auditor.name} photo`} />
                            <AvatarFallback className="bg-primary text-white">
                              {auditor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{auditor.name}</h3>
                            <p className="text-sm md:text-base lg:text-lg text-gray-600">{auditor.title}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <Award className="text-primary mr-2" size={20} />
                          <span className="text-sm md:text-base lg:text-lg font-medium">Certifications:</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {auditor.certifications.map((cert, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary text-xs md:text-sm lg:text-base py-1 px-2 rounded-md">
                              {cert}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <Users className="text-primary mr-2" size={20} />
                          <span className="text-sm md:text-base lg:text-lg font-medium">Experience: {auditor.yearsExperience} years</span>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Button
                            variant="ghost" 
                            className="text-primary flex items-center text-sm md:text-base lg:text-lg w-full justify-between"
                            onClick={() => toggleBio(index + deputyDirectors.length)}
                          >
                            Read Bio
                            <ChevronRight 
                              className={cn(
                                "transition-transform", 
                                expandedBio === index + deputyDirectors.length ? "rotate-90" : ""
                              )} 
                              size={20} 
                            />
                          </Button>
                          {expandedBio === index + deputyDirectors.length && (
                            <div className="mt-4 text-sm md:text-base lg:text-lg text-gray-700 animate-accordion-down">
                              <div className="mb-4">
                                <h4 className="font-medium mb-2">Areas of Expertise:</h4>
                                <ul className="ml-6 list-disc">
                                  {auditor.expertise.map((area, idx) => <li key={idx}>{area}</li>)}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Bio:</h4>
                                <p>{auditor.profile}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {/* Senior Auditors Section */}
            {seniorAuditors.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary">Senior Auditors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {seniorAuditors.map((auditor, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={auditorImages[auditor.name]} alt={`${auditor.name} photo`} />
                            <AvatarFallback className="bg-primary text-white">
                              {auditor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{auditor.name}</h3>
                            <p className="text-sm md:text-base lg:text-lg text-gray-600">{auditor.title}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <Award className="text-primary mr-2" size={20} />
                          <span className="text-sm md:text-base lg:text-lg font-medium">Certifications:</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {auditor.certifications.map((cert, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary text-xs md:text-sm lg:text-base py-1 px-2 rounded-md">
                              {cert}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <Users className="text-primary mr-2" size={20} />
                          <span className="text-sm md:text-base lg:text-lg font-medium">Experience: {auditor.yearsExperience} years</span>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Button
                            variant="ghost" 
                            className="text-primary flex items-center text-sm md:text-base lg:text-lg w-full justify-between"
                            onClick={() => toggleBio(index + deputyDirectors.length + leadAuditors.length)}
                          >
                            Read Bio
                            <ChevronRight 
                              className={cn(
                                "transition-transform", 
                                expandedBio === index + deputyDirectors.length + leadAuditors.length ? "rotate-90" : ""
                              )} 
                              size={20} 
                            />
                          </Button>
                          {expandedBio === index + deputyDirectors.length + leadAuditors.length && (
                            <div className="mt-4 text-sm md:text-base lg:text-lg text-gray-700 animate-accordion-down">
                              <div className="mb-4">
                                <h4 className="font-medium mb-2">Areas of Expertise:</h4>
                                <ul className="ml-6 list-disc">
                                  {auditor.expertise.map((area, idx) => <li key={idx}>{area}</li>)}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Bio:</h4>
                                <p>{auditor.profile}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {/* Regular Auditors Section */}
            {regularAuditors.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-bold mb-6 text-primary">Auditors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularAuditors.map((auditor, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={auditorImages[auditor.name]} alt={`${auditor.name} photo`} />
                            <AvatarFallback className="bg-primary text-white">
                              {auditor.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{auditor.name}</h3>
                            <p className="text-sm md:text-base lg:text-lg text-gray-600">{auditor.title}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <Award className="text-primary mr-2" size={20} />
                          <span className="text-sm md:text-base lg:text-lg font-medium">Certifications:</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {auditor.certifications.map((cert, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary text-xs md:text-sm lg:text-base py-1 px-2 rounded-md">
                              {cert}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <Users className="text-primary mr-2" size={20} />
                          <span className="text-sm md:text-base lg:text-lg font-medium">Experience: {auditor.yearsExperience} years</span>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Button
                            variant="ghost" 
                            className="text-primary flex items-center text-sm md:text-base lg:text-lg w-full justify-between"
                            onClick={() => toggleBio(index + deputyDirectors.length + leadAuditors.length + seniorAuditors.length)}
                          >
                            Read Bio
                            <ChevronRight 
                              className={cn(
                                "transition-transform", 
                                expandedBio === index + deputyDirectors.length + leadAuditors.length + seniorAuditors.length ? "rotate-90" : ""
                              )} 
                              size={20} 
                            />
                          </Button>
                          {expandedBio === index + deputyDirectors.length + leadAuditors.length + seniorAuditors.length && (
                            <div className="mt-4 text-sm md:text-base lg:text-lg text-gray-700 animate-accordion-down">
                              <div className="mb-4">
                                <h4 className="font-medium mb-2">Areas of Expertise:</h4>
                                <ul className="ml-6 list-disc">
                                  {auditor.expertise.map((area, idx) => <li key={idx}>{area}</li>)}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">Bio:</h4>
                                <p>{auditor.profile}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Why Choose Our Auditors?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Government Experience</h3>
                  <p className="text-gray-600 text-base md:text-lg lg:text-xl">Our auditors specialize in government IT systems and understand their unique requirements and challenges.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Award className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Certified Professionals</h3>
                  <p className="text-gray-600 text-base md:text-lg lg:text-xl">All our auditors hold industry-recognized certifications and stay updated with the latest standards.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Proven Track Record</h3>
                  <p className="text-gray-600 text-base md:text-lg lg:text-xl">Our team has successfully completed hundreds of IT audits across different government agencies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to work with our expert auditors?</h2>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8">
              Contact us today to discuss how our audit professionals can help your agency improve security, compliance, and performance.
            </p>
            <Button asChild size="lg" className="text-base md:text-lg">
              <Link to="/quote" className="flex items-center">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default AuditorsPortfolio;
