import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header/header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FitVit - Free Planner Workout Tracker & With Google Fit</title>
        <meta name="description" content="Free workout tracker tracking your workouts and keeping you healthy with Google Fit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={styles.main}>
        <section>
          Tracking workouts BUT tracking your health
          <span>
            Sync your logged workouts with Google Fit automatically and keeping you a healthier life
          </span>
          <a href=''>Start Workout</a>
        </section>

        <section>
          <h2>Our Goal</h2>
          Providing you a free easy workout and health tracking app. We all know exercising is important to have a healthy life style. 
          Having a tool to track your workouts 
          and also keeping track of your health with.
          Google Fit. Keeping you motivated with accumlating heart points with Google Fit
        </section>

        <section>

        </section>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
