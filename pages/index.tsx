import Head from 'next/head'
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/Utils.module.css'
import button from '../styles/Button.module.css'
import Header  from '../components/header/header';
import Footer from '../components/footer/footer'
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title></title>
				<meta name="description" content="" />

				<meta property="og:type" content="website" />
				<meta property="og:title" content="" />
				<meta property="og:description" content="" />
				<meta name="image" property="og:image" content="" itemProp="image"/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="" />
				<meta name="twitter:description" content="" />
				<meta name="twitter:image" content="" />
				<meta name="twitter:creator" content=""></meta>
			</Head>

			<div className="container-lg">
				<Header/>
				<main className={styles.main}>
					<section className={styles.section}>
						<div className={`${styles.row} ${styles.headerSection}`}>
							<h1 className={styles.headerText}>
								Reach Your <span className={utilStyles.primaryColor}>Full Potiential</span> With <span className={utilStyles.secondaryColor}>Gym</span> & <span className={utilStyles.secondaryColor}>Home Workouts</span>
							</h1>
							<p className={styles.text}>Fitness solution for busy people. Helping you keep motivated in your fitness journey with tips from a personal trainer.</p>
							<div className={styles.buttonHeaderWrapper}>
								<Link href="" className={button.fvButton}>
									Start Workout
								</Link>

								<Link href="" className={button.fvButtonStroke}>
									Book A Session
								</Link>
							</div>
						</div>
						<div className={styles.row}>sdfds</div>
					</section>

					<section className={styles.section}>
						<div>
							<Image src="/chris-trainer.svg" width={381} height={431} alt="Chris Daoud Trainer" />
						</div>
						<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '24px'}}>
							<h2 className={styles.subTitles}>Certified Trainer with Chris Daoud</h2>
							<p className={styles.text}>
								As a certified trainer you will be able to submit workout routines to and get known through out the community.  Create your personal profile page and share within your social media platorms
							</p>
						</div>
					</section>
				</main>
			</div>

			<Footer/>
		</>
	)
}
