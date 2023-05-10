export type FilmStatusType = 'free' | 'subscribe' | 'buy';

export interface FilmStatusProps {
	status: FilmStatusType;
	className?: string;
}
