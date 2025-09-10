import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function FractionalCISO() {
  return (
    <>
      {generateMetaTags({
        title: "Fractional CISO Leadership Services | Hudson Valley CISO",
        description: "Executive-level cybersecurity leadership for Hudson Valley SMBs. Part-time CISO services with hands-on involvement and business-focused outcomes.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fractional CISO Leadership
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Executive-level security leadership with hands-on involvement—right-sized to your budget and business goals.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Get</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Strategic Security Leadership</strong>
                      <p className="text-gray-600">Board-level expertise in setting priorities and managing risk</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Business-Aligned Decisions</strong>
                      <p className="text-gray-600">Security investments that make sense for your growth stage</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Executive Communication</strong>
                      <p className="text-gray-600">Clear reporting that leadership and boards can understand</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Vendor Coordination</strong>
                      <p className="text-gray-600">Work seamlessly with your MSP and security vendors</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Perfect For</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• SMBs with 20-500 employees</li>
                  <li>• Companies facing compliance requirements</li>
                  <li>• Organizations with customer security reviews</li>
                  <li>• Businesses needing cyber insurance</li>
                  <li>• Companies preparing for growth or M&A</li>
                </ul>
                
                <div className="mt-8 space-y-3">
                  <Link href="/contact">
                    <Button className="w-full !bg-white hover:!bg-gray-50 !text-black !border-2 !border-black">
                      Request Tailored Quote
                    </Button>
                  </Link>
                  <a 
                    href={SITE_CONFIG.calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" className="w-full !border-2 !border-primary-600 !text-primary-600 hover:!bg-primary-50 hover:!text-primary-700">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Work</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
                  <p className="text-gray-600">Understand your current security posture and business goals</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Strategy</h3>
                  <p className="text-gray-600">Develop roadmap aligned with business priorities and budget</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Execute</h3>
                  <p className="text-gray-600">Hands-on implementation with clear ownership and accountability</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Monthly Deliverables</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Executive Reporting</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 1-page executive summary</li>
                    <li>• Top 3 security priorities</li>
                    <li>• Risk trend analysis</li>
                    <li>• Budget recommendations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Implementation Support</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Policy updates and reviews</li>
                    <li>• Vendor coordination meetings</li>
                    <li>• Staff training coordination</li>
                    <li>• Incident response planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
