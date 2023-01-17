import styles from "./Newsletter.module.css";
import { useRef, useState } from 'react';

export default function NewsletterForm() {
	const inputRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [isCompleted, setCompleted] = useState(false);
	const [isError, setError] = useState(false);
	
	const subscribeUser = async (e) => {
		e.preventDefault();
		setLoading(true);

		const res = await fetch('https://fitvit-api.web.app/subscribe-newsletter', {
		body: JSON.stringify({
			email: inputRef.current.value,
		}),

		headers: {
			'Content-Type': 'application/json',
		},

		method: 'POST',
		});
		
		if (res.status >= 400) {
			setError(true);
		} else {
			setCompleted(true);
			inputRef.current.value = "";
		}
		setLoading(false);
	};
	return (
		<>
			{!isCompleted && (
				<>
					<form onSubmit={subscribeUser} className={styles.form}>
						<input
							type="email"
							className={styles.inputField}
							id="email-input"
							name="email"
							disabled={loading}
							placeholder="Your Email Address"
							ref={inputRef}
							required
							autoCapitalize="off"
							autoCorrect="off"
						/>

						<button type="submit" disabled={loading} className={styles.button}>
							Subscribe
						</button>
					</form>
					{isError && (
						<div className={styles.error}>Email has been registered. If not please contact us!</div>
					)}
				</>
			)}

			{isCompleted && (
				<div className={styles.subscribedSuccessfully}>
					Thank you for subscribing to our newsletter.
				</div>
			)}
		</>
	);
}
