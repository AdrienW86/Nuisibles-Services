'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Equipment() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Grille responsive : Texte à gauche, Image à droite */}
        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* BLOC TEXTE (Prend 7 colonnes sur 12 sur grand écran) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -40 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Surtitre rouge indicatif */}
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm block">
              Proximité & Réactivité
            </span>

            {/* Titre principal stylisé */}
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-none">
              Votre expert <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                contre les nuisibles
              </span>
            </h2>

            {/* Ligne de séparation decorative */}
            <div className="w-20 h-1 bg-red-600 rounded-full my-4" />

            {/* Corps du texte */}
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-sans pt-2">
              Située au cœur des <strong className="text-gray-900 font-bold">Pyrénées-Orientales</strong>, 
              Nuisibles Services vous offre son expertise spécialisée dans l’extermination des nuisibles. 
              Que ce soit pour un traitement curatif ou préventif, notre équipe intervient rapidement, 
              discrètement et avec des solutions certifiées.
            </p>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-sans">
              Faites confiance à des spécialistes engagés, à l’écoute de vos besoins, pour protéger 
              votre habitat et vos locaux contre les nuisibles. Devis gratuit et intervention rapide 
              partout dans le département.
            </p>

            {/* Badge de réassurance en bas de texte */}
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-bold text-gray-700">Devis Gratuit & Sans Engagement</span>
              </div>
            </div>
          </motion.div>

          {/* BLOC IMAGE IMMERSIVE (Prend 5 colonnes sur 12) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <Image
              src="/image10.png" // Remplace par le chemin de ton image (ex: camion, équipement ou tech en action)
              alt="Équipement et véhicule d'intervention Radikal 3D"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            {/* Dégradé subtil pour embellir l'image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}