import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, Shield, AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags, generateStructuredData } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function CyberInsuranceReadiness() {
  const structuredData = generateStructuredData("Article", {
    title: "Cyber Insurance Readiness: What SMBs Need to Know",
    description: "Essential guide for SMBs on cyber insurance requirements, questionnaires, and how to get the coverage you need at reasonable rates.",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15"
  });

  return (
    <>
      {generateMetaTags({
        title: "Cyber Insurance Readiness: What SMBs Need to Know | Hudson Valley CISO",
        description: "Essential guide for SMBs on cyber insurance requirements, questionnaires, and how to get the coverage you need at reasonable rates.",
      })}
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white">
        <article className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/resources" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Link>
            
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cyber Insurance Readiness: What SMBs Need to Know
              </h1>
              <p className="text-xl text-gray-600">
                Essential guide for getting the cyber insurance coverage you need without the sticker shock.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-red-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  The Reality Check
                </h2>
                <p className="text-gray-700 text-lg mb-4">
                  Cyber insurance used to be optional. Those days are over. Today, it's often required by customers, 
                  lenders, and business partners. But getting coverage—especially at reasonable rates—has become much more challenging.
                </p>
                <p className="text-gray-700 text-lg mb-0">
                  <strong>The bottom line:</strong> Insurers now require you to prove your security measures work, not just promise they exist.
                </p>
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Cyber Insurance Requirements Changed</h2>
                
                <div className="bg-gray-50 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The Insurance Industry Learned the Hard Way</h3>
                  <p className="text-gray-700 mb-4">
                    Between 2019-2022, cyber insurance claims skyrocketed. Ransomware attacks became more sophisticated, 
                    and insurers realized that many companies had inadequate security controls despite claiming otherwise on applications.
                  </p>
                  <p className="text-gray-700">
                    <strong>Result:</strong> Insurers tightened requirements dramatically. What used to be a simple application 
                    now requires detailed evidence of your security posture.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Insurance Requirements</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                      Mandatory Controls (Nearly Universal)
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Multi-Factor Authentication (MFA) on all accounts</li>
                      <li>• Endpoint Detection and Response (EDR) tools</li>
                      <li>• Email security beyond basic spam filtering</li>
                      <li>• Regular, tested backups (offline/immutable)</li>
                      <li>• Patch management program</li>
                      <li>• Security awareness training</li>
                      <li>• Incident response plan</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-6 h-6 text-amber-500 mr-2" />
                      Common Additional Requirements
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Privileged access management</li>
                      <li>• Network segmentation</li>
                      <li>• Vulnerability scanning</li>
                      <li>• Third-party security assessments</li>
                      <li>• Security policies and procedures</li>
                      <li>• Regular tabletop exercises</li>
                      <li>• Cyber security insurance questionnaire completion</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating the Application Process</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Questionnaire Challenge</h3>
                    <p className="text-gray-700 mb-4">
                      Modern cyber insurance applications can be 50-100+ questions covering technical security controls, 
                      business processes, and risk management practices. Common problem areas include:
                    </p>
                    
                    <div className="bg-red-50 rounded-xl p-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <X className="w-5 h-5 text-red-500 mr-2" />
                        Questions That Trip Up SMBs
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• "Do you have MFA on all administrative accounts?" (What counts as "administrative"?)</li>
                        <li>• "Do you maintain offline backups?" (What exactly qualifies as "offline"?)</li>
                        <li>• "Do you conduct penetration testing?" (Internal scans vs. external pentests?)</li>
                        <li>• "Do you have a documented incident response plan?" (A one-page outline vs. comprehensive playbook?)</li>
                        <li>• "Do you conduct security awareness training?" (Annual email vs. ongoing program?)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">The Documentation Requirement</h3>
                    <p className="text-gray-700 mb-4">
                      Answering "yes" isn't enough anymore. Insurers increasingly require proof:
                    </p>
                    
                    <div className="bg-primary-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Evidence You May Need to Provide</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Screenshots of MFA configuration</li>
                        <li>• EDR deployment reports and coverage statistics</li>
                        <li>• Backup logs showing successful restoration tests</li>
                        <li>• Training completion certificates and records</li>
                        <li>• Incident response plan documentation</li>
                        <li>• Vulnerability scan reports</li>
                        <li>• Security policy documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common SMB Implementation Strategies</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">Start with the Basics</h3>
                    <p className="text-gray-600 text-sm">
                      Implement MFA, EDR, and email security first. These are nearly universal requirements and provide the biggest security impact.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">Document Everything</h3>
                    <p className="text-gray-600 text-sm">
                      Create simple policies and procedures. You don't need complex documents, but you need to show intentional security practices.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">Test and Prove</h3>
                    <p className="text-gray-600 text-sm">
                      Regularly test backups, run phishing simulations, and document the results. Evidence of testing is often as important as the controls themselves.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost-Effective Solutions for SMBs</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left font-semibold">Requirement</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">SMB-Friendly Solution</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Approximate Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Multi-Factor Authentication</td>
                        <td className="border border-gray-300 p-3">Microsoft 365 built-in MFA or Duo</td>
                        <td className="border border-gray-300 p-3">$0-5/user/month</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Endpoint Detection & Response</td>
                        <td className="border border-gray-300 p-3">Microsoft Defender or CrowdStrike Go</td>
                        <td className="border border-gray-300 p-3">$3-10/endpoint/month</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Email Security</td>
                        <td className="border border-gray-300 p-3">Microsoft Defender for Office 365 or Proofpoint Essentials</td>
                        <td className="border border-gray-300 p-3">$2-8/user/month</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-3">Backup Solution</td>
                        <td className="border border-gray-300 p-3">Managed backup with offline/immutable storage</td>
                        <td className="border border-gray-300 p-3">$50-200/month total</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Security Awareness</td>
                        <td className="border border-gray-300 p-3">KnowBe4, Proofpoint, or similar platform</td>
                        <td className="border border-gray-300 p-3">$2-5/user/month</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Red Flags That Hurt Your Application</h2>
                
                <div className="bg-red-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Avoid These Common Mistakes</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technical Red Flags</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• No MFA on any accounts</li>
                        <li>• Using only basic antivirus (not EDR)</li>
                        <li>• Backups not tested in past year</li>
                        <li>• No email security beyond spam filtering</li>
                        <li>• Widespread use of administrative privileges</li>
                        <li>• No network segmentation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Process Red Flags</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• No written security policies</li>
                        <li>• No incident response plan</li>
                        <li>• No security training program</li>
                        <li>• Previous security incidents (especially recent ones)</li>
                        <li>• Inconsistent answers across applications</li>
                        <li>• Inability to provide requested documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline for Getting Insurance-Ready</h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">30-Day Quick Wins</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Enable MFA on all administrative and user accounts</li>
                      <li>• Deploy EDR on all endpoints</li>
                      <li>• Implement advanced email security</li>
                      <li>• Start security awareness training</li>
                      <li>• Document basic security policies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">60-Day Improvements</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Test and document backup restoration procedures</li>
                      <li>• Implement privileged access management</li>
                      <li>• Develop incident response plan</li>
                      <li>• Conduct first phishing simulation</li>
                      <li>• Complete vulnerability assessment</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">90-Day Full Readiness</h3>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Complete comprehensive security assessment</li>
                      <li>• Conduct tabletop exercise</li>
                      <li>• Finalize all documentation</li>
                      <li>• Complete insurance applications with evidence</li>
                      <li>• Establish ongoing monitoring and reporting</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="bg-success-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Investment Pays Off</h2>
                <p className="text-gray-700 mb-4">
                  Yes, getting insurance-ready requires upfront investment in security controls and documentation. 
                  But the benefits extend far beyond insurance coverage:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Direct Benefits</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Lower insurance premiums</li>
                      <li>• Better coverage terms</li>
                      <li>• Faster claims processing</li>
                      <li>• Renewed coverage availability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Indirect Benefits</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Reduced risk of successful attacks</li>
                      <li>• Better customer confidence</li>
                      <li>• Competitive advantage in RFPs</li>
                      <li>• Improved business partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Insurance-Ready?</h3>
                <p className="text-gray-600 mb-8">
                  Don't wait until your current policy expires. Getting insurance-ready takes time, 
                  and it's much easier to do it right than to fix problems under deadline pressure.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/services/cyber-insurance">
                    <Button variant="outline" size="lg">
                      See Our Insurance Readiness Service
                    </Button>
                  </Link>
                  <a 
                    href={SITE_CONFIG.calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                      <Calendar className="w-5 h-5 mr-2" />
                      Get Your Readiness Assessment
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
