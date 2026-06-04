import Map from '@/components/Map/Map';
import Form from '@/components/Form/Form';

export const metadata = {
  title: "Nous contacter - Nuisibles Services",
  description: "Contactez Nuisibles Services pour un devis gratuit ou une intervention d'urgence anti-nuisibles à Perpignan et dans toutes les Pyrénées-Orientales.",
};

export default function Contact() {
  return (
    // pt-28 : donne de l'espace pour que le titre h1 commence bien sous le Header fixe
    // bg-gray-50 : optionnel, apporte un fond légèrement grisé très propre pour faire ressortir les blocs blancs
    <main className="w-full min-h-screen bg-gray-50 pt-28 pb-16 px-4 md:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* TITRE PRINCIPAL DE LA PAGE */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 border-b-4 border-red-600 pb-3 uppercase tracking-tight inline-block">
          Nous contacter
        </h1>    

        {/* CONTENEUR POUR TES COMPOSANTS MAP ET FORM */}
        {/* En fonction du design actuel de tes composants <Map /> et <Form />, tu peux les laisser l'un sous l'autre (space-y-12) ou utiliser une grille en "grid grid-cols-1 lg:grid-cols-2 gap-8" si tu veux les afficher côte à côte sur grand écran */}
        <div className="space-y-12">
          <Map />
          <Form />
        </div>

      </div>
    </main>
  );
}