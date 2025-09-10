import { CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { generateMetaTags } from "@/lib/seo";

const clientScenarios = [
  {
    title: "Regional Financial Firm: Proactive NYDFS Compliance",
    industry: "Financial Services",
    icon: Shield,
    challenge: "A growing financial firm in the Hudson Valley was preparing for a new NYDFS audit, but with a rapidly expanding team and legacy systems, they lacked a formal security program. Their basic security measures were no longer sufficient to meet the new, stringent regulatory requirements, especially those concerning enhanced governance and multi-factor authentication. The leadership team was concerned about passing the audit and feared potential fines and reputational damage.",
    solution: "We provided a structured, data-driven security program to bring them into full compliance. We began by conducting a comprehensive risk assessment, which included a review of their systems and an analysis of their compliance gaps against the new NYDFS regulations. From this, we delivered a prioritized remediation plan that focused on high-impact areas, such as implementing a formal governance framework and ensuring full coverage for multi-factor authentication. We also generated the necessary, board-level reports to demonstrate their progress, which is a key requirement of the new regulations.",
    result: "The client achieved full compliance ahead of their audit deadline, passing their regulatory review with zero findings. By proactively addressing their security posture, we not only helped them avoid fines but also reduced their overall cyber risk score by 40% in just six months, providing the leadership team with peace of mind.",
    color: "text-blue-600"
  },
  {
    title: "Manufacturing Company: Renewing Cyber Insurance",
    industry: "Manufacturing", 
    icon: TrendingUp,
    challenge: "A mid-sized manufacturing company with a complex supply chain was struggling to renew their cyber insurance policy. Their previous security questionnaires were inadequate, and the underwriters were threatening to either deny their coverage or raise their premiums significantly due to perceived risk in their operational technology. Their outdated documentation and lack of a formal security program made it difficult to demonstrate a strong security posture.",
    solution: "We worked with their leadership to build a robust, insurance-friendly security program. We conducted an in-depth assessment of their environment and used our structured frameworks to create a prioritized security roadmap. The focus was on implementing documented policies, a formal security awareness training program for all employees, and an incident response procedure. We then provided clear, detailed, and verifiable documentation that demonstrated their new security controls to the insurance underwriters.",
    result: "The company successfully renewed its cyber insurance at a 25% lower premium, while increasing its coverage limits. The annual savings of over $30,000 immediately demonstrated the return on investment in a proactive security strategy, making cybersecurity a business enabler rather than a cost center.",
    color: "text-green-600"
  },
  {
    title: "Healthcare Practice: Sustainable HIPAA Compliance",
    industry: "Healthcare",
    icon: Users,
    challenge: "A growing healthcare practice with multiple locations and a need to secure sensitive patient data was struggling to maintain consistent HIPAA compliance. With security practices that varied across their offices, they were vulnerable to data breaches and regulatory violations. They lacked the expertise to manage the complex and evolving compliance requirements, putting patient trust and their business at risk.",
    solution: "We developed and implemented a unified, continuous compliance program across all their locations. We established a standardized set of security policies and procedures based on the HIPAA framework, providing clear documentation and automated reminders for ongoing tasks. We also created employee training modules and defined clear accountability structures to ensure everyone understood their role in protecting patient information.",
    result: "The practice achieved full HIPAA compliance across all locations and established a sustainable framework for ongoing regulatory adherence. This comprehensive program reduced the potential for violations by 70%, allowing the practice to confidently grow its business while upholding its commitment to patient privacy and trust.",
    color: "text-purple-600"
  }
];

export default function CaseStudies() {
  return (
    <>
      {generateMetaTags({
        title: "Our Approach | Hudson Valley CISO",
        description: "How we help businesses like yours with proven, structured security solutions. See real examples of our approach creating success stories for clients.",
      })}
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 gradient-primary-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Our Approach in Action: How We Help Businesses Like Yours
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
              Every business has unique challenges, but the path to a strong security posture follows a proven, structured process. We partner with you to turn overwhelming security and compliance mandates into a clear, actionable plan that delivers measurable business value.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
              Here are a few examples of how our approach has created success stories for our clients.
            </p>
          </div>
        </section>

        {/* Client Scenarios */}
        <section className="pt-8 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {clientScenarios.map((scenario, index) => {
                const Icon = scenario.icon;
                return (
                  <div key={scenario.title} className="bg-gray-50 rounded-xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-3 gap-12">
                      {/* Header */}
                      <div className="lg:col-span-3 text-center mb-8">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 ${scenario.color}`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                          {scenario.title}
                        </h2>
                        <p className="text-lg text-gray-600">{scenario.industry}</p>
                      </div>

                      {/* Challenge */}
                      <div className="bg-white rounded-lg p-6">
                        <h3 className="text-xl font-bold text-red-600 mb-4">The Challenge</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {scenario.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="bg-white rounded-lg p-6">
                        <h3 className="text-xl font-bold text-blue-600 mb-4">Our Solution</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {scenario.solution}
                        </p>
                      </div>

                      {/* Result */}
                      <div className="bg-white rounded-lg p-6">
                        <h3 className="text-xl font-bold text-green-600 mb-4">The Result</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {scenario.result}
                        </p>
                        <div className="mt-4 flex items-center text-green-600">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          <span className="font-medium">Measurable Success</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 gradient-primary-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Create Your Own Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how fractional CISO leadership can transform your security posture and deliver measurable business results.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 px-8 py-3">
                Schedule a Strategic Security Consultation
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}