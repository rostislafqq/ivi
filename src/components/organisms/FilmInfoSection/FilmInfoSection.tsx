/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import cn from 'classnames';

import React from 'react';

import { translation } from '@/../public/locales/translation';

import volume from '@/assets/icons/volume.svg';

import { Heading, Icon, ListItem, Text } from '@/components/atoms';
import { Accordion, FilmExtraInfo, List, Rating } from '@/components/molecules';
import { CreatorsCard } from '@/components/molecules/CreatorsCard/CreatorsCard';

import styles from './FilmInfoSection.module.scss';
import { FilmInfoSectionProps } from './FilmInfoSection.types';

export const FilmInfoSection: React.FC<FilmInfoSectionProps> = ({
	badges,
	filmParams,
	year,
	duration,
	yearOld,
	heading,
	langs,
	rating,
	actors,
	btnValues,
	accordionText,
	languages,
	assessment,
	extra,
	lang = 'ru',
}) => (
	<div className={styles.FilmInfoSection}>
		<Heading className={styles.FilmInfoSection__heading} tag="h1">
			{heading}
		</Heading>
		<div className={styles.FilmInfoSection__commonContainer}>
			<Text className={styles.FilmInfoSection__commonContainer__seasonIntro} tag="span">
				{year}
			</Text>
			<Text className={styles.FilmInfoSection__commonContainer__seasonIntro} tag="span">
				{duration}
			</Text>
			<Text className={styles.FilmInfoSection__commonContainer__seasonIntro} tag="span">
				{yearOld}+
			</Text>
		</div>
		<div className={styles.FilmInfoSection__commonContainer}>
			<List className={styles.FilmInfoSection__commonContainer} tag="ul">
				{filmParams.map((val, index) =>
					index !== 0 ? (
						<ListItem key={val} type="square">
							{val}
						</ListItem>
					) : (
						<ListItem key={val}>{val}</ListItem>
					),
				)}
			</List>
		</div>
		<div className={styles.FilmInfoSection__commonContainer}>
			<List
				className={`${styles.FilmInfoSection__commonContainer} ${styles.FilmInfoSection__commonContainer__filmOptions}`}
				tag="ul"
			>
				<ListItem>
					<Text tag="p">{badges[0]}</Text>
				</ListItem>
				<ListItem className={styles.FilmInfoSection__volume}>
					<Icon icon={volume} width={15} />
				</ListItem>
				<div className={styles.FilmInfoSection__commonContainer__lang}>
					{langs.map((val, index) =>
						index !== 0 ? (
							<ListItem key={val} type="square">
								{val}
							</ListItem>
						) : (
							<ListItem key={val}>{val}</ListItem>
						),
					)}
				</div>
			</List>
		</div>
		<div>
			<List tag="ul" className={styles.FilmInfoSection__creators}>
				<div>
					<Rating className={styles.FilmInfoSection__RatingColor} size="small" rating={rating} />
					<Text className={styles.FilmInfoSection__ratingText} tag="p">
						{translation[lang].film.rating} <br /> {translation[lang].film.Ivi}
					</Text>
				</div>

				{actors.map((val) => (
					<ListItem key={val.href}>
						<CreatorsCard
							type="square"
							size="small"
							href={val.href}
							image={val.image}
							name={val.name}
							surname={val.surname}
						/>
					</ListItem>
				))}
			</List>
		</div>
		<div>
			<Accordion
				buttonClass={styles.FilmInfoSection__accordion__btn}
				className={styles.FilmInfoSection__accordion}
				length={4}
				buttonValues={btnValues}
			>
				{accordionText}
				<FilmExtraInfo
					lang={lang}
					className={styles.FilmInfoSection__accordion__extra}
					badges={badges}
					langs={languages}
				/>
			</Accordion>
		</div>
		<Rating lang={lang} assessment={assessment} extra={extra} rating={rating} size="large" />
	</div>
);
