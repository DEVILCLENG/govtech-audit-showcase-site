
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(+65) 6211 0888",
      link: "tel:+6562110888",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@tech.gov.sg",
      link: "mailto:info@tech.gov.sg",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "10 Pasir Panjang Road, #10-01, Singapore 117438",
      link: "https://maps.google.com/?q=10+Pasir+Panjang+Road,+Singapore+117438",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      content: "Monday - Friday, 9:00 AM - 6:00 PM",
      link: null,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to discuss your IT audit needs? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="text-gray-600 hover:text-primary">
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-600">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Head Office Location</h3>
          <div className="aspect-video w-full bg-gray-300 rounded-lg overflow-hidden">
            {/* In a real implementation, you would embed a Google Map here */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <MapPin size={32} className="text-gray-400 mr-2" />
              <span className="text-gray-500">Map Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
