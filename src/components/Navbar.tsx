import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
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
