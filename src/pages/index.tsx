import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return <>
    <Head>
        <title>Ivi - Главная</title>
        <meta name="description" content="Ivi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Home Page</h1>
  </>
}

export default Home