/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect } from 'react';

import { useAppSelector } from '@/app/hooks';

import { selectLanguage } from '@/app/store/language/languageSlice';

import { AdminAddFilm, AdminChangeFilm } from '@/components/organisms';

import { Layout } from '@/components/templates';

import { FilmData } from '../watch/watch.types';

import styles from './admin.module.scss';
import { BadgeAdmin, Countries, Gengre, NewFilmData, Roles, SearchingFilmsData } from './admin.types';

const Admin: React.FC = () => {
	const { language } = useAppSelector(selectLanguage);

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

	const addNewFilm = (params: NewFilmData) => {
		fetch('http://localhost:4000/film/create', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify(params),
		});
	};

	// изменение фильма
	const [serchFilm, setSerchFilm] = useState('');
	const [foundFilms, setFoundFilms] = useState<SearchingFilmsData>();
	const [chosenFilm, setChosenFilm] = useState<number>();
	const [chosenFilmData, setChosenFilmData] = useState<FilmData>([]);
	useEffect(() => {
		const searchFilms = async () => {
			if (serchFilm.length > 3) {
				const res = await fetch(`http://localhost:4000/film/search?option=${serchFilm}`, {
					credentials: 'include',
					headers: {
						'Access-Control-Allow-Origin': 'http://localhost:4000',
					},
				});
				const data: SearchingFilmsData = (await res.json()) as SearchingFilmsData;
				setFoundFilms(data);
			}
		};
		searchFilms();
	}, [serchFilm]);

	useEffect(() => {
		const getChosenFilmData = async () => {
			if (chosenFilm) {
				const res = await fetch(`http://localhost:4000/film/${chosenFilm}`, {
					credentials: 'include',
					headers: {
						'Access-Control-Allow-Origin': 'http://localhost:4000',
					},
				});
				const data: FilmData = (await res.json()) as FilmData;
				setChosenFilmData(data);
			}
		};
		getChosenFilmData();
	}, [chosenFilm]);
	const deleteFilm = (id: number) => {
		fetch(`http://localhost:4000/film/delete/${id}`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				'Access-Control-Allow-Origin': 'http://localhost:4000',
			},
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
					language={language}
				/>
				<AdminChangeFilm
					setChosenFilm={setChosenFilm}
					setSerchFilm={setSerchFilm}
					serchFilm={serchFilm}
					foundFilms={foundFilms}
					chosenFilmData={chosenFilmData}
					allGengres={allGengres}
					allCountries={allCountries}
					allRoles={allRoles}
					allBadges={allBadges}
					addNewFilm={addNewFilm}
					deleteFilm={deleteFilm}
					language={language}
				/>
			</div>
		</Layout>
	);
};

export default Admin;
