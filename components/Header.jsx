'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const mainLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/pictures', label: 'Photos' },
    { href: '/entreprise', label: "L'entreprise" },
    { href: '/blog', label: 'Blog' },
    { href: '/reseaux-sociaux', label: 'Réseaux' },
    { href: '/contact', label: 'Contact' },
  ];

  const servicesLinks = [
    { href: '/desinsectisation', label: 'Désinsectisation' },
    { href: '/rats', label: 'Dératisation' },
    { href: '/frelons', label: 'Guêpes & Frelons' },
    { href: '/puces', label: 'Punaises & Puces' },
    { href: '/cafards', label: 'Cafards & Blattes' },
    { href: '/termites', label: 'Termites & Bois' },
    { href: '/pigeons', label: 'Dépigeonnage' },
    { href: '/desinfection', label: 'Désinfection' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800 shadow-lg font-sans h-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO & MARQUE */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-28 h-28 flex-shrink-0 -my-3">
            <Image
              src="/logo.png"
              alt="Logo Nuisibles Services"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase leading-none">
              Lutte anti-Nuisibles 
            </span>
          </div>
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link
            href="/"
            className="text-xs font-bold text-gray-300 hover:text-white px-3 py-2 rounded-xl hover:bg-gray-800 transition-colors"
          >
            Accueil
          </Link>

          {/* DROPDOWN SERVICES */}
          <div 
            className="relative group py-2"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-xs font-bold text-gray-300 hover:text-white px-3 py-2 rounded-xl hover:bg-gray-800 transition-colors flex items-center space-x-1 focus:outline-none"
            >
              <span>Services</span>
              <svg className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 w-60 bg-gray-900 border border-gray-800 rounded-2xl shadow-xl py-2 mt-1 z-50 max-h-[400px] overflow-y-auto"
                >
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="block text-xs font-bold text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-3 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {mainLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-bold text-gray-300 hover:text-white px-3 py-2 rounded-xl hover:bg-gray-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA TÉLÉPHONE & HAMBURGER */}
        <div className="flex items-center space-x-3">
          <a
            href="tel:+33762240168"
            className="hidden lg:flex items-center bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-wider px-4 py-2.5 text-xs rounded-xl transition-colors shadow-md"
          >
            <span>📞</span>
            <span className="ml-2">Urgence : 07 62 24 01 68</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-gray-800 text-white focus:outline-none"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-5 bg-white transition-all ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white my-1 transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>

      </div>

      {/* MENU MOBILE DÉROULANT */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-xl lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <ul className="py-4 px-4 space-y-1">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full font-bold text-gray-200 hover:text-red-500 py-3 px-4 rounded-xl hover:bg-gray-800"
                >
                  Accueil
                </Link>
              </li>

              <li>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex justify-between items-center w-full font-bold text-gray-200 py-3 px-4 rounded-xl hover:bg-gray-800 focus:outline-none"
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transform transition-transform ${isServicesOpen ? "rotate-180 text-red-500" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.ul 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-1 space-y-1 bg-gray-950 rounded-xl overflow-hidden"
                    >
                      {servicesLinks.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                            className="block w-full text-sm font-medium text-gray-400 hover:text-white py-3 px-4"
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {mainLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full font-bold text-gray-200 hover:text-red-500 py-3 px-4 rounded-xl hover:bg-gray-800"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}