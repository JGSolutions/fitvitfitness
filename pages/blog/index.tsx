import styles from './blog.module.css';
import Head from 'next/head'
import Link from 'next/link'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';
import PageHeaderSolid  from '../../components/page-header-solid/page-header-solid';
import BlogItem from '../../components/blog-item/blog-item';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Blog({ allPostsData }) {
    return (
        <>
            <Head>
                <title>Fitness & Workout Articles | FitVit</title>
                <meta name="description" content="Fitness and workout articles from FitVit! Everything you need to learn and reach your fitness goals." />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Fitness & Workout Articles" />
                <meta property="og:description" content="Fitness and workout articles from FitVit! Everything you need to learn and reach your fitness goals." />
                <meta name="image" property="og:image" content="" itemProp="image"/>

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fitness & Workout Articles" />
                <meta name="twitter:description" content="Fitness and workout articles from FitVit! Everything you need to learn and reach your fitness goals." />
                <meta name="twitter:image" content="" />
                {/* <meta name="twitter:creator" content=""></meta> */}
            </Head>

            <Header />
            <PageHeaderSolid headerTitle={'Blog'} subTitle={'All articles about fitness'} />
            <main className={styles.main}>
                <div className="container-lg">
                    <div className="row">
                        {allPostsData.map(({ id, date, title, description, coverImage }) => (
                            <div className={`col col-md-6 col-lg-4 col-xl-4 col-12 ${styles.col}`} key={id}>
                                <Link href={`/posts/${id}`} className={styles.blogItem}>
                                    <BlogItem 
                                        id={id}
                                        image={coverImage}
                                        title={title} 
                                        description={description}
                                        date={date} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}