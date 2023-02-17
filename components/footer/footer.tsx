import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import utilStyles from "../../styles/Utils.module.css";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<div className="container-lg">
			<footer className={styles.footer}>
				<div className={styles.logo}>
					<Image
					src="/logo.svg"
					height={34}
					width={28}
					alt="fitVitfitness"
					/>

					<div className={styles.copyRight}>© {currentYear} FitVitFitness</div>
				</div>

				<div className={styles.nav}>
					<nav>
						<ul className={`${utilStyles.menuOptions} ${styles.menuOptions}`}>
							<li>
								<Link href="mailto: christophercharbeldaoud@gmail.com">Contact Me</Link>
							</li>
							<li>
								<Link href="/privacy-policy"> Privacy Policy </Link>
							</li>
						</ul>
					</nav>

					<ul className={styles.socialMedia}>
						<li>
							<Link href="https://www.linkedin.com/in/christopher-daoud-9b72ba1a7/">
								<Image
									src="/social-icons/linkedin.svg"
									height={34}
									width={34}
									alt="LinkedIn"
									/>
							</Link>
						</li>
						<li>
							<Link href="https://www.instagram.com/fitness.lover.4life/">
								<Image
									src="/social-icons/instagram.svg"
									height={34}
									width={34}
									alt="instagram"
									/>
							</Link>
						</li>
						<li>
							<Link href="https://www.facebook.com/chris.daoud/">
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
		</div>
	);
}