import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {ThirdwebWeb3Provider} from '@3rdweb/hooks';
import { useEffect } from 'react';

const supportedChainIds = [4];
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
