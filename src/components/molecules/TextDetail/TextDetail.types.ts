import { ReactNode } from 'react';

export interface TextDetailProps {
	className?: string;
	showContent: ReactNode[];
	staticContent: ReactNode[];
	length: number;
	buttonValues: string[];
}
