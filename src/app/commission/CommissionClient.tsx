'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

interface Pricing {
  label: string;
  value: string;
}

interface CommissionType {
  _id: string;
  name: string;
  image: SanityImage;
  prices: Pricing[];
  order: number;
}

interface CommissionClientProps {
  settings: { commissionsOpen: boolean };
  types: CommissionType[];
}

export default function CommissionClient({ settings, types }: CommissionClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextItem = () => {
    if (!types.length) return;
    setActiveIndex((prev) => (prev + 1) % types.length);
  };
  const prevItem = () => {
    if (!types.length) return;
    setActiveIndex((prev) => (prev - 1 + types.length) % types.length);
  };

  // Handle Commissions Closed state
  if (settings?.commissionsOpen === false) {
    return (
      <div className={styles.closedContainer}>
        <div className={styles.closedContent}>
          <h1 className={styles.title}>Commissions Closed</h1>
          <p className={styles.message}>
            I am not currently accepting new commission requests. 
            Please check back later or follow my social media for updates on when they will re-open!
          </p>
          <Link href="/" className={styles.requestButton}>Back to Home</Link>
        </div>
      </div>
    );
  }

  if (!types.length) {
    return (
      <div className={styles.loadingContainer}>
        <p>No commission types found. Please add some in Sanity Studio!</p>
      </div>
    );
  }

  const currentType = types[activeIndex];
  const leftType = types[(activeIndex - 1 + types.length) % types.length];
  const rightType = types[(activeIndex + 1) % types.length];

  return (
    <>
      {/* LEFT SIDE: Interactive Slider */}
      <div 
        className={styles.leftSide}
        style={{ animationName: 'none', opacity: 1, transform: 'none' }}
      >
        <p className={styles.clickHint}>Click photo to view full image</p>
        <div className={styles.carousel} key={currentType._id}>
          {/* Left Box (Fade) - Click to navigate PREV */}
          <div 
            className={`${styles.box} ${styles.sideBox} ${styles.left}`} 
            onClick={prevItem}
          >
            {leftType.image && (
              <Image 
                src={urlFor(leftType.image).width(300).url()} 
                alt={leftType.name} 
                width={300}
                height={450}
                className={styles.carouselImage} 
                sizes="(max-width: 600px) 60px, (max-width: 900px) 100px, 150px"
              />
            )}
          </div>

          {/* Center Box (Focus) - Click to ZOOM IN */}
          <div 
            className={`${styles.box} ${styles.centerBox}`}
            onClick={() => setSelectedImage(urlFor(currentType.image).url())}
          >
            {currentType.image && (
              <Image 
                src={urlFor(currentType.image).width(600).url()} 
                alt={currentType.name} 
                width={600}
                height={900}
                className={styles.carouselImage} 
                priority
                sizes="(max-width: 600px) 120px, (max-width: 900px) 180px, 300px"
              />
            )}
          </div>

          {/* Right Box (Fade) - Click to navigate NEXT */}
          <div 
            className={`${styles.box} ${styles.sideBox}`} 
            onClick={nextItem}
          >
            {rightType.image && (
              <Image 
                src={urlFor(rightType.image).width(300).url()} 
                alt={rightType.name} 
                width={300}
                height={450}
                className={styles.carouselImage} 
                sizes="(max-width: 600px) 60px, (max-width: 900px) 100px, 150px"
              />
            )}
          </div>
        </div>

        <h2 className={styles.typeLabel}>{currentType.name}</h2>

        <div className={styles.priceList}>
          {currentType.prices?.map((item, index) => (
            <div key={index} className={styles.priceItem}>
              <span className={styles.priceLabel}>{item.label}</span>
              <span className={styles.priceValue}>{item.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.paymentInfo}>
          <Image 
            src="/paypal-logo.png" 
            alt="PayPal" 
            width={24}
            height={24}
            className={styles.paymentLogo} 
          />
          <span className={styles.paymentHandle}>@epicswagcat</span>
        </div>

        <Link href="/contact" className={styles.requestButton}>
          Request Commission
        </Link>
      </div>

      {/* RIGHT SIDE: Terms, Do's & Don'ts, Payment */}
      <div className={styles.rightSide}>
        {/* Do's & Don'ts Row */}
        <div className={styles.dosDontsWrapper}>
          {/* Do's Individual Dark Container */}
          <div className={styles.darkContainer}>
            <h3 className={`${styles.sectionTitle} ${styles.dos}`}>DO&apos;S</h3>
            <ul className={styles.list}>
              <li>Original Characters</li>
              <li>Fanart</li>
              <li>Kemonomimi</li>
              <li>Ships</li>
              <li>Yumeship</li>
              <li>Semi-NSFW</li>
            </ul>
          </div>

          {/* Don'ts Individual Dark Container */}
          <div className={styles.darkContainer}>
            <h3 className={`${styles.sectionTitle} ${styles.donts}`}>DON&apos;TS</h3>
            <ul className={styles.list}>
              <li>Full NSFW</li>
              <li>Gore</li>
              <li>Furry</li>
              <li>Mecha</li>
              <li>Overly complicated designs</li>
            </ul>
          </div>
        </div>

        {/* General Terms & Revisions (Standard Theme) */}
        <div className={styles.generalTerms}>
          <h3 className={styles.sectionTitleLight}>GENERAL TERMS</h3>
          <ul className={styles.list}>
            <li>No refunds once the sketch phase has started.</li>
            <li>Redistributing or claiming my work as your own is prohibited.</li>
            <li>My artwork may not be used for AI training or NFTs.</li>
            <li>Please credit me as the artist when posting online.</li>
            <li>I reserve the right to decline commissions for any reason.</li>
          </ul>

          <h3 className={styles.sectionTitleLight}>PAYMENT</h3>
          <div className={styles.paymentGrid}>
            <div>
              <h4 style={{ marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Non-Animated</h4>
              <ul className={styles.list}>
                <li>Full payment is required before I start the commission.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Animated</h4>
              <ul className={styles.list}>
                <li>50% upfront before rough animation</li>
                <li>Remaining 50% before coloring/rendering/compositing</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.sectionTitleLight}>REVISIONS</h3>
          <ul className={styles.list}>
            <li>Revisions are limited to minor adjustments only.</li>
            <li>Up to 3 free revisions during the sketch phase.</li>
            <li>Up to 2 free color correction revisions.</li>
            <li>Major changes or requests for unspecified elements will not be accepted.</li>
          </ul>

          <h3 className={styles.sectionTitleLight}>DEADLINES</h3>
          <p>Delivery times may vary depending on the commission type, complexity, content, and queue order.</p>

          <h3 className={styles.sectionTitleLight}>INTELLECTUAL PROPERTY RIGHTS</h3>
          <ul className={styles.list}>
            <li>I retain full copyright ownership of the artwork.</li>
            <li>Finished commissions may be displayed in my portfolio and on my social media pages.</li>
          </ul>
        </div>
      </div>

      {/* LIGHTBOX MODAL (Moved here to be outside layout column stacking contexts) */}
      {selectedImage && (
        <div 
          className={styles.lightboxOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.lightboxContent}>
            <button className={styles.closeButton}>&times;</button>
            <Image
              src={selectedImage}
              alt="Enlarged commission example"
              width={1600}
              height={1600}
              className={styles.lightboxImage}
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
