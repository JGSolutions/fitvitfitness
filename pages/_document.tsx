import { Html, Head, Main, NextScript } from 'next/document'

function MyDocument() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400;600&display=swap" rel="stylesheet"></link>
                <meta name="theme-color" content="#121111" />
            </Head>
            <body>
                <Main />
                <NextScript />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    `,
                    }}
                    />
            </body>
        </Html>
    )
}

export default MyDocument