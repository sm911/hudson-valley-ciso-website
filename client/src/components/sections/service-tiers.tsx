import { Link } from "wouter";
import { CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_TIERS, ADDONS } from "@/lib/constants";
import { SITE_CONFIG } from "@/lib/constants";

const getIconByName = (iconName: string) => {
  const iconMap: { [key: string]: string } = {
    fire: "🔥",
    users: "👥", 
    "clipboard-check": "✅",
    handshake: "🤝"
  };
  return iconMap[iconName] || "📋";
};

const getColorClass = (color: string) => {
  const colorMap: { [key: string]: string } = {
    red: "text-red-500",
    blue: "text-blue-500",
    green: "text-green-500", 
    purple: "text-purple-500"
  };
  return colorMap[color] || "text-gray-500";
};

export function ServiceTiers() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Tiers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right level of support for your business stage and security needs. All plans include our core protections and executive reporting.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {SERVICE_TIERS.map((tier, index) => (
            <div 
              key={tier.name}
              className={`bg-white rounded-xl p-8 relative ${
                tier.popular 
                  ? "border-2 border-primary-300 transform scale-105" 
                  : "border-2 border-gray-200 hover:border-primary-300"
              } transition-colors`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">Best for: {tier.bestFor}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">
                  {index === 0 ? "What's Included:" : `Everything in ${SERVICE_TIERS[index - 1].name}, plus:`}
                </h4>
                <ul className="space-y-3">
                  {tier.inclusions.map((inclusion, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-success-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-3">
                <Link href="/contact">
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    Request Tailored Quote
                  </Button>
                </Link>
                <a 
                  href={SITE_CONFIG.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full !border-2 !border-primary-600 !text-primary-600 hover:!bg-primary-50 hover:!text-primary-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Add-ons */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Available Add-Ons</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADDONS.map((addon) => (
              <div key={addon.name} className="text-center">
                <div className={`text-3xl mb-3 ${getColorClass(addon.color)}`}>
                  {getIconByName(addon.icon)}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{addon.name}</h4>
                <p className="text-sm text-gray-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
