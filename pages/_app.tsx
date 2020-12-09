import { AppProps } from 'next/app'
import Layout from '../components/Navbar/Layout/Layout'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
