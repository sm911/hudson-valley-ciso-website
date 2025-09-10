import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function Assessment() {
  return (
    <>
      {generateMetaTags({
        title: "Program Assessment & Roadmap | Hudson Valley CISO",
        description: "Comprehensive security program evaluation and strategic planning for SMBs. Get a clear roadmap with prioritized actions.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <Search className="w-12 h-12 text-primary-600 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Program Assessment & Roadmap
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Comprehensive evaluation with actionable priorities
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700 mb-4">
                Many SMBs have invested in security tools and services but lack a clear understanding of their overall security posture. 
                Without a comprehensive assessment, it's impossible to know where to focus limited resources for maximum impact.
              </p>
              <p className="text-gray-700">
                <strong>The result:</strong> Wasted budget on unnecessary tools, gaps in critical areas, and uncertainty about priorities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Assessment Approach</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Current State Analysis</strong>
                      <p className="text-gray-600">Inventory of existing security controls, tools, and processes</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Risk Evaluation</strong>
                      <p className="text-gray-600">Identify and prioritize risks based on business impact</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Gap Analysis</strong>
                      <p className="text-gray-600">Compare current state to industry standards and requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Strategic Roadmap</strong>
                      <p className="text-gray-600">Prioritized action plan with timelines and budget estimates</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment Areas</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Identity and access management</li>
                  <li>• Network security and segmentation</li>
                  <li>• Endpoint protection and monitoring</li>
                  <li>• Data protection and backup</li>
                  <li>• Email and web security</li>
                  <li>• Security policies and procedures</li>
                  <li>• Incident response capabilities</li>
                  <li>• Vendor and third-party risk</li>
                  <li>• Compliance requirements</li>
                  <li>• Security awareness and training</li>
                </ul>
                
                <div className="mt-8 space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Request Assessment
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Assessment Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Discovery</h3>
                  <p className="text-gray-600 text-sm">Stakeholder interviews and documentation review</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Technical Review</h3>
                  <p className="text-gray-600 text-sm">Hands-on evaluation of security controls</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analysis</h3>
                  <p className="text-gray-600 text-sm">Risk assessment and gap identification</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Roadmap</h3>
                  <p className="text-gray-600 text-sm">Prioritized recommendations and timeline</p>
                </div>
              </div>
            </div>

            <div className="bg-success-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What You'll Receive</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Executive Summary</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Current security posture overview</li>
                    <li>• Key risks and vulnerabilities</li>
                    <li>• Business impact analysis</li>
                    <li>• Investment recommendations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Detailed Roadmap</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 3, 6, and 12-month priorities</li>
                    <li>• Implementation guidance</li>
                    <li>• Budget estimates and ROI</li>
                    <li>• Success metrics and KPIs</li>
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
