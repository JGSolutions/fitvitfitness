import styles from './blog-item.module.css'
import FormatDate from '../date';
import Image from 'next/image';
import AuthorAvator from '../avatar-author/avatar-author';

export default function BlogItem({id, title, description, image, date, author, avatar}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSection}>{title}</div>
            <div className={styles.imageSection}>
                <Image src={image} fill alt={title} />
            </div>
            <div className={styles.contentSection}>
                <AuthorAvator avatar={avatar} author={author}/>
                <div className={styles.description}>
                    {description}
                </div>
                <div className={styles.date}>
                    <FormatDate dateString={date} />
                </div>
            </div>
        </div>
    )
}
