import styles from './ScrollSlider.module.css';

export default function ScrollSlider({children}) {
	return (
		<div className={styles.container}>
			{children}
		</div>
	);
}