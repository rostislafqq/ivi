import Link from 'next/link';

import React, { useEffect, useState } from 'react';

import { useResizeWindow } from '@/app/hooks';

import { Section, SectionHeader, SectionHeading } from '@/components/atoms';
import { CreatorsCard, FilmsSlider } from '@/components/molecules';

import styles from './FilmTemplateUnderside.module.scss';
import { FilmTemplateUndersideProps } from './FilmTemplateUnderside.type';

export const FilmTemplateUnderside: React.FC<FilmTemplateUndersideProps> = ({
	filmType,
	films,
	filmName,
	creatorsCards,
	filmPersonHref = '',
}) => {
	const [widthWindow] = useResizeWindow();
	const [creatorsCount, setCreatorsCount] = useState(40);
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
			<Section id="toWatchCont">
				<SectionHeader>
					<div className="container">
						<SectionHeading tag="h2">
							С {filmType === 'FILM' ? 'фильмом' : 'сериалом'} «{filmName}» смотрят
						</SectionHeading>
					</div>
				</SectionHeader>
				<FilmsSlider films={films} />
			</Section>
			<Section className="container" id="toWatchCont">
				<SectionHeader>
					<SectionHeading underline tag="h2">
						Актёры и создатели
					</SectionHeading>
				</SectionHeader>
				<div className={styles.FilmTemplateUnderside__creatorsContainer}>
					{creatorsCards.slice(0, creatorsCount).map((val) => (
						<CreatorsCard
							key={val.href}
							href={val.href}
							name={val.name}
							surname={val.surname}
							type="circle"
							size="normal"
						/>
					))}
					<Link href={`${filmPersonHref}/person`} className={styles.FilmTemplateUnderside__creatorsMore}>
						Еще
					</Link>
				</div>
			</Section>
		</div>
	);
};
