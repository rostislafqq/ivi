/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect } from 'react';

import { Button, Heading, Input, InputGroup, Label, Text } from '@/components/atoms';

import { AdminAddFilm } from '@/components/organisms/AdminAddFilm/AdminAddFilm';

import { Layout } from '@/components/templates';

import styles from './admin.module.scss';
import { BadgeAdmin, Countries, Gengre, NewFilmData, Roles } from './admin.types';

const Admin: React.FC = () => {
	const [allGengres, setAllGengres] = useState<Gengre[]>([]);

	const [allCountries, setAllCountries] = useState<Countries[]>([]);

	const [allRoles, setAllRoles] = useState<Roles[]>([]);

	const [allBadges, setAllBadges] = useState<BadgeAdmin[]>([]);
	useEffect(() => {
		const getGengres = async () => {
			const res = await fetch('http://localhost:4000/genre/getAll', {
				credentials: 'include',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:4000',
				},
			});
			const data: Gengre[] = (await res.json()) as Gengre[];
			setAllGengres(data);
		};
		const getCountries = async () => {
			const res = await fetch('http://localhost:4000/country/getAll', {
				credentials: 'include',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:4000',
				},
			});
			const data: Countries[] = (await res.json()) as Countries[];
			setAllCountries(data);
		};
		const getRoles = async () => {
			const res = await fetch('http://localhost:4000/role', {
				credentials: 'include',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:4000',
				},
			});
			const data: Roles[] = (await res.json()) as Roles[];
			setAllRoles(data);
		};
		const getBadges = async () => {
			const res = await fetch('http://localhost:4000/badge/getAll', {
				credentials: 'include',
				headers: {
					'Access-Control-Allow-Origin': 'http://localhost:4000',
				},
			});
			const data: BadgeAdmin[] = (await res.json()) as BadgeAdmin[];
			setAllBadges(data);
		};
		getBadges();
		getRoles();
		getGengres();
		getCountries();
	}, []);

	// изменение фильма

	const addNewFilm = (params: NewFilmData) => {
		console.log(params);
		fetch('http://localhost:4000/film/create', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify(params),
		});
	};

	return (
		<Layout title="ivi админ-панель" description="Стриминговая платформа фильмов - Ivi">
			<div className={`${styles.admin} container`}>
				<AdminAddFilm
					allGengres={allGengres}
					allCountries={allCountries}
					allRoles={allRoles}
					allBadges={allBadges}
					addNewFilm={addNewFilm}
				/>
			</div>
		</Layout>
	);
};

export default Admin;
