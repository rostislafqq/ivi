import React from 'react';
import Head from 'next/head';

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
		</main>
	</>
);

export default Home;
