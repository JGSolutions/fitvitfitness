import Head from 'next/head'
import styles from '../styles/Home.module.css'
import buttonStyle from '../styles/Button.module.css'
import utilsStyle from '../styles/Utils.module.css'
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Image from 'next/image';

export default function Page() {
    return (
        <>
            <Header></Header>
            <main className={utilsStyle.main}>

                <section className={utilsStyle.sections}>
                <div className={utilsStyle.flexCol} style={{alignItems: 'flex-start', marginBottom: '48px'}}>
                    <h1 className={styles.heroText}>
                    Launching a new site soon
                    {/* Track <span className={utilsStyle.secondaryColor}>gym</span> <br/> or <span className={utilsStyle.primaryColor}>home</span> <br/> workouts AND <br/> your <span className={utilsStyle.secondaryColor}>health</span>. */}
                    </h1>

                    <span className={styles.heroSubTextContainer}>
                    Providing all types of free workouts for any 
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
        </>
    );
}