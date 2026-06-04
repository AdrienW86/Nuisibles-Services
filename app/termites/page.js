import Menu from '@/components/Menu/Menu';

export const metadata = {
  title: "Traitement termites à Perpignan - Nuisibles Services",
  description: "Nuisibles Services traite efficacement les infestations de termites à Perpignan et alentours. Diagnostic précis, traitement certifié et prévention durable.",
};

const termitesContent = {
  title: "Traitement des termites",
  intro: "Chez Nuisibles Services, nous intervenons rapidement pour éliminer toute infestation de termites. Grâce à notre expertise, nous vous garantissons une solution efficace et durable pour protéger vos biens.",
  sections: [
    {
      title: "1. Diagnostic et identification des termites",
      content: "Nous procédons à une inspection complète de votre domicile ou de vos locaux pour identifier précisément la présence de termites et évaluer l'ampleur de l'infestation. Après analyse, un devis détaillé et adapté à votre situation vous est proposé.",
    },
    {
      title: "2. Préparation de l'intervention",
      content: "Avant l'intervention, nous préparons soigneusement les lieux en protégeant vos biens et en choisissant les méthodes d'extermination les plus adaptées pour traiter efficacement l'infestation de termites : traitement chimique, biologique ou mécanique.",
    },
    {
      title: "3. Traitement anti-termites",
      list: [
        "Éradication complète des termites dans les structures en bois, les fondations et autres zones touchées.",
        "Utilisation de produits professionnels certifiés et respectueux de l'environnement.",
        "Application ciblée de traitements liquides ou sous forme de pièges à termites.",
        "Traitement curatif et préventif pour assurer une protection à long terme."
      ],
      content: "Nos interventions sont réalisées de manière précise et rigoureuse afin de garantir l'élimination totale des termites et protéger vos structures."
    },
    {
      title: "4. Prévention et recommandations",
      content: "Après le traitement, nous vous fournissons des conseils pour éviter toute nouvelle infestation de termites, tels que la gestion de l'humidité, l'entretien régulier des structures en bois et le colmatage des accès.",
    },
    {
      title: "5. Contrôle et suivi post-intervention",
      content: "Nous réalisons un contrôle final pour vérifier l'efficacité du traitement et vous proposons des services de suivi périodiques pour garantir l'absence de nouvelles infestations.",
    }
  ],
  conclusion: "Avec Nuisibles Services, protégez vos bâtiments et vos biens contre les termites grâce à l'expertise d'une équipe professionnelle, réactive et toujours à votre service."
};

export default function Page() {
  return (
    // pt-20 : descend le contenu pour libérer de l'espace sous le Header fixe
    // min-h-screen : force la page à occuper toute la hauteur de l'écran pour caler le footer en bas
    <main className="w-full min-h-screen bg-white pt-20 overflow-x-hidden">
      <Menu {...termitesContent} backgroundImage="/termites.jpg" />
    </main>
  );
}