import { Mail, MapPin, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
const ContactSection = () => {
  const contactInfo = [{
    icon: Mail,
    title: "Email",
    content: "govtech-iad-ss@tech.gov.sg",
    link: "mailto:govtech-iad-ss@tech.gov.sg"
  }, {
    icon: MapPin,
    title: "Address",
    content: "10 Pasir Panjang Road, #10-01, Singapore 117438",
    link: "https://www.onemap.gov.sg/main/v2/?lat=1.274240&lng=103.798508"
  }, {
    icon: Clock,
    title: "Operating Hours",
    content: "Monday - Friday, 9:00 AM - 6:00 PM",
    link: null
  }];
  const mapRef = useRef<HTMLIFrameElement>(null);

  // Add proper OneMap URL for the iframe
  const oneMapUrl = "https://www.onemap.gov.sg/minimap/minimap.html?mapStyle=Default&zoomLevel=17&latLng=1.274240,103.798508&popupWidth=200&showPopup=true&popupMsg=GovTech%20Singapore%3Cbr%3E10%20Pasir%20Panjang%20Road%2C%20%2310-01%3Cbr%3ESingapore%20117438";
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <item.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{item.title}</h3>
              {item.link ? <a href={item.link} className="text-lg md:text-xl lg:text-2xl text-gray-600 hover:text-primary" target={item.title === "Address" ? "_blank" : undefined} rel={item.title === "Address" ? "noopener noreferrer" : undefined}>
                  {item.content}
                </a> : <p className="text-lg md:text-xl lg:text-2xl text-gray-600">{item.content}</p>}
            </div>)}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Head Office Location</h3>
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
            <iframe ref={mapRef} title="GovTech Singapore Location" src={oneMapUrl} width="100%" height="100%" className="border-0" allowFullScreen></iframe>
          </div>
          <div className="mt-4 text-center">
            <a href="https://www.onemap.gov.sg/main/v2/?lat=1.274240&lng=103.798508" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-lg md:text-xl lg:text-2xl text-primary hover:underline">
              <MapPin size={20} className="mr-1" />
              View larger map on OneMap
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;