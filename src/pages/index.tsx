import React from 'react';

import { FilmsSlider } from '@/components/molecules';
import { Layout } from '@/components/templates';
import { Section, SectionHeader, SectionHeading } from '@components/atoms';
import { PromoSection } from '@components/organisms';

const Home: React.FC = () => (
	<Layout title="Ivi - Главная страница" description="Стриминговая платформа фильмов - Ivi">
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
	</Layout>
);

export default Home;
