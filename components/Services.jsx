'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    image: "/desinfection.png",
    title: "Désinfection",
    alt: "Technicien en intervention contre les nuisibles dans les Pyrénées-Orientales",
    url: "/desinfection#title"
  },
  {
    image: "/desinsectisation.png",
    title: "Désinsectisation",
    alt: "Traitement contre les insectes nuisibles dans les Pyrénées-Orientales",
    url: "/desinsectisation#title"
  },
  {
    image: "/deratisation.png",
    title: "Dératisation",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/rats#title"
  },
  {
    image: "/pigeons.png",
    title: "Dépigeonnage",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/pigeons#title"
  },
  {
    image: "/frelons.jpg",
    title: "Guêpes et frelons",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/frelons#title"
  },
  {
    image: "/cafards.jpg",
    title: "Blattes et cafards",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/cafards#title"
  },
  {
    image: "/punaises.png",
    title: "Punaises & puces de lit",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/puces#title"
  },
  {
    image: "/termites.jpg",
    title: "Termites",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/termites#title"
  },
];

export default function Services() {
  const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="w-full py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* En-tête de section avec marqueur rouge */}
        <div className="flex items-center space-x-4 mb-16">
          <div className="w-2 h-8 bg-red-600 rounded-full" />
          <h2 id="services" className="text-3xl font-black text-gray-900 uppercase tracking-wide">
            Nos Services
          </h2>
        </div>

        {/* Grille responsive : 1 col sur mobile, 2 cols sur tablette, 4 cols sur PC */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: gridInView ? 1 : 0, y: gridInView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Le lien englobe toute la carte pour maximiser la zone cliquable */}
              <Link 
                href={item.url}
                className="group block bg-white rounded-2xl border border-gray-200 border-opacity-60 shadow-sm hover:shadow-xl hover:border-red-600/30 transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                {/* Zone de l'image fixe avec effet de zoom au survol */}
                <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="transform group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  {/* Voile sombre léger sur l'image qui s'estompe au survol */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Contenu textuel de la carte */}
                <div className="p-5 flex flex-col justify-between flex-grow bg-white">
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-wide group-hover:text-red-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  {/* Petit bouton d'appel à l'action discret en bas de carte */}
                  <div className="mt-4 pt-2 flex items-center text-sm font-bold text-red-600 opacity-80 group-hover:opacity-100 transition-opacity">
                    <span>En savoir plus</span>
                    <svg 
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}