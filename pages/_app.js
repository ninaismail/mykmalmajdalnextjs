import '../styles/globals.css'
import { CartProvider } from "react-use-cart";

import '../styles/fonts.css'
import Navbar from '../components/layout/main-header';
import LangSwitch from '../components/layout/langswitch';
import  { AppProps } from 'next/app'

function MyApp({ Component, pageProps,  ...appProps }) {

    if ([`/dashboard`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    return (
      <CartProvider><LangSwitch/><Navbar /><Component {...pageProps} /></CartProvider> 
  )

}
export default MyApp