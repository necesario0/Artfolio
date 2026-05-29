'use client';

import { useState, useEffect } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start fading out after 1 second
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    // Completely remove from DOM after fade animation completes (0.5s)
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1500);

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
