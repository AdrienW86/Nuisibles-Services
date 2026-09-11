'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const images = [
  '/desinfection.png',
  '/termites.jpg',
  '/deratisation.png',
  '/pigeons.png', 
  '/punaises.png',
  '/frelons.jpg',
  '/cafards.jpg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="relative w-full h-[65vh] min-h-[480px] max-h-[600px] overflow-hidden font-sans bg-gray-950 pt-20">
       
      {/* 1. CARROUSEL D'IMAGES D'ARRIÈRE-PLAN */}
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
        {/* Voile sombre d'arrière-plan */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* 2. CONTENU CENTRAL ET CARTE AVEC BACKGROUND DIRECT */}
      <div className="relative z-20 w-full h-full max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-center">
        
        {/* Carte avec backgroundColor explicite et backdrop-blur */}
        <div 
          className="w-full my-8 sm:my-12 p-6 sm:p-8 rounded-3xl border border-gray-700/80 shadow-2xl text-center flex flex-col items-center backdrop-blur-md"
          style={{ backgroundColor: 'rgba(17, 24, 39, 0.75)' }}
        >
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-950/80 text-red-400 border border-red-800/60 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Intervention 7j/7 — Perpignan & 66</span>
          </div>

          {/* Titre principal H1 */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-snug mb-3 drop-shadow-md">
            Dératisation & <span className="text-red-500">Désinsectisation</span>
          </h1>

          {/* Descriptif */}
          <p className="text-gray-200 text-xs sm:text-base font-medium leading-relaxed mb-6 max-w-xl">
            Éradication rapide et garantie des nuisibles pour particuliers et professionnels. Produits certifiés Certibiocide.
          </p>

          {/* Boutons d'action : Devis gratuit & Nos services */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="/contact"
              className="w-full sm:w-52 bg-red-600 hover:bg-red-700 text-white font-black text-center text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg transition-transform active:scale-95"
            > 
              Devis gratuit
            </Link>

            <Link 
              href="/#services"
              className="w-full sm:w-52 bg-gray-800/80 hover:bg-gray-700 text-white font-bold text-center text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl border border-gray-700 transition-colors"
            > 
              Nos services
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}