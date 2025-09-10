import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function CyberInsurance() {
  return (
    <>
      {generateMetaTags({
        title: "Cyber Insurance Readiness | Hudson Valley CISO",
        description: "Get cyber insurance ready with expert guidance. Pass questionnaires, implement required controls, and maintain coverage for your SMB.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <Shield className="w-12 h-12 text-primary-600 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Cyber Insurance Readiness
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Pass questionnaires and maintain coverage with confidence
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 mb-4">
                Cyber insurance requirements are getting stricter every year. Many SMBs struggle with complex questionnaires, 
                implementing required security controls, and proving their security posture to insurers.
              </p>
              <p className="text-gray-700">
                <strong>The result:</strong> Higher premiums, reduced coverage, or even policy cancellation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Insurance Questionnaire Support</strong>
                      <p className="text-gray-600">Expert help completing complex security questionnaires accurately</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Required Controls Implementation</strong>
                      <p className="text-gray-600">Implement MFA, backup strategies, and other mandated controls</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Documentation & Evidence</strong>
                      <p className="text-gray-600">Proper documentation that demonstrates your security posture</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Ongoing Compliance</strong>
                      <p className="text-gray-600">Maintain requirements between renewals and audits</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Requirements We Help With</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Multi-Factor Authentication (MFA)</li>
                  <li>• Endpoint Detection & Response (EDR)</li>
                  <li>• Email security controls</li>
                  <li>• Backup and recovery procedures</li>
                  <li>• Security awareness training</li>
                  <li>• Incident response planning</li>
                  <li>• Vulnerability management</li>
                  <li>• Access controls and privilege management</li>
                </ul>
                
                <div className="mt-8 space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Get Insurance Ready
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
                      Discuss Your Needs
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Current Assessment</h3>
                  <p className="text-gray-600 text-sm">Review existing coverage and requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Gap Analysis</h3>
                  <p className="text-gray-600 text-sm">Identify missing controls and documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
                  <p className="text-gray-600 text-sm">Deploy required controls and procedures</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Renewal Ready</h3>
                  <p className="text-gray-600 text-sm">Prepared documentation and evidence</p>
                </div>
              </div>
            </div>

            <div className="bg-success-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Expected Outcomes</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Short Term (30-60 days)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Complete accurate insurance questionnaires</li>
                    <li>• Implement priority security controls</li>
                    <li>• Document security procedures</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Long Term (6-12 months)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Maintain preferred insurance rates</li>
                    <li>• Pass annual security assessments</li>
                    <li>• Continuous compliance monitoring</li>
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
