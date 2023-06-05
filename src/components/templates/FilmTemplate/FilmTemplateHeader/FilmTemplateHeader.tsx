import React from 'react';

import { Badge } from '@/components/atoms';
import { Breadcrumb } from '@/components/molecules/Breadcrumb/Breadcrumb';

import styles from './FilmTemplateHeader.module.scss';

import { FilmTemplateHeaderProps } from './FilmTemplateHeader.types';

export const FilmTemplateHeader: React.FC<FilmTemplateHeaderProps> = ({
	badgeContent,
	badgeColor,
	filmType,
	filmGenre,
}) => (
	<div className={`${styles.FilmTemplateHeader} container`}>
		<Breadcrumb
			className={styles.FilmTemplateHeader__bread}
			items={[
				{
					href: '/films',
					label: filmType === 'FILM' ? 'Фильм' : 'Сериал',
				},
				{
					active: true,
					href: '/films/foreign',
					label: filmGenre,
				},
			]}
			variant="modern"
		/>
		<Badge bg={badgeColor} size="normal">
			{badgeContent}
		</Badge>
	</div>
);
