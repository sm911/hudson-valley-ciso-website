import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { generateMetaTags } from "@/lib/seo";
import { SERVICE_TIERS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <>
      {generateMetaTags({
        title: "Our Fractional CISO Service Packages | Hudson Valley CISO",
        description: "Three right-sized service packages for Hudson Valley SMBs. From strategic direction to comprehensive cybersecurity leadership.",
      })}
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-12 pb-8 gradient-primary-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Fractional CISO Service Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-0 font-light leading-relaxed">
              Choose the right level of security leadership for your business. Each package is designed to deliver clear outcomes that align with your goals and budget.
            </p>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="pt-8 pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {SERVICE_TIERS.map((tier, index) => (
                <div key={tier.name} className={`relative p-8 rounded-2xl border-2 ${tier.popular ? 'border-primary-600 bg-primary-50' : 'border-gray-200 bg-white'} shadow-lg hover:shadow-xl transition-all duration-300`}>
                  {tier.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white text-blue-600 px-6 py-3 rounded-full text-base font-bold border-2 border-blue-600 shadow-lg" style={{textDecoration: 'none', color: '#2563eb'}}>
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 font-medium">{tier.bestFor}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-lg">What's included:</h4>
                    <ul className="space-y-3">
                      {tier.inclusions.map((inclusion, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 gradient-primary-subtle">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Find Your Right-Sized Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
              Let's discuss which service package best fits your business goals and security needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="hover:opacity-90 px-8 py-3 shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-2 border-blue-600" style={{color: '#2563eb'}}>
                Find Your Right-Sized Solution
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
