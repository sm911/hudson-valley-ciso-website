import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, Shield, Users, FileText, Settings, AlertTriangle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags, generateStructuredData } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function SecurityProgramBasics() {
  const structuredData = generateStructuredData("Article", {
    title: "Security Program Basics for SMBs: A Practical Guide",
    description: "Practical guide to building security into your business operations without overwhelming complexity or cost.",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15"
  });

  return (
    <>
      {generateMetaTags({
        title: "Security Program Basics for SMBs: A Practical Guide | Hudson Valley CISO",
        description: "Practical guide to building security into your business operations without overwhelming complexity or cost.",
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
                Security Program Basics for SMBs
              </h1>
              <p className="text-xl text-gray-600">
                A practical guide to building security into your business operations without overwhelming complexity or cost.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-primary-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Programs vs. Security Tools</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Many SMBs think cybersecurity is about buying the right tools. While tools are important, 
                  a security program is about how you organize people, processes, and technology to protect your business.
                </p>
                <p className="text-gray-700 text-lg mb-0">
                  <strong>Think of it this way:</strong> Tools are like locks on your doors. A security program is your 
                  entire approach to keeping your business safe—including who has keys, when doors should be locked, 
                  and what to do if someone breaks in.
                </p>
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Five Pillars of SMB Security</h2>
                
                <div className="space-y-8">
                  <div className="bg-red-50 rounded-xl p-8">
                    <div className="flex items-center mb-6">
                      <Shield className="w-12 h-12 text-red-500 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">1. Know What You're Protecting</h3>
                        <p className="text-gray-600">Asset inventory and data classification</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What This Means:</h4>
                        <p className="text-gray-700 mb-4">
                          You can't protect what you don't know about. This pillar is about understanding what data, 
                          systems, and processes are most critical to your business.
                        </p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Customer and financial data inventory</li>
                          <li>• Critical business systems and applications</li>
                          <li>• Key business processes and dependencies</li>
                          <li>• Third-party services and vendors</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">How to Get Started:</h4>
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-medium text-gray-900 mb-2">Week 1 Task:</p>
                            <p className="text-gray-600 text-sm">
                              List your top 10 most important business systems and the data they contain. 
                              Include things like accounting software, CRM, file servers, and cloud services.
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-medium text-gray-900 mb-2">Success Metric:</p>
                            <p className="text-gray-600 text-sm">
                              You can answer "What would happen to our business if we lost access to [system] for a week?"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-8">
                    <div className="flex items-center mb-6">
                      <Users className="w-12 h-12 text-blue-500 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">2. Control Who Has Access</h3>
                        <p className="text-gray-600">Identity and access management</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What This Means:</h4>
                        <p className="text-gray-700 mb-4">
                          Ensure the right people have access to the right systems and data, but no more than they need 
                          to do their jobs effectively.
                        </p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Strong passwords and multi-factor authentication</li>
                          <li>• Role-based access to systems and data</li>
                          <li>• Regular review of who has access to what</li>
                          <li>• Proper onboarding and offboarding procedures</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">How to Get Started:</h4>
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-medium text-gray-900 mb-2">Week 2 Task:</p>
                            <p className="text-gray-600 text-sm">
                              Enable multi-factor authentication on all business-critical accounts. 
                              Start with email, banking, and cloud services.
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-medium text-gray-900 mb-2">Success Metric:</p>
                            <p className="text-gray-600 text-sm">
                              100% of administrative accounts have MFA enabled, and you can list who has admin access to each system.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-8">
                    <div className="flex items-center mb-6">
                      <Settings className="w-12 h-12 text-green-500 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">3. Protect Your Technology</h3>
                        <p className="text-gray-600">Technical security controls</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What This Means:</h4>
                        <p className="text-gray-700 mb-4">
                          Implement security controls that protect your devices, networks, and data from cyber threats. 
                          This is where most security tools fit in.
                        </p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Endpoint protection and monitoring</li>
                          <li>• Email and web security</li>
                          <li>• Regular backups and recovery testing</li>
                          <li>• Network security and monitoring</li>
                          <li>• Patch management and updates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">How to Get Started:</h4>
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-medium text-gray-900 mb-2">Week 3 Task:</p>
                            <p className="text-gray-600 text-sm">
                              Ensure all devices have up-to-date antivirus/endpoint protection and automatic updates enabled. 
                              Test your backup system by doing a small file restoration.
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-medium text-gray-900 mb-2">Success Metric:</p>
                            <p className="text-gray-600 text-sm">
                              95%+ of devices have current security software, and you've successfully restored files from backup within 30 days.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-8">
                    <div className="flex items-center mb-6">
                      <FileText className="w-12 h-12 text-purple-500 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">4. Create Clear Policies</h3>
                        <p className="text-gray-600">Governance and compliance</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What This Means:</h4>
                        <p className="text-gray-700 mb-4">
                          Document your security expectations and procedures so everyone knows what's expected. 
                          Policies don't have to be complex—they just need to be clear.
                        </p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Acceptable use of technology resources</li>
                          <li>• Password requirements and best practices</li>
                          <li>• Data handling and sharing guidelines</li>
                          <li>• Incident reporting procedures</li>
                          <li>• Remote work and BYOD policies</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">How to Get Started:</h4>
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-medium text-gray-900 mb-2">Week 4 Task:</p>
                            <p className="text-gray-600 text-sm">
                              Write a simple, one-page "Technology Use Guidelines" that covers passwords, 
                              email safety, and who to contact about security concerns.
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-medium text-gray-900 mb-2">Success Metric:</p>
                            <p className="text-gray-600 text-sm">
                              All employees have read and acknowledged the guidelines, and they know who to contact about security issues.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-8">
                    <div className="flex items-center mb-6">
                      <AlertTriangle className="w-12 h-12 text-amber-500 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">5. Prepare for Problems</h3>
                        <p className="text-gray-600">Incident response and business continuity</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What This Means:</h4>
                        <p className="text-gray-700 mb-4">
                          Have a plan for when things go wrong. This includes both security incidents 
                          (like ransomware) and business disruptions (like system outages).
                        </p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li>• Basic incident response procedures</li>
                          <li>• Contact information for emergencies</li>
                          <li>• Backup and recovery procedures</li>
                          <li>• Communication plans for customers/partners</li>
                          <li>• Regular testing and updates</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">How to Get Started:</h4>
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-medium text-gray-900 mb-2">Week 5 Task:</p>
                            <p className="text-gray-600 text-sm">
                              Create a simple "Emergency Contacts" list with IT support, key vendors, 
                              and what to do if you suspect a security problem.
                            </p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <p className="font-medium text-gray-900 mb-2">Success Metric:</p>
                            <p className="text-gray-600 text-sm">
                              Everyone knows who to call in an emergency, and you've tested your backup system in the past 90 days.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Your Program: Start Simple</h2>
                
                <div className="bg-success-50 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">The 80/20 Rule for SMB Security</h3>
                  <p className="text-gray-700 mb-4">
                    Focus on the 20% of security measures that prevent 80% of successful attacks:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">High-Impact, Low-Complexity</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Multi-factor authentication on all accounts</li>
                        <li>• Regular, tested backups</li>
                        <li>• Email security beyond basic spam filtering</li>
                        <li>• Employee training on phishing and social engineering</li>
                        <li>• Keeping software and systems updated</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Why These Matter Most</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Block 99% of automated attacks</li>
                        <li>• Prevent most successful phishing attempts</li>
                        <li>• Ensure business continuity after incidents</li>
                        <li>• Address the most common attack vectors</li>
                        <li>• Provide foundation for advanced security</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                      What NOT to Do
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Tool Shopping First:</strong> Buying security tools before understanding your risks</li>
                      <li>• <strong>Policy Overload:</strong> Creating complex policies no one will read or follow</li>
                      <li>• <strong>Set-and-Forget:</strong> Implementing security once and never reviewing it</li>
                      <li>• <strong>DIY Everything:</strong> Trying to handle all security internally without expertise</li>
                      <li>• <strong>Compliance Theater:</strong> Focusing only on checkbox compliance, not actual security</li>
                      <li>• <strong>Ignoring People:</strong> Not training staff or considering human factors</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Best Practices
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Risk First:</strong> Understand your risks before choosing solutions</li>
                      <li>• <strong>Keep it Simple:</strong> Policies should be practical and easy to follow</li>
                      <li>• <strong>Regular Reviews:</strong> Schedule quarterly reviews of your security program</li>
                      <li>• <strong>Get Expert Help:</strong> Work with security professionals for strategy and complex issues</li>
                      <li>• <strong>Focus on Outcomes:</strong> Measure reduction in risk, not just compliance checkboxes</li>
                      <li>• <strong>Include Everyone:</strong> Make security everyone's responsibility, not just IT's</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Security Program Maturity Journey</h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                      Basic (Month 1-3): Foundation Building
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Key Activities:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Implement MFA and basic endpoint protection</li>
                          <li>• Set up reliable backups</li>
                          <li>• Create simple security policies</li>
                          <li>• Basic employee security awareness</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Success Indicators:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Can answer customer security questions</li>
                          <li>• Reduced successful phishing attempts</li>
                          <li>• Faster recovery from technical issues</li>
                          <li>• Clear security incident reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                      Developing (Month 4-9): Systematic Approach
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Key Activities:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Regular security assessments</li>
                          <li>• Advanced threat protection</li>
                          <li>• Formal incident response procedures</li>
                          <li>• Vendor security requirements</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Success Indicators:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Pass cyber insurance applications</li>
                          <li>• Meet customer security requirements</li>
                          <li>• Proactive threat detection</li>
                          <li>• Measured security improvements</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                      Mature (Month 10+): Continuous Improvement
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Key Activities:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Regular compliance certifications</li>
                          <li>• Advanced threat hunting</li>
                          <li>• Comprehensive risk management</li>
                          <li>• Security program optimization</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 mb-2">Success Indicators:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Security as competitive advantage</li>
                          <li>• Faster partner onboarding</li>
                          <li>• Lower cyber insurance costs</li>
                          <li>• Industry security recognition</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Measuring Your Security Program</h2>
                
                <div className="bg-primary-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Metrics That Matter for SMBs</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-center mb-3">
                        <TrendingUp className="w-6 h-6 text-primary-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Risk Reduction</h4>
                      </div>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Phishing click rate trends</li>
                        <li>• Successful backup restorations</li>
                        <li>• Time to patch critical vulnerabilities</li>
                        <li>• Incident response time improvements</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center mb-3">
                        <Users className="w-6 h-6 text-blue-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Business Enablement</h4>
                      </div>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Customer security questionnaires passed</li>
                        <li>• Reduced cyber insurance premiums</li>
                        <li>• Faster partner onboarding</li>
                        <li>• Compliance audit results</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center mb-3">
                        <Shield className="w-6 h-6 text-green-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">Program Health</h4>
                      </div>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Employee training completion rates</li>
                        <li>• Security policy acknowledgments</li>
                        <li>• Vendor security assessment coverage</li>
                        <li>• Regular security review completion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-success-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Remember: Progress Over Perfection</h2>
                <p className="text-gray-700 mb-4">
                  Building an effective security program takes time. The goal isn't to implement everything at once, 
                  but to make steady progress that reduces your risk and supports your business goals.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Start Where You Are</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Focus on quick wins that provide immediate value</li>
                      <li>• Build on existing tools and processes where possible</li>
                      <li>• Get your team involved and invested in security</li>
                      <li>• Measure progress, not just compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Keep Moving Forward</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Regular reviews and updates to your program</li>
                      <li>• Stay informed about new threats and requirements</li>
                      <li>• Invest in capabilities that support business growth</li>
                      <li>• Get help when you need expertise or perspective</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Build Your Security Program?</h3>
                <p className="text-gray-600 mb-8">
                  Every business is different, but the fundamentals remain the same. The key is adapting these principles 
                  to your specific industry, size, and risk profile while keeping things practical and achievable.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/services/assessment">
                    <Button variant="outline" size="lg">
                      Get a Security Assessment
                    </Button>
                  </Link>
                  <a 
                    href={SITE_CONFIG.calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                      <Calendar className="w-5 h-5 mr-2" />
                      Discuss Your Security Program
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
