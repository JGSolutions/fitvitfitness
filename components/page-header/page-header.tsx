import styles from "./PageHeader.module.css";

export default function PageHeader({headerTitle, subTitle, image}) {
	return (
		<div className={styles.container}>
			<div className={styles.titleSection}>
				<div>
					{/* <Link href="/blog" passHref className={utilStyles.back} rel="noopener noreferrer">
						&larr; Go Back
					</Link> */}
					<h1 className={styles.h1}>{headerTitle}</h1>
					<div className={styles.subTitle}>{subTitle}</div>
				</div>
			</div>
			<div className={styles.coverImage} style={{ backgroundImage: `url(${image})` }}></div>
		</div>
	);
}
