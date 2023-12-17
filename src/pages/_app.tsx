import '@/styles/globals.css'
import { Tomorrow } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const tomorrow = Tomorrow({ weight: ['300', '400', '500', '600'], subsets: ['latin'] });

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: process.env.NEXT_PUBLIC_ALCHEMY_APP_NAME as string,
  projectId: process.env.NEXT_PUBLIC_ALCHEMY_PROJECT_ID as string,
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        coolMode
        theme={darkTheme({
          accentColor: '#7b3fe4',
          accentColorForeground: 'white',
          fontStack: 'system',
          overlayBlur: 'small',
        })}
        chains={chains}
      >
        <ChakraProvider toastOptions={{ defaultOptions: { position: 'top-right' } }}>
          <main className={tomorrow.className}>
            <Component {...pageProps} />
          </main>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};