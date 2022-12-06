import styles from './Workouts.module.css';
import Head from 'next/head'
import Link from 'next/link'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';
import WorkoutItem  from '../../components/workout-item/workout-item';
import PageHeaderSolid  from '../../components/page-header-solid/page-header-solid';
import { getWorkoutData } from '../../lib/workouts';
import Contact from '../../components/contact/contact';

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
                <meta name="description" content="Free Fitness and workout programs from FitVit! Helping you begin your fitness journey and getting in shape." />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Fitness & Workout Articles" />
                <meta property="og:description" content="Free Fitness and workout programs from FitVit! Helping you begin your fitness journey and getting in shape." />
                {/* <meta name="image" property="og:image" content="" itemProp="image"/> */}

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Fitness & Workout Articles" />
                <meta name="twitter:description" content="Free Fitness and workout programs from FitVit! Helping you begin your fitness journey and getting in shape." />
                {/* <meta name="twitter:image" content="" /> */}
                {/* <meta name="twitter:creator" content=""></meta> */}
            </Head>

            <Header />
            <PageHeaderSolid headerTitle={'FitVit Workouts'} subTitle={'Try a free workout routine created by a certified personal trainer.'} />
            <main className={styles.main}>
                <div className="container-lg">
                    <div className="row">
                        <div className="col">
                            <div style={{ marginBottom: '16px'}}>

                                Are you looking for a more personalized routine that is uniquely tailored to your goals and needs so that you can look and feel your best? Reach out today to book your free consultation.
                                <Contact/> 
                            </div>
                        </div>
                    </div>
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