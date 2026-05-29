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
    prices: [{ label: 'Flat Price', value: '10' }],
  },
  {
    id: 1,
    name: 'Half',
    prices: [{ label: 'Flat Price', value: '20' }],
  },
  {
    id: 2,
    name: 'Full',
    prices: [{ label: 'Flat Price', value: '30' }],
  },
  {
    id: 3,
    name: 'Background',
    prices: [{ label: 'Starting Price', value: '20' }],
  },
  {
    id: 4,
    name: 'Animation',
    prices: [{ label: 'Starting Price', value: '60' }],
  },
  {
    id: 5,
    name: 'GIF',
    prices: [{ label: 'Flat Price', value: '50' }],
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
      </div>

      {/* RIGHT SIDE: Terms of Service */}
      <div className={styles.rightSide}>
        <h2 className={styles.tosTitle}>Terms of Service</h2>
        <div className={styles.tosText}>
          {`1. PAYMENT: 50% upfront, 50% after completion.
2. TIMELINE: 2-4 weeks depending on complexity.
3. REVISIONS: Up to 3 free revisions during the sketch phase.
4. USAGE: Personal use only unless a commercial license is purchased.
5. CANCELLATION: Non-refundable deposit if the work has already started.

Please provide a clear description and visual references when submitting your request.

More details can be discussed via email.`}
        </div>
      </div>
    </div>
  );
}
