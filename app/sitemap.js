export default async function sitemap() {
  const baseUrl = 'https://nuisibles-services.fr';

  // Routes statiques
  const routes = [
    '',
    '/entreprise',
    '/contact',
    '/pictures',
    '/blog',
    '/reseaux-sociaux',
    '/plan-du-site',
    '/mentions-legales',
    '/politique-de-confidentialite',
    '/cgv',
    '/desinsectisation',
    '/rats',
    '/frelons',
    '/puces',
    '/cafards',
    '/termites',
    '/pigeons',
    '/desinfection',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' || route === '/blog' ? 'daily' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/blog') ? 0.8 : 0.7,
  }));

  return [...routes];
}