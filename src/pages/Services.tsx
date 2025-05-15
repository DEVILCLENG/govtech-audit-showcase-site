
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceSection from "@/components/ServiceSection";
import CallToAction from "@/components/CallToAction";

const Services = () => {
  const auditProcess = [
    {
      step: 1,
      title: "Planning Phase",
      duration: "2-3 weeks",
      activities: [
        "Propose IT Audit plan for Audit Committee",
        "Approval"
      ]
    },
    {
      step: 2,
      title: "Information Gathering",
      duration: "2-3 weeks",
      activities: [
        "Request for information",
        "Risks and Process walkthrough"
      ]
    },
    {
      step: 3,
      title: "Testing Phase",
      duration: "6-8 weeks",
      activities: [
        "Control Design Effectiveness Testing",
        "Control Operating Effectiveness Testing"
      ]
    },
    {
      step: 4,
      title: "Reporting Phase",
      duration: "3-4 weeks",
      activities: [
        "Draft Audit Findings",
        "Audit Report"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our IT Audit Services</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Comprehensive IT audit solutions specifically designed for government agencies to ensure security, compliance, and optimal performance.
            </p>
          </div>
        </div>
        
        <ServiceSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Our Audit Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {auditProcess.map((process) => (
                  <div key={process.step} className="border-l-4 border-primary pl-4">
                    <div className="font-bold text-xl mb-2 flex items-center">
                      <span className="bg-primary text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">{process.step}</span>
                      {process.title}
                    </div>
                    <div className="bg-primary/10 text-sm px-3 py-1 rounded-full inline-block mb-3">
                      {process.duration}
                    </div>
                    <ul className="space-y-1 text-gray-600">
                      {process.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Audit Objectives & Scope</h2>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Our Comprehensive Audit Approach</h3>
              <p className="text-gray-600 mb-6">
                Our IT audit methodology is aligned with industry best practices and government requirements. We conduct detailed assessments across critical areas to ensure your systems meet the highest standards of security and compliance.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="p-4 font-semibold border">Audit Scope</th>
                      <th className="p-4 font-semibold border">Key Audit Objectives</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border font-medium">Accounts and Access Management</td>
                      <td className="p-4 border text-gray-700">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Assess the controls around privileged access management (approval process, access review)</li>
                          <li>Ensure that access is approved and assigned to appropriate personnel</li>
                          <li>Verify security controls (MFA, PIM, etc.) are implemented to prevent unauthorized usage</li>
                          <li>Validate that inactive accounts are reviewed and disabled timely</li>
                          <li>Assess Central Account Management implementation across systems</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">Security Monitoring</td>
                      <td className="p-4 border text-gray-700">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Verify completeness of privileged account activity logging</li>
                          <li>Confirm independent review of activity logs</li>
                          <li>Assess anomalous activity monitoring processes</li>
                          <li>Evaluate Automated Baseline Log Review (ABLR) implementation</li>
                          <li>Review correlation between change requests and privileged activities</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">Vulnerability Management</td>
                      <td className="p-4 border text-gray-700">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Assess vulnerability identification and remediation processes</li>
                          <li>Review patch management effectiveness and timeliness</li>
                          <li>Verify EOSL asset monitoring and decommissioning planning</li>
                          <li>Evaluate vulnerability assessment and penetration testing schedules</li>
                          <li>Assess code review processes and remediation timeframes</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border font-medium">Business Continuity</td>
                      <td className="p-4 border text-gray-700">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Verify backup and recovery plan testing and adequacy</li>
                          <li>Review Disaster Recovery Planning (DRP) alignment with BCP</li>
                          <li>Assess system redundancy implementation</li>
                          <li>Confirm DRP testing meets RPO and RTO requirements</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 text-center">
                <a href="/quote" className="text-primary font-medium hover:underline">
                  Request a detailed audit scope assessment for your agency
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
