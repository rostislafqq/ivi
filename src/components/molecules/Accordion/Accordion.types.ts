import { ReactNode } from 'react';

export interface AccordionProps {
	content: ReactNode[];
	length: number;
	buttonValues: string[];
	buttonClass?: string;
}
