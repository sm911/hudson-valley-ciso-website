import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Education() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* What is a CISO? */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What is a CISO?</h3>
            <p className="text-gray-600 mb-6">
              A Chief Information Security Officer (CISO) sets security priorities, owns risk decisions, and translates technical security into business language. They're the executive who ensures your security investments align with business goals.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Sets security strategy and priorities</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Owns risk assessment and decisions</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Speaks security in business terms</span>
              </div>
            </div>
          </div>

          {/* What is a Fractional CISO? */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">What is a Fractional CISO?</h3>
            <p className="text-gray-600 mb-6">
              A Fractional CISO provides part-time executive security leadership at a right-sized cost. Perfect for SMBs who need senior guidance but don't need a full-time security executive.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Part-time executive leadership</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Coordinates with your MSP/vendors</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Focuses on outcomes, not tools</span>
              </div>
            </div>
          </div>

          {/* Role Comparison */}
          <div className="bg-primary-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MSP vs vCISO vs Fractional CISO</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">MSP (IT Support)</h4>
                <p className="text-sm text-gray-600">Manages your technology day-to-day</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">vCISO (Virtual CISO)</h4>
                <p className="text-sm text-gray-600">Provides security guidance remotely</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-700">Fractional CISO</h4>
                <p className="text-sm text-gray-700 font-medium">Executive-level leadership with hands-on involvement</p>
              </div>
            </div>
            <Link href="/resources/fractional-vs-msp-vciso" className="inline-flex items-center mt-6 text-primary-600 hover:text-primary-700 font-medium">
              See detailed comparison <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
