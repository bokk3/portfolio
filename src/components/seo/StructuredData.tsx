import Script from 'next/script';

interface StructuredDataProps {
  locale: string;
}

export function StructuredData({ locale }: StructuredDataProps) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Boris Truyens",
    "jobTitle": locale === 'nl' ? "Webontwikkelaar" : locale === 'fr' ? "Développeur Web" : "Web Developer",
    "description": locale === 'nl' 
      ? "Professionele webontwikkelaar gespecialiseerd in moderne web technologieën"
      : locale === 'fr'
      ? "Développeur web professionnel spécialisé dans les technologies web modernes"
      : "Professional web developer specialized in modern web technologies",
    "url": "https://truyens.pro",
    "image": "https://truyens.pro/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Leuven",
      "addressCountry": "BE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+32479124428",
      "contactType": "customer service",
      "email": "truyensboris@proton.me"
    },
    "sameAs": [
      "https://www.linkedin.com/in/boristruyens",
      "https://github.com/boristruyens"
    ],
    "knowsAbout": [
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "E-commerce",
      "Digital Solutions"
    ],
    "offers": {
      "@type": "Service",
      "name": locale === 'nl' ? "Webontwikkeling Diensten" : locale === 'fr' ? "Services de Développement Web" : "Web Development Services",
      "description": locale === 'nl'
        ? "Professionele webontwikkeling, e-commerce oplossingen en digitale transformatie"
        : locale === 'fr'
        ? "Développement web professionnel, solutions e-commerce et transformation numérique"
        : "Professional web development, e-commerce solutions and digital transformation"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Boris Truyens",
    "url": "https://truyens.pro",
    "description": locale === 'nl'
      ? "Portfolio en diensten van webontwikkelaar Boris Truyens"
      : locale === 'fr'
      ? "Portfolio et services du développeur web Boris Truyens"
      : "Portfolio and services of web developer Boris Truyens",
    "inLanguage": locale === 'nl' ? 'nl-BE' : locale === 'fr' ? 'fr-BE' : 'en-US',
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://truyens.pro/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}