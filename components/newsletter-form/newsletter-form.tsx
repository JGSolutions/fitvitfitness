import styles from "./Newsletter.module.css";
import { useRef, useState } from 'react';

export default function NewsletterForm() {
	const inputRef = useRef(null);
	const [loading, setLoading] = useState(false);
	
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
		inputRef.current.value = "";
	};
	return (
		<form onSubmit={subscribeUser}>
	
			<input
				type="email"
				className={styles.inputField}
				id="email-input"
				name="email"
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
	);
}
