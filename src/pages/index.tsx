import Head from 'next/head';
import React from 'react';

import { FilmsSlider } from '@/components/molecules';
import { Section, SectionHeader, SectionHeading } from '@components/atoms';
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

			<Section id="top-films">
				<SectionHeader>
					<div className="container">
						<SectionHeading tag="h2">Топ 10 фильмов за неделю</SectionHeading>
					</div>
				</SectionHeader>

				<FilmsSlider films={[]} />
			</Section>

			<Section id="high-quality">
				<SectionHeader>
					<div className="container">
						<SectionHeading tag="h2">Фильмы в хорошем качестве</SectionHeading>
					</div>
				</SectionHeader>

				<FilmsSlider films={[]} />
			</Section>

			<Section id="category:foreign-films">
				<SectionHeader>
					<div className="container">
						<SectionHeading tag="h2" href="/" arrow>
							Зарубежные фильмы
						</SectionHeading>
					</div>
				</SectionHeader>

				<FilmsSlider films={[]} />
			</Section>
		</main>
	</>
);

export default Home;
