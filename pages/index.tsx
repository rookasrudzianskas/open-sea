import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>BlockChain Marketplace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
        <Hero />
    </div>
  )
}

export default Home;
