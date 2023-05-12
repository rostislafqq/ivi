import { HTMLAttributes } from 'react';

export interface LoadingBoxProps extends HTMLAttributes<HTMLDivElement> {
	rounded: 'small' | 'normal';
	className?: string;
}
