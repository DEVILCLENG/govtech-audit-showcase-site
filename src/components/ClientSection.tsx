
import React from 'react';
import { Briefcase } from 'lucide-react';

const ClientSection = () => {
  const clients = [
    "PMO", "MND", "AGD", "MOM", "CSA", "MSF", "ACRA", "BCA", "PSD", 
    "NCSS", "SFA", "VITAL", "PARL", "SNDGO", "MSF", "WPPD", "NEA", 
    "PUB", "NDI", "AGC", "CEA", "URA", "MCCY", "CUSTOMS", "NSCS", 
    "NLB", "IRAS", "MDDI"
  ];

  return (
    <section id="client-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clientele</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by government agencies across Singapore to deliver exceptional IT audit services.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full mb-2">
                <Briefcase size={24} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-gray-800">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
