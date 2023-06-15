import { useSearchParams } from 'next/navigation';
import React, { useState, useReducer, useEffect } from 'react';

import { COUNTRIES_SELECT_OPTIONS } from '@/app/data/countriesSelectOptions';
import { GENRES_SELECT_OPTIONS } from '@/app/data/genresSelectOptions';

import { CollectionsService } from '@/app/services';
import { Heading, Text } from '@/components/atoms';
import { Breadcrumb, FilmCardLoaded, SortBy, CollectionsFilter } from '@/components/molecules';
import { Layout } from '@components/templates';

import type { SortByOptionType, FiltersStateType, CollectionBySlugProps } from './CollectionByIdPage.types';
import type { SelectOptionType, FilmType } from '@/app/types';
import type { GetServerSideProps } from 'next';

import styles from './CollectionByIdPage.module.scss';

export const getServerSideProps: GetServerSideProps<CollectionBySlugProps> = async (context) => {
	const { id } = context.query;

	try {
		const collection = await new CollectionsService().getById(Number(id));

		if (!collection) throw Error('Collection not found');
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

const sortByOptions: SortByOptionType[] = [
	{ label: 'названию', value: 'abc' },
	{ label: 'рейтингу', value: 'rating' },
	{ label: 'годам', value: 'year' },
];

const addOption = (currentOption: SelectOptionType, list: SelectOptionType[]) => {
	const isFound = list.find((option) => option.value === currentOption.value);
	if (!isFound) {
		return [...list, currentOption];
	}
	return list.filter((option) => option.value !== currentOption.value);
};

const findOptions = (values: string[], list: SelectOptionType[]) =>
	values.map((value) => {
		const foundOption = list.find((option) => option.value === value);
		return foundOption;
	}) as SelectOptionType[];

const filtersInitialState = {
	genres: [],
	countries: [],
	rating: 1,
	stars: 10_000,
} as FiltersStateType;

function filtersReducer(state: FiltersStateType, action: { type: string; payload?: { value: unknown } }) {
	switch (action.type) {
		case 'ADD_GENRE': {
			if (action.payload?.value) {
				const genre = action.payload.value as SelectOptionType;
				const newGenres = addOption(genre, state.genres);
				return { ...state, genres: newGenres };
			}
			return state;
		}
		case 'ADD_COUNTRY': {
			if (action.payload?.value) {
				const country = action.payload.value as SelectOptionType;
				const newCounties = addOption(country, state.countries);
				return { ...state, countries: newCounties };
			}
			return state;
		}
		case 'CHANGE_RATING': {
			if (action.payload?.value) {
				return { ...state, rating: action.payload.value as number };
			}
			return state;
		}
		case 'CHANGE_STARS': {
			if (action.payload?.value) {
				return { ...state, stars: action.payload.value as number };
			}
			return state;
		}
		case 'RESET_STATE': {
			return filtersInitialState;
		}
		default:
			return state;
	}
}

const CollectionBySlug: React.FC<CollectionBySlugProps> = ({ collection }) => {
	const searchParams = useSearchParams();

	const sortOptionBySearchParam = sortByOptions.find((option) => option.value === searchParams.get('sort'));
	const [selectedSortOption, setSelectedSortOption] = useState(sortOptionBySearchParam ?? sortByOptions[0]);

	const [filtersState, filtersDispatch] = useReducer(filtersReducer, {
		genres: findOptions(searchParams.getAll('genre'), GENRES_SELECT_OPTIONS) || filtersInitialState.genres,
		countries:
			findOptions(searchParams.getAll('country'), COUNTRIES_SELECT_OPTIONS) || filtersInitialState.countries,
		rating: Number(searchParams.get('rating')) || filtersInitialState.rating,
		stars: Number(searchParams.get('stars')) || filtersInitialState.stars,
	});

	const [films, setFilms] = useState(collection.films);

	useEffect(() => {
		const url = new URL(`http://localhost:4000/film/filter/`);
		url.searchParams.set('sort', selectedSortOption.value);

		fetch(url)
			.then((response) => response.json())
			.then((data: FilmType[]) => setFilms(data))
			.catch(() => setFilms([]));
	}, [filtersState.genres, selectedSortOption]);

	return (
		<Layout title={collection.name} description="" headerSeparator>
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
								href: `/collections/${collection.id}`,
								active: true,
							},
						]}
					/>

					<Heading className={styles['collections-header__title']} tag="h1">
						{collection.name}
					</Heading>

					<Text className={styles['collections-header__description']} tag="p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, sed aperiam voluptate,
						repudiandae reprehenderit velit voluptates eveniet consequatur dignissimos, cum inventore nobis
						exercitationem at similique porro quod nihil dolorum? Mollitia, repellendus suscipit aperiam
						quisquam itaque rem sint consectetur dolorem sed maxime? Eligendi amet quasi dolorum impedit qui
						asperiores nesciunt accusamus?
					</Text>
				</div>
			</div>

			<div className={styles['collections-filters']}>
				<div className="container">
					<div className={styles['collections-filters__row']}>
						<CollectionsFilter state={filtersState} dispatch={filtersDispatch} />

						<SortBy
							className={styles['collections-filter__sort']}
							options={sortByOptions}
							selectedOption={selectedSortOption}
							setSelectedOption={setSelectedSortOption}
						/>
					</div>
				</div>
			</div>

			<div className={styles['collections-menu']}>
				<div className="container">
					<div className={styles['collections-menu__row']}>
						{films.map((film) => (
							<FilmCardLoaded key={film.id} {...film} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default CollectionBySlug;
