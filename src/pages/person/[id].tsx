/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetServerSideProps } from 'next';

import React, { useState, useCallback } from 'react';

import { stockImg } from '@/app/data/stockImg';

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
	const [mainFilms] = useState<FilmType[]>(
		person.filmPersons
			.filter((val) => val.general !== false)
			.map((val) => ({
				name: val.film.nameRu,
				preview: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
				status: val.film.status,
				href: `/watch/${val.filmId}`,
			})),
	);
	const [fullFilms, setFullFilms] = useState(
		person.filmPersons.map((val) => ({
			filmImg: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
			year: val.film.year,
			filmName: val.film.nameRu,
			rating: val.film.rating,
			filmId: val.filmId,
		})),
	);
	const [allRoles] = useState(Array.from(new Set(person.filmPersons.map((val) => val.role.name))));
	const changeRole = useCallback(
		(tab: string) => {
			if (tab === 'Все') {
				setFullFilms(
					person.filmPersons.map((val) => ({
						filmImg: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
						year: val.film.year,
						filmName: val.film.nameRu,
						rating: val.film.rating,
						filmId: val.filmId,
					})),
				);
			} else
				setFullFilms(
					person.filmPersons
						.filter((val) => val.role.name === tab)
						.map((val) => ({
							filmImg: val.film.logoUrl === null ? stockImg : val.film.logoUrl,
							year: val.film.year,
							filmName: val.film.nameRu,
							rating: val.film.rating,
							filmId: val.filmId,
						})),
				);
		},
		[person.filmPersons],
	);
	return (
		<Layout title={`${person.nameOriginal}`} description="Стриминговая платформа фильмов - Ivi">
			<PersonTemplate
				photo={person.url !== null ? person.url : ''}
				nameRus={person.nameRu}
				nameEng={person.nameOriginal}
				mainFilms={mainFilms}
				filmographyFilms={fullFilms}
				roles={['Все', ...allRoles]}
				changeRole={changeRole}
				filmsCount={person.filmPersons.length}
			/>
		</Layout>
	);
};

export default Person;
