import Gallery from '@/components/Gallery/Gallery';

export const metadata = {
  title: "Nos interventions en images - Radikal 3D",
  description: "Découvrez en photos les interventions de Radikal 3D à Perpignan : destruction de nids de frelons, dépigeonnage, dératisation et désinsectisation.",
};

export default function Pictures() {
  return (
    // pt-28 : laisse l'espace nécessaire sous le Header fixe
    // max-w-7xl : aligne proprement le contenu de la galerie avec le reste du site
    <main className="w-full min-h-screen bg-white pt-28 pb-16 px-4 md:px-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* TITRE PRINCIPAL DE LA PAGE */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-10 border-b-4 border-red-600 pb-3 uppercase tracking-tight inline-block">
          Galerie de photos
        </h1>

        {/* COMPOSANT GALERIE */}
        <Gallery /> 
        
      </div>
    </main>
  );
}