import styles from './Workouts.module.css';
import Head from 'next/head'
import Link from 'next/link'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';
import WorkoutItem  from '../../components/workout-item/workout-item';
import PageHeaderSolid  from '../../components/page-header-solid/page-header-solid';
import { getWorkoutData } from '../../lib/workouts';

export async function getStaticProps() {
    const allPostsData = getWorkoutData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Workouts({ allPostsData }) {
    return (
        <>
            <Head>
                <title>Gym & Home Workouts | FitVit</title>
                <meta name="description" content="Fitness and workout articles from FitVit! Everything you need to learn and reach your fitness goals." />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Fitness & Workout Articles" />
                <meta property="og:description" content="Fitness and workout articles from FitVit! Everything you need to learn and reach your fitness goals." />
                {/* <meta name="image" property="og:image" content="" itemProp="image"/> */}

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fitness & Workout Articles" />
                <meta name="twitter:description" content="Fitness and workout articles from FitVit! Everything you need to learn and reach your fitness goals." />
                {/* <meta name="twitter:image" content="" /> */}
                {/* <meta name="twitter:creator" content=""></meta> */}
            </Head>

            <Header />
            <PageHeaderSolid headerTitle={'Workouts'} subTitle={'Workouts'} />
            <main className={styles.main}>
                <div className="container-lg">
                    <div className="row">
                        {allPostsData.map(({ id, title, description, duration, times, numExercises }) => (
                            <div className={`col col-md-6 col-lg-6 col-xl-4 col-12 ${styles.col}`} key={id}>
                                <Link href={`/workout/${id}`} className={styles.item}>
                                    <WorkoutItem 
                                        id={id}
                                        title={title} 
                                        description={description}
                                        duration={duration}
                                        numExercises={numExercises}
                                        times={times}
                                        />
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