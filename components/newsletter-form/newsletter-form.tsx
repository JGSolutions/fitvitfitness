import styles from "./Newsletter.module.css";
import { useRef, useState } from 'react';

export default function NewsletterForm() {
	const inputRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [isCompleted, setCompleted] = useState(false);
	
	const subscribeUser = async (e) => {
		e.preventDefault();
		setLoading(true);

		await fetch('https://fitvit-api.web.app/subscribe-newsletter', {
		body: JSON.stringify({
			email: inputRef.current.value,
		}),

		headers: {
			'Content-Type': 'application/json',
		},

		method: 'POST',
		});

		setLoading(false);
		setCompleted(true);

		inputRef.current.value = "";
	};
	return (
		<>
			{!isCompleted && (
				<form onSubmit={subscribeUser} className={styles.form}>
					<input
						type="email"
						className={styles.inputField}
						id="email-input"
						name="email"
						disabled={loading}
						placeholder="email address"
						ref={inputRef}
						required
						autoCapitalize="off"
						autoCorrect="off"
					/>

					<button type="submit" disabled={loading} className={styles.button}>
						Subscribe
					</button>
				</form>
			)}

			{isCompleted && (
				<div className={styles.subscribedSuccessfully}>
					Thank you for subscribing to our newsletter.
				</div>
			)}
		</>
	);
}
