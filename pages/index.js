import Head from 'next/head'
import styles from '../styles/Home.module.css'
import buttonStyle from '../styles/Button.module.css'
import utilsStyle from '../styles/Utils.module.css'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FitVit - Free Workout And Health Tracker App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Free calisthenics, strength training & weight lifting tracking fitness app. Track your workouts and health with Google Fit" />
      </Head>

      <Header></Header>
      
      <main className={utilsStyle.main}>

      {/* <div>
        <a href='http://academy.hubspot.com/certification' title='SEO'>
        <img src='https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/949cbb0306bf427e9a7e2b9517deaf60.png' />
        </a>
      </div> */}

        <section className={utilsStyle.sections}>
          <div className={utilsStyle.flexCol} style={{alignItems: 'flex-start'}}>
            <h1 className={styles.heroText}>
              Track <span className={utilsStyle.secondaryColor}>gym</span> <br/> or <span className={utilsStyle.primaryColor}>home</span> <br/> workouts AND <br/> your <span className={utilsStyle.secondaryColor}>health</span>.
            </h1>

            <span className={styles.heroSubTextContainer}>
              Sync your workouts with Google Fit automatically and coaching you to a healthier life style.
            </span>

            <Link href="">
              <a className={buttonStyle.fvButton}>Start Workout</a>
            </Link>
          </div>

          <div>
            <Image
              width={575}
              height={419}
              src="/homeandgym.svg"
              alt="Home And Gym Workouts"
            />
          </div>
        </section>

        <section className={utilsStyle.sections}>
          <div style={{ width: '75%', paddingRight: '16px' }}>
            <div className={styles.googleFitContainer}>
              <Image
                width={38}
                height={32}
                src="/google-fit-logo.svg"
                alt="Google Fit Logo"
              />
              <h2 className={styles.subTitle}>Syncing with Google Fit</h2>
            </div>

            <p className={utilsStyle.textParagraph}>
              Google Fit collaborated with the World Health Organization to develop Heart Points, an activity goal based on WHO’s global recommendations. 
            </p>

            <p className={utilsStyle.textParagraph}>
              Our app allows you to track three specific types of workouts: calisthenics, strength training & weight lifting. All workouts sync to Google fit helping you track heart points and calories burned from your current workouts.
            </p>

          </div>

          <div>
            <Image
                width={250}
                height={513}
                src="/google-fit-app.png"
                alt="Google Fit App"
              />
          </div>
        </section>

        <section className={utilsStyle.sections}>
          <div>
            <Image
                  width={250}
                  height={513}
                  src="/google-fit-app.png"
                  alt="Google Fit App"
                />
          </div>
          <div>
            <h2 className={styles.subTitle}>Key Features</h2>
            <ul>
              <li>Over 1000 exercises with illustrations</li>
              <li>Plan a workout routine or start a quick workout</li>
              <li>Log reps, weight, duration or distance sets.</li>
              <li>View previous results to improve during workout.</li>
              <li>Share your workout routines & results.</li>
              <li>View you account between desktop and mobile phone.</li>
              <li>Sync your account between desktop and mobile phone.</li>
            </ul>
          </div>
        </section>

        {/* <section>
          <h2>Track Progress (Coming Soon)</h2>
          <ul>
            <li>Advanced Exercise Charts(coming soon)</li>
            <li>Keep Track of Body Weight(coming soon)</li>
            <li>Improve on certain exercises by setting goals (coming soon)</li>
          </ul>
        </section> */}
        
        {/* <section>
          <h2>Workout Engagment</h2>
          <ul>
            <li>Share your Workout Routines</li>
            <li>Share your workout results</li>
            <li>Copy other routines</li>
            <li>Compare workout or exercise results with a friend (coming soon)</li>
          </ul>
        </section> */}

        {/* <section>
          <h2>For Certified Trainers</h2>
          <p>Certified trainers having their own profile page and publishing workout routines within the community</p>
        </section> */}
      </main>
      
      <Footer></Footer>
    </div>
  )
}
