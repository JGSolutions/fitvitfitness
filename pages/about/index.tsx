import styles from './about.module.css';
import utilsStyle from '../../styles/Utils.module.css';
import Head from 'next/head'
import Image from 'next/image'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';
import PageHeader from '../../components/page-header/page-header';

export default function About() {
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

            <div className='container-lg'>
                <PageHeader image="/chris-test.png" headerTitle="About me" subTitle="dkdkdk"></PageHeader>
            </div>


            <main className={styles.main}>
                <div className='container-lg'>
                    <p className={utilsStyle.textParagraph}>
                        Helping individuals see what they are truly capable of has always been a passion of mine. Over the past decade, I&#39;ve been helping friends and family improve their physical performance, health, and body composition. In 2021 I decided to take my passion to the next level by becoming a canfitpro certified personal trainer. Since then, I&#39;ve helped dozens of individuals achieve their goals and reach their full potential.
                    </p>

                    <p className={utilsStyle.textParagraph}>
                        My passion for fitness began in my teenage years. When I first started working out, I was obese and unfit. Within five months, I lost 60 pounds through resistance training, cardio, and improved nutrition. I started slowly and built from there. At first, I couldn&#39;t even run for 5 minutes. However, within a few months, I was running for an hour at a time without any issues. My nutrition changed significantly too. I went from a diet filled with processed foods and refined sugars to one based on whole, natural, and unprocessed foods. I truly believe that nutrition is just as important as exercise to achieve optimal health. Since then, I&#39;ve continued to push myself physically. I enjoy hiking in the mountains, running marathons, and doing martial arts. I also enjoy playing a variety of sports, including basketball and tennis.
                    </p>

                    <p className={utilsStyle.textParagraph}>
                        Fitness has had a profound impact on all areas of my life. Since I started this journey, my self-efficacy and confidence have improved significantly. My goal is to help others experience similar transformations as I have had. Helping others achieve optimal health and seeing how this impacts other areas of their life brings me tremendous amounts of joy and satisfaction.
                    </p>

                    <h3 className={styles.h3}>Contact me</h3>
                    <p>
                        Ready to get started? Reach out to book your free initial consultation. I will get back to you within 24 hours.
                    </p>

                    <div className={styles.contactInfo}>
                        <div className={styles.contactDetails}>
                            <div className={styles.icon}>
                                <Image src="/email.svg" width={24} height={24} alt="email" />
                            </div>
                            <p>christophercharbeldaoud@gmail.com</p>
                        </div>

                        <div className={styles.contactDetails}>
                            <div className={styles.icon}>
                                <Image src="/cell.svg" width={13} height={24} alt="email" />
                            </div>
                            <p>514 29 3586 (call or text)</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}