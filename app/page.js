import Banner from '@/components/Banner/Banner'
import Equipment from '@/components/Equipment/Equipment'
import Services from '@/components/Services/Services'
import Description from '@/components/Description/Description'

export const metadata = {
  title: "Nuisibles Services - Expert en extermination de nuisibles à Perpignan",
  description: "Nuisibles Services, spécialiste de l'extermination de termites, nids de guêpes/frelons, punaises de lit et autres nuisibles à Perpignan et dans les Pyrénées-Orientales.",
}

export default function Home() {
  return (
    // min-h-screen : force la page à prendre toute la hauteur de l'écran
    // pt-20 : ajoute un espace en haut pour laisser la place au Header fixe (h-20) sans qu'il ne cache la bannière
    // bg-gray-50 : donne un fond gris très clair, propre et moderne, pour toute la page
    <main className="min-h-screen pt-20 bg-gray-50 flex flex-col">
      
      {/* Section 1 : La bannière principale (Hero Section) */}
      <Banner />
      
      {/* Section 2 : Notre matériel / Équipement professionnel */}
      <Equipment />
      
      {/* Section 3 : Nos différents services (Dératisation, Désinsectisation...) */}
      <Services />
      
      {/* Section 4 : Texte descriptif complet, histoire et SEO */}
      <Description />    
      
    </main>
  )
}