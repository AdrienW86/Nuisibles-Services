import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/data/posts';

export const metadata = {
  title: 'Blog & Conseils Anti-Nuisibles 66 — Nuisibles Services',
  description: 'Retrouvez tous nos guides, conseils d\'experts et réponses à vos questions sur la dératisation, désinsectisation et dépigeonnage à Perpignan.',
};

export default function BlogIndex() {
  return (
    <main className="w-full min-h-screen bg-gray-950 text-white font-sans pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE DU BLOG */}
        <div className="border-b border-gray-800 pb-8 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-950/80 text-red-400 border border-red-800/60 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Guides & Conseils d'experts</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-200 mb-4 text-gray-700">
            Notre <span className="text-red-500">Blog</span> et Actualités 
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            Toutes les réponses aux questions que vous vous posez sur les rongeurs, insectes et nuisibles dans les Pyrénées-Orientales.
          </p>
        </div>

        {/* GRILLE D'ARTICLES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* ZONE IMAGE */}
                <div className="relative w-full h-52 bg-gray-950 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-red-950/90 text-red-400 border border-red-800/80 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-md bg-gray-900">
                    {post.category}
                  </div>
                </div>

                {/* CONTENU TEXTUEL */}
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} de lecture</span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors duration-200 line-clamp-2 leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* PIED DE CARTE / BOUTON LIEN */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-800/50 mt-4 flex items-center justify-between text-xs font-bold text-red-500 group-hover:text-red-400">
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 w-full justify-between">
                  <span>Lire l'article complet</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

            </article>
          ))}
        </div>

      </div>
    </main>
  );
}