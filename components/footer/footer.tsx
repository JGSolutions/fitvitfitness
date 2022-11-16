import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css'
import utilStyles from "../../styles/utils.module.css";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.logo}>
				<Image
				src="/logo.svg"
				height={43}
				width={37}
				alt="fitVitfitness"
				/>

				<div className={styles.copyRight}>© 2023 FitVitFitness</div>
			</div>

			<div className={styles.nav}>
				<nav>
					<ul className={utilStyles.menuOptions}>
						<li>
							<Link href="mailto:jerrygag@gmail.com">Contact Me</Link>
						</li>
						<li>
							<Link href="/privacy-policy/privacy-policy"> Privacy Policy </Link>
						</li>
					</ul>
				</nav>


				<ul className={styles.socialMedia}>
					<li>
						<Link href="/blog">
							<Image
								src="/social-icons/linkedin.svg"
								height={34}
								width={34}
								alt="LinkedIn"
								/>
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<Image
								src="/social-icons/instagram.svg"
								height={34}
								width={34}
								alt="instagram"
								/>
						</Link>
					</li>
					<li>
						<Link href="/blog">
							<Image
								src="/social-icons/facebook.svg"
								height={34}
								width={34}
								alt="Facebook"
								/>
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}