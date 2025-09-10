import { FAQAccordion } from "@/components/ui/faq-accordion";
import { generateMetaTags, generateStructuredData } from "@/lib/seo";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const structuredData = generateStructuredData("FAQPage", {
    faqs: FAQS
  });

  return (
    <>
      {generateMetaTags({
        title: "Frequently Asked Questions | Hudson Valley CISO",
        description: "Common questions about fractional CISO services for Hudson Valley SMBs. Learn about our process, pricing, and how we work with your team.",
      })}
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-600">
                Common questions from SMB leaders considering fractional CISO services.
              </p>
            </div>
            
            <FAQAccordion faqs={FAQS} />
          </div>
        </section>
      </div>
    </>
  );
}
