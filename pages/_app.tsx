import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import { trpc } from '../utils/trpc';

function App({ Component, pageProps:{ session, ...pageProps}, }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default trpc.withTRPC(App);

