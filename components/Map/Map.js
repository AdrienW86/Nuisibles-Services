'use client';

import React, { useState, useEffect } from 'react';

export default function GoogleMap() {
  const address = {
    phone: "07 62 24 01 68",
    fullAddress: "Pyrénées Orientales",
  };

  const [isMobile, setIsMobile] = useState(false);

  // Détection stricte de l'écran pour isoler le mobile du desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px correspond au breakpoint 'lg' de Tailwind
    };
    
    handleResize(); // Logique initiale
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Composant Iframe réutilisable
  const MapIframe = () => (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46915.49122963929!2d2.863226134086672!3d42.69910031702662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e4e80fd88fd%3A0x1c83306520f2dd4f!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1745486342047!5m2!1sfr!2sfr"
      className="absolute top-0 left-0 w-full h-full border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );

  // --- RENDER VERSION MOBILE (Affichage empilé ultra-sécurisé avec hauteur forcée) ---
  if (isMobile) {
    return (
      <div className="w-full bg-white rounded-3xl p-6 shadow-sm border border-gray-100 font-sans space-y-6">
        {/* Infos de contact */}
        <div className="flex flex-col space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <div>
            <p className="text-xs uppercase font-bold tracking-wider text-gray-400">Secteur</p>
            <p className="text-base text-gray-800">
              <strong className="text-gray-900 font-extrabold">Zone d'intervention :</strong><br />
              {address.fullAddress}
            </p>
          </div>
          <div className="h-px bg-gray-200/60 w-full" />
          <div>
            <p className="text-xs uppercase font-bold tracking-wider text-gray-400">Urgence & Devis</p>
            <p className="text-base text-gray-800">
              <strong className="text-gray-900 font-extrabold">Téléphone :</strong><br />
              <a href={`tel:${address.phone.replace(/\s/g, '')}`} className="text-red-600 font-bold underline">{address.phone}</a>
            </p>
          </div>
        </div>
        {/* Carte Mobile Forcée */}
        <div style={{ display: 'block', position: 'relative', width: '100%', height: '280px', minHeight: '280px', borderRadius: '1rem', overflow: 'hidden' }} className="border border-gray-200/80 shadow-inner">
          <MapIframe />
        </div>
      </div>
    );
  }

  // --- RENDER VERSION DESKTOP ORIGINALE (Celle que tu aimes tant !) ---
  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        
        {/* BLOC INFOS DE CONTACT */}
        <div className="lg:col-span-1 flex flex-col justify-center space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <div className="space-y-1">
            <p className="text-xs uppercase font-bold tracking-wider text-gray-400">
              Secteur
            </p>
            <p className="text-base md:text-lg text-gray-800">
              <strong className="text-gray-900 font-extrabold">Zone d'intervention :</strong><br />
              {address.fullAddress}
            </p>
          </div>

          <div className="h-px bg-gray-200/60 w-full" />

          <div className="space-y-1">
            <p className="text-xs uppercase font-bold tracking-wider text-gray-400">
              Urgence & Devis
            </p>
            <p className="text-base md:text-lg text-gray-800">
              <strong className="text-gray-900 font-extrabold">Téléphone :</strong><br />
              <a 
                href={`tel:${address.phone.replace(/\s/g, '')}`} 
                className="text-red-600 hover:text-red-700 font-bold underline transition-colors"
              >
                {address.phone}
              </a>
            </p>
          </div>
        </div>

        {/* BLOC CARTE GOOGLE MAPS DESKTOP */}
        <div className="lg:col-span-2 relative w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden border border-gray-200/80 shadow-inner">
          <MapIframe />
        </div>    

      </div>
    </div>
  );
}