/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// я хз, он мне предлагает catch добавить (а он есть )00)000 )

import { GetServerSideProps } from 'next';

import React, { useState, useEffect } from 'react';

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
	const filmCreators = film.personsfilm.map((person) => ({
		name: person.person.nameRu.split(' ')[0],
		surname: person.person.nameRu.split(' ')[1],
		image: person.person.url === null ? '' : person.person.url,
		href: person.personId.toString(),
	}));
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
						name: films.nameRu,
						preview:
							films.coverUrl === null
								? 'data:image/jpeg;base64,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'
								: films.coverUrl,
						status: films.status,
						href: `./${films.id}`,
					})),
				);
			} catch (error) {
				setRecommended([]);
			}
		};
		getFilms();
	}, [film]);

	return (
		<Layout title={`${film.nameOriginal}`} description="Стриминговая платформа фильмов - Ivi">
			<FilmTemplate
				extra="Интересный сюжет"
				filmGenre={film.genres[0].genre}
				badgeContent={film.badge.content}
				badgeColor={film.badge.type}
				filmType={film.type}
				heading={film.nameRu}
				year={film.year}
				duration={film.filmLength}
				yearOld={film.ratingAgeLimits}
				filmParams={film.genres.map((genre) => genre.genre)}
				badges={['FullHD', 'HD', '720p']}
				langs={['рус', 'eng']}
				rating={film.rating}
				actors={filmCreators}
				accordionText={film.description}
				btnValues={[`Развернуть детали о ${film.type === 'FILM' ? 'фильме' : 'сериале'}`, 'Свернуть']}
				languages={['Русский', 'Английский']}
				assessment={film.ratingCount}
				creatorsCards={filmCreators}
				reviews={rewsCreator}
				filmName={film.nameRu}
				filmPersonHref={film.id}
				films={recommended}
			/>
		</Layout>
	);
};

export default Film;
