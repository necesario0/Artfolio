'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface Pricing {
  label: string;
  value: string;
}

interface CommissionType {
  id: number;
  name: string;
  prices: Pricing[];
}

const COMMISSION_DATA: CommissionType[] = [
  {
    id: 0,
    name: 'Head',
    prices: [{ label: 'Flat Price', value: '$10' }],
  },
  {
    id: 1,
    name: 'Half',
    prices: [{ label: 'Flat Price', value: '$20' }],
  },
  {
    id: 2,
    name: 'Full',
    prices: [{ label: 'Flat Price', value: '$30' }],
  },
  {
    id: 3,
    name: 'Background',
    prices: [{ label: 'Starting Price', value: '$20' }],
  },
  {
    id: 4,
    name: 'Animation',
    prices: [{ label: 'Starting Price', value: '$60' }],
  },
  {
    id: 5,
    name: 'GIF',
    prices: [{ label: 'Flat Price', value: '$50' }],
  },
];

export default function CommissionPage() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second item

  const nextItem = () => setActiveIndex((prev) => (prev + 1) % COMMISSION_DATA.length);
  const prevItem = () => setActiveIndex((prev) => (prev - 1 + COMMISSION_DATA.length) % COMMISSION_DATA.length);

  const currentType = COMMISSION_DATA[activeIndex];
  const leftType = COMMISSION_DATA[(activeIndex - 1 + COMMISSION_DATA.length) % COMMISSION_DATA.length];
  const rightType = COMMISSION_DATA[(activeIndex + 1) % COMMISSION_DATA.length];

  return (
    <div className={styles.container}>
      {/* LEFT SIDE: Interactive Slider */}
      <div className={styles.leftSide}>
        <div className={styles.carousel}>
          {/* Left Box (Fade) */}
          <div 
            className={`${styles.box} ${styles.sideBox}`} 
            onClick={prevItem}
          >
            {/* Image placeholder or label */}
          </div>

          {/* Center Box (Focus) */}
          <div className={`${styles.box} ${styles.centerBox}`}>
            {/* Image placeholder for currentType */}
          </div>

          {/* Right Box (Fade) */}
          <div 
            className={`${styles.box} ${styles.sideBox}`} 
            onClick={nextItem}
          >
            {/* Image placeholder */}
          </div>
        </div>

        <h2 className={styles.typeLabel}>{currentType.name}</h2>

        <div className={styles.priceList}>
          {currentType.prices.map((item, index) => (
            <div key={index} className={styles.priceItem}>
              <span className={styles.priceLabel}>{item.label}</span>
              <span className={styles.priceValue}>{item.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.paymentInfo}>
          <img 
            src="/paypal-logo.png" 
            alt="PayPal" 
            className={styles.paymentLogo} 
          />
          <span className={styles.paymentHandle}>@epicswagcat</span>
        </div>
      </div>

      {/* RIGHT SIDE: Terms, Do's & Don'ts, Payment */}
      <div className={styles.rightSide}>
        {/* Do's and Don'ts Dark Container */}
        <div className={styles.darkContainer}>
          <div className={styles.columnGrid}>
            <div>
              <h3 className={`${styles.sectionTitle} ${styles.dos}`}>Do&apos;s</h3>
              <ul className={styles.list}>
                <li>Original Characters</li>
                <li>Fanart</li>
                <li>Kemonomimi</li>
                <li>Ships</li>
                <li>Yumeship</li>
                <li>Semi-NSFW</li>
              </ul>
            </div>
            <div>
              <h3 className={`${styles.sectionTitle} ${styles.donts}`}>Don&apos;ts</h3>
              <ul className={styles.list}>
                <li>Full NSFW</li>
                <li>Gore</li>
                <li>Furry</li>
                <li>Mecha</li>
                <li>Overly complicated designs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Dark Container */}
        <div className={styles.darkContainer}>
          <h3 className={styles.sectionTitle}>Payment</h3>
          <div className={styles.columnGrid}>
            <div>
              <h4 style={{ marginBottom: '0.5rem', color: '#ccc', fontSize: '0.8rem', textTransform: 'uppercase' }}>Non-Animated</h4>
              <ul className={styles.list}>
                <li>Full payment is required before I start the commission.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem', color: '#ccc', fontSize: '0.8rem', textTransform: 'uppercase' }}>Animated</h4>
              <ul className={styles.list}>
                <li>50% upfront before rough animation</li>
                <li>Remaining 50% before coloring/rendering/compositing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* General Terms & Revisions (Standard Theme) */}
        <div className={styles.generalTerms}>
          <h3>General Terms</h3>
          <ul className={styles.list}>
            <li>No refunds once the sketch phase has started.</li>
            <li>Redistributing or claiming my work as your own is prohibited.</li>
            <li>My artwork may not be used for AI training or NFTs.</li>
            <li>Please credit me as the artist when posting online.</li>
            <li>I reserve the right to decline commissions for any reason.</li>
          </ul>

          <h3>Revisions</h3>
          <ul className={styles.list}>
            <li>Revisions are limited to minor adjustments only.</li>
            <li>Up to 3 free revisions during the sketch phase.</li>
            <li>Up to 2 free color correction revisions.</li>
            <li>Major changes or requests for unspecified elements will not be accepted.</li>
          </ul>

          <h3>Deadlines</h3>
          <p>Delivery times may vary depending on the commission type, complexity, content, and queue order.</p>

          <h3>Intellectual Property Rights</h3>
          <ul className={styles.list}>
            <li>I retain full copyright ownership of the artwork.</li>
            <li>Finished commissions may be displayed in my portfolio and on my social media pages.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
