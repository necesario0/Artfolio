'use client';

import { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start fading out after 0.7 seconds
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 700);

    // Completely remove from DOM after fade animation completes (0.4s)
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div className={`${styles.overlay} ${!isVisible ? styles.fadeOut : ''}`}>
      <h1 className={styles.text}>chilovesyuu</h1>
    </div>
  );
}
