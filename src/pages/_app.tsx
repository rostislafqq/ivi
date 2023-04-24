import React from 'react';

import { FontProvider } from '@/app/providers';

import type { AppProps } from 'next/app';

import '@/config/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<FontProvider>
			<Component {...pageProps} />
		</FontProvider>
	);
}
