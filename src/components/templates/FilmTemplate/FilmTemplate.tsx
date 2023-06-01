import React from 'react';

import { FilmInfoSectionProps } from '@/components/organisms/FilmInfoSection/FilmInfoSection.types';

import { FilmTemplateHeader } from './FilmTemplateHeader/FilmTemplateHeader';
import { FilmTemplateHeaderProps } from './FilmTemplateHeader/FilmTemplateHeader.types';
import { FilmTemplateMainContent } from './FilmTemplateMainContent/FilmTemplateMainContent';
import { FilmTemplateUnderside } from './FilmTemplateUnderside/FilmTemplateUnderside';

export const FilmTemplate: React.FC<FilmTemplateHeaderProps & FilmInfoSectionProps> = ({
	badgeContent,
	badgeColor,
	filmType,
	filmGenre,
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
	films = '',
	creatorsCards,
	filmPersonHref,
}) => (
	<div>
		<FilmTemplateHeader
			badgeContent={badgeContent}
			badgeColor={badgeColor}
			filmType={filmType}
			filmGenre={filmGenre}
		/>
		<FilmTemplateMainContent
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
		<FilmTemplateUnderside
			filmPersonHref={filmPersonHref}
			creatorsCards={creatorsCards}
			filmName={heading}
			filmType={'12'}
			films={films}
		/>
	</div>
);
