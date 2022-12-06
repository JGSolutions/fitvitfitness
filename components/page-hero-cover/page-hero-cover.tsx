import styles from "./PageHeroCover.module.css";
import Link from 'next/link';

export default function PageHeroCover({headerTitle, subTitle, image, backHref}) {
	function displayBackLink() {
		if (backHref) {
			return (
				<Link href={backHref} passHref className={styles.backLink} rel="noopener noreferrer">
					&larr; Go Back
				</Link>
			)
		}
	}

	return (
		<div className={styles.container} style={{ backgroundImage: `url(${image})` }}>
			<div className="container-lg">
				<div className={styles.titleSection}>
					{ displayBackLink() }

					<h1 className={styles.h1}>{headerTitle}</h1>
					<div className={styles.subTitle}>{subTitle}</div>
				</div>
			</div>
		</div>
	);
}
