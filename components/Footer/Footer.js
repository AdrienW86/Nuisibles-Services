'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center">
        
        {/* LOGO ENTREPRISE */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Radikal 3D logo"
            width={180}
            height={180}
            sizes="120px"
            className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* LIENS JURIDIQUES */}
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm font-medium font-sans">
          <Link 
            href="/mentions-legales" 
            className="hover:text-white transition-colors duration-200 uppercase tracking-wider text-xs"
          >
            Mentions légales
          </Link>
          <Link 
            href="/politique-confidentialite" 
            className="hover:text-white transition-colors duration-200 uppercase tracking-wider text-xs"
          >
            Confidentialité
          </Link>
          <Link 
            href="/cgv" 
            className="hover:text-white transition-colors duration-200 uppercase tracking-wider text-xs"
          >
            CGV
          </Link>
        </div>

        {/* CRÉDITS ET COPYRIGHT */}
        <div className="flex flex-col items-center md:items-end space-y-2 text-xs font-sans tracking-wide">
          <p>© {currentYear} Nuisibles Services. Tous droits réservés.</p>
          
          <a 
            href="https://code-v.fr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors duration-200"
          >
            <span>Réalisé par</span>
            <span className="font-bold text-gray-400 group-hover:text-red-500 transition-colors duration-200">
              Codev
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}