import React from 'react';

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white font-sans text-gray-700">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* TITRE PRINCIPAL DE LA SECTION */}
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tight border-b-4 border-red-600 pb-2 inline-block">
          L'entreprise
        </h2>
        
        {/* PARAGRAPHE D'INTRO DE TYPE ENCADRÉ / ACCENTUÉ */}
        <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed mb-12 border-l-4 border-red-600 pl-4 py-1 bg-gray-50 rounded-r-2xl p-4">
          Chez Nuisibles Services, nous sommes passionnés par la protection de vos biens contre les termites. Implantés dans les Pyrénées-Orientales (66), 
          nous sommes les spécialistes locaux pour vous aider à lutter contre cette menace invisible qui ronge lentement vos fondations et structures en bois. 
          Grâce à notre expertise, nous vous offrons des solutions de traitement sur-mesure pour éradiquer les termites et préserver la sécurité de votre habitat.
        </p>

        {/* BLOC DE CONTENU 1 */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-wide mb-3">
            Une expertise de proximité, dédiée à votre tranquillité
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            Chez Nuisibles Services, nous croyons que chaque intervention doit être unique, en fonction de l'ampleur de l'infestation et des spécificités de votre bâtiment. 
            Nous intervenons rapidement sur tout le département, de Perpignan à Céret, en passant par Argelès-sur-Mer et leurs environs. Nous offrons des solutions fiables 
            pour stopper la propagation des termites, qu'il s'agisse de maisons privées ou de bâtiments commerciaux.
          </p>
        </div>

        {/* BLOC DE CONTENU 2 */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-wide mb-3">
            Des traitements certifiés pour une action ciblée
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            Nos techniciens sont certifiés et formés aux meilleures pratiques en matière d'extermination des termites. Nous utilisons des produits efficaces et respectueux de l'environnement, 
            garantissant non seulement l'éradication des nuisibles, mais aussi la sécurité de vos proches et de vos animaux. Chaque traitement est adapté à vos besoins spécifiques, 
            pour une action durable et sans risque.
          </p>
        </div>

        {/* BLOC DE CONTENU 3 */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-wide mb-3">
            Une prise en charge complète, de l'évaluation à la prévention
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-4">
            Chez Nuisibles Services, nous allons au-delà de l’intervention. Nous réalisons un diagnostic complet de votre propriété pour identifier la source de l'infestation, 
            et nous proposons des solutions adaptées à chaque situation. Après l'extermination, nous vous offrons des conseils pour prévenir toute récidive et protéger votre bien à long terme.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 font-semibold text-gray-800 mt-4">
            Faites confiance à Nuisibles Services pour protéger votre maison des termites et des dommages qu'ils provoquent. Nous sommes là pour vous offrir une tranquillité d'esprit 
            et un environnement sans risques, avec des solutions sur mesure adaptées à chaque besoin.
          </p>
        </div>

      </div>
    </section>
  );
}