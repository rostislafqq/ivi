import Head from 'next/head';
import React from 'react';

import { Header, Footer } from '@/components/organisms';

import type { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({ title, description, children, headerSeparator = false }) => (
	<>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<Header separator={headerSeparator} />

		<main>{children}</main>

		<Footer />
	</>
);
