import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ image, alt, title, url }) {
  return (
    // "group" permet de déclencher des animations sur les enfants (comme l'image ou le titre) au survol de la carte
    <Link href={url} className="group block w-full max-w-sm mx-auto">
      <section className="relative overflow-hidden bg-gray-900 rounded-2xl border border-gray-800 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-red-600/30">
        
        {/* CONTENEUR IMAGE */}
        <div className="relative w-full aspect-square overflow-hidden bg-gray-950">
          <Image
            src={image}
            alt={alt}
            fill // Utilisation de "fill" pour que Next/Image s'adapte automatiquement au conteneur responsive
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-80"
          />
        </div>

        {/* CONTENEUR TEXTE / INTRO */}
        <div className="p-5 bg-gradient-to-t from-gray-950 to-gray-900 border-t border-gray-800/60">
          <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wide transition-colors duration-300 group-hover:text-red-500 line-clamp-1">
            {title}
          </h3>
        </div>

      </section>
    </Link>
  );
}
