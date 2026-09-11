'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: '/image1.png', alt: 'Intervention anti-nuisibles 1' },
    { src: '/image2.jpg', alt: 'Traitement de surface 2' },
    { src: '/image3.png', alt: 'Inspection locaux 3' },
    { src: '/image4.png', alt: 'Extermination insectes 4' },
    { src: '/image5.png', alt: 'Traitement rongeurs 5' },
    { src: '/image6.png', alt: 'Intervention urgente 6' },
    { src: '/cafards.jpg', alt: 'Traitement anti-cafards Perpignan' },
    { src: '/deratisation.png', alt: 'Dératisation professionnelle 66' },
    { src: '/desinfection.png', alt: 'Désinfection et assainissement' },
    { src: '/frelons.jpg', alt: 'Destruction nid de frelons' },
    { src: '/pigeons.png', alt: 'Dépigeonnage et protection' },
    { src: '/punaises.png', alt: 'Traitement punaises de lit' },
    { src: '/termites.jpg', alt: 'Protection contre les termites' },
    { src: '/image10.png', alt: 'Matériel certifié Certibiocide' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <section className="w-full min-h-[50vh] bg-gray-950 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* GRILLE DE GALERIE EN TAILWIND */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(image.src)}
              className="group relative w-full h-48 sm:h-56 bg-gray-900 rounded-xl overflow-hidden cursor-pointer border border-gray-800 hover:border-red-600/50 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* LIGHTBOX OVERLAY */}
        {isOpen && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={currentImage}
                alt="Agrandissement photo d'intervention"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-800"
              />
              {/* Bouton fermer en haut à droite */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 sm:-top-10 sm:-right-4 text-white bg-gray-900/80 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border border-gray-700 transition-colors"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}