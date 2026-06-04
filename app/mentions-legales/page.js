export const metadata = {
  title: 'Mentions légales - Nuisibles Services',
  description: 'Mentions légales du site Nuisibles Services, entreprise de traitement anti-nuisibles à Perpignan.',
}

export default function MentionsLegales() {
  return (
    // pt-28 : garantit que le texte démarre bien en dessous du Header fixe sur tous les écrans
    <main className="w-full min-h-screen bg-gray-50 pt-28 pb-16 px-4 md:px-8 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        
        {/* TITRE PRINCIPAL */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-b-4 border-red-600 pb-3 uppercase tracking-tight">
          Mentions légales
        </h1>
        
        {/* SECTION 1 : ÉDITEUR */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4 uppercase tracking-wide">
          Éditeur du site
        </h2>
        <div className="text-base leading-relaxed text-gray-600 space-y-2 bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <p><span className="font-semibold text-gray-800">Nom :</span> HOSPICE MICHEL</p>
          <p><span className="font-semibold text-gray-800">Forme juridique :</span> Auto-entrepreneur</p>
          <p><span className="font-semibold text-gray-800">Dénomination commerciale :</span> Nuisibles Services</p>
          <p><span className="font-semibold text-gray-800">Adresse :</span> 88 chemin des charettes, 66000 Perpignan, France</p>
          <p><span className="font-semibold text-gray-800">Téléphone :</span> +33 7 62 24 01 68</p>
          <p>
            <span className="font-semibold text-gray-800">Email :</span>{' '}
            <a href="mailto:contact@nuisibles-services.fr" className="text-red-600 hover:text-red-700 font-medium underline transition-colors">
              contact@nuisibles-services.fr
            </a>
          </p>
          <p><span className="font-semibold text-gray-800">Directeur de publication :</span> HOSPICE MICHEL</p>
          <p><span className="font-semibold text-gray-800">SIREN :</span> 483160420</p>
          <p><span className="font-semibold text-gray-800">SIRET :</span> 483 160 420 00012</p>
        </div>

        {/* SECTION 2 : HÉBERGEUR */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Hébergeur
        </h2>
        <p className="text-base leading-relaxed text-gray-600 mb-2">
          <span className="font-semibold text-gray-800">Nom :</span> Vercel Inc.
        </p>
        <p className="text-base leading-relaxed text-gray-600 mb-2">
          <span className="font-semibold text-gray-800">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
        </p>
        <p className="text-base leading-relaxed text-gray-600">
          <span className="font-semibold text-gray-800">Site web :</span>{' '}
          <a 
            href="https://vercel.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-red-600 hover:text-red-700 font-medium underline transition-colors"
          >
            https://vercel.com
          </a>
        </p>

        {/* SECTION 3 : CONDITIONS */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Conditions d'utilisation
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          Le site Radikal 3D est accessible à l'URL :{' '}
          <a href="https://www.nuisibles-services.fr/" className="text-red-600 hover:text-red-700 font-medium underline transition-colors">
            https://www.nuisibles-services.fr/
          </a>.<br />
          Son utilisation est régie par les présentes conditions. En utilisant le site, vous acceptez ces conditions. Elles peuvent être modifiées à tout moment sans préavis.
        </p>

        {/* SECTION 4 : RESPONSABILITÉ */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Limitation de responsabilité
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          Les informations présentes sur ce site sont fournies de bonne foi, mais peuvent contenir des inexactitudes ou omissions. L'entreprise Nuisibles Services ne saurait être tenue responsable de toute utilisation ou interprétation erronée.
        </p>

        {/* SECTION 5 : LITIGES */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Litiges
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          Les présentes conditions sont régies par la loi française et tout litige relève des tribunaux français. La langue de référence pour tout contentieux est le français.
        </p>

      </div>
    </main>
  )
}