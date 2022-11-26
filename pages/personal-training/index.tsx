import Head from 'next/head';
import privacy from './personal-training.module.css';
import utilStyles from '../../styles/Utils.module.css'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PageHeaderSolid from '../../components/page-header-solid/page-header-solid';

export default function PersonalTraining() {
    return (
        <div>
            <Head>
                <title>FitVitFitness - Personal Training</title>
            </Head>

            <Header></Header>
            <PageHeaderSolid headerTitle={'Personal Training'} subTitle={'with Christopher Daoud'} />

            <main className={privacy.main}>
                <div className="container-lg">
                    <h2 className={utilStyles.h2}>My Approach</h2> 

                    <p className={utilStyles.textParagraph}>
                        I work with individuals who want to achieve optimal health and become the best versions of
                        themselves. Using information collected from the consultation and physical assessment, I design
                        periodized workout routines to help them achieve their goals. My approach is science-based, client-centric, and personable. No matter where you are in life, you can and deserve to reach your full potential. I'll help you get there. 
                    </p>

                </div>
            </main>

            <Footer></Footer>

        </div>
    );
}