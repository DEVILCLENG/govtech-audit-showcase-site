
import React from 'react';
import { 
  PMO, MND, AGD, MOM, CSA, MSF, ACRA, BCA, PSD, NCSS, SFA, VITAL, PARL, 
  SNDGO, WPPD, NEA, PUB, NDI, AGC, CEA, URA, MCCY, CUSTOMS, NSCS, NLB, IRAS, MDDI 
} from 'lucide-react';

interface ClientLogo {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const ClientSection = () => {
  const clients: ClientLogo[] = [
    { name: 'PMO', icon: PMO },
    { name: 'MND', icon: MND },
    { name: 'AGD', icon: AGD },
    { name: 'MOM', icon: MOM },
    { name: 'CSA', icon: CSA },
    { name: 'MSF', icon: MSF },
    { name: 'ACRA', icon: ACRA },
    { name: 'BCA', icon: BCA },
    { name: 'PSD', icon: PSD },
    { name: 'NCSS', icon: NCSS },
    { name: 'SFA', icon: SFA },
    { name: 'VITAL', icon: VITAL },
    { name: 'PARL', icon: PARL },
    { name: 'SNDGO', icon: SNDGO },
    { name: 'WPPD', icon: WPPD },
    { name: 'NEA', icon: NEA },
    { name: 'PUB', icon: PUB },
    { name: 'NDI', icon: NDI },
    { name: 'AGC', icon: AGC },
    { name: 'CEA', icon: CEA },
    { name: 'URA', icon: URA },
    { name: 'MCCY', icon: MCCY },
    { name: 'CUSTOMS', icon: CUSTOMS },
    { name: 'NSCS', icon: NSCS },
    { name: 'NLB', icon: NLB },
    { name: 'IRAS', icon: IRAS },
    { name: 'MDDI', icon: MDDI }
  ];

  return (
    <section className="py-16 bg-white">
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
              <client.icon size={36} className="text-primary mb-2" />
              <span className="text-sm font-medium text-gray-800">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
