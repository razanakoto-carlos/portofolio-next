import App from "../App";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, SOCIAL_LINKS } from "../lib/site";

// Données structurées (schema.org) : identifient le site et la personne pour Google
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: ["Carlos Razanakoto", "R.Carlos"],
      description: SITE_DESCRIPTION,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: `${SITE_URL}/`,
      name: SITE_TITLE,
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      alternateName: "Carlos Razanakoto",
      givenName: "Carlos",
      familyName: "Razanakoto",
      url: `${SITE_URL}/`,
      email: "mailto:razanakotocarlos24@gmail.com",
      jobTitle: "Développeur web FullStack JavaScript",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Antananarivo",
        addressCountry: "MG",
      },
      affiliation: { "@type": "EducationalOrganization", name: "IS-INFO" },
      knowsAbout: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "Prisma", "PHP", "Laravel", "PostgreSQL", "Docker"],
      sameAs: SOCIAL_LINKS,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <App />
    </>
  );
}
