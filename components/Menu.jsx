'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Menu({ title, intro, sections, conclusion, backgroundImage }) {
  // Déclenche l'animation d'apparition dès que 5% du composant est visible à l'écran
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      className="relative w-full min-h-screen py-20 bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center font-sans"
      style={{
        // Le dégradé linéaire sombre garantit que le texte reste parfaitement lisible, peu importe l'image chargée
        backgroundImage: `linear-gradient(to bottom, rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.7)), url(${backgroundImage})`
      }}
    >
      {/* BLOC DE TEXTE CENTRAL (Effet de verre dépoli / Glassmorphism) */}
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 py-12 md:p-16 bg-gray-900/60 backdrop-blur-md rounded-3xl border border-gray-800 shadow-2xl text-gray-200"
      >
        
        {/* TITRE PRINCIPAL DE LA PAGE */}
        <h1 
          id="title" 
          className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight scroll-mt-24 mb-6 leading-tight"
        >
          {title.split(' ').map((word, i) => {
            // Met en valeur le tout premier mot du titre en rouge Radikal
            if (i === 0) return <span key={i} className="text-red-600 block sm:inline mr-3">{word}</span>;
            return word + ' ';
          })}
        </h1>

        {/* PARAGRAPHE D'INTRODUCTION */}
        <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-12 border-l-4 border-red-600 pl-4 py-1">
          {intro}
        </p>

        {/* SECTIONS / ÉTAPES DE L'INTERVENTION */}
        <div className="space-y-10">
          {sections?.map((section, index) => (
            <div 
              key={index} 
              className="group bg-gray-950/40 p-6 rounded-2xl border border-gray-800/50 hover:border-red-600/20 transition-colors duration-300"
            >
              {/* Sous-titre de la section */}
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide mb-3 group-hover:text-red-500 transition-colors duration-200">
                {section.title}
              </h2>

              {/* Texte descriptif de la section */}
              {section.content && (
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                  {section.content}
                </p>
              )}

              {/* Liste à puces stylisée sous forme de grille (si elle existe) */}
              {section.list && (
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {section.list.map((item, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start text-sm md:text-base text-gray-300 bg-gray-900/40 p-3 rounded-xl border border-gray-800"
                    >
                      {/* Icône de coche (Check) rouge personnalisée en SVG */}
                      <svg 
                        className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* CONCLUSION ET ACCÈS AU FORMULAIRE DE CONTACT */}
        {conclusion && (
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p className="text-lg md:text-xl font-bold text-white leading-relaxed mb-6">
              {conclusion}
            </p>
            <a 
              href="/contact" 
              className="inline-flex bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105"
            >
              Demander mon devis gratuit
            </a>
          </div>
        )}

      </motion.div>
    </section>
  );
}