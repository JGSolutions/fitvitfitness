import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css'
import buttonStyle from '../../styles/Button.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
            src="/fitvit-logo.svg"
            height={50}
            width={50}
            alt="fitVitfitness"
          />

        <p className={styles.logoText}>
          <span className={styles.logoTextColor1}>Fit</span>
          <span className={styles.logoTextColor2}>Vit</span>
        </p>
      </div>

        {/* <div className={styles.menuOptions}>
          <Link href="">
            <a>home</a>
          </Link>

          <Link href="">
            <a>about</a>
          </Link>
        </div> */}

        <Link href="https://app.fitvitfitness.com">
          <a className={buttonStyle.fvButton}>login</a>
        </Link>

    </header>
  );
}