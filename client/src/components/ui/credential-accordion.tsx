import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { CREDENTIALS } from "@/lib/constants";

export function CredentialAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <button 
        className="w-full text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900">View Full Credentials</span>
        <ChevronDown 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="mt-6 space-y-6">
          {Object.entries(CREDENTIALS).map(([key, category]) => (
            <div key={key}>
              <h4 className="font-semibold text-gray-900 mb-2">
                {category.title}
              </h4>
              <p className="text-sm text-gray-600">
                {category.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}
      
      <p className="text-xs text-gray-500 mt-4">
        We highlight a few key credentials here—see the full list if you're curious. 
        Most SMBs care more about outcomes, so that's our focus.
      </p>
    </div>
  );
}
