import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1>Artist Name</h1>
        <p>A collection of fine art and digital illustrations exploring the intersection of nature and technology.</p>
        <div className={styles.cta}>
          <Link href="/gallery" className={styles.buttonPrimary}>
            View Gallery
          </Link>
          <Link href="/commission" className={styles.buttonSecondary}>
            Commission Me
          </Link>
        </div>
      </section>
    </main>
  );
}
