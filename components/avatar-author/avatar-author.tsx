import styles from "./Avatar-author.module.css";
import Image from 'next/image'

export default function AvatarAuthor({author, avatar}) {
	return (
		<div className={styles.wrapper}>
			<Image src={avatar} width={40} height={40} alt={author} className={styles.img} priority/>
			<p  className={styles.author}>by {author}</p>
		</div>
	);
}
