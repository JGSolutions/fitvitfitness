import styles from "./Contact.module.css";
import Image from 'next/image'

export default function Contact() {
	return (
		<div className={styles.contactInfo}>
			<div className={styles.contactDetails}>
				<div className={styles.icon}>
					<Image src="/email.svg" width={24} height={24} alt="email" />
				</div>
				<p>christophercharbeldaoud@gmail.com</p>
			</div>

			<div className={styles.contactDetails}>
				<div className={styles.icon}>
					<Image src="/cell.svg" width={13} height={24} alt="cell phone" />
				</div>
				<p>514 29 3586 (call or text)</p>
			</div>
		</div>
	);
}
