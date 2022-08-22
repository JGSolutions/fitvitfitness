import Head from 'next/head'
import styles from '../styles/Home.module.css'
import buttonStyle from '../styles/Button.module.css'
import utilsStyle from '../styles/Utils.module.css'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import GoogleAnalytics from '../components/googleAnalytics';
export default function Home() {
  return (
    <div>
      <Head>
        <title>FitVitFitness - Workout Fitness Tracker for Gym and Home training</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Free workout tracking app. Track calisthenics, strength training & weight lifting routine programs. Sync your workouts with Google Fit." />
      </Head>
      <GoogleAnalytics />
      <Header></Header>
      
      <main className={utilsStyle.main}>

      {/* <div>
        <a href='http://academy.hubspot.com/certification' title='SEO'>
        <img src='https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/949cbb0306bf427e9a7e2b9517deaf60.png' />
        </a>
      </div> */}

        <section className={utilsStyle.sections}>
          <div className={utilsStyle.flexCol} style={{alignItems: 'flex-start', marginBottom: '48px'}}>
            <h1 className={styles.heroText}>
              Track <span className={utilsStyle.secondaryColor}>gym</span> <br/> or <span className={utilsStyle.primaryColor}>home</span> <br/> workouts AND <br/> your <span className={utilsStyle.secondaryColor}>health</span>.
            </h1>

            <span className={styles.heroSubTextContainer}>
              Sync your workouts with Google Fit automatically and coaching you to a healthier life style.
            </span>

            <Link href="https://app.fitvitfitness.com">
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

        <section style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '1024px'}}>
          <h2 className={styles.subTitle} style={{ marginBottom: '24px'}}>FitVit Features</h2>
          <div className={styles.keyFeatures}>
            <div className={styles.screenShots}>
              <Image
                    width={461}
                    height={686}
                    src="/screenshot1.svg"
                    alt="FitVit Screen Shot App"
                  />
            </div>
            <div className={styles.featuresList}>
              <ul className={styles.list}>
                <li>Over 1000 exercises with illustrations</li>
                <li>Plan a routine or start a quick workout</li>
                <li>Log reps, weight, duration or distance sets</li>
                <li>Previous exercise history for progressive overload</li>
                <li>Share your workout routines & results</li>
                <li>Web based. No app installation needed</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={utilsStyle.sections}>
          <div className={styles.googleFitContainer}>
            <div className={styles.googleFitHeader}>
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

          <div className={styles.googleFitScreenshot}>
            <Image
                width={250}
                height={513}
                src="/google-fit-app.png"
                alt="Google Fit App"
              />
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
        
        <section className={classNames(utilsStyle.sections, styles.blueBGSection)}>
          <div className={styles.screenShots}>
            <Image
                src="/web-screenshots.svg"
                height={594}
                width={462}
                alt="responsive fitvit screenshots"
              />
          </div>

          <div className={styles.description}>
            <h2 className={styles.subTitle} style={{ marginBottom: '24px'}}>No App Installation</h2>
            <p className={utilsStyle.textParagraph}>We are focused offering web based platform avoiding the need to install on your mobile phone or tablet.</p>
            <p className={utilsStyle.textParagraph}>Managing workout routines, selecting, searchng for exercises and analysing your workouts will be easier viewing it on any device your comfortable with. When ready use your mobile phone on the go to perform the workouts! All your data will be synced on any device.</p>
          </div>
        </section>
      </main>
      
      <Footer></Footer>
    </div>
  )
}
