/* eslint-disable @typescript-eslint/no-floating-promises */
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import Head from 'next/head';
import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/app/store';

import { checkAuth } from '@/app/store/auth/authSlice';

import { setlanguage } from '@/app/store/language/languageSlice';

import { Header, Footer } from '@/components/organisms';

import type { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
	type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
	const lang = useSelector((state: RootState) => state.language.languageActive);
	const dispatch: AppDispatch = useDispatch();
	const setLang = (choseLang: 'en' | 'ru') => dispatch(setlanguage(choseLang));
	useEffect(() => {
		dispatch(checkAuth());
	}, []);
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header language={lang} setLang={setLang} />

			<main>{children}</main>

			<Footer lang={lang} />
		</>
	);
};
