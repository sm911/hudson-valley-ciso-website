import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { StarterKitForm } from "@/components/forms/starter-kit-form";
import { generateMetaTags } from "@/lib/seo";

const articles = [
  {
    title: "What is a CISO? (SMB Version)",
    description: "Understanding the role and why SMBs need security leadership without the full-time cost.",
    href: "/resources/what-is-ciso"
  },
  {
    title: "Fractional CISO vs MSP vs vCISO",
    description: "Clear comparison of different security service models and when to use each.",
    href: "/resources/fractional-vs-msp-vciso"
  },
  {
    title: "Cyber Insurance Readiness",
    description: "What SMBs need to know to get coverage and pass those questionnaires.",
    href: "/resources/cyber-insurance-readiness"
  },
  {
    title: "First 90 Days with a Fractional CISO",
    description: "Detailed timeline of what to expect in your first three months.",
    href: "/resources/first-90-days"
  },
  {
    title: "Security Program Basics for SMBs",
    description: "Practical guide to building security into your business operations.",
    href: "/resources/security-program-basics"
  }
];

export default function Resources() {
  return (
    <>
      {generateMetaTags({
        title: "Insights & Resources | Hudson Valley CISO",
        description: "Expert cybersecurity insights and resources for Hudson Valley SMBs. Practical guides and lead magnets to solve your security challenges.",
      })}
      
      <div className="min-h-screen bg-white">
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Problem-centric content that addresses the real anxieties and challenges facing C-suite executives. Get practical solutions, not product pitches.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {articles.map((article) => (
                <Link key={article.title} href={article.href}>
                  <article className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-medium">
                      Read Article <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </article>
                </Link>
              ))}
              

            </div>
            
            {/* Starter Kit Download */}
            <div className="max-w-4xl mx-auto">
              <StarterKitForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
