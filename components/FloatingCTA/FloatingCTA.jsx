'use client';

import React from 'react';

export default function FloatingCTA() {
  return (
    // Le conteneur global est fixé en bas à droite avec un z-index élevé pour passer au-dessus du contenu
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      
      {/* ========================================== */}
      {/* VERSION MOBILE (Visible uniquement sur smartphones) */}
      {/* ========================================== */}
      <a 
        href="tel:+33762240168"
        className="lg:hidden flex items-center justify-center w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl hover:bg-red-700 active:scale-95 transition-all duration-200"
        aria-label="Appeler Radikal 3D"
      >
        {/* Icône de téléphone */}
        <svg 
          className="w-6 h-6 animate-pulse" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
          />
        </svg>
      </a>

      {/* ========================================== */}
      {/* VERSION BUREAU (Discrète, visible sur PC) */}
      {/* ========================================== */}
      <a 
        href="tel:+33762240168"
        className="hidden lg:flex items-center space-x-3 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-black uppercase tracking-wider">Urgence Nuisibles</span>
        <svg 
          className="w-4 h-4 transform group-hover:rotate-12 transition-transform" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>

    </div>
  );
}