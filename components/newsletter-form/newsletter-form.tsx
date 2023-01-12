import styles from "./Newsletter.module.css";
import { useRef } from 'react';

export default function NewsletterForm() {
	const inputRef = useRef(null);

	const subscribeUser = async (e) => {
		e.preventDefault();

		const res = await fetch('/api/subscribeUser', {
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
