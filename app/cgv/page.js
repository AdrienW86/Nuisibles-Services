export const metadata = {
  title: 'Conditions Générales de Vente (CGV) — Nuisibles Services Perpignan',
  description: 'Conditions générales de vente (CGV) des prestations de services anti-nuisibles de Nuisibles Services dans les Pyrénées-Orientales (66).',
};

export default function CGV() {
  return (
    <main className="w-full min-h-screen bg-gray-950 text-white font-sans pt-8 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-gray-900 p-6 sm:p-10 rounded-2xl border border-gray-800 shadow-xl">
        
        {/* TITRE PRINCIPAL */}
        <div className="border-b border-gray-800 pb-6 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-950/80 text-red-400 border border-red-800/60 mb-4">
            <span>Information juridique</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-200">
            Conditions Générales de <span className="text-red-500">Vente (CGV)</span>
          </h1>
        </div>

        {/* SECTION 1 */}
        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-3 border-l-4 border-red-600 pl-3">
            1. Produits et services
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
            Nuisibles Services propose des prestations professionnelles de dératisation, désinsectisation, dépigeonnage, désinfection et traitement des bois dans toutes les Pyrénées-Orientales (66).
          </p>
        </section>

        {/* SECTION 2 */}
        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-3 border-l-4 border-red-600 pl-3">
            2. Tarifs et paiement
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
            Les prix de nos interventions sont indiqués en euros et hors taxes (HT) sur nos devis. Le paiement s’effectue selon les modalités convenues et précisées au moment de la commande ou de la signature du devis (virement bancaire, carte bancaire ou espèces).
          </p>
        </section>

        {/* SECTION 3 */}
        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-3 border-l-4 border-red-600 pl-3">
            3. Délais d'intervention
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
            Les délais d’intervention sont expressément communiqués lors de la prise de contact initiale. Ils sont susceptibles de variar de manière raisonnable selon nos disponibilités d'urgence et la zone géographique concernée autour de Perpignan.
          </p>
        </section>

        {/* SECTION 4 */}
        <section className="mb-8">
          <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-3 border-l-4 border-red-600 pl-3">
            4. Annulation et remboursement
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
            Toute demande d’annulation de rendez-vous ou d'intervention doit nous être signalée dans les plus brefs délais par email ou par téléphone. Les prestations de traitement technique entièrement réalisées ne sont pas remboursables dès lors que l’intervention a déjà eu lieu.
          </p>
        </section>

        {/* SECTION 5 */}
        <section>
          <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-3 border-l-4 border-red-600 pl-3">
            5. Garanties et responsabilités
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
            Nuisibles Services s’engage à fournir des prestations rigoureuses et conformes aux normes sanitaires et réglementations biocides en vigueur (certifié Certibiocide). L’entreprise ne pourra en aucun cas être tenue responsable en cas de dommages résultant d’une mauvaise préparation des locaux ou du non-respect des consignes de sécurité post-traitement par le client.
          </p>
        </section>

      </div>
    </main>
  );
}