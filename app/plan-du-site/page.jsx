import Link from 'next/link';

export const metadata = {
  title: 'Plan du site — Nuisibles Services Perpignan',
  description: 'Retrouvez la liste complète de nos pages, services de dératisation, désinsectisation et dépigeonnage dans les Pyrénées-Orientales (66).',
};

export default function PlanDuSite() {
  const sections = [
    {
      title: "Pages Principales",
      links: [
        { href: '/', label: 'Accueil' },
        { href: '/entreprise', label: "L'entreprise & Certification Certibiocide" },
        { href: '/pictures', label: 'Réalisations & Photos d\'interventions' },
        { href: '/contact', label: 'Contact & Demande de Devis gratuit' },
      ],
    },
    {
      title: "Nos Services Anti-Nuisibles (66)",
      links: [
        { href: '/rats', label: 'Dératisation — Extermination Rats & Souris' },
        { href: '/desinsectisation', label: 'Désinsectisation globale' },
        { href: '/puces', label: 'Traitement Punaises de lit & Puces' },
        { href: '/frelons', label: 'Destruction Nids de Guêpes & Frelons' },
        { href: '/cafards', label: 'Traitement Anti-Cafards & Blattes' },
        { href: '/termites', label: 'Traitement Termites & Insectes du bois' },
        { href: '/pigeons', label: 'Dépigeonnage & Protection Anti-Pigeons' },
        { href: '/desinfection', label: 'Désinfection, Virus & Assainissement' },
      ],
    },
    {
      title: "Informations Légales",
      isLegal: true,
      links: [
        { href: '/mentions-legales', label: 'Mentions Légales' },
        { href: '/politique-de-confidentialite', label: 'Politique de Confidentialité & RGPD' },
        { href: '/plan-du-site', label: 'Plan du site' },
      ],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-950 text-white font-sans pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="border-b border-gray-800 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-950/80 text-red-400 border border-red-800/60 mb-4">
            <span>Arborescence du site</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-700 uppercase tracking-tight text-slate-200 mb-3">
            Plan du <span className="text-red-500">Site</span>
          </h1>
          <p className="text-gray-400 text-xs sm:text-base max-w-2xl">
            Accédez facilement à l'ensemble des contenus, prestations d'extermination et informations juridiques de Nuisibles Services.
          </p>
        </div>

        {/* GRILLE DYNAMIQUE ET ADAPTATIVE (1 col mobile, 2 cols tablette, 3 cols PC) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sections.map((section, idx) => (
            <div 
              key={idx} 
              className={`bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between ${
                section.isLegal ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider text-white mb-6 border-l-4 border-red-600 pl-3">
                  {section.title}
                </h2>
                
                <ul className={`space-y-3.5 text-xs sm:text-sm ${
                  section.isLegal ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 space-y-0 sm:gap-y-3.5' : ''
                }`}>
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link 
                        href={link.href}
                        className="text-gray-300 hover:text-red-500 transition-colors flex items-center gap-2"
                      >
                        <span className="text-red-600 font-bold text-base">›</span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}