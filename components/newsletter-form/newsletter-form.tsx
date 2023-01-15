import styles from "./Newsletter.module.css";
import { useRef } from 'react';

export default function NewsletterForm() {
	const inputRef = useRef(null);

	const subscribeUser = async (e) => {
		e.preventDefault();

		await fetch('https://fitvit-api.web.app/subscribe-newsletter', {
		// await fetch('http://localhost:5000/subscribe-newsletter', {
		body: JSON.stringify({
			email: inputRef.current.value,
		}),

		headers: {
			'Content-Type': 'application/json',
		},

		method: 'POST',
		});

	};
	return (
		<form onSubmit={subscribeUser}>
	
			<input
			type="email"
			id="email-input"
			name="email"
			placeholder="your best email"
			ref={inputRef}
			required
			autoCapitalize="off"
			autoCorrect="off"
			/>

			<button type="submit" value="" name="subscribe">
				Subscribe
			</button>
		</form>
	);
}
