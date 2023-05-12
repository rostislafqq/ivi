import React from 'react';

import type { FilmCardProps } from './FilmCard.types';

import { FilmCardLoaded } from './FilmCardLoaded/FilmCardLoaded';
import { FilmCardLoading } from './FilmCardLoading/FilmCardLoading';

export const FilmCard: React.FC<FilmCardProps> = ({ className, name, preview, status, href, loading, ...props }) => {
	if (loading) {
		return <FilmCardLoading className={className} {...props} />;
	}
	return (
		<FilmCardLoaded className={className} name={name} preview={preview} status={status} href={href} {...props} />
	);
};
