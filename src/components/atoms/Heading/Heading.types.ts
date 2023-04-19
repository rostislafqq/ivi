import { ReactNode } from 'react';

export interface HeadingProps {
	children: ReactNode;
	headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
	size: 'tiny' | 'small' | 'medium' | 'large' | 'huge';
	black?: boolean;
	center?: boolean;
}
