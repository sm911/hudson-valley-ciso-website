import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function PolicyDevelopment() {
  return (
    <>
      {generateMetaTags({
        title: "Policy Development & Governance | Hudson Valley CISO",
        description: "Security policies, procedures, and governance frameworks for SMBs. Build the foundation for effective security management.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <FileText className="w-12 h-12 text-primary-600 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Policy Development & Governance
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Build the foundation for effective security management
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Policies Matter</h2>
              <p className="text-gray-700 mb-4">
                Security policies aren't just documents—they're the foundation that makes everything else work. Without clear policies, 
                you can't have consistent security practices, meet compliance requirements, or respond effectively to incidents.
              </p>
              <p className="text-gray-700">
                <strong>The challenge:</strong> Most SMBs either have no policies or have generic templates that don't fit their actual business needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Policy Development Approach</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Business-Aligned Policies</strong>
                      <p className="text-gray-600">Policies that reflect your actual business processes and risks</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Practical Implementation</strong>
                      <p className="text-gray-600">Clear procedures that employees can actually follow</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Compliance Ready</strong>
                      <p className="text-gray-600">Meet regulatory and customer requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Living Documents</strong>
                      <p className="text-gray-600">Policies that evolve with your business and threats</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Essential Security Policies</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Information Security Policy (master policy)</li>
                  <li>• Acceptable Use Policy</li>
                  <li>• Data Classification and Handling</li>
                  <li>• Access Control and Identity Management</li>
                  <li>• Incident Response Policy</li>
                  <li>• Business Continuity and Disaster Recovery</li>
                  <li>• Vendor and Third-Party Risk Management</li>
                  <li>• Remote Work and BYOD</li>
                  <li>• Security Awareness and Training</li>
                  <li>• Privacy and Data Protection</li>
                </ul>
                
                <div className="mt-8 space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Develop Security Policies
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
                      Discuss Policy Needs
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Development Process</h2>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
                  <p className="text-gray-600 text-sm">Review business needs and requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Development</h3>
                  <p className="text-gray-600 text-sm">Create business-specific policies</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Review</h3>
                  <p className="text-gray-600 text-sm">Stakeholder feedback and refinement</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Approval</h3>
                  <p className="text-gray-600 text-sm">Management approval and adoption</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    5
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Maintenance</h3>
                  <p className="text-gray-600 text-sm">Regular updates and improvements</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-amber-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Policy Mistakes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Using generic templates without customization</li>
                  <li>• Making policies too complex or lengthy</li>
                  <li>• Not involving key stakeholders in development</li>
                  <li>• Failing to communicate policies to employees</li>
                  <li>• No regular review or update process</li>
                  <li>• Policies that don't match actual practices</li>
                  <li>• Missing compliance requirements</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Best Practices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clear, concise language that employees understand</li>
                  <li>• Specific to your business and industry</li>
                  <li>• Regular training and communication</li>
                  <li>• Annual review and update process</li>
                  <li>• Integration with HR and onboarding</li>
                  <li>• Measurable compliance requirements</li>
                  <li>• Management support and enforcement</li>
                </ul>
              </div>
            </div>

            <div className="bg-success-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Program Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Operational Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Clear expectations for all employees</li>
                    <li>• Consistent security practices across teams</li>
                    <li>• Improved incident response capabilities</li>
                    <li>• Better risk management and decision-making</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Compliance & Business</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Meet regulatory and customer requirements</li>
                    <li>• Support compliance audits and assessments</li>
                    <li>• Reduce legal and regulatory risks</li>
                    <li>• Enhance customer and partner confidence</li>
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
