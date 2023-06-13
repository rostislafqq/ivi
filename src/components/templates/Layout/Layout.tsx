import Head from 'next/head';
import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';

import { Header, Footer } from '@/components/organisms';

import type { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
	const lang = useSelector((state: RootState) => state.language.languageActive);
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>{children}</main>

			<Footer lang={lang} />
		</>
	);
};
