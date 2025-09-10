import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function VendorRisk() {
  return (
    <>
      {generateMetaTags({
        title: "Vendor Risk Management | Hudson Valley CISO",
        description: "Third-party security assessments and vendor due diligence for SMBs. Manage vendor risk without slowing down business.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <Users className="w-12 h-12 text-primary-600 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Vendor Risk Management
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Third-party security assessments without the complexity
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Vendor Risk Challenge</h2>
              <p className="text-gray-700 mb-4">
                SMBs rely on dozens of third-party vendors and cloud services, each potentially creating security risks. 
                Traditional vendor risk programs are designed for large enterprises and don't fit SMB realities.
              </p>
              <p className="text-gray-700">
                <strong>The problem:</strong> Either skip vendor assessments (creating risk) or get bogged down in complex processes that slow business.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our SMB-Focused Approach</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Risk-Based Assessment</strong>
                      <p className="text-gray-600">Focus effort on vendors that matter most to your business</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Streamlined Process</strong>
                      <p className="text-gray-600">Efficient questionnaires and review procedures</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Contract Language</strong>
                      <p className="text-gray-600">Security requirements in vendor agreements</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Ongoing Monitoring</strong>
                      <p className="text-gray-600">Track vendor security posture over time</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vendor Categories We Assess</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Cloud service providers (AWS, Azure, Google)</li>
                  <li>• SaaS applications (CRM, accounting, HR)</li>
                  <li>• IT managed service providers</li>
                  <li>• Software development partners</li>
                  <li>• Data processing vendors</li>
                  <li>• Payment processors</li>
                  <li>• Professional services firms</li>
                  <li>• Hardware and equipment suppliers</li>
                </ul>
                
                <div className="mt-8 space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Improve Vendor Risk
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
                      Discuss Your Vendors
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vendor Assessment Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Inventory</h3>
                  <p className="text-gray-600 text-sm">Catalog all third-party vendors and services</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Risk Rating</h3>
                  <p className="text-gray-600 text-sm">Assess data access and business impact</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
                  <p className="text-gray-600 text-sm">Security questionnaires and reviews</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Monitoring</h3>
                  <p className="text-gray-600 text-sm">Ongoing risk tracking and updates</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-amber-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">High-Risk Vendor Indicators</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access to sensitive customer data</li>
                  <li>• Financial or payment processing</li>
                  <li>• Core business system integration</li>
                  <li>• Remote access to your network</li>
                  <li>• Lack of security certifications</li>
                  <li>• Poor incident response history</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Mitigation Strategies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Contractual security requirements</li>
                  <li>• Regular security assessments</li>
                  <li>• Data access limitations</li>
                  <li>• Incident notification requirements</li>
                  <li>• Insurance and liability terms</li>
                  <li>• Exit and data return procedures</li>
                </ul>
              </div>
            </div>

            <div className="bg-success-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Risk Reduction</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Prevent vendor-related security incidents</li>
                    <li>• Understand data exposure risks</li>
                    <li>• Improve contract security terms</li>
                    <li>• Meet customer security requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Operational Efficiency</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Streamlined vendor onboarding</li>
                    <li>• Clear security expectations</li>
                    <li>• Faster procurement decisions</li>
                    <li>• Reduced compliance complexity</li>
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
