'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { href: '/rats', label: 'Dératisation (Rats & Souris)' },
    { href: '/desinsectisation', label: 'Désinsectisation globale' },
    { href: '/puces', label: 'Punaises de lit & Puces' },
    { href: '/frelons', label: 'Guêpes & Frelons asiatiques' },
    { href: '/cafards', label: 'Cafards & Blattes' },
    { href: '/termites', label: 'Termites & Insectes du bois' },
    { href: '/pigeons', label: 'Dépigeonnage & Protection' },
    { href: '/desinfection', label: 'Désinfection & Assainissement' },
  ];

  const mainLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/entreprise', label: "L'entreprise" },
    { href: '/pictures', label: 'Réalisations & Photos' },
    { href: '/contact', label: 'Demander un Devis' },
  ];

  const legalLinks = [
    { href: '/mentions-legales', label: 'Mentions Légales' },
    { href: '/politique-confidentialite', label: 'Confidentialité' },
    { href: '/cgv', label: 'Conditions de vente' },
    { href: '/plan-du-site', label: 'Plan du site' },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-400 font-sans border-t border-gray-800 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* GRILLE PRINCIPALE (4 COLONNES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* COLONNE 1 : ENTREPRISE & CERTIFICATIONS */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-lg font-black text-white uppercase tracking-tight">
                Nuisibles <span className="text-red-500">Services</span>
              </span>
              <span className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-none mt-1">
                Lutte Anti-Nuisibles 66
              </span>
            </Link>

            <p className="text-xs text-gray-400 leading-relaxed">
              Entreprise spécialisée dans la dératisation, désinsectisation et désinfection à Perpignan et sur tout le département des Pyrénées-Orientales (66).
            </p>

            {/* Badges de réassurance SEO */}
            <div className="pt-2 flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-semibold bg-gray-950 border border-gray-800 text-gray-300 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Agréé Certibiocide
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-semibold bg-gray-950 border border-gray-800 text-gray-300 w-fit">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Intervention 7j/7 — 24h/24
              </span>
            </div>
          </div>

          {/* COLONNE 2 : NOS SERVICES (SEO) */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              Nos Services
            </h3>
            <ul className="space-y-2.5 text-xs">
              {servicesLinks.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-red-500 text-[10px]">›</span>
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 : NAVIGATION & ACCÈS RAPIDE */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs mb-6">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 border-l-2 border-red-600 pl-2">
              Informations Légales
            </h3>
            <ul className="space-y-2 text-xs">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors text-gray-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 4 : CONTACT & ZONE D'INTERVENTION */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2">
              Urgence & Contact
            </h3>
            
            <div className="bg-gray-950 border border-gray-800 p-4 rounded-xl space-y-3">
              <div>
                <span className="block text-[10px] text-gray-500 font-bold uppercase">Téléphone direct</span>
                <a 
                  href="tel:+33762240168"
                  className="text-base font-black text-red-600 hover:text-red-500 transition-colors"
                >
                  07 62 24 01 68
                </a>
              </div>

              <div>
                <span className="block text-[10px] text-gray-500 font-bold uppercase">Zone d'intervention</span>
                <p className="text-xs font-medium text-gray-300">
                  Perpignan, Canet-en-Roussillon, Saint-Estève, Argelès-sur-Mer et tout le 66.
                </p>
              </div>

              <div>
                <span className="block text-[10px] text-gray-500 font-bold uppercase">Horaires</span>
                <p className="text-xs font-medium text-gray-300">
                  Service d'urgence disponible 7j/7
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* PIED DE PAGE : COPYRIGHT & CRÉDITS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <p>© {currentYear} Nuisibles Services. Tous droits réservés.</p>
          
          <a 
            href="https://code-v.fr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
          >
            <span>Réalisé par</span>
            <span className="font-bold text-gray-400 group-hover:text-red-500 transition-colors duration-200">
              Codev
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}