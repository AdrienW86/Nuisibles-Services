'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowBanner(false);
    // Activer les scripts de suivi si nécessaire
  };

  const declineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 bg-gray-900 border border-gray-800 p-5 rounded-2xl shadow-2xl text-white font-sans">
      <div className="flex items-start gap-3">
        <span className="text-xl">🍪</span>
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Respect de votre vie privée
          </h3>
          <p className="text-[11px] text-gray-400 leading-relaxed">
            Nous utilisons des cookies pour mesurer notre audience et optimiser nos campagnes d'urgence. Vous pouvez accepter ou refuser leur dépôt.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={acceptCookies}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] px-4 py-2 rounded-lg uppercase tracking-wider transition-colors"
            >
              Accepter
            </button>
            <button
              onClick={declineCookies}
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold text-[11px] px-4 py-2 rounded-lg uppercase tracking-wider transition-colors"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}