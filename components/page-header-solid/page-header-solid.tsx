import styles from "./PageHeaderSolid.module.css";

export default function PageHeaderSolid({headerTitle, subTitle}) {
	return (
		<div className={`${styles.container}`}>
			<div className={`container-lg ${styles.titleSection}`}>
				<div>
					<h1 className={styles.h1}>{headerTitle}</h1>
					<div className={styles.subTitle}>{subTitle}</div>
				</div>
			</div>
		</div>
	);
}
