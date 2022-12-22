import '../styles/globals.css'
import { CartProvider } from "react-use-cart";

import '../styles/fonts.css'
import Navbar from '../components/layout/main-header';
import Footer from '../components/layout/footer';
import LangSwitch from '../components/layout/langswitch';
import  { AppProps } from 'next/app'
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import ar from "../lang/ar";
import en from "../lang/en";
const messages = {
  ar,
  en,
};
function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}
function MyApp({ Component, pageProps,  ...appProps }) {
  const { locale } = useRouter();

    if ([`/dashboard`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    if ([`/_error`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
      <CartProvider><LangSwitch/><Navbar /><Component {...pageProps} dir={getDirection(locale)} /><Footer /></CartProvider> 
      </IntlProvider>
  )

}
export default MyApp