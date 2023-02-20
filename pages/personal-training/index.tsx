import Head from 'next/head';
import utilStyles from '../../styles/Utils.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageHeaderSolid from '../../components/page-header-solid/page-header-solid';
import Contact from '../../components/contact/contact';
import { domainByEnvironment } from '../../lib/utils';

export default function PersonalTraining() {
    const url = domainByEnvironment();
    return (
        <>
            <Head>
                <title>FitVit - Personal Training Sessions with Christopher Daoud</title>
                <meta name="description" content="Personal training sessions with Christopher Daoud to help you with your workout goals." />
                <link rel="canonical" href={`${url}/personal-training/`} />
    
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${url}/personal-training/`} />
                <meta property="og:title" content="Personal Training Sessions" />
                <meta property="og:description" content="Personal training sessions with Christopher Daoud to help you with your workout goals." />
                <meta property="og:image" name="image" content={`${url}/open-graph-fitvit.png`} itemProp="image"/>

                <meta property="twitter:url" content={`${url}/personal-training/`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Personal Training Sessions" />
                <meta name="twitter:description" content="Personal training sessions with Christopher Daoud to help you with your workout goals." />
                <meta name="twitter:image" content={`${url}/open-graph-fitvit.png`} />
                {/* <meta name="twitter:creator" content=""></meta> */}
            </Head>

            <Header></Header>
            <PageHeaderSolid headerTitle={'Personal Training'} subTitle={'with Christopher Daoud'} />

            <main className={utilStyles.main}>
                <div className="container-lg">
                    <h2 className={utilStyles.h2}>My Approach</h2> 

                    <p className={utilStyles.textParagraph}>
                        I work with individuals who want to achieve optimal health and become the best versions of themselves. Using information collected from the consultation and physical assessment, I design periodized workout routines to help them achieve their goals. My approach is science-based, client-centric, and personable. No matter where you are in life, you can and deserve to reach your full potential. I&#39;ll help you get there. 
                    </p>

                    <h2 className={utilStyles.h2}>Training</h2>

                    <p className={utilStyles.textParagraph}>
                        Let me help you achieve your full potential, whether you want to lose weight, increase muscle mass, or improve athletic performance. No matter where you are in life, I am here to help you achieve your goals. 
                    </p>
                    <p className={utilStyles.textParagraph}>
                        My training services are offered online or at your home. For in-home personal training sessions, I will bring all necessary workout equipment. 
                    </p>

                    <h3 className={utilStyles.h2}>Training</h3>

                    <h3 className={utilStyles.h3}>Step 1: Free Consultation</h3>
                    <p className={utilStyles.textParagraph}>
                        This in-depth conversation where we&#39;ll go over what you want to accomplish. We will discuss your goals, strengths, weaknesses, and past fitness experiences. 
                    </p>

                    <h3 className={utilStyles.h3}>Step 2: Physical Assessment</h3>
                    <p className={utilStyles.textParagraph}>
                        Understanding your body is crucial in creating the right program. Here we will measure your mobility, agility, core strength, balance, and breathing. 
                    </p>

                    <h3 className={utilStyles.h3}>Step 3: Your Personal Training Program</h3>
                    <p className={utilStyles.textParagraph}>
                        Every personal training program is 100% customized based. Your program is based on your goals and your body.    
                    </p>

                    <div>
                        Book a free consultation today! 
                    </div>

                    <Contact/>
                </div>
            </main>

            <Footer></Footer>

        </>
    );
}