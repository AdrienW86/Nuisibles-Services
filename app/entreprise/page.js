import About from '@/components/About/About';

export const metadata = {
  title: "L'entreprise - Nuisibles Services",
  description: "Découvrez Nuisibles Services, votre expert en lutte raisonnée et traitement contre tous types de nuisibles à Perpignan et dans les Pyrénées-Orientales.",
};

export default function Page() {
  return (
    // pt-20 : évite que le haut de la Banner soit masqué par ton Header fixe
    // min-h-screen : empêche le footer de flotter au milieu si le contenu est court
    <main className="w-full min-h-screen bg-white pt-20 overflow-x-hidden">
      <About />     
    </main>
  );
}