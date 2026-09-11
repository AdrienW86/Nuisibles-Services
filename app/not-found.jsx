import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="w-full min-h-[70vh] bg-gray-950 text-white font-sans flex items-center justify-center pt-8 pb-16 px-4">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 p-8 rounded-3xl text-center shadow-2xl">
        <span className="text-6xl font-black text-red-500 block mb-2">404</span>
        <h1 className="text-xl font-bold uppercase tracking-tight text-slate-200 mb-3">
          Page introuvable
        </h1>
        <p className="text-xs text-gray-400 mb-6 leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée. En cas d'urgence anti-nuisibles dans le 66, contactez-nous directement.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="tel:+33762240168"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase text-xs tracking-wider py-3.5 px-4 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <span>📞 Appeler l'Urgence (07 62 24 01 68)</span>
          </a>
          <Link
            href="/"
            className="w-full bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold uppercase text-xs tracking-wider py-3 px-4 rounded-xl transition-colors border border-gray-700"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}