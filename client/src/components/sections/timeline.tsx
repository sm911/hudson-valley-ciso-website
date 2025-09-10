import { CheckCircle } from "lucide-react";
import { TIMELINE_PHASES } from "@/lib/constants";

export function Timeline() {
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your First 90 Days</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clear expectations from day one. Here's exactly what happens in your first three months.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TIMELINE_PHASES.map((phase) => (
            <div key={phase.phase} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {phase.phase}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{phase.weeks}</h3>
                  <p className="text-gray-600">{phase.title}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {phase.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-3">What You Get Each Month:</h4>
            <p className="text-gray-700">
              1-page executive summary, top 3 priorities with clear owners and due dates, risk trend analysis, and next month's focus areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
