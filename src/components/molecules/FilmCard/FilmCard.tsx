import React from 'react';

import type { FilmCardProps } from './FilmCard.types';

import { FilmCardLoaded } from './FilmCardLoaded/FilmCardLoaded';
import { FilmCardLoading } from './FilmCardLoading/FilmCardLoading';

export const FilmCard: React.FC<FilmCardProps> = ({ className, film, loading, ...props }) => {
	if (loading) {
		return <FilmCardLoading className={className} {...props} />;
	}
	return <FilmCardLoaded film={film} className={className} {...props} />;
};
