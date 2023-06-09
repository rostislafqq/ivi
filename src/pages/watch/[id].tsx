/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// я хз, он мне предлагает catch добавить (а он есть )00)000 )

import { GetServerSideProps } from 'next';

import React, { useState, useEffect } from 'react';

import { translation } from '@/../public/locales/translation';

import { stockImg } from '@/app/data/stockImg';

import { useAppSelector } from '@/app/hooks';
import { selectLanguage } from '@/app/store/language/languageSlice';

import { FilmType } from '@/app/types';

import { FilmTemplate, Layout } from '@/components/templates';

import { FilmData, FilmProps } from './watch.types';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;

	try {
		const res = await fetch(`http://localhost:4000/film/${id}`, {
			credentials: 'include',
			headers: {
				'Access-Control-Allow-Origin': 'http://localhost:4000',
			},
		});

		const data: FilmData = await res.json();

		return {
			props: {
				film: data,
			},
		};
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			film: null,
		},
	};
};

const Film: React.FC<FilmProps> = ({ film }) => {
	const { language } = useAppSelector(selectLanguage);

	const [filmCreators, setFilmCreators] = useState(
		film.personsfilm.map((person) => ({
			name: language === 'ru' ? person.person.nameRu.split(' ')[0] : person.person.nameOriginal.split(' ')[0],
			surname: language === 'ru' ? person.person.nameRu.split(' ')[1] : person.person.nameOriginal.split(' ')[1],
			image: person.person.url === null ? '' : person.person.url,
			href: person.personId.toString(),
		})),
	);

	const rewsCreator = film.comments.map((comment) => ({
		userName: 'user',
		likes: 0,
		date: comment.createdAt,
		comment: comment.comment,
	}));
	const [recommended, setRecommended] = useState<FilmType[]>([]);

	useEffect(() => {
		const getFilms = async () => {
			try {
				const res = await fetch(`http://localhost:4000/film/filter?genre=${film.genres[0].id}`, {
					credentials: 'include',
					headers: {
						'Access-Control-Allow-Origin': 'http://localhost:4000',
					},
				});
				const data: FilmData[] = await res.json();
				setRecommended(
					data.slice(0, 10).map((films) => ({
						id: films.id,
						nameOriginal: films.nameOriginal,
						nameRu: films.nameRu,
						status: films.status,
						coverUrl: films.coverUrl || stockImg,
					})) as FilmType[],
				);
			} catch (error) {
				setRecommended([]);
			}
		};
		getFilms();
	}, [film]);

	useEffect(() => {
		setFilmCreators(
			film.personsfilm.map((person) => ({
				name: language === 'ru' ? person.person.nameRu.split(' ')[0] : person.person.nameOriginal.split(' ')[0],
				surname:
					language === 'ru' ? person.person.nameRu.split(' ')[1] : person.person.nameOriginal.split(' ')[1],
				image: person.person.url === null ? '' : person.person.url,
				href: person.personId.toString(),
			})),
		);
		setRecommended(
			recommended &&
				(recommended.map((films) => ({
					id: films.id,
					nameOriginal: films.nameOriginal,
					nameRu: films.nameRu,
					status: films.status,
					coverUrl: films.coverUrl || stockImg,
				})) as FilmType[]),
		);
	}, [language]);
	return (
		<Layout title={`${film.nameOriginal}`} description="Стриминговая платформа фильмов - Ivi">
			<FilmTemplate
				extra={translation[language].film.extra}
				filmGenre={film.genres[0].genre}
				badgeContent={film.badge.content}
				badgeColor={film.badge.type}
				filmType={film.type}
				heading={language === 'ru' ? film.nameRu : film.nameOriginal}
				year={film.year}
				duration={film.filmLength}
				yearOld={film.ratingAgeLimits}
				filmParams={film.genres.map((genre) => genre.genre)}
				badges={['FullHD', 'HD', '720p']}
				langs={['рус', 'eng']}
				rating={film.rating}
				actors={filmCreators}
				accordionText={film.description}
				btnValues={
					language === 'ru'
						? [`Развернуть детали о ${film.type === 'FILM' ? 'фильме' : 'сериале'}`, 'Свернуть']
						: ['Expand movie details', 'Roll up']
				}
				languages={translation[language].film.languages}
				assessment={film.ratingCount}
				creatorsCards={filmCreators}
				reviews={rewsCreator}
				filmName={film.nameRu}
				filmPersonHref={film.id}
				films={recommended}
				lang={language}
			/>
		</Layout>
	);
};

export default Film;
