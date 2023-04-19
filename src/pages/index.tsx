import React from 'react';
import Head from 'next/head';
import { MenuLink, MenuTitle } from '@components/atoms';
import { Menu } from '@components/molecules';

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
				<div className="container" style={{ display: 'flex' }}>
					<h1 style={{ color: '#fff', margin: '0 20px 0 0' }}>Главная страница</h1>
					<Menu>
						{/*<MenuTitle text={'О нас'} />*/}
						<MenuLink text={'Мой Иви'} href={'#my'} />
						<MenuLink text={'Что нового'} href={'#new'} />
						<MenuLink text={'Фильмы'} href={'#films'} />
					</Menu>
				</div>
			</header>
		</main>
	</>
);

export default Home;
