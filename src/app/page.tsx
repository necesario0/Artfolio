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
        <div className={styles.artistProfileHeader}>
          <div className={styles.artistAvatarPlaceholder}>
            <div className={styles.avatarCircle} title="Profile Picture Placeholder">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className={styles.avatarIcon}
                aria-label="Picture placeholder"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <h2 className={styles.artistName}>Jillianne Sibal</h2>
          <p className={styles.artistLocation}>📍 Philippines, NCR</p>
        </div>

        <h3 className={styles.bioTitle}>About the Artist</h3>
        <div className={styles.bioText}>
          <p>
            Ever since I was a child, I’ve always enjoyed exploring and learning new things. I like continuously expanding my skills especially when it comes to drawing and other forms of art, which is why I became really interested in multimedia arts. Right now, I’ve been working on improving my tattooing skills while continuing to create digital artwork.
          </p>
          <p>
            I’ve been drawing for as long as I can remember. I took Visual and Graphic Design in high school and pursued Multimedia Arts and Animation in college, where I developed my skills in 2D and 3D animation, character and prop design, storyboarding, and visual storytelling.
          </p>
          <p>
            I mainly use Krita as my drawing software but lately, I’ve been exploring Adobe Photoshop and Clip Studio Paint as alternatives. For 3D modeling, I’m more proficient in Maya while I use Blender primarily for sculpting. For rigging and other animation-related tasks, I’m still learning Toon Boom Harmony and currently exploring other software and alternatives to expand my skills.
          </p>
          <p>
            I work very efficiently while maintaining quality in my work. I always make sure to meet deadlines and submit on time. Besides that I&apos;m really friendly and easy to work with!
          </p>
        </div>

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
          <div className={styles.softwareLogoWrapper} title="Clip Studio Paint">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/2026_csp_logo_RGB_1200.png" 
              alt="Clip Studio Paint" 
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
          <div className={styles.softwareLogoWrapper} title="Blender">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" 
              alt="Blender" 
              width={50} 
              height={50} 
              className={styles.softwareLogo} 
            />
          </div>
          <div className={styles.softwareLogoWrapper} title="Toon Boom Harmony">
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/Toon_Boom_2022_logo.svg" 
              alt="Toon Boom Harmony" 
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
        </div>
      </section>
    </main>
  );
}
