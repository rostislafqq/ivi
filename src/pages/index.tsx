import React from 'react';

import { CollectionsService } from '@/app/services';

import { FilmsSlider } from '@/components/molecules';
import { Layout } from '@/components/templates';
import { Section, SectionHeader, SectionHeading } from '@components/atoms';
import { PromoSection } from '@components/organisms';

import type { CollectionType } from '@/app/types';
import type { GetStaticProps } from 'next';

interface HomeProps {
	collections: CollectionType[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const collections = await new CollectionsService().getAll();

	return {
		props: {
			collections,
		},
	};
};

const Home: React.FC<HomeProps> = ({ collections }) => (
	<Layout title="Ivi - Главная страница" description="Стриминговая платформа фильмов - Ivi">
		<PromoSection />

		{collections.map((collection) => (
			<Section key={collection.id} id={`collection-${collection.id}`}>
				<SectionHeader>
					<div className="container">
						<SectionHeading tag="h2" href={`/collections/${collection.id}`} arrow>
							{collection.name}
						</SectionHeading>
					</div>
				</SectionHeader>

				<FilmsSlider films={collection.films} />
			</Section>
		))}
	</Layout>
);

export default Home;
