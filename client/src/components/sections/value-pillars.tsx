import { Shield, BarChart3, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: CheckCircle,
    title: "Achieve Proactive Compliance",
    description: "Satisfy regulatory requirements from NYDFS to HIPAA and ISO 27001 with a structured, automated program that reduces risk and streamlines audits.",
    color: "bg-green-600"
  },
  {
    icon: BarChart3,
    title: "Gain Board-Level Visibility",
    description: "Transform technical security data into board-ready reports and dashboards that clearly track progress and prove the return on your security investment.",
    color: "bg-blue-600"
  },
  {
    icon: Shield,
    title: "Eliminate Overwhelm",
    description: "Leverage a unified platform to manage all aspects of your security program, freeing up your team to focus on strategic initiatives rather than manual processes.",
    color: "bg-purple-600"
  }
];

export function ValuePillars() {
  return (
    <section id="learn-more" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What You Get: Clear Outcomes, Not Tool Talk
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            We focus on business results that matter to SMB leaders—passing audits, reducing risk, and making security decisions with confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-2 border-elegant">
                <div className={`w-20 h-20 ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elegant`}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-lg">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
