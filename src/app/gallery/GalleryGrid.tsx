'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import styles from './page.module.css';

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

interface Artwork {
  _id: string;
  title: string;
  image: SanityImage;
  medium?: string;
  year?: string;
  tags?: string[];
}

export default function GalleryGrid({ artworks }: { artworks: Artwork[] }) {
  const [selectedImage, setSelectedImage] = useState<Artwork | null>(null);
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  // Compute unique tags from all artworks
  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    artworks.forEach((artwork) => {
      artwork.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [artworks]);

  // Toggle filter logic
  const toggleFilter = (tag: string) => {
    const newFilters = new Set(activeFilters);
    if (tag === 'All') {
      newFilters.clear();
    } else {
      if (newFilters.has(tag)) {
        newFilters.delete(tag);
      } else {
        newFilters.add(tag);
      }
    }
    setActiveFilters(newFilters);
  };

  // Filter artworks based on active filters (Inclusive - shows if it has ANY of the selected tags)
  const filteredArtworks = useMemo(() => {
    if (activeFilters.size === 0) return artworks;
    return artworks.filter((artwork) => 
      artwork.tags?.some((tag) => activeFilters.has(tag))
    );
  }, [activeFilters, artworks]);

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
      {/* Filter Bar */}
      {uniqueTags.length > 0 && (
        <div className={styles.filterBar}>
          <button 
            className={`${styles.filterButton} ${activeFilters.size === 0 ? styles.activeFilter : ''}`}
            onClick={() => toggleFilter('All')}
          >
            All
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterButton} ${activeFilters.has(tag) ? styles.activeFilter : ''}`}
              onClick={() => toggleFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className={styles.masonry}>
        {filteredArtworks.map((artwork, index) => (
          <div 
            key={artwork._id} 
            className={styles.animationWrapper}
            style={{ 
              animationDelay: `${index * 0.05}s`,
              animationName: index < 2 ? 'none' : undefined,
              opacity: index < 2 ? 1 : undefined,
              transform: index < 2 ? 'none' : undefined
            }}
          >
            <div 
              className={styles.card}
              onClick={() => setSelectedImage(artwork)}
            >
              <div className={styles.imageWrapper}>
                {artwork.image && (
                  <Image
                    src={urlFor(artwork.image).width(800).url()}
                    alt={artwork.image.alt || artwork.title}
                    width={800}
                    height={1000}
                    className={styles.image}
                    priority={index < 4}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    sizes="(max-width: 600px) 95vw, (max-width: 900px) 45vw, 30vw"
                  />
                )}
              </div>
              <div className={styles.info}>
                <h2 className={styles.artworkTitle}>{artwork.title}</h2>
                <p className={styles.details}>
                  {artwork.medium} {artwork.year ? `• ${artwork.year}` : ''}
                </p>
                {artwork.tags && artwork.tags.length > 0 && (
                  <div className={styles.tagList}>
                    {artwork.tags.slice(0, 3).map(tag => (
                      <span key={tag} className={styles.tagBadge}>{tag}</span>
                    ))}
                  </div>
                )}
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
            <Image
              src={urlFor(selectedImage.image).width(1600).url()}
              alt={selectedImage.image.alt || selectedImage.title}
              width={1600}
              height={1600}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </>
  );
}
