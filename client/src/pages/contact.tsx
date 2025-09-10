import { Calendar, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { generateMetaTags } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
  return (
    <>
      {generateMetaTags({
        title: "Contact Hudson Valley CISO - Book Your Consultation",
        description: "Ready to improve your SMB's cybersecurity? Contact Hudson Valley CISO for a free consultation or request a tailored quote.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Book a free consultation to discuss your security needs, or request a tailored quote for ongoing support.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Consultation Request Form */}
              <ConsultationForm />
              
              {/* Calendar Booking */}
              <div className="text-center">
                <div className="bg-primary-50 rounded-xl p-8 mb-8">
                  <Calendar className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Book a Free Consultation</h3>
                  <p className="text-gray-600 mb-6">
                    30-minute discovery call to understand your security needs and discuss how fractional CISO services can help your business.
                  </p>
                  <a 
                    href={SITE_CONFIG.calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="!bg-white hover:!bg-gray-50 !text-black !border-2 !border-black shadow-lg">
                      <Calendar className="w-5 h-5 mr-3" />
                      Schedule Now
                    </Button>
                  </a>
                </div>
                
                <div className="text-sm text-gray-500 space-y-2">
                  <p>✓ No obligation, no sales pressure</p>
                  <p>✓ Practical advice even if we don't work together</p>
                  <p>✓ Clear next steps based on your needs</p>
                </div>

                {/* Direct Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Direct Contact</h4>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{SITE_CONFIG.contact.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{SITE_CONFIG.contact.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Hudson Valley, NY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
