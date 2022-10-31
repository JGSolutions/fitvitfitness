import Head from 'next/head'
import styles from '../styles/Home.module.css'
import buttonStyle from '../styles/Button.module.css'
import utilsStyle from '../styles/Utils.module.css'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FitVitFitness - Workout Fitness Tracker for Gym and Home training</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Free workout tracking app. Track calisthenics, strength training & weight lifting routine programs. Sync your workouts with Google Fit." />
      </Head>
      <Header></Header>
      
      <main className={utilsStyle.main}>

        <section className={utilsStyle.sections}>
          <div className={utilsStyle.flexCol} style={{alignItems: 'flex-start', marginBottom: '48px'}}>
            <h1 className={styles.heroText}>
              Track <span className={utilsStyle.secondaryColor}>gym</span> <br/> or <span className={utilsStyle.primaryColor}>home</span> <br/> workouts AND <br/> your <span className={utilsStyle.secondaryColor}>health</span>.
            </h1>

            <span className={styles.heroSubTextContainer}>
              Sync your workouts with Google Fit automatically and coaching you to a healthier life style.
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
