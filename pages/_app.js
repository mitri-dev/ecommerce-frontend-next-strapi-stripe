import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { GoogleAuthProvider } from '../context/GoogleAuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <GoogleAuthProvider>
      <content>
        <Header />
        <Component {...pageProps} />
        <Footer/>
      </content>
    </GoogleAuthProvider>
  )
}

export default MyApp
