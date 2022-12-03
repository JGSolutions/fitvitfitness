import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import FormatDate from '../../components/date';
import styles from './Workout.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageHeader from '../../components/page-header/page-header';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
          postData,
        },
    };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Workout({ postData }) {
  const env = process.env.NODE_ENV;
  let url;
  if (env === "production") {
    url ='https://fitvitfitness.com';
  } else {
    url ='http://localhost:3000';
  }

  return (
    <div>
      <Head>
        <title>{postData.title}</title>

        <meta property="og:url" content={`${url}${postData.path}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        {/* <meta name="image" property="og:image" content={`${url}${postData.coverImage}`} itemProp="image"/> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${url}${postData.path}`} />
        <meta property="twitter:title" content={postData.title} />
        <meta property="twitter:description" content={postData.description} />
        {/* <meta property="twitter:image" content={`${url}${postData.coverImage}`} /> */}
        <meta property="twitter:creator" content="@"></meta>
      </Head>
      
      <Header/>
      <div className="container-lg">
        <PageHeader image={postData.coverImage} headerTitle={postData.title} subTitle={postData.description} backHref="/blog"></PageHeader>
      </div>

      <main className={styles.main}>
        <div className={`container-lg`}>
          <div className="row">
            <div className={`col ${styles.details}`}>
              <div className={styles.authorDetails}>
                <p className={styles.author}>By {postData.author}</p>
                <p className={styles.authorDate}>Created on: <FormatDate dateString={postData.date} /></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <article className={styles.article}>
                <div className={styles.articleText} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </article>

              <p className={styles.authorDate}>Last update: <FormatDate dateString={postData.updateDate} /></p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}