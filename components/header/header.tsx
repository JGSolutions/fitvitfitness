import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import utilStyles from "../../styles/Utils.module.css";
import { useState } from "react";
import SideNav from "../sidenav/sidenav";

export default function Header() {
	const [hamburgerOpen, setOpenPanel] = useState(false);
	const toogleMenu = () => {
		const isOpen = !hamburgerOpen;

		if (isOpen) {
			document.body.classList.add(styles.disableScroll);
		} else {
			document.body.classList.remove(styles.disableScroll);
		}

		setOpenPanel(isOpen);
	}

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
			
			<SideNav open={hamburgerOpen}>
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
			</SideNav>
		</>
	);
}
