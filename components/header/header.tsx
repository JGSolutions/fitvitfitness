import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="https://fitvitfitness.com">
        <div className={styles.logoContainer}>
          <Image
            src="/fitvit-logo.svg"
            height={35}
            width={116}
            alt="fitVitfitness"
          />
        </div>
      </Link>

      <nav>
        <ul className={styles.menuOptions}>
          <li>
            <Link href="/blog">About me</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
