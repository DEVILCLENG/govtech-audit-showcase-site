
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/7221ae09-9575-4f04-ad23-8dd40b4fc3a7.png" 
                  alt="GovTech Singapore" 
                  className="h-8 mr-2"
                />
                <div className="ml-2 flex flex-col">
                  <span className="font-bold text-white text-base leading-tight">IAD-SS</span>
                  <span className="text-xs text-gray-300 leading-tight">IT Audit Division</span>
                </div>
              </div>
            </h3>
            <p className="text-gray-300 mb-4">
              Empowering government agencies with professional IT audit services to enhance security, compliance, and performance.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.tech.gov.sg/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
              <Link to="/auditors-portfolio" className="text-gray-300 hover:text-white">Our Team</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              <Link to="/help-services" className="text-gray-300 hover:text-white">Help Services</Link>
              <Link to="/quote" className="text-gray-300 hover:text-white">Request a Quote</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-gray-300">10 Pasir Panjang Road, #10-01, Singapore 117438</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span className="text-gray-300">(+65) 6211 0888</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <a href="mailto:info@tech.gov.sg" className="text-gray-300 hover:text-white">info@tech.gov.sg</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>© {new Date().getFullYear()} GovTech Singapore. All rights reserved.</div>
            <div className="mt-4 md:mt-0 space-x-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
