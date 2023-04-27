import { NavBar } from '@components/molecules';
import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => (
	<>
		<Head>
			<title>Ivi - Главная</title>
			<meta name="description" content="Ivi" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main>
			<header id="page-header">
				{/*<div className="container">*/}
				{/*	<h1>Главная страница</h1>*/}
				{/*</div>*/}
				<NavBar menu={<div>menu</div>} actionGroup={<p>action group2</p>} />
			</header>
		</main>
	</>
);

export default Home;
