import '@/styles/globals.css'
import { Tomorrow } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const tomorrow = Tomorrow({ weight: ['300', '400', '500', '600'], subsets: ['latin'] })

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: 'GWjHlCAyRQ-suLYu1DKVTUZ_BHr6-GXj' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'cloakr',
  projectId: '5c659807e18f4d904b533c75f7442276',
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
      <RainbowKitProvider chains={chains}>
        <ChakraProvider>
          <main className={tomorrow.className}>
            <Component {...pageProps} />
          </main>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};