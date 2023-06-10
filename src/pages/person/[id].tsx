/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetServerSideProps } from 'next';

import React, { useState, useEffect } from 'react';

import { FilmTemplate, Layout, PersonTemplate } from '@/components/templates';

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
	console.log(person);
	return (
		<Layout title="123" description="Стриминговая платформа фильмов - Ivi">
			<PersonTemplate
				photo={person.url !== null ? person.url : ''}
				nameRus={person.nameRu}
				nameEng={person.nameOriginal}
				mainFilms={[]}
				filmographyFilms={[]}
				roles={['все', 'актер']}
			/>
		</Layout>
	);
};

export default Person;
