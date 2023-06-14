import { ReactNode } from 'react';

export interface LayoutProps {
	title: string;
	description: string;
	children: ReactNode;
	headerSeparator?: boolean;
}
