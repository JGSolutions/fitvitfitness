import Image from 'next/image';
import styles from './Footer.module.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <div>
            <Image
                  src="/fitvit-logo.svg"
                  height={50}
                  width={50}
                  alt="fitVitfitness"
                />
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end'}}>
            <Link href="/privacy-policy/privacy-policy">
              <a>privacy policy</a>
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: '12px', width: '100%', justifyContent: 'center'}}>
          <div>© 2022 Created by </div><a href="https://www.jgsolutions.ca" style={{display: 'block'}}>JGSolutions</a>
        </div>
    </footer>
  );
}