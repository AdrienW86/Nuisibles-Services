'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Description() {
  const { ref: zoneRef, inView: zoneInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const argumentsCles = [
    {
      img: '/image4.png',
      alt: 'Équipement professionnel contre les rongeurs et insectes',
      title: 'Interventions rapides et efficaces',
      text: 'Nous agissons en urgence ou sur rendez-vous pour éradiquer durablement les infestations et protéger vos espaces de vie ou de travail.'
    },
    {
      img: '/image6.png',
      alt: 'Traitement contre les insectes volants et rampants',
      title: "Respect de l'environnement",
      text: 'Nous utilisons uniquement des traitements agréés, sûrs pour votre famille, vos animaux domestiques et respectueux de l\'écosystème.'
    },
    {
      img: '/image5.png',
      alt: 'Expertise anti-nuisibles en milieu rural et urbain',
      title: 'Expertise locale reconnue',
      text: "Notre parfaite connaissance du terrain et des comportements des nuisibles dans les Pyrénées-Orientales nous permet d'agir efficacement en toute situation."
    },
    {
      img: '/image10.png',
      alt: 'Technicien équipé pour intervention anti-nuisibles',
      title: 'Matériel professionnel haut de gamme',
      text: 'Nous sommes équipés des dernières technologies pour garantir des interventions rapides, précises et sûres contre tous types d\'infestations.'
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      
      {/* ========================================== */}
      {/* SECTION 1 : ZONE D'INTERVENTION */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <div className="flex items-center space-x-4 mb-10">
          <div className="w-2 h-8 bg-red-600 rounded-full" />
          <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wide">
            Zone d'intervention
          </h2>
        </div>

        <div 
          ref={zoneRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: zoneInView ? 1 : 0, x: zoneInView ? 0 : -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-600 text-lg leading-relaxed font-sans"
          >
            <p className="text-xl">
              Basée dans les <strong className="text-gray-900 font-bold">Pyrénées-Orientales (66)</strong>, 
              <span className="text-red-600 font-bold"> Nuisibles Services</span> intervient rapidement sur tout le département : 
              Perpignan, Canet-en-Roussillon, Argelès-sur-Mer, Céret, Prades et leurs alentours.
            </p>
            <p>
              Nous vous proposons des solutions efficaces contre les termites, aussi bien pour les maisons individuelles 
              que pour les bâtiments professionnels. Faites appel à notre expertise pour protéger durablement votre 
              habitat contre les dégâts causés par les termites.
            </p>
          </motion.div>

          {/* IMAGE DE ZONE AGRANDIE : h-[500px] au lieu de h-[350px] */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: zoneInView ? 1 : 0, scale: zoneInView ? 1 : 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <Image
              src="/desinsectisation.png"
              alt="Technicien en intervention contre les nuisibles dans les Pyrénées-Orientales"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>

      {/* ========================================== */}
      {/* SECTION 2 : POURQUOI CHOISIR RADIKAL 3D ? */}
      {/* ========================================== */}
      <div className="w-full bg-gray-50 py-20 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          
          <motion.div 
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : 20 }}
            className="flex items-center space-x-4 mb-16"
          >
            <div className="w-2 h-8 bg-red-600 rounded-full" />
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-wide">
              Pourquoi choisir Nuisibles Services ?
            </h2>
          </motion.div>

          {/* Grille de 4 Cartes d'Arguments avec grandes images de couverture */}
          <div 
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {argumentsCles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: gridInView ? 1 : 0, y: gridInView ? 0 : 40 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-3xl border border-gray-200 border-opacity-60 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                {/* GRANDE IMAGE DE COUVERTURE POUR CHAQUE CARTE */}
                <div className="relative w-full h-64 bg-gray-100 border-b border-gray-100 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* TEXTE DE LA CARTE EN DESSOUS DE L'IMAGE */}
                <div className="p-8 space-y-3 flex-grow">
                  <h3 className="text-xl font-black text-gray-900 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed font-sans">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}