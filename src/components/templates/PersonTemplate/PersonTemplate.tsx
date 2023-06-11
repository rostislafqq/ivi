/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';

import { useFilmCount } from '@/app/hooks';

import { Button, Heading, Section, SectionHeader, SectionHeading, Text } from '@/components/atoms';

import { FilmsSlider } from '@/components/molecules';

import styles from './PersonTemplate.module.scss';

import { PersonTemplateProps } from './PersonTemplate.type';

export const PersonTemplate: React.FC<PersonTemplateProps> = ({
	photo = '',
	nameRus,
	nameEng,
	mainFilms = [],
	filmographyFilms = [],
	roles,
	changeRole = () => {},
	filmsCount = 0,
}) => {
	const filmCount = useFilmCount(filmsCount);
	const [active, setActive] = useState(0);
	const [showCount, setShowCount] = useState(10);
	return (
		<div className={`container ${styles.person} `}>
			<Image className={styles.person__photo} alt={nameEng} src={photo} width={120} height={120} />
			<Heading className={`${styles[`person__name--big`]}`} tag="h1">
				{nameRus}
			</Heading>
			<Text className={styles.person__name} tag="span">
				{nameEng}
			</Text>
			<Section id="mainfPersonFilms">
				<SectionHeader>
					<SectionHeading tag="h2">Главные фильмы</SectionHeading>
				</SectionHeader>
				<FilmsSlider className={styles.person__mainFilms} films={mainFilms} />
			</Section>
			<Section id="filmografFull">
				<SectionHeader>
					<SectionHeading tag="h2">
						Полная фильмография <Text tag="span">{filmCount}</Text>
					</SectionHeading>
				</SectionHeader>
				<div className={styles.person__roles}>
					{roles.map((val, index) => (
						<div
							key={val}
							className={
								active === index
									? `${styles.person__roleContainer} ${styles['person__roleContainer--active']}`
									: styles.person__roleContainer
							}
							onClick={() => {
								setActive(index);
								changeRole(val);
							}}
						>
							<Text className={styles.person__role} tag="span">
								{val}
							</Text>
						</div>
					))}
				</div>
				<div>
					{filmographyFilms.slice(0, showCount).map((val) => (
						<Link href={`/watch/${val.filmId}`} className={styles.person__fullFilms} key={val.filmId}>
							<div className={styles.person__fullFilms__info}>
								<Image width={80} height={122} alt={val.filmName} src={val.filmImg} />
								<div>
									<div className={styles.person__fullFilms__infoText}>
										<Text className={`${styles['person__fullFilms__info--white']}`} tag="p">
											{val.year}
										</Text>
										<Text className={`${styles['person__fullFilms__info--white']}`} tag="p">
											{val.filmName}
										</Text>
										<Text className={`${styles['person__fullFilms__info--normal']}`} tag="p">
											Рейтинг Иви: {val.rating}
										</Text>
									</div>
									<div>
										<Button
											className={styles.person__btn__adaptive}
											size="normal"
											type="button"
											variant="secondary"
										>
											Смотреть
										</Button>
									</div>
								</div>
							</div>
							<div className={styles.person__btn}>
								<Button size="normal" type="button" variant="secondary">
									Смотреть
								</Button>
							</div>
						</Link>
					))}
					{filmographyFilms.length > 10 ? (
						<Button
							onClick={() => {
								setShowCount(filmographyFilms.length);
							}}
							className={`${showCount > 10 ? styles['person__showBtn--hide'] : styles.person__showBtn}`}
							variant="secondary"
							size="normal"
						>
							Показать все
						</Button>
					) : (
						''
					)}
				</div>
			</Section>
		</div>
	);
};
