import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../global.css'
import CartProvider from '@store/Cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
