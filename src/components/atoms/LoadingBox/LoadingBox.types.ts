import { HTMLAttributes } from 'react';

export interface LoadingBoxProps extends HTMLAttributes<HTMLDivElement> {
	width: string;
	height: string;
	rounded: 'small' | 'normal';
	className?: string;
}
