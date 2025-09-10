import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function IncidentResponse() {
  return (
    <>
      {generateMetaTags({
        title: "Incident Response Readiness & Tabletop | Hudson Valley CISO",
        description: "Crisis preparedness and response planning for SMBs. Be ready when security incidents occur with proven response frameworks.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-12 h-12 text-primary-600 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Incident Response Readiness & Tabletop
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Be prepared when—not if—security incidents occur
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Reality of Security Incidents</h2>
              <p className="text-gray-700 mb-4">
                Security incidents are inevitable. The difference between a minor disruption and a business-ending crisis 
                often comes down to how prepared your organization is to respond quickly and effectively.
              </p>
              <p className="text-gray-700">
                <strong>The cost of being unprepared:</strong> Extended downtime, regulatory fines, customer loss, and reputation damage that can take years to recover from.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Incident Response Services</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Response Plan Development</strong>
                      <p className="text-gray-600">Custom playbooks for your business and threat landscape</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Team Training</strong>
                      <p className="text-gray-600">Prepare your staff for crisis response roles</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Tabletop Exercises</strong>
                      <p className="text-gray-600">Practice scenarios to test and improve readiness</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">24/7 Response Support</strong>
                      <p className="text-gray-600">Optional retainer for incident coordination (add-on)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Incident Types</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Ransomware and malware infections</li>
                  <li>• Data breaches and unauthorized access</li>
                  <li>• Business email compromise (BEC)</li>
                  <li>• Phishing and social engineering attacks</li>
                  <li>• Insider threats and data theft</li>
                  <li>• System outages and availability issues</li>
                  <li>• Supply chain and vendor incidents</li>
                  <li>• Physical security breaches</li>
                </ul>
                
                <div className="mt-8 space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Build Response Capability
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
                      Discuss Readiness
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Incident Response Framework</h2>
              <div className="grid md:grid-cols-6 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Preparation</h3>
                  <p className="text-gray-600 text-sm">Plans, tools, and training</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Detection</h3>
                  <p className="text-gray-600 text-sm">Identify security events</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analysis</h3>
                  <p className="text-gray-600 text-sm">Assess scope and impact</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Containment</h3>
                  <p className="text-gray-600 text-sm">Stop the spread</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recovery</h3>
                  <p className="text-gray-600 text-sm">Restore operations</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    6
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Lessons</h3>
                  <p className="text-gray-600 text-sm">Improve for next time</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-amber-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tabletop Exercise Scenarios</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ransomware attack simulation</li>
                  <li>• Customer data breach response</li>
                  <li>• Business email compromise</li>
                  <li>• Vendor security incident</li>
                  <li>• Insider threat investigation</li>
                  <li>• Cloud service outage</li>
                  <li>• Physical facility breach</li>
                  <li>• Media and regulatory response</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Response Team Roles</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Incident Commander (leadership)</li>
                  <li>• Technical Lead (IT/security)</li>
                  <li>• Communications Lead (PR/marketing)</li>
                  <li>• Legal Counsel (compliance/liability)</li>
                  <li>• HR Representative (personnel issues)</li>
                  <li>• Business Continuity Lead</li>
                  <li>• External Resources (vendors, experts)</li>
                </ul>
              </div>
            </div>

            <div className="bg-success-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Readiness Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Operational Impact</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Reduce incident response time by 75%</li>
                    <li>• Minimize business disruption and downtime</li>
                    <li>• Protect customer data and trust</li>
                    <li>• Maintain regulatory compliance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Financial Protection</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lower cyber insurance premiums</li>
                    <li>• Reduce incident response costs</li>
                    <li>• Avoid regulatory fines and penalties</li>
                    <li>• Protect brand reputation and value</li>
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
