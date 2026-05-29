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
          <svg className={styles.paymentLogo} viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.067 8.478c.492.88.556 2.014.307 3.292-.472 2.413-2.122 4.03-4.397 4.03h-1.897c-.476 0-.888.32-.995.787l-.017.076-1.108 4.699-.011.044c-.044.185-.209.32-.403.32H7.939c-.167 0-.315-.102-.369-.255l-.013-.046 1.101-4.664.033-.14c.107-.467.52-.787.995-.787h1.162c2.755 0 4.896-1.158 5.526-3.99.231-1.038.164-1.926-.266-2.607-.442-.699-1.252-1.122-2.316-1.122H8.384c-.475 0-.888.32-.995.787l-.017.076L4.8 19.333c-.044.185-.209.32-.403.32H.833c-.167 0-.315-.102-.369-.255l-.013-.046 2.585-10.952c.107-.467.52-.787.995-.787h6.645c2.324 0 4.225.26 5.553 1.053 1.341.8 2.079 2.014 1.838 4.14-.153.774-.413 1.45-.764 2.014-.342.553-.787 1.011-1.312 1.357-.514.339-1.103.583-1.748.723.645-.14 1.234-.384 1.748-.723.525-.346.97-.804 1.312-1.357.351-.564.611-1.24.764-2.014.241-2.126-.497-3.34-1.838-4.14-1.328-.793-3.229-1.053-5.553-1.053H4.436c-.167 0-.315-.102-.369-.255l-.013-.046 1.09-4.622c.107-.467.52-.787.995-.787h8.807c2.324 0 4.225.26 5.553 1.053 1.341.8 2.079 2.014 1.838 4.14-.153.774-.413 1.45-.764 2.014z" />
          </svg>
          <span className={styles.paymentHandle}>@epicswagcat</span>
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
