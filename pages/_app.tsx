import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import React from 'react';
import '../styles/globals.sass';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>My Best React App</title>
        <meta name="description" content="Created by headsmanc0de" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
