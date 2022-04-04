import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ThirdwebWeb3Provider} from '@3rdweb/hooks';
import { useEffect } from 'react';


/**
 * The chain ID 4 represents the Rinkeby network
 * The `injected` connector is a web3 connection method used by Metamask
 */

const supportedChainIds = [4];
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
