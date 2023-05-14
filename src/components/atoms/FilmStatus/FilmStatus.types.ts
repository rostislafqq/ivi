import { HTMLAttributes } from 'react';

export type FilmStatusType = 'free' | 'subscribe' | 'buy';

export interface FilmStatusProps extends HTMLAttributes<HTMLDivElement> {
	status: FilmStatusType;
	className?: string;
}
