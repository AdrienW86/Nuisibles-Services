import Menu from "@/components/Menu";

export const metadata = {
  title: "Désinsectisation & Anti-Cafards à Perpignan | Nuisibles Services",
  description: "Désinsectisation rapide et garantie contre les cafards, blattes et insectes à Perpignan. Intervention professionnelle en 24h. Devis gratuit au 04 XX XX XX XX.",
  openGraph: {
    title: "Désinsectisation & Traitement Anti-Cafards à Perpignan",
    description: "Éradication durable des cafards et blattes pour particuliers et professionnels à Perpignan et alentours.",
    images: ['/cafards.jpg'],
  },
};

const cafardsContent = {
  title: "Élimination des cafards et blattes à Perpignan",
  intro: "Nuisibles Services propose un service efficace de désinsectisation pour éradiquer cafards, blattes et autres insectes rampants à Perpignan. Protégez votre maison ou votre commerce rapidement avec nos solutions professionnelles.",
  sections: [
    {
      title: "1. Diagnostic d’infestation de cafards",
      content: "Nous identifions précisément les zones infestées et le type de cafards présents afin d’adapter le traitement à la situation spécifique de votre habitat ou local professionnel.",
    },
    {
      title: "2. Préparation et sécurisation",
      content: "Nous sécurisons les lieux, protégeons les aliments et informons sur les consignes à respecter pour une intervention sans risque et optimale.",
    },
    {
      title: "3. Traitement anti-cafards efficace",
      list: [
        "Application de gels insecticides professionnels à effet domino.",
        "Traitement ciblé des zones sombres et humides (fissures, plinthes, canalisations).",
        "Utilisation de produits homologués CERTIBIOCIDE respectueux de votre environnement.",
        "Techniques ciblées pour stopper la reproduction et éviter toute réinfestation."
      ],
      content: "Nos interventions garantissent une élimination rapide et durable des cafards et blattes, insectes vecteurs de germes et de bactéries.",
    },
    {
      title: "4. Conseils de prévention et suivi",
      content: "Nous vous accompagnons pour mettre en place des mesures d’hygiène et d'étanchéité adaptées afin d'éviter toute nouvelle intrusion.",
    },
    {
      title: "5. Intervention rapide sur Perpignan et sa région",
      content: "Déplacement en urgence sur Perpignan, Bompas, Cabestany, Canet-en-Roussillon et l'ensemble des Pyrénées-Orientales.",
    }
  ],
  conclusion: "Pour un logement ou un commerce sain et totalement libéré des cafards, faites confiance à Nuisibles Services, votre expert local à Perpignan."
};

// Données structurées pour le SEO local Google (Schema.org)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nuisibles Services",
  "image": "https://www.nuisibles-services.fr/cafards.jpg",
  "description": "Entreprise de désinsectisation et traitement anti-cafards à Perpignan.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Perpignan",
    "postalCode": "66000",
    "addressCountry": "FR"
  },
  "areaServed": ["Perpignan", "Bompas", "Cabestany", "Canet-en-Roussillon"]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full min-h-screen bg-white overflow-x-hidden">
        <Menu {...cafardsContent} backgroundImage="/cafards.jpg" />
      </main>
    </>
  );
}