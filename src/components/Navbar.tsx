
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="font-bold text-2xl text-primary">
            GovTech <span className="text-blue-400">IAD-SS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-primary font-medium">
            Services
          </Link>
          <Link to="/benefits" className="text-gray-700 hover:text-primary font-medium">
            Benefits
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
            Contact
          </Link>
          <Button asChild>
            <Link to="/quote">Request Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 border-t">
          <div className="flex flex-col space-y-3 py-3">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
            <Link to="/benefits" className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}>
              Benefits
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <Button asChild className="w-full mt-2">
              <Link to="/quote" onClick={() => setIsMobileMenuOpen(false)}>
                Request Quote
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
