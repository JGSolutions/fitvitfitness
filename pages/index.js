import Head from 'next/head'
import styles from '../styles/Home.module.css'
import buttonStyle from '../styles/Button.module.css'
import utilsStyle from '../styles/Utils.module.css'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FitVitFitness - Workout Fitness Tracker for Gym and Home training</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Free workout tracking app. Track calisthenics, strength training & weight lifting routine programs. Sync your workouts with Google Fit." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="JGSolution's Blog" />
        <meta property="og:description" content="Blogging about the web and development" />
        <meta name="image" property="og:image" content="https://jgsolutions.ca/jerry-pic.jpeg" itemProp="image"/>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="Blogging about the web and development" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:creator" content="@JGSolutions"></meta>
      </Head>

      <Header></Header>
      
      <main className={utilsStyle.main}>

        <section className={utilsStyle.sections}>
          <div className={utilsStyle.flexCol} style={{alignItems: 'flex-start', marginBottom: '48px'}}>
            <h1 className={styles.heroText}>
              Launching a new site soon
              {/* Track <span className={utilsStyle.secondaryColor}>gym</span> <br/> or <span className={utilsStyle.primaryColor}>home</span> <br/> workouts AND <br/> your <span className={utilsStyle.secondaryColor}>health</span>. */}
            </h1>

            <span className={styles.heroSubTextContainer}>
              Providing all types of free workouts for any 
            </span>
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

      </main>
      
      <Footer></Footer>
    </div>
  )
}
