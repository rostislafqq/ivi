import Link from 'next/link';

import React, { useEffect, useState } from 'react';

import { translation } from '@/../public/locales/translation';

import { useResizeWindow } from '@/app/hooks';

import { HeadingLink, Section, SectionHeader, SectionHeading } from '@/components/atoms';
import { CreatorsCard, FilmsSlider } from '@/components/molecules';

import { ReviewsSlider } from '@/components/molecules/ReviewsSlider/ReviewsSlider';

import styles from './FilmTemplateUnderside.module.scss';
import { FilmTemplateUndersideProps } from './FilmTemplateUnderside.type';

export const FilmTemplateUnderside: React.FC<FilmTemplateUndersideProps> = ({
	filmType,
	films,
	filmName,
	creatorsCards,
	filmPersonHref = '',
	reviews,
	lang = 'ru',
}) => {
	const [widthWindow] = useResizeWindow();
	const [creatorsCount, setCreatorsCount] = useState(10);
	useEffect(() => {
		if (creatorsCount * (88 + 24) + 88 + 90 > widthWindow && widthWindow > 1) {
			let count = Math.floor(widthWindow / (88 + 100));
			setCreatorsCount(count);
			if (count > 10) {
				count = 10;
				setCreatorsCount(count);
			}
		}
	}, [widthWindow]);
	return (
		<div className={styles.FilmTemplateUnderside}>
			<Section id="filmsToWatch">
				<SectionHeader>
					<div className="container">
						<SectionHeading tag="h2">
							{lang === 'ru'
								? `С ${filmType === 'FILM' ? 'фильмом' : 'сериалом'} «${filmName}» смотрят `
								: translation[lang].film.watchWithThisMovie}
						</SectionHeading>
					</div>
				</SectionHeader>

				<FilmsSlider films={films} />
			</Section>
			<Section id="actorsFilm" className={`${styles.FilmTemplateUnderside__creators} container`}>
				<HeadingLink className={styles.FilmTemplateUnderside__creatorsHeader} href="/" tag="h2">
					{translation[lang].film.actorsAndCreators}
				</HeadingLink>
				{creatorsCards.length > 0 ? (
					<div className={styles.FilmTemplateUnderside__creatorsContainer}>
						{creatorsCards.slice(0, creatorsCount).map((val) => (
							<CreatorsCard
								image={val.image}
								key={val.href}
								href={val.href}
								name={val.name}
								surname={val.surname}
								type="circle"
								size="normal"
							/>
						))}
						<Link href={`${filmPersonHref}/person`} className={styles.FilmTemplateUnderside__creatorsMore}>
							{translation[lang].film.more}
						</Link>
					</div>
				) : (
					<Section id="zerorews">
						<SectionHeader>
							<div className="container">
								<SectionHeading tag="h2">{translation[lang].film.zeroInform} 🤨</SectionHeading>
							</div>
						</SectionHeader>
					</Section>
				)}
			</Section>
			{reviews.length > 0 ? (
				<Section id="filmComments">
					<SectionHeader>
						<div className="container">
							<SectionHeading count={reviews.length ? reviews.length : 0} tag="h2">
								{translation[lang].film.reviews}
							</SectionHeading>
						</div>
					</SectionHeader>
					<ReviewsSlider reviews={reviews.slice(0, 10)} />
				</Section>
			) : (
				<Section id="zerorews">
					<SectionHeader>
						<div className="container">
							<SectionHeading tag="h2">{translation[lang].film.zeroReviews} 🤨</SectionHeading>
						</div>
					</SectionHeader>
				</Section>
			)}
		</div>
	);
};
