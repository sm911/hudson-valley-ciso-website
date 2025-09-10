import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
          <button 
            className="w-full text-left flex items-center justify-between"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold text-gray-900 pr-4">
              {faq.question}
            </h3>
            <ChevronDown 
              className={`transition-transform flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="mt-4 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
