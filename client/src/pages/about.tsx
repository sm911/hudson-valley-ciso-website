import { User, CheckCircle, ExternalLink, Shield, Award, Briefcase } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import { CredentialAccordion } from "@/components/ui/credential-accordion";
import { generateMetaTags } from "@/lib/seo";

export default function About() {
  return (
    <>
      {generateMetaTags({
        title: "Your Strategic Security Partner | Hudson Valley CISO",
        description: "Learn about James Venuto, your Hudson Valley Fractional CISO. Founded to bridge the security leadership gap for SMBs.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-24 gradient-primary-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Your Strategic Security Partner</h1>
                <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed">
                  I founded Hudson Valley CISO because I saw a critical gap where local businesses needed enterprise-grade security expertise but lacked the resources for a full-time CISO. After decades of leading security and compliance initiatives across cloud and data platforms, I realized that small and medium businesses deserve the same level of executive security leadership that larger enterprises enjoy—just right-sized to their budget and goals.
                </p>
                
                <div className="mb-8">
                  <a 
                    href="https://www.linkedin.com/in/jamesvenuto/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                    data-testid="link-linkedin-profile"
                  >
                    <SiLinkedin className="w-5 h-5" />
                    <span className="font-medium">Connect with me on LinkedIn</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">What This Means for You:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Executive-ready summaries that make sense</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Simple roadmaps with clear priorities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Faster approvals and better vendor answers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Clear ownership and accountability</span>
                    </li>
                  </ul>
                </div>
                
                {/* Certifications Section */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Certifications That Guarantee Expertise</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Shield className="w-12 h-12 text-primary-600 mb-2" />
                      <span className="text-sm font-medium text-gray-900">CISSP</span>
                      <span className="text-xs text-gray-600">Security Professional</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Award className="w-12 h-12 text-primary-600 mb-2" />
                      <span className="text-sm font-medium text-gray-900">CISM</span>
                      <span className="text-xs text-gray-600">Security Manager</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                      <Briefcase className="w-12 h-12 text-primary-600 mb-2" />
                      <span className="text-sm font-medium text-gray-900">CCSP</span>
                      <span className="text-xs text-gray-600">Cloud Security</span>
                    </div>
                  </div>
                </div>

                <CredentialAccordion />
              </div>
              
              <div className="text-center">
                <div className="gradient-primary-subtle rounded-2xl p-8 shadow-elegant border-elegant">
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Credentials Summary</h3>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <p>• Led security and compliance initiatives across cloud and data platforms</p>
                    <p>• Decades of experience aligning cybersecurity with business goals</p>
                    <p>• Certified in security, privacy, and risk; recognized in cloud security</p>
                  </div>
                  <div className="pt-3 border-t border-primary-100">
                    <a 
                      href="https://www.linkedin.com/in/jamesvenuto/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors text-sm"
                      data-testid="link-linkedin-credentials"
                    >
                      <SiLinkedin className="w-4 h-4" />
                      <span className="font-medium">View full professional profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
