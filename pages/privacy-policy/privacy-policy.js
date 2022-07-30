import Link from 'next/link';
import Head from 'next/head';

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>FitVitFitness Privacy Policy</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Privacy Policy</h1>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </>
    );
  }