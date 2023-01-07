import styles from "./PageHeader.module.css";
import Link from 'next/link';

export default function PageHeader({headerTitle, subTitle, image, backHref}) {
	function displayBackLink() {
		if (backHref) {
			return (
				<Link href={backHref} passHref className={styles.backLink} rel="dofollow">
					&larr; Go Back
				</Link>
			)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.titleSection}>
				<div>
		
					{ displayBackLink() }

					<h1 className={styles.h1}>{headerTitle}</h1>
					<div className={styles.subTitle}>{subTitle}</div>
				</div>
			</div>
			<div className={styles.coverImage} style={{ backgroundImage: `url(${image})` }}></div>
		</div>
	);
}
