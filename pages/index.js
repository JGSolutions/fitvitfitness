import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header/header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FitVit - Free Planner Workout Tracker & With Google Fit</title>
        <meta name="description" content="Free calisthenics, strength training & weight lifting tracking app. Track your workouts and health with Google Fit" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <section>
          Tracking gym or home workouts AND tracking your health
          <span>
            Sync your logged workouts with Google Fit automatically and keeping you a healthier life
          </span>
          <a href=''>Start Workout</a>
        </section>

        <section>
          <h2>Our Goal</h2>
          Providing a free easy workout tool and health tracking app. Not only exercising is important but keeping track of your health
          and staying motivated is key!
        </section>

        <section>
          <h2>Google Fit</h2>
          Google Fit collaborated with the World Health Organization to develop Heart Points, an activity goal based on WHO’s global recommendations. 
          We allow you to track 3 specific types of workouts which are: calisthenics, strength training & weight lifting. Which our app will sync your
          workouts to Google fit helping you track heart points and the calories burned burned for each workout.

          <a href="">More About Google Fit</a>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Over 1000 exercises with illustrations</li>
            <li>Many free workout programs created from certified trainers (coming soon)</li>
            <li>Customize exercises & create your own library (coming soon)</li>
            <li>Plan a workout or jump into quick workout.</li>
            <li>Log reps & weight, duration or distance for specific exercises.</li>
            <li>Implement Super Sets & Dropsets (coming soon)</li>
            <li>Sync your account between desktop and your mobile phone</li>
          </ul>
        </section>

        <section>
          <h2>Track Progress (Coming Soon)</h2>
          <ul>
            <li>Advanced Exercise Charts(coming soon)</li>
            <li>Keep Track of Body Weight(coming soon)</li>
            <li>Improve on certain exercises by setting goals (coming soon)</li>
            <li>Keep track of weekly workouts</li>
          </ul>
        </section>
        
        <section>
          <h2>Workout Engagment</h2>
          <ul>
            <li>Share your Workout Routines</li>
            <li>Share Workout Results</li>
            <li>Save Other Routines</li>
            <li>Compare workout or exercise results with a friend (coming soon)</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/privacy-policy/privacy-policy">
          <a>privacy policy</a>
        </Link>
      </footer>
    </div>
  )
}
