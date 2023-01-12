import styles from "./Newsletter.module.css";
import { useRef } from 'react';

export default function NewsletterForm({ audienceid, apikey, datacenter}) {
	const inputRef = useRef(null);

	const subscribeUser = async (e) => {
		e.preventDefault();

		// const res = await fetch('/api/subscribeUser', {
		// body: JSON.stringify({
		// 	email: inputRef.current.value,
		// }),

		// headers: {
		// 	'Content-Type': 'application/json',
		// },

		// method: 'POST',
		// });

		const response = await fetch(
			`https://${datacenter}.api.mailchimp.com/3.0/lists/${audienceid}/members`,
			{
				body: JSON.stringify({
					email: inputRef.current.value,
				}),
				headers: {
					Authorization: `apikey ${apikey}`,
					'Content-Type': 'application/json',
				},
				method: 'POST',
			}
		);
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
