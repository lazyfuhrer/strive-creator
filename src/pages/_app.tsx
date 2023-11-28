import '@/styles/globals.css'
import { Tomorrow } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const tomorrow = Tomorrow({ weight: ['300', '400', '500', '600'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={tomorrow.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
};