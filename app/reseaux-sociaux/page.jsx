import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Nos Réseaux Sociaux & Actualités 66 — Nuisibles Services',
  description: 'Suivez nos interventions en direct sur Facebook et Instagram. Retrouvez nos conseils, photos de chantier et avis clients dans les Pyrénées-Orientales.',
};

export default function ReseauxSociaux() {
  const socialLinks = [
    {
      name: 'Facebook',
      handle: '@NuisiblesServices66',
      description: 'Suivez nos interventions quotidiennes, retours clients et actualités locales dans le 66.',
      url: 'https://facebook.com', // Remplace par le lien exact de la page client
      color: 'from-blue-600 to-blue-800',
      badge: 'Communauté & Avis',
      icon: (
        <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      handle: '@nuisibles_services_66',
      description: 'Découvrez nos photos d\'interventions, coulisses, matériel et techniques de traitement en images.',
      url: 'https://instagram.com', // Remplace par le lien exact de la page client
      color: 'from-pink-600 via-red-600 to-purple-700',
      badge: 'Photos & Interventions',
      icon: (
        <svg className="w-8 h-8 fill-current text-white" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
  ];

  const postsHighlight = [
    {
      title: 'Destruction d\'un nid de frelons asiatiques à Canet',
      platform: 'Facebook',
      date: 'Récemment',
      image: '/frelons.jpg',
      text: 'Intervention sécurisée en hauteur pour éliminer un nid impressionnant. Pensez à vérifier vos toitures avant l\'été !',
    },
    {
      title: 'Traitement anti-punaises de lit à Perpignan',
      platform: 'Instagram',
      date: 'Récemment',
      image: '/punaises.png',
      text: 'Passage à la vapeur sèche + application de biocide certifié. Résultat garanti sans résidus toxiques.',
    },
  ];

  return (
    <main className="w-full min-h-screen bg-gray-950 text-white font-sans pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="border-b border-gray-800 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-950/80 text-red-400 border border-red-800/60 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Suivez notre quotidien sur le terrain</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-200 mb-4">
            Nos <span className="text-red-500">Réseaux Sociaux</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            Retrouvez nos interventions en direct, nos conseils de prévention et l'actualité de la lutte anti-nuisibles dans le 66.
          </p>
        </div>

        {/* CARTES DES RÉSEAUX SOCIAUX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {socialLinks.map((social) => (
            <div 
              key={social.name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-gray-700 transition-all shadow-xl relative overflow-hidden group"
            >
              {/* Halos de couleur au survol */}
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${social.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${social.color} shadow-lg`}>
                    {social.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-gray-950 border border-gray-800 text-gray-300 rounded-full">
                    {social.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-white mb-1">
                  {social.name}
                </h2>
                <span className="text-xs font-bold text-red-500 block mb-4">
                  {social.handle}
                </span>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {social.description}
                </p>
              </div>

              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-950 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl border border-gray-800 hover:border-red-600 transition-all text-center flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                <span>Rejoindre sur {social.name}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* APERÇU DES DERNIÈRES PUBLICATIONS (FEED STATIQUE) */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider mb-6 border-l-4 border-red-600 pl-3">
            Dernières publications sur le terrain
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {postsHighlight.map((item, idx) => (
              <div key={idx} className="bg-gray-950 border border-gray-800/80 rounded-xl p-4 flex gap-4 items-center">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase">
                    <span className="text-red-500">{item.platform}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}