/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GetServerSideProps } from 'next';

import React, { useState, useEffect } from 'react';

import { FilmTemplate, Layout } from '@/components/templates';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;

	try {
		const res = await fetch(`http://localhost:4000/person/${id}`, {
			credentials: 'include',
			headers: {
				'Access-Control-Allow-Origin': 'http://localhost:4000',
			},
		});

		const data: PersonData = await res.json();

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
	return <Layout title="123" description="Стриминговая платформа фильмов - Ivi"></Layout>;
};

export default Person;
