import styles from './blog.module.css';
import utilStyles from "../../styles/Utils.module.css";
import Head from 'next/head'
import Link from 'next/link'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';
import PageHeaderSolid  from '../../components/page-header-solid/page-header-solid';
import BlogItem from '../../components/blog-item/blog-item';
import { getSortedPostsData } from '../../lib/posts';
import { domainByEnvironment } from '../../lib/utils';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Blog({ allPostsData }) {
    const url = domainByEnvironment();
    return (
        <>
            <Head>
                <title>Fitness & Workout Blogs | FitVit</title>
                <meta name="description" content="Fitness and workout articles from FitVit! Everything you need to learn and reach your fitness goals." />
                <link rel="canonical" href="https://fitvitfitness.com/blog/" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fitvitfitness.com/blog/" />
                <meta property="og:title" content="Fitness & Workout Blogs" />
                <meta property="og:description" content="Fitness and workout articles from FitVit! Everything you need to learn and reach your fitness goals." />
                <meta property="og:image" name="image" content={`${url}/open-graph-fitvit.png`} itemProp="image"/>

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://fitvitfitness.com/blog/" />
                <meta name="twitter:title" content="Fitness & Workout Blogs" />
                <meta name="twitter:description" content="Fitness and workout articles from FitVit! Everything you need to learn and reach your fitness goals." />
                <meta name="twitter:image" content={`${url}/open-graph-fitvit.png`} />
                {/* <meta name="twitter:creator" content=""></meta> */}
            </Head>

            <Header />
            <PageHeaderSolid headerTitle={'FitVit Blog'} subTitle={'Evidence-based health and fitness articles written by certified personal trainers.'} />
            <main className={styles.main}>
                <div className="container-lg">
                    <div className="row">
                        {allPostsData.map(({ id, date, title, description, coverImage, author, avatar }) => (
                            <div className={`col col-md-6 col-lg-4 col-xl-4 col-12 ${styles.col}`} key={id}>
                                <Link href={`/posts/${id}`} className={utilStyles.blogItem} rel="dofollow">
                                    <BlogItem 
                                        id={id}
                                        image={coverImage}
                                        title={title} 
                                        author={author}
                                        avatar={avatar}
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