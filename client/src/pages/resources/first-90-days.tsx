import { Link } from "wouter";
import { ArrowLeft, Calendar, CheckCircle, Clock, Target, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateMetaTags, generateStructuredData } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function First90Days() {
  const structuredData = generateStructuredData("Article", {
    title: "The First 90 Days with a Fractional CISO",
    description: "Detailed timeline of what to expect in your first three months working with a Fractional CISO, including deliverables and milestones.",
    datePublished: "2024-01-15",
    dateModified: "2024-01-15"
  });

  return (
    <>
      {generateMetaTags({
        title: "The First 90 Days with a Fractional CISO | Hudson Valley CISO",
        description: "Detailed timeline of what to expect in your first three months working with a Fractional CISO, including deliverables and milestones.",
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
                The First 90 Days with a Fractional CISO
              </h1>
              <p className="text-xl text-gray-600">
                What to expect, when to expect it, and how to measure success in your first three months.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="bg-primary-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Setting Clear Expectations</h2>
                <p className="text-gray-700 text-lg mb-4">
                  Starting with a Fractional CISO should feel structured and purposeful, not like you're paying for expensive consulting 
                  with unclear outcomes. This timeline shows exactly what happens, when it happens, and what you'll have to show for it.
                </p>
                <p className="text-gray-700 text-lg mb-0">
                  <strong>The goal:</strong> By day 90, you'll have a clear security roadmap, immediate risk reductions, 
                  and the foundation for ongoing security management.
                </p>
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Overview: The Three Phases</h2>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-red-50 rounded-xl p-6 text-center">
                    <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Days 1-14</h3>
                    <h4 className="font-semibold text-gray-700 mb-3">Discovery & Quick Wins</h4>
                    <p className="text-gray-600 text-sm">
                      Understand your current state, identify immediate risks, and implement quick security improvements.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Days 15-42</h3>
                    <h4 className="font-semibold text-gray-700 mb-3">Foundation & Planning</h4>
                    <p className="text-gray-600 text-sm">
                      Build security foundations, create strategic roadmap, and establish governance processes.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 text-center">
                    <BarChart3 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Days 43-90</h3>
                    <h4 className="font-semibold text-gray-700 mb-3">Implementation & Measurement</h4>
                    <p className="text-gray-600 text-sm">
                      Execute priority initiatives, establish metrics, and prepare for ongoing operations.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 1: Discovery & Quick Wins (Days 1-14)</h2>
                
                <div className="bg-red-50 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Week 1: Understanding Your Business</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Stakeholder Interviews (Days 1-3)</h4>
                      <p className="text-gray-700 mb-3">
                        One-on-one conversations with key stakeholders to understand business priorities, pain points, and security concerns.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium text-gray-900 mb-2">Who We Interview:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• CEO/Owner (business priorities)</li>
                            <li>• Operations Manager (daily processes)</li>
                            <li>• IT Manager/MSP (current security state)</li>
                            <li>• Key department heads (workflow understanding)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-2">Key Questions:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• What keeps you up at night security-wise?</li>
                            <li>• What customer/partner security questions are you getting?</li>
                            <li>• Where do security requirements slow you down?</li>
                            <li>• What's your experience with security incidents?</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technical Assessment (Days 3-5)</h4>
                      <p className="text-gray-700 mb-3">
                        Hands-on review of your current security posture, tools, and processes.
                      </p>
                      <div className="bg-white rounded-lg p-4">
                        <p className="font-medium text-gray-900 mb-2">Assessment Areas:</p>
                        <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                          <li>• Identity and access management</li>
                          <li>• Endpoint protection and monitoring</li>
                          <li>• Email and web security</li>
                          <li>• Network security and segmentation</li>
                          <li>• Backup and recovery capabilities</li>
                          <li>• Security policies and procedures</li>
                          <li>• Vendor and third-party access</li>
                          <li>• Compliance requirements and gaps</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Week 2: Immediate Actions</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Risk Snapshot Delivery (Day 8)</h4>
                      <p className="text-gray-700 mb-3">
                        Executive presentation covering immediate risks and recommended quick wins.
                      </p>
                      <div className="bg-red-100 rounded-lg p-4">
                        <p className="font-medium text-gray-900 mb-2">What You'll Receive:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Top 5 security risks with business impact</li>
                          <li>• Quick wins that can be implemented immediately</li>
                          <li>• Estimated timeline and resources for improvements</li>
                          <li>• Clear recommendations with business justification</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quick Win Implementation (Days 9-14)</h4>
                      <p className="text-gray-700 mb-3">
                        Hands-on implementation of immediate security improvements that provide quick value.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium text-gray-900 mb-2">Typical Quick Wins:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Enable MFA on critical accounts</li>
                            <li>• Implement basic email security rules</li>
                            <li>• Review and remove unnecessary admin access</li>
                            <li>• Update critical security patches</li>
                            <li>• Secure file sharing configurations</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 mb-2">Expected Impact:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• 60-80% reduction in email-based threats</li>
                            <li>• Elimination of most common attack vectors</li>
                            <li>• Improved visibility into security events</li>
                            <li>• Better control over data access</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 2: Foundation & Planning (Days 15-42)</h2>
                
                <div className="bg-blue-50 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Weeks 3-4: Strategic Planning</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Security Roadmap Development (Days 15-21)</h4>
                      <p className="text-gray-700 mb-3">
                        Create a comprehensive, prioritized plan for security improvements aligned with business goals.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-medium text-gray-900 mb-2">3-Month Priorities:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Critical control implementations</li>
                            <li>• Policy and procedure development</li>
                            <li>• Compliance gap closure</li>
                            <li>• Staff training initiation</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-medium text-gray-900 mb-2">6-12 Month Vision:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Advanced security capabilities</li>
                            <li>• Compliance certification readiness</li>
                            <li>• Mature incident response capabilities</li>
                            <li>• Strategic technology investments</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Budget and Resource Planning (Days 19-21)</h4>
                      <p className="text-gray-700 mb-3">
                        Realistic budget estimates and resource requirements for security initiatives.
                      </p>
                      <div className="bg-white rounded-lg p-4">
                        <p className="font-medium text-gray-900 mb-2">Budget Categories:</p>
                        <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                          <li>• Security tools and subscriptions</li>
                          <li>• Training and certification programs</li>
                          <li>• Professional services and assessments</li>
                          <li>• Hardware and infrastructure</li>
                          <li>• Compliance and audit costs</li>
                          <li>• Incident response and recovery</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Weeks 5-6: Foundation Building</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Essential Policy Development (Days 22-28)</h4>
                      <p className="text-gray-700 mb-3">
                        Create core security policies tailored to your business needs and compliance requirements.
                      </p>
                      <div className="bg-blue-100 rounded-lg p-4">
                        <p className="font-medium text-gray-900 mb-2">Policy Priority List:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Information Security Policy (master document)</li>
                          <li>• Acceptable Use Policy for technology resources</li>
                          <li>• Data Classification and Handling procedures</li>
                          <li>• Incident Response Policy and procedures</li>
                          <li>• Remote Work and BYOD guidelines</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Control Baseline Establishment (Days 29-35)</h4>
                      <p className="text-gray-700 mb-3">
                        Implement fundamental security controls that form the backbone of your security program.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-medium text-gray-900 mb-2">Technical Controls:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Advanced email security deployment</li>
                            <li>• Endpoint detection and response</li>
                            <li>• Backup verification and testing</li>
                            <li>• Network monitoring capabilities</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-medium text-gray-900 mb-2">Administrative Controls:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Access review procedures</li>
                            <li>• Security awareness program setup</li>
                            <li>• Vendor security requirements</li>
                            <li>• Change management procedures</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Incident Response Playbook (Days 36-42)</h4>
                      <p className="text-gray-700 mb-3">
                        Develop practical incident response procedures tailored to your most likely threat scenarios.
                      </p>
                      <div className="bg-blue-100 rounded-lg p-4">
                        <p className="font-medium text-gray-900 mb-2">Playbook Components:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Contact information and escalation procedures</li>
                          <li>• Step-by-step response procedures for common incidents</li>
                          <li>• Communication templates for stakeholders</li>
                          <li>• Evidence collection and preservation guidelines</li>
                          <li>• Recovery and lessons learned processes</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 3: Implementation & Measurement (Days 43-90)</h2>
                
                <div className="bg-green-50 rounded-xl p-8 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Weeks 7-10: Priority Implementation</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Security Control Deployment (Days 43-56)</h4>
                      <p className="text-gray-700 mb-3">
                        Hands-on implementation of priority security controls identified in the roadmap.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-medium text-gray-900 mb-2">Week 7-8 Focus:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Deploy additional security tools</li>
                            <li>• Configure monitoring and alerting</li>
                            <li>• Implement access control improvements</li>
                            <li>• Begin security awareness training</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <p className="font-medium text-gray-900 mb-2">Success Metrics:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• 95%+ endpoint coverage with EDR</li>
                            <li>• All users enrolled in MFA</li>
                            <li>• Backup restoration tests completed</li>
                            <li>• Staff training completion {'>'}80%</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Staff Training and Awareness (Days 57-70)</h4>
                      <p className="text-gray-700 mb-3">
                        Launch comprehensive security awareness program with practical, role-based training.
                      </p>
                      <div className="bg-green-100 rounded-lg p-4">
                        <p className="font-medium text-gray-900 mb-2">Training Components:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• General security awareness for all staff</li>
                          <li>• Role-specific security training (admin, finance, etc.)</li>
                          <li>• Phishing simulation campaign</li>
                          <li>• Incident reporting procedures</li>
                          <li>• Policy acknowledgment and compliance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Weeks 11-13: Measurement & Optimization</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">KPI and KRI Dashboard (Days 71-77)</h4>
                      <p className="text-gray-700 mb-3">
                        Establish key performance and risk indicators with regular reporting mechanisms.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-100 rounded-lg p-4">
                          <p className="font-medium text-gray-900 mb-2">Key Performance Indicators:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• Training completion rates</li>
                            <li>• Phishing simulation click rates</li>
                            <li>• Patch management compliance</li>
                            <li>• Access review completion</li>
                            <li>• Incident response times</li>
                          </ul>
                        </div>
                        <div className="bg-green-100 rounded-lg p-4">
                          <p className="font-medium text-gray-900 mb-2">Key Risk Indicators:</p>
                          <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• High-risk vulnerabilities</li>
                            <li>• Failed login attempts</li>
                            <li>• Suspicious email detections</li>
                            <li>• Backup failure rates</li>
                            <li>• Policy violation reports</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Quarterly Strategy Review (Days 78-84)</h4>
                      <p className="text-gray-700 mb-3">
                        Comprehensive review of progress, challenges, and strategic direction for the next quarter.
                      </p>
                      <div className="bg-white rounded-lg p-4">
                        <p className="font-medium text-gray-900 mb-2">Review Components:</p>
                        <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                          <li>• Roadmap progress assessment</li>
                          <li>• Risk posture improvements</li>
                          <li>• Budget and resource utilization</li>
                          <li>• Compliance status update</li>
                          <li>• Threat landscape changes</li>
                          <li>• Technology and process optimization</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">90-Day Success Report (Days 85-90)</h4>
                      <p className="text-gray-700 mb-3">
                        Comprehensive report documenting achievements, improvements, and next steps.
                      </p>
                      <div className="bg-green-100 rounded-lg p-4">
                        <p className="font-medium text-gray-900 mb-2">Report Contents:</p>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Executive summary of risk reduction achieved</li>
                          <li>• Detailed metrics and performance indicators</li>
                          <li>• Compliance improvements and certifications</li>
                          <li>• Staff capability development progress</li>
                          <li>• Next quarter priorities and recommendations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What Success Looks Like at Day 90</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-success-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        Measurable Security Improvements
                      </h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• 85%+ reduction in successful phishing attempts</li>
                        <li>• 100% MFA coverage on critical accounts</li>
                        <li>• 95%+ endpoint protection deployment</li>
                        <li>• Monthly security awareness training {'>'}90% completion</li>
                        <li>• Incident response time {'<'}2 hours for critical issues</li>
                        <li>• Backup restoration testing completed and documented</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <Users className="w-5 h-5 text-blue-500 mr-2" />
                        Business Enablement
                      </h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Customer security questionnaires answered confidently</li>
                        <li>• Cyber insurance application completed successfully</li>
                        <li>• Compliance gap assessment completed</li>
                        <li>• Vendor security requirements documented</li>
                        <li>• Board/executive reporting established</li>
                        <li>• Security budget planning for next fiscal year</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-purple-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <Target className="w-5 h-5 text-purple-500 mr-2" />
                        Organizational Capability
                      </h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Security policies documented and communicated</li>
                        <li>• Incident response procedures tested</li>
                        <li>• Staff trained on security best practices</li>
                        <li>• Regular security metrics and reporting</li>
                        <li>• Vendor and MSP coordination established</li>
                        <li>• Strategic security roadmap for next 12 months</li>
                      </ul>
                    </div>
                    
                    <div className="bg-amber-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <BarChart3 className="w-5 h-5 text-amber-500 mr-2" />
                        Ongoing Operations Ready
                      </h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Monthly executive reporting established</li>
                        <li>• Quarterly strategic reviews scheduled</li>
                        <li>• Annual security program review planned</li>
                        <li>• Budget and resource planning integrated</li>
                        <li>• Continuous improvement process defined</li>
                        <li>• Clear success metrics and targets set</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-primary-50 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Monthly Deliverables</h2>
                <p className="text-gray-700 mb-6">
                  Every month, you'll receive clear, actionable deliverables that demonstrate progress and provide value:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Month 1 Deliverables:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Risk Assessment Report</li>
                      <li>• Quick Wins Implementation</li>
                      <li>• Stakeholder Interview Summary</li>
                      <li>• Initial Roadmap Draft</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Month 2 Deliverables:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Comprehensive Security Roadmap</li>
                      <li>• Essential Security Policies</li>
                      <li>• Control Implementation Plan</li>
                      <li>• Incident Response Playbook</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Month 3 Deliverables:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• KPI/KRI Dashboard</li>
                      <li>• Training Program Results</li>
                      <li>• 90-Day Success Report</li>
                      <li>• Next Quarter Priorities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start Your 90-Day Security Transformation?</h3>
                <p className="text-gray-600 mb-8">
                  This structured approach ensures you get immediate value while building long-term security capabilities. 
                  Every step is designed to provide measurable business value, not just check compliance boxes.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href="/services">
                    <Button variant="outline" size="lg">
                      See Service Options
                    </Button>
                  </Link>
                  <a 
                    href={SITE_CONFIG.calendarLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                      <Calendar className="w-5 h-5 mr-2" />
                      Start Your 90-Day Plan
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
