import React from 'react';

import { Layout } from '@/components/templates';

import type { AppProps } from 'next/app';

import '@/config/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
