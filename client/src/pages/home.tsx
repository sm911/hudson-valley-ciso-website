import { Hero } from "@/components/sections/hero";
import { ValuePillars } from "@/components/sections/value-pillars";
import { Education } from "@/components/sections/education";
import { ServiceTiers } from "@/components/sections/service-tiers";
import { Timeline } from "@/components/sections/timeline";
import { Scenarios } from "@/components/sections/scenarios";
import { generateMetaTags, generateStructuredData } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export default function Home() {
  const structuredData = generateStructuredData("LocalBusiness", {});

  return (
    <>
      {generateMetaTags({
        title: "Fractional CISO for Hudson Valley SMBs | Hudson Valley CISO",
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.url,
      })}
      
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen">
        <Hero />
        <ValuePillars />
        <Education />
        <ServiceTiers />
        <Timeline />
        <Scenarios />
      </div>
    </>
  );
}
