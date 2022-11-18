import styles from './about.module.css';
import Head from 'next/head'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';

export default function Blog() {
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

            <div>
                <div className="container-lg">
                    <Header/>
                    <section className={styles.headerPageSection}>
                        <h1>About</h1>
                        <p>Latest and updated news about projects, development tips and general experiences around the web.</p>
                    </section>
                </div>
            </div>

            <main className={styles.main}>

            </main>
            <Footer/>
        </>
    )
}