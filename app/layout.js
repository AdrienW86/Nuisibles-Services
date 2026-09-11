import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import CookieBanner from '@/components/CookieBanner'
import FloatingCTA from '@/components/FloatingCTA'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://nuisibles-services.fr'),
  title: {
    default: 'Nuisibles Services — Dératisation & Désinsectisation Perpignan (66)',
    template: '%s | Nuisibles Services 66',
  },
  description: 'Entreprise agréée Certibiocide spécialisée dans la dératisation, désinsectisation, dépigeonnage et désinfection à Perpignan et dans toutes les Pyrénées-Orientales. Intervention urgente 7j/7.',
  keywords: [
    'dératisation Perpignan',
    'désinsectisation 66',
    'punaises de lit Perpignan',
    'destruction nid frelon asiatique',
    'anti cafards Pyrénées-Orientales',
    'dépigeonnage Perpignan',
  ],
  authors: [{ name: 'Nuisibles Services' }],
  creator: 'Codev',
  icons: {
    icon: '/favicon.png', // Gestion propre via l'objet metadata de Next.js
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://nuisibles-services.fr',
    siteName: 'Nuisibles Services',
    title: 'Nuisibles Services — Extermination & Anti-Nuisibles Perpignan (66)',
    description: 'Intervention d\'urgence 7j/7 pour rongeurs, insectes et pigeons dans les Pyrénées-Orientales.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nuisibles Services Perpignan',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    name: 'Nuisibles Services',
    image: 'https://nuisibles-services.fr/logo.png',
    '@id': 'https://nuisibles-services.fr/#organization',
    url: 'https://nuisibles-services.fr',
    telephone: '+33762240168',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Perpignan',
      postalCode: '66000',
      addressRegion: 'Occitanie',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.6976,
      longitude: 2.8954,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Pyrénées-Orientales',
      },
      {
        '@type': 'City',
        name: 'Perpignan',
      },
      {
        '@type': 'City',
        name: 'Canet-en-Roussillon',
      },
      {
        '@type': 'City',
        name: 'Saint-Estève',
      },
      {
        '@type': 'City',
        name: 'Argelès-sur-Mer',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Prestations de Lutte Anti-Nuisibles',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dératisation (Rats & Souris)',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Désinsectisation globale',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Traitement Punaises de lit & Puces',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Destruction de nids de Guêpes & Frelons asiatiques',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Traitement anti-cafards & blattes',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dépigeonnage & Protection',
          },
        },
      ],
    },
  }

  return (
    <html lang="fr" className="bg-gray-950 text-white antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col justify-between bg-gray-950 text-white`}>
        
        {/* Google Consent Mode v2 */}
        <Script id="google-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied'
            });
          `}
        </Script>

        {/* Script Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17576606746"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            gtag('js', new Date());
            gtag('config', 'AW-17576606746');
          `}
        </Script>

        <Header />
        <Breadcrumb />
        <main className="flex-grow">{children}</main>
        <FloatingCTA />
        <Footer />
        <CookieBanner />

      </body>
    </html>
  )
}