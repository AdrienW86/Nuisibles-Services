import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// 1. Génération des métadonnées SEO dynamiques
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return { title: 'Article non trouvé' };

  return {
    title: `${post.title} — Nuisibles Services 66`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// 2. Génération des routes statiques pour la performance
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema.org Article pour Google
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Nuisibles Services',
    },
  };

  return (
    <main className="w-full min-h-screen bg-gray-950 text-white font-sans pt-8 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* FIL D'ARIANE LOCAL */}
        <nav className="text-xs text-gray-400 mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-white">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span>/</span>
          <span className="text-red-500 truncate">{post.title}</span>
        </nav>

        {/* EN-TÊTE DE L'ARTICLE */}
        <div className="space-y-4 mb-8">
          <span className="inline-block bg-red-950/80 text-red-400 border border-red-800/60 text-xs font-bold px-3 py-1 rounded-full uppercase">
            {post.category}
          </span>
          
          <h1 className="text-2xl sm:text-4xl font-black text-slate-100 uppercase tracking-tight leading-tight text-gray-700">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 text-xs text-gray-400 pt-2 border-b border-gray-800 pb-4">
            <span>Par <strong className="text-red">{post.author}</strong></span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>Temps de lecture : {post.readTime}</span>
          </div>
        </div>

        {/* IMAGE PRINCIPALE */}
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-10 border border-gray-800">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* CONTENU DE L'ARTICLE */}
        <div className="prose prose-invert max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-6">
          <p className="text-lg font-medium text-slate-200 border-l-4 border-red-600 pl-4 py-1 bg-gray-900/50 rounded-r-lg">
            {post.excerpt}
          </p>
          
          <div className="whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* ENCADRÉ CTA CONVERSION EN BAS D'ARTICLE */}
        <div className="mt-12 bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white uppercase">Besoin d'une intervention urgente ?</h3>
            <p className="text-xs text-gray-400 mt-1">Devis gratuit et intervention 7j/7 dans tous les P.O (66).</p>
          </div>
          <a
            href="tel:+33762240168"
            className="bg-red-600 hover:bg-red-700 text-white font-black uppercase text-xs px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap shadow-lg"
          >
            📞 Appeler le 07 62 24 01 68
          </a>
        </div>

      </article>
    </main>
  );
}