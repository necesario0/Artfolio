import { client } from '@/sanity/lib/client';
import GalleryGrid from './GalleryGrid';
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
  // Fetch data from Sanity on the server
  const artworks = await client.fetch(ARTWORKS_QUERY);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Art Gallery</h1>
      <GalleryGrid artworks={artworks} />
    </div>
  );
}
