import Menu from '@/components/Menu/Menu';

export const metadata = {
  title: "Désinsectisation à Perpignan - Traitement insectes nuisibles - Nuisibles Services",
  description: "Nuisibles Services vous débarrasse des insectes nuisibles à Perpignan et dans tout le 66. Intervention rapide, traitements efficaces et respectueux de l’environnement.",
};

const desinsectisationContent = {
  title: "Désinsectisation : traitement des insectes nuisibles",
  intro: "Nuisibles Services intervient à Perpignan et dans les Pyrénées-Orientales pour éliminer tous types d’insectes nuisibles : cafards, fourmis, puces, punaises de lit, blattes, mouches, moustiques et autres parasites.",
  sections: [
    {
      title: "1. Diagnostic et identification de l’infestation",
      content: "Nos techniciens identifient précisément les espèces présentes, leur niveau de prolifération, et les zones critiques à traiter.",
    },
    {
      title: "2. Choix du traitement adapté",
      content: "Selon l’insecte ciblé, nous utilisons des traitements insecticides professionnels : gels, poudres, nébulisation ou pulvérisation, adaptés à votre environnement (logement, restaurant, local professionnel...).",
    },
    {
      title: "3. Intervention et sécurité",
      list: [
        "Mise en sécurité des personnes, animaux et denrées alimentaires.",
        "Traitement discret et rapide.",
        "Utilisation de produits efficaces et agréés.",
        "Respect strict des normes sanitaires et environnementales."
      ],
      content: "L’intervention est planifiée pour perturber le moins possible votre quotidien tout en assurant une efficacité maximale.",
    },
    {
      title: "4. Suivi post-traitement et conseils",
      content: "Nous assurons un suivi si nécessaire et vous apportons des conseils pratiques pour éviter une nouvelle infestation (nettoyage, colmatage, gestion des déchets...).",
    },
    {
      title: "5. Zones d’intervention",
      content: "Nous intervenons à Perpignan, Canet-en-Roussillon, Le Soler, Saint-Laurent-de-la-Salanque, et partout dans les Pyrénées-Orientales.",
    }
  ],
  conclusion: "Pour une désinsectisation rapide et efficace dans le 66, faites appel à Radikal 3D. Nos traitements vous garantissent un environnement sain et protégé durablement."
};

export default function Page() {
  return (
    // min-h-screen : empêche le footer de flotter au milieu si le contenu est court
    // pt-20 : évite que le haut de la Banner soit masqué par ton Header fixe
    <main className="w-full min-h-screen bg-white pt-20 overflow-x-hidden">
      <Menu {...desinsectisationContent} backgroundImage="/desinsectisation.png" />
    </main>
  );
}