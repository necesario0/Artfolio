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
  type: 'image' | 'video' | 'storybook';
  image: SanityImage;
  images?: SanityImage[];
  videoUrl?: string;
  medium?: string;
  year?: string;
  tags?: string[];
}

export default function GalleryGrid({ artworks }: { artworks: Artwork[] }) {
  const [selectedItem, setSelectedItem] = useState<Artwork | null>(null);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Compute unique tags from all artworks
  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    artworks.forEach((artwork) => {
      artwork.tags?.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [artworks]);

  // Toggle filter logic (Single Select)
  const toggleFilter = (tag: string) => {
    if (activeFilter === tag) {
      setActiveFilter(null);
    } else {
      setActiveFilter(tag);
    }
  };

  // Filter artworks based on active filter
  const filteredArtworks = useMemo(() => {
    if (!activeFilter) return [];
    return artworks.filter((artwork) => 
      artwork.tags?.includes(activeFilter)
    );
  }, [activeFilter, artworks]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
        setCurrentPageIndex(0);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openLightbox = (item: Artwork) => {
    setSelectedItem(item);
    setCurrentPageIndex(0);
  };

  const nextPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem?.images) return;
    setCurrentPageIndex((prev) => (prev + 1) % selectedItem.images!.length);
  };

  const prevPage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem?.images) return;
    setCurrentPageIndex((prev) => (prev - 1 + selectedItem.images!.length) % selectedItem.images!.length);
  };

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
      {/* Category Tabs */}
      {uniqueTags.length > 0 && (
        <div className={`${styles.filterContainer} ${!activeFilter ? styles.filterContainerInitial : ''}`}>
          <div className={styles.filterBar}>
            {uniqueTags.map((tag) => (
              <button
                key={tag}
                className={`${styles.filterButton} ${activeFilter === tag ? styles.activeFilter : ''}`}
                onClick={() => toggleFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {!activeFilter && (
            <p className={styles.categoryPrompt}>Select a category to view artworks</p>
          )}
        </div>
      )}

      {/* Masonry Grid */}
      {activeFilter && (
        <>
          <div className={styles.activeCategoryHeader}>
            <h2 className={styles.activeCategoryTitle}>
              {activeFilter} <span className={styles.artworkCount}>({filteredArtworks.length})</span>
            </h2>
            <button 
              className={styles.clearFilterButton}
              onClick={() => setActiveFilter(null)}
              title="Return to all categories"
            >
              ✕ Clear filter
            </button>
          </div>

          {filteredArtworks.length > 0 ? (
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
                    onClick={() => openLightbox(artwork)}
                  >
                    <div className={styles.imageWrapper}>
                      {artwork.type === 'video' && artwork.videoUrl ? (
                        <video 
                          src={artwork.videoUrl}
                          poster={urlFor(artwork.image).width(800).url()}
                          className={styles.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        artwork.image && (
                          <Image
                            src={urlFor(artwork.image).width(800).url()}
                            alt={artwork.title}
                            width={800}
                            height={1000}
                            className={styles.image}
                            priority={index < 4}
                            loading={index < 4 ? 'eager' : 'lazy'}
                            sizes="(max-width: 600px) 95vw, (max-width: 900px) 45vw, 30vw"
                          />
                        )
                      )}
                      {artwork.type === 'storybook' && (
                        <div className={styles.tagBadge} style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: 'white' }}>
                          📖 Multiple Images
                        </div>
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
          ) : (
            <div className={styles.emptyState}>
              <p>No artworks found under &quot;{activeFilter}&quot;.</p>
            </div>
          )}
        </>
      )}

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className={styles.lightboxOverlay}
          onClick={() => {
            setSelectedItem(null);
            setCurrentPageIndex(0);
          }}
        >
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => {
                setSelectedItem(null);
                setCurrentPageIndex(0);
              }}
            >&times;</button>
            
            {selectedItem.type === 'video' && selectedItem.videoUrl ? (
              <video 
                src={selectedItem.videoUrl}
                className={styles.lightboxImage}
                controls
                autoPlay
                playsInline
              />
            ) : selectedItem.type === 'storybook' && selectedItem.images && selectedItem.images.length > 0 ? (
              <>
                <button className={`${styles.navButton} ${styles.prevButton}`} onClick={prevPage}>←</button>
                <Image
                  src={urlFor(selectedItem.images[currentPageIndex]).width(1600).url()}
                  alt={`${selectedItem.title} - Page ${currentPageIndex + 1}`}
                  width={1600}
                  height={1600}
                  className={styles.lightboxImage}
                />
                <button className={`${styles.navButton} ${styles.nextButton}`} onClick={nextPage}>→</button>
                <div className={styles.pageIndicator}>
                  Page {currentPageIndex + 1} of {selectedItem.images.length}
                </div>
              </>
            ) : (
              <Image
                src={urlFor(selectedItem.image).width(1600).url()}
                alt={selectedItem.title}
                width={1600}
                height={1600}
                className={styles.lightboxImage}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
