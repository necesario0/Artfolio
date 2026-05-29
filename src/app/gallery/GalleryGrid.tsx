'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import styles from './page.module.css';

interface Artwork {
  _id: string;
  title: string;
  image: any;
  medium?: string;
  year?: string;
}

export default function GalleryGrid({ artworks }: { artworks: Artwork[] }) {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (artworks.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>The gallery is currently being curated. Please check back soon!</p>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
          (Tip: Use the Sanity Studio at /studio to add your first artwork!)
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.masonry}>
        {artworks.map((artwork, index) => (
          <div 
            key={artwork._id} 
            className={styles.animationWrapper}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div 
              className={styles.card}
              onClick={() => setSelectedImage(artwork)}
            >
              <div className={styles.imageWrapper}>
                {artwork.image && (
                  <img
                    src={urlFor(artwork.image).width(800).url()}
                    alt={artwork.image.alt || artwork.title}
                    className={styles.image}
                  />
                )}
              </div>
              <div className={styles.info}>
                <h2 className={styles.artworkTitle}>{artwork.title}</h2>
                <p className={styles.details}>
                  {artwork.medium} {artwork.year ? `• ${artwork.year}` : ''}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className={styles.lightboxOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.lightboxContent}>
            <button className={styles.closeButton}>&times;</button>
            <img
              src={urlFor(selectedImage.image).width(1600).url()}
              alt={selectedImage.image.alt || selectedImage.title}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </>
  );
}
