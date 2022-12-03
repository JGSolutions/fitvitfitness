import styles from "./Avatar-author.module.css";
import Image from 'next/image'

export default function AvatarAuthor({name, avatar}) {
	return (
		<div className={styles.wrapper}>
			<Image src={avatar} width={40} height={40} alt={name} />
			<p>by {name}</p>
		</div>
	);
}
