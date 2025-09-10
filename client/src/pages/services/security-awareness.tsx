import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function SecurityAwareness() {
  return (
    <>
      {generateMetaTags({
        title: "Security Awareness & Phishing Program | Hudson Valley CISO",
        description: "Employee security training and culture development for SMBs. Reduce human risk with engaging, practical security awareness programs.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/services" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="flex items-center mb-6">
              <GraduationCap className="w-12 h-12 text-primary-600 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Security Awareness & Phishing Program
                </h1>
                <p className="text-xl text-gray-600 mt-2">
                  Transform your employees into your strongest security layer
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Human Factor</h2>
              <p className="text-gray-700 mb-4">
                95% of successful cyber attacks involve human error. Your employees are often the first and last line of defense 
                against cyber threats. Traditional "death by PowerPoint" security training doesn't work.
              </p>
              <p className="text-gray-700">
                <strong>The solution:</strong> Engaging, practical security awareness that builds a security-conscious culture.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Interactive Training</strong>
                      <p className="text-gray-600">Engaging content that resonates with real work scenarios</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Simulated Phishing</strong>
                      <p className="text-gray-600">Safe practice with realistic phishing scenarios</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Culture Building</strong>
                      <p className="text-gray-600">Make security a positive part of company culture</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Continuous Improvement</strong>
                      <p className="text-gray-600">Ongoing assessment and program refinement</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Training Topics</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Phishing and social engineering</li>
                  <li>• Password security and MFA</li>
                  <li>• Safe browsing and email practices</li>
                  <li>• Physical security awareness</li>
                  <li>• Mobile device and remote work security</li>
                  <li>• Data handling and classification</li>
                  <li>• Incident reporting procedures</li>
                  <li>• Cloud service security</li>
                  <li>• Privacy and compliance basics</li>
                </ul>
                
                <div className="mt-8 space-y-3">
                  <Link href="/contact">
                    <Button className="w-full bg-primary-600 hover:bg-primary-700">
                      Launch Training Program
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
                      Discuss Training Needs
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Implementation</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Baseline Assessment</h3>
                  <p className="text-gray-600 text-sm">Measure current security awareness levels</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Program Design</h3>
                  <p className="text-gray-600 text-sm">Customize content for your business</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Launch & Train</h3>
                  <p className="text-gray-600 text-sm">Roll out training and simulations</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    4
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Monitor & Improve</h3>
                  <p className="text-gray-600 text-sm">Track results and refine approach</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-amber-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Security Mistakes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clicking suspicious links or attachments</li>
                  <li>• Using weak or reused passwords</li>
                  <li>• Sharing login credentials</li>
                  <li>• Connecting to unsecured Wi-Fi</li>
                  <li>• Falling for social engineering tricks</li>
                  <li>• Not reporting suspicious activity</li>
                  <li>• Poor physical security practices</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Success Metrics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reduced phishing simulation click rates</li>
                  <li>• Increased incident reporting</li>
                  <li>• Improved security behavior scores</li>
                  <li>• Higher training completion rates</li>
                  <li>• Positive culture survey results</li>
                  <li>• Fewer security policy violations</li>
                  <li>• Stronger password practices</li>
                </ul>
              </div>
            </div>

            <div className="bg-success-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Benefits</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Risk Reduction</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Significantly reduce successful phishing attacks</li>
                    <li>• Improve password security practices</li>
                    <li>• Increase threat detection and reporting</li>
                    <li>• Build defense-in-depth mindset</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Cultural Impact</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Create security-conscious workforce</li>
                    <li>• Improve compliance and audit readiness</li>
                    <li>• Enhance customer and partner confidence</li>
                    <li>• Reduce insurance claims and premiums</li>
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
