'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoadingScreen from '@/components/LoadingScreen';
import { client } from '@/sanity/lib/client';
import styles from './page.module.css';

const SETTINGS_QUERY = `*[_type == "siteSettings"][0]{commissionsOpen}`;

export default function Home() {
  const [isBioVisible, setIsBioVisible] = useState(false);
  const [commissionsOpen, setCommissionsOpen] = useState(true);
  const bioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Fetch settings on client mount since it's a client component
    client.fetch(SETTINGS_QUERY).then(data => {
      setCommissionsOpen(data?.commissionsOpen ?? true);
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBioVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentBioRef = bioRef.current;
    if (currentBioRef) {
      observer.observe(currentBioRef);
    }

    return () => {
      if (currentBioRef) {
        observer.unobserve(currentBioRef);
      }
    };
  }, []);

  return (
    <main>
      <LoadingScreen />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBgContainer}>
          <Image
            src="/hero-bg.jpg"
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            className={styles.heroBgImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        
        <div className={styles.heroContent}>
          <div className={`${styles.pfpWrapper} ${styles.animate}`} style={{ animationDelay: '0.2s' }}>
            <Image
              src="/hero-pfp.jpg"
              alt="chilovesyuu"
              fill
              className={styles.pfpImage}
              priority
              sizes="(max-width: 768px) 120px, (max-width: 1200px) 25vw, 160px"
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
              View Gallery <span className={styles.linkArrow}>→</span>
            </Link>
            {commissionsOpen && (
              <Link href="/commission" className={styles.heroLink}>
                Commission Me <span className={styles.linkArrow}>→</span>
              </Link>
            )}
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

        <h3 className={styles.softwareHeader}>Software I Use</h3>
        <div className={styles.softwareGrid}>
          <div className={styles.softwareLogoWrapper} title="Krita">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/7/73/Calligrakrita-base.svg" 
              alt="Krita" 
              width={50} 
              height={50} 
              className={styles.softwareLogo} 
            />
          </div>
          <div className={styles.softwareLogoWrapper} title="Photoshop">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" 
              alt="Photoshop" 
              width={50} 
              height={50} 
              className={styles.softwareLogo} 
            />
          </div>
          <div className={styles.softwareLogoWrapper} title="Autodesk Maya">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Autodesk_Maya_version_2023_icon.jpg" 
              alt="Autodesk Maya" 
              width={50} 
              height={50} 
              className={styles.softwareLogo} 
            />
          </div>
          <div className={styles.softwareLogoWrapper} title="DaVinci Resolve">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" 
              alt="DaVinci Resolve" 
              width={50} 
              height={50} 
              className={styles.softwareLogo} 
            />
          </div>
          <div className={styles.softwareLogoWrapper} title="After Effects">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" 
              alt="After Effects" 
              width={50} 
              height={50} 
              className={styles.softwareLogo} 
            />
          </div>
          <div className={styles.softwareLogoWrapper} title="Toon Boom">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Toon_Boom_2022_logo.svg" 
              alt="Toon Boom" 
              width={50} 
              height={50} 
              className={styles.softwareLogo} 
            />
          </div>
        </div>
      </section>
    </main>
  );
}
