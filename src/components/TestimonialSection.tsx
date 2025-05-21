import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, ThumbsUp } from "lucide-react";
const TestimonialSection = () => {
  const testimonials = [{
    quote: "The IT audit provided by GovTech IAD-SS identified critical vulnerabilities in our systems that we weren't aware of. Their recommendations helped us strengthen our security posture significantly.",
    position: "IT Director",
    agency: "Agency 1",
    icon: <ThumbsUp className="text-primary" size={32} />
  }, {
    quote: "Working with the IAD-SS team was a smooth experience from start to finish. Their thorough understanding of government IT infrastructure made the audit process efficient and highly valuable.",
    position: "CIO",
    agency: "Agency 2",
    icon: <Heart className="text-primary" size={32} />
  }, {
    quote: "The compliance audit helped us align our IT practices with international standards. The team provided clear guidance on how to address gaps and improve our processes.",
    position: "Head of Compliance",
    agency: "Agency 3",
    icon: <Award className="text-primary" size={32} />
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 xl:text-5xl">What Our Clients Say</h2>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto">
            Don't just take our word for it. Here's what agencies have to say about our IT audit services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <Card key={index} className="h-full flex flex-col bg-gray-50 border-none shadow-sm">
              <CardContent className="pt-8 pb-6 flex flex-col h-full">
                <div className="mb-4 flex justify-start">
                  {testimonial.icon}
                </div>
                <p className="text-lg md:text-xl mb-6 flex-grow lg:text-xl">{testimonial.quote}</p>
                <Separator className="mb-4" />
                <div>
                  <p className="font-semibold text-lg md:text-xl lg:text-xl">{testimonial.position}</p>
                  <p className="text-gray-500 text-base md:text-lg lg:text-xl">{testimonial.agency}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TestimonialSection;