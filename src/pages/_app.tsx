import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { MyUserLoginContextWrapper } from '../context/Context'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700',]

})

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MyUserLoginContextWrapper>
        <Head>
          <title>Pede Fast</title>
        </Head>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </MyUserLoginContextWrapper>
    </QueryClientProvider>


  );
}
