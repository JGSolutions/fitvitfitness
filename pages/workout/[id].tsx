import { getWorkoutById, getWorkoutIds } from '../../lib/workouts';
import Head from 'next/head';
import WorkoutSpec from '../../components/workout-specs/workout-specs';
import styles from './Workout.module.css'
import utilStyles from '../../styles/Utils.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import AvatarAuthor from '../../components/avatar-author/avatar-author';
import Link from 'next/link';
import { domainByEnvironment } from '../../lib/utils';
import NewsletterForm from '../../components/newsletter-form/newsletter-form'

export async function getStaticProps({ params }) {
    const postData = await getWorkoutById(params.id);
    return {
        props: {
          postData,
        },
    };
}

export async function getStaticPaths() {
  const paths = getWorkoutIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Workout({ postData }) {
  const url = domainByEnvironment();

  return (
    <div>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
        <link rel="canonical" href={`${url}${postData.path}`} />
    
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
 
      <main className={styles.main}>
        <div className={`container-lg`}>
          <div className="row">
            <div className="col">
              
              <div className={styles.headerHero}>
                <Link href="/workouts" passHref className={styles.backLink} rel="dofollow">
                  &larr; Go Back
                </Link>
                <h1 className={styles.h1}>{postData.title}</h1>
                <div className={styles.specs}>
                  <WorkoutSpec duration={postData.duration} times={postData.times} numExercises={postData.numExercises}/>
                </div>

                <AvatarAuthor author={postData.author} avatar={postData.avatar} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className={styles.description}>{postData.description}</div>
              <article className={styles.article}>
                <div className={styles.articleText} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </article>

              <div className={utilStyles.newsletterSection}>
                <h3 className={utilStyles.h3}>Subscribe to our newsletter for the latest workouts and tips.</h3>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}