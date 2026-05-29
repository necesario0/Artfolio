import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.contactGrid}>
        {/* X (Twitter) */}
        <a 
          href="https://x.com/chilovesyuu" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.contactItem}
        >
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <span className={styles.handle}>@chilovesyuu</span>
        </a>

        {/* Gmail */}
        <a 
          href="mailto:j12206u@gmail.com" 
          className={styles.contactItem}
        >
          <div className={`${styles.iconWrapper} ${styles.hexagon}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <span className={styles.handle}>j12206u@gmail.com</span>
        </a>
      </div>
    </div>
  );
}
