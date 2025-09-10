import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function Compliance() {
  return (
    <>
      {generateMetaTags({
        title: "Compliance Enablement | Hudson Valley CISO",
        description: "NIST CSF, ISO 27001, SOC 2 readiness and implementation for SMBs. Navigate compliance requirements with expert guidance.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <FileCheck className="w-12 h-12 text-primary-600 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Compliance Enablement
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  NIST CSF, ISO 27001, SOC 2 readiness and implementation
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Compliance Matters</h2>
              <p className="text-gray-700 mb-4">
                Compliance frameworks aren't just checkboxes—they're proven blueprints for building effective security programs. 
                Many SMBs need compliance certifications to win enterprise customers, secure partnerships, or meet regulatory requirements.
              </p>
              <p className="text-gray-700">
                <strong>The challenge:</strong> Compliance can seem overwhelming without the right guidance and structured approach.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Framework Selection</strong>
                      <p className="text-gray-600">Choose the right compliance framework for your business goals</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Gap Assessment</strong>
                      <p className="text-gray-600">Identify what you need to implement for compliance</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Implementation Support</strong>
                      <p className="text-gray-600">Hands-on help implementing required controls and processes</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Audit Preparation</strong>
                      <p className="text-gray-600">Get ready for external audits with confidence</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Frameworks We Support</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">NIST Cybersecurity Framework</h4>
                    <p className="text-sm text-gray-600">Foundation for most cybersecurity programs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ISO 27001</h4>
                    <p className="text-sm text-gray-600">International standard for information security management</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">SOC 2 Type II</h4>
                    <p className="text-sm text-gray-600">Trust criteria for service organizations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">HIPAA</h4>
                    <p className="text-sm text-gray-600">Healthcare data protection requirements</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">PCI DSS</h4>
                    <p className="text-sm text-gray-600">Payment card data security standards</p>
                  </div>
                </div>
                
                <div className="mt-8 space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Start Compliance Journey
                    </Button>
                  </Link>
                  <a 
                    href={SITE_CONFIG.calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="outline" className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50">
                      <Calendar className="w-4 h-4 mr-2" />
                      Discuss Requirements
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance Implementation Process</h2>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scoping</h3>
                  <p className="text-gray-600 text-sm">Define what's in scope for compliance</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Gap Analysis</h3>
                  <p className="text-gray-600 text-sm">Assess current vs. required controls</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-gray-600 text-sm">Deploy controls and documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Testing</h3>
                  <p className="text-gray-600 text-sm">Validate control effectiveness</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Audit</h3>
                  <p className="text-gray-600 text-sm">Support through external audit</p>
                </div>
              </div>
            </div>

            <div className="bg-success-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Market Access</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Win enterprise customers requiring compliance</li>
                    <li>• Meet partnership security requirements</li>
                    <li>• Access regulated markets and industries</li>
                    <li>• Competitive advantage in RFP responses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Risk Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Structured approach to security controls</li>
                    <li>• Reduced likelihood of security incidents</li>
                    <li>• Better cyber insurance terms</li>
                    <li>• Regulatory confidence and protection</li>
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
