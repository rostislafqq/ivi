import Head from 'next/head';
import React from 'react';

import { PromoSection } from '@components/organisms';

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
				<div className="container">
					<h1>Главная страница</h1>
				</div>
			</header>
			<PromoSection />
		</main>
	</>
);

export default Home;
