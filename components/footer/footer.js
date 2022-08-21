import Image from 'next/image';
import styles from './Footer.module.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <div style={{ display: 'flex' }}>
          <Image
            src="/fitvit-logo.svg"
            height={35}
            width={35}
            alt="fitVitfitness"
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '160px'}}>
          <Link href="mailto:jerrygag@gmail.com">
            <a>Contact Us</a>
          </Link>
    
          <Link href="/privacy-policy/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex', fontSize: '12px', width: '100%', justifyContent: 'center'}}>
        <div>© 2022 Created by </div><a href="https://www.jgsolutions.ca">JGSolutions.ca</a>
      </div>
    </footer>
  );
}