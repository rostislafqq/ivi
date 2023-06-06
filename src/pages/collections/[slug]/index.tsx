import React, { useState } from 'react';

import { Heading, Text } from '@/components/atoms';
import { Breadcrumb, FilmCardLoaded, SortBy } from '@/components/molecules';

import { Layout } from '@components/templates';

import styles from './CollectionsDetailPage.module.scss';

const CollectionsDetailPage: React.FC = () => {
	const sortByOptions = [
		{ label: 'названию', value: 'title' },
		{ label: 'дате добавления', value: 'new' },
		{ label: 'популярности', value: 'popular' },
		{ label: 'рейтингу IMDB', value: 'imdb' },
	];
	const [selectedOption, setSelectedOption] = useState(sortByOptions[0]);

	return (
		<Layout title="Рекомендую посмотреть онлайн" description="Рекомендую посмотреть онлайн" headerSeparator>
			<div className={styles['collections-header']}>
				<div className="container">
					<Breadcrumb
						className={styles['collections-header__breadcrumb']}
						variant="classic"
						items={[
							{ label: 'Главная', href: '/' },
							{ label: 'Подборки', href: '/collections' },
							{
								label: 'Рекомендую посмотреть',
								href: '/collections/rekomenduem-vam-posmotret',
								active: true,
							},
						]}
					/>

					<Heading className={styles['collections-header__title']} tag="h1">
						Рекомендую посмотреть онлайн
					</Heading>

					<Text className={styles['collections-header__description']} tag="p">
						Боевики, Комедии, Мелодрамы, Фантастика, Триллеры, Россия, США, Великобритания, Швейцария,
						Армения, Испания, Аргентина, 2023
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

export default CollectionsDetailPage;
