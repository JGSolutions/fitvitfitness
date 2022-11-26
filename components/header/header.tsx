import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import utilStyles from "../../styles/Utils.module.css";

export default function Header() {
	return (

		<header className={`${styles.header}`}>
			{/* <div className={`container-lg ${styles.header}`}> */}

				<Link href="/">
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
					<ul className={utilStyles.menuOptions}>
						<li>
							<Link href="/about">About me</Link>
						</li>
						<li>
							<Link href="/personal-training">Personal training</Link>
						</li>
						<li>
							<Link href="/blog">Blog</Link>
						</li>
					</ul>
				</nav>
			{/* </div> */}
		</header>
	);
}
