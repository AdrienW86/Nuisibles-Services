export const metadata = {
  title: 'Politique de confidentialité - Nuisibles Services',
  description: 'Politique de confidentialité du site Nuisibles Services, entreprise de traitement anti-nuisibles à Perpignan.',
}

export default function PolitiqueConfidentialite() {
  return (
    // pt-28 : laisse un espace généreux sous le Header fixe pour les pages purement textuelles
    <main className="w-full min-h-screen bg-gray-50 pt-28 pb-16 px-4 md:px-8 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        
        {/* TITRE PRINCIPAL */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-b-4 border-red-600 pb-3 uppercase tracking-tight">
          Politique de confidentialité
        </h1>

        {/* SECTION 1 */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Collecte des données personnelles
        </h2>
        <p className="text-base leading-relaxed text-gray-600 mb-4">
          Nous collectons des informations personnelles via :
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><span className="font-semibold text-gray-800">Formulaires de contact :</span> nom, prénom, email, téléphone</li>
          <li><span className="font-semibold text-gray-800">Inscription à la newsletter :</span> email</li>
        </ul>

        {/* SECTION 2 */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Utilisation des données
        </h2>
        <p className="text-base leading-relaxed text-gray-600 mb-4">
          Les informations collectées sont utilisées exclusivement pour :
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>Répondre aux demandes des utilisateurs</li>
          <li>Envoyer des newsletters si le consentement a été donné</li>
        </ul>

        {/* SECTION 3 */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Durée de conservation
        </h2>
        <p className="text-base leading-relaxed text-gray-600 mb-6">
          Les données sont conservées pendant une durée de <span className="font-semibold text-gray-800">2 ans</span> à compter du dernier contact.
        </p>

        {/* SECTION 4 */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Droits des utilisateurs
        </h2>
        <p className="text-base leading-relaxed text-gray-600 mb-4">
          Conformément au règlement général sur la protection des données (RGPD), vous pouvez exercer vos droits d'accès, de rectification et de suppression :
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>
            <span className="font-semibold text-gray-800">Par email :</span>{' '}
            <a href="mailto:contact@service-nuisibles.fr" className="text-red-600 hover:text-red-700 font-medium underline transition-colors">
              contact@service-nuisibles.fr
            </a>
          </li>
          <li><span className="font-semibold text-gray-800">Par courrier :</span> 88 chemin des charettes, 66000 Perpignan, France</li>
        </ul>

        {/* SECTION 5 */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Cookies
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          Nous utilisons des cookies essentiels, de performance et de publicité ciblée. Vous pouvez gérer votre consentement via l'outil prévu à cet effet sur le site. Pour plus d'informations, vous pouvez consulter le site de la{' '}
          <a 
            href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-red-600 hover:text-red-700 font-medium underline transition-colors"
          >
            CNIL – Cookies
          </a>.
        </p>

      </div>
    </main>
  )
}