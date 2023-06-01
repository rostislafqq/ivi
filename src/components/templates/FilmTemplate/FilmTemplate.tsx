import React from 'react';

<<<<<<< HEAD
import { FilmInfoSectionProps } from '@/components/organisms/FilmInfoSection/FilmInfoSection.types';
=======
import { FilmInfoSectionProps } from '@/components/orgamisms/FilmInfoSection/FilmInfoSection.types';
>>>>>>> e6e188af8e82334ee5cc62b34f5a4f5a36e27dc2

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
<<<<<<< HEAD
	films = '',
	creatorsCards,
	filmPersonHref,
=======
>>>>>>> e6e188af8e82334ee5cc62b34f5a4f5a36e27dc2
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
<<<<<<< HEAD
		<FilmTemplateUnderside
			filmPersonHref={filmPersonHref}
			creatorsCards={creatorsCards}
			filmName={heading}
			filmType={'12'}
			films={films}
		/>
=======
		<FilmTemplateUnderside />
>>>>>>> e6e188af8e82334ee5cc62b34f5a4f5a36e27dc2
	</div>
);
