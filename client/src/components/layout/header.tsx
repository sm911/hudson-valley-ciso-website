import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Our Approach", href: "/our-approach" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 glass-effect border-b border-gray-200/50 z-50 shadow-elegant">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <h1 className="text-xl font-bold text-primary-700 cursor-pointer">
                  Hudson Valley CISO
                </h1>
              </Link>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary-600"
                        : "text-gray-600 hover:text-primary-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden sm:inline-flex">
              <Button variant="outline" size="sm" className="border-elegant border-elegant-hover !border-primary-600 !text-primary-600 hover:!bg-primary-50 hover:!text-primary-700 transition-all duration-200">
                Request Quote
              </Button>
            </Link>
            <a 
              href={SITE_CONFIG.calendarLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="!bg-white hover:!bg-gray-50 !text-black !border-2 !border-black shadow-elegant hover:shadow-elegant-lg transition-all duration-200">
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Button>
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-primary-600"
                      : "text-gray-600 hover:text-primary-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4">
                <Link href="/contact" className="block mb-2" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Request Quote
                  </Button>
                </Link>
                <a 
                  href={SITE_CONFIG.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="sm" className="w-full bg-primary-600 hover:bg-primary-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
