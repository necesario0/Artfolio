'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('@chilovesyuu');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.message}>
        For more information or inquiries, feel free to reach out via Discord or direct message. 
        I&apos;m always happy to connect for collaborations or just to say hello!
      </p>
      <p className={styles.credits}>
        Special thanks to my husband for developing this site. Feel free to contact him at his instagram!
      </p>

      <div className={styles.cardGrid}>
        {/* Discord Card */}
        <button 
          onClick={handleCopyDiscord} 
          className={`${styles.card} ${styles.discordButton}`}
          title="Click to copy Discord username"
          type="button"
        >
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.platform}>
              Discord {copied ? <span className={styles.copiedBadge}>Copied!</span> : <span className={styles.clickHint}>(Click to copy)</span>}
            </span>
            <span className={styles.handle}>@chilovesyuu</span>
          </div>
        </button>

        {/* X (Twitter) Card */}
        <a 
          href="https://x.com/chilovesyuu" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.card}
        >
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.platform}>X / Twitter</span>
            <span className={styles.handle}>@chilovesyuu</span>
          </div>
        </a>

        {/* Developer Instagram Card */}
        <a 
          href="https://instagram.com/necesario_0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.card}
        >
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.85.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.platform}>Site&apos;s Developer</span>
            <span className={styles.handle}>@necesario_0</span>
          </div>
        </a>
      </div>
    </main>
  );
}
