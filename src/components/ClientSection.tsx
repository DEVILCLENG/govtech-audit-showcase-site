
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
    "PMO", "MND", "AGD", "MOM", "CSA", "MSF", "ACRA", "BCA", "PSD", 
    "NCSS", "SFA", "VITAL", "PARL", "SNDGO", "MSF", "WPPD", "NEA", 
    "PUB", "NDI", "AGC", "CEA", "URA", "MCCY", "CUSTOMS", "NSCS", 
    "NLB", "IRAS", "MDDI"
  ];

  // Arrange clients into rows for the table (5 clients per row)
  const clientRows = [];
  for (let i = 0; i < clients.length; i += 5) {
    clientRows.push(clients.slice(i, i + 5));
  }

  return (
    <section id="client-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Clientele</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by government agencies across Singapore to deliver exceptional IT audit services.
          </p>
        </div>

        <div className="flex justify-center items-center mb-8">
          <div className="bg-primary/10 p-3 rounded-full">
            <ListChecks size={32} className="text-primary" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead colSpan={5} className="text-center">Government Agencies We Serve</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientRows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((client, cellIndex) => (
                    <TableCell key={cellIndex} className="text-center font-medium">
                      {client}
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
