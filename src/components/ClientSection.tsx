
import React from 'react';
import { ListChecks } from 'lucide-react';
import { 
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from "@/components/ui/table";

const ClientSection = () => {
  const clients = [
    {
      name: "ACRA",
      logo: "/lovable-uploads/0e8a455e-53b3-4ad5-b1ac-1578f405d2f7.png"
    },
    {
      name: "AGD",
      logo: "/lovable-uploads/e18c680a-65c5-491a-ad20-c8883e6b0ffa.png"
    },
    {
      name: "BCA",
      logo: "/lovable-uploads/2d1a0d92-76b5-4498-81f2-2475b8f5614c.png"
    },
    {
      name: "CEA",
      logo: "/lovable-uploads/255ca2f2-6cd3-4baf-b4db-92f70298647b.png"
    },
    {
      name: "CSA",
      logo: "/lovable-uploads/55296139-1cb6-43b7-9b81-ee93950a5a65.png"
    },
    {
      name: "IRAS",
      logo: "/lovable-uploads/fb6cc822-ee60-4933-8aa9-cd807dd32aca.png"
    },
    {
      name: "MCCY",
      logo: "/lovable-uploads/ae22d02b-0013-4e6b-981f-e26478b357b6.png"
    },
    {
      name: "MDDI",
      logo: "/lovable-uploads/d49bf668-55c6-40c8-b5e0-fd82d6ec4682.png"
    },
    {
      name: "MND",
      logo: "/lovable-uploads/864d1977-67a9-4e17-8224-c6d9aa47945b.png"
    },
    {
      name: "MOM",
      logo: "/lovable-uploads/5836c33b-b448-4a97-bc2b-464d9bc3eacb.png"
    },
    {
      name: "MSF",
      logo: "/lovable-uploads/24f05952-f138-49c7-b337-79e703def7c4.png"
    },
    {
      name: "NCSS",
      logo: "/lovable-uploads/6be8419b-6371-4633-9d5d-d97362dd25ed.png"
    },
    {
      name: "NDI",
      logo: "/lovable-uploads/2556f0bd-c142-42c6-947f-6028292a51d1.png"
    },
    {
      name: "NEA",
      logo: "/lovable-uploads/bfb8bd52-5310-41df-800a-7e9ab0ff5e7e.png"
    },
    {
      name: "NLB",
      logo: "/lovable-uploads/9e1689a7-7be5-4f51-9a52-462246856b3f.png"
    },
    {
      name: "NSCS",
      logo: "/lovable-uploads/49e7a51a-38dc-4362-a352-6b5ab18e5f8d.png"
    },
    {
      name: "PARL",
      logo: "/lovable-uploads/574b2b02-e752-4877-a235-a55e5b4d93f9.png"
    },
    {
      name: "PSD",
      logo: "/lovable-uploads/6b29ff49-8217-457f-95d4-bc35ec233abf.png"
    },
    {
      name: "PUB",
      logo: "/lovable-uploads/7899db16-8909-4a0c-9981-e75797243439.png"
    },
    {
      name: "URA",
      logo: "/lovable-uploads/376c1754-2599-42b0-926a-a6af44c83802.png"
    }
  ].sort((a, b) => a.name.localeCompare(b.name));

  // Arrange clients into rows for the table (5 clients per row)
  const clientRows = [];
  for (let i = 0; i < clients.length; i += 5) {
    clientRows.push(clients.slice(i, i + 5));
  }

  return (
    <section id="client-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-8">
          <div className="bg-primary/10 p-3 rounded-full">
            <ListChecks size={32} className="text-primary" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead colSpan={5} className="text-center">Agencies We Serve (Alphabetical Order)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientRows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((client, cellIndex) => (
                    <TableCell key={cellIndex} className="text-center">
                      <div className="flex flex-col items-center justify-center h-20">
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="h-14 object-contain"
                          title={client.name}
                        />
                      </div>
                    </TableCell>
                  ))}
                  {/* Add empty cells if the row is not complete */}
                  {Array(5 - row.length).fill(0).map((_, index) => (
                    <TableCell key={`empty-${index}`}></TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
