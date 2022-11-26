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

				<Header/>
				<main className={styles.main}>
					<div className="container-lg">
						<section className={styles.section}>
							<div className={`${styles.row} ${styles.headerSection}`}>
								<h1 className={styles.headerText}>
									Reach Your <span className={utilStyles.primaryColor}>Full Potiential</span> With <span className={utilStyles.secondaryColor}>Gym</span> & <span className={utilStyles.secondaryColor}>Home Workouts</span>
								</h1>
								<p className={styles.text}>Fitness solution for busy people. Helping you keep motivated in your fitness journey with tips from a personal trainer.</p>
								<div className={styles.buttonHeaderWrapper}>
									{/* <Link href="" className={button.fvButton}>
										Start Workout
									</Link> */}

									<Link href="/personal-training" className={button.fvButtonStroke}>
										Book A Session
									</Link>
								</div>
							</div>
							<div className={styles.row}>
								<Image src="/hero.svg" width={673} height={603} alt="" />
							</div>
						</section>

						<section className={styles.section}>
							<div className={styles.trainerImageRow}>
								<Image src="/chris-trainer.svg" width={430} height={380} alt="Chris Daoud Trainer" />
							</div>
							<div className={styles.trainerDetails}>
								<h2 className={styles.subTitles}>Christopher Daoud - Certified Trainer</h2>
								<div>
									<Link href="/about" className={button.fvButton}>
										More About Me
									</Link>
								</div>
							</div>
		
						</section>
					</div>

					<section className={`${styles.testimonialSection}`}>
						<div className="container-lg">
							<div className="row">
								<div className="col">
									<h2 className={styles.subTitles}>Testimonials</h2>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<p className={styles.text}>
										“ I was struggling to accommodate a workout routine into a new busy work schedule and I couldn’t find the time
										to train anymore while I was cutting. Then I discovered Chris’ personal training services and worked with him
										for 6 months. During that time, he did an amazing job at building a training program that would fit both my schedule
										and fitness goals. He then provided follow-up sessions every two weeks to see how I was doing and provided great 
										feedback for the issues I was having. At the end of the program, I had lost over 10 pounds and re-created a habit
										of training a little bit every day with the exercises he provided. All of it was done remotely as I live 12 hours 
										away from him. I was impressed with the depth of his knowledge and it was an amazing experience, I would highly recommend Chris. “
									</p>

									<div className={styles.from}>
										<p>Iaroslav Rybakov</p>
										<p>Online Client from Montreal, Quebec</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className={styles.text}>
										<p className={utilStyles.textParagraph}>I was scared to go back to the gym after a stroke in 2018.
											I didn’t want to be judged or laughed at. I had lost my confidence.
										</p>

										<p className={utilStyles.textParagraph}>In the spring I noticed how incredibly clumsy I was. I fell twice in one day, and I decided I needed to get help. I went to a gym and had an assessment of my overall health done by Chris. He was kind and patient and never once said “you can’t”. He went over a fitness program, and I signed up that day! He helped me get my confidence back. Chris smiles all the time and is a very intelligent man. He was very knowledgeable about balance exercises, machines, free weights, and nutrition. If anyone needs encouragement, Chris is there for you. </p>

										<p className={utilStyles.textParagraph}>I count myself fortunate to have met Chris, now I can go to the gym and enjoy my friends and my workouts. Thank you, Chris. I am lucky that you helped me when I needed it most!! </p>

									</div>

									<div className={styles.from}>
										<p>Sharon Preston</p>
										<p>In-person client from Kingsville, Ontario  </p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>

			<Footer/>
		</>
	)
}
