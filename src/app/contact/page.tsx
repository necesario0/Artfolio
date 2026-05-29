import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.message}>
        I&apos;m currently open for commissions and freelance work. 
        Feel free to reach out via email or direct message for inquiries, 
        collaborations, or just to say hello!
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
      </div>
    </div>
  );
}
