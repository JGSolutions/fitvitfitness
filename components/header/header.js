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
            <Link href="">
            <a>home</a>
          </Link>

          <Link href="">
            <a>about</a>
          </Link>
        </header>
    );
  }