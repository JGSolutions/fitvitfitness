import Image from 'next/image';
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

        <p>FitVit</p>
      </div>

        {/* <div className={styles.menuOptions}>
          <Link href="">
            <a>home</a>
          </Link>

          <Link href="">
            <a>about</a>
          </Link>
        </div> */}

        <button className={buttonStyle.fvButton}>login</button>
    </header>
  );
}