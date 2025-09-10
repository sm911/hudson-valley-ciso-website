import { Link } from "wouter";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustBar } from "@/components/ui/trust-bar";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hudson Valley CISO</h3>
            <p className="text-gray-400 mb-4">
              Fractional CISO services for Hudson Valley SMBs. Board-level security leadership right-sized to your budget.
            </p>
            <div className="flex flex-wrap gap-2">
              <TrustBar variant="footer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/fractional-ciso" className="hover:text-white transition-colors">
                  Fractional CISO Leadership
                </Link>
              </li>
              <li>
                <Link href="/services/assessment" className="hover:text-white transition-colors">
                  Program Assessment
                </Link>
              </li>
              <li>
                <Link href="/services/cyber-insurance" className="hover:text-white transition-colors">
                  Cyber Insurance Readiness
                </Link>
              </li>
              <li>
                <Link href="/services/compliance" className="hover:text-white transition-colors">
                  Compliance Enablement
                </Link>
              </li>
              <li>
                <Link href="/services/incident-response" className="hover:text-white transition-colors">
                  Incident Response
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/resources/what-is-ciso" className="hover:text-white transition-colors">
                  What is a CISO?
                </Link>
              </li>
              <li>
                <Link href="/resources/fractional-vs-msp-vciso" className="hover:text-white transition-colors">
                  Service Comparisons
                </Link>
              </li>
              <li>
                <Link href="/resources/security-program-basics" className="hover:text-white transition-colors">
                  Security Basics
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Free Starter Kit
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{SITE_CONFIG.contact.email}</li>
              <li>{SITE_CONFIG.contact.phone}</li>
              <li>Hudson Valley, NY</li>
            </ul>
            <a 
              href={SITE_CONFIG.calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4"
            >
              <Button className="!bg-white hover:!bg-gray-50 !text-black !border-2 !border-black">
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </a>
          </div>
        </div>
        
        {/* Trust Badges Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="font-semibold mb-4 text-gray-300">Trust Badges - Compliance Frameworks We Support</h4>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">NIST</span>
                </div>
                <span className="text-gray-400 text-xs">Cybersecurity Framework</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">ISO</span>
                </div>
                <span className="text-gray-400 text-xs">27001</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">HIPAA</span>
                </div>
                <span className="text-gray-400 text-xs">Healthcare Compliance</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">SOC</span>
                </div>
                <span className="text-gray-400 text-xs">Type 2</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; 2024 Hudson Valley CISO. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
