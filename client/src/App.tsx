import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import CaseStudies from "@/pages/case-studies";
import Contact from "@/pages/contact";
import FAQ from "@/pages/faq";
import Resources from "@/pages/resources";
import Privacy from "@/pages/privacy";
import NotFound from "@/pages/not-found";

// Service pages
import FractionalCISO from "@/pages/services/fractional-ciso";
import Assessment from "@/pages/services/assessment";
import CyberInsurance from "@/pages/services/cyber-insurance";
import Compliance from "@/pages/services/compliance";
import VendorRisk from "@/pages/services/vendor-risk";
import SecurityAwareness from "@/pages/services/security-awareness";
import IncidentResponse from "@/pages/services/incident-response";
import PolicyDevelopment from "@/pages/services/policy-development";

// Resource pages
import WhatIsCISO from "@/pages/resources/what-is-ciso";
import FractionalVsMSPvCISO from "@/pages/resources/fractional-vs-msp-vciso";
import CyberInsuranceReadiness from "@/pages/resources/cyber-insurance-readiness";
import First90Days from "@/pages/resources/first-90-days";
import SecurityProgramBasics from "@/pages/resources/security-program-basics";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/our-approach" component={CaseStudies} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/resources" component={Resources} />
      <Route path="/privacy" component={Privacy} />
      
      {/* Service detail pages */}
      <Route path="/services/fractional-ciso" component={FractionalCISO} />
      <Route path="/services/assessment" component={Assessment} />
      <Route path="/services/cyber-insurance" component={CyberInsurance} />
      <Route path="/services/compliance" component={Compliance} />
      <Route path="/services/vendor-risk" component={VendorRisk} />
      <Route path="/services/security-awareness" component={SecurityAwareness} />
      <Route path="/services/incident-response" component={IncidentResponse} />
      <Route path="/services/policy-development" component={PolicyDevelopment} />
      
      {/* Resource pages */}
      <Route path="/resources/what-is-ciso" component={WhatIsCISO} />
      <Route path="/resources/fractional-vs-msp-vciso" component={FractionalVsMSPvCISO} />
      <Route path="/resources/cyber-insurance-readiness" component={CyberInsuranceReadiness} />
      <Route path="/resources/first-90-days" component={First90Days} />
      <Route path="/resources/security-program-basics" component={SecurityProgramBasics} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
