export const metadata = {
  title: 'Conditions générales de vente - Nuisibles Services',
  description: 'Conditions générales de vente (CGV) des prestations de services anti-nuisibles de Nuisibles Services à Perpignan.',
}

export default function CGV() {
  return (
    // pt-28 : conserve le décalage idéal pour passer sous ton Header fixe
    <main className="w-full min-h-screen bg-gray-50 pt-28 pb-16 px-4 md:px-8 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        
        {/* TITRE PRINCIPAL */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 border-b-4 border-red-600 pb-3 uppercase tracking-tight">
          Conditions générales de vente (CGV)
        </h1>

        {/* SECTION 1 */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Produits et services
        </h2>
        <p className="text-base leading-relaxed text-gray-600 mb-6">
          Nuisibles Services propose des prestations professionnelles de dératisation, désinsectisation, dépigeonnage, désinfection et traitement des bois dans toutes les Pyrénées-Orientales.
        </p>

        {/* SECTION 2 */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Tarifs et paiement
        </h2>
        <p className="text-base leading-relaxed text-gray-600 mb-6">
          Les prix de nos interventions sont indiqués en euros et hors taxes (HT) sur nos devis. Le paiement s’effectue selon les modalités convenues et précisées au moment de la commande ou de la signature du devis (virement bancaire, carte bancaire ou espèces).
        </p>

        {/* SECTION 3 */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Délais d'intervention
        </h2>
        <p className="text-base leading-relaxed text-gray-600 mb-6">
          Les délais d’intervention sont expressément communiqués lors de la prise de contact initiale. Ils sont susceptibles de varier de manière raisonnable selon nos disponibilités d'urgence et la zone géographique concernée autour de Perpignan.
        </p>

        {/* SECTION 4 */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Annulation et remboursement
        </h2>
        <p className="text-base leading-relaxed text-gray-600 mb-6">
          Toute demande d’annulation de rendez-vous ou d'intervention doit nous être signalée dans les plus brefs délais par email ou par téléphone. Les prestations de traitement technique entièrement réalisées ne sont pas remboursables dès lors que l’intervention a déjà eu lieu.
        </p>

        {/* SECTION 5 */}
        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3 uppercase tracking-wide">
          Garanties et responsabilités
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          Nuisibles Services s’engage à fournir des prestations rigoureuses et conformes aux normes sanitaires et réglementations biocides en vigueur. L’entreprise ne pourra en aucun cas être tenue responsable en cas de dommages résultant d’une mauvaise préparation des locaux ou du non-respect des consignes de sécurité post-traitement par le client.
        </p>

      </div>
    </main>
  )
}