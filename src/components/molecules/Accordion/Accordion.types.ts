import { ReactNode } from 'react';

export interface AccordionProps {
	children: ReactNode;
	length: number;
	buttonValues: string[];
	buttonClass?: string;
}
