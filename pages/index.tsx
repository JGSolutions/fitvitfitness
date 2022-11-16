import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header  from '../components/header/header';
import Footer from '../components/footer/footer'

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
			</div>

			<main className={styles.main}>
			</main>
			<Footer/>
		</>
	)
}
