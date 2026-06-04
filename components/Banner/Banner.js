'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  '/desinfection.png',
  '/termites.jpg',
  '/deratisation.png',
  '/pigeons.png', 
  '/punaises.png',
  '/frelons.jpg',
  '/cafards.jpg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '85vh' }}>
       
       {/* BOUTON APPEL MOBILE - z-40 pour passer AU-DESSUS du bloc invisible */}
       <a 
         href="tel:0762240168" 
         className="lg:hidden absolute top-4 left-1/2 transform -translate-x-1/2 z-40 bg-red-600 text-white font-black text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-2xl animate-bounce text-center whitespace-nowrap"
       >
        📞 07 62 24 01 68
      </a>

      {/* MACARON CERTIBIOCIDE / GARANTIE */}
      <div className="absolute top-20 lg:top-8 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-12 z-30 drop-shadow-2xl">
        <Image          
          src="/garantie.png"
          alt="garantie certibiocide"
          width={140}
          height={140}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain animate-pulse"
          style={{ animationDuration: '3s' }}
        />
      </div>

      {/* CONTENEUR DES BOUTONS D'ACTION */}
      <div className="absolute inset-0 z-30 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 pt-32 sm:pt-0 pointer-events-none">
          
          {/* Note : On ajoute pointer-events-auto sur les boutons pour qu'ils restent cliquables eux aussi */}
          <motion.a 
            href="/contact#devis"
            ref={ref1}  
            initial={{ opacity: 0, x: -50 }} 
            animate={{
              opacity: inView1 ? 1 : 0,
              x: inView1 ? 0 : -50,
            }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black text-center uppercase tracking-widest text-base px-8 py-4 rounded-xl shadow-2xl transition-all hover:scale-105 pointer-events-auto"
          > 
            Devis gratuit
          </motion.a>

          <motion.a 
            href="/#services"
            ref={ref2}  
            initial={{ opacity: 0, x: 50 }} 
            animate={{
              opacity: inView2 ? 1 : 0,
              x: inView2 ? 0 : 50,
            }}
            transition={{ duration: 0.3 }}
            className="w-full sm:w-auto bg-gray-900/80 hover:bg-gray-900 border border-gray-700 backdrop-blur-sm text-white font-black text-center uppercase tracking-widest text-base px-8 py-4 rounded-xl shadow-2xl transition-all hover:scale-105 pointer-events-auto"
          > 
            Nos services 
          </motion.a>
      </div>

      {/* CARROUSEL D'IMAGES D'ARRIÈRE-PLAN */}
      <div className="absolute inset-0 w-full h-full z-10">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/40 to-gray-950/70" />
          </div>
        ))}
      </div>   
    </div>
  );
}