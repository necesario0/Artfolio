'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  // Hide Navbar on the studio route
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <nav className={`${styles.nav} ${!isVisible ? styles.tucked : ''}`}>
      <div className={styles.logo}>
        <Link href="/">ARTFOLIO</Link>
      </div>
      <ul className={styles.links}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
        <li><Link href="/commission">Commission</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
