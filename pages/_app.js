import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
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
