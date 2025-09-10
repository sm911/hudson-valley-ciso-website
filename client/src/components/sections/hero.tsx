import { ArrowDown, Calendar } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { TrustBar } from "@/components/ui/trust-bar";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative gradient-primary-subtle overflow-hidden">
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="w-full h-full"
        />
      </div>
      
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <div className="w-full h-full bg-gradient-to-bl from-primary-600 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fractional CISO for<br />
            <span className="text-primary-600">Hudson Valley SMBs</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Board-level security leadership—right-sized to your budget and goals.
            We provide comprehensive security strategies and hands-on guidance, tailored to protect your business without breaking the bank.
          </p>
          
          {/* Trust Bar */}
          <div className="flex justify-center items-center mb-12">
            <TrustBar />
            <Link href="/about" className="ml-4 text-primary-600 hover:text-primary-700 underline">
              See full credentials
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={SITE_CONFIG.calendarLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="!bg-white hover:!bg-gray-50 !text-black !border-2 !border-black shadow-elegant-lg hover:shadow-elegant-xl transition-all duration-300 transform hover:-translate-y-0.5">
                <Calendar className="w-5 h-5 mr-3" />
                Schedule a Strategic Security Consultation
              </Button>
            </a>
            <Link href="/services">
              <Button variant="outline" size="lg" className="border-elegant border-elegant-hover !border-2 !border-primary-600 !text-primary-600 hover:!bg-primary-50 hover:!text-primary-700 shadow-elegant transition-all duration-300">
                Learn What a Fractional CISO Does
                <ArrowDown className="w-5 h-5 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
