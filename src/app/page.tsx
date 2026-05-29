'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const [isBioVisible, setIsBioVisible] = useState(false);
  const bioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBioVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (bioRef.current) {
      observer.observe(bioRef.current);
    }

    return () => {
      if (bioRef.current) {
        observer.unobserve(bioRef.current);
      }
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBgContainer}>
          <Image
            src="/hero-bg.jpg"
            alt="Hero Background"
            fill
            priority
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        
        <div className={styles.heroContent}>
          <div className={`${styles.pfpWrapper} ${styles.animate}`} style={{ animationDelay: '0.2s' }}>
            <Image
              src="/hero-pfp.jpg"
              alt="chilovesyuu"
              width={160}
              height={160}
              className={styles.pfpImage}
              priority
            />
          </div>
          
          <h1 className={`${styles.heroTitle} ${styles.animate}`} style={{ animationDelay: '0.4s' }}>
            chilovesyuu
          </h1>
          <p className={`${styles.heroSubtitle} ${styles.animate}`} style={{ animationDelay: '0.6s' }}>
            ILLUSTRATOR & ANIMATOR
          </p>
          
          <div className={`${styles.heroLinks} ${styles.animate}`} style={{ animationDelay: '0.8s' }}>
            <Link href="/gallery" className={styles.heroLink}>
              View Gallery
            </Link>
            <Link href="/commission" className={styles.heroLink}>
              Commission Me
            </Link>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section 
        ref={bioRef}
        className={`${styles.bioSection} ${isBioVisible ? styles.bioVisible : ''}`}
      >
        <h2 className={styles.bioTitle}>The Artist</h2>
        <div className={styles.bioText}>
          <p>
            Hello. I am @chilovesyuu, Ji in real life. I am currently a college student studying animation. I can make digital and traditional illustrations, character portraits, 3D Modelling, 2D and 3D animation.
          </p>
          <p>
            I really do enjoy studying and drawing background illustrations, as I was way more used to doing character drawings before. For anything more personal: I like gardening, taking care of my cats, gaming, and maybe sewing. I am a very shy and slow person but I&apos;m super nice and friendly.
          </p>
        </div>
      </section>
    </main>
  );
}
