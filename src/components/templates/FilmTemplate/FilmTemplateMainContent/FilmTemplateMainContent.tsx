/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import volume from '@/assets/icons/volume.svg';

import { Heading, Icon, ListItem, LoadingBox, Text } from '@/components/atoms';

import { List } from '@/components/molecules';

import { FilmInfoSection } from '@/components/organisms';

import { FilmInfoSectionProps } from '@/components/organisms/FilmInfoSection/FilmInfoSection.types';

import styles from './FilmTemplateMainContent.module.scss';

export const FilmTemplateMainContent: React.FC<FilmInfoSectionProps> = ({
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
}) => (
	<div>
		<div className={styles.adaptiveContent}>
			<Heading className={styles.adaptiveContent__heading} tag="h1">
				{heading}
			</Heading>
			<div className={styles.adaptiveContent__commonContainer}>
				<Text className={styles.adaptiveContent__commonContainer__seasonIntro} tag="span">
					{year}
				</Text>
				<Text className={styles.adaptiveContent__commonContainer__seasonIntro} tag="span">
					{duration}
				</Text>
				<Text className={styles.adaptiveContent__commonContainer__seasonIntro} tag="span">
					{yearOld}+
				</Text>
			</div>
			<div className={styles.adaptiveContent__commonContainer}>
				<List className={styles.adaptiveContent__commonContainer} tag="ul">
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
			<div className={styles.adaptiveContent__commonContainer}>
				<List
					className={`${styles.adaptiveContent__commonContainer} ${styles.adaptiveContent__commonContainer__filmOptions}`}
					tag="ul"
				>
					<ListItem>
						<Text tag="p">{badges[0]}</Text>
					</ListItem>
					<ListItem className={styles.adaptiveContent__volume}>
						<Icon icon={volume} width={15} />
					</ListItem>
					<div className={styles.adaptiveContent__commonContainer__lang}>
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
		</div>
		<div className={styles.FilmTemplateMainContent}>
			<LoadingBox className={styles.FilmTemplateMainContent__film} rounded="small" />
			<FilmInfoSection
				badges={badges}
				filmParams={filmParams}
				year={year}
				duration={duration}
				yearOld={yearOld}
				heading={heading}
				langs={langs}
				rating={rating}
				actors={actors}
				btnValues={btnValues}
				accordionText={accordionText}
				languages={languages}
				assessment={assessment}
				extra={extra}
			/>
		</div>
	</div>
);
