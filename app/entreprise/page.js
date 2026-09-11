import About from '@/components/About';

export const metadata = {
  title: "L'entreprise - Nuisibles Services",
  description: "Découvrez Nuisibles Services, votre expert en lutte raisonnée et traitement contre tous types de nuisibles à Perpignan et dans les Pyrénées-Orientales.",
};

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden">
      <About />     
    </main>
  );
}