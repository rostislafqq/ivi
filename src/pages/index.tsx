import Head from 'next/head';
import React from 'react';

import { Avatar } from '@components/molecules';

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
				<Avatar href="test" />
			</header>
		</main>
	</>
);

export default Home;
