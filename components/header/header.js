import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
        <Image
            src="/fitvit-logo.svg"
            height={60}
            width={60}
            alt="fitVitfitness"
          />
          <Link href="/privacy-policy/privacy-policy">
            <a>privacy policy</a>
          </Link>
        </header>
    );
  }