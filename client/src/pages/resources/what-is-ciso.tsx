import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, Users, Target, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags, generateStructuredData } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function WhatIsCISO() {
  const structuredData = generateStructuredData("Article", {
    title: "What is a CISO? (SMB Version)",
    description: "Understanding the Chief Information Security Officer role and why SMBs need security leadership without the full-time cost.",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15"
  });

  return (
    <>
      {generateMetaTags({
        title: "What is a CISO? SMB Guide | Hudson Valley CISO",
        description: "Understanding the Chief Information Security Officer role and why SMBs need security leadership without the full-time cost.",
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
                What is a CISO? (SMB Version)
              </h1>
              <p className="text-xl text-gray-600">
                Understanding the Chief Information Security Officer role and why SMBs need security leadership without the full-time cost.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-primary-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Simple Answer</h2>
                <p className="text-gray-700 text-lg mb-0">
                  A Chief Information Security Officer (CISO) is the executive responsible for an organization's cybersecurity strategy and operations. 
                  They're the person who makes sure security investments align with business goals and that everyone understands their role in protecting the company.
                </p>
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Does a CISO Actually Do?</h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <Target className="w-12 h-12 text-primary-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Sets Security Strategy</h3>
                    <p className="text-gray-600">
                      Decides what security investments to make based on business priorities and risk levels. 
                      Not just buying tools, but building a comprehensive approach.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <Users className="w-12 h-12 text-primary-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Owns Risk Decisions</h3>
                    <p className="text-gray-600">
                      Makes the tough calls about which risks to accept, which to mitigate, and how much to spend on security measures.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <MessageSquare className="w-12 h-12 text-primary-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Translates to Business</h3>
                    <p className="text-gray-600">
                      Explains technical security concepts in business terms that leadership can understand and act upon.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why CISOs Matter for SMBs</h2>
                
                <div className="bg-amber-50 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The SMB Security Challenge</h3>
                  <p className="text-gray-700 mb-4">
                    Small and medium businesses face the same cyber threats as large enterprises, but typically have:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Limited security expertise on staff</li>
                    <li>• Tighter budgets for security investments</li>
                    <li>• Less time to research and implement solutions</li>
                    <li>• Higher stakes if something goes wrong</li>
                  </ul>
                </div>
                
                <p className="text-gray-700 mb-6">
                  This is where CISO-level thinking becomes crucial. You need someone who can:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Prioritize limited resources</strong>
                      <p className="text-gray-600">Focus security spending where it will have the biggest impact</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Navigate compliance requirements</strong>
                      <p className="text-gray-600">Understand what's actually required vs. what's recommended</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Coordinate with vendors</strong>
                      <p className="text-gray-600">Work with MSPs and security vendors to get the best outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-gray-900">Communicate with leadership</strong>
                      <p className="text-gray-600">Provide clear updates and recommendations executives can act on</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">CISO vs. Other Security Roles</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-4 text-left font-semibold">Role</th>
                        <th className="border border-gray-300 p-4 text-left font-semibold">Focus</th>
                        <th className="border border-gray-300 p-4 text-left font-semibold">When You Need Them</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-4 font-semibold">IT/MSP</td>
                        <td className="border border-gray-300 p-4">Day-to-day technology operations</td>
                        <td className="border border-gray-300 p-4">Always - they keep your systems running</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-semibold">Security Analyst</td>
                        <td className="border border-gray-300 p-4">Monitoring and responding to threats</td>
                        <td className="border border-gray-300 p-4">When you have complex security tools to manage</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-semibold">CISO</td>
                        <td className="border border-gray-300 p-4">Strategy, governance, and business alignment</td>
                        <td className="border border-gray-300 p-4">When you need security leadership and decision-making</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs You Need CISO-Level Thinking</h2>
                
                <div className="bg-red-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">You might need CISO guidance if you're experiencing:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Customers asking detailed security questions you can't answer</li>
                    <li>• Cyber insurance questionnaires that seem impossible to complete</li>
                    <li>• Compliance requirements you don't understand</li>
                    <li>• Security vendor sales pitches that all sound the same</li>
                    <li>• Uncertainty about which security investments to prioritize</li>
                    <li>• Feeling overwhelmed by security alerts and recommendations</li>
                    <li>• Board or leadership asking for security updates you struggle to provide</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Full-Time CISO Challenge</h2>
                
                <p className="text-gray-700 mb-6">
                  Here's the problem: most SMBs can't afford a full-time CISO. Experienced CISOs typically command salaries of $200,000-$400,000+ 
                  plus benefits, and they're in high demand. Even if you could afford one, you might not have enough security work to keep them busy full-time.
                </p>
                
                <p className="text-gray-700 mb-6">
                  This is why many SMBs either go without security leadership entirely (creating risk) or try to make their IT person responsible 
                  for security strategy (which rarely works well, since the skills are quite different).
                </p>
              </section>

              <div className="bg-success-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
                <p className="text-gray-700 text-lg mb-4">
                  A CISO provides the strategic security leadership that every business needs in today's threat environment. 
                  They're not just another IT role—they're business executives who happen to specialize in security.
                </p>
                <p className="text-gray-700 text-lg mb-0">
                  For SMBs, the question isn't whether you need this kind of thinking—it's how to get it in a way that fits your budget and business reality.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Explore Your Options?</h3>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/resources/fractional-vs-msp-vciso">
                    <Button variant="outline" size="lg">
                      Compare Service Models
                    </Button>
                  </Link>
                  <a 
                    href={SITE_CONFIG.calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                      <Calendar className="w-5 h-5 mr-2" />
                      Discuss Your Needs
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
