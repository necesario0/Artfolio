import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import styles from './page.module.css';

// This is a GROQ query to fetch all artworks from Sanity
const ARTWORKS_QUERY = `*[_type == "artwork"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  image,
  medium,
  year,
  category
}`;

export default async function GalleryPage() {
  // Fetch data from Sanity
  const artworks = await client.fetch(ARTWORKS_QUERY);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Gallery</h1>

      {artworks.length === 0 ? (
        <div className={styles.emptyState}>
          <p>The gallery is currently being curated. Please check back soon!</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            (Tip: Use the Sanity Studio at /studio to add your first artwork!)
          </p>
        </div>
      ) : (
        <div className={styles.grid}>
          {artworks.map((artwork: any) => (
            <div key={artwork._id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {artwork.image && (
                  <Image
                    src={urlFor(artwork.image).width(600).url()}
                    alt={artwork.image.alt || artwork.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          ))}
        </div>
      )}
    </div>
  );
}
