import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <Link href="https://fitvitfitness.com">
          <div className={styles.logoContainer}>
            <Image
                src="/fitvit-logo.svg"
                height={35}
                width={35}
                alt="fitVitfitness"
              />
          

            <p className={styles.logoText}>
              <span className={styles.logoTextColor1}>Fit</span>
              <span className={styles.logoTextColor2}>Vit</span>
            </p>
          </div>
        </Link>

        <Link href="/blog"> blog</Link>

    </header>
  );
}