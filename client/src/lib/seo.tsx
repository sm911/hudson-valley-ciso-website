interface SEOData {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
}

export function generateMetaTags({
  title,
  description,
  url = "https://hudsonvalleyciso.com",
  image = "https://hudsonvalleyciso.com/og-image.jpg",
  type = "website"
}: SEOData) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

export function generateStructuredData(type: "LocalBusiness" | "Service" | "FAQPage" | "Article", data: any) {
  const baseStructure = {
    "@context": "https://schema.org",
    "@type": type,
  };

  switch (type) {
    case "LocalBusiness":
      return {
        ...baseStructure,
        name: "Hudson Valley CISO",
        description: "Fractional CISO services for Hudson Valley SMBs",
        address: {
          "@type": "PostalAddress",
          addressRegion: "NY",
          addressLocality: "Hudson Valley"
        },
        serviceArea: "Hudson Valley, NY",
        services: ["Fractional CISO", "Cybersecurity Consulting", "Compliance Readiness"],
        telephone: "(555) 123-4567",
        email: "james@hudsonvalleyciso.com",
        url: "https://hudsonvalleyciso.com",
        ...data
      };

    case "Service":
      return {
        ...baseStructure,
        name: data.name,
        description: data.description,
        provider: {
          "@type": "LocalBusiness", 
          name: "Hudson Valley CISO"
        },
        serviceArea: "Hudson Valley, NY",
        ...data
      };

    case "FAQPage":
      return {
        ...baseStructure,
        mainEntity: data.faqs?.map((faq: any) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        })),
        ...data
      };

    case "Article":
      return {
        ...baseStructure,
        headline: data.title,
        description: data.description,
        author: {
          "@type": "Person",
          name: "James Venuto"
        },
        publisher: {
          "@type": "Organization",
          name: "Hudson Valley CISO"
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        ...data
      };

    default:
      return { ...baseStructure, ...data };
  }
}
