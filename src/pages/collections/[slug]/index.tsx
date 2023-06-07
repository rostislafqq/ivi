import React, { useState } from 'react';

import { CollectionsService } from '@/app/services';
import { Heading, Text } from '@/components/atoms';
import { Breadcrumb, FilmCardLoaded, SortBy } from '@/components/molecules';

import { Layout } from '@components/templates';

import type { CollectionBySlugProps } from './CollectionBySlugPage.types';
import type { GetServerSideProps } from 'next';

import styles from './CollectionBySlugPage.module.scss';

export const getServerSideProps: GetServerSideProps<CollectionBySlugProps> = async (context) => {
	const { slug } = context.query;

	try {
		const collection = await new CollectionsService().getBySlug(slug as string);

		return {
			props: {
				collection,
			},
		};
	} catch {
		return {
			notFound: true,
		};
	}
};

const CollectionBySlug: React.FC<CollectionBySlugProps> = ({ collection }) => {
	const sortByOptions = [
		{ label: 'названию', value: 'title' },
		{ label: 'дате добавления', value: 'new' },
		{ label: 'популярности', value: 'popular' },
		{ label: 'рейтингу IMDB', value: 'imdb' },
	];
	const [selectedOption, setSelectedOption] = useState(sortByOptions[0]);

	return (
		<Layout title={collection.name} description={collection.description} headerSeparator>
			<div className={styles['collections-header']}>
				<div className="container">
					<Breadcrumb
						className={styles['collections-header__breadcrumb']}
						variant="classic"
						items={[
							{ label: 'Главная', href: '/' },
							{ label: 'Подборки', href: '/collections' },
							{
								label: collection.name,
								href: `/collections/${collection.slug}`,
								active: true,
							},
						]}
					/>

					<Heading className={styles['collections-header__title']} tag="h1">
						{collection.name}
					</Heading>

					<Text className={styles['collections-header__description']} tag="p">
						{collection.description}
					</Text>
				</div>
			</div>

			<div className={styles['collections-filters']}>
				<div className="container">
					<div className={styles['collections-filters__row']}>
						<SortBy
							className={styles['collections-filter__sort']}
							options={sortByOptions}
							selectedOption={selectedOption}
							setSelectedOption={setSelectedOption}
						/>
					</div>
				</div>
			</div>

			<div className={styles['collections-menu']}>
				<div className="container">
					<div className={styles['collections-menu__row']}>
						<FilmCardLoaded
							href="/watch/1"
							name="Позывной «Журавли»"
							preview="/assets/images/film-cards/img1.jpg"
							status="subscribe"
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default CollectionBySlug;
