import styles from './page.module.css';

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.message}>
        For more information or inquiries, feel free to reach out via email or direct message. 
        I&apos;m always happy to connect for collaborations or just to say hello!
      </p>
      <p className={styles.credits}>
        Special thanks to my husband for developing this site. Feel free to contact him at his instagram!
      </p>

      <div className={styles.cardGrid}>
        {/* Gmail Card */}
        <a 
          href="mailto:j12206u@gmail.com" 
          className={styles.card}
        >
          <div className={styles.iconWrapper}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.platform}>Email</span>
            <span className={styles.handle}>j12206u@gmail.com</span>
          </div>
        </a>

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
