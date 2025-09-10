import { SCENARIOS } from "@/lib/constants";

const getIconByName = (iconName: string) => {
  const iconMap: { [key: string]: string } = {
    hospital: "🏥",
    industry: "🏭",
    cloud: "☁️"
  };
  return iconMap[iconName] || "🏢";
};

const getColorClass = (color: string) => {
  const colorMap: { [key: string]: string } = {
    blue: "text-blue-500",
    orange: "text-orange-500", 
    purple: "text-purple-500"
  };
  return colorMap[color] || "text-gray-500";
};

export function Scenarios() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Scenarios We Help With</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We serve all SMB industries in the Hudson Valley. Here are some situations where fractional CISO leadership makes the difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {SCENARIOS.map((scenario) => (
            <div key={scenario.title} className="bg-white rounded-xl p-8 shadow-sm">
              <div className={`text-3xl mb-4 ${getColorClass(scenario.color)}`}>
                {getIconByName(scenario.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{scenario.title}</h3>
              <p className="text-gray-600 mb-6">{scenario.description}</p>
              <div className="text-sm text-success-600 font-medium">
                → Outcome: {scenario.outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
