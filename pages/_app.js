import '../styles/globals.css'
import { CartProvider } from "react-use-cart";

import '../styles/fonts.css'
import Navbar from '../components/layout/main-header';
import Footer from '../components/layout/footer';
import LangSwitch from '../components/layout/langswitch';
import  { AppProps } from 'next/app'

function MyApp({ Component, pageProps,  ...appProps }) {

    if ([`/dashboard`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    if ([`/_error`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    return (
      <CartProvider><LangSwitch/><Navbar /><Component {...pageProps} /><Footer /></CartProvider> 
  )

}
export default MyApp