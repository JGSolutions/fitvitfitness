import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import utilStyles from '../styles/Utils.module.css'
import button from '../styles/Button.module.css'
import Header  from '../components/header/header';
import Footer from '../components/footer/footer'
import NewsletterForm from '../components/newsletter-form/newsletter-form'
import BlogItem from '../components/blog-item/blog-item'
import ScrollSlider from '../components/scroll-slider/scroll-slider'
import { getRecentBlogs } from '../lib/posts';
import { domainByEnvironment } from '../lib/utils';

export async function getStaticProps() {
    const getRecentPosts = await getRecentBlogs();
    return {
        props: {
            getRecentPosts
        },
    };
}

export default function Home({ getRecentPosts, AUDIENCE_ID, API_KEY, DATACENTER }) {
	const url = domainByEnvironment();
	return (
		<>
			<Head>
				<title>FitVit - Gym & Home Workouts By A Certified Trainer</title>
				<meta name="description" content="Check out the latest gym and home workouts. With Chris Daoud helping you reach your fitness goals." />
				<link rel="canonical" href="https://fitvitfitness.com/" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://fitvitfitness.com/" />
				<meta property="og:title" content=" Gym & Home Workouts By A Certified Trainer" />
				<meta property="og:description" content="Reach your fitness goals with home and gym workouts." />
				<meta name="image" property="og:image" content={`${url}/open-graph-fitvit.png`} itemProp="image"/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://fitvitfitness.com/" />
				<meta name="twitter:title" content="Gym & Home Workouts By A Certified Trainer" />
				<meta name="twitter:description" content="Reach your fitness goals with home and gym workouts." />
				<meta name="twitter:image" content={`${url}/open-graph-fitvit.png`} />
			</Head>

				<Header/>
				<main className={styles.main}>
					<div className="container-lg" style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
						<section className={styles.section}>
							<div className={`${styles.row} ${styles.headerSection}`}>
								<h1 className={styles.headerText}>
									Reach Your <span className={utilStyles.primaryColor}>Full Potiential</span> With <span className={utilStyles.secondaryColor}>Gym</span> & <span className={utilStyles.secondaryColor}>Home Workouts</span>
								</h1>
								<p className={styles.text}>
								Fitness solutions for busy people. Helping you reach your full potential and achieve optimal health.
								</p>
								<div className={styles.buttonHeaderWrapper}>
									<Link href="/workouts" className={button.fvButton}>
										Home & Gym Workouts
									</Link>

									<Link href="/personal-training" className={button.fvButtonStroke}>
										Learn More
									</Link>
								</div>
							</div>
							<div className={styles.row}>
								<Image src="/hero-min.png" width={673} height={503} alt="home and gym workouts" priority style={{ objectFit: "contain"}}/>
							</div>
						</section>

						<section className={styles.section}>
							<div className={styles.trainerImageRow}>
								<Image src="/chris-trainer.png" width={388} height={427} alt="Christopher Daoud Certified Trainer" priority style={{ objectFit: "contain"}}/>
							</div>
							<div className={styles.trainerDetails}>
								<h2 className={styles.subTitles}>Christopher Daoud - Certified Trainer</h2>
								<ul className={styles.dd}>
									<li>Canfitpro PTS</li>
									<li>15+ years of experience lifting weights.</li>
									<li>Playing and training for a variety of sports including tennis, hockey, football, lacrosse, basketball, and martial arts. </li>
									<li>Trained for a variety of race events including half marathons and Tough Mudders.  </li>
									<li>
										Lost 60 pounds and increased my fitness through exercise and diet. I enjoy helping others achieve similar results.
									</li>
								</ul>
								<div style={{ display: 'flex', justifyContent: 'center'}}>
									<Link href="/about" className={button.fvButton}>
										More About Me
									</Link>
								</div>
							</div>
		
						</section>
					</div>

					<section className={`${styles.testimonialSection}`}>
						<div className="container-lg" style={{gap: 0}}>
							<div className="row">
								<div className="col">
									<h2 className={styles.subTitles}>Testimonials</h2>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<div className={styles.scrollContainer}>
										<ScrollSlider>
											<section className={styles.testimonialItem}>
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
											</section>
											<section className={styles.testimonialItem}>
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
											</section>
											<section className={styles.testimonialItem}>
												<div className={styles.text}>
													<p className={utilStyles.textParagraph}>
														Chris your training style has guided me towards my goals. You have demonstrated techniques and form and explained the
														 corrective measures to improve my workouts. Thank you for inspiring me and your encouragement to push me to reach my goals.
														  I highly recommend you as a great coach.
													</p>
												</div>

												<div className={styles.from}>
													<p>Gona Mucci</p>
													<p>In-person client from Kingsville, Ontario  </p>
												</div>
											</section>
										</ScrollSlider>
									</div>
								</div>
							</div>
						</div>
					</section>

					<section className={styles.section}>
						<div className="container-lg" style={{gap: 0}}>
							<div className="row">
								<div className="col">
									<h2 className={styles.subTitles}>Our Recent Blogs</h2>
								</div>
							</div>

							<div className="row">
								{getRecentPosts.map(({ id, date, title, description, coverImage, author, avatar }) => (
									<div className={`col col-md-6 col-lg-6 col-xl-4 col-12 ${styles.col}`} key={id}>
										<Link href={`/posts/${id}`} className={utilStyles.blogItem}>
											<BlogItem 
												id={id}
												image={coverImage}
												title={title} 
												author={author}
												avatar={avatar}
												description={description}
												date={date} />
										</Link>
									</div>
								))}
							</div>
						</div>
					</section>

					<section className={`${styles.newsletterSection}`}>
						<div className="container-lg">
							<div className="row">
								<div className="col col-md-12 col-lg-6 col-12">
									<h2 className={styles.subTitles}>FitVit’s Newsletter</h2>
									<p>Get the latest news & workouts sent right to your inbox! </p>
								</div>

								<div className="col col-md-12 col-lg-6 col-12">
									<NewsletterForm />
								</div>
							</div>
						</div>
					</section>
				</main>

			<Footer/>
		</>
	)
}
