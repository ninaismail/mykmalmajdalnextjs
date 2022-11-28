import '../styles/globals.css'
import { CartProvider } from "react-use-cart";

import '../styles/fonts.css'
function MyApp({ Component, pageProps }) {
    return (
      <CartProvider><Component {...pageProps} /></CartProvider> 
  )
}
export default MyApp