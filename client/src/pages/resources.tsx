import { Link } from "wouter";
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { StarterKitForm } from "@/components/forms/starter-kit-form";
import { generateMetaTags } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

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
            
            {/* External Blog Resources */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
              <div className="text-center mb-8">
                <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Deep-Dive Technical Resources
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Explore advanced security topics and implementation strategies through our specialized technical blogs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <a 
                  href={SITE_CONFIG.blogs.cloudArchitecture}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Cloud Architecture Blog
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Enterprise cloud security patterns, zero-trust architectures, and modern infrastructure defense strategies
                  </p>
                  <div className="flex items-center text-primary-600 font-medium text-sm">
                    Visit Blog <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </a>
                
                <a 
                  href={SITE_CONFIG.blogs.dataSecurity}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Data Security Blog
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Data protection strategies, privacy compliance frameworks, and information governance best practices
                  </p>
                  <div className="flex items-center text-primary-600 font-medium text-sm">
                    Visit Blog <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </a>
              </div>
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
