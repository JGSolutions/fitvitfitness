import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import FormatDate from '../../components/date';
import styles from './Posts.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import AvatarAuthor from '../../components/avatar-author/avatar-author';
import PageHeroCover from '../../components/page-hero-cover/page-hero-cover';
import { domainByEnvironment } from '../../lib/utils';

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

export default function Post({ postData }) {
  const url = domainByEnvironment();

  return (
    <div>
      <Head>
        <title>{postData.title}</title>

        <meta property="og:url" content={`${url}${postData.path}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta name="image" property="og:image" content={`${url}${postData.coverImage}`} itemProp="image"/>

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${url}${postData.path}`} />
        <meta property="twitter:title" content={postData.title} />
        <meta property="twitter:description" content={postData.description} />
        <meta property="twitter:image" content={`${url}${postData.coverImage}`} />
        <meta property="twitter:creator" content="@"></meta>
      </Head>
      
      <Header/>
      <PageHeroCover 
        image={postData.coverImage} 
        headerTitle={postData.title} 
        subTitle={postData.description} 
        backHref="/blog">
      
        </PageHeroCover>

      <main className={styles.main}>
        <div className={`container-lg`}>
          <div className="row">
            <div className={`col ${styles.details}`}>
              <div className={styles.authorDetails}>
                <AvatarAuthor author={postData.author} avatar={postData.avatar} />
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