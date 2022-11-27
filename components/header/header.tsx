import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import utilStyles from "../../styles/Utils.module.css";
import { useEffect, useState, useRef } from "react";

export default function Header() {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const node = useRef();
	const toogleMenu = () => {
		setHamburgerOpen(!hamburgerOpen);
	}

	const useOnClickOutside = (ref, handler) => {
		useEffect(() => {
			const listener = event => {
				if (hamburgerOpen) {
					handler(event);
				}
			};
			document.addEventListener('pointerdown', listener);
			return () => document.removeEventListener('pointerdown', listener);
		},
		[ref, handler],
		);
	};

	// useOnClickOutside(node, () => toogleMenu());
	return (
		<>
			<header className={`${styles.header}`}>
				<Link href="/">
					<div className={styles.logoContainer}>
						<Image
						src="/fitvit-logo.svg"
						height={35}
						width={116}
						alt="fitVitfitness logo"
						/>
					</div>
				</Link>

				<nav className={styles.menuNavigation}>
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

				<button className={styles.menuButton} onClick={toogleMenu}>
					<Image
						src="/menu.svg"
						height={28}
						width={32}
						alt="menu"
						/>
				</button>
			</header>

			<div className={`${styles.menuPanel} ${hamburgerOpen ? styles.openPanel : styles.closePanel}`} ref={node}>
				<div className={styles.headerPanel}>
					<button className={styles.menuButton} onClick={toogleMenu}>
						<Image
							src="/close.svg"
							height={28}
							width={32}
							alt="menu"
							/>
					</button>
				</div>
				<ul className={styles.menuPanelLinks}>
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
			</div>
		</>
	);
}
