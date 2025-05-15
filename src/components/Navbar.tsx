
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Check if current page is Help Services
  const isHelpServicesPage = location.pathname === '/help-services';

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/7221ae09-9575-4f04-ad23-8dd40b4fc3a7.png" 
              alt="GovTech Singapore" 
              className="h-10"
            />
            <div className="ml-3 flex flex-col">
              <span className="font-bold text-primary text-lg leading-tight">IAD-SS</span>
              <span className="text-xs text-gray-600 leading-tight">Shared Services</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Home
          </Link>
          {!isHelpServicesPage && (
            <Link 
              to="/services" 
              className={`font-medium ${isActive('/services') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
            >
              Services
            </Link>
          )}
          <Link 
            to="/auditors-portfolio" 
            className={`font-medium ${isActive('/auditors-portfolio') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Our Team
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Contact
          </Link>
          <Link 
            to="/help-services" 
            className={`font-medium ${isActive('/help-services') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
          >
            Help
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
            <Link 
              to="/" 
              className={`py-2 font-medium ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            {!isHelpServicesPage && (
              <Link 
                to="/services" 
                className={`py-2 font-medium ${isActive('/services') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
            )}
            <Link 
              to="/auditors-portfolio" 
              className={`py-2 font-medium ${isActive('/auditors-portfolio') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link 
              to="/contact" 
              className={`py-2 font-medium ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/help-services" 
              className={`py-2 font-medium ${isActive('/help-services') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Help
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
