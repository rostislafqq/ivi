/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetServerSideProps } from 'next';

import React, { useState, useCallback, useEffect } from 'react';

import { stockImg } from '@/app/data/stockImg';

import { useAppSelector } from '@/app/hooks';
import { selectLanguage } from '@/app/store/language/languageSlice';

import { FilmType } from '@/app/types';

import { Layout, PersonTemplate } from '@/components/templates';

import { PersonFilmData, PersonProps } from './person.types';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;

	try {
		const res = await fetch(`http://localhost:4000/person/${id}`, {
			credentials: 'include',
			headers: {
				'Access-Control-Allow-Origin': 'http://localhost:4000',
			},
		});

		const data: PersonFilmData = await res.json();

		return {
			props: {
				person: data,
			},
		};
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			person: null,
		},
	};
};

const Person: React.FC<PersonProps> = ({ person }) => {
	const { language } = useAppSelector(selectLanguage);

	const [mainFilms, setMainFilms] = useState<FilmType[]>(
		person.filmPersons
			.filter((val) => val.general !== false)
			.map((val) => ({
				name: language === 'ru' ? val.film.nameRu : val.film.nameOriginal,
				preview: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
				status: val.film.status,
				href: `/watch/${val.filmId}`,
			})),
	);
	const [fullFilms, setFullFilms] = useState(
		person.filmPersons.map((val) => ({
			filmImg: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
			year: val.film.year,
			filmName: language === 'ru' ? val.film.nameRu : val.film.nameOriginal,
			rating: val.film.rating,
			filmId: val.filmId,
		})),
	);
	const [allRoles, setAllRoles] = useState(
		Array.from(
			new Set(person.filmPersons.map((val) => (language === 'ru' ? val.role.name : val.role.key.toLowerCase()))),
		),
	);
	const changeRole = useCallback(
		(tab: string) => {
			if (tab === 'Все' || tab === 'All') {
				setFullFilms(
					person.filmPersons.map((val) => ({
						filmImg: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
						year: val.film.year,
						filmName: language === 'ru' ? val.film.nameRu : val.film.nameOriginal,
						rating: val.film.rating,
						filmId: val.filmId,
					})),
				);
				return;
			}
			if (language === 'en') {
				setFullFilms(
					person.filmPersons
						.filter((val) => val.role.key.toLocaleLowerCase() === tab)
						.map((val) => ({
							filmImg: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
							year: val.film.year,
							filmName: val.film.nameOriginal,
							rating: val.film.rating,
							filmId: val.filmId,
						})),
				);
				return;
			}
			setFullFilms(
				person.filmPersons
					.filter((val) => val.role.name === tab)
					.map((val) => ({
						filmImg: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
						year: val.film.year,
						filmName: language === 'ru' ? val.film.nameRu : val.film.nameOriginal,
						rating: val.film.rating,
						filmId: val.filmId,
					})),
			);
		},
		[person.filmPersons, language],
	);

	useEffect(() => {
		setFullFilms(
			person.filmPersons.map((val) => ({
				filmImg: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
				year: val.film.year,
				filmName: language === 'ru' ? val.film.nameRu : val.film.nameOriginal,
				rating: val.film.rating,
				filmId: val.filmId,
			})),
		);
		setMainFilms(
			person.filmPersons
				.filter((val) => val.general !== false)
				.map((val) => ({
					name: language === 'ru' ? val.film.nameRu : val.film.nameOriginal,
					preview: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
					status: val.film.status,
					href: `/watch/${val.filmId}`,
				})),
		);
		setAllRoles(
			Array.from(
				new Set(person.filmPersons.map((val) => (language === 'ru' ? val.role.name : val.role.key.toLowerCase()))),
			),
		);
	}, [language]);
	return (
		<Layout title={`${person.nameOriginal}`} description="Стриминговая платформа фильмов - Ivi">
			<PersonTemplate
				photo={person.url !== null ? person.url : ''}
				nameRus={person.nameRu}
				nameEng={person.nameOriginal}
				mainFilms={mainFilms}
				filmographyFilms={fullFilms}
				roles={[language === 'ru' ? 'Все' : 'All', ...allRoles]}
				changeRole={changeRole}
				filmsCount={person.filmPersons.length}
				language={language}
			/>
		</Layout>
	);
};

export default Person;
