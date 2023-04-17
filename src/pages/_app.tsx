<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> dce045408b58b68869e52f9ac684c5e8b2457f31
import type { AppProps } from 'next/app';

import '@/config/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
