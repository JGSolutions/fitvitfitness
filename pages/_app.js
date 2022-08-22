import '../styles/globals.css'
import GoogleAnalytics from '../components/googleAnalytics'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
