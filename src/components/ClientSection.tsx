
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
    "ACRA", "AGD", "BCA", "CEA", "CSA", 
    "IRAS", "MCCY", "MDDI", "MND", "MOM", 
    "MSF", "NCSS", "NDI", "NEA", "NLB", 
    "NSCS", "PARL", "PSD", "PUB", "URA"
  ].sort();

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
