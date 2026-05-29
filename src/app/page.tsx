import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>Visual Artist & Illustrator</p>
          <h1 className={styles.heroTitle}>
            Capturing the Essence of the Unseen
          </h1>
          <div className={styles.ctaButtons}>
            <Link href="/gallery" className={styles.primaryButton}>
              View Gallery
            </Link>
            <Link href="/commission" className={styles.secondaryButton}>
              Commission Me
            </Link>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className={styles.bioSection}>
        <h2>The Artist</h2>
        <p>
          Welcome to my digital gallery. I am a visual artist specializing in 
          narrative-driven illustrations and traditional oil techniques. My work 
          explores the intersection of light, emotion, and the quiet moments 
          that define our shared human experience.
        </p>
        <p>
          Based in my home studio, I create bespoke pieces for private collectors 
          and commercial projects alike. Every brushstroke is an invitation to 
          see the world through a more vibrant lens.
        </p>
      </section>
    </main>
  );
}
