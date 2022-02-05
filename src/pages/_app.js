import React from 'react';
import Head from 'next/head';
import { Layout } from '../components'

import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';

const CodingKota = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default CodingKota;