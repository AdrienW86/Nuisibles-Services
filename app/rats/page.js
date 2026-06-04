import Menu from '@/components/Menu/Menu';

export const metadata = {
  title: "Dératisation à Perpignan - Nuisibles Services",
  description: "Nuisibles Services à Perpignan vous propose un traitement efficace contre les rats et souris. Diagnostic précis, intervention rapide et solutions durables.",
};

const deratisationContent = {
  title: "Dératisation professionnelle",
  intro: "Nuisibles Services intervient rapidement à Perpignan et ses alentours pour éliminer les rats, souris et autres rongeurs nuisibles. Nous proposons un traitement efficace et durable, adapté aux habitations, locaux commerciaux ou industriels.",
  sections: [
    {
      title: "1. Inspection et identification des rongeurs",
      content: "Nous effectuons un diagnostic complet pour détecter la présence de rats, souris ou mulots. Grâce à une analyse précise de votre environnement, nous identifions les sources d’infestation et les points d’entrée pour mettre en place une stratégie sur mesure.",
    },
    {
      title: "2. Mise en sécurité des lieux",
      content: "Avant le traitement, nous sécurisons les zones sensibles (enfants, animaux domestiques) et préparons l’environnement pour garantir une dératisation efficace et sans danger. Cette étape inclut également des conseils personnalisés sur les bonnes pratiques d’hygiène et de prévention.",
    },
    {
      title: "3. Traitement contre les rats et souris",
      list: [
        "Pose de pièges mécaniques et appâts rodenticides certifiés.",
        "Traitement adapté selon le type de rongeur (rats noirs, surmulots, souris).",
        "Utilisation de produits professionnels conformes aux normes sanitaires.",
        "Solutions préventives pour éviter la récidive (grillages, colmatage des accès)."
      ],
      content: "Nos techniciens agréés appliquent un protocole rigoureux pour éradiquer efficacement les rongeurs présents dans vos locaux.",
    },
    {
      title: "4. Suivi post-intervention et prévention",
      content: "Une fois le traitement réalisé, nous assurons un suivi vu régulier pour vérifier l’efficacité de l’intervention. Nous vous conseillons également sur les solutions durables à mettre en place : stockage sécurisé des déchets, contrôle de l’humidité, et maintenance préventive.",
    },
    {
      title: "5. Intervention rapide à Perpignan (66)",
      content: "Notre équipe intervient dans un délai très court sur Perpignan, Saleilles, Canet-en-Roussillon, Saint-Estève et les communes voisines. Disponibles 7j/7, nous assurons un service réactif, professionnel et confidentiel.",
    }
  ],
  conclusion: "Faites confiance à Nuisibles Services pour un traitement anti-rongeurs efficace à Perpignan. Éradication rapide, protection durable et conseils personnalisés pour votre sécurité et votre tranquillité."
};

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white pt-20 overflow-x-hidden">
      <Menu {...deratisationContent} backgroundImage="/deratisation.png" />
    </main>
  );
}