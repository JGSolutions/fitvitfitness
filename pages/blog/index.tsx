import styles from './blog.module.css';
import Head from 'next/head'
// import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';
// import BlogItem from '../../components/blog-item/blog-item';
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
                <title></title>
                <meta name="description" content="" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta name="image" property="og:image" content="" itemProp="image"/>

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="" />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content="" />
                <meta name="twitter:creator" content=""></meta>
            </Head>

            <main>

            </main>
            <Footer/>
        </>
    )
}