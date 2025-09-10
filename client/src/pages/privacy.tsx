import { useEffect } from "react";
import { generateMetaTags } from "@/lib/seo";

export default function Privacy() {
  const metaTags = generateMetaTags({
    title: "Privacy Policy",
    description: "Hudson Valley CISO privacy policy explaining how we collect, use, and protect your personal information."
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {metaTags}
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Hudson Valley CISO is committed to protecting your privacy. This privacy policy explains how we collect, use, and protect your personal information.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information Collection</h2>
              <p className="text-gray-700 mb-4">We collect personal information from you when you:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Visit our website</li>
                <li>Fill out a contact form</li>
                <li>Subscribe to our services</li>
                <li>Communicate with us via email or phone</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The personal information we collect may include your name, email address, phone number, and any other details you provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Information</h2>
              <p className="text-gray-700 mb-4">The information we collect from you will be used solely and exclusively to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you regarding our services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Send you updates and promotional materials (only if you have opted in to receive such communications)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Protection</h2>
              <p className="text-gray-700">
                We implement a variety of security measures to maintain the safety of your personal information. All sensitive information is transmitted via secure technology and stored in our secure database.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Confidentiality</h2>
              <p className="text-gray-700">
                We do not share, sell, or trade your personal information with third parties. Your information will only be used to serve you as our client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-700">
                Our website may use cookies to enhance your user experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enable the site's systems to recognize your browser and capture and remember certain information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Links</h2>
              <p className="text-gray-700">
                Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Consent</h2>
              <p className="text-gray-700">
                By using our site and services, you consent to our website's privacy policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Our Privacy Policy</h2>
              <p className="text-gray-700">
                Hudson Valley CISO reserves the right to update or change our privacy policy at any time. We will notify you of any changes by posting the new privacy policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:support@hvciso.com" className="text-blue-600 hover:underline">
                  support@hvciso.com
                </a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}