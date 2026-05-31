'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar({ commissionsOpen = true }: { commissionsOpen?: boolean }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // On mobile, we keep it visible more often
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && !isMenuOpen) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up or menu is open
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Hide Navbar on the studio route
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <nav className={`${styles.nav} ${!isVisible ? styles.tucked : ''} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.logo}>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>ARTFOLIO</Link>
      </div>

      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${styles.links} ${isMenuOpen ? styles.linksVisible : ''}`}>
        <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
        {commissionsOpen && <li><Link href="/commission" onClick={() => setIsMenuOpen(false)}>Commission</Link></li>}
        <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
