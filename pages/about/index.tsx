import utilsStyle from '../../styles/Utils.module.css';
import Head from 'next/head'
import Header  from '../../components/header/header';
import Footer  from '../../components/footer/footer';
import PageHeader from '../../components/page-header/page-header';
import Contact from '../../components/contact/contact';
import { domainByEnvironment } from '../../lib/utils';
import NewsletterForm from '../../components/newsletter-form/newsletter-form'

export default function About() {
    const url = domainByEnvironment();
    return (
        <>
            <Head>
                <title>FitVit - About Christopher Daoud</title>
                <meta name="description" content="About Christopher Daoud a certified trainer helping people getting in shape." />
                <link rel="canonical" href={`${url}/about/`} />

                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${url}/about/`} />
                <meta property="og:title" content="About Christopher Daoud" />
                <meta property="og:description" content="About Christopher Daoud a certified trainer helping people getting in shape." />
                <meta property="og:image" name="image" content={`${url}/open-graph-fitvit.png`} itemProp="image"/>

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`${url}/about/`} />
                <meta name="twitter:title" content="About Christopher Daoud" />
                <meta name="twitter:description" content="About Christopher Daoud a certified trainer helping people getting in shape." />
                <meta name="twitter:image" content={`${url}/open-graph-fitvit.png`} />
            </Head>

            <Header/>

            <div className='container-lg'>
                <PageHeader image="/chris-test.png" headerTitle="About me" subTitle="Christopher Daoud - Personal Trainer" backHref={''}></PageHeader>
            </div>
            <main className={utilsStyle.main}>
                <div className='container-lg'>
                    <p className={utilsStyle.textParagraph}>
                        Helping individuals see what they are truly capable of has always been a passion of mine. Over the past decade, I&#39;ve been helping friends and family improve their physical performance, health, and body composition. In 2021 I decided to take my passion to the next level by becoming a canfitpro certified personal trainer. Since then, I&#39;ve helped dozens of individuals achieve their goals and reach their full potential. 
                    </p>

                    <p className={utilsStyle.textParagraph}>
                        My passion for fitness began in my teenage years. I was initially unhealthy and unfit. Within my first year, I lost 60 pounds through resistance training and cardio. My nutrition changed significantly too. I went from a diet filled with processed foods and refined sugars to one based on whole, natural, and unprocessed foods. I truly believe that nutrition is just as important as exercise. Since then, 
                        I&#39;ve continued to push myself physically. I enjoy hiking in the mountains, running, and doing martial arts. I also enjoy playing a variety of sports, including basketball and tennis. 
                    </p>

                    <p className={utilsStyle.textParagraph}>
                        Fitness has had a profound impact on all areas of my life. Since I started this journey, my self-efficacy and confidence have improved significantly. My goal is to help others experience similar transformations as I have had. Helping others achieve optimal health and seeing how this impacts other areas of their life brings me tremendous amounts of joy and satisfaction.
                    </p>

                    <h3 className={utilsStyle.h3}>Contact me</h3>
                    <p>
                        Ready to get started? Reach out to book your free initial consultation. I will get back to you within 24 hours.
                    </p>

                    <Contact/>

                    <div className={utilsStyle.newsletterSection}>
                        <h3 className={utilsStyle.h3}>Subscribe to my newsletter for the latest workouts and tips.</h3>
                        <NewsletterForm />
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}