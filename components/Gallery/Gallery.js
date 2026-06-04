'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

export default function Gallery() {
  const images = [
    { src: '/image1.png', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.png', alt: 'Image 3' },
    { src: '/image4.png', alt: 'Image 4' },
    { src: '/image5.png', alt: 'Image 5' },
    { src: '/image6.png', alt: 'Image 1' },
    { src: '/cafards.jpg', alt: 'Image 1' },
    { src: '/deratisation.png', alt: 'Image 2' },
    { src: '/desinfection.png', alt: 'Image 3' },
    { src: '/frelons.jpg', alt: 'Image 4' },
    { src: '/pigeons.png', alt: 'Image 5' },
    { src: '/punaises.png', alt: 'Image 1' },
    { src: '/termites.jpg', alt: 'Image 1' },
     { src: '/image10.png', alt: 'Image 10' },
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
    <div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div className={styles.imageWrapper} key={index} onClick={() => openLightbox(image.src)}>
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxContent}>
            <img src={currentImage} alt="Lightbox" className={styles.lightboxImage} />
          </div>
        </div>
      )}
    </div>
  );
}