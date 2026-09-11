'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Dictionnaire de traduction des slugs vers un libellé lisible & optimisé SEO
const routeLabels = {
  'entreprise': 'L\'entreprise',
  'contact': 'Demander un Devis',
  'pictures': 'Réalisations & Photos',
  'blog': 'Blog & Conseils',
  'reseaux-sociaux': 'Réseaux Sociaux',
  'plan-du-site': 'Plan du site',
  'mentions-legales': 'Mentions Légales',
  'politique-de-confidentialite': 'Confidentialité',
  'cgv': 'CGV',
  // Services
  'rats': 'Dératisation',
  'desinsectisation': 'Désinsectisation',
  'puces': 'Punaises & Puces',
  'frelons': 'Guêpes & Frelons',
  'cafards': 'Cafards & Blattes',
  'termites': 'Termites & Bois',
  'pigeons': 'Dépigeonnage',
  'desinfection': 'Désinfection',
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Ne pas afficher sur la page d'accueil
  if (!pathname || pathname === '/') return null;

  // Découpage du path
  const segments = pathname.split('/').filter(Boolean);

  // Construction des éléments du fil d'Ariane
  const breadcrumbItems = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    
    let label = routeLabels[segment];
    if (!label) {
      label = segment
        .replace(/-/g, ' ')
        .replace(/^\w/, (c) => c.toUpperCase());
    }

    return { label, href };
  });

  // Schema.org pour Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://nuisibles-services.fr',
      },
      ...breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `https://nuisibles-services.fr${item.href}`,
      })),
    ],
  };

  return (
    <>
      {/* Microdonnées pour Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Rendu visuel */}
      <nav 
        aria-label="Breadcrumb" 
        className="w-full bg-gray-900/60 border-b border-gray-800/80 pt-24 pb-3 px-4 sm:px-6 font-sans text-xs"
      >
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-gray-400 overflow-x-auto whitespace-nowrap scrollbar-none">
          
          <Link 
            href="/" 
            className="hover:text-red-500 transition-colors flex items-center gap-1.5 font-medium group"
          >
            <svg 
              className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-500 transition-colors" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Accueil</span>
          </Link>

          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <div key={item.href} className="flex items-center space-x-2">
                <span className="text-gray-600 font-bold">/</span>
                {isLast ? (
                  <span className="text-red-500 font-semibold truncate max-w-[200px] sm:max-w-xs">
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href} 
                    className="hover:text-red-500 transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}